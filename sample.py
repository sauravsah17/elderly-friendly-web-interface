from flask import Flask, render_template, request, jsonify
from nltk.stem.lancaster import LancasterStemmer
from nltk.tokenize import word_tokenize
import numpy as np
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense, Dropout, Embedding, LSTM
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import random
import json
import pickle
import logging

app = Flask(__name__)

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load data
with open("therapist-response.json") as file:
    data = json.load(file)

# Load preprocessed data
with open("data.pickle", "rb") as f:
    words, labels, training, output = pickle.load(f)

# Initialize accuracy variable
model_accuracy = None

# Function to create a bag of words from input
def bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]
    s_words = word_tokenize(s)
    s_words = [LancasterStemmer().stem(word.lower()) for word in s_words]

    for se in s_words:
        for i, w in enumerate(words):
            if w == se:
                bag[i] = 1

    return np.array(bag)

# Function to handle the dialog
def handle_dialog(user_input, dialog_context, model):
    results = model.predict(np.array([bag_of_words(user_input, words)]))
    results_index = np.argmax(results)
    tag = labels[results_index]

    for tg in data["intents"]:
        if tg['tag'] == tag:
            responses = tg['responses']
            break
    else:
        responses = ["I'm sorry, I don't understand that."]

    dialog_context['last_intent'] = tag

    if dialog_context['last_intent'] == 'greeting':
        responses = responses[1:]

    return random.choice(responses)

# Chat function with dialog management
def chat(inp, dialog_context, model):
    # Check if there's a context from the previous turn
    if 'last_intent' in dialog_context:
        # Implement logic to handle context-specific responses or actions
        response = handle_dialog(inp, dialog_context, model)
    else:
        response = handle_dialog(inp, dialog_context, model)

    return response


def train_or_load_model():
    try:
        # Try to load the existing model
        model = load_model("model_complex.keras")
        _, model_accuracy = model.evaluate(training, output)
        logger.info("Model loaded successfully.")
        logger.info(f"Model Accuracy: {model_accuracy}")

    except (FileNotFoundError, OSError):
        logger.info("Model not found. Training the model...")

        model = Sequential()
        model.add(Embedding(len(words), 50, input_length=len(training[0])))
        model.add(LSTM(100))
        model.add(Dense(64, activation='relu'))
        model.add(Dropout(0.5))
        model.add(Dense(64, activation='relu'))
        model.add(Dropout(0.5))
        model.add(Dense(len(output[0]), activation='softmax'))

        model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

        # Increase the number of epochs
        epochs = 20  # Adjust this number as needed
        model.fit(training, output, epochs=epochs, batch_size=8, verbose=1)

        _, model_accuracy = model.evaluate(training, output)
        logger.info(f"Model Accuracy: {model_accuracy}")

        # Save the trained model
        model.save("model_complex.keras")

    return model, model_accuracy

# Initialize dialog context
dialog_context = {}

model, model_accuracy = train_or_load_model()

@app.route("/")
def index():
    return render_template("chatbot.html", model_accuracy=model_accuracy)

@app.route("/chat", methods=["POST"])
def chat_endpoint():
    user_input = request.form["user_input"]
    bot_response = chat(user_input, dialog_context, model)
    return jsonify({"bot_response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)

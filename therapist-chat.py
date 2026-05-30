from nltk.stem.lancaster import LancasterStemmer
from nltk.tokenize import word_tokenize
import numpy as np
from tensorflow.keras.models import load_model
import random
import json
import pickle
import nltk

# Load data
with open("therapist-response.json") as file:
    data = json.load(file)

# Load preprocessed data
with open("data.pickle", "rb") as f:
    words, labels, training, output = pickle.load(f)

# Load or train the model
try:
    model = load_model("model.keras")
except:
    print("Model not found. Training the model...")
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.layers import Dense

    model = Sequential()
    model.add(Dense(8, input_shape=(len(training[0]),), activation='relu'))
    model.add(Dense(8, activation='relu'))
    model.add(Dense(len(output[0]), activation='softmax'))
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    model.fit(training, output, epochs=500, batch_size=4, verbose=1)
    model.save("model.keras")

# Function to create a bag of words from input
def bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]
    s_words = word_tokenize(s)  # Change here
    s_words = [LancasterStemmer().stem(word.lower()) for word in s_words]

    for se in s_words:
        for i, w in enumerate(words):
            if w == se:
                bag[i] = 1

    return np.array(bag)

# Chat function
def chat(inp):
    results = model.predict(np.array([bag_of_words(inp, words)]))
    results_index = np.argmax(results)
    tag = labels[results_index]

    for tg in data["intents"]:
        if tg['tag'] == tag:
            responses = tg['responses']

    return random.choice(responses)

from flask import Flask, render_template, request

app = Flask(__name__)

# Load the chatbot model
with open("data.pickle", "rb") as f:
    words, labels, training, output = pickle.load(f)

model = load_model("model.keras")

# Define a route to handle chatbot requests
@app.route("/chat", methods=["POST"])
def chat_request():
    user_input = request.form["user_input"]
    bot_response = chat(user_input)

    return {"bot_response": bot_response}

@app.route("/", methods=["GET", "POST"])
def chatbot():
    if request.method == "GET":
        return render_template("chatbot.html")
    elif request.method == "POST":
        user_input = request.form["user_input"]
        bot_response = chat(user_input)

        return render_template("chatbot.html", bot_response=bot_response)

# Start the Flask server
if __name__ == "__main__":
    app.run(debug=True)

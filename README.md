# Elderly-Friendly Interface

An **HCI (Human–Computer Interaction)** college project: a web interface designed
for elderly users with large, accessible UI elements, plus an AI therapist chatbot
built on a locally-trained model.

## Features

| Feature | Entry point | Description |
|---------|-------------|-------------|
| **Home** | `index.html` | Accessible landing page |
| **Dictionary** | `dic_index.html` | Word lookup tool |
| **Weather** | `wea_index.html` | Weather information |
| **Newspaper** | `newspaper.html` | News reader |
| **Therapist Chatbot** | `therapist-chat.py` | Conversational support bot (local NLTK + Keras model) |

## Tech Stack

- **Frontend:** HTML, CSS / SCSS, JavaScript (Bootstrap, jQuery)
- **Chatbot / ML:** Python, NLTK, Keras / TensorFlow
- **Model assets:** `model.keras`, `model_complex.keras`, `data.pickle`, `therapist-response.json`

## Running the website

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Running the chatbot

```bash
pip install nltk tensorflow numpy   # exact dependencies may vary
python3 therapist-chat.py
```

## Project structure

```
.
├── index.html              # Home page
├── dic_*, wea_*, newspaper.*  # Feature pages, scripts and styles
├── therapist-chat.py       # Chatbot (NLTK + Keras)
├── sample.py               # Supporting script
├── css/  scss/             # Stylesheets
├── js/                     # Scripts (incl. vendor libraries)
├── images/  fonts/         # Static assets
└── templates/              # Chatbot template
```

---

Created as a college HCI project.

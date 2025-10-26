🍄 Mushroom Safety Predictor

A machine learning-powered web application that predicts whether a mushroom is poisonous or edible based on its properties. This tool helps users quickly assess mushroom safety using an easy-to-use interface.

🧠 Features

- Predict Mushroom Safety: Enter mushroom characteristics and get an instant prediction (poisonous or edible).
- User-Friendly Interface: Simple form for inputting mushroom properties.
- Machine Learning Model: Built using a pre-trained ML model for accurate predictions.
- Backend with Flask: Handles user input, scales features, and predicts outcomes.
- CORS Enabled: Frontend can safely communicate with backend.

⚙️ Technologies Used

- Frontend: React (Vite)
- Backend: Python Flask
- Machine Learning: scikit-learn (RandomForestClassifier or similar)
- Data Preprocessing: StandardScaler
- Model Serialization: joblib
- CORS Handling: Flask-CORS
  
📝 Usage

1. Enter mushroom features in the input form:
- Cap shape
- Cap surface
- Gill attachment
- Gill size
- Veil color
- Spore print color
- Population
- Habitat

2. Click Predict to see whether the mushroom is poisonous or edible.

💾 File Structure
Mushroom_Safety_Predictor/
│
├─ mlModel/
│   ├─ index.py          # Flask backend
│   ├─ mushrooms_model_pickle   # Trained ML model
│   ├─ scaler_object     # Scaler used for preprocessing
│   └─ requirements.txt
│
├─ frontend/            # React frontend code
│   ├─ src/
│   └─ package.json
│
└─ README.md

Output:
<img src='https://github.com/Shivanand-0/Mushroom_Safety_Predictor/blob/main/resource/Screenshot%202025-10-27%20043031.png'>
<img src='https://github.com/Shivanand-0/Mushroom_Safety_Predictor/blob/main/resource/Screenshot%202025-10-27%20043002.png'>
<img src='https://github.com/Shivanand-0/Mushroom_Safety_Predictor/blob/main/resource/Screenshot%202025-10-27%20043110.png'>


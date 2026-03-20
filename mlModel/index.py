import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from joblib import load
import numpy as np 

app = Flask(__name__)
CORS(app)

model = load('./mushrooms_model_pickle')
scaler = load('./scaler_object')

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    try:
        data = request.get_json()
        features_name = ['cap-shape', 'cap-surface','gill-attachment', 'gill-size','veil-color', 'spore-print-color', 'population', 'habitat']
        features = [float(data[feature]) for feature in features_name]
        features = np.array(features).reshape(1, -1)
        scaled_features = scaler.transform(features)
        prediction = model.predict(scaled_features
        return jsonify({'prediction': [int(prediction[0])]})
        
    except Exception as e:
        print("Backend Error:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

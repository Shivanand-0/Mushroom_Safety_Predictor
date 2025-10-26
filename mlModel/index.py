from flask import Flask,request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from joblib import load
import numpy as np 

app=Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://127.0.0.1:5173"}})
model=load('./mushrooms_model_pickle')
scaler = load('./scaler_object')

@app.route('/predict', methods=['POST'])
@cross_origin(origin='http://127.0.0.1:5173')
def predict():
    data= request.get_json()
    features_name=['cap-shape', 'cap-surface','gill-attachment', 'gill-size','veil-color', 'spore-print-color', 'population', 'habitat' ]
    features=[]
    for i,feature in enumerate(features_name):
        features.append(data[feature])
    features=np.array(features).reshape(1,-1)
    prediction=model.predict(features)
    return jsonify({'prediction':prediction.tolist()})


if __name__=='__main__':
    app.run(port=8000)
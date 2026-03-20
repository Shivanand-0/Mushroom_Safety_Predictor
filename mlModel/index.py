from flask import Flask,request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin
from joblib import load
import numpy as np 

app=Flask(__name__)
CORS(app)
model=load('./mushrooms_model_pickle')
scaler = load('./scaler_object')

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data= request.get_json()
    features_name=['cap-shape', 'cap-surface','gill-attachment', 'gill-size','veil-color', 'spore-print-color', 'population', 'habitat' ]
    features=[]
    for i,feature in enumerate(features_name):
        features.append(data[feature])
    features=np.array(features).reshape(1,-1)
    scaled_features = scaler.transform(features)
    prediction=model.predict(features)
    return jsonify({'prediction':prediction.tolist()})


if __name__=='__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

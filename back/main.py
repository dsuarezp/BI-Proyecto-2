import json
from DataModel import DataModel, DataModelList
from pandas import json_normalize
from joblib import load
from fastapi.encoders import jsonable_encoder
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
   return {"BI Proyecto 1 Entrega": "David Suarez - Javier Peniche - Sebastian Cabra"}

@app.post("/predict")
def make_predictions_decission_tree(data: DataModelList):
   data_t = convert_json_to_dataframe(data)
   data_t.columns = DataModel.columns()
   model = load("arbol.joblib")
   prediction = model.predict(data_t)
   list = prediction.tolist()
   json_predict = json.dumps(list)
   return {"Predict": json_predict}

def convert_json_to_dataframe(data):
    dict = jsonable_encoder(data)
    dataframe = json_normalize(dict['texts']) 
    return dataframe
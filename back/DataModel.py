from pydantic import BaseModel
from typing import List

# Clase DataModel
class DataModel(BaseModel):

    # Estas varibles permiten que la librería pydantic haga el parseo entre el Json recibido y el modelo declarado
    words_study: str
    words_condition: str
    

    # Esta función retorna los nombres de las columnas correspondientes con el modelo exportado en joblib
    def columns():
        return ["words_study", "words_condition"]


# Clase DataModelList
class DataModelList(BaseModel):

    texts: List[DataModel]
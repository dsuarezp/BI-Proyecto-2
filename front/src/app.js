import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from "./result";


function App() {
    const [datos, setDatos] = useState({
        study: '',
        condition: '',
    })
    const [resultado, setResultado] = useState("")
    // Funciones para el manejo de los datos del formulario
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.id] : event.target.value,
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        prediccionElegibilidad(datos);
    }
    // Funcion encargada para hacer las predicciones de elegibilidad de un paciente
    async function prediccionElegibilidad(datos) {
        var url = "http://127.0.0.1:8000/predict";
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
        }
        const info = JSON.stringify({ "texts": [{"words_study": datos.study, "words_condition": datos.condition}]});
        axios
            .post(url, info, {headers} )
            .then((resp)=> {
               console.log(resp)
               console.log(resp.data.Predict[1])
               setResultado(resp.data.Predict[1])
            })
            .catch((err)=> {
                console.log(err);
            }) 
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 card">
                    <div className="card-body">
                        <div className="card-title mb-3"><h2>Student Eligibility</h2></div>
                        <form onSubmit={enviarDatos}>
                        <div className="mb-3">
                            <label className="form-label">Study</label>
                            <input className="form-control" type="text" id="study" onChange={handleInputChange}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Condition</label>
                            <input className="form-control" type="text" id="condition" onChange={handleInputChange}></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div> 

            <div className="row mt-5">
                <Result resultadoElegibilidad={resultado}/>
            </div>
        </div>
    )
}

export default App;
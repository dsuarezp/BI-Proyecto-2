import React from "react";

// Funcion ResultAnalytic
function Result (props) {
    return (
        <div>
            {props.resultadoElegibilidad === "0" ? 
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center mt-3">
                        <span className="text-center"><b>The patient is eligible for cancer clinical trials</b></span> 
                    </div>
                </div> : props.resultadoElegibilidad === "1" ?
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center mt-3">
                        <span className="text-center"><b>The patient is NOT eligible for cancer clinical trials</b></span> 
                    </div>
                </div> : 
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center mt-3">
                        <span className="text-center"><b>Enter the study and patient condition and press the submit button.</b></span> 
                    </div>
                </div>
            }
        </div>
    )
}

// Exportar funcion ResultAnalytic para ser visible en otros archivos
export default Result;
import React from "react";
import "../App.css";
import "./Dogs.css";

function Dogs({ nombre, raza, edad, descripcion, imagen }) {
    return (
        <div className="dogs">
            <div className="dogsImgWrapper">
                <img
                    className="dogsImg mx-auto block object-contain"
                    src={imagen}
                    alt={nombre}
                />
            </div>

            <h3 className="dogsName">{nombre}</h3>
            <p className="dogsBreed">{raza}</p>
            <p className="dogsAge">{edad}</p>
            <p className="dogsDescription">{descripcion}</p>
        </div>
    );
}

export default Dogs;
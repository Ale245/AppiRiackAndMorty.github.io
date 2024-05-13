import React, { useState } from "react";
import ComponenteMsg from "./Componentes/ComponenteMsg";
import AgeCalculator from "./Componentes/AgeCalculator/AgeCalculator";
import RickAndMortyComponent from "./Componentes/RickAndMortyComponent"; // Importa el nuevo componente
 
 
import "./App.css";
 
function App() {
  const [isMsgModuleEnabled, setShowComponentMsg] = useState(false);
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState(false);
  const [isRickAndMortyModuleEnabled, setRickAndMortyModuleEnabled] = useState(false); // Nuevo estado para el módulo de Rick and Morty
 
 
  const toggleMsgModule = () => {
    setShowComponentMsg(!isMsgModuleEnabled);
  };
  const toggleAgeModule = () => {
    setAgeModuleEnabled(!isAgeModuleEnabled);
  };
  const toggleRickAndMortyModule = () => { // Nuevo método para activar/desactivar el módulo de Rick and Morty
    setRickAndMortyModuleEnabled(!isRickAndMortyModuleEnabled);
  };
 
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Hola mundo, bienvenidos a React</h1>
        <center>
          <button className="button" onClick={toggleMsgModule}>
            {isMsgModuleEnabled
              ? "Deshabilitar Módulo Mensaje"
              : "Habilitar Módulo Mensaje"}
          </button>
          <button className="button" onClick={toggleAgeModule}>
            {isAgeModuleEnabled
              ? "Deshabilitar Módulo Edad Canina"
              : "Habilitar Módulo Edad Canina"}
          </button>
          <button className="button" onClick={toggleRickAndMortyModule}> {/* Nuevo botón para activar/desactivar el módulo de Rick and Morty */}
        {isRickAndMortyModuleEnabled
          ? "Deshabilitar Módulo Rick and Morty"
          : "Habilitar Módulo Rick and Morty"}
      </button>
     
          {isRickAndMortyModuleEnabled && <RickAndMortyComponent />}
 
          {isAgeModuleEnabled && <AgeCalculator />}
 
          {isMsgModuleEnabled && <ComponenteMsg />}
        </center>
      </div>
    </div>
  );
}
 
export default App;
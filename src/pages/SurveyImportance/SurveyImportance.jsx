import { useEffect, useState } from "react";
import razonesData from "../../data/razones.json";  // Importando el JSON desde la carpeta src
import "./SurveyImportance.css";

const SurveyImportance = () => {
  const [razones, setRazones] = useState([]);

  useEffect(() => {
    // Asignar directamente los datos del archivo JSON importado
    setRazones(razonesData.razones);
    console.log("Razones cargadas:", razonesData.razones);
  }, []);

  return (
    <div className="container-inicio">
      <h2 className="survey-title">
        Razones para una encuesta
      </h2>
        <div className="survey-content">
          {razones.length > 0 ? (
            razones.map((razon, index) => <Razon key={index} {...razon} />)
          ) : (
            <p>Cargando razones...</p>
          )}
      </div>

    
    </div>
  );
};

export default SurveyImportance;

// Componente Razon
const Razon = ({ titulo, descripcion }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="razon"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="">{titulo}</h3>
      {isOpen && <p className="">{descripcion}</p>}
    </div>
  );
};

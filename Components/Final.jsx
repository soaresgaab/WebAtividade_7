import React from "react";

const Final = ({ register, errors }) => {
  return (
    <div className="final-container">
      {/* Progresso */}
      <div className="progress-bar">
        <span className="completed">✔ Contato › </span>
        <span className="current">✔ Empresa › </span>
        <span className="pending">✔ Projeto</span>
      </div>
      <div className="form-group">
        <label>Fomulario finalizado</label>
        <p>Agradecemos pelo envio da proposta!</p>
      </div>
    </div>
  );
};

export default Final;

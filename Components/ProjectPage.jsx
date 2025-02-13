import React from "react";

const ProjectPage = ({ register, errors }) => {
  return (
    <div className="project-container">
      <div className="progress-bar">
        <span className="completed">✔ Contato › </span>
        <span className="current">✔ Empresa › </span>
        <span className="pending">3 Projeto</span>
      </div>
      
      <div className="form-group">
        <label>Objetivos do Projeto</label>
        <input
          {...register("objetivo", { required: "Este campo é obrigatório" })}
          placeholder="Descreva quais os objetivos desse projeto"
        />
        {errors.objetivo && <span className="error">{errors.objetivo.message}</span>}
      </div>
    </div>
  );
};

export default ProjectPage;

import React from "react";

const ProjectPage = ({ register, errors }) => {
  return (
    <div style={{margin: "20px",
    }} className="project-container">
      <div style={{display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "500px",
      height: "auto",
      margin: "10px",
      alignItems: "center"
      }} className="progress-bar">
        <div style={{display:"flex", alignItems: "center"}}>
        <img style ={{ width: "30px",
          height: "auto",
          paddingRight: "8px"
        }} src="public/pronto.png" alt="" />
        <span className="completed">Contato</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div style={{display:"flex", alignItems: "center"}}>
        <img style ={{ width: "30px",
          height: "auto",
          paddingRight: "8px"
        }} src="public/pronto.png" alt="" />
        <span className="current">Empresa</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px", color:"white", background: "#633BBC", borderRadius: "50%", paddingInline: "6px"}}>3</span>   
        <span className="pending">Projeto</span>
        </div>
      </div>
      
      <div style = {{display: "flex",
        flexDirection: "column"
      }} className="form-group">
        <label>Objetivos do Projeto</label>
        <input style={{height: "200px",
           border: "solid",
           borderWidth: "1px",
           borderRadius: "5px",
           borderColor: "#E1E1E6"}}
          {...register("objetivo", { required: "Este campo é obrigatório" })}
          placeholder="Descreva quais os objetivos desse projeto"
        />
        {errors.objetivo && <span style={{color: "red"}} className="error">{errors.objetivo.message}</span>}
      </div>
    </div>
  );
};

export default ProjectPage;

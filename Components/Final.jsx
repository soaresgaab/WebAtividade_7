import React from "react";

const Final = ({ register, errors }) => {
  return (
    <div style={{margin: "20px",
    }} className="final-container">
      {/* Progresso */}
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
        <div style={{display:"flex", alignItems: "center"}}>
        <img style ={{ width: "30px",
          height: "auto",
          paddingRight: "8px"
        }} src="public/pronto.png" alt="" />
        <span className="pending">Projeto</span>
        </div>
      </div>
      <div style={{display: "flex", flexDirection: "column", height: "200px", justifyContent: "space-evenly"}} className="form-group">
        <label>Fomulario finalizado</label>
        <p>Agradecemos pelo envio da proposta!</p>
      </div>
    </div>
  );
};

export default Final;

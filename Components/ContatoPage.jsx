import React from "react";

const ContatoPage = ({ register, errors }) => {
  return (
    <div style={{margin: "20px",
      }} className="contato-container">
      {/* Progresso */}
      <div style={{display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "400px",
      margin: "10px"
      }} className="progress-bar">
        <div>
        <span style={{marginRight: "10px"}}>1</span>
        <span className="completed">Contato</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px"}}>2</span>
        <span className="current">Empresa</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px"}}>3</span>   
        <span className="pending">Projeto</span>
        </div>
      </div>
      <div style={{display: "flex",
        flexDirection: "column",
        height: "250px",
        justifyContent: "space-around"
      }}>
      <div style = {{display: "flex",
        flexDirection: "column"
      }}className="form-group">
        <label>Nome</label>
        <input style={{height: "40px"}}
          {...register("nome", { required: "Este campo é obrigatório" })}
          placeholder="Como prefere ser chamado"
        />
        {errors.nome && <span className="error">{errors.nome.message}</span>}
      </div>


      <div style = {{display: "flex",
        flexDirection: "column"
      }}className="form-group">
        <label>Telefone</label>
        <input style={{height: "40px"}}
          {...register("telefone", {required: "Este campo é obrigatório",
            pattern: { value: /^[0-9]+$/, message: "Apenas números são permitidos" },
          })}
          placeholder="Digite seu número de WhatsApp"
        />
          {errors.telefone && <span className="error">{errors.telefone.message}</span>}
      </div>


      <div style = {{display: "flex",
        flexDirection: "column"
      }} className="form-group">
        <label>E-mail</label>
        <input style={{height: "40px"}}
          {...register("email", { required: "Este campo é obrigatório" })}
          placeholder="Digite seu e-mail"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      </div>
    </div>
  );
};

export default ContatoPage;

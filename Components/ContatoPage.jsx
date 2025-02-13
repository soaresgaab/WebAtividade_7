import React from "react";

const ContatoPage = ({ register, errors }) => {
  return (
    <div style={{margin: "20px",
      }} className="contato-container">
      {/* Progresso */}
      <div style={{display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "500px",
      height: "auto",
      margin: "10px"
      }} className="progress-bar">
        <div>
        <span style={{marginRight: "10px", color:"white", background: "#633BBC", borderRadius: "50%", paddingInline: "5px"}}>1</span>
        <span className="completed">Contato</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px", color:"#8D8D99", background: "#E1E1E6", borderRadius: "50%", paddingInline: "6px"}}>2</span>
        <span className="current">Empresa</span>
        </div>
        <img style ={{ width: "10px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px", color:"#8D8D99", background: "#E1E1E6", borderRadius: "50%", paddingInline: "6px"}}>3</span>   
        <span className="pending">Projeto</span>
        </div>
      </div>
      <div style={{display: "flex",
        flexDirection: "column",
        height: "250px",
        justifyContent: "space-around",
        marginTop: "40px"
      }}>
      <div style = {{display: "flex",
        flexDirection: "column"
      }}className="form-group">
        <label style={{marginBottom: "8px"}}>Nome</label>
        <input style={{height: "40px", 
            border: "solid",
            borderWidth: "1px",
            borderRadius: "5px",
            borderColor: "#E1E1E6"}}
          {...register("nome", { required: "O campo acima é obrigatório" })}
          placeholder="Como prefere ser chamado"
        />
        {errors.nome && <span style={{color: "red"}} className="error">{errors.nome.message}</span>}
      </div>


      <div style = {{display: "flex",
        flexDirection: "column"
      }}className="form-group">
        <label style={{marginBottom: "8px"}}>Telefone</label>
        <input style={{height: "40px",  
          border: "solid",
          borderWidth: "1px",
          borderRadius: "5px",
          borderColor: "#E1E1E6"}}
          {...register("telefone", {required: "O campo acima é obrigatório",
            pattern: { value: /^[0-9]+$/, message: "Apenas números são permitidos" },
          })}
          placeholder="Digite seu número de WhatsApp"
        />
          {errors.telefone && <span style={{color: "red"}} className="error">{errors.telefone.message}</span>}
      </div>


      <div style = {{display: "flex",
        flexDirection: "column"
      }} className="form-group">
        <label style={{marginBottom: "8px"}}>E-mail</label>
        <input style={{height: "40px",
           border: "solid",
           borderWidth: "1px",
           borderRadius: "5px",
           borderColor: "#E1E1E6"
        }}
          {...register("email", { required: "O campo acima é obrigatório" })}
          placeholder="Digite seu e-mail"
        />
        {errors.email && <span style={{color: "red"}} className="error">{errors.email.message}</span>}
      </div>
      </div>
    </div>
  );
};

export default ContatoPage;

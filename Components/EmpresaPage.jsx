import React from "react";

const EmpresaPage = ({ register, errors }) => {
  return (
    <div style={{margin: "20px",
    }} className="empresa-container">
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
        <img style ={{ width: "20px",
          height: "auto"
        }} src="/public/OIP.png" alt="" />
        <div>
        <span style={{marginRight: "10px", color:"white", background: "#633BBC", borderRadius: "50%", paddingInline: "6px"}}>2</span>
        <span className="current">Empresa</span>
        </div>
        <img style ={{ width: "20px",
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
      }} className="form-group">
        <label style={{marginBottom: "8px"}}>Nome da Empresa</label>
        <input style={{height: "40px",
           border: "solid",
           borderWidth: "1px",
           borderRadius: "5px",
           borderColor: "#E1E1E6"}}
          {...register("nomeEmp", { required: "O campo acima é obrigatório" })}
          placeholder="Qual é o nome da empresa"
        />
        {errors.nomeEmp && <span style={{color: "red"}} className="error">{errors.nomeEmp.message}</span>}
      </div>


      <div style = {{display: "flex",
        flexDirection: "column"
      }} className="form-group">
        <label style={{marginBottom: "8px"}}>Número de Funcionários</label>
        <input style={{height: "40px",
           border: "solid",
           borderWidth: "1px",
           borderRadius: "5px",
           borderColor: "#E1E1E6"}}
          {...register("numFun", {required: "O campo acima é obrigatório",
            pattern: { value: /^[0-9]+$/, message: "Apenas números são permitidos" },
          })}
          placeholder="Digite o número de colaboradores"
        />
          {errors.numFun && <span style={{color: "red"}} className="error">{errors.numFun.message}</span>}
      </div>


      <div  style = {{display: "flex",
        flexDirection: "column"
      }} className="form-group">
        <label style={{marginBottom: "8px"}}>Sobre seu negócio</label>
        <input style={{height: "40px",
           border: "solid",
           borderWidth: "1px",
           borderRadius: "5px",
           borderColor: "#E1E1E6"}}
          {...register("negocio", { required: "O campo acima é obrigatório" })}
          placeholder="Fale um pouco sobre seus produtos e serviços"
        />
        {errors.negocio && <span style={{color: "red"}} className="error">{errors.negocio.message}</span>}
      </div>
    </div>
    </div>
  );
};

export default EmpresaPage;

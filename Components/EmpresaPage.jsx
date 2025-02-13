import React from "react";

const EmpresaPage = ({ register, errors }) => {
  return (
    <div className="empresa-container">
      {/* Progresso */}
      <div className="progress-bar">
        <span className="completed">✔ Contato › </span>
        <span className="current">2 Empresa › </span>
        <span className="pending">3 Projeto › </span>
      </div>
      <div className="form-group">
        <label>Nome da Empresa</label>
        <input
          {...register("nomeEmp", { required: "Este campo é obrigatório" })}
          placeholder="Qual é o nome da empresa"
        />
        {errors.nomeEmp && <span className="error">{errors.nomeEmp.message}</span>}
      </div>


      <div className="form-group">
        <label>Número de Funcionários</label>
        <input
          {...register("numFun", {required: "Este campo é obrigatório",
            pattern: { value: /^[0-9]+$/, message: "Apenas números são permitidos" },
          })}
          placeholder="Digite o número de colaboradores"
        />
          {errors.numFun && <span className="error">{errors.numFun.message}</span>}
      </div>


      <div className="form-group">
        <label>Sobre seu negócio</label>
        <input
          {...register("negocio", { required: "Este campo é obrigatório" })}
          placeholder="Fale um pouco sobre seus produtos e serviços"
        />
        {errors.negocio && <span className="error">{errors.negocio.message}</span>}
      </div>
    </div>
  );
};

export default EmpresaPage;

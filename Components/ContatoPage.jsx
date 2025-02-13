import React from "react";

const ContatoPage = ({ register, errors }) => {
  return (
    <div className="contato-container">
      {/* Progresso */}
      <div className="progress-bar">
        <span className="completed">1 Contato › </span>
        <span className="current">2 Empresa › </span>   
        <span className="pending">3 Projeto</span>
      </div>
      <div className="form-group">
        <label>Nome</label>
        <input
          {...register("nome", { required: "Este campo é obrigatório" })}
          placeholder="Como prefere ser chamado"
        />
        {errors.nome && <span className="error">{errors.nome.message}</span>}
      </div>


      <div className="form-group">
        <label>Telefone</label>
        <input
          {...register("telefone", {required: "Este campo é obrigatório",
            pattern: { value: /^[0-9]+$/, message: "Apenas números são permitidos" },
          })}
          placeholder="Digite seu número de WhatsApp"
        />
          {errors.telefone && <span className="error">{errors.telefone.message}</span>}
      </div>


      <div className="form-group">
        <label>E-mail</label>
        <input
          {...register("email", { required: "Este campo é obrigatório" })}
          placeholder="Digite seu e-mail"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
    </div>
  );
};

export default ContatoPage;

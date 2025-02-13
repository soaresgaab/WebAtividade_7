import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContatoPage from "../Components/ContatoPage.jsx";
import EmpresaPage from "../Components/EmpresaPage.jsx";
import ProjectPage from "../Components/ProjectPage.jsx";
import Final from "../Components/Final.jsx"; 

const Multipages = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();
  const [currentPage, setCurrentPage] = useState(0); 
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const pages = [
    <ContatoPage register={register} errors={errors} />,
    <EmpresaPage register={register} errors={errors} />,
    <ProjectPage register={register} errors={errors} />,
    <Final register={register} errors={errors} />, 
  ];

  const onSubmit = (data) => {
    console.log(data); 
    setIsSubmitted(true); 
    setCurrentPage(pages.length - 1);
  };

  const handleNext = async () => {
    
    const isValid = await trigger();
    if (isValid) {
      setCurrentPage((prev) => prev + 1); 
    }
  };

  const handleBack = () => {
    setCurrentPage((prev) => prev - 1); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {pages[currentPage]}

      
      <div className="button-group">
        {currentPage > 0 && currentPage < pages.length - 1 && (
          <button type="button" onClick={handleBack} className="btn-back">
            VOLTAR
          </button>
        )}
        {currentPage < pages.length - 2 ? (
          <button type="button" onClick={handleNext} className="btn-next">
            PRÓXIMO
          </button>
        ) : currentPage === pages.length - 2 ? (
          <button type="submit" className="btn-submit">
            ENVIAR PROPOSTA
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default Multipages;
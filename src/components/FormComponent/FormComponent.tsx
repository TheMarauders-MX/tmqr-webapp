import React from "react";
import SuccesfulCard from "@components/SuccesfulCard/SuccesfulCard";
import ClientForm from "@components/ClientForm/ClientForm";
import "./styles.scss";

function FormComponent() {
  return (
    <div className="form__component">
      <div className="center header">
        <h2>Regístrate.</h2>
        <h5>Conoce todas nuestras promociones.</h5>
      </div>
      <img src={"/images/form.png"} />
      {/* <ClientForm /> */}
      {/* TODO: Agregar información */}
      <SuccesfulCard />
    </div>
  );
}

export default FormComponent;

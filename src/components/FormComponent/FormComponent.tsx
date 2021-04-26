import React from "react";
import SuccesfulCard from "@components/SuccesfulCard/SuccesfulCard";
import ClientForm from "@components/ClientForm/ClientForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

import "./styles.scss";

function FormComponent() {
  const userData = useSelector((state: RootState) => state.User.Info.data);
  console.log(userData);

  return (
    <div className="form__component">
      <div className="center header">
        <h2>Regístrate.</h2>
        <h5>Conoce todas nuestras promociones.</h5>
      </div>
      <img src={"/images/form.png"} />
      {userData.email !== "" ? <SuccesfulCard /> : <ClientForm />}
    </div>
  );
}

export default FormComponent;

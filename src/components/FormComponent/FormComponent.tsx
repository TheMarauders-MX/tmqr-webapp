import ClientForm from "@components/ClientForm/ClientForm";
import "./styles.scss";

function FormComponent() {
  return (
    <div className="form__component">
      <div className="center header">
        <h2>Regístrate.</h2>
        <h5>Conoce todas nuestras promociones.</h5>
      </div>
      <img src={"/images/form.png"} alt="Formulario Liverpool" />
      <ClientForm />
    </div>
  );
}

export default FormComponent;

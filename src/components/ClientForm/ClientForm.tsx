import React, { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button } from "@material-ui/core";
import FormikInput from "../../components/FormikElements/FormikInput";
import "./styles.scss";

const initialValues = {
  name: "",
  email: "",
  tarjetahabiente: "",
};

const ClientFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Este campo es obligatorio")
    .matches(/^[a-zA-Z\u00C0-\u024F][a-zA-Z\u00C0-\u024F\s]*$/, { message: "El nombre ingresado solo puede contener letras" })
    .max(50, "El nombre ingresado no puede exceder 50 caracteres"),
  email: Yup.string().required("Este campo es obligatorio").email("El correo electrónico no es válido"),
  tarjetahabiente: Yup.string().required("Este campo es obligatorio"),
});

const ClientForm = () => {
  const [success, setSuccess] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitButton = useCallback(async (info: any) => {
    console.log("hola");
    console.log(info);
  }, []);

  return (
    <div className="client-form">
      <div className="center">
        <h1>Regístrate.</h1>
        <h2>Conoce todas nuestras promociones.</h2>
      </div>
      <Formik
        initialValues={initialValues}
        // validationSchema={ClientFormSchema}
        onSubmit={onSubmitButton}
        validator={() => ({})}
      >
        {(formik) => {
          return (
            <Form>
              {/* MAIN FORM */}
              <Grid container className="main-form-container" spacing={3}>
                <Grid item xs={12}>
                  <FormikInput name="name" placeholder="Nombre completo" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput name="email" placeholder="Email" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item xs={12}>
                  <FormikInput name="tarjetahabiente" placeholder="¿Eres tarjetabiente?" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    Registrar mis datos
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ClientForm;

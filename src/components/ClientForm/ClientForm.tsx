import React, { useCallback, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button } from "@material-ui/core";
import FormikInput from "../../components/FormikElements/FormikInput";

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
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={ClientFormSchema}
        onSubmit={onSubmitButton}
        validator={() => ({})}
      >
        {(formik) => {
          return (
            <Form className="general-form">
              {/* MAIN FORM */}
              <Grid container className="main-form-container" spacing={3}>
                <Grid item lg={12} className="top">
                  <FormikInput name="name" placeholder="Nombre completo" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item lg={12} className="top">
                  <FormikInput name="email" placeholder="Nombre completo" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item lg={12} className="top">
                  <FormikInput name="tarjetahabiente" placeholder="Nombre completo" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button type="submit" className="btn-primary" disabled={loading}>
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

import React, { useCallback, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button, FormLabel } from "@material-ui/core";
import FormikInput from "../../components/FormikElements/FormikInput";
import axios from "axios";

import "./styles.scss";
import { useHistory } from "react-router-dom";

const initialValues = {
  phone: "",
  email: "",
  already_user: "",
};

const ClientFormSchema = Yup.object().shape({
  phone: Yup.string().required("Este campo es obligatorio").max(10, "El nombre ingresado no puede exceder 10 caracteres"),
  email: Yup.string().required("Este campo es obligatorio").email("El correo electrónico no es válido"),
  already_user: Yup.string().required("Este campo es obligatorio"),
});

const ClientForm = () => {
  const history = useHistory();
  // const [success, setSuccess] = useState(0);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [csrf, setCsrf] = useState("");

  const onSubmitButton = useCallback(
    async (info: any) => {
      setLoading(true);
      let data = JSON.stringify({ phone: info.phone, email: info.email, already_user: Boolean(info.already_user) });

      // axios.get('http://localhost:8000/sanctum/csrf-cookie', {withCredentials : true}).then(response => {
      //   //console.log(response.config.headers["X-XSRF-TOKEN"]);
      //   //console.log(response);
      // }).catch((error) => {
      //   console.log(error);
      // });
      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, data, { headers: { "Content-Type": "application/json" } })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          console.log(response);
        });

      history.push("/home");
    },
    [history]
  );

  return (
    <div className="client-form">
      <div className="center header">
        <h2>Regístrate.</h2>
        <h5>Conoce todas nuestras promociones.</h5>
      </div>
      <Formik initialValues={initialValues} validationSchema={ClientFormSchema} onSubmit={onSubmitButton} validator={() => ({})}>
        {(formik) => {
          return (
            <Form>
              {/* MAIN FORM */}
              <Grid container className="main-form-container" spacing={3}>
                <Grid item xs={12}>
                  <FormLabel component="legend">Ingresa tu teléfono (10 digitos): </FormLabel>
                  <FormikInput name="phone" placeholder="ej. 55 2833 3845" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component="legend">Ingresa tu email: </FormLabel>
                  <FormikInput name="email" placeholder="ej. bolo@liverpool.mx" validateOnClick={true} disabled={loading} />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component="legend">¿Cuentas con tarjeta de Liverpool?</FormLabel>
                  <ul className="input-ul">
                    <li>
                      <Field type="radio" name="already_user" value={true} />
                      <label htmlFor="si">Sí</label>
                    </li>
                    <li>
                      <Field type="radio" name="already_user" value={false} />
                      <label htmlFor="no">No</label>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={loading} data-tut="second__step">
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

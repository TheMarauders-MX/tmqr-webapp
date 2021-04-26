import React, { useCallback, useState, useEffect } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button, FormLabel } from "@material-ui/core";
import FormikInput from "../../components/FormikElements/FormikInput";
import apiClient from "@services/apiClient";

import "./styles.scss";
import { useHistory } from "react-router-dom";
import CustomModal from "@components/Shared/CustomModal/CustomModal";

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

  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      console.log(response);
    });
    //handleOpen();
  }, []);

  const onSubmitButton = useCallback(
    async (info: any) => {
      setLoading(true);
      apiClient
        .post("/register", {
          phone: info.phone,
          email: info.email,
          already_user: info.already_user == "true",
        })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          //console.log(response);
          handleOpen();
        });
    },
    [history]
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/home");
  };

  return (
    <>
      <div className="client-form">
        <Formik initialValues={initialValues} validationSchema={ClientFormSchema} onSubmit={onSubmitButton} validator={() => ({})}>
          {(formik) => {
            return (
              <Form>
                {/* MAIN FORM */}
                <Grid container className="main-form-container" spacing={3}>
                  <Grid item xs={12}>
                    {/* <FormLabel component="legend">Ingresa tu teléfono (10 digitos): </FormLabel> */}
                    <FormikInput name="phone" placeholder="Ingresa tu número telefónico" validateOnClick={true} disabled={loading} />
                  </Grid>
                  <Grid item xs={12}>
                    {/* <FormLabel component="legend">Ingresa tu email: </FormLabel> */}
                    <FormikInput name="email" placeholder="Ingresa tu correo electrónico" validateOnClick={true} disabled={loading} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel component="legend">¿Cuentas con tarjeta Liverpool?</FormLabel>
                    <ul className="input-ul">
                      <li>
                        <Field type="radio" name="already_user" value={"true"} />
                        <label htmlFor="si">Sí</label>
                      </li>
                      <li>
                        <Field type="radio" name="already_user" value={"false"} />
                        <label htmlFor="no">No</label>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} className="button__section">
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
      <CustomModal
        handleClose={handleClose}
        open={open}
        header={"¡Éxito!"}
        paragraph={"Hemos registrado tus datos con éxito."}
        paragraph2={"¿Estás listo para ver las mejores promociones?"}
        buttonCopie={"¡Llévame!"}
      />
    </>
  );
};

export default ClientForm;

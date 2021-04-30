import { useCallback, useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Grid, Button, FormLabel } from "@material-ui/core";
import FormikInput from "../../components/FormikElements/FormikInput";
import apiClient from "@services/apiClient";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { useHistory } from "react-router-dom";
import CustomModal from "@components/Shared/CustomModal/CustomModal";
import { useDispatch } from "react-redux";
import SuccesfulCard from "@components/SuccesfulCard/SuccesfulCard";
import { setUserInfoSuccess } from "@store/User/info/info.action";
import "./styles.scss";

const initialValues = {
  phone: "",
  email: "",
  already_user: "",
};

const ClientFormSchema = Yup.object().shape({
  phone: Yup.string().required("Este campo es obligatorio").max(10, "El numero ingresado debe tener 10 dígitos."),
  email: Yup.string().required("Este campo es obligatorio").email("El correo electrónico no es válido"),
  already_user: Yup.string().required("Este campo es obligatorio"),
});

const ClientForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.User.Info.data);

  // const [success, setSuccess] = useState(0);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmitButton = useCallback(
    async (info: any) => {
      setLoading(true);
      apiClient
        .post("/register", {
          phone: info.phone,
          email: info.email,
          already_user: info.already_user === "true",
        })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          if (response) {
            setLoading(false);
            setOpen(true);
            dispatch(setUserInfoSuccess({ phone: info.phone, email: info.email, already_user: info.already_user === "true" }));
          }
        });
    },
    [dispatch]
  );

  const handleClose = () => {
    setOpen(false);
    history.push("/home");
  };

  return (
    <>
      {userData.email === "" ? (
        <div className="client-form" data-tut="second__step">
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
      ) : (
        <SuccesfulCard />
      )}

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

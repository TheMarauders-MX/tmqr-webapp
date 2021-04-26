import { Paper } from "@material-ui/core";
import "./styles.scss";

const SuccesfulCard = () => {
  return (
    <>
      <div className="succesful__card center">
        <Paper elevation={3}>
          <h5>Tu registro ha sido éxitoso</h5>
          <img src={"images/happy.jpg"} alt="Registro exitoso" />
        </Paper>
      </div>
    </>
  );
};

export default SuccesfulCard;

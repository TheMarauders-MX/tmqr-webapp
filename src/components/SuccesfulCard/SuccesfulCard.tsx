import { Paper } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./styles.scss";

const SuccesfulCard = () => {
  return (
    <>
      <div className="succesful__card center">
        <Paper elevation={3}>
          <br />
          <CheckCircleIcon className="check_icon" />
          <h5>Tu registro ha sido éxitoso</h5>
          <br />
        </Paper>
      </div>
    </>
  );
};

export default SuccesfulCard;

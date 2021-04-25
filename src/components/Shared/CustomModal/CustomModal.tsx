import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";

interface CustomModalProps {
  header: string;
  paragraph: string;
  handleClose: any;
  open: any;
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
}));

const CustomModal = (props: CustomModalProps) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        className="customModal"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.header}</h2> <br />
            <p id="transition-modal-description">{props.paragraph}</p>
            <div className="button_section">
              <Button onClick={props.handleClose}>De acuerdo</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CustomModal;

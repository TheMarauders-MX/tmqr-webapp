import { Grid } from "@material-ui/core";
import "./styles.scss";

const CallActionCard = () => {
  const redirectToCardSite = () => {
    window.location.href = "https://micredito.liverpool.com.mx/app";
  };

  return (
    <div className="outer-container">
      <Grid container className="inner-container" onClick={() => redirectToCardSite()}>
        <Grid item xs={6}>
          <h6>
            Conoce los beneficios de tu
            <b> Credito Liverpool </b>
          </h6>
        </Grid>
        <Grid item xs={6}>
          <img src="images/card.png" alt="logo" />
        </Grid>
      </Grid>
    </div>
  );
};

export default CallActionCard;

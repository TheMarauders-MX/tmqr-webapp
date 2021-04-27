import { Grid } from "@material-ui/core";
import { AreaPromotionContent } from "@models/areapromotion.model";
import "./styles.scss";

const AreaPromotion = (props: AreaPromotionContent) => {
  return (
    <>
      <div className="area-promotion" key={props.id}>
        <Grid item xs={12}>
          <h4>
            <b>{props.name} </b>
            Hasta un {props.discount}% de descuento
          </h4>
          <a href={`/${props.route}`}>
            <img src={props.images[0].url} alt={props.name} />
          </a>
        </Grid>
      </div>
    </>
  );
};

export default AreaPromotion;

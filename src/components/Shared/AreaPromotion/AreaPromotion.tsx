import { Grid } from "@material-ui/core";
import { AreaPromotionContent } from "@models/areapromotion.model";
import "./styles.scss";

const AreaPromotion = (props: AreaPromotionContent) => {
  return (
    <>
      <div className="area-promotion" key={props.key}>
        <Grid item xs={12}>
          <h4>
            <b>{props.area} </b>
            Hasta un {props.discount}% de descuento
          </h4>
          <img src={props.image} alt={props.altImg} />
        </Grid>
      </div>
    </>
  );
};

export default AreaPromotion;

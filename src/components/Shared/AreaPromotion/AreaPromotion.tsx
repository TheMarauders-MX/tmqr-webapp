import { AreaPromotionContent } from "@models/areapromotion.model";
import { isPropertyAccessExpression } from "typescript";
import "./styles.scss";

const AreaPromotion = (props: AreaPromotionContent) => {
  return (
    <>
      <div className="area-promotion">
        <h4>
          {props.area} Hasta un {props.discount}% de descuento
        </h4>
        <img src={props.image} alt={props.altImg} />
      </div>
    </>
  );
};

export default AreaPromotion;

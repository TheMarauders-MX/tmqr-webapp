import { AreaPromotionContent } from "@models/areapromotion.model";
import AreaPromotion from "../../components/Shared/AreaPromotion/AreaPromotion";

interface AreaPromotionContainerProps {
  data: AreaPromotionContent[];
}

const AreaPromotionContainer = (props: AreaPromotionContainerProps) => {
  return (
    <>
      {props.data.map((item: any, i: any) => (
        <AreaPromotion id={i} image={item.image} name={item.name} discount={item.discount} route={item.route} />
      ))}
    </>
  );
};

export default AreaPromotionContainer;

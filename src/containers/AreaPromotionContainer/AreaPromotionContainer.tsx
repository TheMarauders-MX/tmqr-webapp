import { AreaPromotionContent } from "@models/areapromotion.model";
import AreaPromotion from "../../components/Shared/AreaPromotion/AreaPromotion";

interface AreaPromotionContainerProps {
  data: AreaPromotionContent[];
}

const AreaPromotionContainer = (props: AreaPromotionContainerProps) => {
  return (
    <>
      {props.data.map((item: any, i: any) => (
        // <AreaPromotion />;
        <AreaPromotion key={i} image={item.image} altImg={item.altImg} area={item.area} discount={item.discount} />
      ))}
    </>
  );
};

export default AreaPromotionContainer;

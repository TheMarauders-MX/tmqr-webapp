import ProductDetailComponent from "@components/ProductDetailComponent/ProductDetailComponent";
import Navbar from "../../components/Shared/Navbar/Navbar";

interface ProductScreenProps {
  // name?: string;
  productInfo: any;
}

const ProductScreen = (props: ProductScreenProps) => {
  return (
    <div>
      <Navbar />
      <ProductDetailComponent info={props.productInfo} />
    </div>
  );
};

export default ProductScreen;

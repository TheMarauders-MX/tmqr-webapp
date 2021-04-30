import ProductDetailComponent from "@components/ProductDetailComponent/ProductDetailComponent";
import Footer from "@components/Shared/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default ProductScreen;

import Navbar from "../../components/Shared/Navbar/Navbar";

interface ProductScreenProps {
  name: string;
}

const ProductScreen = (props: ProductScreenProps) => {
  return (
    <div>
      <Navbar />
      <div className="center">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default ProductScreen;

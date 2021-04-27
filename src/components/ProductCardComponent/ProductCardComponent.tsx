import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "./styles.scss";

interface ProductCardComponentProps {
  info: any;
}

const ProductCardComponent = (props: ProductCardComponentProps) => {
  const history = useHistory();

  const viewDetailProduct = () => {
    history.replace(`${props.info.route}`);
  };

  return (
    <>
      <Card className="product__card">
        <CardActionArea>
          <img src={props.info.images[0].url} alt={props.info.name} />
          {/* <CardMedia title="Contemplative Reptile" image="https://ss628.liverpool.com.mx/lg/1098132739.jpg" /> */}
          <CardContent className="content">
            <p>{props.info.name}</p>
            <p>{props.info.oldPrice}</p>
            <p>{props.info.currentPrice}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={viewDetailProduct}>
            Ver producto
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCardComponent;

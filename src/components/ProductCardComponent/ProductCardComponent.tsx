import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";

const ProductCardComponent = () => {
  return (
    <>
      <Card className="product__card">
        <CardActionArea>
          <img src="https://ss628.liverpool.com.mx/lg/1098132739.jpg" />
          {/* <CardMedia title="Contemplative Reptile" image="https://ss628.liverpool.com.mx/lg/1098132739.jpg" /> */}
          <CardContent className="content">
            <p>Laptop Microsoft Surface 3 13.3 Pulgadas 8K UHD Intel HD Graphics 620 Intel Core i5 8 GB RAM 128 GB SSD</p>
            <p>26499</p>
            <p>26499</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver producto
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCardComponent;

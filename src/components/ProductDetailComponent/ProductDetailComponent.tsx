import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import "./styles.scss";

interface ProductDetailComponentProps {
  info: any;
}

const ProductDetailComponent = (props: ProductDetailComponentProps) => {
  return (
    <div>
      <Card className="product__detail">
        <CardActionArea>
          <img src={props.info.images[0].url} alt={props.info.name} />
          <CardContent className="content">
            <p className="name">{props.info.name}</p>
            <p className="old_price">{props.info.oldPrice ? `$${props.info.oldPrice.toLocaleString()}` : ""}</p>
            <p className="current_price">${props.info.currentPrice.toLocaleString()}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="simple-controlled" value={props.info.punctuation} />
            </Box>
            <Box></Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductDetailComponent;

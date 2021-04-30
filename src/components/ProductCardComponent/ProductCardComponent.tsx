import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

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
        <img src={props.info.images[0].url} alt={props.info.name} />
        <p className="name">{props.info.name}</p>
        <p className="old_price">{props.info.old_price ? `$${props.info.old_price.toLocaleString()}` : ""}</p>
        <p className="current_price">${props.info.current_price.toLocaleString()}</p>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="simple-controlled" value={props.info.punctuation} />
        </Box>
        {/* <CardActionArea>
          <CardContent className="content"></CardContent>
        </CardActionArea> */}
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

import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { Grid } from "@material-ui/core";

interface AreaComponentProps {
  // areaInfo: AreaContent;
  areaInfo: any;
}

const AreaComponent = (props: AreaComponentProps) => {
  return (
    <>
      <div className="center">
        <h2>Sección {props.areaInfo ? props.areaInfo.name : "Computo"}</h2>
      </div>
      <div className="products_section">
        <Grid container>
          <Grid item xs={6}>
            <ProductCardComponent />
          </Grid>
          <Grid item xs={6}>
            <ProductCardComponent />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AreaComponent;

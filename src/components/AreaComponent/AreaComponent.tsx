import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { Grid } from "@material-ui/core";
import "./styles.scss";

interface AreaComponentProps {
  // areaInfo: AreaContent;
  areaInfo: any;
  areaName: string;
}

const AreaComponent = (props: AreaComponentProps) => {
  return (
    <>
      <div className="header center">
        <h2>{props.areaName}</h2>
      </div>
      <div className="products_section">
        <Grid container>
          {props.areaInfo.map((item: any, i: any) => (
            <Grid item xs={6} key={i}>
              <ProductCardComponent info={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default AreaComponent;

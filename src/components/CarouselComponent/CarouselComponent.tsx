import { Grid } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import "./styles.scss";

const CarouselComponent = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "images/everybody.png",
      alt: "Todos en un solo qr",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "images/liverpool_mkt.png",
      alt: "Obtén tu tarjeta desde casa.",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "images/beneficios.png",
      alt: "Obtén tu tarjeta desde casa.",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props: any) {
  return (
    <>
      <Grid>
        <Grid item xs={12}>
          {/* <h2>{props.item.name}</h2> */}
          {/* <p>{props.item.description}</p> */}
          <img src={props.item.img} alt={props.item.alt} />
          <div className="center">{/* <Button className="CheckButton">Check it out!</Button> */}</div>
        </Grid>
      </Grid>
    </>
  );
}

export default CarouselComponent;

import React from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from "react-material-ui-carousel";
import { Button, Grid } from '@material-ui/core'
import "./styles.scss";

const CardCarouselComponenent = () => {

  const history = useHistory();

  const capture = () => {
    history.push('/registercard')
  }

  var items = [
    {
      name: 'Departamental',
      description: 'Sin costo por apertura, anualidad o por tarjetas adicionales.',
      img: 'https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/credito/DILISA.png',
      alt: 'Obtén tu tarjeta desde casa.',
    },
    {
      name: 'Visa',
      description: 'Sin costo por apertura, Puntos Rosas y anualidad gratis el primer año.',
      img: 'https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/credito/LPC.png',
      alt: 'Obtén tu tarjeta desde casa.',
    },
    {
      name: 'Universitaria',
      description: 'Para estudiantes de 18 a a 23 años. Sin costo por apertura o anualidad.',
      img: 'https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/credito/LIVERTU.png',
      alt: 'Obtén tu tarjeta desde casa.',
    },
  ]

  return (
    <>
      <Carousel className="container">
        {items.map((item, i) => (
          <Item key={i} item={item}/>
        ))}
      </Carousel>
      <Grid container justify="center">
        <Button onClick={capture} className="card-button">
          Tramítala Aquí
        </Button>
      </Grid>
    </>

  )
}

function Item(props: any) {
  return (
    <Grid container>
      <Grid container justify="center">
        <Grid item className="title-container">
          <h2>{props.item.name}</h2>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={11}>
          <img src={props.item.img} alt={props.item.alt} />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item className="text-container">
          <h6>{props.item.description}</h6>
        </Grid>
      </Grid>
    </Grid>
  );

}

export default CardCarouselComponenent;

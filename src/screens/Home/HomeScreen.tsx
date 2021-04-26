import React, { useCallback, useEffect } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";
import CallActionCard from "@components/Shared/CallActionCard/CallActionCard";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";

interface HomeScreenProps {
  areasObject: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <>
      <Navbar />
      <CarouselComponent />
      <CallActionCard />
      <AreaPromotionContainer data={props.areasObject} />
      <Footer />
    </>
  );
};

export default HomeScreen;

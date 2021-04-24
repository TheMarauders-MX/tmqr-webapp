import React, { useCallback, useEffect } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";
import CallActionCard from "@components/Shared/CallActionCard/CallActionCard";

interface HomeScreenProps {
  areasObject: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <>
      <Navbar />
      <CallActionCard />
      <AreaPromotionContainer data={props.areasObject} />
      <Footer />
    </>
  );
};

export default HomeScreen;

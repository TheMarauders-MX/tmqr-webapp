import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <AreaPromotionContainer data={sampleAreasJSON} />
    </>
  );
};

export default HomeScreen;

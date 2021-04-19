import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <AreaPromotionContainer data={sampleAreasJSON} />
      <Footer />
    </>
  );
};

export default HomeScreen;

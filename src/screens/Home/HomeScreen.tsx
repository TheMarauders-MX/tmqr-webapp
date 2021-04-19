import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";
import CallActionCard from '@components/Shared/CallActionCard/CallActionCard';

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <CallActionCard />
      <AreaPromotionContainer data={sampleAreasJSON} />
      <Footer />
    </>
  );
};

export default HomeScreen;

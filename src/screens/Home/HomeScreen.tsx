import React, { useCallback, useEffect } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import { sampleAreasJSON } from "@samples/AreaPromotionContent";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";
import CallActionCard from "@components/Shared/CallActionCard/CallActionCard";
import axios from "axios";

const HomeScreen = () => {
  useEffect(() => {
    callArea();
  }, []);

  const callArea = useCallback(async () => {
    axios
      .get("http://tmqr-coreapi.test/api/area")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

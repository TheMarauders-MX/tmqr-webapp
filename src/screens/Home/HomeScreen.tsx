import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import AreaPromotionContainer from "@containers/AreaPromotionContainer/AreaPromotionContainer";
import Footer from "@components/Shared/Footer/Footer";
import CallActionCard from "@components/Shared/CallActionCard/CallActionCard";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
// import { RootState } from "../../store/reducers";
// import { useSelector } from "react-redux";
import apiClient from "@services/apiClient";

const HomeScreen = () => {
  const [areasResponse, setAreasResponse] = useState([]);

  // TODO: Pasar userData para saber qué componentes ocultar
  // const userData = useSelector((state: RootState) => state.User.Info.data);

  const callArea = useCallback(async () => {
    apiClient
      .get("/api/area")
      .then((response) => {
        setAreasResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    callArea();
  }, [callArea]);

  return (
    <>
      <Navbar />
      <CarouselComponent />
      <CallActionCard />
      {areasResponse ? <AreaPromotionContainer data={areasResponse} /> : ""}
      <Footer />
    </>
  );
};

export default HomeScreen;

import React from 'react';
import Navbar from "../../components/Shared/Navbar/Navbar";
import CardCarouselComponenent from '@components/CardCarouselComponent/CardCarouselComponent';
import CallActionCard from '@components/Shared/CallActionCard/CallActionCard';
import Footer from '@components/Shared/Footer/Footer';

const BeneficiosScreen = () => {
  return (
    <div>
      <Navbar />
      <CallActionCard />
      <CardCarouselComponenent />
      <Footer />
    </div>
  );
};

export default BeneficiosScreen;

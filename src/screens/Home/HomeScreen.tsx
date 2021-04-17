import React from "react";
import ClientForm from "../../components/ClientForm/ClientForm";
import Navbar from "../../components/Shared/Navbar/Navbar";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <ClientForm />
    </div>
  );
};

export default HomeScreen;

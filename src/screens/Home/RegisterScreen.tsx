import React, { useEffect, useState } from "react";
import ClientForm from "../../components/ClientForm/ClientForm";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Tour from "reactour";
import { steps } from "../../components/TourSteps/TourSteps";

const RegisterScreen = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    setIsTourOpen(true);
  }, []);

  return (
    <>
      <Navbar />
      <ClientForm />

      {/* React Tour */}
      <Tour steps={steps} isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
    </>
  );
};

export default RegisterScreen;

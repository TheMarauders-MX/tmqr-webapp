import React, { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Tour from "reactour";
import { steps } from "../../components/TourSteps/TourSteps";
import FormComponent from "@components/FormComponent/FormComponent";
import apiClient from "@services/apiClient";

const RegisterScreen = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  useEffect(() => {
    //setIsTourOpen(true);
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      // console.log(response);
    });
  }, []);

  return (
    <>
      <Navbar />
      <FormComponent />

      {/* React Tour */}
      <Tour steps={steps} isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
    </>
  );
};

export default RegisterScreen;

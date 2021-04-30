import Navbar from "../../components/Shared/Navbar/Navbar";
import FormComponent from "@components/FormComponent/FormComponent";
import { UserTour } from "@components/TourSteps/TourSteps";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/reducers";

const RegisterScreen = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [stepStartAt, setStepStartAt] = useState(0);
  const userData = useSelector((state: RootState) => state.User.Info.data);

  const closeTour = () => {
    setIsTourOpen(false);
  };

  useEffect(() => {
    if (userData.email === "") {
      setIsTourOpen(true);
    } else {
      setIsTourOpen(false);
    }
  }, []);

  return (
    <>
      <Navbar />
      <FormComponent />
      {/* React Tour */}
      <UserTour isOpen={isTourOpen} closeTour={closeTour} stepStartAt={stepStartAt} />
    </>
  );
};

export default RegisterScreen;

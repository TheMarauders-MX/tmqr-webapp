import AreaComponent from "@components/AreaComponent/AreaComponent";
import Navbar from "../../components/Shared/Navbar/Navbar";

interface AreaScreenProps {
  // areaInfo: AreaContent;
  areaInfo: any;
  departmentName: string;
}

const AreaScreen = (props: AreaScreenProps) => {
  return (
    <div>
      <Navbar />
      <AreaComponent areaInfo={props.areaInfo} areaName={props.departmentName} />
    </div>
  );
};

export default AreaScreen;

import AreaComponent from "@components/AreaComponent/AreaComponent";
import Navbar from "../../components/Shared/Navbar/Navbar";

interface AreaScreenProps {
  // areaInfo: AreaContent;
  areaInfo: any;
}

const AreaScreen = (props: AreaScreenProps) => {
  return (
    <div>
      <Navbar />
      <AreaComponent areaInfo={props.areaInfo} />
    </div>
  );
};

export default AreaScreen;

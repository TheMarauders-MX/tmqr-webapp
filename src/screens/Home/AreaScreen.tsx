import Navbar from "../../components/Shared/Navbar/Navbar";

interface AreaScreenProps {
  name: string;
}

const AreaScreen = (props: AreaScreenProps) => {
  return (
    <div>
      <Navbar />
      <div className="center">
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default AreaScreen;

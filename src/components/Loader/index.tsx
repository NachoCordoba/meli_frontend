import BounceLoader from "react-spinners/BounceLoader";
import "./index.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <BounceLoader color="#fff159" />
    </div>
  );
};

export default Loader;

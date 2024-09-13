import "./path.css";
import { Link } from "react-router-dom";

const Path = ({ pathName }) => {
  return (
    <span id="Returner">
      <Link to="/home">Home /</Link> {pathName}
    </span>
  );
};

export default Path;

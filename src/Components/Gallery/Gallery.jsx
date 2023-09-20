import { useNavigate } from "react-router-dom";
import Home from "../Home/Home ";


const Gallery = () => {

  const navigate = useNavigate();

  const handleShowBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>Explore the world with comfort.</h1>
      <div>
        <h6> <button onClick={handleShowBack}  >   Go Back </button></h6>
      </div>

    </div>
  );
};

export default Gallery;
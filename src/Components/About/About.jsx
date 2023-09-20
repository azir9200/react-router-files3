import { useNavigate } from "react-router-dom";


const About = () => {

  const navigate = useNavigate();

  const handleShowBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h2>About</h2>
      <button onClick={handleShowBack} >Return to previous page.</button>
    </div>
  );
};

export default About;
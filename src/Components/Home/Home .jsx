import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'


const Home = () => {
  const amarkaj = useNavigate();
  const hanAmarkaj = () => {
    amarkaj(-2);
  }

  return (
    <div className="home" >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      <button onClick={hanAmarkaj} >Lets GOOOO</button>
    </div>
  );
};

export default Home;
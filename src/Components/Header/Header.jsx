import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header" >
      <h2>My Website</h2>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/users" >Users</Link>
        <Link to="/about" >About</Link>
        <Link to="/gallery" >Gallery</Link>
        <Link to="/contact" >Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
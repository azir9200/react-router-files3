import { Link } from 'react-router-dom';
import './User.css'

const User = ({ user }) => {
  const { id, name, email, phone } = user;


  return (
    <div  >
      <h4> ID: {id} </h4>
      <h2>Name: {name} </h2>
      <p> Email: {email} </p>
      <p> Contact: {phone} </p>
      <Link to={`/user/:${id}`} >Show  Details</Link>
      <Link to={`/user/${id}`}><button>Click Me</button> </Link>
    </div>
  );
};

export default User;
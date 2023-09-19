import './User.css'

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: '2px solid. red',
    padding: '10px',
    borderRadious: '15px'
  }

  return (
    <div className="userStyle" >
      <h4> ID: {id} </h4>
      <h2>Name: {name} </h2>
      <p> Email: {email} </p>
      <p> Contact: {phone} </p>
    </div>
  );
};

export default User;
import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
  const user = useLoaderData();
  const { name, website } = user;
  return (
    <div>
      <h2> {name} </h2>

      <p> {website} </p>
      <h2><button>Show Details  {name} </button></h2>
    </div>
  );
};

export default UserDetails;
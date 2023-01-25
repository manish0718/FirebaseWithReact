import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>
        <Link to="/login">Login</Link>
      </h1>
      <br />
      <h1>
        <Link to="/signup">Sign Up</Link>
      </h1>

      <br />
      <br />
      <br />
      <h1>{props.name ? `Welcome ${props.name}` : `Login Please`}</h1>

      <br />
      <br />
      <h3>
        <Link to="/">Sign out</Link>
      </h3>
    </div>
  );
};

export default Home;

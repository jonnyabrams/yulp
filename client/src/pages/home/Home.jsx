import { Link } from "react-router-dom";
import { useState } from "react";

import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="main">
      <Topbar user={user} dispatch={dispatch} />
      {user ? (
        <>
          <div className="header">
            <span>Hello, {capitalise(user.username)}!</span>
          </div>
          {showAddRestaurant ? <AddRestaurant /> : <span className="subheader" onClick={() => setShowAddRestaurant(true)}>Add a restaurant</span>}
        </>
      ) : (
        <>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="subheader">Or sign up</div>
          </Link>
          <span>Log in to get reviewing...</span>
        </>
      )}
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import RestaurantList from "../../components/RestaurantList/RestaurantList";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);
  const navigate = useNavigate();

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
          {showAddRestaurant ? (
            <AddRestaurant />
          ) : (
            <button
              className="add-restaurant-button"
              onClick={() => setShowAddRestaurant(true)}
            >
              Add a restaurant
            </button>
          )}
        </>
      ) : (
        <>
          <div className="header">
            <span>Log in to get reviewing...</span>
          </div>

          <button
            className="signup-button"
            onClick={() => navigate("/register")}
          >
            ...or sign up
          </button>
        </>
      )}
      <RestaurantList />
    </div>
  );
};

export default Home;

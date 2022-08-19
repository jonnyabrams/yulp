import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import RestaurantFinder from "../../apis/RestaurantFinder";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const [showAddRestaurant, setShowAddRestaurant] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
    );
  };

  const tableData = search(restaurants);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="main">
      <Topbar user={user} dispatch={dispatch} setQuery={setQuery} />
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
      <RestaurantList
        restaurants={restaurants}
        setRestaurants={setRestaurants}
        data={tableData}
      />
    </div>
  );
};

export default Home;

import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantFinder from "../../apis/RestaurantFinder";
import { AuthContext } from "../../context/Auth/AuthContext";
import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import "./restaurant-list.css";
import StarRating from "../StarRating/StarRating.jsx";

const RestaurantList = ({ restaurants, setRestaurants, data }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

 
  const handleDelete = async (id) => {
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span>0 reviews</span>
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="number-of-reviews">({restaurant.count})</span>
      </>
    );
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <th className="heading">Restaurant</th>
          <th className="heading">Location</th>
          <th className="heading">Price Range</th>
          <th className="heading">Rating</th>
          <th className="heading">Edit</th>
          <th className="heading">Delete</th>
        </tr>

        {restaurants &&
          data.map((restaurant) => (
            <tr key={restaurant.id}>
              <td
                align="center"
                className="restaurant-detail"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/restaurants/${restaurant.id}`)}
              >
                {restaurant.name}
              </td>
              <td align="center" className="restaurant-detail">
                {restaurant.location}
              </td>
              <td align="center" className="restaurant-detail">
                {"$".repeat(restaurant.price_range)}
              </td>
              <td align="center" className="restaurant-detail">
                {renderRating(restaurant)}
              </td>
              <td align="center" className="restaurant-detail">
                <button
                  onClick={() =>
                    navigate(`/restaurants/${restaurant.id}/update`)
                  }
                  disabled={parseInt(user?.id) !== restaurant.user_id}
                >
                  Update
                </button>
              </td>
              <td align="center" className="restaurant-detail">
                <button
                  onClick={() => handleDelete(restaurant.id)}
                  disabled={parseInt(user?.id) !== restaurant.user_id}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;

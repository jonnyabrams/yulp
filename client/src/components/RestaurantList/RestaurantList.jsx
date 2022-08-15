import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantFinder from "../../apis/RestaurantFinder";
import { AuthContext } from "../../context/Auth/AuthContext";
import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import "./restaurant-list.css";

const RestaurantList = (props) => {
  const { user } = useContext(AuthContext);
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
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
    console.log(restaurants);
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.log(error);
    }
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
          restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td align="center" className="restaurant-detail">
                {restaurant.name}
              </td>
              <td align="center" className="restaurant-detail">
                {restaurant.location}
              </td>
              <td align="center" className="restaurant-detail">
                {"$".repeat(restaurant.price_range)}
              </td>
              <td align="center" className="restaurant-detail">
                **
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

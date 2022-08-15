import { useEffect, useContext } from "react";

import RestaurantFinder from "../../apis/RestaurantFinder";
import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import "./restaurant-list.css";

const RestaurantList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

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

        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td align="center" className="restaurant-detail">{restaurant.name}</td>
            <td align="center" className="restaurant-detail">{restaurant.location}</td>
            <td align="center" className="restaurant-detail">{"$".repeat(restaurant.price_range)}</td>
            <td align="center" className="restaurant-detail">**</td>
            <td align="center" className="restaurant-detail"><button>Update</button></td>
            <td align="center" className="restaurant-detail"><button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;

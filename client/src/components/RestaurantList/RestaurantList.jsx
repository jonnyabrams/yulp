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
          <th align="center" className="heading">
            Restaurant
          </th>
          <th align="center" className="heading">
            Location
          </th>
          <th align="center" className="heading">
            Price Range
          </th>
          <th align="center" className="heading">
            Rating
          </th>
        </tr>
        <tr>
          <td align="center" className="restaurant-detail">
            Pizza Bastard
          </td>
          <td align="center" className="restaurant-detail">
            Bristol
          </td>
          <td align="center" className="restaurant-detail">
            $$
          </td>
          <td align="center" className="restaurant-detail">
            **
          </td>
        </tr>
        <tr>
          <td align="center" className="restaurant-detail">
            Sushi Bastard
          </td>
          <td align="center" className="restaurant-detail">
            Leicester
          </td>
          <td align="center" className="restaurant-detail">
            $$$
          </td>
          <td align="center" className="restaurant-detail">
            ****
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantList;

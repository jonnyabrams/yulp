import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import RestaurantFinder from "../../apis/RestaurantFinder";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div>{selectedRestaurant && selectedRestaurant.name}</div>;
};

export default RestaurantDetails;

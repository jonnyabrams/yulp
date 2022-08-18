import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { RestaurantsContext } from "../../context/Restaurants/RestaurantContext";
import RestaurantFinder from "../../apis/RestaurantFinder";
import StarRating from "../../components/StarRating/StarRating";
import "./restaurant-details.css";
import Reviews from "../../components/Reviews/Reviews";
import AddReview from "../../components/AddReview/AddReview";

const RestaurantDetails = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="reviews-component">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;

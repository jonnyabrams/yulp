import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import RestaurantFinder from "../../apis/RestaurantFinder";
import { AuthContext } from "../../context/Auth/AuthContext";
import "./add-review.css";

const AddReview = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState("Rating");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/add-review`, {
        content: reviewText,
        rating,
        user_id: user.id,
        username: user.username,
        restaurant_id: id,
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="add-review">
          <h1>Leave a review...</h1>
          <div className="element">
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="dropdown"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="element">
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              id="review"
              placeholder="Your review..."
              className="text-area"
              rows="8"
            />
          </div>
          <div className="element">
            <button type="submit" className="button">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;

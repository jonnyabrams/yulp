import { useState } from "react";

import "./add-review.css";

const AddReview = () => {
  const [rating, setRating] = useState("Rating");
  const [reviewText, setReviewText] = useState("");

  return (
    <div>
      <form>
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

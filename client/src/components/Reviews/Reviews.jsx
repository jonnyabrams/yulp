import "./reviews.css";
import StarRating from "../StarRating/StarRating.jsx";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <div key={review.id} className="card">
          <div className="card-header">
            <span>{review.username}</span>
            <span>
              <StarRating rating={review.rating} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

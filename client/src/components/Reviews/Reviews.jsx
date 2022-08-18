import "./reviews.css";
import StarRating from "../StarRating/StarRating.jsx";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <div className="card">
          <div className="card-header">
            <span>Dave</span>
            <span>
              <StarRating rating={1} />
            </span>
          </div>
          <div className="card-body">
            <p className="card-text">Shocker of a restaurant</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import "./star-rating.css";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} style={{ color: "gold", fontSize: "14px" }} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfIcon key={i} style={{ color: "gold", fontSize: "14px" }} />);
    } else {
      stars.push(<StarOutlineIcon key={i} style={{ fontSize: "14px" }} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;

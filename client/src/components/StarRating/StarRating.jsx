import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import "./star-rating.css";
import { startSession } from "mongoose";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<StarHalfIcon />);
    } else {
      stars.push(<StarOutlineIcon />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;

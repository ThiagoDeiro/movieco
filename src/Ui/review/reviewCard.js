import React from "react";
import "./reviewCard.css";
const ReviewCard = (props) => {
  return <div className="review-card">{props.children}</div>;
};

export default ReviewCard;

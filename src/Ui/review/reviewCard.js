import React from "react";
import "./reviewCard.css";
const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <h3>User : {props.title}</h3>
      <p>{props.content}</p>
      {props.children}
    </div>
  );
};

export default ReviewCard;

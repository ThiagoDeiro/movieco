import React from "react";
import "./reviewCard.css";
const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <h3 className="review-card-user">User : {props.title}</h3>
      <div className="review-card-user-content">
        <p>{props.content}</p>
      </div>
      {props.children}
    </div>
  );
};

export default ReviewCard;

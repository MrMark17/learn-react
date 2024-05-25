import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleOnMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleOnMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return <AiFillStar key={index} size={40} onClick={() => handleClick(index)} onMouseEnter={() => handleOnMouseEnter(index)} onMouseLeave={() => handleOnMouseLeave()} className={index <= (hover || rating) ? "active" : "inactive"} />;
      })}
    </div>
  );
}

import { useState } from 'react';
import './Review.css';

const Review = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };
  return (
    <div>
      <h2>Review</h2>
      <p>There are no reviews yet.</p>
      <div className="write-review">
        <h2 onClick={handleClick} className="review-title">
          Write a review here
        </h2>
        {isShown ? <h2>Clicked</h2> : ''}
      </div>
    </div>
  );
};

export default Review;

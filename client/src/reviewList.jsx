import React from "react";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => {
        if (review.topCritic === 1 && review.rating === 1) {
          return (
            <div className="review">
              <div className="review-bubble">
                <span className="tomato">
                  <img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-fresh.png" />
                </span>
                <p className="text">{review.text}</p>
                <div className="date">{review.date} </div>
              </div>
              <div className="critic-info">
                <div className="picture">
                  <img src={review.picture} />
                </div>
                <div className="name">{review.name}</div>
                <div className="publisher">{review.publisher}</div>
                <div className="top-critic">&#9733; Top Critic</div>
              </div>
            </div>
          );
        } else if (review.topCritic === 0 && review.rating === 1) {
          return (
            <div className="review">
              <div className="review-bubble">
                <span className="tomato">
                  <img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-fresh.png" />
                </span>
                <p className="text">{review.text}</p>
                <div className="date">{review.date} </div>
              </div>
              <div className="critic-info">
                <div className="picture">
                  <img src={review.picture} />
                </div>
                <div className="name">{review.name}</div>
                <div className="publisher">{review.publisher}</div>
              </div>
            </div>
          );
        } else if (review.topCritic === 0 && review.rating === 0) {
          return (
            <div className="review">
              <div className="review-bubble">
                <span className="tomato">
                  <img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-rotten.png" />
                </span>
                <p className="text">{review.text}</p>
                <div className="date">{review.date} </div>
              </div>
              <div className="critic-info">
                <div className="picture">
                  <img src={review.picture} />
                </div>
                <div className="name">{review.name}</div>
                <div className="publisher">{review.publisher}</div>
              </div>
            </div>
          );
        } else if (review.topCritic === 1 && review.rating === 0) {
          return (
            <div className="review">
              <div className="review-bubble">
                <span className="tomato">
                  <img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-rotten.png" />
                </span>
                <p className="text">{review.text}</p>
                <div className="date">{review.date} </div>
              </div>
              <div className="critic-info">
                <div className="picture">
                  <img src={review.picture} />
                </div>
                <div className="name">{review.name}</div>
                <div className="publisher">{review.publisher}</div>
                <div className="top-critic">&#9733; Top Critic</div>
              </div>
            </div>
          );
        } else {
          return <div>{console.log(review.topCritic, review)}</div>;
        }
      })}
    </div>
  );
};

export default ReviewList;

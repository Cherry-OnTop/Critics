import React from 'react';


const ReviewList = ({reviews}) => {
    return (
      <div>
          {reviews.map(review => {
            if(review.topCritic === 1 && review.rating === 1){
               return (
            <div class="review"> 
                <div class="review-bubble">
                    <span class="tomato"><img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-fresh.png"/></span>
                    <p class="text">{review.text}</p>
                    <div class="date">{review.date} </div>
                </div>
                <div class="critic-info">
                    <div class="picture"><img src={review.picture}/></div>
                    <div class="name">{review.name}</div>
                    <div class="publisher">{review.publisher}</div>
                    <div class="top-critic">&#9733; Top Critic</div>
                </div>
            </div>   
            ) 
            } else if (review.topCritic === 0 && review.rating === 1){
               return (
            <div class="review"> 
                <div class="review-bubble">
                    <span class="tomato"><img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-fresh.png"/></span>
                    <p class="text">{review.text}</p>
                    <div class="date">{review.date} </div>
                </div>
                <div class="critic-info">
                    <div class="picture"><img src={review.picture}/></div>
                    <div class="name">{review.name}</div>
                    <div class="publisher">{review.publisher}</div>
                </div>
            </div>   
            ) 
            } else if (review.topCritic === 0 && review.rating === 0){
               return (
            <div class="review"> 
                <div class="review-bubble">
                    <span class="tomato"><img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-rotten.png"/></span>
                    <p class="text">{review.text}</p>
                    <div class="date">{review.date} </div>
                </div>
                <div class="critic-info">
                    <div class="picture"><img src={review.picture}/></div>
                    <div class="name">{review.name}</div>
                    <div class="publisher">{review.publisher}</div>
                </div>
            </div>   
            ) 
            } else if (review.topCritic === 1 && review.rating === 0){
               return (
            <div class="review"> 
                <div class="review-bubble">
                    <span class="tomato"><img src="https://staticv2-4.rottentomatoes.com/static/images/icons/new-rotten.png"/></span>
                    <p class="text">{review.text}</p>
                    <div class="date">{review.date} </div>
                </div>
                <div class="critic-info">
                    <div class="picture"><img src={review.picture}/></div>
                    <div class="name">{review.name}</div>
                    <div class="publisher">{review.publisher}</div>
                    <div class="top-critic">&#9733; Top Critic</div>
                </div>
            </div>   
            ) 
            } else {
                return <div>{console.log(review.topCritic, review)}</div>
            }
            
          })}
      </div>
    );
  }

export default ReviewList
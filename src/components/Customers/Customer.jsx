import React from 'react'
import './Customer.scss'
const Customer = () => {
  
    const reviews = [
      {
        name: "Sarah M.",
        review:
          "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      },
      {
        name: "Alex K.",
        review:
          "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      },
      {
        name: "James L.",
        review:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      },
    ];
  
    return (
      <div className="customer-reviews">
        <h2>OUR HAPPY CUSTOMERS</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="stars">
                {Array(5)
                  .fill("⭐")
                  .map((star, idx) => (
                    <span key={idx}>{star}</span>
                  ))}
              </div>
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
   
  


export default Customer
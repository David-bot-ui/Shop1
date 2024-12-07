import React from 'react'
import './ReviewsWrap.scss'
import ReviewCard from '../../ReviewCard/ReviewCard'

import ReviewsData from './reviews.json'

const ReviewsWrap = () => {
  return (
    <>
    <section className="reviewwrap">
        <div className="container">
            <div className="reviews__wrapper">
               {ReviewsData.map(card => (
                <>
                <ReviewCard key={card.id} card={card}/>
                
                
                
                </>
               ))}

               
            </div>
        </div>
    </section>
    
    </>
  )
}

export default ReviewsWrap
import React, { useState } from 'react'
import { useReview } from '../../../../hook/useReview'
import { ClipLoader } from 'react-spinners'
import { Alert } from 'react-bootstrap'
import './Review.style.css'
const Review = ({id}) => {
   const{data:review,isError,isLoading,error} =useReview({id})
   const [expandedStates, setExpandedStates] = useState([]);
   if(isLoading){
    return  <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} className="cliploader"/></div>
}
if(isError){
    return <Alert varient ="danger">{error.message}</Alert>
}
console.log("review",review)
const handleToggle = (index) => {
  setExpandedStates((prevStates) => {
    // 현재 상태를 복사하여 변경
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
return (
  <div className="review-container">
    <h3 className="moviedetail-compo-title">Review</h3> 
   
    {review?.results.map((item, index) => {
      const content = item?.content;
      const isContentLong = content.length > 400;
      const shortContent = content.slice(0, 400) + '...';
      const isExpanded = expandedStates[index] || false; // 기본값은 false
      
      return (
        <div>
           
        <div key={index} className="review-box">
          
          {isContentLong && !isExpanded ? (
            <>
             
              <p>{shortContent}</p>
              <span className="review-toggle-button" onClick={() => handleToggle(index)}>더보기</span>
            </>
          ) : (
            <p>{content}</p>
          )}
        </div>
        </div>
      );
    })}
  </div>
);
};

export default Review;
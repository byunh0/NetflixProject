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
    <div className="moviedetail-compo-title">Review</div>
    {review?.results.map((item, index) => {
      const content = item?.content;
      const isContentLong = content.length > 500;
      const shortContent = content.slice(0, 500) + '...';
      const isExpanded = expandedStates[index] || false; // 기본값은 false

      return (
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
      );
    })}
  </div>
);
};

export default Review;
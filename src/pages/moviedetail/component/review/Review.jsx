import React, { useState } from 'react'
import { useReview } from '../../../../hook/useReview'
import { ClipLoader } from 'react-spinners'
import { Alert } from 'react-bootstrap'
import './Review.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Review = ({id}) => {
  const { data: review, isError, isLoading, error } = useReview({ id })
  const [expandedStates, setExpandedStates] = useState([]);

  if (isLoading) {
    return <div className="bigContainer"><ClipLoader color="#f88c6b" loading={isLoading} size={70} className="cliploader" /></div>
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  console.log("review", review)

  const handleToggle = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="review-container">
      <h3 className="moviedetail-compo-title"><FontAwesomeIcon icon={faCheck} /> Review</h3>

      {review?.results.map((item, index) => {
        const content = item?.content;
        const isContentLong = content.length > 400;
        const shortContent = content.slice(0, 400) + '...';
        const isExpanded = expandedStates[index] || false;

        return (
          <div key={index} className="review-box">
            {isContentLong && !isExpanded ? (
              <>
                <p>{shortContent}</p>
                <span className="review-toggle-button" onClick={() => handleToggle(index)}>더보기</span>
              </>
            ) : (
              <>
                <p>{content}</p>
                {isContentLong && (
                  <span className="review-toggle-button" onClick={() => handleToggle(index)}>접기</span>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Review;

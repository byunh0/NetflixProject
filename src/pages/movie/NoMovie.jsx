import React from 'react'
import './MovieStyle.css'
const NoMovie = ( {keyword}) => {
    
  return (
    <div style={{width:"100%" , height:"100vh" ,textAlign:"center",marginTop:"50px"}}>
    <div  >
        {keyword}라는 검색결과가 없습니다.
    </div>

    </div>
  )
}

export default NoMovie
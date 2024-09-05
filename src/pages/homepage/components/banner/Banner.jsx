import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
import ClipLoader from "react-spinners/ClipLoader"

import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'
import Button from 'react-bootstrap/Button';


const Banner = ({setSpoiler}) => {
  
   const gospoiler=()=>{
    setSpoiler(true)
   }
    const {data,isLoading, error,isError}=usePopularMoviesQuery();
    console.log("ddd",data)
    if (isLoading) {return <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div> } ;
    if (isError) return<Alert  variant="danger">{error.message}</Alert>;
    
  return (
    <div >
    <div style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path}`+")"}}
    className="banner">
     
   <div className="text-white banner-text-area">
<h1>{data?.results[0].title}</h1>
<p>{data && data.results[0].overview}</p>
<Button variant="light" className="playbutton-detail" onClick={gospoiler}>Play</Button>
   </div>

    </div>
    </div>
  )
}

export default Banner
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
  
    <div style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.results[0].poster_path}`+")"}}
    className="banner1">
     
   <div className="text-white banner-text-area1">
<h1>{data?.results[0].title}</h1>
<p>{data && data.results[0].overview}</p>
<Button variant="light"  onClick={gospoiler}>예고편</Button>
   </div>
    </div>
    
  )
}

export default Banner
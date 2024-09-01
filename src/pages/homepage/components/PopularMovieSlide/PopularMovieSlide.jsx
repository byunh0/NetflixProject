import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
import ClipLoader from "react-spinners/ClipLoader"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Alert } from 'bootstrap';
import MovieCard from '../Moviecard/MovieCard';
import './PopularMovieSlide.style.css'
const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const PopularMovieSlide = () => {
  const {data,isLoading,isError,error}= usePopularMoviesQuery()

  if(isLoading){
    return <ClipLoader color ="#f88c6b" loading={isLoading} size={70}/>
  }
  if(isError){
    return <Alert varient ="danger">{error.message}</Alert>
  }
  return (
    
    <div>
        <h3>Top Popular Movies</h3>
        <Carousel
 infinite={true}
 centerMode={true}
 itemClass="movie-slider p-1"
 containerClass="carousel-container"
 responsive={responsive}
>
    {/* 중괄호 쓰면 무조건 return써야함. 아니면 {}쓰지말고 바로써야함. */}
{data.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
</Carousel>

    </div>
  )
}

export default PopularMovieSlide
import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
import ClipLoader from "react-spinners/ClipLoader"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive}from "../../../../constants/responsive"
import './PopularMovieSlide.style.css'
const PopularMovieSlide = () => {
  const {data,isLoading,isError,error}= usePopularMoviesQuery()

  if(isLoading){
    return <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div>
  }
  if(isError){
    return <Alert varient ="danger">{error.message}</Alert>
  }
  return (
    
    <div>

<MovieSlider title='Popular Movies' movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default PopularMovieSlide
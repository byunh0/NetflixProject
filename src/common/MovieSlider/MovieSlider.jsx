import React from 'react';
import './MovieSlider.style.css';
import MovieCard from '../Moviecard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const MovieSlider = ({title,movies,responsive}) => {
  return (
    <div>
         <h3>{title}</h3>
        <Carousel
 infinite={true}
 centerMode={true}
 itemClass="movie-slider p-1"
 containerClass="carousel-container"
 responsive={responsive}
>
    {/* 중괄호 쓰면 무조건 return써야함. 아니면 {}쓰지말고 바로써야함. */}
{movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
</Carousel>

    </div>
  )
}

export default MovieSlider

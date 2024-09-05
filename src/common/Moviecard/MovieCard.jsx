import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hook/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'
const MovieCard = ({movie}) => {
  const navigate=useNavigate();
  const goDetail=(movie_id)=>{
    navigate(`/movie/${movie_id}`)
  }
  const {data:genreData}=useMovieGenreQuery();
  const showGenre=(genreIdList)=>{
    if(!genreData) return [] //map함수이므로 
    const genreNameList=genreIdList.map((id)=>{
     const genreObj= genreData.find((genre)=>genre.id===id)
     return genreObj.name;
    })
    return genreNameList
  }
  console.log("ggg",genreData);
  return (
    <div 
    style={{backgroundImage:"url("+
    `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    +")"}}
    className="movie-card" 
    onClick={()=>goDetail(movie.id)}>
<div className="overlay">
    <h1>{movie.title} </h1>
   
    {showGenre(movie.genre_ids).map((id)=> <Badge bg="danger" className="badge-id" >{id}</Badge>)}
    <div><FontAwesomeIcon icon={faStar} /> {movie.vote_average.toFixed(1)}</div>
    <div><FontAwesomeIcon icon={faCalendarDays} /> {movie.release_date}</div>
    <div>{movie.adult?"19세이상":""}</div>
  
    </div>
  
</div>
    
  )
}

export default MovieCard
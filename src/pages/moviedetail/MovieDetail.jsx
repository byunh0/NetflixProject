import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../utils/api';
import { useMovieDetail } from '../../hook/useMovieDetail';
import { Container,Row,Col, Badge, Alert } from 'react-bootstrap';
import './MovieDetailStyle.css'
import { useMovieGenreQuery } from '../../hook/useMovieGenre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClipLoader } from 'react-spinners';
import { useReview } from '../../hook/useReview';
const Moviedetail = () => {
  const{id}=useParams();
  const {data:genreData}=useMovieGenreQuery();
  // const {data:review}=useReview({id});
  const {data,isLoading,isError,error}=useMovieDetail({id});
 
 if (isLoading) {return <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div> } ;
    if (isError) return<Alert  variant="danger">{error.message}</Alert>;
  

 const showGenre=(genreIdList)=>{
   if(!genreData) return [] //map함수이므로 
   const genreNameList=genreIdList.map((id)=>{
    const genreObj= genreData.find((genre)=>genre===id)
    return genreObj.name;
   })
   return genreNameList
 }

  
  return (
    <Container style={{height:"100vh"}} className="movieDetail-big-container" > 
<Row className="movieDetail-container">
  <Col className="img-wrapper-container">
<div><img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`} className="img-wrapper"/></div>
  </Col>
  <Col className="Detail-container" >
<div className="Detail-margin">{data?.genres.map((id)=><Badge bg="danger" className="Detail-margin-Badge">{id.name}</Badge>)}</div>
<div className="Detail-title">{data?.title}</div>
<div className="Detail-margin">{data?.tagline}</div>
<div className="Detail-margin"><Badge bg="danger" className="Badge-padding">Average</Badge>{data?.vote_average.toFixed(1)}</div>
<div className="Detail-margin"><Badge bg="danger"  className="Badge-padding">Runtime</Badge>{data?.runtime}</div>
<div className="Detail-margin"><Badge bg="danger"  className="Badge-padding">Language</Badge>{data?.spoken_languages?.[0]?.name}</div>
<div className="Detail-margin"><Badge bg="danger"  className="Badge-padding">Release Date</Badge>{data?.release_date}</div>
<hr />
<div className="Detail-margin">{data?.overview}</div>

  </Col>
</Row>
    </Container> 
  )
}

export default Moviedetail
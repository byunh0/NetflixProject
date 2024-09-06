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
import Recomendation from './component/Recomendation';
import Review from './component/review/Review';
import DetailBanner from './component/moviedetailbanner/DetailBanner';
import Despoiler from './component/despoiler/Despoiler';
const Moviedetail = () => {
  const [despoiler,setDespoiler]=useState(false);
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
  
   <Container className="movieDetail-big-container"  > 
 
    {/* 추가사항 */}
    <Row><DetailBanner setDespoiler={setDespoiler}/></Row>
<Row className="movieDetail-container">
  <Col className="img-wrapper-container">
<img src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`} className="img-wrapper"/>
  </Col>
  <Col className="Detail-container" >
<div >{data?.genres.map((id)=><Badge bg="danger" className="Detail-margin-Badge" >{id.name}</Badge>)}</div>
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
<Row>
      <Recomendation id={id} />
</Row>
<Row>
      <Review id={id}/>
</Row>

{despoiler&&<div  className="hompageStyle">
{despoiler==true?(<div><Despoiler setDespoiler={setDespoiler}/></div>):
    (<div style={{display:"hidden"}}/>)
}
  </div>}
    </Container> 
   
    
  )
}

export default Moviedetail
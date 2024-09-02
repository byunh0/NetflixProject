import React from 'react'
import { useSearchMovieQuery } from '../../hook/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { ClipLoader } from 'react-spinners';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/Moviecard/MovieCard';
//경로 2가지
//1.navbar에서 클릭해서 온경우=>popularmovie보여줌.
//2.키워드를 입력해서 온 경우=> keyword와 관련된 영화들을 보여줌.
const Movie = () => {
  const [query,setQuery]=useSearchParams();
  const keyword = query.get("q");
  const {data,isLoading,isError,error}=useSearchMovieQuery({keyword})
  console.log("searchdata",data)
    if (isLoading) {return <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70}/></div> } ;
    if (isError) return<Alert  variant="danger">{error.message}</Alert>;
  
  return (
    <Container>
    <Row>
      <Col lg={4} xs={12}>
      {""}
      필터 {""}
      </Col>
      <Col lg={8} xs={12}>
      <Row>
      {data?.results.map((movie)=>(<Col lg={4} xs={12}><MovieCard movie={movie}/></Col>))}
      </Row>
      </Col>
      
    </Row>
    </Container>
  )
}

export default Movie
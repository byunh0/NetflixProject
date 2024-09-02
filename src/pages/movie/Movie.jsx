import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery';
import { useSearchParams } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { ClipLoader } from 'react-spinners';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/Moviecard/MovieCard';
import ReactPaginate from 'react-paginate';
//경로 2가지
//1.navbar에서 클릭해서 온경우=>popularmovie보여줌.
//2.키워드를 입력해서 온 경우=> keyword와 관련된 영화들을 보여줌.
const Movie = () => {
  const [query,setQuery]=useSearchParams();
  const keyword = query.get("q");
  const [page,setPage]=useState(1);
  const {data,isLoading,isError,error}=useSearchMovieQuery({keyword,page})
 console.log("ddd",data)
  const handlePageClick=({selected})=>{
 setPage(selected+1);
  }
  
 
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={12}//전체페이지
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page-1}//처음 초기값은 1이었는데 react가 0부터 카운트 0일때 1로
      />
    </Row>
    </Container>
  )
}

export default Movie
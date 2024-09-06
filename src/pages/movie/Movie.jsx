import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { ClipLoader } from 'react-spinners';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../common/Moviecard/MovieCard';
import ReactPaginate from 'react-paginate';
import './MovieStyle.css';
import NoMovie from './NoMovie';
import Moviegenre from './component/Moviegenre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Movie = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const [isSortedByPopularity, setIsSortedByPopularity] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  const navigate = useNavigate();
  console.log("ddd", data);
  const totalPages = Math.min(data?.total_pages || 1, 12);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <div className="bigContainer"><ClipLoader color="#f88c6b" loading={isLoading} size={70} /></div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  // 영화 정렬 함수
  const sortByPopularity = (movies) => {
    return movies.slice().sort((a, b) => b.popularity - a.popularity);
  };

  // 데이터 정렬 결정
  const sortedMovies = isSortedByPopularity ? sortByPopularity(data.results) : data.results;

  return (
    <Container>
      <Row>
        <Col lg={3} md={6} xs={12}>
          <Moviegenre />
          <div onClick={() => setIsSortedByPopularity(!isSortedByPopularity)} style={{fontSize:"18px" ,marginTop:"5px",marginButton:"5px"}}>
            Hot <FontAwesomeIcon icon={faSortDown} />
          </div>
        </Col>
        <Col lg={9} xs={12}>
          <Row>
            {sortedMovies.length === 0 ? (
              <Col><NoMovie page={page} keyword={keyword}/></Col>
            ) : (
              sortedMovies.map((movie) => (
                <Col lg={4} md={6} xs={12} className="Movie-movie-space" key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))
            )}
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPages} // 전체 페이지
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link2"
              previousClassName="page-item"
              previousLinkClassName="page-link2"
              nextClassName="page-item"
              nextLinkClassName="page-link2"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link2"
              containerClassName="pagination2"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1} // 처음 초기값은 1이었는데 react가 0부터 카운트 0일때 1로
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;

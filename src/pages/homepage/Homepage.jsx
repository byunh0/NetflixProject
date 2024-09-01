import React from 'react'
import Banner from "./components/banner/Banner";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
const Homepage = () => {
  return (
      //1.베너만들기 =>popular movie들고와서 첫번째 아이템 보여주기
      //2.popular movie
      //3.top rated movie
      //4.upcoming movie
    <div>
     <Banner/>
     <PopularMovieSlide/>
    </div>
  )
}

export default Homepage
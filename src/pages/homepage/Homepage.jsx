import React, { useState } from 'react'
import Banner from "./components/banner/Banner";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopratedMovie from './components/topratedmovie/TopratedMovie';
import UpcomingMovies from './components/upcomingmovies/UpcomingMovies';
import Spoiler from '../../common/spoiler/Spoiler';
import './HomepageStyle.css'
const Homepage = () => {
  const [spoiler,setSpoiler]=useState(false);

  return (
      //1.베너만들기 =>popular movie들고와서 첫번째 아이템 보여주기
      //2.popular movie
      //3.top rated movie
      //4.upcoming movie
    <div>
      <div className= {spoiler ? 'style2' : 'style1'}>
     <Banner setSpoiler={setSpoiler}/>
     <PopularMovieSlide/>
     <TopratedMovie/>
     <UpcomingMovies/>
</div>
{spoiler&&<div  className="hompageStyle">
{spoiler==true?(<div><Spoiler setSpoiler={setSpoiler}/></div>):
    (<div style={{display:"hidden"}}/>)
}
  </div>}
    </div>
  )
}

export default Homepage
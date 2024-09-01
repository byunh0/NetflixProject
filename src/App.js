import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/homepage/Homepage'
import Movie from './pages/movie/Movie'
import MovieDetail from './pages/moviedetail/MovieDetail'
import NotFoundPage from './pages/notfoundpage/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Banner from './pages/homepage/components/banner/Banner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {

  return (
    <div className="background-color">
    <QueryClientProvider client={queryClient}>
   <Routes>
    <Route path="/" element={<AppLayout/>}>
      //홈페이지 
      //영화 전체 보여주는 페이지(서치)
      //영화 디테일 페이지
      <Route index element={<Homepage/>}/>
      <Route path="movie" >
        <Route index element={<Movie/>}/>
        <Route path=":id" element={<MovieDetail/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>
   </Routes>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
   </div>
  )
}

export default App

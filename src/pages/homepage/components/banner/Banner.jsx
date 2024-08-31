import React from 'react'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'

const Banner = () => {
    const {data,isLoading}=usePopularMoviesQuery()
    if (isLoading) return <div>로딩 중...</div>;
    console.log("ddd",data)
  return (
    <div>
Banner
    </div>
  )
}

export default Banner
import React from 'react'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { useTopRatedMovies } from '../../../../hook/useTopRatedMovies'
import ClipLoader from "react-spinners/ClipLoader"
import { Alert } from 'bootstrap'
import { responsive } from '../../../../constants/responsive'
const TopratedMovie = () => {
    const {data, isLoading,isError,error}=useTopRatedMovies();
   
    if(isLoading){
        return <ClipLoader color ="#f88c6b" loading={isLoading} size={70}/>
    }
    if(isError){
        return <Alert varient ="danger">{error.message}</Alert>
    }
    return (
        <div>
            <MovieSlider title="Top Rated Movies" movies={data.results} responsive={responsive} />
        </div>
      )
}

export default TopratedMovie
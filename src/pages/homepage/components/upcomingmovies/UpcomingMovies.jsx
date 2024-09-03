import React from 'react'
import { useUpcomingMovies } from '../../../../hook/useUpcomingMovies'
import { ClipLoader } from 'react-spinners';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovies = () => {
    const {data,isLoading,isError,error}=useUpcomingMovies();
    console.log("upcomingdata",data)
    if(isLoading){
        return  <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div>
    }
    if(isError){return <Alert varient ="danger">{error.message}</Alert>}
    return (
        <div>
            <MovieSlider title="UpComing Movies" movies={data?.[0]?.data?.results} responsive={responsive}/>
        </div>
      )
}

export default UpcomingMovies
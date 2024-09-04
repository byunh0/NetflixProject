import React from 'react'
import { useRecomendation } from '../../../hook/useRecomendation'
import MovieSlider from '../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../constants/responsive'

const Recomendation = ({id}) => {
    
    const {data}=useRecomendation({id})
    console.log("recmo",data)
   
  return (
    <div>
  {/* <MovieSlider title={"Recomendation"} movies={data?.results} responsive={responsive}/> */}
    </div>
  )
}

export default Recomendation
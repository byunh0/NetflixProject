import React from 'react'
import { useRecomendation } from '../../../hook/useRecomendation'
import MovieSlider from '../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../constants/responsive'
import { ClipLoader } from 'react-spinners'
import { Alert } from 'react-bootstrap'

const Recomendation = ({id}) => {
    
    const {data,isLoading,isError,error}=useRecomendation({id})

    if(isLoading){
      return  <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} className="cliploader"/></div>
  }
  if(isError){
      return <Alert varient ="danger">{error.message}</Alert>
  }
  console.log("recmo",data)
  return (
    <div>
      {data?.results.length==0 ?(<div style={{display:"none"}}></div>):( <MovieSlider title={"Recomendation"} movies={data?.results} responsive={responsive}/>)}
  {/* <MovieSlider title={"Recomendation"} movies={data?.results} responsive={responsive}/> */}
    </div>
  )
}

export default Recomendation
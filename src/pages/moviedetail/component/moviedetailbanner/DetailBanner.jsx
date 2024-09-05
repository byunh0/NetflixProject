import React from 'react'
import './DetailBanner.style.css'
import { useMovieDetail } from '../../../../hook/useMovieDetail';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { Alert} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const DetailBanner = ({setDespoiler}) => {
    const{id}=useParams();
const {data,isLoading,isError,error}=useMovieDetail({id});
if (isLoading) {return <div className="bigContainer"><ClipLoader color ="#f88c6b" loading={isLoading} size={70} /></div> } ;
if (isError) return<Alert  variant="danger">{error.message}</Alert>;
console.log("data3",data)
const gospoiler=()=>{
    setDespoiler(true)
};
  return (
    <div  >
        <div style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data.poster_path}`+")"}}
    className="banner">
       
        <Button variant="light" className="spoiler-detail" onClick={gospoiler}>예고편</Button>
        
         </div>
     
    </div>
  )
}

export default DetailBanner
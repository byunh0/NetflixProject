import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useMovieGenreQuery } from '../../../hook/useMovieGenre';
import { useSearchMovieQuery } from '../../../hook/useSearchMovieQuery';
import Badge from 'react-bootstrap/Badge';
const Moviegenre = ({page}) => {
    const[newgenre,setNewgenre]=useState("")
   
    useEffect(()=>{
        console.log("newgenre",newgenre);
    },[newgenre])
    const {data:genreData}=useMovieGenreQuery();
    console.log("genre",genreData)
  return (
  <div>
   <Form.Select aria-label="Default select example">
      <option>select All</option>
     {genreData.map((id)=><option value="1">{id.name}</option>)} 
     
    </Form.Select>
  </div>
  )
}

export default Moviegenre


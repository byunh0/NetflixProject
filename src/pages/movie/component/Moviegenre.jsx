import React, { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useMovieGenreQuery } from '../../../hook/useMovieGenre';
import { useSearchMovieQuery } from '../../../hook/useSearchMovieQuery';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

const Moviegenre = () => {
    const [newgenre, setNewgenre] = useState("");
    const navigate=useNavigate();
    const { data: genreData } = useMovieGenreQuery();
    console.log("genre", genreData);
    // const allpage=()=>{
    //   navigate('/movie')
    // }
    useEffect(() => {
      if (newgenre && genreData && genreData.length > 0) {
        console.log("newgenre", newgenre);
        navigate(`/movie?q=${newgenre}`);
    }
}, [newgenre, genreData]);

   

    const handleGenreChange = (event) => {
       event.target.value.length==0?  navigate('/movie'):setNewgenre(event.target.value);
    };

    return (
        <div>
            <Form.Select aria-label="Default select example" onChange={handleGenreChange}>
                <option value="">All page</option>
                {genreData && genreData.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </Form.Select>
            {/* <button onClick={allpage}>All page</button> */}
        </div>
    );
};

export default Moviegenre;

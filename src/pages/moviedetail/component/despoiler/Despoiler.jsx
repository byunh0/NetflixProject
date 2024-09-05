import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '../../../../hook/useMovieDetail';
import { useVedio } from '../../../../hook/useVedio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Despoiler = ({setDespoiler}) => {
    const closeButton=()=>{
        setDespoiler(false);
    }
  const {id}=useParams();
  const {data}=useMovieDetail({id});
  console.log("data10",data)
  const vedioId=data?.id;
  console.log(vedioId);
  const {data:youtubeVedio}=useVedio(vedioId);
  console.log("youbueVedio",youtubeVedio);
  const idkey=youtubeVedio?.data?.results?.[1]?.key
  console.log("idkey",idkey)
   const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo(); 
};

const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1, 
    },
};
  return (
  <div
      className="modal show spoiler-show "
       style={{ display: 'block', position: 'initial'  }}
    >
      
      <div className="spoilerstyle_vh">
    <div className="spoiler-button">
       <Button variant="secondary" className="spoiler-button" onClick={closeButton}><FontAwesomeIcon icon={faX} /></Button>
         </div>
        
      {idkey ? (
             <div className="video-container">
                  <YouTube
                       videoId={idkey}
                        opts={opts}
                        onReady={onPlayerReady}
                     />
                   </div>
                ) : (
                    <div>sorry for nothing</div>
                )}
            </div> 
         </div>

    )
};

export default Despoiler;
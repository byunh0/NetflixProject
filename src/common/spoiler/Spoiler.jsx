import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Spoiler.style.css'
import { usePopularMoviesQuery } from '../../hook/usePopularMovies';
import { useVedio } from '../../hook/useVedio';
import YouTube, { YouTubeProps } from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
const Spoiler = ({setSpoiler}) => {
  const closeButton=()=>{
    setSpoiler(false)
  }
  const {data}=usePopularMoviesQuery();
  // console.log("movq",data)
  const vedioId=data?.results?.[0]?.id;
  // console.log("vedioId",vedioId);
  const {data:youtubeVedio}=useVedio(vedioId);
  // console.log("youbueVedio",youtubeVedio);
  const idkey=youtubeVedio?.data?.results?.[1]?.key
  // console.log("idkey",idkey)
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo(); // 비디오 플레이어가 준비되면 바로 시작
};

const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
        autoplay: 1, // 비디오 자동 재생
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
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} /> */}
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
    );
};

export default Spoiler;


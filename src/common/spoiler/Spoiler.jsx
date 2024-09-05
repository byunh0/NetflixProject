import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Spoiler.style.css'
import { usePopularMoviesQuery } from '../../hook/usePopularMovies';
import { useVedio } from '../../hook/useVedio';

import YouTube, { YouTubeProps } from 'react-youtube';

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
    event.target.pauseVideo(); // 비디오 플레이어가 준비되면 일시 정지
};

const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
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
        
          <Button variant="secondary" className="spoiler-button" onClick={closeButton}>Close</Button>
          {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} /> */}
          {idkey ? (
                    <YouTube
                        videoId={idkey}
                        opts={opts}
                        onReady={onPlayerReady}
                    />
                ) : (
                    <div>sorry for nothing</div>
                )}
            </div>
        </div>
    );
};

export default Spoiler;


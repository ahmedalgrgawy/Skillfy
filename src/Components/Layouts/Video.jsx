import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { ImVolumeMute } from "react-icons/im";
import { RiForward15Line } from "react-icons/ri";
import { RiReplay15Line } from "react-icons/ri";


function Video({ videoSrc }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const videoRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleTimeUpdate = (event) => {
        setCurrentTime(event.target.currentTime);
    };

    const handleSeekForward = () => {
        const newTime = videoRef.current.getCurrentTime() + 15;
        videoRef.current.seekTo(newTime);
    };

    const handleSeekBackward = () => {
        const newTime = videoRef.current.getCurrentTime() - 15;
        if (newTime >= 0) {
            videoRef.current.seekTo(newTime);
        }
    };

    const handleFullScreenToggle = () => {
        if (isFullScreen) {
            document.exitFullscreen();
            setIsFullScreen(false);
        } else {
            videoRef.current.requestFullscreen();
            setIsFullScreen(true);
        }
    }

    return (
        <>

            <ReactPlayer
                ref={videoRef}
                url={videoSrc}
                playing={isPlaying}
                controls={true}
                onSeek={handleTimeUpdate}
                volume={1}
                muted={muted}
                width='100%'
                height='100%'
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onStart={handleFullScreenToggle}
                style={{ borderRadius: '80px' }}
            />

            {/* <div className='flex gap-16'>

                <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? <FaPause /> : <FaPlay />}</button>

                <button onClick={() => setMuted(!muted)}>{muted ? <FaVolumeMute /> : <ImVolumeMute />}</button>

                <button onClick={handleSeekForward}><RiForward15Line /></button>

                <button onClick={handleSeekBackward}><RiReplay15Line /></button>

                <button onClick={handleFullScreenToggle}>{isFullScreen ? 'Exit Full Screen' : 'Full Screen'}</button>

            </div> */}
        </>
    );
}

export default Video;
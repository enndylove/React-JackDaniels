import GifWin from '../images/gif_win.mp4';
import {useRef} from "react";

const Gif = ({ win, loseSrc, onAttempt, attempts  }) => {
    const videoRef = useRef(null);


    const openBox = () => {
        if (attempts >= 3) return;
        if (videoRef.current) {
            videoRef.current.play();
        }
        onAttempt(win);
    };
    return (
        <video
            className="gifts__gif cursor-pointer w-full"
            ref={videoRef}
            onClick={openBox}
            controls={false}
        >
            <source src={win ? GifWin : loseSrc} type="video/mp4"/>
        </video>
    );
};

export default Gif;

import BoxBottom from '../images/box_bottom.svg';
import BoxTop from '../images/box_top.svg';
import BoxPrize from '../images/prize.svg';
import {useState} from "react";

const Gif = ({ win, onAttempt, attempts }) => {
    const [stateOpen, setStateOpen] = useState(false);

    const openBox = () => {
        if (attempts >= 3) return;
        setStateOpen(true)
        onAttempt(win);
    };

    return (
        <div
            className={`gifts__gif ${stateOpen} cursor-pointer w-full`}
            onClick={() => openBox()}
        >
            <div className="gifts__gif-wrapper relative">
                {
                    win ? (
                        <img src={BoxPrize} alt="box-prize" className="gifts__gif-prize absolute left-2/4"/>
                    ) : <></>
                }
                <img src={BoxBottom} alt="box-bottom" className="gifts__gif-bottom relative"/>
                <img src={BoxTop} alt="bot-top" className={`gifts__gif-top ${win} absolute top-0`}/>
            </div>
        </div>
    )
};

export default Gif;

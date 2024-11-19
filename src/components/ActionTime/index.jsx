import "./index.scss"

import IconTimer from "./images/timer.svg"
import {useEffect, useState} from "react";

const ActionTime = ({minutes, seconds}) => {
    const [minute, setMinute] = useState(minutes)
    const [second, setSecond] = useState(seconds)

    useEffect(() => {
        const timer = setInterval(() => {
            if (second > 0) {
                setSecond((prevSecond) => prevSecond - 1);
            } else if (minute > 0) {
                setMinute((prevMinute) => prevMinute - 1);
                setSecond(59);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minute, second]);

    return (
        <div className="action-time flex justify-center items-center w-full">
            <div className="action-time__content flex items-center">
                <img
                    className="action-time__content-icon"
                    src={IconTimer}
                    loading={"lazy"}
                    alt="timer-icon"
                />
                <p className="action-time__content-title">
                    You only have
                    <span>
                        {" " + minute}
                        m:
                        {second}
                        s
                    </span>
                    , to participate.
                </p>
            </div>
        </div>
    )
}

export default ActionTime;
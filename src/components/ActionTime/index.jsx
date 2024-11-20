import "./index.scss"

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
                <svg className="action-time__content-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17.875C13.797 17.875 16.875 14.797 16.875 11C16.875 7.20304 13.797 4.125 10 4.125C6.20304 4.125 3.125 7.20304 3.125 11C3.125 14.797 6.20304 17.875 10 17.875Z" stroke="black" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M10 11L13.0937 7.90625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.125 1.625H11.875" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

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
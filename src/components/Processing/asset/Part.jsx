import IconCheck from '../images/icon-check.svg'
import {useEffect, useState} from "react";

const Part = ({title, delay}) => {
    const [style, setStyle] = useState({})

    useEffect(() => {
        setStyle({transitionDuration: 0.5 + "s", transitionDelay: delay + "s", opacity: 1})
    }, [])

    return (
        <div className="processing__part flex items-center">
            <img
                src={IconCheck}
                alt="icon-check"
                className="processing__part-icon"
                style={style}
            />
            <div className="processing__part-title">{title}</div>
        </div>
    )
}

export default Part;
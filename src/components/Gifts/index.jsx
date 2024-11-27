import "./index.scss";
import Gif from "./asset/Gif";
import {useEffect, useState} from "react";
import Result from "./asset/Result";

const Gifts = ({winBox}) => {
    const [boxes, setBoxes] = useState(Array(9).fill(false));
    const [attempts, setAttempts] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [isLose, setIsLose] = useState(false);
    const maximumTry = ["1st Try", "2nd Try", "3rd Try"];

    useEffect(() => {
        const updatedBoxes = Array(9).fill(false);
        updatedBoxes[winBox - 1] = true;
        setBoxes(updatedBoxes);
    }, [winBox]);

    const handleAttempt = (heWin) => {
        if (heWin) {
            setTimeout(() => {
                setIsWin(true);
            }, 3000);
            return;
        }

        setAttempts((prev) => {
            if (prev < 2) {
                return prev + 1;
            } else {
                setTimeout(() => {
                    setIsLose(true);
                }, 3000);
            }
            return prev + 1;
        });
    };


    return (
        <>
            <section className="section gifts absolute items-center justify-center">
                <div className="gifts__trys flex justify-between items-center w-full">
                    {
                        maximumTry.map((tryO, index) => {
                            return (
                                <span
                                    className={`gifts__try text-center w-full ${index === attempts ? "this" : ""}`}
                                    key={index}
                                >
                                {tryO}
                            </span>
                            )
                        })
                    }
                </div>
                <div className="gifts__container grid gap-0 p-0">
                    {boxes.map((box, i) => (
                        <Gif
                            key={i}
                            win={box}
                            onAttempt={handleAttempt}
                            attempts={attempts}
                        />
                    ))}
                </div>
            </section>

            {isWin && (
                <Result win={true} key={"ResultWin"} />
            )}
            {isLose && !isWin && (
                <Result win={false} key={"ResultLose"} />
            )}

        </>
    )
}

export default Gifts;
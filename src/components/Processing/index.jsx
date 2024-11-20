import './index.scss'
import {useEffect, useState} from "react";
import Part from "./asset/Part";
import Gifts from "../Gifts";

const Processing = () => {
    const [processWidth, setProcessWidth] = useState(0)
    const [nextStep, setNextStep] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setProcessWidth(35 );
        }, 2000)
        setTimeout(() => {
            setProcessWidth(65);
        }, 4000)
        setTimeout(() => {
            setProcessWidth(100);
        }, 5000)
        setTimeout(() => {
            setNextStep(true)
        }, 6500)
    }, [])

    return (
        <>
            {!nextStep ? (
                <section className="section processing wrapper m-auto">
                    <div className="processing__content questions__content">
                        <div className="processing__content-title questions__content-title">
                            We are checking your answers...
                        </div>
                        <div
                            className="processing__content-progress relative w-full"
                        >
                        <span
                            style={{width: processWidth + "%"}}
                        ></span>
                        </div>
                        <div className="processing__parts">
                            <Part
                                title="You answered 4 out of 4 questions"
                                delay="3"
                            />
                            <Part
                                title="There are no previous polls from your IP address."
                                delay="5"
                            />
                            <Part
                                title="There are still prizes available!"
                                delay="6"
                            />
                        </div>
                    </div>
                    <div className="questions__content-nav flex items-center">
                        <span>Exclusive Prizes</span>
                        <span>Quick and Easy</span>
                        <span>only 6 left</span>
                    </div>
                </section>
            ) : (
                <Gifts key={"Gifts"} winBox={5} />
            )}
        </>
    );
}
export default Processing;
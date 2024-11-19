import './index.scss'

import ImageJackDaniels from './images/jackdaniels.png'

const Welcome = ({textButton, primaryTitle, title}) => {
    return(
        <>
            <section className="section welcome wrapper flex flex-col items-center">
                <div className="welcome__sub-button w-full text-center">
                    {textButton}
                </div>
                <h1 className="welcome__title text-center">
                <span>
                    {primaryTitle}
                </span>
                    {title}
                </h1>
                <p className="welcome__description text-center">
                    Today, 2 June, 2024, you have been chosen to participate in this survey.
                    <span>
                        {" "}It will only take a minute of your time and you can receive a fantastic prize:
                    </span>
                    {" "}Limited Edition Jack Daniel's Sinatra Century!
                </p>
                <img
                    className="welcome__banner"
                    loading={"lazy"}
                    src={ImageJackDaniels}
                    alt="banner"
                />
            </section>
            <section className="section welcome__info wrapper m-auto">
                <p className="welcome__description">
                    Every Sunday we choose 10 random users giving them the
                    <span>
                        {" "}chance to win fabulous prizes.
                    </span>
                    {" "}Today's prize is a Limited Edition Jack Daniel's Sinatra Century!
                    <span>
                        {" "}There will be 10 lucky winners. Only for those living in the United States!
                    </span>
                    <br/><br/>
                    This survey aims to improve the service for our users.
                </p>
            </section>
        </>
    )
}

export default Welcome;
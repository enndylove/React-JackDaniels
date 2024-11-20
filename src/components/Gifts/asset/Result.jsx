const Result = ({win}) => {
    return (
        <>
            {win ? (
                <div className="gifts__result absolute left-0 top-0 w-full h-full flex flex-col justify-end">
                    <div className={`gifts__content overflow-y-auto flex flex-col`}>
                        <img
                            src={require('../images/jack.png')}
                            loading={"lazy"}
                            alt="jack daniels"
                            className="gifts__content-image"
                        />
                        <h3 className="gifts__content-title">
                            You did it!
                        </h3>
                        <p className="gifts__content-description">
                            You won the Limited Edition Jack
                            <br/>
                            Daniel's Sinatra Century!
                        </p>
                        <h6 className="gifts__content-sup gifts__content-suptitle">
                            How to get prize?
                        </h6>
                        <p className="gifts__content-sup gifts__content-info">
                            1. You will be directed to the website of our certified distributors.
                        </p>
                        <p className="gifts__content-sup gifts__content-info">
                            2. Enter your address to get your Limited Edition Jack Daniel's Sinatra Century.
                        </p>
                        <p className="gifts__content-sup gifts__content-info">
                            3. The Limited Edition Jack Daniel's Sinatra Century will be delivered within 5-7 days
                        </p>

                        <a href="/" className="gifts__content-btn flex items-center w-full justify-center">
                            Apply now
                            <span>
                        <svg className="gifts__content-btn-icon" width="24" height="25" viewBox="0 0 24 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 12.5H20.25" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M13.5 5.75L20.25 12.5L13.5 19.25" stroke="black" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        </svg>
                    </span>
                        </a>
                    </div>
                </div>

            ) : (
                    <div className="gifts__result absolute left-0 top-0 w-full h-full flex flex-col justify-end">
                    <div className={`gifts__content overflow-y-auto flex flex-col`}>
                        <img
                            src={require('../images/jack.png')}
                            loading={"lazy"}
                            alt="jack daniels"
                            className="gifts__content-image"
                        />
                        <h3 className="gifts__content-title">
                            You lose!
                        </h3>
                        <p className="gifts__content-description">
                            You lose the Limited Edition Jack
                        </p>

                        <a href="/" className="gifts__content-btn flex items-center w-full justify-center">
                            Try again
                            <span>
                                <svg className="gifts__content-btn-icon" width="24" height="25" viewBox="0 0 24 25"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12.5H20.25" stroke="black" strokeWidth="2" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M13.5 5.75L20.25 12.5L13.5 19.25" stroke="black" strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                )}
        </>
    )
}

export default Result;
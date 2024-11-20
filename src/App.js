import { lazy, useState } from "react";

const ActionTime = lazy(() => import("./components/ActionTime"));
const Header = lazy(() => import("./components/Header"));
const Welcome = lazy(() => import("./components/Welcome"));
const Questions = lazy(() => import("./components/Questions"));

function App() {
    const [allDone, setAllDone] = useState(false);

    const handleAllDone = () => {
        setAllDone(true);
    };

    return (
        <div className={`App ${allDone ? "full-height" : ""}`}>
            <ActionTime minutes="8" seconds="0" />
            <Header date="2 June 2024" />

            {!allDone ? (
                <Welcome
                    textButton="Exclusive Offer for You!"
                    primaryTitle="Congratulations!"
                    title=" You Could Win a Limited Edition Jack Daniel's Sinatra Century!"
                />
            ) : <></>}

            <Questions onAllDone={handleAllDone} />
        </div>
    );
}

export default App;

import {lazy} from "react";

const ActionTime = lazy(() => import("./components/ActionTime"));
const Header = lazy(() => import("./components/Header"));
const Welcome = lazy(() => import("./components/Welcome"));

function App() {
  return (
    <div className="App">
      <ActionTime
          minutes="1"
          seconds="20"
      />
      <Header
          date="2 June 2024"
      />
      <Welcome
          textButton="Exclusive Offer for You!"
          primaryTitle="Congratulations!"
          title=" You Could Win a Limited Edition Jack Daniel's Sinatra Century!"
      />
    </div>
  );
}

export default App;

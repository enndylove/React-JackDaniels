import {lazy} from "react";

const ActionTime = lazy(() => import("./components/ActionTime"));
const Header = lazy(() => import("./components/Header"));

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
    </div>
  );
}

export default App;

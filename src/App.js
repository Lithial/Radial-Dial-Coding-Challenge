import './App.scss';
import Dial from "./components/dial/dial";
import StateChanger from "./components/stateChanger/stateChanger";

function App() {
  return (<div className="app">
    <div className="flex">
      <Dial circleName="Circle Name"/>
      <StateChanger/>
    </div>
  </div>);
}

export default App;

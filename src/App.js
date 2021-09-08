import './App.scss';
import Dial from "./components/dial/dial";


const indicators = [
  {
    type: "lit",
  },
  {
    type: "unlit",
  },
  {
    type: "unlit",
  },
  {
    type: "unlit",
  },
  {
    type: "lit",
  },
  {
    type: "red",
  },
  {
    type: "red",
  },
  {
    type: "lit",
  },
  {
    type: "unlit",
  },
  {
    type: "lit",
  },
  {
    type: "red",
  },
  {
    type: "red",
  },
  {
    type: "lit",
  },
]
function App() {
  return (<div className="App">
    <Dial circleName="Circle Name" indicators={indicators}/>
  </div>);
}

export default App;

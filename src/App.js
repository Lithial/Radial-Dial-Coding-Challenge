import './App.scss';
import Dial from "./components/dial/dial";


const indicators = [
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
    type: "lit",
  },
  {
    type: "unlit",
  },
  {
    type: "unlit",
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
  // {
  //   type: "red",
  // },
  // {
  //   type: "lit",
  // },
  // {
  //   type: "lit",
  // },
  // {
  //   type: "unlit",
  // },
  // {
  //   type: "unlit",
  // },
  // {
  //   type: "unlit",
  // },
  // {
  //   type: "lit",
  // },
  // {
  //   type: "red",
  // },
  // {
  //   type: "red",
  // },
  // {
  //   type: "lit",
  // },
  // {
  //   type: "unlit",
  // },
  // {
  //   type: "lit",
  // },
  // {
  //   type: "red",
  // },
  // {
  //   type: "red",
  // },
  // {
  //   type: "lit",
  // },
]
function App() {
  return (<div className="app">
    <Dial circleName="Circle Name" indicators={indicators}/>
  </div>);
}

export default App;

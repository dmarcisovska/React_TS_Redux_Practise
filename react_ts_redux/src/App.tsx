import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./components/Counter";
import "./App.css";

// Store 
interface CounterState {
  count: number;

}



interface userState {
  isSignedIn: boolean;
}

// Actions 

const increment = {type: "INCREMENT"} 
const decrement = {type: "DECREMENT"} 

// Reducers 



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;

import React,{createRef} from "react";
import "./styles.css";

export default function App() {
 const parnet=createRef();
  return (
    <div className="App">
      <h1 onClick={()=>{
        console.log(parnet.current);
      }}>Hello CodeSandbox</h1>
    
      <h2 ref={parnet}>Start editing to see some magic happen!</h2>
    </div>
  );
}

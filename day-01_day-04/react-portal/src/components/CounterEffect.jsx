import { useState,useEffect } from "react";
const CounterEffect = () => {
    const [val,setVal] = useState(0);
    useEffect(()=>{
        console.log("calls useEffect");
        document.title = `Increment ${val}`;
    })
  return <div>
    <h1>{val}</h1>
    <button onClick={()=> setVal(val+1)}>Submit</button>
  </div>;
};

export default CounterEffect;

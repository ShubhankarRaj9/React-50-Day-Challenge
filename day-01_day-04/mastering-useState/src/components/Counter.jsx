import { useState } from "react"
const Counter = () => {
    const [count,setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    }
    const handleDecrement = () =>{
        setCount(count-1);
    }
  return (
    <div>
        <p>You Clicked {count} times</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter
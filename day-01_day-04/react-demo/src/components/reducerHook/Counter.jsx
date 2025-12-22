import { useReducer } from "react";
import { initialState,counterReducer } from "./counterReducer"
import { useState } from "react";
const Counter = () => {
    const [state,dispatch] = useReducer(counterReducer,initialState);
    const [inputValue,setInputValue] = useState(0);
    const handleIncrement = () =>{
        dispatch({type:"increment"})
    };
    const handleDecrement = () => {
        dispatch({type:"decrement"});
    }
    const handleReset = () => {
        dispatch({type:"reset"});
    } 
    const handleIncrementByAmount = () =>{
        dispatch({type:"incrementByAmount", payload:inputValue})
    };
    const handleDecrementByAmount = () => {
        dispatch({type:"decrementByAmount",payload:inputValue});
    }
  return (
    <div>
        <h1>Counter : {state.count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>RESET</button>
        <div>
            <input type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))}/>
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
    </div>
  )
}

export default Counter;
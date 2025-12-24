import { useRef } from 'react'

const FocusInput = () => {
    const inputElement = useRef(null);
    
    const focusInput = () =>{
        if(inputElement.current){
        inputElement.current.focus();
        }
    }
  return (
    <div>
        <input type='text' ref={inputElement}
        placeholder='Click the button to focus'
        />
        <button onClick={()=>focusInput()}>Focus</button>
    </div>
  )
}

export default FocusInput
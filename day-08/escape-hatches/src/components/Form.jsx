import { useRef,Fragment } from "react";

const Form = () => {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
    return <Fragment>
        <hr/>
        <h1> Form </h1>
        <input ref={inputRef}/>
        <button onClick={handleClick}>Focus the input </button>
    </Fragment>
}
export default Form;
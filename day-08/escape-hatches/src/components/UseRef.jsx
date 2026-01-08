import { useRef } from "react";
const UseRef = () => {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log("You clicked " + ref.current + " times!");
  };
  return <button onClick={handleClick}>Click me!</button>;
};

export default UseRef;

import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("call useEffect");
  });
  return (
    <div>
      <button onClick={()=>(
        console.log("counter")
      )}>Btn 1</button>
    </div>
  );
};

export default BasicEffect;

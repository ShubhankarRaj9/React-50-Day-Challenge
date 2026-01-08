import * as motion from "motion/react-client";
import "../style.css"
export default function EnterAnimation() {
  return (
    <motion.div 
    className="box"
    animate={{
      rotate:[0,0,180,270],
      borderRadius:[0, 25, 50, 25, 0],
    }}
    transition={{
      duration:10
    }}
    />
  );
}



import { useState } from "react";

const cardVariant = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000"
    >
      <motion.div
        variants={cardVariant}
        inital="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        <div className="absolute inset-0 bg-white flex items-center justify-center text-xl font-bold">
          Front Side
        </div>
        <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180">
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;

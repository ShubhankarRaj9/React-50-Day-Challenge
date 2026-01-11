import { motion } from "motion/react";
const AnimatedCard = () => {
  return (
    <motion.div
    
    initial={{
        scale:1,rotate:0
    }}

    whileHover={{scale1:0.5,rotate:3 }}
    whileTap={{scale:0.95}}
    drag
    dragConstraints={{
        left:-50,
        right:50,
        top:-50,
        bottom:50,
    }}
    dragElastic={0.2}
    transition={{type:"spring",stiffness:300}}
    className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
        <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Image"/>
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In molestiae maiores perferendis alias adipisci, culpa itaque earum magni sit soluta? Iste incidunt neque aperiam dicta quo ea maiores voluptate laudantium</p>
            <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition">Learn More</button>
        </div>
    </motion.div>
  )
}

export default AnimatedCard;


// {/* whileHover */}
//       <motion.div className="box" 
//       whileHover={{ scale: 1.2, rotate: 10 }}
//       transition={{
//         type: "spring", stiffness: 300
//       }} 
//       />
//       <br />
//       <br />
//       {/* whileTap */}
//       <motion.div className="box" 
//       whileTap={{ scale: 0.8, backgroundColor:"crimson" }}
//       transition={{
//         type: "spring", stiffness: 300
//       }} 
//       />
//       <br />
//       <br />
//       <motion.div className="box" drag dragConstraints={{top:50,
//         left:-50,
//         right:50,
//         bottom:-50
//       }}/>
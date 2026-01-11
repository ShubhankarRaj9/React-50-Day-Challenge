import { motion } from "motion/react"

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.8 }
    }
}

const childVariants = {
    hidden: { opacity: 0, y:20 },
    visible: { opacity: 1, y: 0 }
}

export const Stagger = () => {
    return (
        <motion.div variants={parentVariants} initial="hidden"
            animate="visible"
        >
            {
                [...Array(5)].map((_, index) => (
                    <motion.div variants={childVariants} className="box mt-8" key={index}>

                    </motion.div>
                ))
            }
        </motion.div>
    )
}

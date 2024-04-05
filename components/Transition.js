import { motion } from "framer-motion";

// Variants define the animation properties for different states
const transitionVariants = {
  
  initial: {
    x: "100%",   // Initially start from the right side of the screen
    width: "100%",  // Initially have full width
  },
  
  
  animate: {
    x: "0%",   // Move to the left side of the screen
    width: "0%",  // Reduce width to 0%
  },
  
  
  exit: {
    x: ["0%", "100%"],  // Move from left to right
    width: ["0%", "100%"], // Increase width to full
  },
};

const Transition = () => {
  return (
    <>
      {/* Three motion.div components represent three colored layers */}
      {/* Each div animates according to the specified transition variants */}
      {/* Background colors and delays differ to create a layering effect */}
      
      {/* First layer */}
      
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#2e2257]"
        
        variants={transitionVariants} 
         // Apply transition variants
        
        initial="initial"
           // Initial animation state
        
        animate="animate"   
        // Animation state after initial animation

        
        exit="exit"
           // Animation state when component exits
        
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}  // Animation duration and easing
      >
      </motion.div>

      
      
      
      {/* Second layer */}
      
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>

      
      
      {/* Third layer */}
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
    </>
  );
};

export default Transition;

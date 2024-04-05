//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* {text} */}
          <div className="text-center flex xl:w-[30vm] flex-col lg:text-left">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
               <span className="text-accent"> My Work</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              {/* Syntactically Awesome Style Sheets:  saas */}
              {/* Dive into my portfolio showcasing dynamic ReactJS projects with
              Next.js,Node js,Tailwind CSS, Sass, Redux, and HTML5 canvas
              creations. */}

<span>Explore my portfolio featuring dynamic ReactJS projects built with Next.js,
          enhanced by Node.js backend, and styled with Tailwind CSS and Sass. 
          Discover captivating creations utilizing HTML5 canvas and seamless state management with Redux.</span>
          



            </motion.p>
          </div>
          {/* {slider} */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

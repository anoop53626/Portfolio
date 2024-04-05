import React, { useState } from "react";
// import { SiC, SiCpp } from "react-icons/si";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaNode,
  FaDatabase,
  FaPhp,
  FaPython,
  FaC, // Added C icon
  FaCpp, // Added C++ icon

} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// about data
const aboutData = [
  // {
  
  
  //   title: "frameWorks",
  //   info: [
  //     {
  //       title: "Frontend Development",
  //       icons: [
  //         <FaHtml5 key={1} />,
  //         <FaCss3 key={2} />,
  //         <FaJs key={3} />,
  //         <FaFigma key={4} />,
  //         <FaReact key={5} />,
  //         <SiNextdotjs key={6} />,
  //         <SiFramer key={7} />,
  //       ],
  //     },
  //     {
  
  
  
  //       title: "Backend Development",
  //       icons: [
  //         <FaNode key={1} />, <FaDatabase key={2} />
  //       ],
  //     },
  //   ],
  // },
  
 
  {
    title: "Languages",
    info: [
      {
        title: "Programming Languages",
        icons: [
          // <FaPython key={1} />,
          <FaJava key={2} />, // Java icon
          <FaJs key={3} />, // JavaScript icon
          
          <FaHtml5 key={4} />, // HTML5 icon - Highlighted: Added HTML5 icon
          <FaCss3 key={5} />, // CSS3 icon - Highlighted: Added CSS3 icon
          // <FaC key={7} />, // C icon - Added C icon
          // <FaCpp key={6} />, // C icon
          "C", // C language
         "C++", // C++ language
         ],
      },


      // {
      //   title: "other Languages",
      //   icons: [
      //     // <FaPhp key={1} />,
      //     // <SiNextdotjs key={2} />,
      //     // <FaWordpress key={3} />,
      //   ],
      // },
    ],
  },


  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "  ",
  //       stage: "React js developer",
  //     },
  //     {
  //       title: "   ",
  //       stage: "Frontend Developer",
  //     },
  //   ],
  // },
  
  {
    title: "credentials",
    info: [
      {
        title: " Gate Qualified  ",
        stage: " 2024  ",
      },
  //     {
  //       title: "  ",
  //       stage: " ",
  //     },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* {avatar img} */}
      
      
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]    "
      >
      
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row
       gap-x-6"
      >
      
      
        {/* {text} */}
        <div className=" justify-normal ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >

<span style={{ fontSize: 'smaller' }}>
      Dare to dream,{' '}
      <span className="text-accent">dare to create,</span>{' '}
      and let your imagination be the spark that ignites greatness.
    </span>



{/*      
      Dare to dream,{' '}
      <span className="text-accent" style={{ fontSize: 'smaller' }}> dare to create, </span>
      and let your imagination be the spark that ignites greatness.
    */}
    

          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            // className="max-w-[300px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
      









      {/* about yourself and some information about yourself */}
      
            {/* <span     className="font-bold text-xl lg:text-2xl lg:mb-3 text-accent font-bold  style={{ fontSize: 'smaller' }}">Anoop</span>,  */}
            <span className="font-bold text-sm lg:text-xl lg:mb-3 text-accent">Anoop,</span>

            <span>B.Tech student at IERT Prayagraj (U.P).</span><br />
            <span>Computer Science and Enginnering</span><br />
            <span>Passing Year: 2023</span><br />
            <span>CGPA: 8.02/10</span>




          </motion.p>
          {/* {counters} */}
          
          
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            
          {/* projects related informations */}
          
          <span className="font-bold text-xl lg:text-2xl lg:mb-3"> Ongoing Projects : </span>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> 
              </div>
            </div>



            <span className="font-bold text-xl lg:text-2xl lg:mb-3">Finished Projects :</span>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
            </div>
          </motion.div>
        </div>


        {/* {info} */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[480px]"
        >


          <span className="font-bold text-xl lg:text-3xl lg:mb-5">
            Technical Skills
          </span>
          <div
            className="overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "transparent transparent", // change the color to match your background
            }}
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-[100%] after:transition-all after:duration-300"
                    }
                  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                   after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* {title} */}
                    <div>{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* {icons} */}
                      {item.icons?.map((icon, itemindex) => {
                        return (
                          <div key={itemindex} className="text-2xl">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

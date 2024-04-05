// Import necessary modules
import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Pagination } from "swiper"; // Import Pagination module from Swiper
import { BsArrowRight } from "react-icons/bs"; // Import ArrowRight icon from React Icons

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import image paths
// import thumb3 from "/public/thumb3.png";
// import thumb2 from "/public/thumb2.png";
// import thumb4 from "/public/thumb4.png";
// import thumb1 from "/public/thumb1.png";
// import thumb5 from "/public/thumb5.png";
// import thumb7 from "/public/thumb7.png";
// import thumb8 from "/public/thumb8.png";

// Define data for slides
const workSlides = {
  slides: [
    // {
    //   images: [
    //     // {
    //     //   path: thumb3,
    //     // },
    //     // {
    //     //   path: thumb2,
    //     // },
    //     // {
    //     //   path: thumb4,
    //     // },
    //     // {
    //     //   path: thumb1,
    //     // },
    //   ],
    // },
    {
      images: [
        // {
        //   path: thumb5,
        // },
        // {
        //   path: thumb7,
        // },
        // {
        //   path: thumb8,
        // },
      ],
    },
  ],
};

// Define and export WorkSlider component
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }} // Enable clickable pagination
      modules={[Pagination]} // Include Pagination module
      className="h-[280px] sm:h-[480px]" // Set class for styling
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer"> {/* Add target="_blank" and rel="noopener noreferrer" for security */}
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image // Use Next.js Image component instead of regular <img> tag
                          src={image.path}
                          width={500}
                          height={300}
                          alt="Project Thumbnail" // Set alt attribute with image title
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* Removed the live project figures */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                            {/* Removed the live project figures */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

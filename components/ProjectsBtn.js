// Importing necessary components and images
import Image from "next/image";

import roundedtextimg from "/public/rounded-text.png";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      {/* Link to navigate to the "Work" page */}

      <Link href={"/work"} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10">
        {/* Image to display the rounded text with animation */}

        <Image
          src={roundedtextimg}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />

        {/* Arrow icon indicating direction of navigation */}
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;

import Link from "next/link";

// Importing necessary icons
import { RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { SiLeetcode, SiCodechef } from "react-icons/si";

// Socials component
const Socials = () => {
  return (
    // Container for social icons
    <div className="flex items-center gap-x-5 lg:gap-x-8 text-lg lg:text-3xl">
     
     
      {/* GitHub */}
      <Link
        href={" https://github.com/anoop53626 "}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>


      {/* LinkedIn */}
      <Link
        href={"https://www.linkedin.com/in/anoop-kumar-8b78b11ba "}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      
    </div>
  );
};

export default Socials;

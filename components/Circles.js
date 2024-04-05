// Import the Image component from Next.js
import Image from "next/image";

// Import the image file
import circleimg from "/public/circles.png";

// Define the Circles component
const Circles = () => {
  return (
    // Container div for positioning and styling
    <div
      className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10"
    >
      {/* Next.js Image component */}
      <Image
        src={circleimg} // Image source
        width={260}     // Image width
        height={200}    // Image height
        className="w-full h-full" // CSS class for styling
        alt=""          // Alt text for accessibility
      />
    </div>
  );
};

// Export the Circles component
export default Circles;


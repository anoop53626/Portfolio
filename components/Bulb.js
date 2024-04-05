//next image
import Image from "next/image";
import bulbimg from "/public/bulb.png";
const Bulb = () => {
  return (
    <div
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge 
    animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]"
  //  using pusle in animation and some css /tailwind classes for coluring
   >
      <Image
        src={bulbimg}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;

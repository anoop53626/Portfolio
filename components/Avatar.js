// next image
import Image from "next/image";
// using avataring variables to import the img 
import avatarimg from "/public/avatar.png";

const Avatar = () => {
    // cpmponents code 
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={avatarimg}
        width={600}
        height={678}
        alt=""
        // classname is used for css classes 
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
// for further use of this code we export this code 

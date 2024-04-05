import Image from 'next/image';
import topleftimg from "/public/top-left-img.png";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400] opacity-50">
      <Image
        src={topleftimg}
        alt='Top Left Image' 
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;

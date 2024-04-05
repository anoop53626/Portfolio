//nxt Image
import Image from "next/image";
import logoimg from "/public/logo.png";

// next Link
import Link from "next/link";
//components
import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 lg:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-y-6 lg:py-8">
          {/* {logo } */}
          <Link href={"/"}>
            <Image
              src={logoimg}
              className=" max-w-[200px] lg:max-w-[450px] max-h-[48px] lg:max-h-[100px] mt-4 lg:mt-6"
              // width={200}
              // height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* {socials icon} */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

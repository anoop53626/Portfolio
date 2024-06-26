// Import icons from react-icons/hi2 package
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from "react-icons/hi2";

// Import Link from Next.js
import Link from "next/link";

// Import useRouter hook from Next.js
import { useRouter } from "next/router";

// Define navigation data with name, path, and corresponding icon
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// Nav component
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-red-200/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:rounded-full">
        {/* Iterate over navData array to render navigation links */}
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={index}
          >
            {/* Tooltrip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* Icon */}
            <div> {link.icon} </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

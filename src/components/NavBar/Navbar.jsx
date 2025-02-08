import { useState } from "react";
import MenuIcon from "../../assets/Icons/components/MenuIcon";
import CloseIcon from "../../assets/Icons/components/CloseIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
      <div className="container flex items-center justify-between m-auto">
        <div>
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bruno font-bold text-blue-400">Maxtac</p>
        </div>

        <div className="hidden md:block lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                About
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
            <li className="group pl-6">
              <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                Skills
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
            <li className="group pl-6">
              <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                Projects
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
            <li className="group pl-6">
              <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                Statics
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
            <li className="group pl-6">
              <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                Contact
              </span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
          </ul>
        </div>

        <div className="flex sm:flex md:hidden lg:hidden pr-2 items-center ">
          <MenuIcon
            className={`${
              isOpen ? "hidden" : ""
            } hover:bg-white-100 rounded-md p-1 hover:fill-black`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <CloseIcon
            className={`${
              isOpen ? "" : "hidden"
            } hover:bg-white-100 rounded-md p-1 hover:fill-black`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div
          className={`absolute top-16 right-0 w-40 md:hidden lg:hidden bg-black/60 text-white rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="p-2 space-y-2">
            <li className="p-2 rounded-md">
                <span className="cursor-pointer pt-1/2 font-rajdhani font-semibold text-white">
                    About
                </span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-400"></span>
            </li>
            <li className="p-2 hover:bg-gray-800 rounded-md">Skills</li>
            <li className="p-2 hover:bg-gray-800 rounded-md">Projects</li>
            <li className="p-2 hover:bg-gray-800 rounded-md">Statics</li>
            <li className="p-2 hover:bg-gray-800 rounded-md">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { motion } from "framer-motion";

import { styles } from "../styles";
import EarthCanvas from "../components/Earth/Earth";
import StarsCanvas from "../components/Stars/Stars";

const Intro = () => {
  return (
    <div className="h-screen w-screen ">  
      <div className="hidden sm:hidden md:grid lg:grid md:grid-cols-2 lg:grid-cols-3  gap-0  h-2/3 md:h-2/3 lg:h-full w-full">
        <div className="relative col-start-1 md:col-end-2 lg:col-end-3 h-[40vh] w-full sm:h-[60vh] md:h-[70vh] lg:h-full">
          <div className="absolute inset-0 -z-0">
            <EarthCanvas />
          </div>
          {/* Blur Overlay */}
          <div className="absolute inset-0 opacity-0 blur-lg  "></div>
        </div>
        <div className=" ">
          <h1 className="text-white">image</h1>
        </div>
      </div>
      <div className="relative h-2/3 flex sm:flex md:hidden lg:hidden">
        {/* EarthCanvas as Background */}
        <div className="absolute inset-0 -z-10">
          <EarthCanvas />
        </div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-gray-200/70 blur-lg "></div>

        {/* Image on Top */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-10">
          image
        </div>
      </div>
     <StarsCanvas />
    </div>
  );
};

export default Intro;

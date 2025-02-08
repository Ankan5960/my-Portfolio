import { motion } from "framer-motion";
import { styles } from "../styles";
import EarthCanvas from "../components/Earth/Earth";
import StarsCanvas from "../components/Stars/Stars";

const Intro = () => {
  return (
    <div className="h-screen md:h-2/3 lg:h-2/3 w-screen ">  
      <div className="hidden sm:hidden md:grid lg:grid md:grid-cols-3 lg:grid-cols-4  gap-0  h-2/3 md:h-2/3 lg:h-full w-full">
        <div className="relative col-start-1 md:col-end-3 lg:col-end-3 h-[40vh] w-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
          <div className="absolute inset-0 -z-0">
            <EarthCanvas />     
          </div>
        </div>

        <div className="relative flex items-end p-6 pb-6 col-start-3 md:col-end-5 lg:col-end-5 h-[40vh] w-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh]  bg-[url(/src/assets/jpg/ProfilePhoto1.png)] bg-cover bg-center">
          <div className="">
            <p className="text-2xl md:text-3xl lg:text-6xl font-rajdhani text-white">
              Hi, I am 
              <span className="font-extrabold font-saira text-red-600"> Ankan</span>
            </p>
            <div className=" md:text-2xl lg:text-2xl font-rajdhani text-white">
              a passionate full-stack developer crafting dynamic web experiences with cutting-edge technologies.
            </div>
          </div>
          {/* <div class="bg-[url(/src/assets/jpg/ProfilePhoto1.png)] bg-cover bg-center h-full w-full"></div>      */}
        </div>

        {/* <div className="relative flex items-center p-0 col-start-3 md:col-end-5 lg:col-end-5 h-[40vh] w-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh]  ">
          <div class="bg-[url(/src/assets/jpg/ProfilePhoto1.png)] bg-cover bg-center h-full w-full"></div>
        </div> */}
      </div>

      <div className="relative h-1/2 flex sm:flex md:hidden lg:hidden">
        {/* EarthCanvas as Background */}
        <div className="absolute inset-0 -z-0">
          <EarthCanvas />
        </div>
      </div>

      <div className="grid grid-cols-3 h-1/2">
          <div className="col-start-1 col-end-2 px-4 absolute bottom-0 md:hidden lg:hidden ">
          <p className="text-4xl font-rajdhani text-white">
              Hi, I am 
              <span className="font-extrabold font-saira text-red-600"> Ankan</span>
            </p>
            <div className="text-sm sm:text-xl md:text-2xl lg:text-2xl font-rajdhani text-white">
              a passionate full-stack developer crafting dynamic web experiences with cutting-edge technologies.
            </div>
          </div>
          <div className=" col-start-1 col-end-4 bg-[url(/src/assets/jpg/ProfilePhoto1.png)] bg-cover bg-center">
            </div>

        </div>

      <StarsCanvas />
    </div>
  );
};

export default Intro;

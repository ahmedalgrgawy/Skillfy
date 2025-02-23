import { Link } from "react-router-dom";
import Btn from "../../Components/Btn/Btn";

import { welcomeImgs } from "../../assets/data";
const welcome = () => {
  return (
    <div className="relative h-screen">
      <img
        src={welcomeImgs.logoImg}
        alt="logo"
        className="absolute top-4 ml-9 max-w-36"
      />
      <div className="flex sm:top-1/2 sm:relative sm:-translate-y-1/2  justify-evenly flex-wrap items-center ">
        <img src={welcomeImgs.welcomeImg} alt="04" className="sm:hidden md:w-96 xl:w-fit" />

        <div className="max-w-[400px] relative">
          <img
            src={welcomeImgs.borderImg}
            alt="border"
            className=" absolute max-w-[400px]"
          />
          <img src={welcomeImgs.grayImg} alt="" className="w-fit  " />

          <div className=" absolute top-20 left-1/2 -translate-x-1/2 w-[70%] space-y-24  flex flex-col justify-center items-center">
            <div className=" flex justify-between items-center space-x-3">
              <span className="selectTap miniTap"></span>
              <span className="miniTap"></span>
              <span className="miniTap"></span>
            </div>
            <div>
              <h1 className="text-[#1a1a1a] flex text-center flex-wrap gap-3  pb-4 justify-center text-2xl font-semibold ">
                Start Learning
                <span className="flex flex-col justify-start  items-start w-fit ">
                  New Skills
                  <img
                    className="inline w-full"
                    src={welcomeImgs.vectorImg}
                    alt=""
                  />
                </span>
              </h1>
              <p
                className="text-[#4D4D4D] mx-auto text-center font-normal text-[18px] leading-5 w-full"
              >
                Learn almost any skill from a comfort of your home with our app.
              </p>
            </div>
            <Link to='/welcome-2' >
              <Btn>Continue</Btn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;

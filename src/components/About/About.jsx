import AboutCarts from "./AboutCarts";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainersIcon from "../../images/who-we-are/weightlifter.png";
import ModernIcon from "../../images/who-we-are/equpments.png";
import LiftIcon from "../../images/who-we-are/gym.png";
import GirlRunning from "../../images/who-we-are/girl-run.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import Girl from "../../images/who-we-are/Girl.png";
import aboutGirl from "../../images/who-we-are/about-girl.png";
import GirlText from "../../images/who-we-are/girl-side-text.png";
import GirlWind from "../../images/who-we-are/wind.png";
import MainButton from "../MainButton";
import OppoScroll from "./OppoScroll";
import card2 from "../../images/AboutPage/card2.jpg";
import card3 from "../../images/AboutPage/card3.jpg";
import card4 from "../../images/AboutPage/card4.jpg";
import about from "../../images/AboutPage/aboutFrame.jpg";
import about6 from "../../images/AboutPage/about6.jpg";
function About() {
  return (
    <>
    

      <section className=" flex-col justify-between gap-2 about-section hidden lg:flex">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" aboutHome-section grid grid-cols-1 gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem]  relative items-center text-center flex flex-col md1000:text-center w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%] lg:text-white">
                Take Your Health And Body To Next Level
              </h2>
              <p className="text-[16px] lg:w-[75rem] text-[#646464] lg:text-slate-200 font-medium mb-12">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="lg:mt-56">
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] text-black lg:text-white min620:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0 ">
                  <img
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto `}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgba(249,249,249,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={ModernIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={LiftIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    fancy gym <br />
                    machines
                  </h3>
                </div>
              </div>
              {/* cta button */}
              <MainButton
                color={`!text-black`}
                bg={`bg-[#fff]`}
                cN="about-cta"
                arrowColor={`!text-black`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
              </div>
            </div>
              
          </div>
        </div>
      </section>

      <section className=" flex-col justify-between gap-2 about-section pb-[20rem] flex lg:hidden">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-1 gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem]  relative items-center text-center flex flex-col md1000:text-center w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%] lg:text-white">
                Take Your Health And Body To Next Level
              </h2>
              <p className="text-[16px] text-[#646464] lg:text-slate-200 font-medium mb-12">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="lg:mt-56">
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] text-black lg:text-white min620:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <img
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    professional <br /> trainers
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={ModernIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> equipments
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={LiftIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    fancy gym <br />
                    machines
                  </h3>
                </div>
              </div>
              {/* cta button */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3F3F3F]`}
                cN="about-cta-m"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

import React from "react";
import Footer from "../components/Footer/Footer";
import tredmill from "../images/GymGears/Tredmill.jpg";
import elliptical from "../images/GymGears/elliptical.jpg";
import exerciseBike from "../images/GymGears/ExerciseBike.jpg";
import benchPress from "../images/GymGears/BenchPress.jpg";
import latPulldown from "../images/GymGears/latPulldonw.jpg";
import legPress from "../images/GymGears/legPress.jpg";
import dumbells from "../images/GymGears/dumbells.jpg";
import kettlebells from "../images/GymGears/Kettlebells.jpg";
import barbells from "../images/GymGears/barbells.jpg";
import CardCarousel from "../components/GymGears/cardCrousel";
import SpinningBox from "../components/GymGears/SpinningBoxText";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MultiParallax from "../components/GymGears/MultiParallax";

const GymGears = () => {
  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            GYM GEARS
          </h1>
        </div>
        <div className="relative justify-center flex m-20">
          <h1 className="text-black absolute  text-3xl md:text-5xl font-serif font-bold">
            Some Complimantory Fit
          </h1>
          <p className="mt-16 text-2xl font-semibold">
            Get Your Fit. <span className="text-slate-500">Stand High.</span>
          </p>
        </div>
        <div className="m-12">
          <MultiParallax />
        </div>
        <div className="">
          <CardCarousel />
        </div>
        <div>
          <SpinningBox />
        </div>
        <div className="mt-12 mb-12">
          <div className="flex flex-col text-center item-center relative  justify-center md1000:items-center">
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white  border-gray-800 inline-block">
              Cardio Machines
            </h2>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[34rem] absolute top-0 min450:w-[25rem] min375:top-[58px] md:right-[41rem]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={tredmill}
                alt="Treadmill"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Treadmill</h3>
                <p className="text-gray-900 mt-2 text-lg">
                  Experience the best in cardio workouts with our
                  state-of-the-art treadmills.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={elliptical}
                alt="Elliptical"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Elliptical</h3>
                <p className="text-gray-900 mt-2 text-lg">
                  Low-impact cardio training to keep you in top shape.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={exerciseBike}
                alt="Exercise Bike"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Exercise Bike</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Stay fit with our high-performance exercise bikes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex flex-col text-center item-center relative  justify-center md1000:items-center">
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white  border-gray-800 inline-block">
              Weight Machines
            </h2>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[34rem] absolute top-0 min450:w-[25rem] min375:top-[58px] md:right-[41rem]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={benchPress}
                alt="Bench Press"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Bench Press</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Build upper body strength with our durable bench presses.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={latPulldown}
                alt="Lat Pulldown"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Lat Pulldown</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Target your back muscles with precision using our lat pulldown
                  machines.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={legPress}
                alt="Leg Press"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Leg Press</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Strengthen your legs with our safe and effective leg press
                  machines.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex flex-col text-center item-center relative  justify-center md1000:items-center">
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white  border-gray-800 inline-block mb-4">
              Free Weights
            </h2>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[28rem] absolute top-0 min450:w-[18rem] min375:top-[58px] md:right-[45rem]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={dumbells}
                alt="Dumbbells"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Dumbbells</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Enhance your workouts with our range of dumbbells.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={kettlebells}
                alt="Kettlebells"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Kettlebells</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Versatile training with our high-quality kettlebells.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={barbells}
                alt="Barbells"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-2xl">Barbells</h3>
                <p className="text-gray-900 text-lg mt-2">
                  Perfect your form and strength with our selection of barbells.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default GymGears;

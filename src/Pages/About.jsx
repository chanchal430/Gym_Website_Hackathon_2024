import Footer from "../components/Footer/Footer";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Gallery from "./Gallery/Gallery";
import GalleryPage1 from "./Gallery/GalleryPage1";
import OppoScroll from "../components/About/OppoScroll";
import card2 from "../images/AboutPage/card2.jpg";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
              />

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                We Will Give You Strength and Health
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                At Gymantrum, we are dedicated to helping you achieve the body
                of your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="Join Us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
            <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
              <img
                className="block mx-auto men-running"
                src={card2}
                alt="Fitness one About"
              />
            </div>
          </div>
          {/*  */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1"></div>
          </div>
        </div>
        <h1 className="text-black text-center text-[3rem] font-bold">
          History
        </h1>
        <OppoScroll />
        <Gallery />
        <GalleryPage1 />
        <Footer />
      </section>
    </>
  );
}

export default About;

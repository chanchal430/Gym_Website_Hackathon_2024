import {  motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
import first from "../../images/AboutPage/first.jpg";
import card3 from "../../images/AboutPage/card3.jpg";
import card4 from "../../images/AboutPage/card4.jpg";
import Target from "../../images/AboutPage/target.png";
import Mountain from "../../images/AboutPage/mountain.png";
import Img3 from "../../images/AboutPage/image3.jpg";

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className="bg-white text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black text-white p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div>
    </>
  );
};

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description, logo }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-center items-center space-y-5 ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <img src={logo} alt="" className="w-[9rem]"/>
          <h3 className="text-4xl md:text-5xl font-bold">{title}</h3>
          <p className="font-light text-lg md:text-2xl w-full ">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    logo: Target,
    title: "OUR HISTORY",
    description:
      "Our gym opened a year ago, dedicated to providing top-notch fitness facilities. We aim to inspire and support our community's health and wellness journey. Join us and be part of our growing fitness family.",
    img: Img3,
  },
  {
    id: 2,
    logo:Mountain,
    title: "OUR HISTORY",
    description:
      "overcoming challenges to provide the best fitness facilities. Through dedication and resilience, we've created a supportive community focused on health and wellness. Join us and experience the difference.",
    img: first,
  },
  {
    id: 3,
    title: "Achieve Peak Performance",
    description:
      "Unlock your full potential with our expert-guided fitness programs, tailored to help you achieve peak performance and optimal health.",
    img: card3,
  },
  {
    id: 4,
    title: "Transform Your Lifestyle",
    description:
      "Transform your lifestyle with personalized fitness plans and nutritional guidance designed to support long-term wellness and vitality.",
    img: card4,
  },
];

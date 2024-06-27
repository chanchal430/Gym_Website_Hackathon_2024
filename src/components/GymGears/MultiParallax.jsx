import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import shoes from "../../images/GymGears/shoes.jpg";
import tshirt from "../../images/GymGears/tshirt.png";
import trousers from "../../images/GymGears/trousers.jpg";
import girlWear from "../../images/GymGears/girlWear.jpg";
import menShorts from "../../images/GymGears/menShorts.jpg";
import men from "../../images/GymGears/men.jpg";

const MultiParallax = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start", "start end"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const imageXSpring = useSpring(imageX);

  const sectionX = useTransform(scrollYProgress, [0, 1], [-96, 0]);
  const sectionXSpring = useSpring(sectionX);

  return (
    <section ref={targetRef} className="overflow-hidden">
      <motion.div style={{ x: sectionXSpring }} className="flex gap-2">
        <ImageBar
          imgSrc="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=830&q=80"
          x={imageXSpring}
        />
        <ImageBar imgSrc={men} x={imageXSpring} />
        <ImageBar imgSrc={trousers} x={imageXSpring} />
        <ImageBar imgSrc={girlWear} x={imageXSpring} />
        <ImageBar imgSrc={menShorts} x={imageXSpring} />
        <ImageBar imgSrc={tshirt} x={imageXSpring} />
      </motion.div>
    </section>
  );
};

const ImageBar = ({ imgSrc, x }) => {
  return (
    <div className="w-1/3 lg:w-1/5 h-96 bg-slate-200 shrink-0 relative overflow-hidden">
      <motion.div
        className="absolute -inset-12"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          x,
        }}
      />
    </div>
  );
};

export default MultiParallax;

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import band from "../../images/GymGears/ResistanceBands.jpg";
import jumpRopes from "../../images/GymGears/jumpRopes.jpg";
import yogaMats from "../../images/GymGears/yogaMats.jpg";
import foamRollers from "../../images/GymGears/foamRollers.jpg";
import exerciseBall from "../../images/GymGears/ExerciseBalls.jpg";
import abwheel from "../../images/GymGears/abWheel.jpg";
import handGrippers from "../../images/GymGears/handGrippers.jpg";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-slate-100" ref={ref}>
      <div className="relative overflow-hidden p-4 text-center">
        <div className="m-5">
          <p className="text-3xl md:text-[3.6rem] font-bold">
            Complimentary Gym Equipment
          </p>
        </div>
        {/* CARDS */}
        <div className="mx-auto max-w-8xl">
          <p className="mb-4 text-2xl font-semibold">
            Everything. <span className="text-slate-500">Yes, even that.</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description }) => {
  return (
    <div
      className="relative  shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-lg font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-4xl font-bold">{title}</p>
        <p className="text-xl text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default CardCarousel;

const items = [
  {
    id: 1,
    url: band,
    category: "Resistance Bands",
    title: "Just feels right",
    description:
      "Great for strength training, stretching, and rehabilitation exercises.",
  },
  {
    id: 2,
    url: jumpRopes,
    category: "Jump Ropes",
    title: "Type in style",
    description: " Excellent for cardio workouts and improving coordination.",
  },
  {
    id: 3,
    url: yogaMats,
    category: "Yoga Mats",
    title: "Looks like a win",
    description: "Useful for yoga, Pilates, stretching, and floor exercises.",
  },
  {
    id: 4,
    url: foamRollers,
    category: "Foam Rollers",
    title: "Back feels great",
    description: "Aid in muscle recovery and help improve flexibility.",
  },
  {
    id: 5,
    url: exerciseBall,
    category: "Exercise Balls",
    title: "It's lit",
    description: "Good for core workouts, balance, and stability exercises.",
  },
  {
    id: 6,
    url: abwheel,
    category: "Ab Wheels",
    title: "Stand up straight",
    description: "Effective for core strength training.",
  },
  {
    id: 7,
    url: handGrippers,
    category: "Hand Grippers",
    title: "Sounds good",
    description: "Useful for improving grip strength",
  },
];

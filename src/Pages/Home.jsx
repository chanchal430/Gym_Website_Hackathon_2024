import About from "../components/About/About";
import BmiCalc from "../components/BMI/BmiCalc";
import Blog from "../components/Blog/Blog";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Exercises from "../components/Exercises/Exercises";
import SearchExercises from "../components/Exercises/SearchExercises";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import { GalleryHome } from "../components/Gallery/GalleryHome";
import CardCarousel from "../components/GymGears/cardCrousel";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";
import { useState } from "react";

function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  console.log(bodyPart);
  return (
    <>
      <Hero />
      <About />
      <CardCarousel />
      <Featured />
      <ChooseUs />
      <Trainers />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Gallery />
      <GalleryHome />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;

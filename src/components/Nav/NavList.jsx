import { Link } from "react-router-dom";

function NavList() {

  const scrollToExercises = () => {
    const exercisesSection = document.getElementById("exercises");
    console.log('exercisesSection:', exercisesSection);
    if (exercisesSection) {
      exercisesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex gap-9 text-white text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href="/">Home</a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/about"}>
            About
          </Link>
        </li>
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/gallery/page-1"}>
            Gallery
          </Link>
        </li> */}
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/schedule/monday"}>
            Schedule
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/blog"}>
            Blog
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/pricing"}>
            Pricing
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/classes"}>
            Classes
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <a href={"#exercises"} onClick={scrollToExercises}>
            Excercises
          </a>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/nutrition"}>
            Nutritions
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/gymgears"}>
            Gym Gears
          </Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link onClick={goTop} href={"/contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;

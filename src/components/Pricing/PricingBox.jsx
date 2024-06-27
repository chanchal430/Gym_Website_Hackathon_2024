import MainButton from "../MainButton";
import { FiCheck, FiX } from "react-icons/fi";

function PricingBox({ img, price, type, benefits }) {
  
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-white shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative "
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#ff0336] -bottom-[18px] left-0 right-0 mx-auto grayscale hover:grayscale-0">
            {type}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[30px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              $
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
              p/mo
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col  font-bold text-center gap-2  ">
            {benefits.map((b, i) => (
              <Benefit {...b} key={i} />
            ))}
          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#ff0336]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;

const Benefit = ({ text, checked }) => {
  return (
    <div className="flex items-center gap-4">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-2xl text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-900 text-2xl text-zinc-100">
          <FiX />
        </span>
      )}
      <span className="text-2xl text-[#646464]">{text}</span>
    </div>
  );
};

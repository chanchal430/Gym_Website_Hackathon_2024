import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/image1.png";
import Img2 from "../../images/pricing/image2.png";
import Img3 from "../../images/pricing/Image3.png";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Gymantrum an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="39" type="STARTUP" benefits={[
              { text: "Unlimited workspaces", checked: true },
              { text: "Gym Gears", checked: true },
              { text: "14 Days Free trial", checked: true },
              { text: "Nutrition & Diet", checked: false },
              { text: "Cycling", checked: false },
              { text: "Personal Trainer", checked: false },
            ]}/>
            <PricingBox img={Img2} price="59" type="ADVANCE" benefits={[
              { text: "Unlimited workspaces", checked: true },
              { text: "Gym Gears", checked: true },
              { text: "14 Days Free trial", checked: true },
              { text: "Nutrition & Diet", checked: false },
              { text: "Cycling", checked: true },
              { text: "Personal Trainer", checked: false },
            ]}/>
            <PricingBox img={Img3} price="99" type="PRO" benefits={[
              { text: "Unlimited workspaces", checked: true },
              { text: "Gym Gears", checked: true },
              { text: "14 Days Free trial", checked: true },
              { text: "Custom roles", checked: true },
              { text: "Cycling", checked: true },
              { text: "Personal Trainer", checked: true },
            ]}/>
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;

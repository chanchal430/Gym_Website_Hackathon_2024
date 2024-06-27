import React from "react";
import footerImage from "../../images/Footer/footer.png";
import Logo from "../../images/logo/icon-icon.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // styles
  const footerHead = "text-[18px] font-semibold my-[18px] text-white";
  const footerList = "text-[16px] text-gray-100 my-4";
  return (
    <div
      className="bg-fixed bg-cover bg-center  flex items-center pt-20 lg:px-20"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="mx-4 my-10">
            <h2 className={footerHead}>COMPANY</h2>
            <ul className="mt-10">
              <li className={footerList}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Privecy & policy</Link>
              </li>
              <li className={footerList}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={footerList}>
                <Link to="/">Company</Link>
              </li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <h2 className={footerHead}>OPEN HOUR</h2>
            <ul className="mt-10">
              <li className={footerList}>Monda-Thursday (11am-7pm)</li>
              <li className={footerList}>Sunday (close)</li>
              <li className={footerList}>Saturday (11am-7pm)</li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <h2 className={footerHead}>Resources</h2>
            <ul className="mt-10">
              <li className={footerList}>Protien Insurance</li>
              <li className={footerList}>Trainners</li>
              <li className={footerList}>Gym Gears</li>
            </ul>
          </div>
          <div className="mx-4 my-10">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="logo_img"
                className="md:w-[8rem] md:h-[8rem]"
              />
              <div className="text-start">
                <h1 className="text-[20px] md:text-[30px] text-white font-bold underline">
                  Gymantrum
                </h1>
                <p className=" text-[10px] md:text-[16px] text-white">
                  STRONGER EVERY DAY
                </p>
              </div>
            </Link>
            <p className="text-[14px] text-gray-100 my-10">
              {" "}
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="flex  space-x-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="text-gray-100 text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="text-gray-100 text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-gray-100 text-[1.3rem] hover:text-main" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe className="text-gray-100 text-[1.3rem] hover:text-main" />
              </a>
            </div>
          </div>
        </div>
        <div className="my-10  border-t-2 border-gray-100">
          <p className="text-gray-50 text-[14px] text-center p-4">
            Copyright &copy; Design by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/chanchal-kumari-50896125b/"
              className="underline text-white"
            >
              <i
                style={{ transition: "all 0.3s" }}
                className="fa-brands fa-linkedin bg-transparent p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
              ></i>
              Chanchal Kumari
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

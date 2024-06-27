import TitleBg from "../../images/pricing/titlebg.svg";
import Logo1 from "../../images/testimonials/logo1.png";
import Logo2 from "../../images/testimonials/logo2.png";
import Logo3 from "../../images/testimonials/logo3.png";
import Logo4 from "../../images/testimonials/logo4.png";
import Logo5 from "../../images/testimonials/logo5.png";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <>
      {/* testimonials div */}
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] "
            />
            <p className="text-center text-black mt-48 max-w-6xl mx-auto text-2xl md:text-5xl  italic font-serif">
              A Journey of Transformation, Words of Gratitude, Experiencing the
              Difference
            </p>
          </div>

          <div className="p-4 mt-[10rem] border-[#efefef] border-solid border-[9px] overflow-x-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

            <div className="flex items-center mb-4">
              <TestimonialList list={testimonialsContent.top} duration={125} />
              <TestimonialList list={testimonialsContent.top} duration={125} />
              <TestimonialList list={testimonialsContent.top} duration={125} />
            </div>
            <div className="flex items-center mb-4">
              <TestimonialList
                list={testimonialsContent.middle}
                duration={75}
                reverse
              />
              <TestimonialList
                list={testimonialsContent.middle}
                duration={75}
                reverse
              />
              <TestimonialList
                list={testimonialsContent.middle}
                duration={75}
                reverse
              />
            </div>
            <div className="flex items-center">
              <TestimonialList
                list={testimonialsContent.bottom}
                duration={275}
              />
              <TestimonialList
                list={testimonialsContent.bottom}
                duration={275}
              />
              <TestimonialList
                list={testimonialsContent.bottom}
                duration={275}
              />
            </div>

            <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
          </div>
        </div>

        {/* brand logos */}
        <div
          className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-16 flex-wrap
        "
        >
          <img
            src={Logo1}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo2}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo3}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo4}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo5}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
    </>
  );
}

export default Testimonials;

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[400px] h-[120px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-48 object-cover" alt="" />
            <div className="bg-slate-900 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-slate-300">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonialsContent = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Jen S.",
      title: "PUNE",
      info: "Working with this team has been an absolute pleasure. Their dedication and attention to detail have truly transformed our business. From start to finish, ",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Paul A,",
      title: "MUMBAI",
      info: "Partnering with this company has been a game-changer for us. Their innovative solutions and exceptional service have propelled our business to new heights.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Cindy J.",
      title: "DELHI",
      info: "Joining this gym has been a transformative experience for me. The trainers are incredibly knowledgeable and supportive, helping me achieve my fitness goals faster than I ever thought possible. ",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Danica W.",
      title: "BANGKOK",
      info: "Since joining this gym, I've seen incredible improvements in my strength and overall fitness. The classes are diverse and challenging, keeping me engaged and motivated. ",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Peter H.",
      title: "HYDRABAD",
      info: "This gym has completely changed my perspective on working out. The personalized training programs and state-of-the-art equipment have made a huge difference in my fitness routine.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Lanny B.",
      title: "KOLKATA",
      info: " I've never felt more confident and energized. Thank you to the amazing team for their continuous support and encouragement!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Alex F.",
      title: "UK",
      info: "From the moment I walked into this gym, I felt welcomed and supported. The trainers are fantastic, providing customized workouts that have helped me achieve and surpass my fitness goals.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Claude O.",
      title: "FINLAND",
      info: "The clean and modern facilities, combined with a positive atmosphere, make this gym the perfect place to work out. Highly recommended!",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Max Q.",
      title: "JAPAN",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff R.",
      title: "SRI LANKA",
      info: "The staff is always friendly and ready to help with any questions. This gym has everything you need to succeed on your fitness journey.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Kevin K.",
      title: "THILAND",
      info: "Working with my personal trainer has been a life-changing experience. Their personalized approach and deep understanding of fitness have helped me achieve results I never thought possible.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Andrea B.",
      title: "FRANCE",
      info: "Each session is challenging yet enjoyable, and I've seen incredible progress in my strength, endurance, and overall health. I highly recommend their services to anyone looking to take their fitness to the next level!",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Danny G.",
      title: "EUROPE",
      info: "My personal trainer has completely transformed my fitness journey.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Ian D.",
      title: "IRAQ",
      info: "Their expertise and motivation have pushed me to achieve goals I never thought were possible. Every workout is tailored to my needs and keeps me engaged and progressing.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      name: "Ben S.",
      title: "INDIA",
      info: "I've never felt stronger or more confident. I can't recommend their training services enough!",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Matthew I.",
      title: "AUSTRALIA",
      info: "Having a personal trainer has been the best decision for my fitness. Their customized workout plans and constant encouragement have helped me",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Garrett P.",
      title: "CANADA",
      info: "The one-on-one attention ensures that I'm performing exercises correctly and efficiently. I've seen remarkable improvements in my physical and mental well-being thanks to their guidance.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      name: "Xavier C.",
      title: "USA",
      info: "The one-on-one attention ensures that I'm performing exercises correctly and efficiently. ",
    },
  ],
};

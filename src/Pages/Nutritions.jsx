import React from "react";
import Footer from "../components/Footer/Footer";
import service1 from "../images/NutritionPage/service-1.svg";
import service2 from "../images/NutritionPage/service-2.svg";
import service3 from "../images/NutritionPage/service-3.svg";
import aboutBanner from "../images/NutritionPage/about-banner.jpg";
import courses1 from "../images/NutritionPage/courses-1.jpg";
import courses2 from "../images/NutritionPage/courses-2.jpg";
import courses3 from "../images/NutritionPage/courses-3.jpg";
import courses4 from "../images/NutritionPage/courses-4.jpg";
import courses5 from "../images/NutritionPage/courses-5.jpg";
import courses6 from "../images/NutritionPage/courses-6.jpg";

const Nutritions = () => {
  return (
    <>
    // - #HERO

    <section className="login-section ">
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Nutrition & supplements
        </h1>
      </div>
      <section className="nutri nutri-section " aria-label="hero" id="home">
        <div className=" space-y-5 ml-24">
          <p className="nutri-subtitle">Fitness & Nutrition</p>

          <h1 className="h1 nutri-title text-[5rem] md:text-[8rem]">
            This life style for your fitness, not only diet.
          </h1>

          <p className="nutri-text">
            It has survived not only five centuries but also
          </p>
          <p>
            <a
              href="/contact"
              className="text-white text-[1.5rem] md:text-[2rem] font-semibold font-serif md:max-w-[20vw] h-30 px-5 py-4 rounded-full transition-all hover:bg-[#0D98BA] focus:bg-[#0D98BA] my-4 mx-7 btn-secondary inline-block"
            >
              Start Course
            </a>
          </p>
        </div>
        <div className=" flex items-center gap-[15px] ml-20 mt-40">
          <p className="social-title">Connect with us:</p>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-skype"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* - #SERVICE */}
      <section className=" service" aria-label="service" data-section>
        <div className="container">
          <ul className="grid-list grid gap-[50px]">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src={service1}
                    width="60"
                    height="60"
                    loading="lazy"
                    alt="Women’s Course"
                  />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Diet Consulting
                  </a>
                </h3>

                <p className="card-text">
                  It involves personalized guidance on nutrition and eating
                  habits to promote health and achieve specific wellness goals
                </p>

                <a href="#" className="btn btn-secondary">
                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="service-card active">
                <div className="card-icon">
                  <img
                    src={service2}
                    width="60"
                    height="60"
                    loading="lazy"
                    alt="Basic Course"
                  />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Diet Planning
                  </a>
                </h3>

                <p className="card-text">
                  It involves strategizing and structuring meals to meet
                  nutritional needs, health goals, and dietary preferences
                  effectively
                </p>

                <a href="#" className="btn btn-secondary">
                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img
                    src={service3}
                    width="60"
                    height="60"
                    loading="lazy"
                    alt="Men’s Course"
                  />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    Diet Education
                  </a>
                </h3>

                <p className="card-text">
                  focuses onknowledge and understanding of nutrition principles,
                  and healthy eating habits to empower individuals in dietary
                  decisions
                </p>

                <a href="#" className="btn btn-secondary">
                  <ion-icon name="arrow-forward"></ion-icon>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* - #ABOUT */}

      <section
        className="section nuabout "
        aria-label="about"
        id="about"
        data-section
      >
        <div className="nu-container">
          <div
            className="nuabout-banner img-holder flex-1"
            style={{ width: "470px", height: "580px" }}
          >
            <img
              src={aboutBanner}
              width="370"
              height="480"
              loading="lazy"
              alt="about banner"
              className="img-cover"
            />

            <a href="/contact" className="btn btn-secondary">
              Meet Instructor
            </a>
          </div>

          <div className="nuabout-content flex-1">
            <p className="section-subtitle">25+ Years Of Experience</p>

            <h2 className="h2 section-title">
              We have expert instructor for help our students.
            </h2>

            <p className="section-text">
              Lorem Ipsum is simply dummy text the printing and typesetting
              standard dummy text ever since the 150 when an unknown printe
              specimen book has survived centuries.
            </p>

            <h3 className="nuabout-h3">100+ Courses</h3>

            <p className="section-text">
              Lorem Ipsum is simply dummy text the printing and typesetting
              standard dummy text ever since the 150 when an unknown printe
              specimen book has survived centuries.
            </p>
          </div>
        </div>
      </section>

      {/* - #COURSE */}
      <section
        className="section course"
        aria-label="course"
        id="course"
        data-section
      >
        <div className="nu-container">
          <div className="title-wrapper">
            <p className="section-subtitle">100+ Plans Available</p>

            <h2 className="h2 section-title">Fitness & Nutrition Plans</h2>
          </div>

          <ul className="grid-list">
            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses1}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Children Nutrition and Cooking"
                    class="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="98">
                    $98
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Ryan Patterson</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Children Nutrition and Cooking
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT8H20M">08 d 20 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">28 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses2}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Introduction to Food and Health."
                    class="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="72">
                    $72
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Arlene Daniels</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Introduction to Food and Health.
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT9H25M">09 d 25 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">16 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses3}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Nutrition and Lifestyle in Pregnancy"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="68">
                    $68
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Selina Benton</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Nutrition and Lifestyle in Pregnancy
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT3H38M">03 d 38 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">18 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses4}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Expertise on Fitness, Nutrition and Health"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="98">
                    $98
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Ryan Patterson</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Expertise on Fitness, Nutrition and Health
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT2H16M">02 d 16 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">14 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses5}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Hacking exercise for health new science of fitness"
                    class="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="72">
                    $72
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Arlene Daniels</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" class="card-title">
                      Hacking exercise for health new science of fitness
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT6H12M">06 d 12 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">35 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="course-card">
                <figure
                  className="card-banner img-holder"
                  style={{ width: "350px", height: "300px" }}
                >
                  <img
                    src={courses6}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt="Designing Your Personal Weight Loss Plan"
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value="68">
                    $68
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">Selina Benton</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      Designing Your Personal Weight Loss Plan
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time datetime="PT9H34M">09 d 34 mins</time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">28 variety</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* - #BLOG */}
      <section
        className="section nublog"
        aria-label="blog"
        id="blog"
        data-section
      >
        <div className="nu-container">
          <div className="title-wrapper">
            <p className="section-subtitle">Our Blog Post</p>

            <h2 className="h2 section-title">Latest Article of Nutrition</h2>
          </div>

          <ul className="gap-[50px] flex flex-col md:flex-row">
            <li>
              <div className="nublog-card space-y-5">
                <div className="wrapper">
                  <time className="publish-date" datetime="2022-02-24">
                    <span className="span">24</span> Feb
                  </time>

                  <div>
                    <div className="card-author">
                      <a href="#" class="card-link">
                        By: <span class="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <p className="item-text">87 Likes</p>
                      </li>

                      <li className="card-meta-item">
                        <p className="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    It was popularised sheets the release contain
                  </a>
                </h3>

                <p className="card-text">
                  Lorem sum same dummy text theme industry psum have been them
                  industry the leaf into type setting.
                </p>
              </div>
            </li>

            <li>
              <div className="nublog-card space-y-5">
                <div className="wrapper">
                  <time className="publish-date" datetime="2022-02-24">
                    <span className="span">24</span> Feb
                  </time>

                  <div>
                    <div className="card-author">
                      <a href="#" className="card-link">
                        By: <span className="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <p className="item-text">87 Likes</p>
                      </li>

                      <li className="card-meta-item">
                        <p className="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    It was popularised sheets the release contain
                  </a>
                </h3>

                <p className="card-text">
                  Lorem sum same dummy text theme industry psum have been them
                  industry the leaf into type setting.
                </p>
              </div>
            </li>

            <li>
              <div className="nublog-card space-y-5">
                <div className="wrapper">
                  <time className="publish-date" datetime="2022-02-24">
                    <span className="span">24</span> Feb
                  </time>

                  <div>
                    <div className="card-author">
                      <a href="#" className="card-link">
                        By: <span className="span">Maddie Rife</span>
                      </a>
                    </div>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <p className="item-text">87 Likes</p>
                      </li>

                      <li className="card-meta-item">
                        <p className="item-text">58 Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">
                    It was popularised sheets the release contain
                  </a>
                </h3>

                <p className="card-text">
                  Lorem sum same dummy text theme industry psum have been them
                  industry the leaf into type setting.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <Footer/>
    </>
  );
};

export default Nutritions;

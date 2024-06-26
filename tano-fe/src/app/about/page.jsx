import React from "react";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import MainHeader from "../components/MainHeader";
import ScrollToTop from "../components/ScrollToTop";
import SidebarCartItem from "../components/SidebarCartItem";

import {
  GET_ABOUT_HERO_BANNER,
  GET_ABOUT_GET_TO_KNOW,
  GET_ABOUT_TESTIMONIALS,
  GET_ABOUT_CLIENT_SECTION,
  GET_OUR_TEAM,
} from "@/graphql/query";
import { getClient } from "../../../client";
import { BASE_URL } from "../constants/url";

export default async function About() {
  const heroBanner = await loadHeroBanner();
  const getToKnowInfo = await loadGetToKnowInfo();
  const testimonials = await loadTestimonials();
  const clientSection = await loadClientSection();
  const ourTeamInfo = await loadOurTeam();

  return (
    <div className="boxed_wrapper">
      <Loader />
      <SidebarCartItem />
      <MainHeader />
      {/* page-title */}
      <section className="page-title centred">
        <div className="outer-container">
          <div
            className="bg-layer"
            style={{
              backgroundImage: `url(${BASE_URL}${heroBanner?.aboutHeroBanner?.data?.attributes?.aboutHeroBanner?.data?.attributes?.url})`,
            }}
          />
          <div className="large-container">
            <div className="title-box">
              <h2>ABOUT</h2>
            </div>
          </div>
        </div>
      </section>
      {/* page-title end */}
      {/* about-section */}
      <section className="about-section alternat-2">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}
        />
        <div className="large-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div
                data-animation-box=""
                className="image-box p_relative d_block"
              >
                <figure
                  data-animation-text=""
                  className="overlay-anim-white-bg image p_relative d_block"
                  data-animation="overlay-animation"
                >
                  <img
                    src={`${BASE_URL}${getToKnowInfo?.aboutGetToKnow?.data?.attributes?.getToKnowImage?.data?.attributes?.url}`}
                    alt=""
                  />
                </figure>
                <div className="curve-text">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-5.png)",
                    }}
                  />
                  <span className="curved-circle">Welcome To Tano Studio</span>
                  <div className="text">
                    <div className="inner">
                      <h2>
                        {
                          getToKnowInfo?.aboutGetToKnow?.data?.attributes
                            ?.experiences
                        }
                        <span>Years</span>
                      </h2>
                      <h3>Experience</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box p_relative mr_50">
                <div className="sec-title">
                  <span className="sub-title">GET TO KNOW</span>
                  <h2>
                    Your Trusted{" "}
                    <span>
                      Architecture <br />
                      Company
                    </span>
                  </h2>
                </div>
                <div className="text">
                  <p>
                    Tano Studio is a beacon of innovation in the architecture
                    industry, renowned for its unwavering commitment to
                    excellence and client satisfaction. With a team of highly
                    skilled architects and designers, Tano Studio brings dreams
                    to life, crafting spaces that are both functional and
                    aesthetically pleasing. Through meticulous attention to
                    detail and a deep understanding of architectural principles,
                    the studio consistently delivers projects that exceed
                    expectations.
                  </p>
                  <p>
                    At Tano Studio, every project is a testament to our
                    dedication to quality and creativity. From residential homes
                    to commercial complexes, we approach each endeavor with a
                    fresh perspective, tailoring our designs to suit the unique
                    needs and preferences of our clients. Our collaborative
                    approach ensures that every aspect of the design process is
                    transparent and client-centric, fostering a sense of trust
                    and confidence. With Tano Studio as your trusted
                    architecture company, you can rest assured that your vision
                    will be realized with precision and flair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
      {/* service-section */}
      <section className="service-section centred">
        <div className="large-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <a href="/architectural-visualization" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-2.png" alt="" />
                  </div>
                  <h4>Architectural Visualization</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <a href="/interior-visualization" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-3.png" alt="" />
                  </div>
                  <h4>Interior Visualization</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <a href="/floorplans" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-4.png" alt="" />
                  </div>
                  <h4>Floorplans</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div
                className="service-block-one wow slideInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <a href="/product-visualization" className="inner-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-5.png" alt="" />
                  </div>
                  <h4>Product Visualization</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service-section end */}
      {/* testimonial-style-two */}
      <section className="testimonial-style-two">
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${BASE_URL}${testimonials?.aboutTestimonial?.data?.attributes?.aboutTestimonialBackground?.data?.attributes?.url})`,
          }}
        />
        <div className="large-container">
          <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
            {testimonials?.aboutTestimonial?.data?.attributes?.singleTestimonial.map(
              (testimonial) => (
                <div className="testimonial-block-two" key={testimonial.id}>
                  <div className="inner-box">
                    <div className="quote">“</div>
                    <p>{testimonial.description}</p>
                    <div className="author-box">
                      <figure className="author-thumb">
                        <img
                          src={`${BASE_URL}${testimonial?.image?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                      <h4>{testimonial.name}</h4>
                      <span className="designation">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      {/* testimonial-style-two end */}
      {/* clients-section */}
      <section className="clients-section about-page">
        <div className="auto-container">
          <div className="five-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
            {clientSection?.aboutClientSection?.data?.attributes?.aboutClientSection?.data.map(
              (client, index) => (
                <figure className="clients-logo" key={index}>
                  <img src={`${BASE_URL}${client?.attributes?.url}`} alt="" />
                </figure>
              )
            )}
          </div>
        </div>
      </section>
      {/* clients-section end */}
      {/* team-section */}
      <section className="team-section about-page">
        <div className="large-container">
          <div className="sec-title centred">
            <span className="sub-title">Professional</span>
            <h2>Our Team</h2>
          </div>
          <div className="three-item-carousel owl-carousel owl-theme owl-nav-none">
            {ourTeamInfo?.ourTeamDetails?.data?.map((person, index) => (
              <div className="team-block-one" key={person?.attributes?.name}>
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        src={`${BASE_URL}${person?.attributes?.aboutImage?.data?.attributes?.url}`}
                        alt=""
                      />
                    </figure>
                    <ul className="social-links clearfix">
                      <li>
                        <a
                          href={`${person?.attributes?.facebook}`}
                          target="_blank"
                        >
                          <i className="icon-3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`${person?.attributes?.instagram}`}
                          target="_blank"
                        >
                          <i className="icon-4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content-box">
                    <span className="count-text">0{index + 1}</span>
                    <h4>
                      <a href={`/team/${person?.attributes?.name}`}>
                        {person?.attributes?.name}
                      </a>
                    </h4>
                    <span className="designation">
                      {person?.attributes?.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* team-section end */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}

const loadHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_ABOUT_HERO_BANNER,
    variables: {
      publicationState: "LIVE",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};

const loadGetToKnowInfo = async () => {
  const { data } = await getClient().query({
    query: GET_ABOUT_GET_TO_KNOW,
    variables: {
      publicationState: "LIVE",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};

const loadTestimonials = async () => {
  const { data } = await getClient().query({
    query: GET_ABOUT_TESTIMONIALS,
    variables: {
      id: 1,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};

const loadClientSection = async () => {
  const { data } = await getClient().query({
    query: GET_ABOUT_CLIENT_SECTION,
    variables: {
      publicationState: "LIVE",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};

const loadOurTeam = async () => {
  const { data } = await getClient().query({
    query: GET_OUR_TEAM,
    variables: {
      publicationState: "LIVE",
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      cache: "no-store",
    },
  });

  return data;
};

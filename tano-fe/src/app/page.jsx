import { getClient } from "../../client";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import MainHeader from "./components/MainHeader";
import ScrollToTop from "./components/ScrollToTop";
import SearchPopup from "./components/SearchPopup";
import SidebarCartItem from "./components/SidebarCartItem";

import {
  GET_HOME_HERO_BANNER,
  GET_HOME_GET_TO_KNOW,
  GET_HOME_VIDEOS,
  GET_PROJECTS_LIST,
  GET_ABOUT_CLIENT_SECTION,
} from "@/graphql/query";
import { BASE_URL } from "./constants/url";

export default async function Home() {
  const heroBanner = await loadHeroBanner();
  const getToKnowInfo = await loadGetToKnowInfo();
  const videos = await loadVideos();
  const projectsList = await loadProjectsList();
  const clientSection = await loadClientSection();

  return (
    <>
      <div className="boxed_wrapper">
        <Loader />
        <SearchPopup />
        <SidebarCartItem />
        <MainHeader />
        {/* banner-section */}
        <section className="banner-section centred">
          <div className="line-shape">
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div
            className="banner-carousel owl-carousel owl-theme owl-dots-none"
            id="sync1"
          >
            {heroBanner?.homeHeroBanner?.data?.attributes?.homeHeroBanner.map(
              (banner) => (
                <div className="slide-item" key={banner.id}>
                  <div
                    className="image-layer"
                    style={{
                      backgroundImage: `url(${BASE_URL}${banner?.Image?.data?.attributes?.url})`,
                    }}
                  />
                  <div className="auto-container">
                    <div className="content-box">
                      <div className="icon-box">
                        <img src="assets/images/icons/icon-1.png" alt="" />
                      </div>
                      <h2>
                        DESIGNING A BETTER, <br />
                        <span>MORE BEAUTIFUL WORLD SINCE</span> 1935
                      </h2>
                      <div className="btn-box">
                        <a href="/projects" className="theme-btn btn-one">
                          View All Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="banner-thumb-inner clearfix">
            <div
              className="owl-carousel owl-theme owl-dots-none owl-nav-none"
              id="sync2"
            >
              {heroBanner?.homeHeroBanner?.data?.attributes?.homeHeroBanner.map(
                (banner, index) => (
                  <div className="single-item" key={banner?.id}>
                    <span className="count-text">0{index + 1}</span>
                    <h6>{banner.name}</h6>
                    <p>{banner.location}</p>
                  </div>
                )
              )}
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
              <div className="single-item"></div>
            </div>
          </div>
          <ul className="social-links clearfix">
            <li>
              <a href="#">
                <i className="icon-3" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-4" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-5" />
              </a>
            </li>
          </ul>
        </section>
        {/* banner-section end */}
        {/* about-section */}
        <section className="about-section">
          <div
            className="shape-layer float-bob-y"
            style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
          />
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
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
                      src={`${BASE_URL}${getToKnowInfo?.homeGetToKnow?.data?.attributes?.Image?.data?.attributes?.url}`}
                      alt=""
                    />
                  </figure>
                  <div className="text-inner">
                    <h6>
                      {getToKnowInfo?.homeGetToKnow?.data?.attributes?.name}
                    </h6>
                    <p>
                      {getToKnowInfo?.homeGetToKnow?.data?.attributes?.location}
                    </p>
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
                      Penatibus turpis vel eget cursus ut et. Lacus velit,
                      venenatis eu morbi egestas amet, nunc. Ut sem libero sed
                      nisl tincidunt tristique egestas non vitae. Pulvinar quis
                      duis leo in quis arcu enim. Vulputate velit mattis
                      tincidunt nunc sed mauris, sit amet ullamcorper.
                      Ullamcorper nunc mauris nunc proin sollicitudin mattis
                      viverra purus congue.
                    </p>
                    <p>
                      Enim auctor est et, amet. Ante ridiculus sed eget felis,
                      aliquam venenatis. Amet dolor feugiat ligula gravida a
                      malesuada eu adipiscing volutpat.
                    </p>
                  </div>
                  <div className="author-box p_relative d_block">
                    <div className="quote-box">
                      <img src="assets/images/icons/icon-1.svg" alt="" />
                    </div>
                    <div className="inner">
                      <figure className="author-thumb">
                        <img
                          src={`${BASE_URL}${getToKnowInfo?.homeGetToKnow?.data?.attributes?.testimonial?.image?.data?.attributes?.url}`}
                          alt=""
                        />
                      </figure>
                      <p>
                        {
                          getToKnowInfo?.homeGetToKnow?.data?.attributes
                            ?.testimonial?.description
                        }
                      </p>
                      <div className="designation">
                        {
                          getToKnowInfo?.homeGetToKnow?.data?.attributes
                            ?.testimonial?.role
                        }{" "}
                        -{" "}
                        <span>
                          {
                            getToKnowInfo?.homeGetToKnow?.data?.attributes
                              ?.testimonial?.name
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}
        {/* service-section */}
        <section className="service-section centred">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/agency-minimal" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-2.png" alt="" />
                    </div>
                    <h4>Agency Minimal</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/interior-design" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-3.png" alt="" />
                    </div>
                    <h4>Interior Design</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/urban-design" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-4.png" alt="" />
                    </div>
                    <h4>Urban Design</h4>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-one wow slideInUp animated"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <a href="/decor-plan" className="inner-box">
                    <div className="icon-box">
                      <img src="assets/images/icons/icon-5.png" alt="" />
                    </div>
                    <h4>Decor Plan</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-section end */}
        {/* video-section */}
        <section className="video-section">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="single-item-carousel owl-carousel owl-theme owl-nav-none">
              {videos?.homeVideo?.data?.attributes?.homeVideo.map((video) => (
                <div
                  className="inner-box"
                  style={{
                    backgroundImage: `url(${BASE_URL}${video?.image?.data?.attributes?.url})`,
                  }}
                  key={video.id}
                >
                  <div className="content-box">
                    <div className="text">
                      <h2>
                        {video?.type_1} <span>{video?.type_2}</span>
                      </h2>
                      <h4>
                        <i className="far fa-map-marker-alt" />
                        {video?.location}
                      </h4>
                    </div>
                    <div className="video-btn">
                      <a
                        href={video?.videoUrl}
                        className="lightbox-image"
                        data-caption=""
                      >
                        <i className="icon-13" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* video-section end */}
        {/* project-section */}
        <section className="project-section">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="sec-title">
              <span className="sub-title">Portfolio</span>
              <h2>
                Our Completed{" "}
                <span>
                  Architecture Projects
                </span>
              </h2>
            </div>
            <div className="carousel-content">
              <div className="five-item-carousel owl-carousel owl-theme owl-dots-none">
                {projectsList?.projectDetails?.data.map(
                  (project, index) => (
                    <div className="project-block-one" key={project?.attributes?.name}>
                      <div className="inner-box">
                        <figure className="image-box">
                          <img
                            src={`${BASE_URL}${project?.attributes?.homeImage?.data?.attributes?.url}`}
                            alt=""
                          />
                        </figure>
                        <div className="content-box">
                          <div className="text">
                            <h2>
                              <a href="#">{project?.attributes?.name}</a>
                            </h2>
                            <p>
                              <i className="far fa-map-marker-alt" />
                              {project?.attributes?.location}
                            </p>
                            <span className="big-text">0{index + 1}</span>
                          </div>
                          <div className="link">
                            <a href="#">
                              <i className="icon-7" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="more-btn centred">
              <a href="/projects" className="theme-btn btn-one">
                View All Projects
              </a>
            </div>
          </div>
        </section>
        {/* project-section end */}
        {/* clients-section */}
        <section className="clients-section">
          <div
            className="shape"
            style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
          />
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="auto-container">
            <div className="five-item-carousel owl-carousel owl-theme owl-nav-none owl-dots-none">
              {clientSection?.aboutClientSection?.data?.attributes?.aboutClientSection?.data.map(
                (client) => (
                  <figure className="clients-logo" key={client?.id}>
                    <img src={`${BASE_URL}${client?.attributes?.url}`} alt="" />
                  </figure>
                )
              )}
            </div>
          </div>
        </section>
        {/* clients-section end */}
        {/* news-section */}
        {/* <section className="news-section">
          <div className="line-shape">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
            <div className="line line-4" />
          </div>
          <div className="large-container">
            <div className="sec-title centred">
              <span className="sub-title">Blogs</span>
              <h2>Our Latest News</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>12/12/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          A Brief History on the Beginnings of Modern
                          Architecture
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi.
                      </p>
                    </div>
                    <div className="overlay-content">
                      <div className="overlay-inner">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-16" />
                            <a href="blog-details.html">Author &nbsp;,</a>
                          </li>
                          <li>12/12/2022</li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            A Brief History on the Beginnings of Modern
                            Architecture
                          </a>
                        </h3>
                        <p>
                          Penatibus turpis vel eget cursus ut et. Lacus velit,
                          venenatis eu morbi egestas amet, nunc. Ut sem libero
                          sed nisl tincidunt tristique egestas non vitae.
                          Pulvinar quis duis leo in quis arcu enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>12/12/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Electric Feel And Of Other Things Lacinia eget
                          consecte sed convallis.
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi.
                      </p>
                    </div>
                    <div className="overlay-content">
                      <div className="overlay-inner">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-16" />
                            <a href="blog-details.html">Author &nbsp;,</a>
                          </li>
                          <li>12/12/2022</li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Electric Feel And Of Other Things Lacinia eget
                            consecte sed convallis.
                          </a>
                        </h3>
                        <p>
                          Penatibus turpis vel eget cursus ut et. Lacus velit,
                          venenatis eu morbi egestas amet, nunc. Ut sem libero
                          sed nisl tincidunt tristique egestas non vitae.
                          Pulvinar quis duis leo in quis arcu enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>12/12/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Cras Ultricies Ligula Sed Magna Vivamus Suscipit Eget
                          Felis Porttitor.
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi.
                      </p>
                    </div>
                    <div className="overlay-content">
                      <div className="overlay-inner">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-16" />
                            <a href="blog-details.html">Author &nbsp;,</a>
                          </li>
                          <li>12/12/2022</li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Cras Ultricies Ligula Sed Magna Vivamus Suscipit
                            Eget Felis Porttitor.
                          </a>
                        </h3>
                        <p>
                          Penatibus turpis vel eget cursus ut et. Lacus velit,
                          venenatis eu morbi egestas amet, nunc. Ut sem libero
                          sed nisl tincidunt tristique egestas non vitae.
                          Pulvinar quis duis leo in quis arcu enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 news-block">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div className="content-box">
                      <ul className="post-info clearfix">
                        <li>
                          <i className="icon-16" />
                          <a href="blog-details.html">Author &nbsp;,</a>
                        </li>
                        <li>12/12/2022</li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Donec sollicidin nibh porttitor lectus Felis Portitor
                          Volutpat Diam Sit.
                        </a>
                      </h3>
                      <p>
                        Penatibus turpis vel eget cursus ut et. Lacus velit,
                        venenatis eu morbi.
                      </p>
                    </div>
                    <div className="overlay-content">
                      <div className="overlay-inner">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-16" />
                            <a href="blog-details.html">Author &nbsp;,</a>
                          </li>
                          <li>12/12/2022</li>
                        </ul>
                        <h3>
                          <a href="blog-details.html">
                            Donec sollicidin nibh porttitor lectus Felis
                            Portitor Volutpat Diam Sit.
                          </a>
                        </h3>
                        <p>
                          Penatibus turpis vel eget cursus ut et. Lacus velit,
                          venenatis eu morbi egestas amet, nunc. Ut sem libero
                          sed nisl tincidunt tristique egestas non vitae.
                          Pulvinar quis duis leo in quis arcu enim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* news-section end */}
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

const loadHeroBanner = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_HERO_BANNER,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadGetToKnowInfo = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_GET_TO_KNOW,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadVideos = async () => {
  const { data } = await getClient().query({
    query: GET_HOME_VIDEOS,
    variables: {
      publicationState: "LIVE",
    },
  });

  return data;
};

const loadProjectsList = async () => {
  const { data } = await getClient().query({
    query: GET_PROJECTS_LIST,
    variables: {
      publicationState: "LIVE",
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
  });

  return data;
};

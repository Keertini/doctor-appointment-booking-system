import React from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
import patientImg01 from "../assets/images/p1.jpg";
import patientImg02 from "../assets/images/p2.jpg";
import patientVideo from "../assets/images/patient-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/subtitle";
import SearchBar from "./../shared/SearchBar";
import AvailableDoctorList from "../components/Available-doctors/AvailableDoctorList";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={patientImg01} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={patientVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={patientImg02} alt="" />
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Anytime, Anywhere"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Unlock the door to hassle-free{" "}
                  <span className="hightlight">appointments </span>and seamless
                  scheduling
                </h1>
                <p>
                  Booking an appointment through our website is akin to
                  embarking on a journey towards better health and well-being.
                  With just a few clicks, patients can unlock access to quality
                  care and seamless scheduling. Each appointment is a milestone
                  in the path to wellness, where fleeting health concerns are
                  addressed and lasting solutions are found. Our user-friendly
                  interface ensures that booking is effortless, allowing
                  patients to select their preferred date and time, provide
                  necessary details, and confirm their appointment with ease.
                  Just like travel, each appointment holds the promise of a
                  transformative experience, guiding patients towards a
                  healthier and happier life.
                </p>
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ==================== HERO SECTION START ====================== */}

      {/* ========== FEATURED DOCTOR SECTION START ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__doctor-title">Our available doctors</h2>
            </Col>
            <AvailableDoctorList />
          </Row>
        </Container>
      </section>
      {/* ========== FEATURED DOCTOR SECTION END =========== */}

      {/* ========== EXPERIENCE SECTION START ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  "Rely on our expertise; we'll turn your scheduling hassles
                  into seamless appointments, ensuring your time is valued and
                  your health prioritized."{" "}
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful operations</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Friendly Doctors</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Year experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== EXPERIENCE SECTION END ============== */}

      {/* ========== TESTIMONIAL SECTION START ================ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Happy smiles"} />
              <h2 className="testimonial__title">
                What our customers say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== TESTIMONIAL SECTION END ================== */}
      <NewsLetter />
    </>
  );
};

export default Home;

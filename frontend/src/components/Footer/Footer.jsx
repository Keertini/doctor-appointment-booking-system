import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

// Array of quick links for the first column
const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/doctors",
    display: "Doctors",
  },
];

// Array of quick links for the second column
const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                "Embark on a journey of seamless appointments with our tailored
                booking system, ensuring each interaction is a memorable step
                towards your healthcare goals."
              </p>
              {/* Social media links */}
              <div className="social__link d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          {/* Column 2 */}
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            {/* Quick links */}
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Column 3 */}
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            {/* Quick links */}
            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Column 4 */}
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>
            {/* Contact information */}
            <ListGroup className="footer__quick-links">
              {/* Address */}
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0" style={{ fontSize: "smaller" }}>
                  No.16, Lilac Road, Chennai-08.
                </p>
              </ListGroupItem>
              {/* Email */}
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0" style={{ fontSize: "smaller" }}>
                  healthcare.help@gmail.com
                </p>
              </ListGroupItem>
              {/* Phone */}
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0" style={{ fontSize: "smaller" }}>
                  91+ 9876543210
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

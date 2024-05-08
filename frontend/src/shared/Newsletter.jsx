import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import femaleDoctor from "../assets/images/female-doctor.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      alert("Subscribed successfully!");
      setEmail("");
    } else {
      alert("Please enter your email.");
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>
                Subscribe now to receive valuable appointment-related updates
                straight to your inbox!
              </h2>

              <div className="newsletter__input">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleInputChange}
                />
                <button
                  className="btn newsletter__btn"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              <p id="paragraph">
                Subscribe now to receive invaluable appointment insights
                straight to your inbox! From scheduling tips to health advice,
                stay informed and prepared for your next medical visit!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={femaleDoctor} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;

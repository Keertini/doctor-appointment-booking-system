import React, { useState, useRef, useEffect, useContext } from "react";
import "../styles/doctor-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const DoctorDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [doctorRating, setDoctorRating] = useState(null);
  const { user } = useContext(AuthContext);

  // fetch data from database
  const {
    data: doctor,
    loading,
    error,
  } = useFetch(`${BASE_URL}/doctors/${id}`);

  const { image, name, description, fees, reviews, hospital, location } =
    doctor;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: doctorRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doctor]);

  return (
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">LOADING.........</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <Row>
            <Col lg="8">
              <div className="doctor__content">
                <img src={image} alt="" />

                <div className="doctor__info">
                  <h2>{name}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="doctor__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {avgRating === 0 ? null : avgRating}
                      {avgRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-fill"></i> {location}
                    </span>
                  </div>

                  <div className="doctor__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i> {hospital}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i> {fees}/ per
                      person
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>

                {/* ============ DOCTOR REVIEWS SECTION START ============ */}
                <div className="doctor__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setDoctorRating(1)}>
                        1 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setDoctorRating(2)}>
                        2 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setDoctorRating(3)}>
                        3 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setDoctorRating(4)}>
                        4 <i class="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setDoctorRating(5)}>
                        5 <i class="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your feedback"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i class="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ============ DOCTOR REVIEWS SECTION END ============== */}
              </div>
            </Col>

            <Col lg="4">
              <Booking doctor={doctor} avgRating={avgRating} />
            </Col>
          </Row>
        )}
      </Container>
      <Newsletter />
    </section>
  );
};

export default DoctorDetails;

import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const hospitalRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const hospital = hospitalRef.current.value;

    if (location === "" || hospital === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `${BASE_URL}/doctors/search/getDoctorBySearch?location=${location}&hospital=${hospital}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/doctors/search?location=${location}&hospital=${hospital}`, {
      state: result.data,
    });
  };

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                id="search-location"
                type="text"
                placeholder="Search for nearest doctors!"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Hospital</h6>
              <input
                id="search-hospital"
                type="text"
                placeholder="Search for best hospitals!"
                ref={hospitalRef}
              />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

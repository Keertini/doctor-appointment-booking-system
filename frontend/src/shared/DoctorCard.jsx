import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./doctor-card.css";
import calculateAvgRating from "../utils/avgRating";

const DoctorCard = ({ doctor }) => {
  const { _id, name, hospital, image, fees, available, reviews } = doctor;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="doctor__card">
      <Card>
        <div className="doctor__img">
          <img src={image} alt="doctor-img" />
          {available && <span>Available</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="doctor__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {hospital}
            </span>
            <span className="doctor__rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="doctor__title">
            <Link to={`/doctors/${_id}`}>{name}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${fees} <span> /per person</span>
            </h5>

            {/* <button className=' booking__btn'>
                     <Link to={`/doctors/${_id}`}>Book Now</Link>
                  </button> */}
            <Link to={`/doctors/${_id}`}>
              <button className=" booking__btn">Book Now</button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DoctorCard;

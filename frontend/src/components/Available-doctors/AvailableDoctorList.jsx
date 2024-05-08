import React from "react";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import DoctorCard from "../../shared/DoctorCard";

const AvailableDoctorList = () => {
  // Fetch available doctors data using useFetch hook
  const {
    data: availableDoctors,
    loading,
    error,
  } = useFetch(`${BASE_URL}/doctors/search/getAvailableDoctors`);

  return (
    <>
      {/* Display loading message while data is being fetched */}
      {loading && <h4>Loading.....</h4>}
      {/* Display error message if there's an error */}
      {error && <h4>{error}</h4>}
      {/* Display available doctors */}
      {!loading &&
        !error &&
        availableDoctors?.map((doctor) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={doctor._id}>
            {/* Render DoctorCard component for each doctor */}
            <DoctorCard doctor={doctor} />
          </Col>
        ))}
    </>
  );
};

export default AvailableDoctorList;

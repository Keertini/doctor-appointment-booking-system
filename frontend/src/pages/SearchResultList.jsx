import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import DoctorCard from "../shared/DoctorCard";
import Newsletter from "./../shared/Newsletter";

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  return (
    <>
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Doctor Found</h4>
            ) : (
              data?.map((doctor) => (
                <Col lg="3" className="mb-4" key={doctor._id}>
                  {" "}
                  <DoctorCard doctor={doctor} />{" "}
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;

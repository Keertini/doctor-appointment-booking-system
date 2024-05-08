import React, { useState, useEffect } from "react";
import "../styles/doctor.css";
import DoctorCard from "../shared/DoctorCard";
import SearchBar from "../shared/SearchBar";
import Newsletter from "../shared/Newsletter";
import { Col, Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Doctors = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: doctors,
    loading,
    error,
  } = useFetch(`${BASE_URL}/doctors?page=${page}`);
  const { data: doctorCount } = useFetch(
    `${BASE_URL}/doctors/search/getDoctorCount`
  );

  useEffect(() => {
    const pages = Math.ceil(doctorCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, doctorCount, doctors]);

  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">LOADING..........</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {doctors?.map((doctor) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={doctor._id}>
                  {" "}
                  <DoctorCard doctor={doctor} />{" "}
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Doctors;

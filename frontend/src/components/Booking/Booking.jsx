import React, { useState, useContext, useEffect, useRef } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import SignatureCanvas from "react-signature-canvas";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/images/logo.png";
import { BASE_URL } from "../../utils/config";
import jsPDF from "jspdf";

const Booking = ({ doctor, avgRating }) => {
  const { _id, fees, reviews, name, available, hospital, location, signature } =
    doctor;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const serviceFee = 10;
  const totalAmount = Number(fees) + Number(serviceFee);

  const sigCanvas = useRef({});
  const [userSignature, setUserSignature] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const clearSignature = () => {
    sigCanvas.current.clear();
    setUserSignature(null);
  };

  const saveSignature = () => {
    if (sigCanvas.current.isEmpty()) {
      return alert("Please provide a signature!");
    }
    setUserSignature(
      sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    doctorId: _id,
    doctorName: name,
    fullName: "",
    phone: "",
    dateOfBirth: "",
    sex: "",
    healthNumber: "",
    address: "",
    fees: totalAmount,
    bookAt: "",
    available: available,
    forMe: true,
    relationship: "",
  });

  useEffect(() => {
    const bookingTime = new Date();
    if (available) {
      const formattedBookingTime = bookingTime.toISOString().slice(0, 10);
      setBooking((prev) => ({ ...prev, bookAt: formattedBookingTime }));
    } else {
      bookingTime.setDate(bookingTime.getDate() + 1);
      const formattedBookingTime = bookingTime.toISOString().slice(0, 10);
      setBooking((prev) => ({ ...prev, bookAt: formattedBookingTime }));
    }
  }, [available]);

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!user || user === undefined || user === null) {
      return alert("Please sign in");
    }

    // Check for required fields
    if (!booking.fullName) {
      errors.fullName = "Full name is required";
    }
    if (!booking.phone) {
      errors.phone = "Phone number is required";
    }
    if (!booking.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }
    if (!booking.sex) {
      errors.sex = "Gender is required";
    }
    if (!booking.healthNumber) {
      errors.healthNumber = "Health number is required";
    }
    if (!booking.address) {
      errors.address = "Address is required";
    }

    // Additional validation for phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(booking.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }

    // Additional validation for full name: only letters and spaces allowed
    const fullNameRegex = /^[A-Za-z\s]+$/;
    if (!fullNameRegex.test(booking.fullName)) {
      errors.fullName =
        "Please enter a valid full name (letters and spaces only)";
    }

    // Check if booking is for someone else and validate relationship
    if (!booking.forMe && !booking.relationship) {
      errors.relationship = "Please select a relationship";
    }

    // Check if user has provided a signature
    if (!userSignature) {
      errors.signature = "Please provide a signature";
    }

    setFormErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      try {
        // Create new jsPDF instance
        const doc = new jsPDF();

        // Add Health Care Appointments Heading
        doc.setFontSize(18);
        doc.text("HEALTH CARE APPOINTMENTS", 100, 20, { align: "center" });

        // Add Logo
        const logo = new Image();
        logo.src = Logo; // Replace with the path to your logo image
        doc.addImage(logo, "PNG", 10, 10, 40, 20);

        // Add patient details
        doc.setFontSize(12);
        doc.text("PATIENT DETAILS", 10, 40);
        doc.text(`Patient Name: ${booking.fullName}`, 10, 50);
        doc.text(`Email: ${booking.userEmail}`, 10, 60);
        doc.text(`Phone Number: ${booking.phone}`, 10, 70);
        doc.text(`DOB: ${booking.dateOfBirth}`, 10, 80);
        doc.text(`Gender: ${booking.sex}`, 10, 90);
        doc.text(`Health Number: ${booking.healthNumber}`, 10, 100);
        doc.text(`Address: ${booking.address}`, 10, 110);
        // If not for the user, display the relationship
        if (!booking.forMe) {
          doc.text(
            `Relationship with patient: ${booking.relationship}`,
            10,
            120
          );
        }
        // Adding user's signature
        doc.addImage(userSignature, "PNG", 10, 130, 30, 30);

        // Add doctor details
        doc.text("DOCTOR DETAILS", 10, 170);
        doc.text(`Doctor Name: ${name}`, 10, 180);
        doc.text(`Hospital Name: ${hospital}`, 10, 190);
        doc.text(`Location of Hospital: ${location}`, 10, 200);
        doc.text(`Total Fees: $${fees}`, 10, 210);
        // Add Appointed Booked At
        doc.text(`Appointed Booked At: ${booking.bookAt}`, 10, 220);
        doc.addImage(signature, "PNG", 10, 230, 30, 30);

        // Add terms and conditions
        doc.setFontSize(10);
        doc.text(
          "Terms and Conditions: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, unde mollitia possimus accusamus voluptatum libero tenetur molestiae natus nesciunt ipsa debitis repellendus aspernatur delectus veritatis aut optio earum asperiores velit. Reprehenderit doloribus vero sint molestiae eum nostrum asperiores eligendi tenetur nemo laudantium alias, cupiditate maiores veniam voluptatibus voluptas, corrupti iure porro, quo inventore eius tempore illum. Culpa, aperiam. Cupiditate, optio omnis eaque eveniet nemo vitae dolore dolores quam sapiente porro laborum quis suscipit non doloribus numquam! Aspernatur rerum nihil itaque, omnis labore optio dolorem quo, amet porro consectetur doloribus minus similique eveniet temporibus qui ipsa pariatur libero beatae impedit ex!",
          10,
          270,
          { maxWidth: 200 }
        );

        // Save the PDF
        doc.save("appointment.pdf");

        // Save booking details to database
        const res = await fetch(`${BASE_URL}/booking`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(booking),
        });

        const result = await res.json();

        if (!res.ok) {
          return alert(result.message);
        }

        navigate("/thank-you");
      } catch (error) {
        console.error("Error:", error);
        alert(error.message);
      }
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${fees} <span>.</span>
        </h3>
        <span className="doctor__rating d-flex align-items-center">
          <i
            className="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
            {formErrors.fullName && (
              <span className="error">{formErrors.fullName}</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span className="error">{formErrors.phone}</span>
            )}
          </FormGroup>
          Date of Birth
          <FormGroup>
            <input
              type="date"
              placeholder="Date of Birth"
              id="dateOfBirth"
              required
              onChange={handleChange}
            />
            {formErrors.dateOfBirth && (
              <span className="error">{formErrors.dateOfBirth}</span>
            )}
          </FormGroup>
          <FormGroup>
            <select id="sex" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {formErrors.sex && <span className="error">{formErrors.sex}</span>}
          </FormGroup>
          <FormGroup>
            <select id="healthNumber" onChange={handleChange} required>
              <option value="">Select Health Number</option>
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            {formErrors.healthNumber && (
              <span className="error">{formErrors.healthNumber}</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Address"
              id="address"
              required
              onChange={handleChange}
            />
            {formErrors.address && (
              <span className="error">{formErrors.address}</span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder="Book At"
              id="bookAt"
              disabled
              value={booking.bookAt}
              onChange={handleChange}
            />
          </FormGroup>
          <div className="radio-labels">
            <label>
              For me:
              <input
                type="radio"
                name="forMe"
                value="true"
                checked={booking.forMe}
                onChange={() =>
                  setBooking((prev) => ({ ...prev, forMe: true }))
                }
              />
            </label>
            <label>
              For my child(ren):
              <input
                type="radio"
                name="forMe"
                value="false"
                checked={!booking.forMe}
                onChange={() =>
                  setBooking((prev) => ({ ...prev, forMe: false }))
                }
              />
            </label>
          </div>
          {!booking.forMe && (
            <FormGroup>
              <select id="relationship" onChange={handleChange} required>
                <option value="">Select Relationship</option>
                <option value="Parent">Parent</option>
                <option value="Guardian">Guardian</option>
                <option value="Other">Other</option>
              </select>
              {formErrors.relationship && (
                <span className="error">{formErrors.relationship}</span>
              )}
            </FormGroup>
          )}
          <div className="signature-container">
            Signature
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
            />
            <div className="signature-buttons">
              <Button onClick={clearSignature}>Clear</Button>
              <Button onClick={saveSignature}>Save</Button>
            </div>
            {formErrors.signature && (
              <span className="error">{formErrors.signature}</span>
            )}
          </div>
          <Button className="btn primary__btn w-100 mt-4" type="submit">
            Book Now
          </Button>
        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${fees} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${fees}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;

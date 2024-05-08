import Booking from "./../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
  // Creating a new booking instance with data from request body
  const newBooking = new Booking(req.body);

  try {
    // Saving the new booking to the database
    const savedBooking = await newBooking.save();
    // Sending success response with the saved booking data
    res.status(200).json({
      success: true,
      message: "Your appointment is booked!",
      data: savedBooking,
    });
  } catch (error) {
    // Handling error if booking creation fails
    console.error(error);
    res.status(500).json({ success: true, message: "Internal server error!" });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    // Finding a booking by its id
    const book = await Booking.findById(id);
    // Sending success response with the booking data
    res
      .status(200)
      .json({ success: true, message: "Successfull!", data: book });
  } catch (error) {
    // Handling error if booking retrieval fails
    res.status(404).json({ success: true, message: "Not Found!" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    // Finding all bookings
    const books = await Booking.find();
    // Sending success response with the list of all bookings
    res
      .status(200)
      .json({ success: true, message: "Successfull!", data: books });
  } catch (error) {
    // Handling error if retrieving all bookings fails
    res.status(500).json({ success: true, message: "Internal server error!" });
  }
};

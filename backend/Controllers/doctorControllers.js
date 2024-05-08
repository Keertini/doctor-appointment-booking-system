import Doctor from "../models/Doctor.js";

// Add new doctor
export const createDoctor = async (req, res) => {
  // Creating a new Doctor instance with data from request body
  const newDoctor = new Doctor(req.body);

  try {
    // Saving the new doctor to the database
    const savedDoctor = await newDoctor.save();

    // Sending success response with the saved doctor data
    res.status(200).json({
      success: true,
      message: "Successfully added",
      data: savedDoctor,
    });
  } catch (error) {
    // Handling error if adding doctor fails
    res
      .status(500)
      .json({ success: true, message: "Failed to add doctor. Try again!" });
  }
};

// Update Doctor
export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    // Updating the doctor by id with data from request body
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // Sending success response with the updated doctor data
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (error) {
    // Handling error if updating doctor fails
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete Doctor
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    // Deleting the doctor by id
    await Doctor.findByIdAndDelete(id);

    // Sending success response
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    // Handling error if deleting doctor fails
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// Get single Doctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    // Finding a doctor by id and populating reviews
    const doctor = await Doctor.findById(id).populate("reviews");

    // Sending success response with the doctor data
    res
      .status(200)
      .json({ success: true, message: "Successfully got", data: doctor });
  } catch (error) {
    // Handling error if getting doctor fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// Get All Doctors
export const getAllDoctor = async (req, res) => {
  // For pagination
  const page = parseInt(req.query.page);

  try {
    // Finding all doctors, paginating results
    const doctors = await Doctor.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    // Sending success response with the list of doctors
    res.status(200).json({
      success: true,
      count: doctors.length,
      message: "Successfully got all doctors",
      data: doctors,
    });
  } catch (error) {
    // Handling error if getting all doctors fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// Get doctor by search
export const getDoctorBySearch = async (req, res) => {
  // Using RegExp for case-insensitive search
  const hospital = new RegExp(req.query.hospital, "i");

  try {
    // Finding doctors by hospital name and populating reviews
    const doctors = await Doctor.find({
      hospital,
    }).populate("reviews");

    // Sending success response with the list of doctors matching the search
    res
      .status(200)
      .json({ success: true, message: "Successfully", data: doctors });
  } catch (error) {
    // Handling error if search fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// Get available doctors
export const getAvailableDoctor = async (req, res) => {
  try {
    // Finding available doctors and populating reviews
    const doctors = await Doctor.find({ available: true })
      .populate("reviews")
      .limit(8);

    // Sending success response with the list of available doctors
    res
      .status(200)
      .json({ success: true, message: "Successfully", data: doctors });
  } catch (error) {
    // Handling error if getting available doctors fails
    res.status(404).json({ success: false, message: "Not Found" });
  }
};

// Get total doctor count
export const getDoctorCount = async (req, res) => {
  try {
    // Counting total number of doctors
    const doctorCount = await Doctor.estimatedDocumentCount();

    // Sending success response with the count of doctors
    res.status(200).json({ success: true, data: doctorCount });
  } catch (error) {
    // Handling error if getting doctor count fails
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};

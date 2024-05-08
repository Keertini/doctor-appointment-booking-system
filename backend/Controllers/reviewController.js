import Doctor from "../models/Doctor.js";
import Review from "../models/Review.js";

// Create a new review for a doctor
export const createReview = async (req, res) => {
  // Extracting doctorId from request parameters
  const doctorId = req.params.doctorId;

  // Creating a new Review instance with data from request body
  const newReview = new Review({ ...req.body });

  try {
    // Saving the new review to the database
    const savedReview = await newReview.save();

    // Updating the reviews array of the corresponding doctor with the new review
    await Doctor.findByIdAndUpdate(doctorId, {
      $push: { reviews: savedReview._id }, // Pushing the new review's id to the doctor's reviews array
    });

    // Sending success response with the saved review data
    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (error) {
    // Handling error if submitting review fails
    res.status(500).json({ success: false, message: "Failed to submit" });
  }
};

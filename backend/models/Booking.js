import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  healthNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bookAt: {
    type: Date,
    required: true,
  },
  forMe: {
    type: Boolean,
    required: true,
  },
  relationship: {
    type: String,
    default: "", // Default to empty string, applicable if forMe is true or unspecified
    required: function () {
      return !this.forMe;
    }, // Required if booking for child(ren)
  },
});

export default mongoose.model("Booking", bookingSchema);

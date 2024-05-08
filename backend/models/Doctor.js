import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    signature: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);

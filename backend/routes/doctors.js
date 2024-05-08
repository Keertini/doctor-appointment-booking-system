import express from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctor,
  getAvailableDoctor,
  getSingleDoctor,
  getDoctorBySearch,
  getDoctorCount,
  updateDoctor,
} from "../Controllers/doctorControllers.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new Doctor
router.post("/", verifyAdmin, createDoctor);

// Update Doctor
router.put("/:id", verifyAdmin, updateDoctor);

// Delete Doctor
router.delete("/:id", verifyAdmin, deleteDoctor);

// Get single Doctor
router.get("/:id", getSingleDoctor);

// Get all Doctor
router.get("/", getAllDoctor);

// Get Doctor by search
router.get("/search/getDoctorBySearch", getDoctorBySearch);
router.get("/search/getAvailableDoctors", getAvailableDoctor);
router.get("/search/getDoctorCount", getDoctorCount);

export default router;

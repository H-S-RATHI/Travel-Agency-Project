import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
  getAllTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createTour);
router.put("/:id", verifyAdmin, updateTour);
router.delete("/:id", verifyAdmin, deleteTour);
router.get('/:id', getSingleTour)
router.post('/', getAllTour)
router.get('/search/getTourBySearch', getAllTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;


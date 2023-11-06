import express from "express";
import {
  countByCity,
  countByType,
  creatHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../api/controllers/hotel.js";
import { verifyAdmin } from "../api/utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, creatHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get

router.get("/find/:id", getHotel);
//get all

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;

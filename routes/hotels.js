import express from "express";
import { creatHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../api/controllers/hotel.js";

const router = express.Router();

//create
router.post("/", creatHotel) 
//update
router.put("/:id", updateHotel);
//delete
router.delete("/:id", deleteHotel);
//get

router.get("/:id", getHotel);
//get all

router.get("/", getHotels);

export default router;

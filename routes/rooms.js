import express from "express";
import {
  creatRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../api/controllers/room.js";
import { verifyAdmin } from "../api/utils/verifyToken.js";

const router = express.Router();
//create
router.post("/:hotelid", verifyAdmin, creatRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//get

router.get("/:id", getRoom);
//get all

router.get("/", getRooms);

export default router;

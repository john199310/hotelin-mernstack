import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import {
  getHotel,
  getSingleHotel,
  getCityHotel,
  getBookings
} from "../controllers/getController.js";

import {
  createHotel,
  searchHotel,
  bookHotel,
  handlePayment,
  paymentVerification,
  bookSuccess,
} from "../controllers/postController.js";

import { updateHotel, cancelBooking } from "../controllers/updateController.js";

import { AuthenticateToken } from "../middleware/tokenValidate.js";

const router = express.Router();

// User Routes
router.post("/signup", createUser);
router.post("/signin", loginUser); //AuthenticateToken,

// get hotel
router.get("/all-hotels", getHotel);
router.get("/single-hotels/:id", getSingleHotel);
router.get("/city/:city", getCityHotel);
router.get("/all-booking", AuthenticateToken, getBookings);

// post hotel
router.post("/", createHotel);
router.post("/search", searchHotel);
router.post("/book-hotel", bookHotel);
router.post("/payment", AuthenticateToken, handlePayment);
router.post("/payment-verification", AuthenticateToken, paymentVerification);
router.post("/booking-successfull", AuthenticateToken, bookSuccess);

// for update hotel
router.patch("/:id", updateHotel);
router.put("/cancel-booking/:id", cancelBooking)

export default router;

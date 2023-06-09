import HotelMessage from "../models/hotelModel.js";
import BookingMessage from "../models/bookingModel.js";
import mongoose from "mongoose";

// GET Controllers

export const getHotel = async (req, res) => {
  try {
    const hotelMessages = await HotelMessage.find();
    //console.log(pMessages);
    res.status(200).json(hotelMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSingleHotel = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Hotel with that Id");
  try {
    const singleHotel = await HotelMessage.findById(id);
    //console.log(singleHotel);
    res.status(200).json(singleHotel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCityHotel = async (req, res) => {
  const { city } = req.params;
  try {
    let result = await HotelMessage.find({ city: city });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  // to mark booking completed
  isBookingCompleted();
  try {
    const FinalResult = await BookingMessage.find({userId: req.userId}).populate(
      "hotelId",
      "name image city rating totalReview"
    );
    res.status(200).json(FinalResult);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const isBookingCompleted = async () => {
  try {
    const result = await BookingMessage.find();
    let bookResult = result.filter((book) => book.status == "booked");
    bookResult.forEach((book) => {
      let currDate = new Date();
      let checkOutDate = new Date(book.checkOut);
      if (currDate > checkOutDate) {
        BookingMessage.findByIdAndUpdate(
          book._id,
          {
            $set: { status: "completed" },
          },
          { new: true }
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};

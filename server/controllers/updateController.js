import HotelMessage from "../models/hotelModel.js";
import BookingMessage from "../models/bookingModel.js";
import mongoose from "mongoose";

// PTACH Controllers

export const updateHotel = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Hotel with that Id");

  const update = await HotelMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(update);
};

export const cancelBooking = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Booking with that Id");
    let result = await BookingMessage.findByIdAndUpdate(
      id,
      {
        $set: { status: "cancelled" },
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

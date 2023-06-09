import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  hotelId: { type: ObjectId, required: true, ref: "HotelMessage" },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  nights: { type: String, required: true },
  rooms: { type: String, required: true },
  guests: { type: String, required: true },
  price: { type: String, required: true },
  totalAmount: { type: String, required: true },
  userId: { type: ObjectId, required: true, ref: "UserMessage" },
  paymentId: { type: String, required: true },
  orderId: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMessage = mongoose.model("BookingMessage", postSchema);

export default UserMessage;

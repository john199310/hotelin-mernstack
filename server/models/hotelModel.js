import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  city: String,
  price: Number,
  rating: String,
  totalReview: String,
  details: {
    adults: Number,
    ameties: String,
    view: String,
    size: String,
    bedType: String,
  },
  reviews: [
    {
      name: String,
      image: String,
      rating: String,
      review: String,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const HotelMessage = mongoose.model("HotelMessage", postSchema);

export default HotelMessage;

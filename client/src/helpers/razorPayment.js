import { ApiFunc } from "../api/authApi";
import { notification } from "antd";

const openNotificationWithIcon = (type, title, message) => {
  notification[type]({
    message: title,
    description: message,
  });
};

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const displayRazorPay = async (fulldetails, userId, history) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const body = {
    totalAmount: fulldetails.priceDetails.totalAmount,
  };

  const data = await ApiFunc.post(
    "http://localhost:5000/hotelin/payment",
    body
  );

  var options = {
    key: process.env.REACT_APP_RAZORPAY_ID,
    currency: data.data.currency,
    amount: data.data.amount.toString(),
    order_id: data.data.id,
    name: "Hotel In",
    description: "Thank you for booking hotel from us !!",
    image: process.env.PUBLIC_URL + "/assets/logo-black.png",
    handler: async function (response) {
      console.log("payment successfull", response);
      const data = {
        hotelId: fulldetails.hotelDetails._id,
        checkIn: fulldetails.hotelDetails.checkIn,
        checkOut: fulldetails.hotelDetails.checkOut,
        nights: fulldetails.hotelDetails.nights,
        rooms: fulldetails.hotelDetails.rooms,
        guests: fulldetails.hotelDetails.guest,
        price: fulldetails.priceDetails.price,
        totalAmount: fulldetails.priceDetails.totalAmount,
        paymentId: response.razorpay_payment_id,
        orderId: response.razorpay_order_id,
        status: "booked",
      };
      await ApiFunc.post("/hotelin/booking-successfull", data);
      openNotificationWithIcon(
        "success",
        "Booking Confirmed",
        "Successfully booked rooms"
      );
      history.push(`/profile/${userId}`);
    },
    prefill: {
      name: data.data.name,
      email: data.data.email,
      phone_number: data.data.mobile,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  paymentObject.on("payment.failed", function (response) {
    console.log(response);
    openNotificationWithIcon("error", "Booking Failed", response.data.message);
  });
};

import moment from 'moment';


const dateFormat = "DD-MM-YYYY";
// calculate number of nights

export const numberOfNights = (startDate, endDate) => {
    //console.log()
  let date1 = moment(startDate);
  let date2 = moment(endDate);
  let numberOfNight = date2.diff(date1, 'days')
    if(numberOfNight > 0){
        return numberOfNight
    } else{
        return 1
    }
};

export const roomNightPrice = (price, rooms, totalNights) => {
    return price * rooms * totalNights
}

export const calDiscount = (price, discount) => {
    return Math.floor((price * discount) / 100)
}

export const findTax = (price) => {
    return Math.floor((price * 18) / 100) 
}

export const calPrice = (totalNights, price, rooms, discount, tax) => {
    let price_rooms_nights = price * totalNights * rooms;
    return price_rooms_nights + tax - discount
}
import React from 'react';
import {
    FaBed,
    FaDelicious,
    FaUmbrellaBeach,
    FaTv,
    FaUserAlt,
  } from "react-icons/fa";

export default function Details(props) {

    const { details } = props;
    const iconStyle = {
        color:'#1E62D8',
        fontSize:'20px',
        paddingRight:'5px'
    }
    return (
        <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">
              <FaUserAlt style={iconStyle} /> Adults
            </th>
            <td>{details.adults}</td>
          </tr>
          <tr>
            <th scope="row">
              <FaTv style={iconStyle} /> Amenities
            </th>
            <td>{details.ameties}</td>
          </tr>
          <tr>
            <th scope="row">
              <FaUmbrellaBeach style={iconStyle} /> View
            </th>
            <td>{details.view}</td>
          </tr>
          <tr>
            <th scope="row">
              <FaDelicious style={iconStyle} /> Size
            </th>
            <td>{details.size}</td>
          </tr>
          <tr>
            <th scope="row">
              <FaBed style={iconStyle} /> Bed Type
            </th>
            <td>{details.bedType}</td>
          </tr>
        </tbody>
      </table>
    )
}

import React from "react";
import { Form, Select, DatePicker } from "antd";
import { FormLabel, SubmitButton } from "./homestyle";
import { useFormik } from "formik";
import { dateFormat } from "../../helpers/constant";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getSearchResults } from "../../redux/actions/actions";

export default function SearchForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  function disabledDate(current) {
    if (formik.values.checkIn) {
      return current && current < moment(formik.values.checkIn, dateFormat);
    } else {
      let customDate = moment(Date.now()).format(dateFormat);
      return current && current < moment(customDate, dateFormat);
    }
  }

  const formik = useFormik({
    initialValues: {
      city: "",
      checkIn: "",
      checkOut: "",
      rooms: "",
      adults: "",
      children: "",
    },
    onSubmit: (values) => {
      dispatch(getSearchResults(values));
      history.push("/search-hotel/results");
    },
  });

  //console.log(formik.values);

  return (
    <Form onFinish={formik.handleSubmit}>
      <FormLabel>Select City</FormLabel>
      <Form.Item
        name="city"
        hasFeedback
        rules={[{ required: true, message: "Please Select your city!" }]}
      >
        <Select
          allowClear
          placeholder="Please select a city"
          onChange={(value) => formik.setFieldValue("city", value)}
        >
          <Select.Option value="Mumbai">Mumbai</Select.Option>
          <Select.Option value="Bengaluru">Bengaluru</Select.Option>
          <Select.Option value="Delhi">Delhi</Select.Option>
          <Select.Option value="Hyderabad">Hyderabad</Select.Option>
          <Select.Option value="Chennai">Chennai</Select.Option>
        </Select>
      </Form.Item>
      <div className="row">
        <div className="col-sm-6">
          <FormLabel>Check-In-Date</FormLabel>
          <Form.Item
            name="checkIn"
            hasFeedback
            rules={[
              { required: true, message: "Please Select Check In Date!" },
            ]}
          >
            <DatePicker
              allowClear
              format={dateFormat}
              disabledDate={disabledDate}
              onChange={(value) =>
                formik.setFieldValue(
                  "checkIn",
                  moment(value).format(dateFormat)
                )
              }
            />
          </Form.Item>
        </div>
        <div className="col-sm-6">
          <FormLabel>Check-Out Date</FormLabel>
          <Form.Item
            name="checkOut"
            hasFeedback
            rules={[
              { required: true, message: "Please Select Check Out Date!" },
            ]}
          >
            <DatePicker
              allowClear
              format={dateFormat}
              disabledDate={disabledDate}
              onChange={(value) =>
                formik.setFieldValue(
                  "checkOut",
                  moment(value).format(dateFormat)
                )
              }
            />
          </Form.Item>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <FormLabel>Rooms</FormLabel>
          <Form.Item
            name="rooms"
            hasFeedback
            rules={[{ required: true, message: "Please Select no of Rooms!" }]}
          >
            <Select
              allowClear
              placeholder="Select No of rooms"
              onChange={(value) => formik.setFieldValue("rooms", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
              <Select.Option value="5">5</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-sm-4">
          <FormLabel>Adults</FormLabel>
          <Form.Item
            name="adults"
            hasFeedback
            rules={[{ required: true, message: "Please Select no of Adults!" }]}
          >
            <Select
              allowClear
              placeholder="Select No of adults"
              onChange={(value) => formik.setFieldValue("adults", value)}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-sm-4">
          <FormLabel>Children</FormLabel>
          <Form.Item
            name="children"
            hasFeedback
            rules={[
              { required: true, message: "Please Select no of children!" },
            ]}
          >
            <Select
              allowClear
              placeholder="Select No of children"
              onChange={(value) => formik.setFieldValue("children", value)}
            >
              <Select.Option value="0">None</Select.Option>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <SubmitButton type="submit">Search Hotels</SubmitButton>
    </Form>
  );
}

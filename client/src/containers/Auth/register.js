import React from "react";
import { Form, Input } from "antd";
import { FormLabel, SubmitButton } from "../Home/homestyle";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import {
  Wrapper,
  BannerWrapper,
  FormWrapper,
  CardWrapper,
  CardUpper,
  HotelTag,
  TitleTag,
  LogoWrapper,
  AuthFooter,
  AuthPrivacy,
} from "./style";
import { receiveSignUp } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const inBooking = useSelector((state) => state.Auth.inBooking);
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      mobile: "",
    },
    onSubmit: (values) => {
      dispatch(receiveSignUp(values, history, inBooking));
    },
  });
  return (
    <Wrapper className="container-fluid">
      <div className="row">
        <FormWrapper className="col-sm-6">
          <CardWrapper>
            <CardUpper>
              <Link to="/">
                <LogoWrapper>
                  <img
                    src={process.env.PUBLIC_URL + "/assets/logo-black.png"}
                    alt="hotel.in"
                  />
                </LogoWrapper>
              </Link>
              <HotelTag>
                Raising Comfort to the highest level, Our Hotels & Resorts
                remain stylish, modern, forward thinking global leader of
                hospitality.
              </HotelTag>
              <TitleTag>Register</TitleTag>
            </CardUpper>
            <Form onFinish={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <FormLabel>First Name</FormLabel>
                  <Form.Item
                    name="fname"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter your first Name!",
                      },
                    ]}
                  >
                    <Input
                      type="fname"
                      placeholder="enter your first name.."
                      value={formik.values.fname}
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                </div>
                <div className="col-sm-6">
                  <FormLabel>Last Name</FormLabel>
                  <Form.Item
                    name="lname"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter your last Name!",
                      },
                    ]}
                  >
                    <Input
                      type="lname"
                      placeholder="enter your last name.."
                      value={formik.values.lname}
                      onChange={formik.handleChange}
                    />
                  </Form.Item>
                </div>
              </div>
              <FormLabel>Email</FormLabel>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  { required: true, message: "Please enter correct email!" },
                ]}
              >
                <Input
                  type="email"
                  placeholder="enter your email.."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <FormLabel>Password</FormLabel>
              <Form.Item
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: "Please enetr your password!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="enter your password.."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <FormLabel>Mobile Number</FormLabel>
              <Form.Item
                name="mobile"
                hasFeedback
                rules={[
                  { required: true, message: "Please enter your mobile no!" },
                  {
                    pattern: /^([+]\d{2})?\d{10}$/,
                    message: "Enter only mobile number",
                  },
                ]}
              >
                <Input
                  type="mobile"
                  placeholder="enter your mobile no.."
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <SubmitButton type="submit">Register</SubmitButton>
            </Form>
            <AuthFooter>
              <AuthPrivacy>
                By creating your Hotel In account, you agree to our{" "}
                <a href="#">Terms, Data Policy</a> and Cookie Policy.
              </AuthPrivacy>
              <span>
                Already have an account? Go to <Link to="/login">Login</Link>
              </span>
            </AuthFooter>
          </CardWrapper>
        </FormWrapper>
        <BannerWrapper className="col-sm-6"></BannerWrapper>
      </div>
    </Wrapper>
  );
}

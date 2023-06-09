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
import { receiveLogin } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const inBooking = useSelector((state) => state.Auth.inBooking);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(receiveLogin(values, history, inBooking));
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
              <TitleTag>Login</TitleTag>
            </CardUpper>
            <Form onFinish={formik.handleSubmit}>
              <FormLabel>Email</FormLabel>
              <Form.Item
                name="email"
                hasFeedback
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter correct email!",
                  },
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
                  { required: true, message: "Please Select your city!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="enter your password.."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Form.Item>
              <SubmitButton type="submit">Login</SubmitButton>
            </Form>
            <AuthFooter>
              <AuthPrivacy>
                By creating your Hotel In account, you agree to our{" "}
                <a href="#">Terms, Data Policy</a> and Cookie Policy.
              </AuthPrivacy>
              <span>
                Don't have an account? Go to{" "}
                <Link to="/register">Register</Link>
              </span>
            </AuthFooter>
          </CardWrapper>
        </FormWrapper>
        <BannerWrapper className="col-sm-6"></BannerWrapper>
      </div>
    </Wrapper>
  );
}

//<BannerWrapper className="col-md-6"></BannerWrapper>

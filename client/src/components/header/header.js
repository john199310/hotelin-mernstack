import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineArrowRight,
  AiOutlineRight,
} from "react-icons/ai";
import { Menu, Dropdown, Avatar } from "antd";
import {
  NavbarWrapper,
  NavItems,
  LogoWrapper,
  ImageAvatar,
  DropdownMenu,
} from "./navbarStyle";
import { receiveLogout } from "../../redux/actions/useractions";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.Auth.user);
  const auth = useSelector((state) => state.Auth.isAuthenticated);

  const handlelogout = ({ key }) => {
    if (key == 3) {
      dispatch(receiveLogout());
      history.push("/login");
    }
  };

  const menu = (
    <Menu onClick={handlelogout}>
      {auth ? (
        <>
          <Menu.Item key="1" icon={<AiOutlineUser />}>
            <Link to={`/profile/${user._id}`}>My Bookings</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" icon={<AiOutlineArrowRight />} danger>
            Log Out
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="2" icon={<AiOutlineRight />}>
          <Link to={`/login`}>Login</Link>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <NavbarWrapper
      back={location.pathname != "/" ? "white" : "Transparent"}
      shadow={
        location.pathname != "/" ? "0 0.125rem 0.25rem rgb(0 0 0 / 8%)" : "none"
      }
    >
      <div className="container">
        <NavItems>
          <Link to="/">
            {location.pathname == "/" ? (
              <LogoWrapper
                src={process.env.PUBLIC_URL + "/assets/logo-white.png"}
                alt="hotel.in"
              />
            ) : (
              <LogoWrapper
                src={process.env.PUBLIC_URL + "/assets/logo-black.png"}
                alt="hotel.in"
              />
            )}
          </Link>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <Avatar
              style={{ backgroundColor: "#ffbf00", verticalAlign: "middle" }}
              size="large"
            >
              {user.fname || "User"}
            </Avatar>
            {/* <ImageAvatar>
              <img
                src={process.env.PUBLIC_URL + "/assets/profileImage.jpg"}
                alt="profile"
              />
            </ImageAvatar> */}
          </Dropdown>
        </NavItems>
      </div>
    </NavbarWrapper>
  );
}

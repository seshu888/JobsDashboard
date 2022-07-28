import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  openSidebar,
  closeSidebar,
  logoutUser,
} from "../redux/users/userSlice";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--white);
  transition: all 1s ease;
  width: 100%;
  .nav-center {
    padding: 0 1rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .dropdown {
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    display: none;
    border-radius: var(--borderRadius);
    position: absolute;
    top: 35px;
    width: 100%;
    outline: none;
    border: none;
  }
  .dropdown.show {
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    display: block;
    text-align: center;

    border-radius: var(--borderRadius);
  }

  .logo {
    display: none;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    padding: 0.5rem 2rem;
  }
  @media (max-width: 800px) {
    .logo {
      display: block;
    }
    .logo-text {
      display: none;
      margin: 0;
    }
  }
`;
const Navbar = () => {
  const { sidebarOpen, user } = useSelector((state) => state.user);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const updateWidth = () => {
    if (window.innerWidth > 800) {
      dispatch(closeSidebar());
    }
  };
  window.addEventListener("resize", updateWidth);

  useEffect(() => {
    updateWidth();
  }, [window.innerWidth]);
  return (
    <Wrapper>
      <div className=" nav-center">
        {sidebarOpen ? (
          <button
            type="button"
            className="toggle-btn"
            onClick={() => dispatch(closeSidebar())}
          >
            <AiOutlineClose />
          </button>
        ) : (
          <button
            type="button"
            className="toggle-btn"
            onClick={() => dispatch(openSidebar())}
          >
            <FaAlignLeft />
          </button>
        )}
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn "
            onClick={() => setShowLogout(!showLogout)}
          >
            {user.name}
          </button>
          <button
            className={showLogout ? "dropdown show" : "dropdown"}
            onClick={() => dispatch(logoutUser())}
          >
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

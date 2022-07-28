import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";
const Wrapper = styled.main`
  display: block;
  height: 100%;
  width: 100%;
  .sidebar {

    background: var(--white);


    height: 100%;

  }

  .sidebar-logo {
    height: var(--nav-height);
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .links-container {
    padding: 1rem 0;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const BigSidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <div className={sidebarOpen ? " sidebar show" : "sidebar"}>
        <div className="sidebar-logo">
          <Logo />
        </div>
        <div className="links-container">
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

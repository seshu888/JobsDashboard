import React from "react";
import styled from "styled-components";
import BigSidebar from "../../components/BigSidebar";
import Navbar from "../../components/Navbar";
import SmallSidebar from "../../components/SmallSidebar";
import { Outlet } from "react-router-dom";
import {} from "react-icons/ai";
import { useSelector } from "react-redux";

const Wrapper = styled.main`
  .dashboard {
    display: grid;
    grid-template-columns:auto 1fr;
    height: 100vh;
    width: 100vw;
  }
  .left {
    width: 200px;
    margin-left: -200px;
    transition: all 0.1s ease;
  }
  .sidebarOpen .left {
    margin-left: 0;
  }
  .right {
    width: calc(100vw);
    position: sticky;
    top: 0;
  }
  .sidebarOpen .right {
    width: calc(100vw - 200px);
  }
  .dashboard-content {
    padding: 2rem;
    height: calc(100vh - var(--nav-height));
    overflow-y: auto;
    background-color: #f8f9fa;
  }
  @media (max-width: 800px) {
    .left {
      display:none;
    };
    .sidebarOpen .right {
      width: calc(100vw);
    }
  }
`;
const SharedLayout = () => {
  const { sidebarOpen } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <div className={sidebarOpen ? "dashboard sidebarOpen" : "dashboard"}>
      <SmallSidebar />
        <div className="left">
         
          <BigSidebar />
        </div>
        <div className="right">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SharedLayout;

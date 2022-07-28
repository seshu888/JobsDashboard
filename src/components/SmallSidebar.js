import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeSidebar } from "../redux/users/userSlice";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
const Wrapper = styled.main`
  @media (min-width: 800px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-200%);
    transition:all 1s ease;
  }
  .sidebar-container.show {
    z-index: 99;
    transform: translateX(0%);
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 90vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    .close-icon {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 2rem;
      color: var(--red-dark);
    }
  }
`;
const SmallSidebar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.user);
  console.log(sidebarOpen);
  return (
    <Wrapper>
      <div
        className={sidebarOpen ? "sidebar-container show" : "sidebar-container"}
      >
        <section className="content">
          <AiOutlineClose
            className="close-icon"
            onClick={() => dispatch(closeSidebar())}
          />
          <Logo/>
          <NavLinks/>
        </section>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;

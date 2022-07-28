import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import links from "../utils/links";
import { closeSidebar } from "../redux/users/userSlice";
const Wrapper = styled.div`
  .nav-links {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    a {
      margin:0.5rem 0;
      color: var(--grey-500);
      padding: 0.3rem 1rem;
      span {
        margin-right: 20px;
      }
    }
  }
  .active {
    background: var(--grey-300);
  }
`;
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="nav-links">
        {links.map((item, index) => (
          <NavLink
            onClick={() => dispatch(closeSidebar())}
            to={item.path}
            key={item.id}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>{item.icon}</span>
            {item.text}
          </NavLink>
        ))}
      </div>
    </Wrapper>
  );
};

export default NavLinks;

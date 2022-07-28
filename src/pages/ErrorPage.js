import React from "react";
import styled from "styled-components";
import notFound from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
text-align:center;
  .not-found-image {
    height: 400px;
  
  }
  h3,
  p {
    margin: 0.5rem 0;
  }
  a {
    color: var(--link-color);
  }
  @media (max-width: 800px) {
    .not-found-image {
      height: 200px;
    }
  }
`;
const ErrorPage = () => {
  return (
    <Wrapper className="full-page container">
      <img src={notFound} className="not-found-image" alt="not-found" />
      <h3>Ohh! Page Not Found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <button className="btn">
        <Link to="/landing">Back to Home</Link>
      </button>
    </Wrapper>
  );
};

export default ErrorPage;

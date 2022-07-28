import React from "react";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import Logo from "../components/Logo";
import {Link} from 'react-router-dom'
const Wrapper = styled.main`
  .page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .info {
      h1 {
        font-size: 3rem;
        padding: 0;
        margin: 0;
        font-weight: 700;
        span {
          color: var(--primary-500);
        }
      }
      p {
        color: var(--grey-600);
      }
      .btn {
        padding: 1rem;
        a{
          color:white;
        }
      }
    }
    .main-image{
        width:90%;
    }
  }

  @media (max-width: 800px) {
    .page {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
    }
  }
`;
const Landing = () => {
  return (
    <Wrapper>
      <nav className="nav">
        <div className="container">
          <Logo/>
        </div>
      </nav>
      <div className="container page">
        <section className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <button className="btn"><Link to="/register">LOGIN/REGISTER</Link></button>
        </section>
        <img src={main} className="main-image" />
      </div>
    </Wrapper>
  );
};

export default Landing;

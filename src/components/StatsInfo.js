import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Widget from "./Widget";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';

const Wrapper = styled.section`

    display:grid;
    grid-template-columns:1fr 1fr 1fr ;
    gap:2rem;
  

    @media (max-width:800px){
      grid-template-columns:1fr  ;
    }
  
`;
const StatsInfo = ({stats}) => {

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item,index) => (
        <Widget item={item} key={index} />
      ))}
    </Wrapper>
  );
};

export default StatsInfo;

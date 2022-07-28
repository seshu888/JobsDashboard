import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  height: 200px;
  background: white;
  color: ${(props) => props.color};
  border-bottom: 4px solid ${(props) => props.color};
  padding: 2rem;
  header {
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
  }
  h3{
    font-size:1.5rem;
    color:black;
  }
`;
const Widget = ({ item }) => {
  return (
    <Wrapper color={item.color} bcg={item.bcg}>
      <header>
        <span className="count">{item.count}</span>
        <span className="icon">{item.icon}</span>
      </header>
      <h3>{item.title}</h3>
    </Wrapper>
  );
};

export default Widget;

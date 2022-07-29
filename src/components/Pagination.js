import React, { useEffect, useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllJobs } from "../redux/jobs/jobSlice";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  .btn {
    padding: 0.8rem 1.3rem;
  }
  .btn.active {
    background: white;
    color: black;
  }
  .next-btn,
  .prev-btn {
    background: var(--white);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    color: blue;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    .icon {
      paddin: 0 0.2rem;
    }
  }
  .page-buttons {
    display: flex;
    align-items: center;
  }
`;
const Pagination = ({ pageObj ,handlePage}) => {

    const dispatch = useDispatch()
  console.log(pageObj.numOfPages);
  const [obj, setObj] = useState(pageObj);
  const [pageNumber, setPageNumber] = useState(1);

  let array = [];
  for (let i = 1; i <= pageObj.numOfPages; i++) {
    array.push(i);
  }
  const prevPage = () => {
    setPageNumber(pageNumber - 1 < 1 ? pageObj.numOfPages : pageNumber - 1);
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1 > pageObj.numOfPages ? 1 : pageNumber + 1);
  };
  useEffect(()=>{
    handlePage(pageNumber)
  },[pageNumber])
  return (
    <Wrapper className="margin-top">
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="page-buttons">
        {array.map((item, index) => (
          <div key={index}>
            <button
              className={pageNumber === item ? "btn active" : "btn"}
              onClick={() => setPageNumber(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight className="icon" />
      </button>
    </Wrapper>
  );
};

export default Pagination;

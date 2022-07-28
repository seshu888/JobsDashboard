import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deletelJob } from "../redux/jobs/jobSlice";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.article`
  width: 100%;
  height: 250px;
  background: var(--white);
  border-radius: 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
  header {
    border-bottom: 1px solid grey;
    display: flex;
    align-items: center;
    .first-letter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      margin: 1rem;
      background: blue;
      color: white;
      font-size: 1.3rem;
    }
    h5,
    p {
      margin: 0;
      padding: 0rem;
    }
  }
  .job-card-body {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5rem;
    p {
      margin: 0;
      padding: 0.3rem;
    }
  }
  .btn-edit {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
`;

const JobCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEditNavigation = (item) => {
    navigate("/add-job", {
      state: {
        item: { ...item, isEditing: true }
      },
    });
  };
  return (
    <Wrapper>
      <header>
        <div className="first-letter">{item.company.slice(0, 1)}</div>
        <div>
          <h5>{item.position}</h5>
          <h5>{item.company}</h5>
        </div>
      </header>
      <div className="job-card-body">
        <p>{item.jobLocation}</p>
        <p>{item.createdAt.slice(0, 10)}</p>
        <p>{item.jobType}</p>
        <div>
          <button className={`btn ${item.status}`}>{item.status}</button>
        </div>
        <div>
          <button
            className="btn btn-edit"
            onClick={() => handleEditNavigation(item)}
          >
            Edit
          </button>
          <button
            className="btn delete-btn "
            onClick={() => dispatch(deletelJob(item._id))}
          >
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JobCard;

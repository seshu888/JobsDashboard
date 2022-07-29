import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

import Input from "./Input";
import Select from "./Select";
const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background: var(--white);
  padding: 2rem;
  .form-center {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .btn {
    height: max-content;
    margin-top: 35px;
  }
  @media (max-width: 800px) {
    margin-top: 40px;
    .form-center {
      grid-template-columns: 1fr;
    }
  }
`;

const Filters = ({ handleFilters }) => {
  const location = useLocation();
  const jobTypeOptions = ["all","full-time", "part-time", "remote", "internship"];
  const statusOptions = ["all","interview", "declined", "pending"];

  const dispatch = useDispatch();
  let obj = {
    searchText: "",
    jobType: "all",
    status: "all",
  };
  const [job, setJob] = useState(obj);
  const handleSubmit = (e) => {
    e.preventDefault();
    setJob(obj);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setJob({ ...job, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    handleFilters(job);
  }, [job]);

  return (
    <Wrapper>
      <form>
        {job.isEditing ? <h3>Edit Job</h3> : <h3>Add Job</h3>}
        <div className="form-center">
          <Input
            type="text"
            name="searchText"
            labelText=""
            value={job.searchText}
            handleChange={handleChange}
          />

          <Select
            name="status"
            labelText="Status"
            value={job.status}
            handleChange={handleChange}
            options={statusOptions}
          />
          <Select
            name="jobType"
            labelText="job type"
            value={job.jobType}
            handleChange={handleChange}
            options={jobTypeOptions}
          />
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Filters;

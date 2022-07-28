import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { addJob, editJob } from "../../redux/jobs/jobSlice";
import { updateUser } from "../../redux/users/userSlice";
import { useLocation } from "react-router-dom";
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

const AddJob = () => {
  const location = useLocation();
  const jobTypeOptions = ["full-time", "part-time", "remote", "internship"];
  const statusOptions = ["interview", "declined", "pending"];

  const dispatch = useDispatch();
  let obj = {
    position: "",
    company: "",
    jobLocation: "",
    jobType: "full-time",
    status: "pending",
    isEditing: false,
  };
  const [job, setJob] = useState(
    location.state.item ? location.state.item : obj
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if(job.isEditing){

      dispatch(editJob(job))
    }
    else{
    dispatch(addJob(job));
    }

    setJob(obj);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <form>
        {job.isEditing ? <h3>Edit Job</h3> : <h3>Add Job</h3>}
        <div className="form-center">
          <Input
            type="text"
            name="position"
            labelText="Position"
            value={job.position}
            handleChange={handleChange}
          />
          <Input
            type="text"
            labelText="Company"
            name="company"
            value={job.company}
            handleChange={handleChange}
          />

          <Input
            type="text"
            name="jobLocation"
            labelText="job location"
            value={job.jobLocation}
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
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;

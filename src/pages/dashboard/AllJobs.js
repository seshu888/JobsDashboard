import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AllJobsCards from "../../components/AllJobsCards";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../../redux/jobs/jobSlice";
import Pagination from "../../components/Pagination";
import Filters from "../../components/Filters";
const Wrapper = styled.main``;
const AllJobs = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    
    jobType: "all",
    status: "all",
    pageNumber: 1,
  });
  const { allJobs,allJobsLoading } = useSelector((state) => state.jobs);
  console.log(allJobs);
  useEffect(() => {
    dispatch(getAllJobs(filters));
  }, [filters]);
  const handlePage = (pageNumber) => {
    setFilters({ ...filters, page: pageNumber });
  };
  const handleFilters=(obj)=>{
    setFilters({...filters,...obj})
  }
  if(!allJobs && allJobsLoading){
    return <div className="loaderContainer page">
      <div className="loader">
      </div>
    </div>
  }
  return (
    <Wrapper>

    {allJobs && <Filters handleFilters={handleFilters}/> }
    {allJobs &&  allJobs.jobs.length<1 && <h3>Not found jobs</h3>}
      {allJobs && allJobs.jobs.length > 0 && (
        <AllJobsCards jobs={allJobs.jobs} handleFitlers={handleFilters} />
      )}
      {allJobs &&  allJobs.jobs.length>0 && (
        <Pagination
          pageObj={{
            numOfPages: allJobs.numOfPages,
            totalJobs: allJobs.totalJobs,
          }}
          handlePage={handlePage}
        />
      )}
    </Wrapper>
  );
};

export default AllJobs;

import React,{useEffect} from "react";
import styled from "styled-components";
import AllJobsCards from "../../components/AllJobsCards";
import { useSelector,useDispatch } from "react-redux";
import { getAllJobs } from "../../redux/jobs/jobSlice";
const Wrapper = styled.main``;
const AllJobs = () => {
  const dispatch = useDispatch();
  const {allJobs} = useSelector(state=>state.jobs)

  useEffect(()=>{

    dispatch(getAllJobs())
  },[])
  return <Wrapper>
      {allJobs && allJobs.jobs.length>0 &&  <AllJobsCards jobs={allJobs.jobs}/>}
  </Wrapper>;
};

export default AllJobs;

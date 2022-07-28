import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StatsCharts from "../../components/StatsCharts";
import { getAllJobsStats } from "../../redux/jobs/jobSlice";
import StatsInfo from "../../components/StatsInfo";
import styled from "styled-components";


const Wrapper= styled.main`
 
    width:100%;
  `
const Stats = () => {
  const dispatch = useDispatch();
  const { allJobsStats } = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(getAllJobsStats());
  }, []);
  console.log(allJobsStats);
  return (
    <Wrapper>
      {allJobsStats && (
        <StatsInfo stats={allJobsStats && allJobsStats.defaultStats} />
      )}
      {allJobsStats && <StatsCharts data={allJobsStats && allJobsStats.monthlyApplications} />}
    </Wrapper>
  );
};

export default Stats;

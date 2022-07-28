import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllJobs } from '../redux/jobs/jobSlice'
import JobCard from './JobCard'

const Wrapper =  styled.main`
  .allJobsCards{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:2rem;
    column-gap:2rem;
  }
  @media (max-width:992px){
    .allJobsCards{
      display:grid;
      grid-template-columns:1fr 1fr ;
    }
  }
  @media (max-width:650px){
    .allJobsCards{
      display:grid;
      grid-template-columns:1fr  ;
    }
  }

`

const AllJobsCards = ({jobs}) => {

 
  return (
    <Wrapper>
      <div className='allJobsCards'>
      {jobs.map((item,index)=> <JobCard item={item} key={index} />  )}
      </div>
    
    </Wrapper>
  )
}

export default AllJobsCards
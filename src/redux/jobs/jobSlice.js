import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customApi } from "../../utils/axios";

const initialState = {
  isLoading: false,
  allJobsStats: null,
  allJobsStatsLoading: false,
  allJobs: null,
  allJobsLoading: false,
};

export const addJob = createAsyncThunk("addJob", async (data, thunkAPI) => {
  try {
    let res = await customApi.post("/jobs", data);
    return res.data;
  } catch (error) {}
});
export const getAllJobsStats = createAsyncThunk(
  "getAllJobsStats",
  async (thunkAPI) => {
    try {
      let res = await customApi.get("/jobs/stats");
      return res.data;
    } catch (error) {}
  }
);
export const getAllJobs = createAsyncThunk("getAllJobs", async (data,thunkAPI) => {
  
  try {
    let res = await customApi.get(`/jobs?status=${data.status}&jobType=${data.jobType}&page=${data.page}&search=${data.searchText}`);
    return res.data;
  } catch (error) {}
});
export const deletelJob = createAsyncThunk(
  "deletelJob",
  async (jobId, thunkAPI) => {
    try {
      let res = await customApi.delete(`/jobs/${jobId}`);
      thunkAPI.dispatch(getAllJobs());
      return res.data;
    } catch (error) {}
  }
);
export const editJob = createAsyncThunk(
  "editJob",
  async (job, thunkAPI) => {
    try {
      let res = await customApi.patch(`/jobs/${job._id}`,job);
     
      return res.data;
    } catch (error) {}
  }
)


const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [addJob.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllJobsStats.pending]: (state) => {
      state.allJobsStatsLoading = true;
    },
    [getAllJobsStats.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.allJobsStatsLoading = false;
      state.allJobsStats = payload;
    },
    [getAllJobsStats.rejected]: (state) => {
      state.allJobsStatsLoading = false;
    },
    [getAllJobs.pending]: (state) => {
      state.allJobsLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.allJobsLoading = false;
      state.allJobs = payload;
    },
    [getAllJobs.rejected]: (state) => {
      state.allJobsLoading = false;
    },
    [deletelJob.pending]: (state) => {
      state.allJobsLoading = true;
    },
    [deletelJob.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.allJobsLoading = false;
    },
    [deletelJob.rejected]: (state) => {
      state.allJobsLoading = false;
    },
    [editJob.pending]: (state) => {
      state.allJobsLoading = true;
    },
    [editJob.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.allJobsLoading = false;
    },
    [editJob.rejected]: (state) => {
      state.allJobsLoading = false;
    },
  },
});
export default jobSlice.reducer;
export const {} = jobSlice.actions;

import axios from "axios";
import { getUserFromLocalStorage } from "./locatStorage";


export const customApi = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
})
customApi.interceptors.request.use((config) => {
    const user = getUserFromLocalStorage();
    if (user) {
      config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  });
  
  export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
    //   thunkAPI.dispatch(clearStore());
    //   return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  };
  
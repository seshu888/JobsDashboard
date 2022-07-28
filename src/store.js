import { configureStore } from '@reduxjs/toolkit'
import jobSlice from './redux/jobs/jobSlice'
import toastSlice from './redux/toast/toastSlice'
import userSlice from './redux/users/userSlice'


export const store = configureStore({
    reducer:{
        user:userSlice,
        toast:toastSlice,
        jobs:jobSlice
    }
})
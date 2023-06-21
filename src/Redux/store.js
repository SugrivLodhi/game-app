import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from './slice/formDataSlice'
import timerReducer from './slice/timerSlice'
export const store = configureStore({
  reducer: {
    formData :formDataReducer ,
    timer : timerReducer 
  },
})
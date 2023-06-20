import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from './slice/slice'

export const store = configureStore({
  reducer: {
    formData :formDataReducer 
  },
})
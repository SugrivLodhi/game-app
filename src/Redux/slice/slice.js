import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  photo: '',
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: (state) => initialState,
  },
});
export const { updateField, resetForm } = formDataSlice.actions;
export default formDataSlice.reducer;
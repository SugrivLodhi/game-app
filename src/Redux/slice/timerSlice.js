import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    time: 0
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        updateTime: (state, action) => {
            const { time, value } = action.payload;
            state[time] = value;
        },
    },
});
export const { updateTime } = timerSlice.actions;
export default timerSlice.reducer;
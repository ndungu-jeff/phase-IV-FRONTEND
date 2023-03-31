import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: "client",
    initialState: {
        currentClientDetail: null
    },
    reducers: {
        setCurrentClientDetail: (state, action) => {
            const { currentClientDetail } = action.payload;
            state.currentClientDetail = currentClientDetail;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentClientDetail,
} = clientSlice.actions;

export const selectCurrentClientDetail = (state) =>
  state?.client?.currentClientDetail;
export default clientSlice.reducer;
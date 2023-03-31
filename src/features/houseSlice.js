import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
    name: "house",
    initialState: {
        currentHouseDetail: 2
    },
    reducers: {
        setCurrentHouseDetail: (state, action) => {
            const { currentHouseDetail } = action.payload;
            state.currentHouseDetail = currentHouseDetail;
        },
    },
    // extraReducers: {},
});

export const {
    setCurrentHouseDetail,
} = houseSlice.actions;

export const selectCurrentHouseDetail = (state) =>
  state?.house?.currentHouseDetail;
export default houseSlice.reducer;
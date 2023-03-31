import { createSlice } from "@reduxjs/toolkit";

const ownerSlice = createSlice({
    name: "owner",
    initialState: {
        currentOwnerDetail: null
    },
    reducers: {
        setCurrentOwnerDetail: (state, action) => {
            const { currentOwnerDetail } = action.payload;
            state.currentOwnerDetail = currentOwnerDetail;
        },
    },
});

export const {
    setCurrentOwnerDetail,
} = ownerSlice.actions;

export const selectCurrentOwnerDetail = (state) =>
  state?.owner?.currentOwnerDetail;
export default ownerSlice.reducer;
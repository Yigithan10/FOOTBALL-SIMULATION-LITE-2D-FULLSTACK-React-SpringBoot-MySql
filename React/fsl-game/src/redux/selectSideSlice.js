import { createSlice } from "@reduxjs/toolkit";

export const selectSideValue = createSlice({
    name: "selectSideValue",
    initialState: {
        homeSideValue: false,
        awaySideValue: false
    },
    reducers: {
        setHomeSideValue: state => {
            state.homeSideValue = true
            state.awaySideValue = false
        },
        setAwaySideValue: state => {
            state.awaySideValue = true
            state.homeSideValue = false
        }
    }
})

export const { setHomeSideValue, setAwaySideValue } = selectSideValue.actions;
export default selectSideValue.reducer
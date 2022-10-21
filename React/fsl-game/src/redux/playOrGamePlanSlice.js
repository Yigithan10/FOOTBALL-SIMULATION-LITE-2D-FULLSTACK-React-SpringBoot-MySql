import { createSlice} from "@reduxjs/toolkit";

export const PlayOrGameplan = createSlice({
    name: "PlayOrGameplan",
    initialState: ({
        playOrGameplanFormationValue: 1
    }),
    reducers:{
        setPlayOrGameplanFormationGet1: state => {state.playOrGameplanFormationValue = 1},
        setPlayOrGameplanFormationGet2: state => {state.playOrGameplanFormationValue = 2},
        setPlayOrGameplanFormationGet3: state => {state.playOrGameplanFormationValue = 3},
        setPlayOrGameplanFormationGet4: state => {state.playOrGameplanFormationValue = 4}
    }
})

export const { setPlayOrGameplanFormationGet1, setPlayOrGameplanFormationGet2, setPlayOrGameplanFormationGet3, setPlayOrGameplanFormationGet4} = PlayOrGameplan.actions
export default PlayOrGameplan.reducer
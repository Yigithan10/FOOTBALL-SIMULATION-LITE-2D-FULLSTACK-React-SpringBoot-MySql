import { createSlice } from "@reduxjs/toolkit";
import Strategy from "../components/Strategy";
import Leagues from '../leagues.json'

export const strategyValue = createSlice({
    name: "strategyValue",
    initialState: {
        strategyTacticsButtonValue: 1,

        strategyUnderstandDefenceButtonValue: 1,

        strategyUnderstandPassButtonValue: 1,
        
        strategyUnderstandShootButtonValue: 1,

        strategyUnderstandOffsideButtonValue: 1,

        strategyHomeScrollCaptainPlayerValue: 1,

        strategyHomeScrollPenPlayerValue: 11,

        strategyHomeScrollFreekickPlayerValue: 11,

        strategyAwayScrollCaptainPlayerValue: 1,

        strategyAwayScrollPenPlayerValue: 11,

        strategyAwayScrollFreekickPlayerValue: 11
    },
    reducers: {
        strategyTacticsButtonValue_1: state => {state.strategyTacticsButtonValue = 1},
        strategyTacticsButtonValue_2: state => {state.strategyTacticsButtonValue = 2},
        strategyTacticsButtonValue_3: state => {state.strategyTacticsButtonValue = 3},
        strategyTacticsButtonValue_4: state => {state.strategyTacticsButtonValue = 4},
        strategyTacticsButtonValue_5: state => {state.strategyTacticsButtonValue = 5},

        strategyUnderstandDefenceButtonValue_1: state => {state.strategyUnderstandDefenceButtonValue = 1},
        strategyUnderstandDefenceButtonValue_2: state => {state.strategyUnderstandDefenceButtonValue = 2},

        strategyUnderstandPassButtonValue_1: state => {state.strategyUnderstandPassButtonValue = 1},
        strategyUnderstandPassButtonValue_2: state => {state.strategyUnderstandPassButtonValue = 2},

        strategyUnderstandShootButtonValue_1: state => {state.strategyUnderstandShootButtonValue = 1},
        strategyUnderstandShootButtonValue_2: state => {state.strategyUnderstandShootButtonValue = 2},

        strategyUnderstandOffsideButtonValue_1: state => {state.strategyUnderstandOffsideButtonValue = 1},
        strategyUnderstandOffsideButtonValue_2: state => {state.strategyUnderstandOffsideButtonValue = 2},

        strategyHomeScrollCaptainPlayerValue_1: state => {state.strategyHomeScrollCaptainPlayerValue = 1},
        strategyHomeScrollCaptainPlayerValue_2: state => {state.strategyHomeScrollCaptainPlayerValue = 2},
        strategyHomeScrollCaptainPlayerValue_3: state => {state.strategyHomeScrollCaptainPlayerValue = 3},
        strategyHomeScrollCaptainPlayerValue_4: state => {state.strategyHomeScrollCaptainPlayerValue = 4},
        strategyHomeScrollCaptainPlayerValue_5: state => {state.strategyHomeScrollCaptainPlayerValue = 5},
        strategyHomeScrollCaptainPlayerValue_6: state => {state.strategyHomeScrollCaptainPlayerValue = 6},
        strategyHomeScrollCaptainPlayerValue_7: state => {state.strategyHomeScrollCaptainPlayerValue = 7},
        strategyHomeScrollCaptainPlayerValue_8: state => {state.strategyHomeScrollCaptainPlayerValue = 8},
        strategyHomeScrollCaptainPlayerValue_9: state => {state.strategyHomeScrollCaptainPlayerValue = 9},
        strategyHomeScrollCaptainPlayerValue_10: state => {state.strategyHomeScrollCaptainPlayerValue = 10},
        strategyHomeScrollCaptainPlayerValue_11: state => {state.strategyHomeScrollCaptainPlayerValue = 11},

        strategyAwayScrollCaptainPlayerValue_1: state => {state.strategyAwayScrollCaptainPlayerValue = 1},
        strategyAwayScrollCaptainPlayerValue_2: state => {state.strategyAwayScrollCaptainPlayerValue = 2},
        strategyAwayScrollCaptainPlayerValue_3: state => {state.strategyAwayScrollCaptainPlayerValue = 3},
        strategyAwayScrollCaptainPlayerValue_4: state => {state.strategyAwayScrollCaptainPlayerValue = 4},
        strategyAwayScrollCaptainPlayerValue_5: state => {state.strategyAwayScrollCaptainPlayerValue = 5},
        strategyAwayScrollCaptainPlayerValue_6: state => {state.strategyAwayScrollCaptainPlayerValue = 6},
        strategyAwayScrollCaptainPlayerValue_7: state => {state.strategyAwayScrollCaptainPlayerValue = 7},
        strategyAwayScrollCaptainPlayerValue_8: state => {state.strategyAwayScrollCaptainPlayerValue = 8},
        strategyAwayScrollCaptainPlayerValue_9: state => {state.strategyAwayScrollCaptainPlayerValue = 9},
        strategyAwayScrollCaptainPlayerValue_10: state => {state.strategyAwayScrollCaptainPlayerValue = 10},
        strategyAwayScrollCaptainPlayerValue_11: state => {state.strategyAwayScrollCaptainPlayerValue = 11},
        



        strategyHomeScrollPenPlayerValue_1: state => {state.strategyHomeScrollPenPlayerValue = 1},
        strategyHomeScrollPenPlayerValue_2: state => {state.strategyHomeScrollPenPlayerValue = 2},
        strategyHomeScrollPenPlayerValue_3: state => {state.strategyHomeScrollPenPlayerValue = 3},
        strategyHomeScrollPenPlayerValue_4: state => {state.strategyHomeScrollPenPlayerValue = 4},
        strategyHomeScrollPenPlayerValue_5: state => {state.strategyHomeScrollPenPlayerValue = 5},
        strategyHomeScrollPenPlayerValue_6: state => {state.strategyHomeScrollPenPlayerValue = 6},
        strategyHomeScrollPenPlayerValue_7: state => {state.strategyHomeScrollPenPlayerValue = 7},
        strategyHomeScrollPenPlayerValue_8: state => {state.strategyHomeScrollPenPlayerValue = 8},
        strategyHomeScrollPenPlayerValue_9: state => {state.strategyHomeScrollPenPlayerValue = 9},
        strategyHomeScrollPenPlayerValue_10: state => {state.strategyHomeScrollPenPlayerValue = 10},
        strategyHomeScrollPenPlayerValue_11: state => {state.strategyHomeScrollPenPlayerValue = 11},

        strategyAwayScrollPenPlayerValue_1: state => {state.strategyAwayScrollPenPlayerValue = 1},
        strategyAwayScrollPenPlayerValue_2: state => {state.strategyAwayScrollPenPlayerValue = 2},
        strategyAwayScrollPenPlayerValue_3: state => {state.strategyAwayScrollPenPlayerValue = 3},
        strategyAwayScrollPenPlayerValue_4: state => {state.strategyAwayScrollPenPlayerValue = 4},
        strategyAwayScrollPenPlayerValue_5: state => {state.strategyAwayScrollPenPlayerValue = 5},
        strategyAwayScrollPenPlayerValue_6: state => {state.strategyAwayScrollPenPlayerValue = 6},
        strategyAwayScrollPenPlayerValue_7: state => {state.strategyAwayScrollPenPlayerValue = 7},
        strategyAwayScrollPenPlayerValue_8: state => {state.strategyAwayScrollPenPlayerValue = 8},
        strategyAwayScrollPenPlayerValue_9: state => {state.strategyAwayScrollPenPlayerValue = 9},
        strategyAwayScrollPenPlayerValue_10: state => {state.strategyAwayScrollPenPlayerValue = 10},
        strategyAwayScrollPenPlayerValue_11: state => {state.strategyAwayScrollPenPlayerValue = 11},






        strategyHomeScrollFreekickPlayerValue_1: state => {state.strategyHomeScrollFreekickPlayerValue = 1},
        strategyHomeScrollFreekickPlayerValue_2: state => {state.strategyHomeScrollFreekickPlayerValue = 2},
        strategyHomeScrollFreekickPlayerValue_3: state => {state.strategyHomeScrollFreekickPlayerValue = 3},
        strategyHomeScrollFreekickPlayerValue_4: state => {state.strategyHomeScrollFreekickPlayerValue = 4},
        strategyHomeScrollFreekickPlayerValue_5: state => {state.strategyHomeScrollFreekickPlayerValue = 5},
        strategyHomeScrollFreekickPlayerValue_6: state => {state.strategyHomeScrollFreekickPlayerValue = 6},
        strategyHomeScrollFreekickPlayerValue_7: state => {state.strategyHomeScrollFreekickPlayerValue = 7},
        strategyHomeScrollFreekickPlayerValue_8: state => {state.strategyHomeScrollFreekickPlayerValue = 8},
        strategyHomeScrollFreekickPlayerValue_9: state => {state.strategyHomeScrollFreekickPlayerValue = 9},
        strategyHomeScrollFreekickPlayerValue_10: state => {state.strategyHomeScrollFreekickPlayerValue = 10},
        strategyHomeScrollFreekickPlayerValue_11: state => {state.strategyHomeScrollFreekickPlayerValue = 11},

        strategyAwayScrollFreekickPlayerValue_1: state => {state.strategyAwayScrollFreekickPlayerValue = 1},
        strategyAwayScrollFreekickPlayerValue_2: state => {state.strategyAwayScrollFreekickPlayerValue = 2},
        strategyAwayScrollFreekickPlayerValue_3: state => {state.strategyAwayScrollFreekickPlayerValue = 3},
        strategyAwayScrollFreekickPlayerValue_4: state => {state.strategyAwayScrollFreekickPlayerValue = 4},
        strategyAwayScrollFreekickPlayerValue_5: state => {state.strategyAwayScrollFreekickPlayerValue = 5},
        strategyAwayScrollFreekickPlayerValue_6: state => {state.strategyAwayScrollFreekickPlayerValue = 6},
        strategyAwayScrollFreekickPlayerValue_7: state => {state.strategyAwayScrollFreekickPlayerValue = 7},
        strategyAwayScrollFreekickPlayerValue_8: state => {state.strategyAwayScrollFreekickPlayerValue = 8},
        strategyAwayScrollFreekickPlayerValue_9: state => {state.strategyAwayScrollFreekickPlayerValue = 9},
        strategyAwayScrollFreekickPlayerValue_10: state => {state.strategyAwayScrollFreekickPlayerValue = 10},
        strategyAwayScrollFreekickPlayerValue_11: state => {state.strategyAwayScrollFreekickPlayerValue = 11}
    } 
})

export const { strategyTacticsButtonValue_1, strategyTacticsButtonValue_2, 
    strategyTacticsButtonValue_3, strategyTacticsButtonValue_4, strategyTacticsButtonValue_5, 
    strategyUnderstandDefenceButtonValue_1, strategyUnderstandDefenceButtonValue_2, 
    strategyUnderstandPassButtonValue_1, strategyUnderstandPassButtonValue_2,
    strategyUnderstandShootButtonValue_1, strategyUnderstandShootButtonValue_2, 
    strategyUnderstandOffsideButtonValue_1, strategyUnderstandOffsideButtonValue_2, 
    strategyHomeScrollCaptainPlayerValue_1, strategyHomeScrollCaptainPlayerValue_2, strategyHomeScrollCaptainPlayerValue_3, 
    strategyHomeScrollCaptainPlayerValue_4, strategyHomeScrollCaptainPlayerValue_5, strategyHomeScrollCaptainPlayerValue_6,
    strategyHomeScrollCaptainPlayerValue_7, strategyHomeScrollCaptainPlayerValue_8, strategyHomeScrollCaptainPlayerValue_9,
    strategyHomeScrollCaptainPlayerValue_10, strategyHomeScrollCaptainPlayerValue_11, 
    strategyAwayScrollCaptainPlayerValue_1, strategyAwayScrollCaptainPlayerValue_2, strategyAwayScrollCaptainPlayerValue_3, 
    strategyAwayScrollCaptainPlayerValue_4, strategyAwayScrollCaptainPlayerValue_5, strategyAwayScrollCaptainPlayerValue_6,
    strategyAwayScrollCaptainPlayerValue_7, strategyAwayScrollCaptainPlayerValue_8, strategyAwayScrollCaptainPlayerValue_9,
    strategyAwayScrollCaptainPlayerValue_10, strategyAwayScrollCaptainPlayerValue_11, 
    strategyHomeScrollPenPlayerValue_1, strategyHomeScrollPenPlayerValue_2, strategyHomeScrollPenPlayerValue_3, 
    strategyHomeScrollPenPlayerValue_4, strategyHomeScrollPenPlayerValue_5, strategyHomeScrollPenPlayerValue_6, 
    strategyHomeScrollPenPlayerValue_7, strategyHomeScrollPenPlayerValue_8, strategyHomeScrollPenPlayerValue_9, 
    strategyHomeScrollPenPlayerValue_10, strategyHomeScrollPenPlayerValue_11, 
    strategyAwayScrollPenPlayerValue_1, strategyAwayScrollPenPlayerValue_2, strategyAwayScrollPenPlayerValue_3, 
    strategyAwayScrollPenPlayerValue_4, strategyAwayScrollPenPlayerValue_5, strategyAwayScrollPenPlayerValue_6, 
    strategyAwayScrollPenPlayerValue_7, strategyAwayScrollPenPlayerValue_8, strategyAwayScrollPenPlayerValue_9, 
    strategyAwayScrollPenPlayerValue_10, strategyAwayScrollPenPlayerValue_11, 
    strategyHomeScrollFreekickPlayerValue_1, strategyHomeScrollFreekickPlayerValue_2, strategyHomeScrollFreekickPlayerValue_3, 
    strategyHomeScrollFreekickPlayerValue_4, strategyHomeScrollFreekickPlayerValue_5, strategyHomeScrollFreekickPlayerValue_6, 
    strategyHomeScrollFreekickPlayerValue_7, strategyHomeScrollFreekickPlayerValue_8, strategyHomeScrollFreekickPlayerValue_9, 
    strategyHomeScrollFreekickPlayerValue_10, strategyHomeScrollFreekickPlayerValue_11, 
    strategyAwayScrollFreekickPlayerValue_1, strategyAwayScrollFreekickPlayerValue_2, strategyAwayScrollFreekickPlayerValue_3, 
    strategyAwayScrollFreekickPlayerValue_4, strategyAwayScrollFreekickPlayerValue_5, strategyAwayScrollFreekickPlayerValue_6, 
    strategyAwayScrollFreekickPlayerValue_7, strategyAwayScrollFreekickPlayerValue_8, strategyAwayScrollFreekickPlayerValue_9, 
    strategyAwayScrollFreekickPlayerValue_10, strategyAwayScrollFreekickPlayerValue_11 } = strategyValue.actions
export default strategyValue.reducer
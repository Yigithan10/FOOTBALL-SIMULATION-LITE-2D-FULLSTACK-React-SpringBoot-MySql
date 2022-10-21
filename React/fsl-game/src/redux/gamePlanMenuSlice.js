import { createSlice } from "@reduxjs/toolkit";
import Leagues from '../leagues.json'
import leagueSlice from "./leagueSlice";
import teamSelectSlice from "./teamSelectSlice";
import { useSelector, useDispatch} from 'react-redux'

export const gamePlanMenuValue = createSlice({
    name: 'gamePlanMenuValue',
    initialState: {
        formationValue: 1,

        homeTeam_gk1: 0,
        homeTeam_lb1: 1,
        homeTeam_cb1: 2,
        homeTeam_cb2: 3,
        homeTeam_rb1: 4,
        homeTeam_dm1: 5,
        homeTeam_cm1: 6,
        homeTeam_cm2: 7,
        homeTeam_lw1: 8,
        homeTeam_rw1: 9,
        homeTeam_st1: 10,

        homeTeamSaveValue_gk1: 0,
        homeTeamSaveValue_lb1: 1,
        homeTeamSaveValue_cb1: 2,
        homeTeamSaveValue_cb2: 3,
        homeTeamSaveValue_rb1: 4,
        homeTeamSaveValue_dm1: 5,
        homeTeamSaveValue_cm1: 6,
        homeTeamSaveValue_cm2: 7,
        homeTeamSaveValue_lw1: 8,
        homeTeamSaveValue_rw1: 9,
        homeTeamSaveValue_st1: 10,

        homeTeam_lw2_click: false,
        homeTeam_lw3_click: false,
        homeTeam_lw4_click: false,

        homeTeam_rw2_click: false,
        homeTeam_rw3_click: false,
        homeTeam_rw4_click: false,

        homeTeam_st2_click: false,
        homeTeam_st3_click: false,
        homeTeam_st4_click: false,

        awayTeam_gk2: 0,
        awayTeam_lb2: 1,
        awayTeam_cb4: 2,
        awayTeam_cb3: 3,
        awayTeam_rb2: 4,
        awayTeam_dm2: 5,
        awayTeam_cm4: 6,
        awayTeam_cm3: 7,
        awayTeam_lw2: 8,
        awayTeam_rw2: 9,
        awayTeam_st2: 10,

        awayTeamSaveValue_gk2: 0,
        awayTeamSaveValue_lb2: 1,
        awayTeamSaveValue_cb4: 2,
        awayTeamSaveValue_cb3: 3,
        awayTeamSaveValue_rb2: 4,
        awayTeamSaveValue_dm2: 5,
        awayTeamSaveValue_cm4: 6,
        awayTeamSaveValue_cm3: 7,
        awayTeamSaveValue_lw2: 8,
        awayTeamSaveValue_rw2: 9,
        awayTeamSaveValue_st2: 10,

        awayTeam_lw2_click: false,
        awayTeam_lw3_click: false,
        awayTeam_lw4_click: false,

        awayTeam_rw2_click: false,
        awayTeam_rw3_click: false,
        awayTeam_rw4_click: false,

        awayTeam_st2_click: false,
        awayTeam_st3_click: false,
        awayTeam_st4_click: false,

        samePlayerValueId: false,

        subPlayerVisible1: false,
        subPlayerVisible2: false,
        subPlayerVisible3: false,
        subPlayerVisible4: false,
        subPlayerVisible5: false,
        subPlayerVisible6: false,
        subPlayerVisible7: false,
        subPlayerVisible8: false,
        subPlayerVisible9: false,
        subPlayerVisible10: false,
        subPlayerVisible11: false,
        subPlayerVisible12: false,
        subPlayerVisible13: false,
        subPlayerVisible14: false,
        subPlayerVisible15: false,
        subPlayerVisible16: false,
        subPlayerVisible17: false,
        subPlayerVisible18: false,
        subPlayerVisible19: false,
        subPlayerVisible20: false,
        subPlayerVisible21: false,
        subPlayerVisible22: false,
        subPlayerVisible23: false,
        subPlayerVisible24: false,
        subPlayerVisible25: false,
        subPlayerVisible26: false,
        subPlayerVisible27: false,
        subPlayerVisible28: false,
        subPlayerVisible29: false,
        subPlayerVisible30: false,
        subPlayerVisible31: false,
        subPlayerVisible32: false,
        subPlayerVisible33: false,
        subPlayerVisible34: false,
        subPlayerVisible35: false,
        subPlayerVisible36: false,
        subPlayerVisible37: false,
        subPlayerVisible38: false,
    },
    reducers:{
        setSamePlayerValueId_t: state => {state.samePlayerValueId = true},
        setSamePlayerValueId_f: state => {state.samePlayerValueId = false},

        setSubPlayerVisible1_t: state => {state.subPlayerVisible1 = true},
        setSubPlayerVisible1_f: state => {state.subPlayerVisible1 = false},

        setSubPlayerVisible2_t: state => {state.subPlayerVisible2 = true},
        setSubPlayerVisible2_f: state => {state.subPlayerVisible2 = false},

        setSubPlayerVisible3_t: state => {state.subPlayerVisible3 = true},
        setSubPlayerVisible3_f: state => {state.subPlayerVisible3 = false},

        setSubPlayerVisible4_t: state => {state.subPlayerVisible4 = true},
        setSubPlayerVisible4_f: state => {state.subPlayerVisible4 = false},

        setSubPlayerVisible5_t: state => {state.subPlayerVisible5 = true},
        setSubPlayerVisible5_f: state => {state.subPlayerVisible5 = false},

        setSubPlayerVisible6_t: state => {state.subPlayerVisible6 = true},
        setSubPlayerVisible6_f: state => {state.subPlayerVisible6 = false},

        setSubPlayerVisible7_t: state => {state.subPlayerVisible7 = true},
        setSubPlayerVisible7_f: state => {state.subPlayerVisible7 = false},

        setSubPlayerVisible8_t: state => {state.subPlayerVisible8 = true},
        setSubPlayerVisible8_f: state => {state.subPlayerVisible8 = false},

        setSubPlayerVisible9_t: state => {state.subPlayerVisible9 = true},
        setSubPlayerVisible9_f: state => {state.subPlayerVisible9 = false},

        setSubPlayerVisible10_t: state => {state.subPlayerVisible10 = true},
        setSubPlayerVisible10_f: state => {state.subPlayerVisible10 = false},

        setSubPlayerVisible11_t: state => {state.subPlayerVisible11 = true},
        setSubPlayerVisible11_f: state => {state.subPlayerVisible11 = false},

        setSubPlayerVisible12_t: state => {state.subPlayerVisible12 = true},
        setSubPlayerVisible12_f: state => {state.subPlayerVisible12 = false},

        setSubPlayerVisible13_t: state => {state.subPlayerVisible13 = true},
        setSubPlayerVisible13_f: state => {state.subPlayerVisible13 = false},

        setSubPlayerVisible14_t: state => {state.subPlayerVisible14 = true},
        setSubPlayerVisible14_f: state => {state.subPlayerVisible14 = false},

        setSubPlayerVisible15_t: state => {state.subPlayerVisible15 = true},
        setSubPlayerVisible15_f: state => {state.subPlayerVisible15 = false},

        setSubPlayerVisible16_t: state => {state.subPlayerVisible16 = true},
        setSubPlayerVisible16_f: state => {state.subPlayerVisible16 = false},

        setSubPlayerVisible17_t: state => {state.subPlayerVisible17 = true},
        setSubPlayerVisible17_f: state => {state.subPlayerVisible17 = false},

        setSubPlayerVisible18_t: state => {state.subPlayerVisible18 = true},
        setSubPlayerVisible18_f: state => {state.subPlayerVisible18 = false},

        setSubPlayerVisible19_t: state => {state.subPlayerVisible19 = true},
        setSubPlayerVisible19_f: state => {state.subPlayerVisible19 = false},

        setSubPlayerVisible20_t: state => {state.subPlayerVisible20 = true},
        setSubPlayerVisible20_f: state => {state.subPlayerVisible20 = false},

        setSubPlayerVisible21_t: state => {state.subPlayerVisible21 = true},
        setSubPlayerVisible21_f: state => {state.subPlayerVisible21 = false},

        setSubPlayerVisible22_t: state => {state.subPlayerVisible22 = true},
        setSubPlayerVisible22_f: state => {state.subPlayerVisible22 = false},

        setSubPlayerVisible23_t: state => {state.subPlayerVisible23 = true},
        setSubPlayerVisible23_f: state => {state.subPlayerVisible23 = false},

        setSubPlayerVisible24_t: state => {state.subPlayerVisible24 = true},
        setSubPlayerVisible24_f: state => {state.subPlayerVisible24 = false},

        setSubPlayerVisible25_t: state => {state.subPlayerVisible25 = true},
        setSubPlayerVisible25_f: state => {state.subPlayerVisible25 = false},

        setSubPlayerVisible26_t: state => {state.subPlayerVisible26 = true},
        setSubPlayerVisible26_f: state => {state.subPlayerVisible26 = false},

        setSubPlayerVisible27_t: state => {state.subPlayerVisible27 = true},
        setSubPlayerVisible27_f: state => {state.subPlayerVisible27 = false},

        setSubPlayerVisible28_t: state => {state.subPlayerVisible28 = true},
        setSubPlayerVisible28_f: state => {state.subPlayerVisible28 = false},

        setSubPlayerVisible29_t: state => {state.subPlayerVisible29 = true},
        setSubPlayerVisible29_f: state => {state.subPlayerVisible29 = false},

        setSubPlayerVisible30_t: state => {state.subPlayerVisible30 = true},
        setSubPlayerVisible30_f: state => {state.subPlayerVisible30 = false},

        setSubPlayerVisible31_t: state => {state.subPlayerVisible31 = true},
        setSubPlayerVisible31_f: state => {state.subPlayerVisible31 = false},

        setSubPlayerVisible32_t: state => {state.subPlayerVisible32 = true},
        setSubPlayerVisible32_f: state => {state.subPlayerVisible32 = false},

        setSubPlayerVisible33_t: state => {state.subPlayerVisible33 = true},
        setSubPlayerVisible33_f: state => {state.subPlayerVisible33 = false},

        setSubPlayerVisible34_t: state => {state.subPlayerVisible34 = true},
        setSubPlayerVisible34_f: state => {state.subPlayerVisible34 = false},

        setSubPlayerVisible35_t: state => {state.subPlayerVisible35 = true},
        setSubPlayerVisible35_f: state => {state.subPlayerVisible35 = false},

        setSubPlayerVisible36_t: state => {state.subPlayerVisible36 = true},
        setSubPlayerVisible36_f: state => {state.subPlayerVisible36 = false},

        setSubPlayerVisible37_t: state => {state.subPlayerVisible37 = true},
        setSubPlayerVisible37_f: state => {state.subPlayerVisible37 = false},

        setSubPlayerVisible38_t: state => {state.subPlayerVisible38 = true},
        setSubPlayerVisible38_f: state => {state.subPlayerVisible38 = false},

        setTeamFormationGet1: state => {state.formationValue = 1},
        setTeamFormationGet2: state => {state.formationValue = 2},
        setTeamFormationGet3: state => {state.formationValue = 3},
        setTeamFormationGet4: state => {state.formationValue = 4},

        setHomeTeamGetValueGk1: state => {state.homeTeam_gk1 = 0},
        setHomeTeamGetValueLb1: state => {state.homeTeam_lb1 = 1},
        setHomeTeamGetValueCb1: state => {state.homeTeam_cb1 = 2},
        setHomeTeamGetValueCb2: state => {state.homeTeam_cb2 = 3},
        setHomeTeamGetValueRb1: state => {state.homeTeam_rb1 = 4},
        setHomeTeamGetValueDm1: state => {state.homeTeam_dm1 = 5},
        setHomeTeamGetValueCm1: state => {state.homeTeam_cm1 = 6},
        setHomeTeamGetValueCm2: state => {state.homeTeam_cm2 = 7},
        setHomeTeamGetValueLw1: state => {state.homeTeam_lw1 = 8},
        setHomeTeamGetValueRw1: state => {state.homeTeam_rw1 = 9},
        setHomeTeamGetValueSt1: state => {state.homeTeam_st1 = 10},

        setHomeTeamGetSaveValueGk1: state => {state.homeTeamSaveValue_gk1 = state.homeTeam_gk1},
        setHomeTeamGetSaveValueLb1: state => {state.homeTeamSaveValue_lb1 = state.homeTeam_lb1},
        setHomeTeamGetSaveValueCb1: state => {state.homeTeamSaveValue_cb1 = state.homeTeam_cb1},
        setHomeTeamGetSaveValueCb2: state => {state.homeTeamSaveValue_cb2 = state.homeTeam_cb2},
        setHomeTeamGetSaveValueRb1: state => {state.homeTeamSaveValue_rb1 = state.homeTeam_rb1},
        setHomeTeamGetSaveValueDm1: state => {state.homeTeamSaveValue_dm1 = state.homeTeam_dm1},
        setHomeTeamGetSaveValueCm1: state => {state.homeTeamSaveValue_cm1 = state.homeTeam_cm1},
        setHomeTeamGetSaveValueCm2: state => {state.homeTeamSaveValue_cm2 = state.homeTeam_cm2},
        setHomeTeamGetSaveValueLw1: state => {state.homeTeamSaveValue_lw1 = state.homeTeam_lw1},
        setHomeTeamGetSaveValueRw1: state => {state.homeTeamSaveValue_rw1 = state.homeTeam_rw1},
        setHomeTeamGetSaveValueSt1: state => {state.homeTeamSaveValue_st1 = state.homeTeam_st1},


        setHomeTeamGetValueGk_11: state => {
            state.homeTeam_gk1 = 11
        },
        setHomeTeamGetValueLb_12: state => {state.homeTeam_lb1 = 12},
        setHomeTeamGetValueCb1_4: state =>{state.homeTeam_cb1 = 3},
        setHomeTeamGetValueCb1_13: state =>{state.homeTeam_cb1 = 13},
        setHomeTeamGetValueCb1_14: state =>{state.homeTeam_cb1 = 14},
        setHomeTeamGetValueCb2_4: state =>{state.homeTeam_cb2 = 2},
        setHomeTeamGetValueCb2_13: state =>{state.homeTeam_cb2 = 13},
        setHomeTeamGetValueCb2_14: state =>{state.homeTeam_cb2 = 14},
        setHomeTeamGetValueRb_15: state => {state.homeTeam_rb1 = 15},
        setHomeTeamGetValueDm_16: state => {state.homeTeam_dm1 = 16},
        setHomeTeamGetValueCm1_7: state => {state.homeTeam_cm1 = 7},
        setHomeTeamGetValueCm1_17: state => {state.homeTeam_cm1 = 17},
        setHomeTeamGetValueCm1_18: state => {state.homeTeam_cm1 = 18},
        setHomeTeamGetValueCm1_19: state => {state.homeTeam_cm1 = 19},
        setHomeTeamGetValueCm2_6: state => {state.homeTeam_cm2 = 6},
        setHomeTeamGetValueCm2_17: state => {state.homeTeam_cm2 = 17},
        setHomeTeamGetValueCm2_18: state => {state.homeTeam_cm2 = 18},
        setHomeTeamGetValueCm2_19: state => {state.homeTeam_cm2 = 19},
        setHomeTeamGetValueLw1_6: state => {state.homeTeam_lw1 = 6},
        setHomeTeamGetValueLw1_7: state => {state.homeTeam_lw1 = 7},
        setHomeTeamGetValueLw1_8: state => {state.homeTeam_lw1 = 8},
        setHomeTeamGetValueLw1_9: state => {state.homeTeam_lw1 = 9},
        setHomeTeamGetValueLw1_10: state => {state.homeTeam_lw1 = 10},
        setHomeTeamGetValueLw1_17: state => {state.homeTeam_lw1 = 17},
        setHomeTeamGetValueLw1_18: state => {state.homeTeam_lw1 = 18},
        setHomeTeamGetValueLw1_19: state => {state.homeTeam_lw1 = 19},
        setHomeTeamGetValueLw1_20: state => {state.homeTeam_lw1 = 20},
        setHomeTeamGetValueLw1_21: state => {state.homeTeam_lw1 = 21},
        setHomeTeamGetValueLw1_22: state => {state.homeTeam_lw1 = 22},
        setHomeTeamGetValueLw1_23: state => {state.homeTeam_lw1 = 23},
        setHomeTeamGetValueLw1_24: state => {state.homeTeam_lw1 = 24},
        setHomeTeamGetValueRw1_6: state => {state.homeTeam_rw1 = 6},
        setHomeTeamGetValueRw1_7: state => {state.homeTeam_rw1 = 7},
        setHomeTeamGetValueRw1_8: state => {state.homeTeam_rw1 = 8 },
        setHomeTeamGetValueRw1_9: state => {state.homeTeam_rw1 = 9 },
        setHomeTeamGetValueRw1_10: state => {state.homeTeam_rw1 = 10 },
        setHomeTeamGetValueRw1_17: state => {state.homeTeam_rw1 = 17},
        setHomeTeamGetValueRw1_18: state => {state.homeTeam_rw1 = 18},
        setHomeTeamGetValueRw1_19: state => {state.homeTeam_rw1 = 19},
        setHomeTeamGetValueRw1_20: state => {state.homeTeam_rw1 = 20},
        setHomeTeamGetValueRw1_21: state => {state.homeTeam_rw1 = 21},
        setHomeTeamGetValueRw1_22: state => {state.homeTeam_rw1 = 22},
        setHomeTeamGetValueRw1_23: state => {state.homeTeam_rw1 = 23},
        setHomeTeamGetValueRw1_24: state => {state.homeTeam_rw1 = 24},
        setHomeTeamGetValueRw1_25: state => {state.homeTeam_rw1 = 25},
        setHomeTeamGetValueRw1_26: state => {state.homeTeam_rw1 = 26},
        setHomeTeamGetValueSt1_6: state => {state.homeTeam_st1 = 6},
        setHomeTeamGetValueSt1_7: state => {state.homeTeam_st1 = 7},
        setHomeTeamGetValueSt1_8: state => {state.homeTeam_st1 = 8},
        setHomeTeamGetValueSt1_9: state => {state.homeTeam_st1 = 9},
        setHomeTeamGetValueSt1_8: state => {state.homeTeam_st1 = 8},
        setHomeTeamGetValueSt1_17: state => {state.homeTeam_st1 = 17},
        setHomeTeamGetValueSt1_18: state => {state.homeTeam_st1 = 18},
        setHomeTeamGetValueSt1_19: state => {state.homeTeam_st1 = 19},
        setHomeTeamGetValueSt1_20: state => {state.homeTeam_st1 = 20},
        setHomeTeamGetValueSt1_21: state => {state.homeTeam_st1 = 21},
        setHomeTeamGetValueSt1_22: state => {state.homeTeam_st1 = 22},
        setHomeTeamGetValueSt1_23: state => {state.homeTeam_st1 = 23},
        setHomeTeamGetValueSt1_24: state => {state.homeTeam_st1 = 24},
        setHomeTeamGetValueSt1_25: state => {state.homeTeam_st1 = 25},
        setHomeTeamGetValueSt1_26: state => {state.homeTeam_st1 = 26},
        setHomeTeamGetValueSt1_27: state => {state.homeTeam_st1 = 27},
        setHomeTeamGetValueSt1_28: state => {state.homeTeam_st1 = 28},

        setHomeTeamValueLw2Click: state => {
            state.homeTeam_lw2_click = true
            state.homeTeam_lw3_click = false
            state.homeTeam_lw4_click = false
        },

        setHomeTeamValueLw3Click: state => {
            state.homeTeam_lw2_click = false
            state.homeTeam_lw3_click = true
            state.homeTeam_lw4_click = false
        },

        setHomeTeamValueLw4Click: state => {
            state.homeTeam_lw2_click = false
            state.homeTeam_lw3_click = false
            state.homeTeam_lw4_click = true
        },

        setHomeTeamValueRw2Click: state => {
            state.homeTeam_rw2_click = true
            state.homeTeam_rw3_click = false
            state.homeTeam_rw4_click = false
        },

        setHomeTeamValueRw3Click: state => {
            state.homeTeam_rw2_click = false
            state.homeTeam_rw3_click = true
            state.homeTeam_rw4_click = false
        },

        setHomeTeamValueRw4Click: state => {
            state.homeTeam_rw2_click = false
            state.homeTeam_rw3_click = false
            state.homeTeam_rw4_click = true
        },

        setHomeTeamValueSt2Click: state => {
            state.homeTeam_st2_click = true
            state.homeTeam_st3_click = false
            state.homeTeam_st4_click = false
        },

        setHomeTeamValueSt3Click: state => {
            state.homeTeam_st2_click = false
            state.homeTeam_st3_click = true
            state.homeTeam_st4_click = false
        },

        setHomeTeamValueSt4Click: state => {
            state.homeTeam_st2_click = false
            state.homeTeam_st3_click = false
            state.homeTeam_st4_click = true
        },














        setAwayTeamValueLw2Click: state => {
            state.awayTeam_lw2_click = true
            state.awayTeam_lw3_click = false
            state.awayTeam_lw4_click = false
        },

        setAwayTeamValueLw3Click: state => {
            state.awayTeam_lw2_click = false
            state.awayTeam_lw3_click = true
            state.awayTeam_lw4_click = false
        },

        setAwayTeamValueLw4Click: state => {
            state.awayTeam_lw2_click = false
            state.awayTeam_lw3_click = false
            state.awayTeam_lw4_click = true
        },

        setAwayTeamValueRw2Click: state => {
            state.awayTeam_rw2_click = true
            state.awayTeam_rw3_click = false
            state.awayTeam_rw4_click = false
        },

        setAwayTeamValueRw3Click: state => {
            state.awayTeam_rw2_click = false
            state.awayTeam_rw3_click = true
            state.awayTeam_rw4_click = false
        },

        setAwayTeamValueRw4Click: state => {
            state.awayTeam_rw2_click = false
            state.awayTeam_rw3_click = false
            state.awayTeam_rw4_click = true
        },

        setAwayTeamValueSt2Click: state => {
            state.awayTeam_st2_click = true
            state.awayTeam_st3_click = false
            state.awayTeam_st4_click = false
        },

        setAwayTeamValueSt3Click: state => {
            state.awayTeam_st2_click = false
            state.awayTeam_st3_click = true
            state.awayTeam_st4_click = false
        },

        setAwayTeamValueSt4Click: state => {
            state.awayTeam_st2_click = false
            state.awayTeam_st3_click = false
            state.awayTeam_st4_click = true
        },






        setAwayTeamGetValueGk_11: state => {
            state.awayTeam_gk2 = 11
        },
        setAwayTeamGetValueLb_12: state => {state.awayTeam_lb2 = 12},
        setAwayTeamGetValueCb4_4: state =>{state.awayTeam_cb4 = 3},
        setAwayTeamGetValueCb4_13: state =>{state.awayTeam_cb4 = 13},
        setAwayTeamGetValueCb4_14: state =>{state.awayTeam_cb4 = 14},
        setAwayTeamGetValueCb3_4: state =>{state.awayTeam_cb3 = 2},
        setAwayTeamGetValueCb3_13: state =>{state.awayTeam_cb3 = 13},
        setAwayTeamGetValueCb3_14: state =>{state.awayTeam_cb3 = 14},
        setAwayTeamGetValueRb_15: state => {state.awayTeam_rb2 = 15},
        setAwayTeamGetValueDm_16: state => {state.awayTeam_dm2 = 16},
        setAwayTeamGetValueCm4_7: state => {state.awayTeam_cm4 = 7},
        setAwayTeamGetValueCm4_17: state => {state.awayTeam_cm4 = 17},
        setAwayTeamGetValueCm4_18: state => {state.awayTeam_cm4 = 18},
        setAwayTeamGetValueCm4_19: state => {state.awayTeam_cm4 = 19},
        setAwayTeamGetValueCm3_6: state => {state.awayTeam_cm3 = 6},
        setAwayTeamGetValueCm3_17: state => {state.awayTeam_cm3 = 17},
        setAwayTeamGetValueCm3_18: state => {state.awayTeam_cm3 = 18},
        setAwayTeamGetValueCm3_19: state => {state.awayTeam_cm3 = 19},
        setAwayTeamGetValueLw2_6: state => {state.awayTeam_lw2 = 6},
        setAwayTeamGetValueLw2_7: state => {state.awayTeam_lw2 = 7},
        setAwayTeamGetValueLw2_8: state => {state.awayTeam_lw2 = 8},
        setAwayTeamGetValueLw2_9: state => {state.awayTeam_lw2 = 9},
        setAwayTeamGetValueLw2_10: state => {state.awayTeam_lw2 = 10},
        setAwayTeamGetValueLw2_17: state => {state.awayTeam_lw2 = 17},
        setAwayTeamGetValueLw2_18: state => {state.awayTeam_lw2 = 18},
        setAwayTeamGetValueLw2_19: state => {state.awayTeam_lw2 = 19},
        setAwayTeamGetValueLw2_20: state => {state.awayTeam_lw2 = 20},
        setAwayTeamGetValueLw2_21: state => {state.awayTeam_lw2 = 21},
        setAwayTeamGetValueLw2_22: state => {state.awayTeam_lw2 = 22},
        setAwayTeamGetValueLw2_23: state => {state.awayTeam_lw2 = 23},
        setAwayTeamGetValueLw2_24: state => {state.awayTeam_lw2 = 24},
        setAwayTeamGetValueRw2_6: state => {state.awayTeam_rw2 = 6},
        setAwayTeamGetValueRw2_7: state => {state.awayTeam_rw2 = 7},
        setAwayTeamGetValueRw2_8: state => {state.awayTeam_rw2 = 8},
        setAwayTeamGetValueRw2_10: state => {state.awayTeam_rw2 = 10},
        setAwayTeamGetValueRw2_17: state => {state.awayTeam_rw2 = 17},
        setAwayTeamGetValueRw2_18: state => {state.awayTeam_rw2 = 18},
        setAwayTeamGetValueRw2_19: state => {state.awayTeam_rw2 = 19},
        setAwayTeamGetValueRw2_20: state => {state.awayTeam_rw2 = 20},
        setAwayTeamGetValueRw2_21: state => {state.awayTeam_rw2 = 21},
        setAwayTeamGetValueRw2_22: state => {state.awayTeam_rw2 = 22},
        setAwayTeamGetValueRw2_23: state => {state.awayTeam_rw2 = 23},
        setAwayTeamGetValueRw2_24: state => {state.awayTeam_rw2 = 24},
        setAwayTeamGetValueRw2_25: state => {state.awayTeam_rw2 = 25},
        setAwayTeamGetValueRw2_26: state => {state.awayTeam_rw2 = 26},
        setAwayTeamGetValueSt2_6: state => {state.awayTeam_st2 = 6},
        setAwayTeamGetValueSt2_7: state => {state.awayTeam_st2 = 7},
        setAwayTeamGetValueSt2_8: state => {state.awayTeam_st2 = 8},
        setAwayTeamGetValueSt2_9: state => {state.awayTeam_st2 = 9},
        setAwayTeamGetValueSt2_17: state => {state.awayTeam_st2 = 17},
        setAwayTeamGetValueSt2_18: state => {state.awayTeam_st2 = 18},
        setAwayTeamGetValueSt2_19: state => {state.awayTeam_st2 = 19},
        setAwayTeamGetValueSt2_20: state => {state.awayTeam_st2 = 20},
        setAwayTeamGetValueSt2_21: state => {state.awayTeam_st2 = 21},
        setAwayTeamGetValueSt2_22: state => {state.awayTeam_st2 = 22},
        setAwayTeamGetValueSt2_23: state => {state.awayTeam_st2 = 23},
        setAwayTeamGetValueSt2_24: state => {state.awayTeam_st2 = 24},
        setAwayTeamGetValueSt2_25: state => {state.awayTeam_st2 = 25},
        setAwayTeamGetValueSt2_26: state => {state.awayTeam_st2 = 26},
        setAwayTeamGetValueSt2_27: state => {state.awayTeam_st2 = 27},
        setAwayTeamGetValueSt2_28: state => {state.awayTeam_st2 = 28},


        setAwayTeamGetValueGk2: state => {state.awayTeam_gk2 = 0},
        setAwayTeamGetValueLb2: state => {state.awayTeam_lb2 = 1},
        setAwayTeamGetValueCb4: state => {state.awayTeam_cb4 = 2},
        setAwayTeamGetValueCb3: state => {state.awayTeam_cb3 = 3},
        setAwayTeamGetValueRb2: state => {state.awayTeam_rb2 = 4},
        setAwayTeamGetValueDm2: state => {state.awayTeam_dm2 = 5},
        setAwayTeamGetValueCm4: state => {state.awayTeam_cm4 = 6},
        setAwayTeamGetValueCm3: state => {state.awayTeam_cm3 = 7},
        setAwayTeamGetValueRw2: state => {state.awayTeam_rw2 = 9},
        setAwayTeamGetValueLw2: state => {state.awayTeam_lw2 = 8},
        setAwayTeamGetValueSt2: state => {state.awayTeam_st2 = 10},

        setAwayTeamGetSaveValueGk2: state => {state.awayTeamSaveValue_gk2 = state.awayTeam_gk2},
        setAwayTeamGetSaveValueLb2: state => {state.awayTeamSaveValue_lb2 = state.awayTeam_lb2},
        setAwayTeamGetSaveValueCb4: state => {state.awayTeamSaveValue_cb4 = state.awayTeam_cb4},
        setAwayTeamGetSaveValueCb3: state => {state.awayTeamSaveValue_cb3 = state.awayTeam_cb3},
        setAwayTeamGetSaveValueRb2: state => {state.awayTeamSaveValue_rb2 = state.awayTeam_rb2},
        setAwayTeamGetSaveValueDm2: state => {state.awayTeamSaveValue_dm2 = state.awayTeam_dm2},
        setAwayTeamGetSaveValueCm4: state => {state.awayTeamSaveValue_cm4 = state.awayTeam_cm4},
        setAwayTeamGetSaveValueCm3: state => {state.awayTeamSaveValue_cm3 = state.awayTeam_cm3},
        setAwayTeamGetSaveValueRw2: state => {state.awayTeamSaveValue_lw2 = state.awayTeam_rw2},
        setAwayTeamGetSaveValueLw2: state => {state.awayTeamSaveValue_rw2 = state.awayTeam_lw2},
        setAwayTeamGetSaveValueSt2: state => {state.awayTeamSaveValue_st2 = state.awayTeam_st2}
    }
}) 

export const { setTeamFormationGet1, setTeamFormationGet2, setTeamFormationGet3, setTeamFormationGet4, setHomeTeamGetValueGk1, setHomeTeamGetValueLb1, setHomeTeamGetValueCb1, setHomeTeamGetValueCb2, setHomeTeamGetValueRb1, 
setHomeTeamGetValueDm1, setHomeTeamGetValueCm1, setHomeTeamGetValueCm2, setHomeTeamGetValueLw1, setHomeTeamGetValueRw1, setHomeTeamGetValueSt1, 
setAwayTeamGetValueGk2, setAwayTeamGetValueLb2, setAwayTeamGetValueCb4, setAwayTeamGetValueCb3, setAwayTeamGetValueRb2, 
setAwayTeamGetValueDm2, setAwayTeamGetValueCm4, setAwayTeamGetValueCm3, setAwayTeamGetValueLw2, 
setAwayTeamGetValueRw2, setAwayTeamGetValueSt2,       setHomeTeamGetValueGk_11 , setAwayTeamGetValueGk_11, 
setHomeTeamGetValueLb_12, setAwayTeamGetValueLb_12, 
setHomeTeamGetValueCb1_4, setHomeTeamGetValueCb1_13, setHomeTeamGetValueCb1_14, 
setAwayTeamGetValueCb4_4, setAwayTeamGetValueCb4_13, setAwayTeamGetValueCb4_14,      
setHomeTeamGetValueCb2_4, setHomeTeamGetValueCb2_13, setHomeTeamGetValueCb2_14, 
setAwayTeamGetValueCb3_4, setAwayTeamGetValueCb3_13, setAwayTeamGetValueCb3_14,
setHomeTeamGetValueRb_15, setHomeTeamGetValueDm_16, setAwayTeamGetValueRb_15, setAwayTeamGetValueDm_16 , 
setHomeTeamGetValueCm1_7, setHomeTeamGetValueCm1_17, setHomeTeamGetValueCm1_18, setHomeTeamGetValueCm1_19, 
setHomeTeamGetValueCm2_6, setHomeTeamGetValueCm2_17, setHomeTeamGetValueCm2_18, setHomeTeamGetValueCm2_19, 
setAwayTeamGetValueCm4_7, setAwayTeamGetValueCm4_17, setAwayTeamGetValueCm4_18, setAwayTeamGetValueCm4_19, 
setAwayTeamGetValueCm3_6, setAwayTeamGetValueCm3_17, setAwayTeamGetValueCm3_18, setAwayTeamGetValueCm3_19, 
setHomeTeamGetValueLw1_6, setHomeTeamGetValueLw1_7, setHomeTeamGetValueLw1_17, setHomeTeamGetValueLw1_18, setHomeTeamGetValueLw1_19, setHomeTeamGetValueLw1_20, 
setHomeTeamGetValueLw1_21, setHomeTeamGetValueLw1_22, setHomeTeamGetValueLw1_23, 
setAwayTeamGetValueLw2_6, setAwayTeamGetValueLw2_7, setAwayTeamGetValueLw2_17, setAwayTeamGetValueLw2_18, setAwayTeamGetValueLw2_19, setAwayTeamGetValueLw2_20, 
setAwayTeamGetValueLw2_21, setAwayTeamGetValueLw2_22, setAwayTeamGetValueLw2_23, 
setHomeTeamValueLw2Click, setHomeTeamValueLw3Click, setHomeTeamValueLw4Click, 
setAwayTeamValueLw2Click, setAwayTeamValueLw3Click, setAwayTeamValueLw4Click, 
setHomeTeamValueRw2Click, setHomeTeamValueRw3Click, setHomeTeamValueRw4Click,
setAwayTeamValueRw2Click, setAwayTeamValueRw3Click, setAwayTeamValueRw4Click, 
setHomeTeamValueSt2Click, setHomeTeamValueSt3Click, setHomeTeamValueSt4Click, 
setAwayTeamValueSt2Click, setAwayTeamValueSt3Click, setAwayTeamValueSt4Click, 
setHomeTeamGetValueRw1_6, setHomeTeamGetValueRw1_7, setAwayTeamGetValueRw2_8, setHomeTeamGetValueRw1_8, 
setHomeTeamGetValueLw1_8, setAwayTeamGetValueLw2_8, setHomeTeamGetValueLw1_9, setAwayTeamGetValueLw2_9,
setHomeTeamGetValueRw1_17, setHomeTeamGetValueRw1_9,
setHomeTeamGetValueRw1_18, setHomeTeamGetValueRw1_19, 
setHomeTeamGetValueRw1_20, setHomeTeamGetValueRw1_21, setAwayTeamGetValueRw2_10, setHomeTeamGetValueRw1_10,
setHomeTeamGetValueRw1_22, setHomeTeamGetValueRw1_23, setHomeTeamGetValueLw1_24, setAwayTeamGetValueLw2_24,
setHomeTeamGetValueRw1_24, setHomeTeamGetValueRw1_25, setHomeTeamGetValueRw1_26,  
setAwayTeamGetValueRw2_6, setAwayTeamGetValueRw2_7, setAwayTeamGetValueRw2_17, setAwayTeamGetValueRw2_18, 
setAwayTeamGetValueRw2_19, setAwayTeamGetValueRw2_20, setAwayTeamGetValueRw2_21,
setAwayTeamGetValueRw2_22, setAwayTeamGetValueRw2_23, setAwayTeamGetValueLw2_10, setHomeTeamGetValueLw1_10,
setAwayTeamGetValueRw2_24, setAwayTeamGetValueRw2_25, setAwayTeamGetValueRw2_26, 
setHomeTeamGetValueSt1_6, setHomeTeamGetValueSt1_7, 
setHomeTeamGetValueSt1_8, setHomeTeamGetValueSt1_9, setHomeTeamGetValueSt1_17, 
setHomeTeamGetValueSt1_18, setHomeTeamGetValueSt1_19, setHomeTeamGetValueSt1_20,
setHomeTeamGetValueSt1_21, setHomeTeamGetValueSt1_22, setHomeTeamGetValueSt1_23,
setHomeTeamGetValueSt1_24, setHomeTeamGetValueSt1_25, setHomeTeamGetValueSt1_26,
setAwayTeamGetValueSt2_6, setAwayTeamGetValueSt2_7, 
setAwayTeamGetValueSt2_8, setAwayTeamGetValueSt2_9, setAwayTeamGetValueSt2_17, 
setAwayTeamGetValueSt2_18, setAwayTeamGetValueSt2_19, setAwayTeamGetValueSt2_20,
setAwayTeamGetValueSt2_21, setAwayTeamGetValueSt2_22, setAwayTeamGetValueSt2_23,
setAwayTeamGetValueSt2_24, setAwayTeamGetValueSt2_25, setAwayTeamGetValueSt2_26, 
setAwayTeamGetValueSt2_27, setAwayTeamGetValueSt2_28, setHomeTeamGetValueSt1_27, setHomeTeamGetValueSt1_28,

setHomeTeamGetSaveValueGk1, setHomeTeamGetSaveValueLb1, setHomeTeamGetSaveValueRb1, setHomeTeamGetSaveValueDm1, 
setHomeTeamGetSaveValueCb1, setHomeTeamGetSaveValueCb2, setHomeTeamGetSaveValueCm1, 
setHomeTeamGetSaveValueCm2, setHomeTeamGetSaveValueLw1, setHomeTeamGetSaveValueRw1,
setAwayTeamGetSaveValueGk2, setAwayTeamGetSaveValueLb2, setAwayTeamGetSaveValueRb2, setAwayTeamGetSaveValueDm2,  
setHomeTeamGetSaveValueSt1, setAwayTeamGetSaveValueCb4, setAwayTeamGetSaveValueCb3,
setAwayTeamGetSaveValueCm4, setAwayTeamGetSaveValueCm3, setAwayTeamGetSaveValueLw2, 
setAwayTeamGetSaveValueRw2, setAwayTeamGetSaveValueSt2,

setSamePlayerValueId_f, setSamePlayerValueId_t, 

setSubPlayerVisible1_t, setSubPlayerVisible1_f,
setSubPlayerVisible2_t, setSubPlayerVisible2_f,
setSubPlayerVisible3_t, setSubPlayerVisible3_f,
setSubPlayerVisible4_t, setSubPlayerVisible4_f,
setSubPlayerVisible5_t, setSubPlayerVisible5_f,
setSubPlayerVisible6_t, setSubPlayerVisible6_f,
setSubPlayerVisible7_t, setSubPlayerVisible7_f,
setSubPlayerVisible8_t, setSubPlayerVisible8_f,
setSubPlayerVisible9_t, setSubPlayerVisible9_f,
setSubPlayerVisible10_t, setSubPlayerVisible10_f,
setSubPlayerVisible11_t, setSubPlayerVisible11_f,
setSubPlayerVisible12_t, setSubPlayerVisible12_f,
setSubPlayerVisible13_t, setSubPlayerVisible13_f,
setSubPlayerVisible14_t, setSubPlayerVisible14_f,
setSubPlayerVisible15_t, setSubPlayerVisible15_f,
setSubPlayerVisible16_t, setSubPlayerVisible16_f,
setSubPlayerVisible17_t, setSubPlayerVisible17_f,
setSubPlayerVisible18_t, setSubPlayerVisible18_f,
setSubPlayerVisible19_t, setSubPlayerVisible19_f,
setSubPlayerVisible20_t, setSubPlayerVisible20_f,
setSubPlayerVisible21_t, setSubPlayerVisible21_f,
setSubPlayerVisible22_t, setSubPlayerVisible22_f,
setSubPlayerVisible23_t, setSubPlayerVisible23_f,
setSubPlayerVisible24_t, setSubPlayerVisible24_f,
setSubPlayerVisible25_t, setSubPlayerVisible25_f,
setSubPlayerVisible26_t, setSubPlayerVisible26_f,
setSubPlayerVisible27_t, setSubPlayerVisible27_f,
setSubPlayerVisible28_t, setSubPlayerVisible28_f,
setSubPlayerVisible29_t, setSubPlayerVisible29_f,
setSubPlayerVisible30_t, setSubPlayerVisible30_f,
setSubPlayerVisible31_t, setSubPlayerVisible31_f,
setSubPlayerVisible32_t, setSubPlayerVisible32_f,
setSubPlayerVisible33_t, setSubPlayerVisible33_f,
setSubPlayerVisible34_t, setSubPlayerVisible34_f,
setSubPlayerVisible35_t, setSubPlayerVisible35_f,
setSubPlayerVisible36_t, setSubPlayerVisible36_f,
setSubPlayerVisible37_t, setSubPlayerVisible37_f,
setSubPlayerVisible38_t, setSubPlayerVisible38_f} = gamePlanMenuValue.actions
export default gamePlanMenuValue.reducer
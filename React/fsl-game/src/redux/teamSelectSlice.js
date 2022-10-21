import { createSlice } from "@reduxjs/toolkit";
import Leagueselect from "../components/Leagueselect";
import Leagues from '../leagues.json'

export const teamsValuesId = createSlice({
    name : 'teamsValuesId',
    initialState: {
        homeTeamValue : 0,
        awayTeamValue : 0
    },
    reducers:{
        setHomeTeamValue: (state, action) => {
            state.homeTeamValue = state.action
        },
        setHomeTeamValuePlus: state => {
            if(state.homeTeamValue==Leagues.leagues[0].teams.length-1){
                state.homeTeamValue = 0;
            }else {
                state.homeTeamValue += 1;
            }
        },
        setHomeTeamValueSour: state => {
            if(state.homeTeamValue==0){
                state.homeTeamValue = Leagues.leagues[0].teams.length-1;
            }else {
                state.homeTeamValue -= 1;
            }
        },



        setAwayTeamValue: (state, action) => {
            state.awayTeamValue = state.action
        },
        setAwayTeamValuePlus: state => {
            if(state.awayTeamValue==Leagues.leagues[0].teams.length-1){
                state.awayTeamValue = 0;
            }else {
                state.awayTeamValue += 1;
            }
        },
        setAwayTeamValueSour: state => {
            if(state.awayTeamValue==0){
                state.awayTeamValue = Leagues.leagues[0].teams.length-1;
            }else {
                state.awayTeamValue -= 1;
            }
        }
    }
})

export const { setHomeTeamValue, setHomeTeamValuePlus, setHomeTeamValueSour, setAwayTeamValue, setAwayTeamValuePlus,setAwayTeamValueSour } = teamsValuesId.actions
export default teamsValuesId.reducer
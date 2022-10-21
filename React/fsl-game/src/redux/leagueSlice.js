import { createSlice } from "@reduxjs/toolkit";
import Leagues from '../leagues.json'

export const leaguesValuesId = createSlice({
    name: 'leaguesValuesId',
    initialState: {
        homeLeagueValue: 0,
        awayLeagueValue: 0
    },
    reducers: {
        setHomeLeagueValue: (state, action) =>{
            state.homeLeagueValue = state.action
        },
        setHomeLeagueValuePlus: state => {
            if(state.homeLeagueValue==Leagues.leagues.length-1){
                state.homeLeagueValue = 0;
            }else {
                state.homeLeagueValue +=1;
            }
        },
        setHomeLeagueValueSour: state => {
            if(state.homeLeagueValue==0){
                state.homeLeagueValue = Leagues.leagues.length-1;
            }else {
                state.homeLeagueValue -=1;
            }
        },


        
        setAwayLeagueValue: (state, action) =>{
            state.awayLeagueValue = state.action
        },
        setAwayLeagueValuePlus: state => {
            if(state.awayLeagueValue==Leagues.leagues.length-1){
                state.awayLeagueValue = 0;
            }else {
                state.awayLeagueValue +=1;
            }
        },
        setAwayLeagueValueSour: state => {
            if(state.awayLeagueValue==0){
                state.awayLeagueValue = Leagues.leagues.length-1;
            }else {
                state.awayLeagueValue -=1;
            }
        }
    }
})

export const { setHomeLeagueValue, setHomeLeagueValuePlus, setHomeLeagueValueSour, setAwayLeagueValue, setAwayLeagueValuePlus, setAwayLeagueValueSour } = leaguesValuesId.actions
export default leaguesValuesId.reducer
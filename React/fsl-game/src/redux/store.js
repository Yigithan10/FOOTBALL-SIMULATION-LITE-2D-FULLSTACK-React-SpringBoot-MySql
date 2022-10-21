import { configureStore } from "@reduxjs/toolkit"

import loginReducers from "./loginSlice"
import leagueReducers from './leagueSlice'
import teamReducers from './teamSelectSlice'
import sideReducers from './selectSideSlice'
import playOrGamePlanSlice from "./playOrGamePlanSlice"
import gamePlanMenuReducers from "./gamePlanMenuSlice"
import strategySliceReducers from './strategySlice'
import languageSliceReducers from "./languageSlice"
import playmatchmenuSliceReducers from "./playmatchmenuSlice"

export default configureStore({
    reducer: {
        setId_default: loginReducers,
        setUsername_default: loginReducers,
        setPassword_default: loginReducers,
        setLanguage_default: loginReducers,
        setId_login: loginReducers,
        setUsername_login: loginReducers,
        setPassword_login: loginReducers,
        setLanguage_login: loginReducers,

        setHomeSideValue: sideReducers,
        setAwaySideValue: sideReducers,

        homeLeagueValue: leagueReducers,
        setHomeLeagueValuePlus: leagueReducers,
        setHomeLeagueValueSour: leagueReducers,
        awayLeagueValue: leagueReducers,
        setAwayLeagueValueSour: leagueReducers,
        setAwayLeagueValueSour: leagueReducers,

        setHomeTeamValue: teamReducers,
        setHomeTeamValuePlus: teamReducers,
        setHomeTeamValueSour: teamReducers,
        setAwayTeamValue: teamReducers,
        setAwayTeamValuePlus: teamReducers,
        setAwayTeamValueSour: teamReducers,

        setPlayOrGameplanFormationGet1: playOrGamePlanSlice,
        setPlayOrGameplanFormationGet2: playOrGamePlanSlice,
        setPlayOrGameplanFormationGet3: playOrGamePlanSlice,
        setPlayOrGameplanFormationGet4: playOrGamePlanSlice,

        setTeamFormationGet1: gamePlanMenuReducers,
        setTeamFormationGet2: gamePlanMenuReducers,
        setTeamFormationGet3: gamePlanMenuReducers,
        setTeamFormationGet4: gamePlanMenuReducers,

        setHomeTeamGetGk1: gamePlanMenuReducers,
        setHomeTeamGetLb1: gamePlanMenuReducers,
        setHomeTeamGetCb1: gamePlanMenuReducers,
        setHomeTeamGetCb2: gamePlanMenuReducers,
        setHomeTeamGetRb1: gamePlanMenuReducers,
        setHomeTeamGetDm1: gamePlanMenuReducers,
        setHomeTeamGetCm1: gamePlanMenuReducers,
        setHomeTeamGetCm2: gamePlanMenuReducers,
        setHomeTeamGetLw1: gamePlanMenuReducers,
        setHomeTeamGetRw1: gamePlanMenuReducers,
        setHomeTeamGetSt1: gamePlanMenuReducers,

        setAwayTeamGetGk2: gamePlanMenuReducers,
        setAwayTeamGetLb2: gamePlanMenuReducers,
        setAwayTeamGetCb4: gamePlanMenuReducers,
        setAwayTeamGetCb3: gamePlanMenuReducers,
        setAwayTeamGetRb2: gamePlanMenuReducers,
        setAwayTeamGetDm2: gamePlanMenuReducers,
        setAwayTeamGetCm4: gamePlanMenuReducers,
        setAwayTeamGetCm3: gamePlanMenuReducers,
        setAwayTeamGetLw2: gamePlanMenuReducers,
        setAwayTeamGetRw2: gamePlanMenuReducers,
        setAwayTeamGetSt2: gamePlanMenuReducers,

        setHomeTeamValueLw2Click: gamePlanMenuReducers,
        setHomeTeamValueLw3Click: gamePlanMenuReducers,
        setHomeTeamValueLw4Click: gamePlanMenuReducers,
        setHomeTeamValueRw2Click: gamePlanMenuReducers,
        setHomeTeamValueRw3Click: gamePlanMenuReducers,
        setHomeTeamValueRw4Click: gamePlanMenuReducers,
        setHomeTeamValueSt2Click: gamePlanMenuReducers,
        setHomeTeamValueSt3Click: gamePlanMenuReducers,
        setHomeTeamValueSt4Click: gamePlanMenuReducers,

        setAwayTeamValueLw2Click: gamePlanMenuReducers,
        setAwayTeamValueLw3Click: gamePlanMenuReducers,
        setAwayTeamValueLw4Click: gamePlanMenuReducers,
        setAwayTeamValueRw2Click: gamePlanMenuReducers,
        setAwayTeamValueRw3Click: gamePlanMenuReducers,
        setAwayTeamValueRw4Click: gamePlanMenuReducers,
        setAwayTeamValueSt2Click: gamePlanMenuReducers,
        setAwayTeamValueSt3Click: gamePlanMenuReducers,
        setAwayTeamValueSt4Click: gamePlanMenuReducers,


        strategyTacticsButtonValue_1: strategySliceReducers,
        strategyTacticsButtonValue_2: strategySliceReducers,
        strategyTacticsButtonValue_3: strategySliceReducers,
        strategyTacticsButtonValue_4: strategySliceReducers,
        strategyTacticsButtonValue_5: strategySliceReducers,

        strategyHomeScrollCaptainPlayerValue_1: strategySliceReducers,

        strategyAwayScrollCaptainPlayerValue_1: strategySliceReducers,


        strategyHomeScrollPenPlayerValue_1: strategySliceReducers,

        strategyAwayScrollPenPlayerValue_1: strategySliceReducers,


        strategyHomeScrollFreekickPlayerValue_1: strategySliceReducers,

        strategyAwayScrollFreekickPlayerValue_1: strategySliceReducers,

        GetLanguageValue_eng: languageSliceReducers,
        GetLanguageValue_ger: languageSliceReducers,
        GetLanguageValue_fra: languageSliceReducers,
        GetLanguageValue_esp: languageSliceReducers,
        GetLanguageValue_ita: languageSliceReducers,
        GetLanguageValue_por: languageSliceReducers,
        GetLanguageValue_tur: languageSliceReducers,
        GetLanguageValue_rus: languageSliceReducers,
        GetLanguageValue_jap: languageSliceReducers,
        GetLanguageValue_chi: languageSliceReducers, 

        GetPanelValue_p: playmatchmenuSliceReducers,
        GetPanelValue_e: playmatchmenuSliceReducers,
        GetPanelValue_s: playmatchmenuSliceReducers,
        GetMatchStartValue_on: playmatchmenuSliceReducers,
        GetMatchStartValue_off: playmatchmenuSliceReducers,
        SetHomeTeam_gk1_energy: playmatchmenuSliceReducers
    }
})
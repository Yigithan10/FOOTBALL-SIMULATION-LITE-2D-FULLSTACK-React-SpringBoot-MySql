import React from 'react'
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'
import './Strategy.css'
import Leagues from '../leagues.json'
import Languages from '../languages.json'
import { useSelector, useDispatch } from 'react-redux'
import {
    strategyTacticsButtonValue_1, strategyTacticsButtonValue_2, strategyTacticsButtonValue_3,
    strategyTacticsButtonValue_4, strategyTacticsButtonValue_5,
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
    strategyAwayScrollFreekickPlayerValue_10, strategyAwayScrollFreekickPlayerValue_11
} from '../redux/strategySlice'

let tacticsButtonsClick1;
let tacticsButtonsClick2;
let tacticsButtonsClick3;
let tacticsButtonsClick4;
let tacticsButtonsClick5;

let defenceButtonsClick1;
let defenceButtonsClick2;

let passButtonsClick1;
let passButtonsClick2;

let shootButtonsClick1;
let shootButtonsClick2;

let offsideButtonsClick1;
let offsideButtonsClick2;

function Strategy() {

    const strategyTacticsButtonValueId = useSelector(state => state.strategyTacticsButtonValue_1.strategyTacticsButtonValue);
    const understandDefenceButtonValueId = useSelector(state => state.strategyTacticsButtonValue_1.strategyUnderstandDefenceButtonValue);
    const understandPassButtonValueId = useSelector(state => state.strategyTacticsButtonValue_1.strategyUnderstandPassButtonValue);
    const understandShootButtonValueId = useSelector(state => state.strategyTacticsButtonValue_1.strategyUnderstandShootButtonValue);
    const understandOffsideButtonValueId = useSelector(state => state.strategyTacticsButtonValue_1.strategyUnderstandOffsideButtonValue);

    const homeScrollCaptainPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollCaptainPlayerValue)
    const awayScrollCaptainPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollCaptainPlayerValue)

    const homeScrollPenPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollPenPlayerValue)
    const awayScrollPenPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollPenPlayerValue)

    const homeScrollFreekickPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollFreekickPlayerValue)
    const awayScrollFreekickPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollFreekickPlayerValue)

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
    );
    const homeTeamIndex_gk1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_gk1)
    const homeTeamIndex_lb1 = useSelector(state => state.setHomeTeamGetLb1.homeTeam_lb1)
    const homeTeamIndex_cb1 = useSelector(state => state.setHomeTeamGetCb1.homeTeam_cb1)
    const homeTeamIndex_cb2 = useSelector(state => state.setHomeTeamGetCb2.homeTeam_cb2)
    const homeTeamIndex_rb1 = useSelector(state => state.setHomeTeamGetRb1.homeTeam_rb1)
    const homeTeamIndex_dm1 = useSelector(state => state.setHomeTeamGetDm1.homeTeam_dm1)
    const homeTeamIndex_cm1 = useSelector(state => state.setHomeTeamGetCm1.homeTeam_cm1)
    const homeTeamIndex_cm2 = useSelector(state => state.setHomeTeamGetCm2.homeTeam_cm2)
    const homeTeamIndex_lw1 = useSelector(state => state.setHomeTeamGetLw1.homeTeam_lw1)
    const homeTeamIndex_rw1 = useSelector(state => state.setHomeTeamGetRw1.homeTeam_rw1)
    const homeTeamIndex_st1 = useSelector(state => state.setHomeTeamGetSt1.homeTeam_st1)

    const awayTeamIndex_gk2 = useSelector(state => state.setAwayTeamGetGk2.awayTeam_gk2)
    const awayTeamIndex_lb2 = useSelector(state => state.setAwayTeamGetLb2.awayTeam_lb2)
    const awayTeamIndex_cb4 = useSelector(state => state.setAwayTeamGetCb4.awayTeam_cb4)
    const awayTeamIndex_cb3 = useSelector(state => state.setAwayTeamGetCb3.awayTeam_cb3)
    const awayTeamIndex_rb2 = useSelector(state => state.setAwayTeamGetRb2.awayTeam_rb2)
    const awayTeamIndex_dm2 = useSelector(state => state.setAwayTeamGetDm2.awayTeam_dm2)
    const awayTeamIndex_cm4 = useSelector(state => state.setAwayTeamGetCm4.awayTeam_cm4)
    const awayTeamIndex_cm3 = useSelector(state => state.setAwayTeamGetCm3.awayTeam_cm3)
    const awayTeamIndex_lw2 = useSelector(state => state.setAwayTeamGetLw2.awayTeam_lw2)
    const awayTeamIndex_rw2 = useSelector(state => state.setAwayTeamGetRw2.awayTeam_rw2)
    const awayTeamIndex_st2 = useSelector(state => state.setAwayTeamGetSt2.awayTeam_st2)

    const dispatch = useDispatch()

    let txtStrategy = Languages.languages[reduxLanguage].strategy.strategyTeamStrategy
    let txtCounterAttackButton = Languages.languages[reduxLanguage].strategy.strategyCounterAttack
    let txtTikiTakaButton = Languages.languages[reduxLanguage].strategy.strategyTikiTaka
    let txtWingGameButton = Languages.languages[reduxLanguage].strategy.strategyWingGame
    let txtDefensiveButton = Languages.languages[reduxLanguage].strategy.strategyDefensive
    let txtBallPosessionButton = Languages.languages[reduxLanguage].strategy.strategyBallPosession

    let txtDefenceUnderstanding = Languages.languages[reduxLanguage].strategy.strategyDefenceUnderstanding
    let txtDefenceUnderstandingSoftButton = Languages.languages[reduxLanguage].strategy.strategyDefenceUnderstandingSoft
    let txtDefenceUnderstandingAggressiveButton = Languages.languages[reduxLanguage].strategy.strategyDefenceUnderstandingAggressive

    let txtPassUnderstanding = Languages.languages[reduxLanguage].strategy.strategyPassUnderstanding
    let txtPassUnderstandingShortButton = Languages.languages[reduxLanguage].strategy.strategyPassUnderstandingShort
    let txtPassUnderstandingLongButton = Languages.languages[reduxLanguage].strategy.strategyPassUnderstandingLong

    let txtShootOnSight = Languages.languages[reduxLanguage].strategy.strategyShootOnSight
    let txtShootOnSightSometimesButton = Languages.languages[reduxLanguage].strategy.strategyShootOnSightSometimes
    let txtShootOnSightOftenButton = Languages.languages[reduxLanguage].strategy.strategyShootOnSightOften

    let txtOffsideTrap = Languages.languages[reduxLanguage].strategy.strategyOffsideTrap
    let txtOffsideTrapYesButton = Languages.languages[reduxLanguage].strategy.strategyOffsideTrapYes
    let txtOffsideTrapNoButton = Languages.languages[reduxLanguage].strategy.strategyOffsideTrapNo

    let txtSelectCaptain = Languages.languages[reduxLanguage].strategy.strategySelectCaptain
    let txtUserPenalty = Languages.languages[reduxLanguage].strategy.strategyUserPenalty
    let txtUserFreekick = Languages.languages[reduxLanguage].strategy.strategyUserFreekick
    let txtTurnBackButton = Languages.languages[reduxLanguage].strategy.strategyTurnBack

    let scroll_captain_click1;
    let scroll_captain_click2;
    let scroll_captain_click3;
    let scroll_captain_click4;
    let scroll_captain_click5;
    let scroll_captain_click6;
    let scroll_captain_click7;
    let scroll_captain_click8;
    let scroll_captain_click9;
    let scroll_captain_click10;
    let scroll_captain_click11;

    let scroll_pen_click1;
    let scroll_pen_click2;
    let scroll_pen_click3;
    let scroll_pen_click4;
    let scroll_pen_click5;
    let scroll_pen_click6;
    let scroll_pen_click7;
    let scroll_pen_click8;
    let scroll_pen_click9;
    let scroll_pen_click10;
    let scroll_pen_click11;

    let scroll_freekick_click1;
    let scroll_freekick_click2;
    let scroll_freekick_click3;
    let scroll_freekick_click4;
    let scroll_freekick_click5;
    let scroll_freekick_click6;
    let scroll_freekick_click7;
    let scroll_freekick_click8;
    let scroll_freekick_click9;
    let scroll_freekick_click10;
    let scroll_freekick_click11;

    let t1_gk1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].name
    let t1_lb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].name
    let t1_cb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].name
    let t1_cb2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].name
    let t1_rb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].name
    let t1_dm1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].name
    let t1_cm1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].name
    let t1_cm2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].name
    let t1_lw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].name
    let t1_rw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].name
    let t1_st1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].name

    let t1_gk1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].surname
    let t1_lb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].surname
    let t1_cb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].surname
    let t1_cb2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].surname
    let t1_rb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].surname
    let t1_dm1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].surname
    let t1_cm1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].surname
    let t1_cm2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].surname
    let t1_lw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].surname
    let t1_rw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].surname
    let t1_st1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].surname

    let t2_gk2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].name
    let t2_lb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].name
    let t2_cb4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].name
    let t2_cb3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].name
    let t2_rb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].name
    let t2_dm2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].name
    let t2_cm4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].name
    let t2_cm3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].name
    let t2_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].name
    let t2_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].name
    let t2_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].name

    let t2_gk2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].surname
    let t2_lb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].surname
    let t2_cb4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].surname
    let t2_cb3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].surname
    let t2_rb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].surname
    let t2_dm2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].surname
    let t2_cm4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].surname
    let t2_cm3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].surname
    let t2_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].surname
    let t2_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].surname
    let t2_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].surname

    function ControlHomeAwaySideValue() {
        if (homeSideValue == false && awaySideValue == false) {
            return <Navigate to='/' />
        }
    }




    function GetTacticsButtonClick1() {
        tacticsButtonsClick1 = "✓"
        tacticsButtonsClick2 = " "
        tacticsButtonsClick3 = " "
        tacticsButtonsClick4 = " "
        tacticsButtonsClick5 = " "
    }

    function GetTacticsButtonClick2() {
        tacticsButtonsClick1 = " "
        tacticsButtonsClick2 = "✓"
        tacticsButtonsClick3 = " "
        tacticsButtonsClick4 = " "
        tacticsButtonsClick5 = " "
    }

    function GetTacticsButtonClick3() {
        tacticsButtonsClick1 = " "
        tacticsButtonsClick2 = " "
        tacticsButtonsClick3 = "✓"
        tacticsButtonsClick4 = " "
        tacticsButtonsClick5 = " "
    }

    function GetTacticsButtonClick4() {
        tacticsButtonsClick1 = " "
        tacticsButtonsClick2 = " "
        tacticsButtonsClick3 = " "
        tacticsButtonsClick4 = "✓"
        tacticsButtonsClick5 = " "
    }

    function GetTacticsButtonClick5() {
        tacticsButtonsClick1 = " "
        tacticsButtonsClick2 = " "
        tacticsButtonsClick3 = " "
        tacticsButtonsClick4 = " "
        tacticsButtonsClick5 = "✓"
    }

    function GetTacticsButtonValue1() {
        return dispatch(strategyTacticsButtonValue_1())
    }

    function GetTacticsButtonValue2() {
        return dispatch(strategyTacticsButtonValue_2())
    }

    function GetTacticsButtonValue3() {
        return dispatch(strategyTacticsButtonValue_3())
    }

    function GetTacticsButtonValue4() {
        return dispatch(strategyTacticsButtonValue_4())
    }

    function GetTacticsButtonValue5() {
        return dispatch(strategyTacticsButtonValue_5())
    }

    function ControlTacticsButtonsClicks() {
        if (strategyTacticsButtonValueId == 1) {
            return GetTacticsButtonClick1()
        } else if (strategyTacticsButtonValueId == 2) {
            return GetTacticsButtonClick2()
        } else if (strategyTacticsButtonValueId == 3) {
            return GetTacticsButtonClick3()
        } else if (strategyTacticsButtonValueId == 4) {
            return GetTacticsButtonClick4()
        } else if (strategyTacticsButtonValueId == 5) {
            return GetTacticsButtonClick5()
        }
    }




    function GetUnderstandDefenceButtonClick1() {
        defenceButtonsClick1 = "✓"
        defenceButtonsClick2 = " "
    }

    function GetUnderstandDefenceButtonClick2() {
        defenceButtonsClick1 = " "
        defenceButtonsClick2 = "✓"
    }

    function GetUnderstandDefenceButtonValue1() {
        return dispatch(strategyUnderstandDefenceButtonValue_1())
    }

    function GetUnderstandDefenceButtonValue2() {
        return dispatch(strategyUnderstandDefenceButtonValue_2())
    }

    function ControlUnderstandDefenceButtonsClicks() {
        if (understandDefenceButtonValueId == 1) {
            return GetUnderstandDefenceButtonClick1()
        } else if (understandDefenceButtonValueId == 2) {
            return GetUnderstandDefenceButtonClick2()
        }
    }




    function GetUnderstandPassButtonClick1() {
        passButtonsClick1 = "✓"
        passButtonsClick2 = " "
    }

    function GetUnderstandPassButtonClick2() {
        passButtonsClick1 = " "
        passButtonsClick2 = "✓"
    }

    function GetUnderstandPassButtonValue1() {
        return dispatch(strategyUnderstandPassButtonValue_1())
    }

    function GetUnderstandPassButtonValue2() {
        return dispatch(strategyUnderstandPassButtonValue_2())
    }

    function ControlUnderstandPassButtonsClicks() {
        if (understandPassButtonValueId == 1) {
            return GetUnderstandPassButtonClick1()
        } else if (understandPassButtonValueId == 2) {
            return GetUnderstandPassButtonClick2()
        }
    }




    function GetUnderstandShootButtonClick1() {
        shootButtonsClick1 = "✓"
        shootButtonsClick2 = " "
    }

    function GetUnderstandShootButtonClick2() {
        shootButtonsClick1 = " "
        shootButtonsClick2 = "✓"
    }

    function GetUnderstandShootButtonValue1() {
        return dispatch(strategyUnderstandShootButtonValue_1())
    }

    function GetUnderstandShootButtonValue2() {
        return dispatch(strategyUnderstandShootButtonValue_2())
    }

    function ControlUnderstandShootButtonsClicks() {
        if (understandShootButtonValueId == 1) {
            return GetUnderstandShootButtonClick1()
        } else if (understandShootButtonValueId == 2) {
            return GetUnderstandShootButtonClick2()
        }
    }




    function GetUnderstandOffsideButtonClick1() {
        offsideButtonsClick1 = "✓"
        offsideButtonsClick2 = " "
    }

    function GetUnderstandOffsideButtonClick2() {
        offsideButtonsClick1 = " "
        offsideButtonsClick2 = "✓"
    }

    function GetUnderstandOffsideButtonValue1() {
        return dispatch(strategyUnderstandOffsideButtonValue_1())
    }

    function GetUnderstandOffsideButtonValue2() {
        return dispatch(strategyUnderstandOffsideButtonValue_2())
    }

    function ControlUnderstandOffsideButtonsClicks() {
        if (understandOffsideButtonValueId == 1) {
            return GetUnderstandOffsideButtonClick1()
        } else if (understandOffsideButtonValueId == 2) {
            return GetUnderstandOffsideButtonClick2()
        }
    }



    function SetScrollCaptainClick1() {
        scroll_captain_click1 = "✓"
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick2() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = "✓"
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick3() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = "✓"
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick4() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = "✓"
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick5() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = "✓"
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick6() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = "✓"
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick7() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = "✓"
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick8() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = "✓"
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick9() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = "✓"
        scroll_captain_click10 = " "
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick10() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = "✓"
        scroll_captain_click11 = " "
    }

    function SetScrollCaptainClick11() {
        scroll_captain_click1 = " "
        scroll_captain_click2 = " "
        scroll_captain_click3 = " "
        scroll_captain_click4 = " "
        scroll_captain_click5 = " "
        scroll_captain_click6 = " "
        scroll_captain_click7 = " "
        scroll_captain_click8 = " "
        scroll_captain_click9 = " "
        scroll_captain_click10 = " "
        scroll_captain_click11 = "✓"
    }




    function SetScrollPenClick1() {
        scroll_pen_click1 = "✓"
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick2() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = "✓"
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick3() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = "✓"
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick4() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = "✓"
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick5() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = "✓"
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick6() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = "✓"
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick7() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = "✓"
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick8() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = "✓"
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick9() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = "✓"
        scroll_pen_click10 = " "
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick10() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = "✓"
        scroll_pen_click11 = " "
    }

    function SetScrollPenClick11() {
        scroll_pen_click1 = " "
        scroll_pen_click2 = " "
        scroll_pen_click3 = " "
        scroll_pen_click4 = " "
        scroll_pen_click5 = " "
        scroll_pen_click6 = " "
        scroll_pen_click7 = " "
        scroll_pen_click8 = " "
        scroll_pen_click9 = " "
        scroll_pen_click10 = " "
        scroll_pen_click11 = "✓"
    }













    function SetScrollFreekickClick1() {
        scroll_freekick_click1 = "✓"
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick2() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = "✓"
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick3() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = "✓"
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick4() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = "✓"
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick5() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = "✓"
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick6() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = "✓"
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick7() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = "✓"
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick8() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = "✓"
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick9() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = "✓"
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick10() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = "✓"
        scroll_freekick_click11 = " "
    }

    function SetScrollFreekickClick11() {
        scroll_freekick_click1 = " "
        scroll_freekick_click2 = " "
        scroll_freekick_click3 = " "
        scroll_freekick_click4 = " "
        scroll_freekick_click5 = " "
        scroll_freekick_click6 = " "
        scroll_freekick_click7 = " "
        scroll_freekick_click8 = " "
        scroll_freekick_click9 = " "
        scroll_freekick_click10 = " "
        scroll_freekick_click11 = "✓"
    }

    function GetScrollCaptainPlayers() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 1) {
                return SetScrollCaptainClick1()
            } else if (homeScrollCaptainPlayerValueId == 2) {
                return SetScrollCaptainClick2()
            } else if (homeScrollCaptainPlayerValueId == 3) {
                return SetScrollCaptainClick3()
            } else if (homeScrollCaptainPlayerValueId == 4) {
                return SetScrollCaptainClick4()
            } else if (homeScrollCaptainPlayerValueId == 5) {
                return SetScrollCaptainClick5()
            } else if (homeScrollCaptainPlayerValueId == 6) {
                return SetScrollCaptainClick6()
            } else if (homeScrollCaptainPlayerValueId == 7) {
                return SetScrollCaptainClick7()
            } else if (homeScrollCaptainPlayerValueId == 8) {
                return SetScrollCaptainClick8()
            } else if (homeScrollCaptainPlayerValueId == 9) {
                return SetScrollCaptainClick9()
            } else if (homeScrollCaptainPlayerValueId == 10) {
                return SetScrollCaptainClick10()
            } else if (homeScrollCaptainPlayerValueId == 11) {
                return SetScrollCaptainClick11()
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 1) {
                return SetScrollCaptainClick1()
            } else if (awayScrollCaptainPlayerValueId == 2) {
                return SetScrollCaptainClick2()
            } else if (awayScrollCaptainPlayerValueId == 3) {
                return SetScrollCaptainClick3()
            } else if (awayScrollCaptainPlayerValueId == 4) {
                return SetScrollCaptainClick4()
            } else if (awayScrollCaptainPlayerValueId == 5) {
                return SetScrollCaptainClick5()
            } else if (awayScrollCaptainPlayerValueId == 6) {
                return SetScrollCaptainClick6()
            } else if (awayScrollCaptainPlayerValueId == 7) {
                return SetScrollCaptainClick7()
            } else if (awayScrollCaptainPlayerValueId == 8) {
                return SetScrollCaptainClick8()
            } else if (awayScrollCaptainPlayerValueId == 9) {
                return SetScrollCaptainClick9()
            } else if (awayScrollCaptainPlayerValueId == 10) {
                return SetScrollCaptainClick10()
            } else if (awayScrollCaptainPlayerValueId == 11) {
                return SetScrollCaptainClick11()
            }
        }
    }

    function GetScrollPenPlayers() {
        if (homeSideValue == true) {
            if (homeScrollPenPlayerValueId == 1) {
                return SetScrollPenClick1()
            } else if (homeScrollPenPlayerValueId == 2) {
                return SetScrollPenClick2()
            } else if (homeScrollPenPlayerValueId == 3) {
                return SetScrollPenClick3()
            } else if (homeScrollPenPlayerValueId == 4) {
                return SetScrollPenClick4()
            } else if (homeScrollPenPlayerValueId == 5) {
                return SetScrollPenClick5()
            } else if (homeScrollPenPlayerValueId == 6) {
                return SetScrollPenClick6()
            } else if (homeScrollPenPlayerValueId == 7) {
                return SetScrollPenClick7()
            } else if (homeScrollPenPlayerValueId == 8) {
                return SetScrollPenClick8()
            } else if (homeScrollPenPlayerValueId == 9) {
                return SetScrollPenClick9()
            } else if (homeScrollPenPlayerValueId == 10) {
                return SetScrollPenClick10()
            } else if (homeScrollPenPlayerValueId == 11) {
                return SetScrollPenClick11()
            }
        } else if (awaySideValue == true) {
            if (awayScrollPenPlayerValueId == 1) {
                return SetScrollPenClick1()
            } else if (awayScrollPenPlayerValueId == 2) {
                return SetScrollPenClick2()
            } else if (awayScrollPenPlayerValueId == 3) {
                return SetScrollPenClick3()
            } else if (awayScrollPenPlayerValueId == 4) {
                return SetScrollPenClick4()
            } else if (awayScrollPenPlayerValueId == 5) {
                return SetScrollPenClick5()
            } else if (awayScrollPenPlayerValueId == 6) {
                return SetScrollPenClick6()
            } else if (awayScrollPenPlayerValueId == 7) {
                return SetScrollPenClick7()
            } else if (awayScrollPenPlayerValueId == 8) {
                return SetScrollPenClick8()
            } else if (awayScrollPenPlayerValueId == 9) {
                return SetScrollPenClick9()
            } else if (awayScrollPenPlayerValueId == 10) {
                return SetScrollPenClick10()
            } else if (awayScrollPenPlayerValueId == 11) {
                return SetScrollPenClick11()
            }
        }
    }

    function GetScrollFreekickPlayers() {
        if (homeSideValue == true) {
            if (homeScrollFreekickPlayerValueId == 1) {
                return SetScrollFreekickClick1()
            } else if (homeScrollFreekickPlayerValueId == 2) {
                return SetScrollFreekickClick2()
            } else if (homeScrollFreekickPlayerValueId == 3) {
                return SetScrollFreekickClick3()
            } else if (homeScrollFreekickPlayerValueId == 4) {
                return SetScrollFreekickClick4()
            } else if (homeScrollFreekickPlayerValueId == 5) {
                return SetScrollFreekickClick5()
            } else if (homeScrollFreekickPlayerValueId == 6) {
                return SetScrollFreekickClick6()
            } else if (homeScrollFreekickPlayerValueId == 7) {
                return SetScrollFreekickClick7()
            } else if (homeScrollFreekickPlayerValueId == 8) {
                return SetScrollFreekickClick8()
            } else if (homeScrollFreekickPlayerValueId == 9) {
                return SetScrollFreekickClick9()
            } else if (homeScrollFreekickPlayerValueId == 10) {
                return SetScrollFreekickClick10()
            } else if (homeScrollFreekickPlayerValueId == 11) {
                return SetScrollFreekickClick11()
            }
        } else if (awaySideValue == true) {
            if (awayScrollFreekickPlayerValueId == 1) {
                return SetScrollFreekickClick1()
            } else if (awayScrollFreekickPlayerValueId == 2) {
                return SetScrollFreekickClick2()
            } else if (awayScrollFreekickPlayerValueId == 3) {
                return SetScrollFreekickClick3()
            } else if (awayScrollFreekickPlayerValueId == 4) {
                return SetScrollFreekickClick4()
            } else if (awayScrollFreekickPlayerValueId == 5) {
                return SetScrollFreekickClick5()
            } else if (awayScrollFreekickPlayerValueId == 6) {
                return SetScrollFreekickClick6()
            } else if (awayScrollFreekickPlayerValueId == 7) {
                return SetScrollFreekickClick7()
            } else if (awayScrollFreekickPlayerValueId == 8) {
                return SetScrollFreekickClick8()
            } else if (awayScrollFreekickPlayerValueId == 9) {
                return SetScrollFreekickClick9()
            } else if (awayScrollFreekickPlayerValueId == 10) {
                return SetScrollFreekickClick10()
            } else if (awayScrollFreekickPlayerValueId == 11) {
                return SetScrollFreekickClick11()
            }
        }
    }

    function GetScrollCaptainValue1() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_1())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_1())
        }
    }

    function GetScrollCaptainValue2() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_2())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_2())
        }
    }

    function GetScrollCaptainValue3() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_3())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_3())
        }
    }

    function GetScrollCaptainValue4() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_4())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_4())
        }
    }

    function GetScrollCaptainValue5() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_5())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_5())
        }
    }

    function GetScrollCaptainValue6() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_6())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_6())
        }
    }

    function GetScrollCaptainValue7() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_7())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_7())
        }
    }

    function GetScrollCaptainValue8() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_8())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_8())
        }
    }

    function GetScrollCaptainValue9() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_9())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_9())
        }
    }

    function GetScrollCaptainValue10() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_10())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_10())
        }
    }

    function GetScrollCaptainValue11() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollCaptainPlayerValue_11())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollCaptainPlayerValue_11())
        }
    }





    function GetScrollPenValue1() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_1())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_1())
        }
    }

    function GetScrollPenValue2() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_2())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_2())
        }
    }

    function GetScrollPenValue3() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_3())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_3())
        }
    }

    function GetScrollPenValue4() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_4())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_4())
        }
    }

    function GetScrollPenValue5() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_5())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_5())
        }
    }

    function GetScrollPenValue6() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_6())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_6())
        }
    }

    function GetScrollPenValue7() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_7())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_7())
        }
    }

    function GetScrollPenValue8() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_8())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_8())
        }
    }

    function GetScrollPenValue9() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_9())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_9())
        }
    }

    function GetScrollPenValue10() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_10())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_10())
        }
    }

    function GetScrollPenValue11() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollPenPlayerValue_11())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollPenPlayerValue_11())
        }
    }





    function GetScrollFreekickValue1() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_1())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_1())
        }
    }

    function GetScrollFreekickValue2() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_2())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_2())
        }
    }

    function GetScrollFreekickValue3() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_3())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_3())
        }
    }

    function GetScrollFreekickValue4() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_4())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_4())
        }
    }

    function GetScrollFreekickValue5() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_5())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_5())
        }
    }

    function GetScrollFreekickValue6() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_6())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_6())
        }
    }

    function GetScrollFreekickValue7() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_7())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_7())
        }
    }

    function GetScrollFreekickValue8() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_8())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_8())
        }
    }

    function GetScrollFreekickValue9() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_9())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_9())
        }
    }

    function GetScrollFreekickValue10() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_10())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_10())
        }
    }

    function GetScrollFreekickValue11() {
        if (homeSideValue == true) {
            return dispatch(strategyHomeScrollFreekickPlayerValue_11())
        } else if (awaySideValue == true) {
            return dispatch(strategyAwayScrollFreekickPlayerValue_11())
        }
    }









    function GetScrollsName1() {
        if (homeSideValue == true) {
            return t1_gk1_name
        } else if (awaySideValue == true) {
            return t2_gk2_name
        }
    }

    function GetScrollsName2() {
        if (homeSideValue == true) {
            return t1_lb1_name
        } else if (awaySideValue == true) {
            return t2_lb2_name
        }
    }

    function GetScrollsName3() {
        if (homeSideValue == true) {
            return t1_cb1_name
        } else if (awaySideValue == true) {
            return t2_cb4_name
        }
    }

    function GetScrollsName4() {
        if (homeSideValue == true) {
            return t1_cb2_name
        } else if (awaySideValue == true) {
            return t2_cb3_name
        }
    }

    function GetScrollsName5() {
        if (homeSideValue == true) {
            return t1_rb1_name
        } else if (awaySideValue == true) {
            return t2_rb2_name
        }
    }

    function GetScrollsName6() {
        if (homeSideValue == true) {
            return t1_dm1_name
        } else if (awaySideValue == true) {
            return t2_dm2_name
        }
    }

    function GetScrollsName7() {
        if (homeSideValue == true) {
            return t1_cm1_name
        } else if (awaySideValue == true) {
            return t2_cm4_name
        }
    }

    function GetScrollsName8() {
        if (homeSideValue == true) {
            return t1_cm2_name
        } else if (awaySideValue == true) {
            return t2_cm3_name
        }
    }

    function GetScrollsName9() {
        if (homeSideValue == true) {
            return t1_lw1_name
        } else if (awaySideValue == true) {
            return t2_lw2_name
        }
    }

    function GetScrollsName10() {
        if (homeSideValue == true) {
            return t1_rw1_name
        } else if (awaySideValue == true) {
            return t2_rw2_name
        }
    }

    function GetScrollsName11() {
        if (homeSideValue == true) {
            return t1_st1_name
        } else if (awaySideValue == true) {
            return t2_st2_name
        }
    }

    function GetScrollsSurname1() {
        if (homeSideValue == true) {
            return t1_gk1_surname
        } else if (awaySideValue == true) {
            return t2_gk2_surname
        }
    }

    function GetScrollsSurname2() {
        if (homeSideValue == true) {
            return t1_lb1_surname
        } else if (awaySideValue == true) {
            return t2_lb2_surname
        }
    }

    function GetScrollsSurname3() {
        if (homeSideValue == true) {
            return t1_cb1_surname
        } else if (awaySideValue == true) {
            return t2_cb4_surname
        }
    }

    function GetScrollsSurname4() {
        if (homeSideValue == true) {
            return t1_cb2_surname
        } else if (awaySideValue == true) {
            return t2_cb3_surname
        }
    }

    function GetScrollsSurname5() {
        if (homeSideValue == true) {
            return t1_rb1_surname
        } else if (awaySideValue == true) {
            return t2_rb2_surname
        }
    }

    function GetScrollsSurname6() {
        if (homeSideValue == true) {
            return t1_dm1_surname
        } else if (awaySideValue == true) {
            return t2_dm2_surname
        }
    }

    function GetScrollsSurname7() {
        if (homeSideValue == true) {
            return t1_cm1_surname
        } else if (awaySideValue == true) {
            return t2_cm4_surname
        }
    }

    function GetScrollsSurname8() {
        if (homeSideValue == true) {
            return t1_cm2_surname
        } else if (awaySideValue == true) {
            return t2_cm3_surname
        }
    }

    function GetScrollsSurname9() {
        if (homeSideValue == true) {
            return t1_lw1_surname
        } else if (awaySideValue == true) {
            return t2_lw2_surname
        }
    }

    function GetScrollsSurname10() {
        if (homeSideValue == true) {
            return t1_rw1_surname
        } else if (awaySideValue == true) {
            return t2_rw2_surname
        }
    }

    function GetScrollsSurname11() {
        if (homeSideValue == true) {
            return t1_st1_surname
        } else if (awaySideValue == true) {
            return t2_st2_surname
        }
    }



    return (
        <div className='div-all-strategy'>
            {ControlHomeAwaySideValue()}
            {ControlTacticsButtonsClicks()}
            {ControlUnderstandDefenceButtonsClicks()}
            {ControlUnderstandPassButtonsClicks()}
            {ControlUnderstandShootButtonsClicks()}
            {ControlUnderstandOffsideButtonsClicks()}
            {GetScrollCaptainPlayers()}
            {GetScrollPenPlayers()}
            {GetScrollFreekickPlayers()}
            <div className='div1-up-strategy'>
                <div className='div-up-tactics1-strategy'>
                    <div className='div-tactics1-strategy1-name-Teamstrategy'>
                        {txtStrategy}
                    </div>
                    <div className='div-tactics1-strategy-1'>
                        <div className='div-tactics1-strategy-click'>
                            {tacticsButtonsClick1}
                        </div>
                        <div className='div-tactics1-strategy'>
                            <a><button onClick={GetTacticsButtonValue1} className='buttons-tactics-strategy'>{txtCounterAttackButton}</button></a>
                        </div>
                    </div>
                    <div className='div-tactics2-strategy-2'>
                        <div className='div-tactics2-strategy-click'>
                            {tacticsButtonsClick2}
                        </div>
                        <div className='div-tactics2-strategy'>
                            <a><button onClick={GetTacticsButtonValue2} className='buttons-tactics-strategy'>{txtTikiTakaButton}</button></a>
                        </div>
                    </div>
                    <div className='div-tactics3-strategy-3'>
                        <div className='div-tactics3-strategy-click'>
                            {tacticsButtonsClick3}
                        </div>
                        <div className='div-tactics3-strategy'>
                            <a><button onClick={GetTacticsButtonValue3} className='buttons-tactics-strategy'>{txtWingGameButton}</button></a>
                        </div>
                    </div>
                    <div className='div-tactics4-strategy-4'>
                        <div className='div-tactics4-strategy-click'>
                            {tacticsButtonsClick4}
                        </div>
                        <div className='div-tactics4-strategy'>
                            <a><button onClick={GetTacticsButtonValue4} className='buttons-tactics-strategy'>{txtDefensiveButton}</button></a>
                        </div>
                    </div>
                    <div className='div-tactics5-strategy-5'>
                        <div className='div-tactics5-strategy-click'>
                            {tacticsButtonsClick5}
                        </div>
                        <div className='div-tactics5-strategy'>
                            <a><button onClick={GetTacticsButtonValue5} className='buttons-tactics-strategy'>{txtBallPosessionButton}</button></a>
                        </div>
                    </div>
                </div>
                <div className='div-up-tactics2-strategy'>
                    <div className='div-tactics2-strategy1'>
                        <div className='div-tactics2-strategy1-name-div1'>
                            {txtDefenceUnderstanding}
                        </div>
                        <div className='div-tactics2-strategy1-buttons-div1'>
                            <div className='div-tactics2-strategy1-buttons1'>
                                <div className='div-tactics2-strategy1-click1'>
                                    {defenceButtonsClick1}
                                </div>
                                <div className='div-tactics2-strategy1-tactic1'>
                                    <a><button onClick={GetUnderstandDefenceButtonValue1} className='buttons-understand-strategy'>{txtDefenceUnderstandingSoftButton}</button></a>
                                </div>
                                <div className='div-tactics2-strategy1-click2'>
                                    {defenceButtonsClick2}
                                </div>
                                <div className='div-tactics2-strategy1-tactic2'>
                                    <a><button onClick={GetUnderstandDefenceButtonValue2} className='buttons-understand-strategy'>{txtDefenceUnderstandingAggressiveButton}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-tactics2-strategy2'>
                        <div className='div-tactics2-strategy2-name-div1'>
                            {txtPassUnderstanding}
                        </div>
                        <div className='div-tactics2-strategy2-buttons-div1'>
                            <div className='div-tactics2-strategy2-buttons1'>
                                <div className='div-tactics2-strategy2-click1'>
                                    {passButtonsClick1}
                                </div>
                                <div className='div-tactics2-strategy2-tactic1'>
                                    <a><button onClick={GetUnderstandPassButtonValue1} className='buttons-understand-strategy'>{txtPassUnderstandingShortButton}</button></a>
                                </div>
                                <div className='div-tactics2-strategy2-click2'>
                                    {passButtonsClick2}
                                </div>
                                <div className='div-tactics2-strategy2-tactic2'>
                                    <a><button onClick={GetUnderstandPassButtonValue2} className='buttons-understand-strategy'>{txtPassUnderstandingLongButton}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-up-tactics3-strategy'>
                    <div className='div-tactics3-strategy1'>
                        <div className='div-tactics3-strategy1-name-div1'>
                            {txtShootOnSight}
                        </div>
                        <div className='div-tactics3-strategy1-buttons-div1'>
                            <div className='div-tactics3-strategy1-buttons1'>
                                <div className='div-tactics3-strategy1-click1'>
                                    {shootButtonsClick1}
                                </div>
                                <div className='div-tactics3-strategy1-tactic1'>
                                    <a><button onClick={GetUnderstandShootButtonValue1} className='buttons-understand-strategy'>{txtShootOnSightSometimesButton}</button></a>
                                </div>
                                <div className='div-tactics3-strategy1-click2'>
                                    {shootButtonsClick2}
                                </div>
                                <div className='div-tactics3-strategy1-tactic2'>
                                    <a><button onClick={GetUnderstandShootButtonValue2} className='buttons-understand-strategy'>{txtShootOnSightOftenButton}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-tactics3-strategy2'>
                        <div className='div-tactics3-strategy2-name-div1'>
                            {txtOffsideTrap}
                        </div>
                        <div className='div-tactics3-strategy2-buttons-div1'>
                            <div className='div-tactics3-strategy2-buttons1'>
                                <div className='div-tactics3-strategy2-click1'>
                                    {offsideButtonsClick1}
                                </div>
                                <div className='div-tactics3-strategy2-tactic1'>
                                    <a><button onClick={GetUnderstandOffsideButtonValue1} className='buttons-understand-strategy'>{txtOffsideTrapYesButton}</button></a>
                                </div>
                                <div className='div-tactics3-strategy2-click2'>
                                    {offsideButtonsClick2}
                                </div>
                                <div className='div-tactics3-strategy2-tactic2'>
                                    <a><button onClick={GetUnderstandOffsideButtonValue2} className='buttons-understand-strategy'>{txtOffsideTrapNoButton}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className='div2-mid-strategy'>
                <div className='div-mid-scroll1-strategy'>
                    {txtSelectCaptain}
                    <div className='div-scroll1-strategy'>
                        <div onClick={GetScrollCaptainValue1} className='div-scroll1-player1-strategy'>
                            <div className='div-scroll1-click1-strategy'>
                                {scroll_captain_click1}
                            </div>
                            <div className='div-scroll1-name1-strategy'>
                                {GetScrollsName1()}
                            </div>
                            <div className='div-scroll1-surname1-strategy'>
                                {GetScrollsSurname1()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue2} className='div-scroll1-player2-strategy'>
                            <div className='div-scroll1-click2-strategy'>
                                {scroll_captain_click2}
                            </div>
                            <div className='div-scroll1-name2-strategy'>
                                {GetScrollsName2()}
                            </div>
                            <div className='div-scroll1-surname2-strategy'>
                                {GetScrollsSurname2()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue3} className='div-scroll1-player3-strategy'>
                            <div className='div-scroll1-click3-strategy'>
                                {scroll_captain_click3}
                            </div>
                            <div className='div-scroll1-name3-strategy'>
                                {GetScrollsName3()}
                            </div>
                            <div className='div-scroll1-surname3-strategy'>
                                {GetScrollsSurname3()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue4} className='div-scroll1-player4-strategy'>
                            <div className='div-scroll1-click4-strategy'>
                                {scroll_captain_click4}
                            </div>
                            <div className='div-scroll1-name4-strategy'>
                                {GetScrollsName4()}
                            </div>
                            <div className='div-scroll1-surname4-strategy'>
                                {GetScrollsSurname4()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue5} className='div-scroll1-player5-strategy'>
                            <div className='div-scroll1-click5-strategy'>
                                {scroll_captain_click5}
                            </div>
                            <div className='div-scroll1-name5-strategy'>
                                {GetScrollsName5()}
                            </div>
                            <div className='div-scroll1-surname5-strategy'>
                                {GetScrollsSurname5()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue6} className='div-scroll1-player6-strategy'>
                            <div className='div-scroll1-click6-strategy'>
                                {scroll_captain_click6}
                            </div>
                            <div className='div-scroll1-name6-strategy'>
                                {GetScrollsName6()}
                            </div>
                            <div className='div-scroll1-surname6-strategy'>
                                {GetScrollsSurname6()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue7} className='div-scroll1-player7-strategy'>
                            <div className='div-scroll1-click7-strategy'>
                                {scroll_captain_click7}
                            </div>
                            <div className='div-scroll1-name7-strategy'>
                                {GetScrollsName7()}
                            </div>
                            <div className='div-scroll1-surname7-strategy'>
                                {GetScrollsSurname7()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue8} className='div-scroll1-player8-strategy'>
                            <div className='div-scroll1-click8-strategy'>
                                {scroll_captain_click8}
                            </div>
                            <div className='div-scroll1-name8-strategy'>
                                {GetScrollsName8()}
                            </div>
                            <div className='div-scroll1-surname8-strategy'>
                                {GetScrollsSurname8()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue9} className='div-scroll1-player9-strategy'>
                            <div className='div-scroll1-click9-strategy'>
                                {scroll_captain_click9}
                            </div>
                            <div className='div-scroll1-name9-strategy'>
                                {GetScrollsName9()}
                            </div>
                            <div className='div-scroll1-surname9-strategy'>
                                {GetScrollsSurname9()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue10} className='div-scroll1-player10-strategy'>
                            <div className='div-scroll1-click10-strategy'>
                                {scroll_captain_click10}
                            </div>
                            <div className='div-scroll1-name10-strategy'>
                                {GetScrollsName10()}
                            </div>
                            <div className='div-scroll1-surname10-strategy'>
                                {GetScrollsSurname10()}
                            </div>
                        </div>
                        <div onClick={GetScrollCaptainValue11} className='div-scroll1-player11-strategy'>
                            <div className='div-scroll1-click11-strategy'>
                                {scroll_captain_click11}
                            </div>
                            <div className='div-scroll1-name11-strategy'>
                                {GetScrollsName11()}
                            </div>
                            <div className='div-scroll1-surname11-strategy'>
                                {GetScrollsSurname11()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-mid-scroll2-strategy'>
                    {txtUserPenalty}
                    <div className='div-scroll2-strategy'>
                        <div onClick={GetScrollPenValue1} className='div-scroll2-player1-strategy'>
                            <div className='div-scroll2-click1-strategy'>
                                {scroll_pen_click1}
                            </div>
                            <div className='div-scroll2-name1-strategy'>
                                {GetScrollsName1()}
                            </div>
                            <div className='div-scroll2-surname1-strategy'>
                                {GetScrollsSurname1()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue2} className='div-scroll2-player2-strategy'>
                            <div className='div-scroll2-click2-strategy'>
                                {scroll_pen_click2}
                            </div>
                            <div className='div-scroll2-name2-strategy'>
                                {GetScrollsName2()}
                            </div>
                            <div className='div-scroll2-surname2-strategy'>
                                {GetScrollsSurname2()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue3} className='div-scroll2-player3-strategy'>
                            <div className='div-scroll2-click3-strategy'>
                                {scroll_pen_click3}
                            </div>
                            <div className='div-scroll2-name3-strategy'>
                                {GetScrollsName3()}
                            </div>
                            <div className='div-scroll2-surname3-strategy'>
                                {GetScrollsSurname3()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue4} className='div-scroll2-player4-strategy'>
                            <div className='div-scroll2-click4-strategy'>
                                {scroll_pen_click4}
                            </div>
                            <div className='div-scroll2-name4-strategy'>
                                {GetScrollsName4()}
                            </div>
                            <div className='div-scroll2-surname4-strategy'>
                                {GetScrollsSurname4()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue5} className='div-scroll2-player5-strategy'>
                            <div className='div-scroll2-click5-strategy'>
                                {scroll_pen_click5}
                            </div>
                            <div className='div-scroll2-name5-strategy'>
                                {GetScrollsName5()}
                            </div>
                            <div className='div-scroll2-surname5-strategy'>
                                {GetScrollsSurname5()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue6} className='div-scroll2-player6-strategy'>
                            <div className='div-scroll2-click6-strategy'>
                                {scroll_pen_click6}
                            </div>
                            <div className='div-scroll2-name6-strategy'>
                                {GetScrollsName6()}
                            </div>
                            <div className='div-scroll2-surname6-strategy'>
                                {GetScrollsSurname6()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue7} className='div-scroll2-player7-strategy'>
                            <div className='div-scroll2-click7-strategy'>
                                {scroll_pen_click7}
                            </div>
                            <div className='div-scroll2-name7-strategy'>
                                {GetScrollsName7()}
                            </div>
                            <div className='div-scroll2-surname7-strategy'>
                                {GetScrollsSurname7()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue8} className='div-scroll2-player8-strategy'>
                            <div className='div-scroll2-click8-strategy'>
                                {scroll_pen_click8}
                            </div>
                            <div className='div-scroll2-name8-strategy'>
                                {GetScrollsName8()}
                            </div>
                            <div className='div-scroll2-surname8-strategy'>
                                {GetScrollsSurname8()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue9} className='div-scroll2-player9-strategy'>
                            <div className='div-scroll2-click9-strategy'>
                                {scroll_pen_click9}
                            </div>
                            <div className='div-scroll2-name9-strategy'>
                                {GetScrollsName9()}
                            </div>
                            <div className='div-scroll2-surname9-strategy'>
                                {GetScrollsSurname9()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue10} className='div-scroll2-player10-strategy'>
                            <div className='div-scroll2-click10-strategy'>
                                {scroll_pen_click10}
                            </div>
                            <div className='div-scroll2-name10-strategy'>
                                {GetScrollsName10()}
                            </div>
                            <div className='div-scroll2-surname10-strategy'>
                                {GetScrollsSurname10()}
                            </div>
                        </div>
                        <div onClick={GetScrollPenValue11} className='div-scroll2-player11-strategy'>
                            <div className='div-scroll2-click11-strategy'>
                                {scroll_pen_click11}
                            </div>
                            <div className='div-scroll2-name11-strategy'>
                                {GetScrollsName11()}
                            </div>
                            <div className='div-scroll2-surname11-strategy'>
                                {GetScrollsSurname11()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='div-mid-scroll3-strategy'>
                    {txtUserFreekick}
                    <div className='div-scroll3-strategy'>
                        <div onClick={GetScrollFreekickValue1} className='div-scroll3-player1-strategy'>
                            <div className='div-scroll3-click1-strategy'>
                                {scroll_freekick_click1}
                            </div>
                            <div className='div-scroll3-name1-strategy'>
                                {GetScrollsName1()}
                            </div>
                            <div className='div-scroll3-surname1-strategy'>
                                {GetScrollsSurname1()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue2} className='div-scroll3-player2-strategy'>
                            <div className='div-scroll3-click2-strategy'>
                                {scroll_freekick_click2}
                            </div>
                            <div className='div-scroll3-name2-strategy'>
                                {GetScrollsName2()}
                            </div>
                            <div className='div-scroll3-surname2-strategy'>
                                {GetScrollsSurname2()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue3} className='div-scroll3-player3-strategy'>
                            <div className='div-scroll3-click3-strategy'>
                                {scroll_freekick_click3}
                            </div>
                            <div className='div-scroll3-name3-strategy'>
                                {GetScrollsName3()}
                            </div>
                            <div className='div-scroll3-surname3-strategy'>
                                {GetScrollsSurname3()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue4} className='div-scroll3-player4-strategy'>
                            <div className='div-scroll3-click4-strategy'>
                                {scroll_freekick_click4}
                            </div>
                            <div className='div-scroll3-name4-strategy'>
                                {GetScrollsName4()}
                            </div>
                            <div className='div-scroll3-surname4-strategy'>
                                {GetScrollsSurname4()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue5} className='div-scroll3-player5-strategy'>
                            <div className='div-scroll3-click5-strategy'>
                                {scroll_freekick_click5}
                            </div>
                            <div className='div-scroll3-name5-strategy'>
                                {GetScrollsName5()}
                            </div>
                            <div className='div-scroll3-surname5-strategy'>
                                {GetScrollsSurname5()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue6} className='div-scroll3-player6-strategy'>
                            <div className='div-scroll3-click6-strategy'>
                                {scroll_freekick_click6}
                            </div>
                            <div className='div-scroll3-name6-strategy'>
                                {GetScrollsName6()}
                            </div>
                            <div className='div-scroll3-surname6-strategy'>
                                {GetScrollsSurname6()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue7} className='div-scroll3-player7-strategy'>
                            <div className='div-scroll3-click7-strategy'>
                                {scroll_freekick_click7}
                            </div>
                            <div className='div-scroll3-name7-strategy'>
                                {GetScrollsName7()}
                            </div>
                            <div className='div-scroll3-surname7-strategy'>
                                {GetScrollsSurname7()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue8} className='div-scroll3-player8-strategy'>
                            <div className='div-scroll3-click8-strategy'>
                                {scroll_freekick_click8}
                            </div>
                            <div className='div-scroll3-name8-strategy'>
                                {GetScrollsName8()}
                            </div>
                            <div className='div-scroll3-surname8-strategy'>
                                {GetScrollsSurname8()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue9} className='div-scroll3-player9-strategy'>
                            <div className='div-scroll3-click9-strategy'>
                                {scroll_freekick_click9}
                            </div>
                            <div className='div-scroll3-name9-strategy'>
                                {GetScrollsName9()}
                            </div>
                            <div className='div-scroll3-surname9-strategy'>
                                {GetScrollsSurname9()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue10} className='div-scroll3-player10-strategy'>
                            <div className='div-scroll3-click10-strategy'>
                                {scroll_freekick_click10}
                            </div>
                            <div className='div-scroll3-name10-strategy'>
                                {GetScrollsName10()}
                            </div>
                            <div className='div-scroll3-surname10-strategy'>
                                {GetScrollsName10()}
                            </div>
                        </div>
                        <div onClick={GetScrollFreekickValue11} className='div-scroll3-player11-strategy'>
                            <div className='div-scroll3-click11-strategy'>
                                {scroll_freekick_click11}
                            </div>
                            <div className='div-scroll3-name11-strategy'>
                                {GetScrollsName11()}
                            </div>
                            <div className='div-scroll3-surname11-strategy'>
                                {GetScrollsSurname11()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div3-down-strategy'>
                <Link to={'/gameplanmenu'}><button className='buttons-strategy'>{txtTurnBackButton}</button></Link>
            </div>
        </div>
    )
}

export default Strategy;
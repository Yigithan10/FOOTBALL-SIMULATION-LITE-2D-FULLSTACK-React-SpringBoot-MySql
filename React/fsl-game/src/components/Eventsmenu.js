import React from 'react'
import Languages from '../languages.json'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux'

function Eventsmenu() {

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
    );

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const homeTeamIndex_gk1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_gk1)
    const homeTeamIndex_lb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_lb1)
    const homeTeamIndex_cb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_cb1)
    const homeTeamIndex_cb2 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_cb2)
    const homeTeamIndex_rb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_rb1)
    const homeTeamIndex_dm1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_dm1)
    const homeTeamIndex_cm1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_cm1)
    const homeTeamIndex_cm2 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_cm2)
    const homeTeamIndex_lw1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_lw1)
    const homeTeamIndex_rw1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_rw1)
    const homeTeamIndex_st1 = useSelector(state => state.setHomeTeamGetGk1.homeTeam_st1)

    const homeTeamSaveIndex_gk1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_gk1)
    const homeTeamSaveIndex_lb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_lb1)
    const homeTeamSaveIndex_cb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_cb1)
    const homeTeamSaveIndex_cb2 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_cb2)
    const homeTeamSaveIndex_rb1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_rb1)
    const homeTeamSaveIndex_dm1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_dm1)
    const homeTeamSaveIndex_cm1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_cm1)
    const homeTeamSaveIndex_cm2 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_cm2)
    const homeTeamSaveIndex_lw1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_lw1)
    const homeTeamSaveIndex_rw1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_rw1)
    const homeTeamSaveIndex_st1 = useSelector(state => state.setHomeTeamGetGk1.homeTeamSaveValue_st1)

    const awayTeamIndex_gk2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_gk2)
    const awayTeamIndex_lb2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_lb2)
    const awayTeamIndex_cb4 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_cb4)
    const awayTeamIndex_cb3 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_cb3)
    const awayTeamIndex_rb2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_rb2)
    const awayTeamIndex_dm2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_dm2)
    const awayTeamIndex_cm4 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_cm4)
    const awayTeamIndex_cm3 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_cm3)
    const awayTeamIndex_rw2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_lw2)
    const awayTeamIndex_lw2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_rw2)
    const awayTeamIndex_st2 = useSelector(state => state.setHomeTeamGetGk1.awayTeam_st2)

    const awayTeamSaveIndex_gk2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_gk2)
    const awayTeamSaveIndex_lb2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_lb2)
    const awayTeamSaveIndex_cb4 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_cb4)
    const awayTeamSaveIndex_cb3 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_cb3)
    const awayTeamSaveIndex_rb2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_rb2)
    const awayTeamSaveIndex_dm2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_dm2)
    const awayTeamSaveIndex_cm4 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_cm4)
    const awayTeamSaveIndex_cm3 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_cm3)
    const awayTeamSaveIndex_rw2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_lw2)
    const awayTeamSaveIndex_lw2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_rw2)
    const awayTeamSaveIndex_st2 = useSelector(state => state.setHomeTeamGetGk1.awayTeamSaveValue_st2)

    const firsthalf_events_minutes1 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes1)
    const firsthalf_events_event1 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event1)
    const firsthalf_events_name1 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name1)
    const firsthalf_events_surname1 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname1)
    const firsthalf_events_team1 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team1)

    const firsthalf_events_minutes2 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes2)
    const firsthalf_events_event2 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event2)
    const firsthalf_events_name2 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name2)
    const firsthalf_events_surname2 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname2)
    const firsthalf_events_team2 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team2)

    const firsthalf_events_minutes3 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes3)
    const firsthalf_events_event3 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event3)
    const firsthalf_events_name3 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name3)
    const firsthalf_events_surname3 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname3)
    const firsthalf_events_team3 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team3)

    const firsthalf_events_minutes4 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes4)
    const firsthalf_events_event4 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event4)
    const firsthalf_events_name4 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name4)
    const firsthalf_events_surname4 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname4)
    const firsthalf_events_team4 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team4)

    const firsthalf_events_minutes5 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes5)
    const firsthalf_events_event5 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event5)
    const firsthalf_events_name5 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name5)
    const firsthalf_events_surname5 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname5)
    const firsthalf_events_team5 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team5)

    const firsthalf_events_minutes6 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes6)
    const firsthalf_events_event6 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event6)
    const firsthalf_events_name6 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name6)
    const firsthalf_events_surname6 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname6)
    const firsthalf_events_team6 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team6)

    const firsthalf_events_minutes7 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_minutes7)
    const firsthalf_events_event7 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_event7)
    const firsthalf_events_name7 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_name7)
    const firsthalf_events_surname7 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_surname7)
    const firsthalf_events_team7 = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_events_team7)

    const secondhalf_events_minutes1 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes1)
    const secondhalf_events_event1 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event1)
    const secondhalf_events_name1 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name1)
    const secondhalf_events_surname1 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname1)
    const secondhalf_events_team1 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team1)

    const secondhalf_events_minutes2 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes2)
    const secondhalf_events_event2 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event2)
    const secondhalf_events_name2 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name2)
    const secondhalf_events_surname2 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname2)
    const secondhalf_events_team2 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team2)

    const secondhalf_events_minutes3 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes3)
    const secondhalf_events_event3 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event3)
    const secondhalf_events_name3 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name3)
    const secondhalf_events_surname3 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname3)
    const secondhalf_events_team3 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team3)

    const secondhalf_events_minutes4 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes4)
    const secondhalf_events_event4 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event4)
    const secondhalf_events_name4 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name4)
    const secondhalf_events_surname4 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname4)
    const secondhalf_events_team4 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team4)

    const secondhalf_events_minutes5 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes5)
    const secondhalf_events_event5 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event5)
    const secondhalf_events_name5 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name5)
    const secondhalf_events_surname5 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname5)
    const secondhalf_events_team5 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team5)

    const secondhalf_events_minutes6 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes6)
    const secondhalf_events_event6 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event6)
    const secondhalf_events_name6 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name6)
    const secondhalf_events_surname6 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname6)
    const secondhalf_events_team6 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team6)

    const secondhalf_events_minutes7 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_minutes7)
    const secondhalf_events_event7 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_event7)
    const secondhalf_events_name7 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_name7)
    const secondhalf_events_surname7 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_surname7)
    const secondhalf_events_team7 = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_events_team7)

    const firsthalf_event1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event1_yellowCard)
    const firsthalf_event2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event2_yellowCard)
    const firsthalf_event3_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event3_yellowCard)
    const firsthalf_event4_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event4_yellowCard)
    const firsthalf_event5_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event5_yellowCard)
    const firsthalf_event6_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event6_yellowCard)
    const firsthalf_event7_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event7_yellowCard)

    const secondhalf_event1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event1_yellowCard)
    const secondhalf_event2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event2_yellowCard)
    const secondhalf_event3_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event3_yellowCard)
    const secondhalf_event4_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event4_yellowCard)
    const secondhalf_event5_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event5_yellowCard)
    const secondhalf_event6_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event6_yellowCard)
    const secondhalf_event7_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event7_yellowCard)

    const firsthalf_event1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event1_redCard)
    const firsthalf_event2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event2_redCard)
    const firsthalf_event3_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event3_redCard)
    const firsthalf_event4_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event4_redCard)
    const firsthalf_event5_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event5_redCard)
    const firsthalf_event6_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event6_redCard)
    const firsthalf_event7_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.firsthalf_event7_redCard)

    const secondhalf_event1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event1_redCard)
    const secondhalf_event2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event2_redCard)
    const secondhalf_event3_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event3_redCard)
    const secondhalf_event4_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event4_redCard)
    const secondhalf_event5_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event5_redCard)
    const secondhalf_event6_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event6_redCard)
    const secondhalf_event7_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.secondhalf_event7_redCard)

    let homeTeamName = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].teamName

    let awayTeamName = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].teamName

    let txtEventsButton = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuEvents
    let txtEventsFirstHalf = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuEventsFirstHalf
    let txtEventsSecondHalf = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuEventsSecondHalf

    const t1_gk1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].name
    const t1_lb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].name
    const t1_cb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].name
    const t1_cb2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].name
    const t1_rb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].name
    const t1_dm1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].name
    const t1_cm1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].name
    const t1_cm2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].name
    const t1_lw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].name
    const t1_rw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].name
    const t1_st1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].name

    const t1_gk1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].surname
    const t1_lb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].surname
    const t1_cb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].surname
    const t1_cb2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].surname
    const t1_rb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].surname
    const t1_dm1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].surname
    const t1_cm1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].surname
    const t1_cm2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].surname
    const t1_lw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].surname
    const t1_rw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].surname
    const t1_st1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].surname

    const t2_gk2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].name
    const t2_lb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].name
    const t2_cb4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].name
    const t2_cb3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].name
    const t2_rb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].name
    const t2_dm2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].name
    const t2_cm4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].name
    const t2_cm3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].name
    const t2_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].name
    const t2_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].name
    const t2_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].name

    const t2_gk2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].surname
    const t2_lb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].surname
    const t2_cb4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].surname
    const t2_cb3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].surname
    const t2_rb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].surname
    const t2_dm2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].surname
    const t2_cm4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].surname
    const t2_cm3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].surname
    const t2_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].surname
    const t2_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].surname
    const t2_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].surname


    let dispatch = useDispatch()

    function GetRenderFirsthalf_yellowCard1() {
        if (firsthalf_event1_yellowCard == true) {
            return (
                <div className='div-mid-event1-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard1() {
        if (firsthalf_event1_redCard == true) {
            return (
                <div className='div-mid-event1-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard2() {
        if (firsthalf_event2_yellowCard == true) {
            return (
                <div className='div-mid-event2-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard2() {
        if (firsthalf_event2_redCard == true) {
            return (
                <div className='div-mid-event2-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard3() {
        if (firsthalf_event3_yellowCard == true) {
            return (
                <div className='div-mid-event3-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard3() {
        if (firsthalf_event3_redCard == true) {
            return (
                <div className='div-mid-event3-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard4() {
        if (firsthalf_event4_yellowCard == true) {
            return (
                <div className='div-mid-event4-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard4() {
        if (firsthalf_event4_redCard == true) {
            return (
                <div className='div-mid-event4-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard5() {
        if (firsthalf_event5_yellowCard == true) {
            return (
                <div className='div-mid-event5-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard5() {
        if (firsthalf_event5_redCard == true) {
            return (
                <div className='div-mid-event5-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard6() {
        if (firsthalf_event6_yellowCard == true) {
            return (
                <div className='div-mid-event6-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard6() {
        if (firsthalf_event6_redCard == true) {
            return (
                <div className='div-mid-event6-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_yellowCard7() {
        if (firsthalf_event7_yellowCard == true) {
            return (
                <div className='div-mid-event7-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderFirsthalf_redCard7() {
        if (firsthalf_event7_redCard == true) {
            return (
                <div className='div-mid-event7-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard1() {
        if (secondhalf_event1_yellowCard == true) {
            return (
                <div className='div-mid-event8-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard1() {
        if (secondhalf_event1_redCard == true) {
            return (
                <div className='div-mid-event8-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard2() {
        if (secondhalf_event2_yellowCard == true) {
            return (
                <div className='div-mid-event9-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard2() {
        if (secondhalf_event2_redCard == true) {
            return (
                <div className='div-mid-event9-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard3() {
        if (secondhalf_event3_yellowCard == true) {
            return (
                <div className='div-mid-event10-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard3() {
        if (secondhalf_event3_redCard == true) {
            return (
                <div className='div-mid-event10-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard4() {
        if (secondhalf_event4_yellowCard == true) {
            return (
                <div className='div-mid-event11-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard4() {
        if (secondhalf_event4_redCard == true) {
            return (
                <div className='div-mid-event11-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard5() {
        if (secondhalf_event5_yellowCard == true) {
            return (
                <div className='div-mid-event12-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard5() {
        if (secondhalf_event5_redCard == true) {
            return (
                <div className='div-mid-event12-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard6() {
        if (secondhalf_event6_yellowCard == true) {
            return (
                <div className='div-mid-event13-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard6() {
        if (secondhalf_event6_redCard == true) {
            return (
                <div className='div-mid-event13-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_yellowCard7() {
        if (secondhalf_event7_yellowCard == true) {
            return (
                <div className='div-mid-event14-yellowCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function GetRenderSecondhalf_redCard7() {
        if (secondhalf_event7_redCard == true) {
            return (
                <div className='div-mid-event14-redCard-eventsmenu'>

                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    function RenderEventTeamName1() {
        if (firsthalf_events_team1 == 0) {
            return " "
        } else if (firsthalf_events_team1 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team1 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName2() {
        if (firsthalf_events_team2 == 0) {
            return " "
        } else if (firsthalf_events_team2 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team2 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName3() {
        if (firsthalf_events_team3 == 0) {
            return " "
        } else if (firsthalf_events_team3 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team3 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName4() {
        if (firsthalf_events_team4 == 0) {
            return " "
        } else if (firsthalf_events_team4 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team4 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName5() {
        if (firsthalf_events_team5 == 0) {
            return " "
        } else if (firsthalf_events_team5 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team5 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName6() {
        if (firsthalf_events_team6 == 0) {
            return " "
        } else if (firsthalf_events_team6 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team6 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName7() {
        if (firsthalf_events_team7 == 0) {
            return " "
        } else if (firsthalf_events_team7 == 1) {
            return homeTeamName
        } else if (firsthalf_events_team7 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName8() {
        if (secondhalf_events_team1 == 0) {
            return " "
        } else if (secondhalf_events_team1 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team1 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName9() {
        if (secondhalf_events_team2 == 0) {
            return " "
        } else if (secondhalf_events_team2 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team2 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName10() {
        if (secondhalf_events_team3 == 0) {
            return " "
        } else if (secondhalf_events_team3 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team3 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName11() {
        if (secondhalf_events_team4 == 0) {
            return " "
        } else if (secondhalf_events_team4 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team4 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName12() {
        if (secondhalf_events_team5 == 0) {
            return " "
        } else if (secondhalf_events_team5 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team5 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName13() {
        if (secondhalf_events_team6 == 0) {
            return " "
        } else if (secondhalf_events_team6 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team6 == 2) {
            return awayTeamName
        }
    }

    function RenderEventTeamName14() {
        if (secondhalf_events_team7 == 0) {
            return " "
        } else if (secondhalf_events_team7 == 1) {
            return homeTeamName
        } else if (secondhalf_events_team7 == 2) {
            return awayTeamName
        }
    }






    let firsthalf_event1_name
    let firsthalf_event1_surname

    let firsthalf_event2_name
    let firsthalf_event2_surname

    let firsthalf_event3_name
    let firsthalf_event3_surname

    let firsthalf_event4_name
    let firsthalf_event4_surname

    let firsthalf_event5_name
    let firsthalf_event5_surname

    let firsthalf_event6_name
    let firsthalf_event6_surname

    let firsthalf_event7_name
    let firsthalf_event7_surname

    let secondhalf_event1_name
    let secondhalf_event1_surname

    let secondhalf_event2_name
    let secondhalf_event2_surname

    let secondhalf_event3_name
    let secondhalf_event3_surname

    let secondhalf_event4_name
    let secondhalf_event4_surname

    let secondhalf_event5_name
    let secondhalf_event5_surname

    let secondhalf_event6_name
    let secondhalf_event6_surname

    let secondhalf_event7_name
    let secondhalf_event7_surname

    function GetRenderEventsFirsthalfName1() {
        if (firsthalf_events_name1 == 0) {
            return " "
        } else if (firsthalf_events_name1 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event1_name
            }
        } else if (firsthalf_events_name1 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event1_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname1() {
        if (firsthalf_events_surname1 == 0) {
            return " "
        } else if (firsthalf_events_surname1 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event1_surname
            }
        } else if (firsthalf_events_surname1 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event1_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName2() {
        if (firsthalf_events_name2 == 0) {
            return " "
        } else if (firsthalf_events_name2 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event2_name
            }
        } else if (firsthalf_events_name2 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event2_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname2() {
        if (firsthalf_events_surname2 == 0) {
            return " "
        } else if (firsthalf_events_surname2 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event2_surname
            }
        } else if (firsthalf_events_surname2 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event2_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName3() {
        if (firsthalf_events_name3 == 0) {
            return " "
        } else if (firsthalf_events_name3 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event3_name
            }
        } else if (firsthalf_events_name3 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event3_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname3() {
        if (firsthalf_events_surname3 == 0) {
            return " "
        } else if (firsthalf_events_surname3 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event3_surname
            }
        } else if (firsthalf_events_surname3 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event3_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName4() {
        if (firsthalf_events_name4 == 0) {
            return " "
        } else if (firsthalf_events_name4 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event4_name
            }
        } else if (firsthalf_events_name4 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event4_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname4() {
        if (firsthalf_events_surname4 == 0) {
            return " "
        } else if (firsthalf_events_surname4 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event4_surname
            }
        } else if (firsthalf_events_surname4 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event4_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName5() {
        if (firsthalf_events_name5 == 0) {
            return " "
        } else if (firsthalf_events_name5 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event5_name
            }
        } else if (firsthalf_events_name5 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event5_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname5() {
        if (firsthalf_events_surname5 == 0) {
            return " "
        } else if (firsthalf_events_surname5 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event5_surname
            }
        } else if (firsthalf_events_surname5 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event5_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName6() {
        if (firsthalf_events_name6 == 0) {
            return " "
        } else if (firsthalf_events_name6 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event6_name
            }
        } else if (firsthalf_events_name6 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event6_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname6() {
        if (firsthalf_events_surname6 == 0) {
            return " "
        } else if (firsthalf_events_surname6 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event6_surname
            }
        } else if (firsthalf_events_surname6 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event6_surname
            }
        }
    }




    function GetRenderEventsFirsthalfName7() {
        if (firsthalf_events_name7 == 0) {
            return " "
        } else if (firsthalf_events_name7 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                firsthalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return firsthalf_event7_name
            }
        } else if (firsthalf_events_name7 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                firsthalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return firsthalf_event7_name
            }
        }
    }

    function GetRenderEventsFirsthalfSurname7() {
        if (firsthalf_events_surname7 == 0) {
            return " "
        } else if (firsthalf_events_surname7 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return firsthalf_event7_surname
            }
        } else if (firsthalf_events_surname7 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                firsthalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return firsthalf_event7_surname
            }
        }
    }










    function GetRenderEventsSecondhalfName1() {
        if (secondhalf_events_name1 == 0) {
            return " "
        } else if (secondhalf_events_name1 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event1_name
            }
        } else if (secondhalf_events_name1 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event1_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname1() {
        if (secondhalf_events_surname1 == 0) {
            return " "
        } else if (secondhalf_events_surname1 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname1 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event2_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName2() {
        if (secondhalf_events_name2 == 0) {
            return " "
        } else if (secondhalf_events_name2 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event2_name
            }
        } else if (secondhalf_events_name2 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event2_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname2() {
        if (secondhalf_events_surname2 == 0) {
            return " "
        } else if (secondhalf_events_surname2 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event2_surname
            }
        } else if (secondhalf_events_surname2 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event2_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName3() {
        if (secondhalf_events_name3 == 0) {
            return " "
        } else if (secondhalf_events_name3 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event3_name
            }
        } else if (secondhalf_events_name3 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event3_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname3() {
        if (secondhalf_events_surname3 == 0) {
            return " "
        } else if (secondhalf_events_surname3 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event3_surname
            }
        } else if (secondhalf_events_surname3 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event3_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName4() {
        if (secondhalf_events_name4 == 0) {
            return " "
        } else if (secondhalf_events_name4 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event4_name
            }
        } else if (secondhalf_events_name4 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event4_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname4() {
        if (secondhalf_events_surname4 == 0) {
            return " "
        } else if (secondhalf_events_surname4 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event4_surname
            }
        } else if (secondhalf_events_surname4 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event4_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName5() {
        if (secondhalf_events_name5 == 0) {
            return " "
        } else if (secondhalf_events_name5 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event5_name
            }
        } else if (secondhalf_events_name5 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event5_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname5() {
        if (secondhalf_events_surname5 == 0) {
            return " "
        } else if (secondhalf_events_surname5 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event5_surname
            }
        } else if (secondhalf_events_surname5 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event5_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName6() {
        if (secondhalf_events_name6 == 0) {
            return " "
        } else if (secondhalf_events_name6 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event6_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event6_name
            }
        } else if (secondhalf_events_name6 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event6_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event6_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname6() {
        if (secondhalf_events_surname6 == 0) {
            return " "
        } else if (secondhalf_events_surname6 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event6_surname
            }
        } else if (secondhalf_events_surname6 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event6_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event6_surname
            }
        }
    }




    function GetRenderEventsSecondhalfName7() {
        if (secondhalf_events_name7 == 0) {
            return " "
        } else if (secondhalf_events_name7 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_name
            } else {
                secondhalf_event7_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].name
                return secondhalf_event7_name
            }
        } else if (secondhalf_events_name7 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_name
            } else {
                secondhalf_event7_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].name
                return secondhalf_event7_name
            }
        }
    }

    function GetRenderEventsSecondhalfSurname7() {
        if (secondhalf_events_surname7 == 0) {
            return " "
        } else if (secondhalf_events_surname7 == 1_1) {
            if (homeTeamSaveIndex_gk1 == homeTeamIndex_gk1) {
                return t1_gk1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_gk1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_2) {
            if (homeTeamSaveIndex_lb1 == homeTeamIndex_lb1) {
                return t1_lb1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lb1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_3) {
            if (homeTeamSaveIndex_cb1 == homeTeamIndex_cb1) {
                return t1_cb1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_4) {
            if (homeTeamSaveIndex_cb2 == homeTeamIndex_cb2) {
                return t1_cb2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cb2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_5) {
            if (homeTeamSaveIndex_rb1 == homeTeamIndex_rb1) {
                return t1_rb1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rb1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_6) {
            if (homeTeamSaveIndex_dm1 == homeTeamIndex_dm1) {
                return t1_dm1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_dm1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_7) {
            if (homeTeamSaveIndex_cm1 == homeTeamIndex_cm1) {
                return t1_cm1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_8) {
            if (homeTeamSaveIndex_cm2 == homeTeamIndex_cm2) {
                return t1_cm2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_cm2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_9) {
            if (homeTeamSaveIndex_lw1 == homeTeamIndex_lw1) {
                return t1_lw1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_lw1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_10) {
            if (homeTeamSaveIndex_rw1 == homeTeamIndex_rw1) {
                return t1_rw1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_rw1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 1_11) {
            if (homeTeamSaveIndex_st1 == homeTeamIndex_st1) {
                return t1_st1_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamSaveIndex_st1].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_1) {
            if (awayTeamSaveIndex_gk2 == awayTeamIndex_gk2) {
                return t2_gk2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_gk2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_2) {
            if (awayTeamSaveIndex_lb2 == awayTeamIndex_lb2) {
                return t2_lb2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lb2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_3) {
            if (awayTeamSaveIndex_cb4 == awayTeamIndex_cb4) {
                return t2_cb4_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb4].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_4) {
            if (awayTeamSaveIndex_cb3 == awayTeamIndex_cb3) {
                return t2_cb3_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cb3].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_5) {
            if (awayTeamSaveIndex_rb2 == awayTeamIndex_rb2) {
                return t2_rb2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rb2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_6) {
            if (awayTeamSaveIndex_dm2 == awayTeamIndex_dm2) {
                return t2_dm2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_dm2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_7) {
            if (awayTeamSaveIndex_cm4 == awayTeamIndex_cm4) {
                return t2_cm4_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm4].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_8) {
            if (awayTeamSaveIndex_cm3 == awayTeamIndex_cm3) {
                return t2_cm3_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_cm3].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_9) {
            if (awayTeamSaveIndex_lw2 == awayTeamIndex_lw2) {
                return t2_lw2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_lw2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_10) {
            if (awayTeamSaveIndex_rw2 == awayTeamIndex_rw2) {
                return t2_rw2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_rw2].surname
                return secondhalf_event7_surname
            }
        } else if (secondhalf_events_surname7 == 2_11) {
            if (awayTeamSaveIndex_st2 == awayTeamIndex_st2) {
                return t2_st2_surname
            } else {
                secondhalf_event7_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamSaveIndex_st2].surname
                return secondhalf_event7_surname
            }
        }
    }



    return (
        <div>
            <div className='div-mid-firsthalf-eventsmenu'>
                <div className='div-mid-txt-first-eventsmenu'>
                    {txtEventsFirstHalf}
                </div>
                <div className='div-mid-event1-first-eventsmenu'>
                    <div className='div-mid-event1-firstdk-eventsmenu'>
                        {firsthalf_events_minutes1}
                    </div>
                    <div className='div-mid-event1-firsteventBox-eventsmenu'>
                        <div className='div-mid-event1-CardsBox-eventsmenu'>
                            <div className='div-mid-event1-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard1()}
                            </div>
                            <div className='div-mid-event1-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard1()}
                            </div>
                        </div>
                        <div className='div-mid-event1-firstevent-eventsmenu'>
                            {firsthalf_events_event1}
                        </div>
                    </div>
                    <div className='div-mid-event1-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName1()}
                    </div>
                    <div className='div-mid-event1-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event1-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname1()}
                    </div>
                    <div className='div-mid-event1-firstteam-eventsmenu'>
                        {RenderEventTeamName1()}
                    </div>
                </div>
                <div className='div-mid-event2-first-eventsmenu'>
                    <div className='div-mid-event2-firstdk-eventsmenu'>
                        {firsthalf_events_minutes2}
                    </div>
                    <div className='div-mid-event2-firsteventBox-eventsmenu'>
                        <div className='div-mid-event2-CardsBox-eventsmenu'>
                            <div className='div-mid-event2-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard2()}
                            </div>
                            <div className='div-mid-event2-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard2()}
                            </div>
                        </div>
                        <div className='div-mid-event2-firstevent-eventsmenu'>
                            {firsthalf_events_event2}
                        </div>
                    </div>
                    <div className='div-mid-event2-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName2()}
                    </div>
                    <div className='div-mid-event2-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event2-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname2()}
                    </div>
                    <div className='div-mid-event2-firstteam-eventsmenu'>
                        {RenderEventTeamName2()}
                    </div>
                </div>
                <div className='div-mid-event3-first-eventsmenu'>
                    <div className='div-mid-event3-firstdk-eventsmenu'>
                        {firsthalf_events_minutes3}
                    </div>
                    <div className='div-mid-event3-firsteventBox-eventsmenu'>
                        <div className='div-mid-event3-CardsBox-eventsmenu'>
                            <div className='div-mid-event3-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard3()}
                            </div>
                            <div className='div-mid-event3-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard3()}
                            </div>
                        </div>
                        <div className='div-mid-event3-firstevent-eventsmenu'>
                            {firsthalf_events_event3}
                        </div>
                    </div>
                    <div className='div-mid-event3-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName3()}
                    </div>
                    <div className='div-mid-event3-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event3-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname3()}
                    </div>
                    <div className='div-mid-event3-firstteam-eventsmenu'>
                        {RenderEventTeamName3()}
                    </div>
                </div>
                <div className='div-mid-event4-first-eventsmenu'>
                    <div className='div-mid-event4-firstdk-eventsmenu'>
                        {firsthalf_events_minutes4}
                    </div>
                    <div className='div-mid-event4-firsteventBox-eventsmenu'>
                        <div className='div-mid-event4-CardsBox-eventsmenu'>
                            <div className='div-mid-event4-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard4()}
                            </div>
                            <div className='div-mid-event4-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard4()}
                            </div>
                        </div>
                        <div className='div-mid-event4-firstevent-eventsmenu'>
                            {firsthalf_events_event4}
                        </div>
                    </div>
                    <div className='div-mid-event4-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName4()}
                    </div>
                    <div className='div-mid-event4-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event4-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname4()}
                    </div>
                    <div className='div-mid-event4-firstteam-eventsmenu'>
                        {RenderEventTeamName4()}
                    </div>
                </div>
                <div className='div-mid-event5-first-eventsmenu'>
                    <div className='div-mid-event5-firstdk-eventsmenu'>
                        {firsthalf_events_minutes5}
                    </div>
                    <div className='div-mid-event5-firsteventBox-eventsmenu'>
                        <div className='div-mid-event5-CardsBox-eventsmenu'>
                            <div className='div-mid-event5-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard5()}
                            </div>
                            <div className='div-mid-event5-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard5()}
                            </div>
                        </div>
                        <div className='div-mid-event5-firstevent-eventsmenu'>
                            {firsthalf_events_event5}
                        </div>
                    </div>
                    <div className='div-mid-event5-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName5()}
                    </div>
                    <div className='div-mid-event5-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event5-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname5()}
                    </div>
                    <div className='div-mid-event5-firstteam-eventsmenu'>
                        {RenderEventTeamName5()}
                    </div>
                </div>
                <div className='div-mid-event6-first-eventsmenu'>
                    <div className='div-mid-event6-firstdk-eventsmenu'>
                        {firsthalf_events_minutes6}
                    </div>
                    <div className='div-mid-event6-firsteventBox-eventsmenu'>
                        <div className='div-mid-event6-CardsBox-eventsmenu'>
                            <div className='div-mid-event6-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard6()}
                            </div>
                            <div className='div-mid-event6-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard6()}
                            </div>
                        </div>
                        <div className='div-mid-event6-firstevent-eventsmenu'>
                            {firsthalf_events_event6}
                        </div>
                    </div>
                    <div className='div-mid-event6-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName6()}
                    </div>
                    <div className='div-mid-event6-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event6-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname6()}
                    </div>
                    <div className='div-mid-event6-firstteam-eventsmenu'>
                        {RenderEventTeamName6()}
                    </div>
                </div>
                <div className='div-mid-event7-first-eventsmenu'>
                    <div className='div-mid-event7-firstdk-eventsmenu'>
                        {firsthalf_events_minutes7}
                    </div>
                    <div className='div-mid-event7-firsteventBox-eventsmenu'>
                        <div className='div-mid-event7-CardsBox-eventsmenu'>
                            <div className='div-mid-event7-yellowCardBox-eventsmenu'>
                                {GetRenderFirsthalf_yellowCard7()}
                            </div>
                            <div className='div-mid-event6-redCardBox-eventsmenu'>
                                {GetRenderFirsthalf_redCard7()}
                            </div>
                        </div>
                        <div className='div-mid-event7-firstevent-eventsmenu'>
                            {firsthalf_events_event7}
                        </div>
                    </div>
                    <div className='div-mid-event7-firstname-eventsmenu'>
                        {GetRenderEventsFirsthalfName7()}
                    </div>
                    <div className='div-mid-event7-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event7-firstsurname-eventsmenu'>
                        {GetRenderEventsFirsthalfSurname7()}
                    </div>
                    <div className='div-mid-event7-firstteam-eventsmenu'>
                        {RenderEventTeamName7()}
                    </div>
                </div>
            </div>
            <div className='div-mid-secondhalf-eventsmenu'>
                <div className='div-mid-txt-second-eventsmenu'>
                    {txtEventsSecondHalf}
                </div>
                <div className='div-mid-event1-second-eventsmenu'>
                    <div className='div-mid-event1-seconddk-eventsmenu'>
                        {secondhalf_events_minutes1}
                    </div>
                    <div className='div-mid-event1-secondeventBox-eventsmenu'>
                        <div className='div-mid-event8-CardsBox-eventsmenu'>
                            <div className='div-mid-event8-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard1()}
                            </div>
                            <div className='div-mid-event8-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard1()}
                            </div>
                        </div>
                        <div className='div-mid-event1-secondevent-eventsmenu'>
                            {secondhalf_events_event1}
                        </div>
                    </div>
                    <div className='div-mid-event1-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName1()}
                    </div>
                    <div className='div-mid-event8-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event1-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname1()}
                    </div>
                    <div className='div-mid-event1-secondteam-eventsmenu'>
                        {RenderEventTeamName8()}
                    </div>
                </div>
                <div className='div-mid-event2-second-eventsmenu'>
                    <div className='div-mid-event2-seconddk-eventsmenu'>
                        {secondhalf_events_minutes2}
                    </div>
                    <div className='div-mid-event2-secondeventBox-eventsmenu'>
                        <div className='div-mid-event9-CardsBox-eventsmenu'>
                            <div className='div-mid-event9-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard2()}
                            </div>
                            <div className='div-mid-event9-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard2()}
                            </div>
                        </div>
                        <div className='div-mid-event2-secondevent-eventsmenu'>
                            {secondhalf_events_event2}
                        </div>
                    </div>
                    <div className='div-mid-event2-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName2()}
                    </div>
                    <div className='div-mid-event9-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event2-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname2()}
                    </div>
                    <div className='div-mid-event2-secondteam-eventsmenu'>
                        {RenderEventTeamName9()}
                    </div>
                </div>
                <div className='div-mid-event3-second-eventsmenu'>
                    <div className='div-mid-event3-seconddk-eventsmenu'>
                        {secondhalf_events_minutes3}
                    </div>
                    <div className='div-mid-event3-secondeventBox-eventsmenu'>
                        <div className='div-mid-event10-CardsBox-eventsmenu'>
                            <div className='div-mid-event10-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard3()}
                            </div>
                            <div className='div-mid-event10-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard3()}
                            </div>
                        </div>
                        <div className='div-mid-event3-secondevent-eventsmenu'>
                            {secondhalf_events_event3}
                        </div>
                    </div>
                    <div className='div-mid-event3-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName3()}
                    </div>
                    <div className='div-mid-event10-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event3-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname3()}
                    </div>
                    <div className='div-mid-event3-secondteam-eventsmenu'>
                        {RenderEventTeamName10()}
                    </div>
                </div>
                <div className='div-mid-event4-second-eventsmenu'>
                    <div className='div-mid-event4-seconddk-eventsmenu'>
                        {secondhalf_events_minutes4}
                    </div>
                    <div className='div-mid-event4-secondeventBox-eventsmenu'>
                        <div className='div-mid-event11-CardsBox-eventsmenu'>
                            <div className='div-mid-event11-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard4()}
                            </div>
                            <div className='div-mid-event11-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard4()}
                            </div>
                        </div>
                        <div className='div-mid-event4-secondevent-eventsmenu'>
                            {secondhalf_events_event4}
                        </div>
                    </div>
                    <div className='div-mid-event4-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName4()}
                    </div>
                    <div className='div-mid-event11-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event4-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname4()}
                    </div>
                    <div className='div-mid-event4-secondteam-eventsmenu'>
                        {RenderEventTeamName11()}
                    </div>
                </div>
                <div className='div-mid-event5-second-eventsmenu'>
                    <div className='div-mid-event5-seconddk-eventsmenu'>
                        {secondhalf_events_minutes5}
                    </div>
                    <div className='div-mid-event5-secondeventBox-eventsmenu'>
                        <div className='div-mid-event12-CardsBox-eventsmenu'>
                            <div className='div-mid-event12-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard5()}
                            </div>
                            <div className='div-mid-event12-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard5()}
                            </div>
                        </div>
                        <div className='div-mid-event5-secondevent-eventsmenu'>
                            {secondhalf_events_event5}
                        </div>
                    </div>
                    <div className='div-mid-event5-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName5()}
                    </div>
                    <div className='div-mid-event12-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event5-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname5()}
                    </div>
                    <div className='div-mid-event5-secondteam-eventsmenu'>
                        {RenderEventTeamName12()}
                    </div>
                </div>
                <div className='div-mid-event6-second-eventsmenu'>
                    <div className='div-mid-event6-seconddk-eventsmenu'>
                        {secondhalf_events_minutes6}
                    </div>
                    <div className='div-mid-event6-secondeventBox-eventsmenu'>
                        <div className='div-mid-event13-CardsBox-eventsmenu'>
                            <div className='div-mid-event13-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard6()}
                            </div>
                            <div className='div-mid-event13-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard6()}
                            </div>
                        </div>
                        <div className='div-mid-event6-secondevent-eventsmenu'>
                            {secondhalf_events_event6}
                        </div>
                    </div>
                    <div className='div-mid-event6-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName6()}
                    </div>
                    <div className='div-mid-event13-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event6-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname6()}
                    </div>
                    <div className='div-mid-event6-secondteam-eventsmenu'>
                        {RenderEventTeamName13()}
                    </div>
                </div>
                <div className='div-mid-event7-second-eventsmenu'>
                    <div className='div-mid-event7-seconddk-eventsmenu'>
                        {secondhalf_events_minutes7}
                    </div>
                    <div className='div-mid-event7-secondeventBox-eventsmenu'>
                        <div className='div-mid-event14-CardsBox-eventsmenu'>
                            <div className='div-mid-event14-yellowCardBox-eventsmenu'>
                                {GetRenderSecondhalf_yellowCard7()}
                            </div>
                            <div className='div-mid-event14-redCardBox-eventsmenu'>
                                {GetRenderSecondhalf_redCard7()}
                            </div>
                        </div>
                        <div className='div-mid-event7-secondevent-eventsmenu'>
                            {secondhalf_events_event7}
                        </div>
                    </div>
                    <div className='div-mid-event7-secondname-eventsmenu'>
                        {GetRenderEventsSecondhalfName7()}
                    </div>
                    <div className='div-mid-event14-nameSurnameEmpty-eventsmenu'>

                    </div>
                    <div className='div-mid-event7-secondsurname-eventsmenu'>
                        {GetRenderEventsSecondhalfSurname7()}
                    </div>
                    <div className='div-mid-event7-secondteam-eventsmenu'>
                        {RenderEventTeamName14()}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Eventsmenu;
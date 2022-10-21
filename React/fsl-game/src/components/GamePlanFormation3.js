import React from 'react'
import Leagues from '../leagues.json'
import Languages from '../languages.json'
import { useSelector, useDispatch } from 'react-redux';

function GamePLanFormation3() {

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
    );

    const homeScrollCaptainPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollCaptainPlayerValue)
    const awayScrollCaptainPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollCaptainPlayerValue)

    const formationValue = useSelector(state => state.setTeamFormationGet1.formationValue)
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
    const awayTeamIndex_rw2 = useSelector(state => state.setAwayTeamGetLw2.awayTeam_lw2)
    const awayTeamIndex_lw2 = useSelector(state => state.setAwayTeamGetRw2.awayTeam_rw2)
    const awayTeamIndex_st2 = useSelector(state => state.setAwayTeamGetSt2.awayTeam_st2)

    let captainBand = " (C)"

    let t1_gk1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].position1
    let t1_lb1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].position1
    let t1_cb1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].position1
    let t1_cb2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].position1
    let t1_rb1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].position1
    let t1_dm1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].position1
    let t1_cm1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].position1
    let t1_cm2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].position1
    let t1_lw1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].position1
    let t1_rw1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].position1
    let t1_st1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].position1

    let t1_gk1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].position2
    let t1_lb1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].position2
    let t1_cb1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].position2
    let t1_cb2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].position2
    let t1_rb1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].position2
    let t1_dm1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].position2
    let t1_cm1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].position2
    let t1_cm2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].position2
    let t1_lw1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].position2
    let t1_rw1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].position2
    let t1_st1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].position2

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

    let t1_gk1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].rating
    let t1_lb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].rating
    let t1_cb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].rating
    let t1_cb2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].rating
    let t1_rb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].rating
    let t1_dm1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].rating
    let t1_cm1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].rating
    let t1_cm2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].rating
    let t1_lw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].rating
    let t1_rw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].rating
    let t1_st1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].rating

    let t1_gk1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].energy
    let t1_lb1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].energy
    let t1_cb1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].energy
    let t1_cb2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].energy
    let t1_rb1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].energy
    let t1_dm1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].energy
    let t1_cm1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].energy
    let t1_cm2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].energy
    let t1_lw1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].energy
    let t1_rw1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].energy
    let t1_st1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].energy



    let t2_gk2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position1
    let t2_lb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position1
    let t2_cb4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position1
    let t2_cb3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position1
    let t2_rb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position1
    let t2_dm2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position1
    let t2_cm4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position1
    let t2_cm3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position1
    let t2_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position1
    let t2_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position1
    let t2_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position1

    let t2_gk2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position2
    let t2_lb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position2
    let t2_cb4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position2
    let t2_cb3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position2
    let t2_rb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position2
    let t2_dm2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position2
    let t2_cm4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position2
    let t2_cm3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position2
    let t2_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position2
    let t2_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position2
    let t2_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position2

    let t2_gk2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].name
    let t2_lb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].name
    let t2_cb4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].name
    let t2_cb3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].name
    let t2_rb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].name
    let t2_dm2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].name
    let t2_cm4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].name
    let t2_cm3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].name
    let t2_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].name
    let t2_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].name
    let t2_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].name

    let t2_gk2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].surname
    let t2_lb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].surname
    let t2_cb4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].surname
    let t2_cb3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].surname
    let t2_rb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].surname
    let t2_dm2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].surname
    let t2_cm4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].surname
    let t2_cm3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].surname
    let t2_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].surname
    let t2_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].surname
    let t2_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].surname

    let t2_gk2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].rating
    let t2_lb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].rating
    let t2_cb4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].rating
    let t2_cb3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].rating
    let t2_rb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].rating
    let t2_dm2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].rating
    let t2_cm4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].rating
    let t2_cm3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].rating
    let t2_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].rating
    let t2_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].rating
    let t2_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].rating

    let t2_gk2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].energy
    let t2_lb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].energy
    let t2_cb4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].energy
    let t2_cb3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].energy
    let t2_rb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].energy
    let t2_dm2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].energy
    let t2_cm4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].energy
    let t2_cm3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].energy
    let t2_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].energy
    let t2_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].energy
    let t2_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].energy

    const t1_gk1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_gk1_redCard)
    const t1_lb1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lb1_redCard)
    const t1_cb1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb1_redCard)
    const t1_cb2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb2_redCard)
    const t1_rb1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rb1_redCard)
    const t1_dm1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_dm1_redCard)
    const t1_cm1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm1_redCard)
    const t1_cm2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm2_redCard)
    const t1_lw1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lw1_redCard)
    const t1_rw1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rw1_redCard)
    const t1_st1_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_st1_redCard)

    const t2_gk2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_gk2_redCard)
    const t2_lb2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lb2_redCard)
    const t2_cb4_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb4_redCard)
    const t2_cb3_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb3_redCard)
    const t2_rb2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rb2_redCard)
    const t2_dm2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_dm2_redCard)
    const t2_cm4_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm4_redCard)
    const t2_cm3_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm3_redCard)
    const t2_lw2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lw2_redCard)
    const t2_rw2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rw2_redCard)
    const t2_st2_redCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_st2_redCard)

    function ControlCaptainBandGk00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 1) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 1) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandLb00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 2) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 2) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandCb01() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 3) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 3) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandCb02() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 4) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 4) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandRb00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 5) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 5) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandDm00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 6) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 6) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandCm01() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 7) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 7) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandCm02() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 8) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 8) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandLw00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 9) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 9) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandRw00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 10) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 10) {
                return captainBand
            }
        }
    }

    function ControlCaptainBandSt00() {
        if (homeSideValue == true) {
            if (homeScrollCaptainPlayerValueId == 11) {
                return captainBand
            }
        } else if (awaySideValue == true) {
            if (awayScrollCaptainPlayerValueId == 11) {
                return captainBand
            }
        }
    }

    function GetTeamGk00_position1() {
        if (homeSideValue == true) {
            t1_gk1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
            return t1_gk1_position1
        } else {
            t2_gk2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
            return t2_gk2_position1
        }
    }

    function GetTeamGk00_surname() {
        if (homeSideValue == true) {
            return t1_gk1_surname
        } else {
            return t2_gk2_surname
        }
    }

    function GetTeamGk00_rating() {
        if (homeSideValue == true) {
            if (t1_gk1_redCard == false) {
                return t1_gk1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_gk2_redCard == false) {
                return t2_gk2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamLb00_position1() {
        if (homeSideValue == true) {
            t1_lb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
            return t1_lb1_position1
        } else {
            t2_lb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
            return t2_lb2_position1
        }
    }

    function GetTeamLb00_surname() {
        if (homeSideValue == true) {
            return t1_lb1_surname
        } else {
            return t2_lb2_surname
        }
    }

    function GetTeamLb00_rating() {
        if (homeSideValue == true) {
            if (t1_lb1_redCard == false) {
                return t1_lb1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_lb2_redCard == false) {
                return t2_lb2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamCb01_position1() {
        if (homeSideValue == true) {
            t1_cb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
            return t1_cb1_position1
        } else {
            t2_cb4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
            return t2_cb4_position1
        }
    }

    function GetTeamCb01_surname() {
        if (homeSideValue == true) {
            return t1_cb1_surname
        } else {
            return t2_cb4_surname
        }
    }

    function GetTeamCb01_rating() {
        if (homeSideValue == true) {
            if (t1_cb1_redCard == false) {
                return t1_cb1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_cb4_redCard == false) {
                return t2_cb4_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamCb02_position1() {
        if (homeSideValue == true) {
            t1_cb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
            return t1_cb2_position1
        } else {
            t2_cb3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
            return t2_cb3_position1
        }
    }

    function GetTeamCb02_surname() {
        if (homeSideValue == true) {
            return t1_cb2_surname
        } else {
            return t2_cb3_surname
        }
    }

    function GetTeamCb02_rating() {
        if (homeSideValue == true) {
            if (t1_cb2_redCard == false) {
                return t1_cb2_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_cb3_redCard == false) {
                return t2_cb3_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamRb00_position1() {
        if (homeSideValue == true) {
            t1_rb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
            return t1_rb1_position1
        } else {
            t2_rb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
            return t2_rb2_position1
        }
    }

    function GetTeamRb00_surname() {
        if (homeSideValue == true) {
            return t1_rb1_surname
        } else {
            return t2_rb2_surname
        }
    }

    function GetTeamRb00_rating() {
        if (homeSideValue == true) {
            if (t1_rb1_redCard == false) {
                return t1_rb1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_rb2_redCard == false) {
                return t2_rb2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamDm00_position1() {
        if (homeSideValue == true) {
            t1_dm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
            return t1_dm1_position1
        } else {
            t2_dm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
            return t2_dm2_position1
        }
    }

    function GetTeamDm00_surname() {
        if (homeSideValue == true) {
            return t1_dm1_surname
        } else {
            return t2_dm2_surname
        }
    }

    function GetTeamDm00_rating() {
        if (homeSideValue == true) {
            if (t1_dm1_redCard == false) {
                return t1_dm1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_dm2_redCard == false) {
                return t2_dm2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamCm01_position1() {
        if (homeSideValue == true) {
            if (t1_cm1_position1 == "CM") {
                t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t1_cm1_position1 == "LW") {
                t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t1_cm1_position1 == "RW") {
                t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t1_cm1_position1 == "ST") {
                t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t1_cm1_position1
        } else {
            if (t2_cm4_position1 == "CM") {
                t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t2_cm4_position1 == "LW") {
                t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t2_cm4_position1 == "RW") {
                t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t2_cm4_position1 == "ST") {
                t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t2_cm4_position1
        }
    }

    function GetTeamCm01_surname() {
        if (homeSideValue == true) {
            return t1_cm1_surname
        } else {
            return t2_cm4_surname
        }
    }

    function GetTeamCm01_rating() {
        if (homeSideValue == true) {
            if (t1_cm1_redCard == false) {
                return t1_cm1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_cm4_redCard == false) {
                return t2_cm4_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamCm02_position1() {
        if (homeSideValue == true) {
            if (t1_cm2_position1 == "CM") {
                t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t1_cm2_position1 == "LW") {
                t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t1_cm2_position1 == "RW") {
                t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t1_cm2_position1 == "ST") {
                t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t1_cm2_position1
        } else {
            if (t2_cm3_position1 == "CM") {
                t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t2_cm3_position1 == "LW") {
                t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t2_cm3_position1 == "RW") {
                t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t2_cm3_position1 == "ST") {
                t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t2_cm3_position1
        }
    }

    function GetTeamCm02_surname() {
        if (homeSideValue == true) {
            return t1_cm2_surname
        } else {
            return t2_cm3_surname
        }
    }

    function GetTeamCm02_rating() {
        if (homeSideValue == true) {
            if (t1_cm2_redCard == false) {
                return t1_cm2_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_cm3_redCard == false) {
                return t2_cm3_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamLw00_position1() {
        if (homeSideValue == true) {
            if (t1_lw1_position1 == "CM") {
                t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t1_lw1_position1 == "LW") {
                t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t1_lw1_position1 == "RW") {
                t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t1_lw1_position1 == "ST") {
                t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t1_lw1_position1
        } else {
            if (t2_lw2_position1 == "CM") {
                t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t2_lw2_position1 == "LW") {
                t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t2_lw2_position1 == "RW") {
                t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t2_lw2_position1 == "ST") {
                t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t2_lw2_position1
        }
    }

    function GetTeamLw00_surname() {
        if (homeSideValue == true) {
            return t1_lw1_surname
        } else {
            return t2_lw2_surname
        }
    }

    function GetTeamLw00_rating() {
        if (homeSideValue == true) {
            if (t1_lw1_redCard == false) {
                return t1_lw1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_lw2_redCard == false) {
                return t2_lw2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamRw00_position1() {
        if (homeSideValue == true) {
            if (t1_rw1_position1 == "CM") {
                t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t1_rw1_position1 == "LW") {
                t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t1_rw1_position1 == "RW") {
                t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t1_rw1_position1 == "ST") {
                t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t1_rw1_position1
        } else {
            if (t2_rw2_position1 == "CM") {
                t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t2_rw2_position1 == "LW") {
                t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t2_rw2_position1 == "RW") {
                t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t2_rw2_position1 == "ST") {
                t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t2_rw2_position1
        }
    }

    function GetTeamRw00_surname() {
        if (homeSideValue == true) {
            return t1_rw1_surname
        } else {
            return t2_rw2_surname
        }
    }

    function GetTeamRw00_rating() {
        if (homeSideValue == true) {
            if (t1_rw1_redCard == false) {
                return t1_rw1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_rw2_redCard == false) {
                return t2_rw2_rating
            } else {
                return "❌"
            }
        }
    }

    function GetTeamSt00_position1() {
        if (homeSideValue == true) {
            if (t1_st1_position1 == "CM") {
                t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t1_st1_position1 == "LW") {
                t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t1_st1_position1 == "RW") {
                t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t1_st1_position1 == "ST") {
                t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t1_st1_position1
        } else {
            if (t2_st2_position1 == "CM") {
                t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
            } else if (t2_st2_position1 == "LW") {
                t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
            } else if (t2_st2_position1 == "RW") {
                t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
            } else if (t2_st2_position1 == "ST") {
                t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
            }

            return t2_st2_position1
        }
    }

    function GetTeamSt00_surname() {
        if (homeSideValue == true) {
            if (t1_st1_redCard == false) {
                return t1_st1_surname
            } else {
                return t1_st1_surname
            }

        } else {
            if (t2_st2_redCard == false) {
                return t2_st2_surname
            } else {
                return t2_st2_surname
            }
        }
    }

    function GetTeamSt00_rating() {
        if (homeSideValue == true) {
            if (t1_st1_redCard == false) {
                return t1_st1_rating
            } else {
                return "❌"
            }

        } else {
            if (t2_st2_redCard == false) {
                return t2_st2_rating
            } else {
                return "❌"
            }
        }
    }

    return (
        <div className='div-field-gameplanmenu-formation3'>
            <div className='div-tactics-st00-formation3'>
                <div className='div-tactics-st00-obje-formation3'>
                    <div className='div-tactics-st00-information-formation3'>
                        <div className='div-tactics-st00-position-formation3'>
                            {GetTeamSt00_position1()}
                        </div>
                        <div className='div-tactics-st00-rating-formation3'>
                            {GetTeamSt00_rating()}
                        </div>
                    </div>
                    <div className='div-tactics-st00-surname-formation3'>
                        {GetTeamSt00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandSt00()}</span>
                    </div>
                </div>
            </div>
            <div className='div-tactics-wings-formation3'>
                <div className='div-tactics-lw00-formation3'>
                    <div className='div-tactics-lw00-obje-formation3'>
                        <div className='div-tactics-lw00-information-formation3'>
                            <div className='div-tactics-lw00-position-formation3'>
                                {GetTeamLw00_position1()}
                            </div>
                            <div className='div-tactics-lw00-rating-formation3'>
                                {GetTeamLw00_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-lw00-surname-formation3'>
                            {GetTeamLw00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLw00()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-tactics-empty4-formation3'>

                </div>
                <div className='div-tactics-rw00-formation3'>
                    <div className='div-tactics-rw00-obje-formation3'>
                        <div className='div-tactics-rw00-information-formation3'>
                            <div className='div-tactics-rw00-position-formation3'>
                                {GetTeamRw00_position1()}
                            </div>
                            <div className='div-tactics-rw00-rating-formation3'>
                                {GetTeamRw00_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-rw00-surname-formation3'>
                            {GetTeamRw00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRw00()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-tactics-cms-formation3'>
                <div className='div-tactics-cm01-formation3'>
                    <div className='div-tactics-cm01-obje-formation3'>
                        <div className='div-tactics-cm01-information-formation3'>
                            <div className='div-tactics-cm01-position-formation3'>
                                {GetTeamCm01_position1()}
                            </div>
                            <div className='div-tactics-cm01-rating-formation3'>
                                {GetTeamCm01_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-cm01-surname-formation3'>
                            {GetTeamCm01_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm01()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-tactics-empty3-formation3'>

                </div>
                <div className='div-tactics-cm02-formation3'>
                    <div className='div-tactics-cm02-obje-formation3'>
                        <div className='div-tactics-cm02-information-formation3'>
                            <div className='div-tactics-cm02-position-formation3'>
                                {GetTeamCm02_position1()}
                            </div>
                            <div className='div-tactics-cm02-rating-formation3'>
                                {GetTeamCm02_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-cm02-surname-formation3'>
                            {GetTeamCm02_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm02()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-tactics-dm00-formation3'>
            </div>
            <div className='div-tactics-backs-formation3'>
                <div className='div-tactics-lb00-formation3'>
                    <div className='div-tactics-lb00-obje-formation3'>
                        <div className='div-tactics-lb00-information-formation3'>
                            <div className='div-tactics-lb00-position-formation3'>
                                {GetTeamLb00_position1()}
                            </div>
                            <div className='div-tactics-lb00-rating-formation3'>
                                {GetTeamLb00_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-lb00-surname-formation3'>
                            {GetTeamLb00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLb00()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-tactics-empty2-formation3'>

                </div>
                <div className='div-tactics-rb00-formation3'>
                    <div className='div-tactics-rb00-obje-formation3'>
                        <div className='div-tactics-rb00-information-formation3'>
                            <div className='div-tactics-rb00-position-formation3'>
                                {GetTeamRb00_position1()}
                            </div>
                            <div className='div-tactics-rb00-rating-formation3'>
                                {GetTeamRb00_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-rb00-surname-formation3'>
                            {GetTeamRb00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRb00()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-tactics-cbs-formation3'>
                <div className='div-tactics-cb01-formation3'>
                    <div className='div-tactics-cb01-obje-formation3'>
                        <div className='div-tactics-cb01-information-formation3'>
                            <div className='div-tactics-cb01-position-formation3'>
                                {GetTeamCb01_position1()}
                            </div>
                            <div className='div-tactics-cb01-rating-formation3'>
                                {GetTeamCb01_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-cb01-surname-formation3'>
                            {GetTeamCb01_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb01()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-tactics-empty1-formation3'>
                    <div className='div-tactics-dm00-obje-formation3'>
                        <div className='div-tactics-dm00-information-formation3'>
                            <div className='div-tactics-dm00-position-formation3'>
                                {GetTeamDm00_position1()}
                            </div>
                            <div className='div-tactics-dm00-rating-formation3'>
                                {GetTeamDm00_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-dm00-surname-formation3'>
                            {GetTeamDm00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandDm00()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-tactics-cb02-formation3'>
                    <div className='div-tactics-cb02-obje-formation3'>
                        <div className='div-tactics-cb02-information-formation3'>
                            <div className='div-tactics-cb02-position-formation3'>
                                {GetTeamCb02_position1()}
                            </div>
                            <div className='div-tactics-cb02-rating-formation3'>
                                {GetTeamCb02_rating()}
                            </div>
                        </div>
                        <div className='div-tactics-cb02-surname-formation3'>
                            {GetTeamCb02_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb02()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-tactics-gk00-formation3'>
                <div className='div-tactics-gk00-obje-formation3'>
                    <div className='div-tactics-gk00-information-formation3'>
                        <div className='div-tactics-gk00-position-formation3'>
                            {GetTeamGk00_position1()}
                        </div>
                        <div className='div-tactics-gk00-rating-formation3'>
                            {GetTeamGk00_rating()}
                        </div>
                    </div>
                    <div className='div-tactics-gk00-surname-formation3'>
                        {GetTeamGk00_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandGk00()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePLanFormation3;

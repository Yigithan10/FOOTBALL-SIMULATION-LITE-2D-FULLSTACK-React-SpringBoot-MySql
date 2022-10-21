import React from 'react'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux';
import Languages from '../languages.json'

function PlayOrGamePlanHomeFormation3() {

    const dispatch = useDispatch()

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const homeScrollCaptainPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollCaptainPlayerValue)
    const awayScrollCaptainPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollCaptainPlayerValue)

    const PlayOrGameplanFormationValue = useSelector(state => state.setPlayOrGameplanFormationGet1.playOrGameplanFormationValue)

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
    );
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

    let captainBand = "(C)"

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

    let t2_gk2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position1
    let t2_lb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position1
    let t2_cb4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position1
    let t2_cb3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position1
    let t2_rb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position1
    let t2_dm2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position1
    let t2_cm4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position1
    let t2_cm3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position1
    let t2_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position1
    let t2_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position1
    let t2_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position1

    let t2_gk2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].surname
    let t2_lb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].surname
    let t2_cb4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].surname
    let t2_cb3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].surname
    let t2_rb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].surname
    let t2_dm2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].surname
    let t2_cm4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].surname
    let t2_cm3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].surname
    let t2_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].surname
    let t2_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].surname
    let t2_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].surname

    let t2_gk2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].rating
    let t2_lb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].rating
    let t2_cb4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].rating
    let t2_cb3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].rating
    let t2_rb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].rating
    let t2_dm2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].rating
    let t2_cm4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].rating
    let t2_cm3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].rating
    let t2_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].rating
    let t2_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].rating
    let t2_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].rating

    function ControlCaptainBandGk1() {
        if (homeScrollCaptainPlayerValueId == 1) {
            return captainBand
        }
    }

    function ControlCaptainBandLb1() {
        if (homeScrollCaptainPlayerValueId == 2) {
            return captainBand
        }
    }

    function ControlCaptainBandCb1() {
        if (homeScrollCaptainPlayerValueId == 3) {
            return captainBand
        }
    }

    function ControlCaptainBandCb2() {
        if (homeScrollCaptainPlayerValueId == 4) {
            return captainBand
        }
    }

    function ControlCaptainBandRb1() {
        if (homeScrollCaptainPlayerValueId == 5) {
            return captainBand
        }
    }

    function ControlCaptainBandDm1() {
        if (homeScrollCaptainPlayerValueId == 6) {
            return captainBand
        }
    }

    function ControlCaptainBandCm1() {
        if (homeScrollCaptainPlayerValueId == 7) {
            return captainBand
        }
    }

    function ControlCaptainBandCm2() {
        if (homeScrollCaptainPlayerValueId == 8) {
            return captainBand
        }
    }

    function ControlCaptainBandLw1() {
        if (homeScrollCaptainPlayerValueId == 9) {
            return captainBand
        }
    }

    function ControlCaptainBandRw1() {
        if (homeScrollCaptainPlayerValueId == 10) {
            return captainBand
        }
    }

    function ControlCaptainBandSt1() {
        if (homeScrollCaptainPlayerValueId == 11) {
            return captainBand
        }
    }







    function GetHomeTeamGk1_position1() {
        t1_gk1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return t1_gk1_position1
    }

    function GetHomeTeamGk1_surname() {
        return t1_gk1_surname
    }

    function GetHomeTeamGk1_rating() {
        return t1_gk1_rating
    }

    function GetHomeTeamLb1_position1() {
        t1_lb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return t1_lb1_position1
    }

    function GetHomeTeamLb1_surname() {
        return t1_lb1_surname
    }

    function GetHomeTeamLb1_rating() {
        return t1_lb1_rating
    }

    function GetHomeTeamCb1_position1() {
        t1_cb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return t1_cb1_position1
    }

    function GetHomeTeamCb1_surname() {
        return t1_cb1_surname
    }

    function GetHomeTeamCb1_rating() {
        return t1_cb1_rating
    }

    function GetHomeTeamCb2_position1() {
        t1_cb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return t1_cb2_position1
    }

    function GetHomeTeamCb2_surname() {
        return t1_cb2_surname
    }

    function GetHomeTeamCb2_rating() {
        return t1_cb2_rating
    }

    function GetHomeTeamRb1_position1() {
        t1_rb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return t1_rb1_position1
    }

    function GetHomeTeamRb1_surname() {
        return t1_rb1_surname
    }

    function GetHomeTeamRb1_rating() {
        return t1_rb1_rating
    }

    function GetHomeTeamDm1_position1() {
        t1_dm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return t1_dm1_position1
    }

    function GetHomeTeamDm1_surname() {
        return t1_dm1_surname
    }

    function GetHomeTeamDm1_rating() {
        return t1_dm1_rating
    }

    function GetHomeTeamCm1_position1() {
        t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return t1_cm1_position1
    }

    function GetHomeTeamCm1_surname() {
        return t1_cm1_surname
    }

    function GetHomeTeamCm1_rating() {
        return t1_cm1_rating
    }

    function GetHomeTeamCm2_position1() {
        t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return t1_cm2_position1
    }

    function GetHomeTeamCm2_surname() {
        return t1_cm2_surname
    }

    function GetHomeTeamCm2_rating() {
        return t1_cm2_rating
    }

    function GetHomeTeamLw1_position1() {
        t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        return t1_lw1_position1
    }

    function GetHomeTeamLw1_surname() {
        return t1_lw1_surname
    }

    function GetHomeTeamLw1_rating() {
        return t1_lw1_rating
    }

    function GetHomeTeamRw1_position1() {
        t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        return t1_rw1_position1
    }

    function GetHomeTeamRw1_surname() {
        return t1_rw1_surname
    }

    function GetHomeTeamRw1_rating() {
        return t1_rw1_rating
    }

    function GetHomeTeamSt1_position1() {
        t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        return t1_st1_position1
    }

    function GetHomeTeamSt1_surname() {
        return t1_st1_surname
    }

    function GetHomeTeamSt1_rating() {
        return t1_st1_rating
    }

    return (
        <div>
            <div className='div-t1-gk1-formation3'>
                <div className='div-t1-gk1-obje-formation3'>
                    <div className='div-t1-gk1-information-formation3'>
                        <div className='div-t1-gk1-position-formation3'>
                            {GetHomeTeamGk1_position1()}
                        </div>
                        <div className='div-t1-gk1-rating-formation3'>
                            {GetHomeTeamGk1_rating()}
                        </div>
                    </div>
                    <div className='div-t1-gk1-surname-formation3'>
                        {GetHomeTeamGk1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandGk1()}</span>
                    </div>
                </div>
            </div>
            <div className='div-t1-cbs1-formation3'>
                <div className='div-t1-cb1-formation3'>
                    <div className='div-t1-cb1-obje-formation3'>
                        <div className='div-t1-cb1-information-formation3'>
                            <div className='div-t1-cb1-position-formation3'>
                                {GetHomeTeamCb1_position1()}
                            </div>
                            <div className='div-t1-cb1-rating-formation3'>
                                {GetHomeTeamCb1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-cb1-surname-formation3'>
                            {GetHomeTeamCb1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb1()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t1-empty1-formation3'>
                    <div className='div-t1-dm1-obje-formation3'>
                        <div className='div-t1-dm1-information-formation3'>
                            <div className='div-t1-dm1-position-formation3'>
                                {GetHomeTeamDm1_position1()}
                            </div>
                            <div className='div-t1-dm1-rating-formation3'>
                                {GetHomeTeamDm1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-dm1-surname-formation3'>
                            {GetHomeTeamDm1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandDm1()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t1-cb2-formation3'>
                    <div className='div-t1-cb2-obje-formation3'>
                        <div className='div-t1-cb2-information-formation3'>
                            <div className='div-t1-cb2-position-formation3'>
                                {GetHomeTeamCb2_position1()}
                            </div>
                            <div className='div-t1-cb2-rating-formation3'>
                                {GetHomeTeamCb2_rating()}
                            </div>
                        </div>
                        <div className='div-t1-cb2-surname-formation3'>
                            {GetHomeTeamCb2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb2()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t1-backs1-formation3'>
                <div className='div-t1-lb1-formation3'>
                    <div className='div-t1-lb1-obje-formation3'>
                        <div className='div-t1-lb1-information-formation3'>
                            <div className='div-t1-lb1-position-formation3'>
                                {GetHomeTeamLb1_position1()}
                            </div>
                            <div className='div-t1-lb1-rating-formation3'>
                                {GetHomeTeamLb1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-lb1-surname-formation3'>
                            {GetHomeTeamLb1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLb1()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t1-empty2-formation3'>

                </div>
                <div className='div-t1-rb1-formation3'>
                    <div className='div-t1-rb1-obje-formation3'>
                        <div className='div-t1-rb1-information-formation3'>
                            <div className='div-t1-rb1-position-formation3'>
                                {GetHomeTeamRb1_position1()}
                            </div>
                            <div className='div-t1-rb1-rating-formation3'>
                                {GetHomeTeamRb1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-rb1-surname-formation3'>
                            {GetHomeTeamRb1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRb1()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t1-dm1-formation3'>

            </div>
            <div className='div-t1-cms1-formation3'>
                <div className='div-t1-cm1-formation3'>
                    <div className='div-t1-cm1-obje-formation3'>
                        <div className='div-t1-cm1-information-formation3'>
                            <div className='div-t1-cm1-position-formation3'>
                                {GetHomeTeamCm1_position1()}
                            </div>
                            <div className='div-t1-cm1-rating-formation3'>
                                {GetHomeTeamCm1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-cm1-surname-formation3'>
                            {GetHomeTeamCm1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm1()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t1-empty3-formation3'>

                </div>
                <div className='div-t1-cm2-formation3'>
                    <div className='div-t1-cm2-obje-formation3'>
                        <div className='div-t1-cm2-information-formation3'>
                            <div className='div-t1-cm2-position-formation3'>
                                {GetHomeTeamCm2_position1()}
                            </div>
                            <div className='div-t1-cm2-rating-formation3'>
                                {GetHomeTeamCm2_rating()}
                            </div>
                        </div>
                        <div className='div-t1-cm2-surname-formation3'>
                            {GetHomeTeamCm2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm2()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t1-wings1-formation3'>
                <div className='div-t1-lw1-formation3'>
                    <div className='div-t1-lw1-obje-formation3'>
                        <div className='div-t1-lw1-information-formation3'>
                            <div className='div-t1-lw1-position-formation3'>
                                {GetHomeTeamLw1_position1()}
                            </div>
                            <div className='div-t1-lw1-rating-formation3'>
                                {GetHomeTeamLw1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-lw1-surname-formation3'>
                            {GetHomeTeamLw1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLw1()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t1-empty4-formation3'>

                </div>
                <div className='div-t1-rw1-formation3'>
                    <div className='div-t1-rw1-obje-formation3'>
                        <div className='div-t1-rw1-information-formation3'>
                            <div className='div-t1-rw1-position-formation3'>
                                {GetHomeTeamRw1_position1()}
                            </div>
                            <div className='div-t1-rw1-rating-formation3'>
                                {GetHomeTeamRw1_rating()}
                            </div>
                        </div>
                        <div className='div-t1-rw1-surname-formation3'>
                            {GetHomeTeamRw1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRw1()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t1-st1-formation3'>
                <div className='div-t1-st1-obje-formation3'>
                    <div className='div-t1-st1-information-formation3'>
                        <div className='div-t1-st1-position-formation3'>
                            {GetHomeTeamSt1_position1()}
                        </div>
                        <div className='div-t1-st1-rating-formation3'>
                            {GetHomeTeamSt1_rating()}
                        </div>
                    </div>
                    <div className='div-t1-st1-surname-formation3'>
                        {GetHomeTeamSt1_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandSt1()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayOrGamePlanHomeFormation3;
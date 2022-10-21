import React from 'react'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux';
import Languages from '../languages.json'

function PlayOrGamePlanAwayFormation1() {

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

    const formationValue = useSelector(state => state.setTeamFormationGet1.formationValue)

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
    let t2_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].rating
    let t2_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].rating
    let t2_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].rating

    function ControlCaptainBandGk2() {
        if (awayScrollCaptainPlayerValueId == 1) {
            return captainBand
        }
    }

    function ControlCaptainBandLb2() {
        if (awayScrollCaptainPlayerValueId == 2) {
            return captainBand
        }
    }

    function ControlCaptainBandCb4() {
        if (awayScrollCaptainPlayerValueId == 3) {
            return captainBand
        }
    }

    function ControlCaptainBandCb3() {
        if (awayScrollCaptainPlayerValueId == 4) {
            return captainBand
        }
    }

    function ControlCaptainBandRb2() {
        if (awayScrollCaptainPlayerValueId == 5) {
            return captainBand
        }
    }

    function ControlCaptainBandDm2() {
        if (awayScrollCaptainPlayerValueId == 6) {
            return captainBand
        }
    }

    function ControlCaptainBandCm4() {
        if (awayScrollCaptainPlayerValueId == 7) {
            return captainBand
        }
    }

    function ControlCaptainBandCm3() {
        if (awayScrollCaptainPlayerValueId == 8) {
            return captainBand
        }
    }

    function ControlCaptainBandLw2() {
        if (awayScrollCaptainPlayerValueId == 9) {
            return captainBand
        }
    }

    function ControlCaptainBandRw2() {
        if (awayScrollCaptainPlayerValueId == 10) {
            return captainBand
        }
    }

    function ControlCaptainBandSt2() {
        if (awayScrollCaptainPlayerValueId == 11) {
            return captainBand
        }
    }






    function GetAwayTeamGk2_position1() {
        t2_gk2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return t2_gk2_position1
    }

    function GetAwayTeamGk2_surname() {
        return t2_gk2_surname
    }

    function GetAwayTeamGk2_rating() {
        return t2_gk2_rating
    }

    function GetAwayTeamLb2_position1() {
        t2_lb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return t2_lb2_position1
    }

    function GetAwayTeamLb2_surname() {
        return t2_lb2_surname
    }

    function GetAwayTeamLb2_rating() {
        return t2_lb2_rating
    }

    function GetAwayTeamCb4_position1() {
        t2_cb4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return t2_cb4_position1
    }

    function GetAwayTeamCb4_surname() {
        return t2_cb4_surname
    }

    function GetAwayTeamCb4_rating() {
        return t2_cb4_rating
    }

    function GetAwayTeamCb3_position1() {
        t2_cb3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return t2_cb3_position1
    }

    function GetAwayTeamCb3_surname() {
        return t2_cb3_surname
    }

    function GetAwayTeamCb3_rating() {
        return t2_cb3_rating
    }

    function GetAwayTeamRb2_position1() {
        t2_rb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return t2_rb2_position1
    }

    function GetAwayTeamRb2_surname() {
        return t2_rb2_surname
    }

    function GetAwayTeamRb2_rating() {
        return t2_rb2_rating
    }

    function GetAwayTeamDm2_position1() {
        t2_dm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return t2_dm2_position1
    }

    function GetAwayTeamDm2_surname() {
        return t2_dm2_surname
    }

    function GetAwayTeamDm2_rating() {
        return t2_dm2_rating
    }

    function GetAwayTeamCm4_position1() {
        t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return t2_cm4_position1
    }

    function GetAwayTeamCm4_surname() {
        return t2_cm4_surname
    }

    function GetAwayTeamCm4_rating() {
        return t2_cm4_rating
    }

    function GetAwayTeamCm3_position1() {
        t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return t2_cm3_position1
    }

    function GetAwayTeamCm3_surname() {
        return t2_cm3_surname
    }

    function GetAwayTeamCm3_rating() {
        return t2_cm3_rating
    }

    function GetAwayTeamLw2_position1() {
        t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        return t2_lw2_position1
    }

    function GetAwayTeamLw2_surname() {
        return t2_lw2_surname
    }

    function GetAwayTeamLw2_rating() {
        return t2_lw2_rating
    }

    function GetAwayTeamRw2_position1() {
        t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        return t2_rw2_position1
    }

    function GetAwayTeamRw2_surname() {
        return t2_rw2_surname
    }

    function GetAwayTeamRw2_rating() {
        return t2_rw2_rating
    }

    function GetAwayTeamSt2_position1() {
        t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        return t2_st2_position1
    }

    function GetAwayTeamSt2_surname() {
        return t2_st2_surname
    }

    function GetAwayTeamSt2_rating() {
        return t2_st2_rating
    }

    return (
        <div>
            <div className='div-t2-st2-formation1'>
                <div className='div-t2-st2-obje-formation1'>
                    <div className='div-t2-st2-information-formation1'>
                        <div className='div-t2-st2-position-formation1'>
                            {GetAwayTeamSt2_position1()}
                        </div>
                        <div className='div-t2-st2-rating-formation1'>
                            {GetAwayTeamSt2_rating()}
                        </div>
                    </div>
                    <div className='div-t2-st2-surname-formation1'>
                        {GetAwayTeamSt2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandSt2()}</span>
                    </div>
                </div>
            </div>
            <div className='div-t2-wings2-formation1'>
                <div className='div-t2-rw2-formation1'>
                    <div className='div-t2-rw2-obje-formation1'>
                        <div className='div-t2-rw2-information-formation1'>
                            <div className='div-t2-rw2-position-formation1'>
                                {GetAwayTeamRw2_position1()}
                            </div>
                            <div className='div-t2-rw2-rating-formation1'>
                                {GetAwayTeamRw2_rating()}
                            </div>
                        </div>
                        <div className='div-t2-rw2-surname-formation1'>
                            {GetAwayTeamRw2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRw2()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t2-empty4-formation1'>

                </div>
                <div className='div-t2-lw2-formation1'>
                    <div className='div-t2-lw2-obje-formation1'>
                        <div className='div-t2-lw2-information-formation1'>
                            <div className='div-t2-lw2-position-formation1'>
                                {GetAwayTeamLw2_position1()}
                            </div>
                            <div className='div-t2-lw2-rating-formation1'>
                                {GetAwayTeamLw2_rating()}
                            </div>
                        </div>
                        <div className='div-t2-lw2-surname-formation1'>
                            {GetAwayTeamLw2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLw2()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t2-cms2-formation1'>
                <div className='div-t2-cm3-formation1'>
                    <div className='div-t2-cm3-obje-formation1'>
                        <div className='div-t2-cm3-information-formation1'>
                            <div className='div-t2-cm3-position-formation1'>
                                {GetAwayTeamCm3_position1()}
                            </div>
                            <div className='div-t2-cm3-rating-formation1'>
                                {GetAwayTeamCm3_rating()}
                            </div>
                        </div>
                        <div className='div-t2-cm3-surname-formation1'>
                            {GetAwayTeamCm3_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm3()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t2-empty3-formation1'>

                </div>
                <div className='div-t2-cm4-formation1'>
                    <div className='div-t2-cm4-obje-formation1'>
                        <div className='div-t2-cm4-information-formation1'>
                            <div className='div-t2-cm4-position-formation1'>
                                {GetAwayTeamCm4_position1()}
                            </div>
                            <div className='div-t2-cm4-rating-formation1'>
                                {GetAwayTeamCm4_rating()}
                            </div>
                        </div>
                        <div className='div-t2-cm4-surname-formation1'>
                            {GetAwayTeamCm4_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCm4()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t2-dm2-formation1'>
                <div className='div-t2-dm2-obje-formation1'>
                    <div className='div-t2-dm2-information-formation1'>
                        <div className='div-t2-dm2-position-formation1'>
                            {GetAwayTeamDm2_position1()}
                        </div>
                        <div className='div-t2-dm2-rating-formation1'>
                            {GetAwayTeamDm2_rating()}
                        </div>
                    </div>
                    <div className='div-t2-dm2-surname-formation1'>
                        {GetAwayTeamDm2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandDm2()}</span>
                    </div>
                </div>
            </div>
            <div className='div-t2-backs2-formation1'>
                <div className='div-t2-rb2-formation1'>
                    <div className='div-t2-rb2-obje-formation1'>
                        <div className='div-t2-rb2-information-formation1'>
                            <div className='div-t2-rb2-position-formation1'>
                                {GetAwayTeamRb2_position1()}
                            </div>
                            <div className='div-t2-rb2-rating-formation1'>
                                {GetAwayTeamRb2_rating()}
                            </div>
                        </div>
                        <div className='div-t2-rb2-surname-formation1'>
                            {GetAwayTeamRb2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandRb2()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t2-empty2-formation1'>

                </div>
                <div className='div-t2-lb2-formation1'>
                    <div className='div-t2-lb2-obje-formation1'>
                        <div className='div-t2-lb2-information-formation1'>
                            <div className='div-t2-lb2-position-formation1'>
                                {GetAwayTeamLb2_position1()}
                            </div>
                            <div className='div-t2-lb2-rating-formation1'>
                                {GetAwayTeamLb2_rating()}
                            </div>
                        </div>
                        <div className='div-t2-lb2-surname-formation1'>
                            {GetAwayTeamLb2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandLb2()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t2-cbs2-formation1'>
                <div className='div-t2-cb3-formation1'>
                    <div className='div-t2-cb3-obje-formation1'>
                        <div className='div-t2-cb3-information-formation1'>
                            <div className='div-t2-cb3-position-formation1'>
                                {GetAwayTeamCb3_position1()}
                            </div>
                            <div className='div-t2-cb3-rating-formation1'>
                                {GetAwayTeamCb3_rating()}
                            </div>
                        </div>
                        <div className='div-t2-cb3-surname-formation1'>
                            {GetAwayTeamCb3_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb3()}</span>
                        </div>
                    </div>
                </div>
                <div className='div-t2-empty1-formation1'>

                </div>
                <div className='div-t2-cb4-formation1'>
                    <div className='div-t2-cb4-obje-formation1'>
                        <div className='div-t2-cb4-information-formation1'>
                            <div className='div-t2-cb4-position-formation1'>
                                {GetAwayTeamCb4_position1()}
                            </div>
                            <div className='div-t2-cb4-rating-formation1'>
                                {GetAwayTeamCb4_rating()}
                            </div>
                        </div>
                        <div className='div-t2-cb4-surname-formation1'>
                            {GetAwayTeamCb4_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandCb4()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='div-t2-gk2-formation1'>
                <div className='div-t2-gk2-obje-formation1'>
                    <div className='div-t2-gk2-information-formation1'>
                        <div className='div-t2-gk2-position-formation1'>
                            {GetAwayTeamGk2_position1()}
                        </div>
                        <div className='div-t2-gk2-rating-formation1'>
                            {GetAwayTeamGk2_rating()}
                        </div>
                    </div>
                    <div className='div-t2-gk2-surname-formation1'>
                        {GetAwayTeamGk2_surname()}<span className='div-captainband-allbands'>{ControlCaptainBandGk2()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayOrGamePlanAwayFormation1;
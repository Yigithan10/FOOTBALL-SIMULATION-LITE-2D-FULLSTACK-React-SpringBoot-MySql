import React, { useState } from 'react'
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'
import './Playorgameplan.css'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux';
import PlayOrGamePlanHomeFormation1 from './PlayOrGamePlanHomeFormation1'
import PlayOrGamePlanHomeFormation2 from './PlayOrGamePlanHomeFormation2'
import PlayOrGamePlanHomeFormation3 from './PlayOrGamePlanHomeFormation3'
import PlayOrGamePlanHomeFormation4 from './PlayOrGamePlanHomeFormation4'
import PlayOrGamePlanAwayFormation1 from './PlayOrGamePlanAwayFormation1'
import PlayOrGamePlanAwayFormation2 from './PlayOrGamePlanAwayFormation2'
import PlayOrGamePlanAwayFormation3 from './PlayOrGamePlanAwayFormation3'
import PlayOrGamePlanAwayFormation4 from './PlayOrGamePlanAwayFormation4'
import { setPlayOrGameplanFormationGet1, setPlayOrGameplanFormationGet2, setPlayOrGameplanFormationGet3, setPlayOrGameplanFormationGet4 } from '../redux/playOrGamePlanSlice'
import Languages from '../languages.json'

function Playorgameplan() {

    const dispatch = useDispatch()

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const PlayOrGameplanFormationValue = useSelector(state => state.setPlayOrGameplanFormationGet1.playOrGameplanFormationValue)

    const formationValue = useSelector(state => state.setTeamFormationGet1.formationValue)

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
    );

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

    let txtTacticsButton = Languages.languages[reduxLanguage].playorgameplan.playorgameplanTactics
    let txtPlayButton = Languages.languages[reduxLanguage].playorgameplan.playorgameplanPlay
    let txtBackToTeamsButton = Languages.languages[reduxLanguage].playorgameplan.playorgameplanBackToTeams

    function ControlHomeAwaySideValue() {
        if (homeSideValue == false && awaySideValue == false) {
            return <Navigate to='/' />
        }
    }


    function HomeSelection() {
        if (homeSideValue == true) {
            return "✓"
        } else {
            return " "
        }
    }

    function AwaySelection() {
        if (awaySideValue == true) {
            return "✓"
        } else {
            return " "
        }
    }

    function PlayOrGameplanMenuFormationValue() {
        if (homeSideValue == true) {
            if (formationValue == 1) {
                dispatch(setPlayOrGameplanFormationGet1())
            }
            if (formationValue == 2) {
                dispatch(setPlayOrGameplanFormationGet2())
            }
            if (formationValue == 3) {
                dispatch(setPlayOrGameplanFormationGet3())
            }
            if (formationValue == 4) {
                dispatch(setPlayOrGameplanFormationGet4())
            }
        }
        if (awaySideValue == true) {
            if (formationValue == 1) {
                dispatch(setPlayOrGameplanFormationGet1())
            }
            if (formationValue == 2) {
                dispatch(setPlayOrGameplanFormationGet2())
            }
            if (formationValue == 3) {
                dispatch(setPlayOrGameplanFormationGet3())
            }
            if (formationValue == 4) {
                dispatch(setPlayOrGameplanFormationGet4())
            }
        }
    }

    function homeTeamFormation() {
        if (homeSideValue == true) {
            if (PlayOrGameplanFormationValue == 1) {
                return <PlayOrGamePlanHomeFormation1 />
            }
            if (PlayOrGameplanFormationValue == 2) {
                return <PlayOrGamePlanHomeFormation2 />
            }
            if (PlayOrGameplanFormationValue == 3) {
                return <PlayOrGamePlanHomeFormation3 />
            }
            if (PlayOrGameplanFormationValue == 4) {
                return <PlayOrGamePlanHomeFormation4 />
            }
        } else if (homeSideValue == false) {
            return <PlayOrGamePlanHomeFormation1 />
        }
    }

    function awayTeamFormation() {
        if (awaySideValue == true) {
            if (PlayOrGameplanFormationValue == 1) {
                return <PlayOrGamePlanAwayFormation1 />
            }
            if (PlayOrGameplanFormationValue == 2) {
                return <PlayOrGamePlanAwayFormation2 />
            }
            if (PlayOrGameplanFormationValue == 3) {
                return <PlayOrGamePlanAwayFormation3 />
            }
            if (PlayOrGameplanFormationValue == 4) {
                return <PlayOrGamePlanAwayFormation4 />
            }
        } else if (awaySideValue == false) {
            return <PlayOrGamePlanAwayFormation1 />
        }
    }

    let homeTeamName = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].teamName;
    let awayTeamName = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].teamName;


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

    function GetHomeTeamGk1_position1() {
        return t1_gk1_position1
    }

    function GetHomeTeamGk1_surname() {
        return t1_gk1_surname
    }

    function GetHomeTeamGk1_rating() {
        return t1_gk1_rating
    }

    function GetHomeTeamLb1_position1() {
        return t1_lb1_position1
    }

    function GetHomeTeamLb1_surname() {
        return t1_lb1_surname
    }

    function GetHomeTeamLb1_rating() {
        return t1_lb1_rating
    }

    function GetHomeTeamCb1_position1() {
        return t1_cb1_position1
    }

    function GetHomeTeamCb1_surname() {
        return t1_cb1_surname
    }

    function GetHomeTeamCb1_rating() {
        return t1_cb1_rating
    }

    function GetHomeTeamCb2_position1() {
        return t1_cb2_position1
    }

    function GetHomeTeamCb2_surname() {
        return t1_cb2_surname
    }

    function GetHomeTeamCb2_rating() {
        return t1_cb2_rating
    }

    function GetHomeTeamRb1_position1() {
        return t1_rb1_position1
    }

    function GetHomeTeamRb1_surname() {
        return t1_rb1_surname
    }

    function GetHomeTeamRb1_rating() {
        return t1_rb1_rating
    }

    function GetHomeTeamDm1_position1() {
        return t1_dm1_position1
    }

    function GetHomeTeamDm1_surname() {
        return t1_dm1_surname
    }

    function GetHomeTeamDm1_rating() {
        return t1_dm1_rating
    }

    function GetHomeTeamCm1_position1() {
        return t1_cm1_position1
    }

    function GetHomeTeamCm1_surname() {
        return t1_cm1_surname
    }

    function GetHomeTeamCm1_rating() {
        return t1_cm1_rating
    }

    function GetHomeTeamCm2_position1() {
        return t1_cm2_position1
    }

    function GetHomeTeamCm2_surname() {
        return t1_cm2_surname
    }

    function GetHomeTeamCm2_rating() {
        return t1_cm2_rating
    }

    function GetHomeTeamLw1_position1() {
        return t1_lw1_position1
    }

    function GetHomeTeamLw1_surname() {
        return t1_lw1_surname
    }

    function GetHomeTeamLw1_rating() {
        return t1_lw1_rating
    }

    function GetHomeTeamRw1_position1() {
        return t1_rw1_position1
    }

    function GetHomeTeamRw1_surname() {
        return t1_rw1_surname
    }

    function GetHomeTeamRw1_rating() {
        return t1_rw1_rating
    }

    function GetHomeTeamSt1_position1() {
        return t1_st1_position1
    }

    function GetHomeTeamSt1_surname() {
        return t1_st1_surname
    }

    function GetHomeTeamSt1_rating() {
        return t1_st1_rating
    }



    function GetAwayTeamGk2_position1() {
        return t2_gk2_position1
    }

    function GetAwayTeamGk2_surname() {
        return t2_gk2_surname
    }

    function GetAwayTeamGk2_rating() {
        return t2_gk2_rating
    }

    function GetAwayTeamLb2_position1() {
        return t2_lb2_position1
    }

    function GetAwayTeamLb2_surname() {
        return t2_lb2_surname
    }

    function GetAwayTeamLb2_rating() {
        return t2_lb2_rating
    }

    function GetAwayTeamCb4_position1() {
        return t2_cb4_position1
    }

    function GetAwayTeamCb4_surname() {
        return t2_cb4_surname
    }

    function GetAwayTeamCb4_rating() {
        return t2_cb4_rating
    }

    function GetAwayTeamCb3_position1() {
        return t2_cb3_position1
    }

    function GetAwayTeamCb3_surname() {
        return t2_cb3_surname
    }

    function GetAwayTeamCb3_rating() {
        return t2_cb3_rating
    }

    function GetAwayTeamRb2_position1() {
        return t2_rb2_position1
    }

    function GetAwayTeamRb2_surname() {
        return t2_rb2_surname
    }

    function GetAwayTeamRb2_rating() {
        return t2_rb2_rating
    }

    function GetAwayTeamDm2_position1() {
        return t2_dm2_position1
    }

    function GetAwayTeamDm2_surname() {
        return t2_dm2_surname
    }

    function GetAwayTeamDm2_rating() {
        return t2_dm2_rating
    }

    function GetAwayTeamCm4_position1() {
        return t2_cm4_position1
    }

    function GetAwayTeamCm4_surname() {
        return t2_cm4_surname
    }

    function GetAwayTeamCm4_rating() {
        return t2_cm4_rating
    }

    function GetAwayTeamCm3_position1() {
        return t2_cm3_position1
    }

    function GetAwayTeamCm3_surname() {
        return t2_cm3_surname
    }

    function GetAwayTeamCm3_rating() {
        return t2_cm3_rating
    }

    function GetAwayTeamLw2_position1() {
        return t2_lw2_position1
    }

    function GetAwayTeamLw2_surname() {
        return t2_lw2_surname
    }

    function GetAwayTeamLw2_rating() {
        return t2_lw2_rating
    }

    function GetAwayTeamRw2_position1() {
        return t2_rw2_position1
    }

    function GetAwayTeamRw2_surname() {
        return t2_rw2_surname
    }

    function GetAwayTeamRw2_rating() {
        return t2_rw2_rating
    }

    function GetAwayTeamSt2_position1() {
        return t2_st2_position1
    }

    function GetAwayTeamSt2_surname() {
        return t2_st2_surname
    }

    function GetAwayTeamSt2_rating() {
        return t2_st2_rating
    }


    return (
        <div className='div-all-teams'>
            {ControlHomeAwaySideValue()}
            <div className='div-up-playorgameplan'>
                <div className='div-left-team1'>
                    {homeTeamName}
                    {PlayOrGameplanMenuFormationValue()}
                </div>
                <div className='div-select1'>
                    {HomeSelection()}
                </div>
                <div className='div-txt-vs'>
                    <p>VS</p>
                </div>
                <div className='div-select2'>
                    {AwaySelection()}
                </div>
                <div className='div-left-team2'>
                    {awayTeamName}
                </div>
            </div>
            <div className='div-mid-playorgameplan'>
                <div className='div-team1'>
                    {homeTeamFormation()}
                </div>
                <div className='div-team2'>
                    {awayTeamFormation()}
                </div>
            </div>
            <div className='div-down-playorgameplan'>
                <Link to={'/gameplanmenu'}><button className='buttons-playorgameplan'>{txtTacticsButton}</button></Link>
                <Link to='/playmatchmenuplayers'><button className='buttons-playorgameplan'>{txtPlayButton}</button></Link>
                <Link to={'/teamselect'}><button className='buttons-playorgameplan'>{txtBackToTeamsButton}</button></Link>
            </div>
        </div>
    )
}

export default Playorgameplan;
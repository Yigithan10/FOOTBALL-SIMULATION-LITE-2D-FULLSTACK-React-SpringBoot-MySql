import React, { useState } from 'react'
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'
import './Leagueselect.css'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux'
import {
  setHomeLeagueValue, setHomeLeagueValuePlus, setHomeLeagueValueSour,
  setAwayLeagueValue, setAwayLeagueValuePlus, setAwayLeagueValueSour
} from '../redux/leagueSlice';
import Languages from '../languages.json'

function Leagueselect() {

  const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
  const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

  const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
  const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

  const reduxLanguage = useSelector(
    (state) => state.setLanguage_login.language
  );
  const matchStartValueBool = useSelector(state => state.GetMatchStartValue_on.matchStartValue)

  const dispatch = useDispatch();

  let txtLeft = "<"
  let txtRight = ">"

  let txtContinueButton = Languages.languages[reduxLanguage].leagueselect.leagueselectContinue
  let txtBackToMenuButton = Languages.languages[reduxLanguage].leagueselect.leagueselectBackToMenu

  const [homeLeagueIndex, setHomeLeagueIndex] = useState(homeLeagueValue);

  function homeIdCountLeagues() {
    return (Leagues.leagues[homeLeagueIndex].leagueId)
  }

  function homeNameCountLeagues() {
    return (Leagues.leagues[homeLeagueIndex].leagueName)
  }

  function leaguePlus1() {
    if (homeLeagueIndex == (Leagues.leagues.length - 1)) {
      setHomeLeagueIndex(0)
      dispatch(setHomeLeagueValuePlus())
    } else {
      setHomeLeagueIndex(homeLeagueIndex + 1)
      dispatch(setHomeLeagueValuePlus())
    }
  }

  function leagueSour1() {
    if (homeLeagueIndex == 0) {
      let len1 = Leagues.leagues.length - 1
      setHomeLeagueIndex(homeLeagueIndex + len1)
      dispatch(setHomeLeagueValueSour())
    } else {
      setHomeLeagueIndex(homeLeagueIndex - 1)
      dispatch(setHomeLeagueValueSour())
    }
  }

  function ControlHomeAwaySideValue() {
    if (homeSideValue == false && awaySideValue == false) {
      return <Navigate to='/' />
    }
  }

  const [awayLeagueIndex, setAwayLeagueIndex] = useState(awayLeagueValue);

  function awayIdCountLeagues() {
    return (Leagues.leagues[awayLeagueIndex].leagueId)
  }

  function awayNameCountLeagues() {
    return (Leagues.leagues[awayLeagueIndex].leagueName)
  }

  function leaguePlus2() {
    if (awayLeagueIndex == (Leagues.leagues.length - 1)) {
      setAwayLeagueIndex(0)
      dispatch(setAwayLeagueValuePlus())
    } else {
      setAwayLeagueIndex(awayLeagueIndex + 1)
      dispatch(setAwayLeagueValuePlus())
    }
  }

  function leagueSour2() {
    if (awayLeagueIndex == 0) {
      let len2 = Leagues.leagues.length - 1
      setAwayLeagueIndex(awayLeagueIndex + len2)
      dispatch(setAwayLeagueValueSour())
    } else {
      setAwayLeagueIndex(awayLeagueIndex - 1)
      dispatch(setAwayLeagueValueSour())
    }
  }


  return (
    <div className='div-all-leagues'>
      {ControlHomeAwaySideValue()}
      {console.log(matchStartValueBool)}
      <div className='div-left1-btn'>
        <button onClick={leagueSour1} className='buttons-left-right-leagueselect'> {txtLeft} </button>
      </div>
      <div className='div-league1'>
        <div className='div-league1-up-leagueselect'>
          {homeIdCountLeagues()} / {Leagues.leagues.length}
        </div>
        <div className='div-league1-mid-leagueselect'>
          {homeNameCountLeagues()}
        </div>
        <div className='div-league1-down-leagueselect'>

        </div>
      </div>
      <div className='div-right1-btn'>
        <button onClick={leaguePlus1} className='buttons-left-right-leagueselect'> {txtRight} </button>
      </div>
      <div className='div-league-buttons'>
        <Link to={"/teamselect"}><button className='buttons-leagueselect'>{txtContinueButton}</button></Link>
        <Link to="/mainmenu"><button className='buttons-leagueselect'>{txtBackToMenuButton}</button></Link>
      </div>
      <div className='div-left2-btn'>
        <button onClick={leagueSour2} className='buttons-left-right-leagueselect'> {txtLeft} </button>
      </div>
      <div className='div-league2'>
        <div className='div-league2-up-leagueselect'>
          {awayIdCountLeagues()} / {Leagues.leagues.length}
        </div>
        <div className='div-league2-mid-leagueselect'>
          {awayNameCountLeagues()}
        </div>
        <div className='div-league2-down-leagueselect'>

        </div>
      </div>
      <div className='div-right2-btn'>
        <button onClick={leaguePlus2} className='buttons-left-right-leagueselect'> {txtRight} </button>
      </div>
    </div>
  )
}

export default Leagueselect;
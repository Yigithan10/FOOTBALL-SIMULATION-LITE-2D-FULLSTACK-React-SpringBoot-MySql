import React from 'react'
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'
import './Matchquitmenu.css'
import { useSelector, useDispatch } from 'react-redux'
import Languages from '../languages.json'

function Matchquitmenu() {

  const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
  const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

  const reduxLanguage = useSelector(
    (state) => state.setLanguage_login.language
  );

  let dispatch = useDispatch()

  function ControlHomeAwaySideValue() {
    if (homeSideValue == false && awaySideValue == false) {
      return <Navigate to='/' />
    }
  }

  let txtQuestion = Languages.languages[reduxLanguage].playmatchquit.playmatchquitQuestion1
  let txtInformation = Languages.languages[reduxLanguage].playmatchquit.playmatchquitInformation
  let txtYes = Languages.languages[reduxLanguage].playmatchquit.playmatchquitYes
  let txtNo = Languages.languages[reduxLanguage].playmatchquit.playmatchquitNo

  return (
    <div className='div-all-ask-buttons'>
      {ControlHomeAwaySideValue()}
      <div className='div-ask-quit'>
        <p>{txtQuestion}</p>
      </div>
      <div className='div-ask-quit2'>
        <p>{txtInformation}</p>
      </div>
      <div className='div-buttons-yes-no'>
        <Link to='/mainmenu'><button className='buttons-matchquitmenu'>{txtYes}</button></Link>
        <Link to='/playmatchmenuplayers'><button className='buttons-matchquitmenu'>{txtNo}</button></Link>
      </div>
    </div>
  )
}

export default Matchquitmenu;
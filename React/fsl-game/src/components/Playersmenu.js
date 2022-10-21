import React from 'react'
import Languages from '../languages.json'
import Leagues from '../leagues.json'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'

function Playersmenu() {

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

  t1_gk1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
  t1_lb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
  t1_cb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t1_cb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t1_rb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
  t1_dm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
  if (t1_cm1_position1 == "CM") {
    t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_cm1_position1 == "LW") {
    t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_cm1_position1 == "RW") {
    t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_cm1_position1 == "ST") {
    t1_cm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_cm2_position1 == "CM") {
    t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_cm2_position1 == "LW") {
    t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_cm2_position1 == "RW") {
    t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_cm2_position1 == "ST") {
    t1_cm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_lw1_position1 == "CM") {
    t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_lw1_position1 == "LW") {
    t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_lw1_position1 == "RW") {
    t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_lw1_position1 == "ST") {
    t1_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_rw1_position1 == "CM") {
    t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_rw1_position1 == "LW") {
    t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_rw1_position1 == "RW") {
    t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_rw1_position1 == "ST") {
    t1_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_st1_position1 == "CM") {
    t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_st1_position1 == "LW") {
    t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_st1_position1 == "RW") {
    t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_st1_position1 == "ST") {
    t1_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }

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

  t1_gk1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
  t1_lb1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
  t1_cb1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t1_cb2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t1_rb1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
  t1_dm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
  if (t1_cm1_position2 == "CM") {
    t1_cm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_cm1_position2 == "LW") {
    t1_cm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_cm1_position2 == "RW") {
    t1_cm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_cm1_position2 == "ST") {
    t1_cm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_cm2_position2 == "CM") {
    t1_cm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_cm2_position2 == "LW") {
    t1_cm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_cm2_position2 == "RW") {
    t1_cm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_cm2_position2 == "ST") {
    t1_cm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_lw1_position2 == "CM") {
    t1_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_lw1_position2 == "LW") {
    t1_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_lw1_position2 == "RW") {
    t1_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_lw1_position2 == "ST") {
    t1_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_rw1_position2 == "CM") {
    t1_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_rw1_position2 == "LW") {
    t1_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_rw1_position2 == "RW") {
    t1_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_rw1_position2 == "ST") {
    t1_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t1_st1_position2 == "CM") {
    t1_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t1_st1_position2 == "LW") {
    t1_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t1_st1_position2 == "RW") {
    t1_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t1_st1_position2 == "ST") {
    t1_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }

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

  const t1_gk1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_gk1].rating
  const t1_lb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lb1].rating
  const t1_cb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb1].rating
  const t1_cb2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cb2].rating
  const t1_rb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rb1].rating
  const t1_dm1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_dm1].rating
  const t1_cm1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm1].rating
  const t1_cm2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_cm2].rating
  const t1_lw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_lw1].rating
  const t1_rw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_rw1].rating
  const t1_st1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamIndex_st1].rating

  const t1_gk1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_gk1_energy)
  const t1_lb1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lb1_energy)
  const t1_cb1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb1_energy)
  const t1_cb2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb2_energy)
  const t1_rb1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rb1_energy)
  const t1_dm1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_dm1_energy)
  const t1_cm1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm1_energy)
  const t1_cm2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm2_energy)
  const t1_lw1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lw1_energy)
  const t1_rw1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rw1_energy)
  const t1_st1_energy = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_st1_energy)

  let t2_gk2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position1
  let t2_lb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position1
  let t2_cb4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position1
  let t2_cb3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position1
  let t2_rb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position1
  let t2_dm2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position1
  let t2_cm4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position1
  let t2_cm3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position1
  let t2_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position1
  let t2_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position1
  let t2_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position1

  t2_gk2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
  t2_lb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
  t2_cb4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t2_cb3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t2_rb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
  t2_dm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
  if (t2_cm4_position1 == "CM") {
    t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_cm4_position1 == "LW") {
    t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_cm4_position1 == "RW") {
    t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_cm4_position1 == "ST") {
    t2_cm4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_cm3_position1 == "CM") {
    t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_cm3_position1 == "LW") {
    t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_cm3_position1 == "RW") {
    t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_cm3_position1 == "ST") {
    t2_cm3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_lw2_position1 == "CM") {
    t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_lw2_position1 == "LW") {
    t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_lw2_position1 == "RW") {
    t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_lw2_position1 == "ST") {
    t2_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_rw2_position1 == "CM") {
    t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_rw2_position1 == "LW") {
    t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_rw2_position1 == "RW") {
    t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_rw2_position1 == "ST") {
    t2_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_st2_position1 == "CM") {
    t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_st2_position1 == "LW") {
    t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_st2_position1 == "RW") {
    t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_st2_position1 == "ST") {
    t2_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }

  let t2_gk2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position2
  let t2_lb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position2
  let t2_cb4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position2
  let t2_cb3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position2
  let t2_rb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position2
  let t2_dm2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position2
  let t2_cm4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position2
  let t2_cm3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position2
  let t2_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position2
  let t2_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position2
  let t2_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position2

  t2_gk2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
  t2_lb2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
  t2_cb4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t2_cb3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
  t2_rb2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
  t2_dm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
  if (t2_cm4_position2 == "CM") {
    t2_cm4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_cm4_position2 == "LW") {
    t2_cm4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_cm4_position2 == "RW") {
    t2_cm4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_cm4_position2 == "ST") {
    t2_cm4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_cm3_position2 == "CM") {
    t2_cm3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_cm3_position2 == "LW") {
    t2_cm3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_cm3_position2 == "RW") {
    t2_cm3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_cm3_position2 == "ST") {
    t2_cm3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_lw2_position2 == "CM") {
    t2_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_lw2_position2 == "LW") {
    t2_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_lw2_position2 == "RW") {
    t2_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_lw2_position2 == "ST") {
    t2_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_rw2_position2 == "CM") {
    t2_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_rw2_position2 == "LW") {
    t2_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_rw2_position2 == "RW") {
    t2_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_rw2_position2 == "ST") {
    t2_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }
  if (t2_st2_position2 == "CM") {
    t2_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
  } else if (t2_st2_position2 == "LW") {
    t2_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
  } else if (t2_st2_position2 == "RW") {
    t2_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
  } else if (t2_st2_position2 == "ST") {
    t2_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
  }

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

  const t2_gk2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].rating
  const t2_lb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].rating
  const t2_cb4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].rating
  const t2_cb3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].rating
  const t2_rb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].rating
  const t2_dm2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].rating
  const t2_cm4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].rating
  const t2_cm3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].rating
  const t2_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].rating
  const t2_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].rating
  const t2_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].rating

  const t2_gk2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_gk2_energy)
  const t2_lb2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lb2_energy)
  const t2_cb4_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb4_energy)
  const t2_cb3_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb3_energy)
  const t2_rb2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rb2_energy)
  const t2_dm2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_dm2_energy)
  const t2_cm4_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm4_energy)
  const t2_cm3_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm3_energy)
  const t2_lw2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rw2_energy)
  const t2_rw2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lw2_energy)
  const t2_st2_energy = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_st2_energy)

  const t1_gk1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_gk1_yellowCard)
  const t1_lb1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lb1_yellowCard)
  const t1_cb1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb1_yellowCard)
  const t1_cb2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb2_yellowCard)
  const t1_rb1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rb1_yellowCard)
  const t1_dm1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_dm1_yellowCard)
  const t1_cm1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm1_yellowCard)
  const t1_cm2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm2_yellowCard)
  const t1_lw1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lw1_yellowCard)
  const t1_rw1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rw1_yellowCard)
  const t1_st1_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_st1_yellowCard)

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

  const t2_gk2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_gk2_yellowCard)
  const t2_lb2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lb2_yellowCard)
  const t2_cb4_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb4_yellowCard)
  const t2_cb3_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb3_yellowCard)
  const t2_rb2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rb2_yellowCard)
  const t2_dm2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_dm2_yellowCard)
  const t2_cm4_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm4_yellowCard)
  const t2_cm3_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm3_yellowCard)
  const t2_lw2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lw2_yellowCard)
  const t2_rw2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rw2_yellowCard)
  const t2_st2_yellowCard = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_st2_yellowCard)

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



  let dispatch = useDispatch()

  let txtPlayersButton = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersPlayers
  let txtPosition = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersPosition
  let txtName = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersName
  let txtSurname = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersSurname
  let txtRating = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersRating
  let txtEnergy = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersEnergy
  let txtCards = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuPlayersCards



  function GetHomeTeamGk1_position1() {
    return t1_gk1_position1
  }

  function GetHomeTeamGk1_position2() {
    return t1_gk1_position2
  }

  function GetHomeTeamGk1_name() {
    return t1_gk1_name
  }

  function GetHomeTeamGk1_surname() {
    return t1_gk1_surname
  }

  function GetHomeTeamGk1_rating() {
    return t1_gk1_rating
  }

  function GetHomeTeamGk1_energy() {
    return t1_gk1_energy
  }

  function GetHomeTeamGk1_yellowCard() {
    if (t1_gk1_yellowCard == true) {
      return (
        <div className='div-homeTeam-gk1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamGk1_redCard() {
    if (t1_gk1_redCard == true) {
      return (
        <div className='div-homeTeam-gk1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamLb1_yellowCard() {
    if (t1_lb1_yellowCard == true) {
      return (
        <div className='div-homeTeam-lb1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamLb1_redCard() {
    if (t1_lb1_redCard == true) {
      return (
        <div className='div-homeTeam-lb1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCb1_yellowCard() {
    if (t1_cb1_yellowCard == true) {
      return (
        <div className='div-homeTeam-cb1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCb1_redCard() {
    if (t1_cb1_redCard == true) {
      return (
        <div className='div-homeTeam-cb1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCb2_yellowCard() {
    if (t1_cb2_yellowCard == true) {
      return (
        <div className='div-homeTeam-cb2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCb2_redCard() {
    if (t1_cb2_redCard == true) {
      return (
        <div className='div-homeTeam-cb2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamRb1_yellowCard() {
    if (t1_rb1_yellowCard == true) {
      return (
        <div className='div-homeTeam-rb1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamRb1_redCard() {
    if (t1_rb1_redCard == true) {
      return (
        <div className='div-homeTeam-rb1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamDm1_yellowCard() {
    if (t1_dm1_yellowCard == true) {
      return (
        <div className='div-homeTeam-dm1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamDm1_redCard() {
    if (t1_dm1_redCard == true) {
      return (
        <div className='div-homeTeam-dm1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCm1_yellowCard() {
    if (t1_cm1_yellowCard == true) {
      return (
        <div className='div-homeTeam-cm1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCm1_redCard() {
    if (t1_cm1_redCard == true) {
      return (
        <div className='div-homeTeam-cm1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCm2_yellowCard() {
    if (t1_cm2_yellowCard == true) {
      return (
        <div className='div-homeTeam-cm2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamCm2_redCard() {
    if (t1_cm2_redCard == true) {
      return (
        <div className='div-homeTeam-cm2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamLw1_yellowCard() {
    if (t1_lw1_yellowCard == true) {
      return (
        <div className='div-homeTeam-lw1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamLw1_redCard() {
    if (t1_lw1_redCard == true) {
      return (
        <div className='div-homeTeam-lw1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamRw1_yellowCard() {
    if (t1_rw1_yellowCard == true) {
      return (
        <div className='div-homeTeam-rw1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamRw1_redCard() {
    if (t1_rw1_redCard == true) {
      return (
        <div className='div-homeTeam-rw1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamSt1_yellowCard() {
    if (t1_st1_yellowCard == true) {
      return (
        <div className='div-homeTeam-st1-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetHomeTeamSt1_redCard() {
    if (t1_st1_redCard == true) {
      return (
        <div className='div-homeTeam-st1-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }







  function GetAwayTeamGk2_yellowCard() {
    if (t2_gk2_yellowCard == true) {
      return (
        <div className='div-awayTeam-gk2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamGk2_redCard() {
    if (t2_gk2_redCard == true) {
      return (
        <div className='div-awayTeam-gk2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamLb2_yellowCard() {
    if (t2_lb2_yellowCard == true) {
      return (
        <div className='div-awayTeam-lb2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamLb2_redCard() {
    if (t2_lb2_redCard == true) {
      return (
        <div className='div-awayTeam-lb2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCb4_yellowCard() {
    if (t2_cb4_yellowCard == true) {
      return (
        <div className='div-awayTeam-cb4-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCb4_redCard() {
    if (t2_cb4_redCard == true) {
      return (
        <div className='div-awayTeam-cb4-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCb3_yellowCard() {
    if (t2_cb3_yellowCard == true) {
      return (
        <div className='div-awayTeam-cb3-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCb3_redCard() {
    if (t2_cb3_redCard == true) {
      return (
        <div className='div-awayTeam-cb3-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamRb2_yellowCard() {
    if (t2_rb2_yellowCard == true) {
      return (
        <div className='div-awayTeam-rb2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamRb2_redCard() {
    if (t2_rb2_redCard == true) {
      return (
        <div className='div-awayTeam-rb2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamDm2_yellowCard() {
    if (t2_dm2_yellowCard == true) {
      return (
        <div className='div-awayTeam-dm2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamDm2_redCard() {
    if (t2_dm2_redCard == true) {
      return (
        <div className='div-awayTeam-dm2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCm4_yellowCard() {
    if (t2_cm4_yellowCard == true) {
      return (
        <div className='div-awayTeam-cm4-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCm4_redCard() {
    if (t2_cm4_redCard == true) {
      return (
        <div className='div-awayTeam-cm4-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCm3_yellowCard() {
    if (t2_cm3_yellowCard == true) {
      return (
        <div className='div-awayTeam-cm3-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamCm3_redCard() {
    if (t2_cm3_redCard == true) {
      return (
        <div className='div-awayTeam-cm3-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamLw2_yellowCard() {
    if (t2_lw2_yellowCard == true) {
      return (
        <div className='div-awayTeam-lw2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamLw2_redCard() {
    if (t2_lw2_redCard == true) {
      return (
        <div className='div-awayTeam-lw2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamRw2_yellowCard() {
    if (t2_rw2_yellowCard == true) {
      return (
        <div className='div-awayTeam-rw2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamRw2_redCard() {
    if (t2_rw2_redCard == true) {
      return (
        <div className='div-awayTeam-rw2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamSt2_yellowCard() {
    if (t2_st2_yellowCard == true) {
      return (
        <div className='div-awayTeam-st2-yellowCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }

  function GetAwayTeamSt2_redCard() {
    if (t2_st2_redCard == true) {
      return (
        <div className='div-awayTeam-st2-redCard'>

        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }












  function GetHomeTeamLb1_position1() {
    return t1_lb1_position1
  }

  function GetHomeTeamLb1_position2() {
    return t1_lb1_position2
  }

  function GetHomeTeamLb1_name() {
    return t1_lb1_name
  }

  function GetHomeTeamLb1_surname() {
    return t1_lb1_surname
  }

  function GetHomeTeamLb1_rating() {
    return t1_lb1_rating
  }

  function GetHomeTeamLb1_energy() {
    return t1_lb1_energy
  }

  function GetHomeTeamCb1_position1() {
    return t1_cb1_position1
  }

  function GetHomeTeamCb1_position2() {
    return t1_cb1_position2
  }

  function GetHomeTeamCb1_name() {
    return t1_cb1_name
  }

  function GetHomeTeamCb1_surname() {
    return t1_cb1_surname
  }

  function GetHomeTeamCb1_rating() {
    return t1_cb1_rating
  }

  function GetHomeTeamCb1_energy() {
    return t1_cb1_energy
  }

  function GetHomeTeamCb2_position1() {
    return t1_cb2_position1
  }

  function GetHomeTeamCb2_position2() {
    return t1_cb2_position2
  }

  function GetHomeTeamCb2_name() {
    return t1_cb2_name
  }

  function GetHomeTeamCb2_surname() {
    return t1_cb2_surname
  }

  function GetHomeTeamCb2_rating() {
    return t1_cb2_rating
  }

  function GetHomeTeamCb2_energy() {
    return t1_cb2_energy
  }

  function GetHomeTeamRb1_position1() {
    return t1_rb1_position1
  }

  function GetHomeTeamRb1_position2() {
    return t1_rb1_position2
  }

  function GetHomeTeamRb1_name() {
    return t1_rb1_name
  }

  function GetHomeTeamRb1_surname() {
    return t1_rb1_surname
  }

  function GetHomeTeamRb1_rating() {
    return t1_rb1_rating
  }

  function GetHomeTeamRb1_energy() {
    return t1_rb1_energy
  }

  function GetHomeTeamDm1_position1() {
    return t1_dm1_position1
  }

  function GetHomeTeamDm1_position2() {
    return t1_dm1_position2
  }

  function GetHomeTeamDm1_name() {
    return t1_dm1_name
  }

  function GetHomeTeamDm1_surname() {
    return t1_dm1_surname
  }

  function GetHomeTeamDm1_rating() {
    return t1_dm1_rating
  }

  function GetHomeTeamDm1_energy() {
    return t1_dm1_energy
  }

  function GetHomeTeamCm1_position1() {
    return t1_cm1_position1
  }

  function GetHomeTeamCm1_position2() {
    return t1_cm1_position2
  }

  function GetHomeTeamCm1_name() {
    return t1_cm1_name
  }

  function GetHomeTeamCm1_surname() {
    return t1_cm1_surname
  }

  function GetHomeTeamCm1_rating() {
    return t1_cm1_rating
  }

  function GetHomeTeamCm1_energy() {
    return t1_cm1_energy
  }

  function GetHomeTeamCm2_position1() {
    return t1_cm2_position1
  }

  function GetHomeTeamCm2_position2() {
    return t1_cm2_position2
  }

  function GetHomeTeamCm2_name() {
    return t1_cm2_name
  }

  function GetHomeTeamCm2_surname() {
    return t1_cm2_surname
  }

  function GetHomeTeamCm2_rating() {
    return t1_cm2_rating
  }

  function GetHomeTeamCm2_energy() {
    return t1_cm2_energy
  }

  function GetHomeTeamLw1_position1() {
    return t1_lw1_position1
  }

  function GetHomeTeamLw1_position2() {
    return t1_lw1_position2
  }

  function GetHomeTeamLw1_name() {
    return t1_lw1_name
  }

  function GetHomeTeamLw1_surname() {
    return t1_lw1_surname
  }

  function GetHomeTeamLw1_rating() {
    return t1_lw1_rating
  }

  function GetHomeTeamLw1_energy() {
    return t1_lw1_energy
  }

  function GetHomeTeamRw1_position1() {
    return t1_rw1_position1
  }

  function GetHomeTeamRw1_position2() {
    return t1_rw1_position2
  }

  function GetHomeTeamRw1_name() {
    return t1_rw1_name
  }

  function GetHomeTeamRw1_surname() {
    return t1_rw1_surname
  }

  function GetHomeTeamRw1_rating() {
    return t1_rw1_rating
  }

  function GetHomeTeamRw1_energy() {
    return t1_rw1_energy
  }

  function GetHomeTeamSt1_position1() {
    return t1_st1_position1
  }

  function GetHomeTeamSt1_position2() {
    return t1_st1_position2
  }

  function GetHomeTeamSt1_name() {
    return t1_st1_name
  }

  function GetHomeTeamSt1_surname() {
    return t1_st1_surname
  }

  function GetHomeTeamSt1_rating() {
    return t1_st1_rating
  }

  function GetHomeTeamSt1_energy() {
    return t1_st1_energy
  }



  function GetAwayTeamGk2_position1() {
    return t2_gk2_position1
  }

  function GetAwayTeamGk2_position2() {
    return t2_gk2_position2
  }

  function GetAwayTeamGk2_name() {
    return t2_gk2_name
  }

  function GetAwayTeamGk2_surname() {
    return t2_gk2_surname
  }

  function GetAwayTeamGk2_rating() {
    return t2_gk2_rating
  }

  function GetAwayTeamGk2_energy() {
    return t2_gk2_energy
  }

  function GetAwayTeamLb2_position1() {
    return t2_lb2_position1
  }

  function GetAwayTeamLb2_position2() {
    return t2_lb2_position2
  }

  function GetAwayTeamLb2_name() {
    return t2_lb2_name
  }

  function GetAwayTeamLb2_surname() {
    return t2_lb2_surname
  }

  function GetAwayTeamLb2_rating() {
    return t2_lb2_rating
  }

  function GetAwayTeamLb2_energy() {
    return t2_lb2_energy
  }

  function GetAwayTeamCb4_position1() {
    return t2_cb4_position1
  }

  function GetAwayTeamCb4_position2() {
    return t2_cb4_position2
  }

  function GetAwayTeamCb4_name() {
    return t2_cb4_name
  }

  function GetAwayTeamCb4_surname() {
    return t2_cb4_surname
  }

  function GetAwayTeamCb4_rating() {
    return t2_cb4_rating
  }

  function GetAwayTeamCb4_energy() {
    return t2_cb4_energy
  }

  function GetAwayTeamCb3_position1() {
    return t2_cb3_position1
  }

  function GetAwayTeamCb3_position2() {
    return t2_cb3_position2
  }

  function GetAwayTeamCb3_name() {
    return t2_cb3_name
  }

  function GetAwayTeamCb3_surname() {
    return t2_cb3_surname
  }

  function GetAwayTeamCb3_rating() {
    return t2_cb3_rating
  }

  function GetAwayTeamCb3_energy() {
    return t2_cb3_energy
  }

  function GetAwayTeamRb2_position1() {
    return t2_rb2_position1
  }

  function GetAwayTeamRb2_position2() {
    return t2_rb2_position2
  }

  function GetAwayTeamRb2_name() {
    return t2_rb2_name
  }

  function GetAwayTeamRb2_surname() {
    return t2_rb2_surname
  }

  function GetAwayTeamRb2_rating() {
    return t2_rb2_rating
  }

  function GetAwayTeamRb2_energy() {
    return t2_rb2_energy
  }

  function GetAwayTeamDm2_position1() {
    return t2_dm2_position1
  }

  function GetAwayTeamDm2_position2() {
    return t2_dm2_position2
  }

  function GetAwayTeamDm2_name() {
    return t2_dm2_name
  }

  function GetAwayTeamDm2_surname() {
    return t2_dm2_surname
  }

  function GetAwayTeamDm2_rating() {
    return t2_dm2_rating
  }

  function GetAwayTeamDm2_energy() {
    return t2_dm2_energy
  }

  function GetAwayTeamCm4_position1() {
    return t2_cm4_position1
  }

  function GetAwayTeamCm4_position2() {
    return t2_cm4_position2
  }

  function GetAwayTeamCm4_name() {
    return t2_cm4_name
  }

  function GetAwayTeamCm4_surname() {
    return t2_cm4_surname
  }

  function GetAwayTeamCm4_rating() {
    return t2_cm4_rating
  }

  function GetAwayTeamCm4_energy() {
    return t2_cm4_energy
  }

  function GetAwayTeamCm3_position1() {
    return t2_cm3_position1
  }

  function GetAwayTeamCm3_position2() {
    return t2_cm3_position2
  }

  function GetAwayTeamCm3_name() {
    return t2_cm3_name
  }

  function GetAwayTeamCm3_surname() {
    return t2_cm3_surname
  }

  function GetAwayTeamCm3_rating() {
    return t2_cm3_rating
  }

  function GetAwayTeamCm3_energy() {
    return t2_cm3_energy
  }

  function GetAwayTeamLw2_position1() {
    return t2_lw2_position1
  }

  function GetAwayTeamLw2_position2() {
    return t2_lw2_position2
  }

  function GetAwayTeamLw2_name() {
    return t2_lw2_name
  }

  function GetAwayTeamLw2_surname() {
    return t2_lw2_surname
  }

  function GetAwayTeamLw2_rating() {
    return t2_lw2_rating
  }

  function GetAwayTeamLw2_energy() {
    return t2_lw2_energy
  }

  function GetAwayTeamRw2_position1() {
    return t2_rw2_position1
  }

  function GetAwayTeamRw2_position2() {
    return t2_rw2_position2
  }

  function GetAwayTeamRw2_name() {
    return t2_rw2_name
  }

  function GetAwayTeamRw2_surname() {
    return t2_rw2_surname
  }

  function GetAwayTeamRw2_rating() {
    return t2_rw2_rating
  }

  function GetAwayTeamRw2_energy() {
    return t2_rw2_energy
  }

  function GetAwayTeamSt2_position1() {
    return t2_st2_position1
  }

  function GetAwayTeamSt2_position2() {
    return t2_st2_position2
  }

  function GetAwayTeamSt2_name() {
    return t2_st2_name
  }

  function GetAwayTeamSt2_surname() {
    return t2_st2_surname
  }

  function GetAwayTeamSt2_rating() {
    return t2_st2_rating
  }

  function GetAwayTeamSt2_energy() {
    return t2_st2_energy
  }







  return (
    <div>
      <div className='div-mid-team1-players-playmatchmenuplayers'>
        <div className='div-mid-team1-txt-playmatchmenuplayers'>
          <div className='div-mid-team1-txt-position-playmatchmenuplayers'>
            {txtPosition}
          </div>
          <div className='div-mid-team1-txt-name-playmatchmenuplayers'>
            {txtName}
          </div>
          <div className='div-mid-team1-txt-surname-playmatchmenuplayers'>
            {txtSurname}
          </div>
          <div className='div-mid-team1-txt-rating-playmatchmenuplayers'>
            {txtRating}
          </div>
          <div className='div-mid-team1-txt-energy-playmatchmenuplayers'>
            {txtEnergy}
          </div>
          <div className='div-mid-team1-txt-cards-playmatchmenuplayers'>
            {txtCards}
          </div>
        </div>
        <div className='div-mid-team1-player1-playmatchmenuplayers'>
          <div className='div-mid-team1-player1-position-playmatchmenuplayers'>
            {GetHomeTeamGk1_position1() + " - " + GetHomeTeamGk1_position2()}
          </div>
          <div className='div-mid-team1-player1-name-playmatchmenuplayers'>
            {GetHomeTeamGk1_name()}
          </div>
          <div className='div-mid-team1-player1-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player1-surname-playmatchmenuplayers'>
            {GetHomeTeamGk1_surname()}
          </div>
          <div className='div-mid-team1-player1-rating-playmatchmenuplayers'>
            {GetHomeTeamGk1_rating()}
          </div>
          <div className='div-mid-team1-player1-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamGk1_energy()}
          </div>
          <div className='div-mid-team1-player1-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player11-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamGk1_yellowCard()}
            </div>
            <div className='div-mid-team1-player11-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamGk1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player2-playmatchmenuplayers'>
          <div className='div-mid-team1-player2-position-playmatchmenuplayers'>
            {GetHomeTeamLb1_position1() + " - " + GetHomeTeamLb1_position2()}
          </div>
          <div className='div-mid-team1-player2-name-playmatchmenuplayers'>
            {GetHomeTeamLb1_name()}
          </div>
          <div className='div-mid-team1-player2-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player2-surname-playmatchmenuplayers'>
            {GetHomeTeamLb1_surname()}
          </div>
          <div className='div-mid-team1-player2-rating-playmatchmenuplayers'>
            {GetHomeTeamLb1_rating()}
          </div>
          <div className='div-mid-team1-player2-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamLb1_energy()}
          </div>
          <div className='div-mid-team1-player2-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player2-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamLb1_yellowCard()}
            </div>
            <div className='div-mid-team1-player2-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamLb1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player3-playmatchmenuplayers'>
          <div className='div-mid-team1-player3-position-playmatchmenuplayers'>
            {GetHomeTeamCb1_position1() + " - " + GetHomeTeamCb1_position2()}
          </div>
          <div className='div-mid-team1-player3-name-playmatchmenuplayers'>
            {GetHomeTeamCb1_name()}
          </div>
          <div className='div-mid-team1-player3-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player3-surname-playmatchmenuplayers'>
            {GetHomeTeamCb1_surname()}
          </div>
          <div className='div-mid-team1-player3-rating-playmatchmenuplayers'>
            {GetHomeTeamCb1_rating()}
          </div>
          <div className='div-mid-team1-player3-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamCb1_energy()}
          </div>
          <div className='div-mid-team1-player3-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player3-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamCb1_yellowCard()}
            </div>
            <div className='div-mid-team1-player3-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamCb1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player4-playmatchmenuplayers'>
          <div className='div-mid-team1-player4-position-playmatchmenuplayers'>
            {GetHomeTeamCb2_position1() + " - " + GetHomeTeamCb2_position2()}
          </div>
          <div className='div-mid-team1-player4-name-playmatchmenuplayers'>
            {GetHomeTeamCb2_name()}
          </div>
          <div className='div-mid-team1-player4-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player4-surname-playmatchmenuplayers'>
            {GetHomeTeamCb2_surname()}
          </div>
          <div className='div-mid-team1-player4-rating-playmatchmenuplayers'>
            {GetHomeTeamCb2_rating()}
          </div>
          <div className='div-mid-team1-player4-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamCb2_energy()}
          </div>
          <div className='div-mid-team1-player4-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player4-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamCb2_yellowCard()}
            </div>
            <div className='div-mid-team1-player4-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamCb2_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player5-playmatchmenuplayers'>
          <div className='div-mid-team1-player5-position-playmatchmenuplayers'>
            {GetHomeTeamRb1_position1() + " - " + GetHomeTeamRb1_position2()}
          </div>
          <div className='div-mid-team1-player5-name-playmatchmenuplayers'>
            {GetHomeTeamRb1_name()}
          </div>
          <div className='div-mid-team1-player5-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player5-surname-playmatchmenuplayers'>
            {GetHomeTeamRb1_surname()}
          </div>
          <div className='div-mid-team1-player5-rating-playmatchmenuplayers'>
            {GetHomeTeamRb1_rating()}
          </div>
          <div className='div-mid-team1-player5-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamRb1_energy()}
          </div>
          <div className='div-mid-team1-player5-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player5-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamRb1_yellowCard()}
            </div>
            <div className='div-mid-team1-player5-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamRb1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player6-playmatchmenuplayers'>
          <div className='div-mid-team1-player6-position-playmatchmenuplayers'>
            {GetHomeTeamDm1_position1() + " - " + GetHomeTeamDm1_position2()}
          </div>
          <div className='div-mid-team1-player6-name-playmatchmenuplayers'>
            {GetHomeTeamDm1_name()}
          </div>
          <div className='div-mid-team1-player6-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player6-surname-playmatchmenuplayers'>
            {GetHomeTeamDm1_surname()}
          </div>
          <div className='div-mid-team1-player6-rating-playmatchmenuplayers'>
            {GetHomeTeamDm1_rating()}
          </div>
          <div className='div-mid-team1-player6-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamDm1_energy()}
          </div>
          <div className='div-mid-team1-player6-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player6-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamDm1_yellowCard()}
            </div>
            <div className='div-mid-team1-player6-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamDm1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player7-playmatchmenuplayers'>
          <div className='div-mid-team1-player7-position-playmatchmenuplayers'>
            {GetHomeTeamCm1_position1() + " - " + GetHomeTeamCm1_position2()}
          </div>
          <div className='div-mid-team1-player7-name-playmatchmenuplayers'>
            {GetHomeTeamCm1_name()}
          </div>
          <div className='div-mid-team1-player7-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player7-surname-playmatchmenuplayers'>
            {GetHomeTeamCm1_surname()}
          </div>
          <div className='div-mid-team1-player7-rating-playmatchmenuplayers'>
            {GetHomeTeamCm1_rating()}
          </div>
          <div className='div-mid-team1-player7-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamCm1_energy()}
          </div>
          <div className='div-mid-team1-player7-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player7-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamCm1_yellowCard()}
            </div>
            <div className='div-mid-team1-player7-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamCm1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player8-playmatchmenuplayers'>
          <div className='div-mid-team1-player8-position-playmatchmenuplayers'>
            {GetHomeTeamCm2_position1() + " - " + GetHomeTeamCm2_position2()}
          </div>
          <div className='div-mid-team1-player8-name-playmatchmenuplayers'>
            {GetHomeTeamCm2_name()}
          </div>
          <div className='div-mid-team1-player8-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player8-surname-playmatchmenuplayers'>
            {GetHomeTeamCm2_surname()}
          </div>
          <div className='div-mid-team1-player8-rating-playmatchmenuplayers'>
            {GetHomeTeamCm2_rating()}
          </div>
          <div className='div-mid-team1-player8-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamCm2_energy()}
          </div>
          <div className='div-mid-team1-player8-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player8-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamCm2_yellowCard()}
            </div>
            <div className='div-mid-team1-player8-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamCm2_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player9-playmatchmenuplayers'>
          <div className='div-mid-team1-player9-position-playmatchmenuplayers'>
            {GetHomeTeamLw1_position1() + " - " + GetHomeTeamLw1_position2()}
          </div>
          <div className='div-mid-team1-player9-name-playmatchmenuplayers'>
            {GetHomeTeamLw1_name()}
          </div>
          <div className='div-mid-team1-player9-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player9-surname-playmatchmenuplayers'>
            {GetHomeTeamLw1_surname()}
          </div>
          <div className='div-mid-team1-player9-rating-playmatchmenuplayers'>
            {GetHomeTeamLw1_rating()}
          </div>
          <div className='div-mid-team1-player9-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamLw1_energy()}
          </div>
          <div className='div-mid-team1-player9-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player9-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamLw1_yellowCard()}
            </div>
            <div className='div-mid-team1-player9-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamLw1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player10-playmatchmenuplayers'>
          <div className='div-mid-team1-player10-position-playmatchmenuplayers'>
            {GetHomeTeamRw1_position1() + " - " + GetHomeTeamRw1_position2()}
          </div>
          <div className='div-mid-team1-player10-name-playmatchmenuplayers'>
            {GetHomeTeamRw1_name()}
          </div>
          <div className='div-mid-team1-player10-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player10-surname-playmatchmenuplayers'>
            {GetHomeTeamRw1_surname()}
          </div>
          <div className='div-mid-team1-player10-rating-playmatchmenuplayers'>
            {GetHomeTeamRw1_rating()}
          </div>
          <div className='div-mid-team1-player10-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamRw1_energy()}
          </div>
          <div className='div-mid-team1-player10-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player10-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamRw1_yellowCard()}
            </div>
            <div className='div-mid-team1-player10-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamRw1_redCard()}
            </div>
          </div>
        </div>
        <div className='div-mid-team1-player11-playmatchmenuplayers'>
          <div className='div-mid-team1-player11-position-playmatchmenuplayers'>
            {GetHomeTeamSt1_position1() + " - " + GetHomeTeamSt1_position2()}
          </div>
          <div className='div-mid-team1-player11-name-playmatchmenuplayers'>
            {GetHomeTeamSt1_name()}
          </div>
          <div className='div-mid-team1-player11-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team1-player11-surname-playmatchmenuplayers'>
            {GetHomeTeamSt1_surname()}
          </div>
          <div className='div-mid-team1-player11-rating-playmatchmenuplayers'>
            {GetHomeTeamSt1_rating()}
          </div>
          <div className='div-mid-team1-player11-energy-playmatchmenuplayers'>
            {"%" + GetHomeTeamSt1_energy()}
          </div>
          <div className='div-mid-team1-player11-cards-playmatchmenuplayers'>
            <div className='div-mid-team1-player11-yellowCardBox-playmatchmenuplayers'>
              {GetHomeTeamSt1_yellowCard()}
            </div>
            <div className='div-mid-team1-player11-redCardBox-playmatchmenuplayers'>
              {GetHomeTeamSt1_redCard()}
            </div>
          </div>
        </div>
      </div>
      <div className='div-mid-team2-players-playmatchmenuplayers'>
        <div className='div-mid-team2-txt-playmatchmenuplayers'>
          <div className='div-mid-team2-txt-cards-playmatchmenuplayers'>
            {txtCards}
          </div>
          <div className='div-mid-team2-txt-position-playmatchmenuplayers'>
            {txtPosition}
          </div>
          <div className='div-mid-team2-txt-name-playmatchmenuplayers'>
            {txtName}
          </div>
          <div className='div-mid-team2-txt-surname-playmatchmenuplayers'>
            {txtSurname}
          </div>
          <div className='div-mid-team2-txt-rating-playmatchmenuplayers'>
            {txtRating}
          </div>
          <div className='div-mid-team2-txt-energy-playmatchmenuplayers'>
            {txtEnergy}
          </div>
        </div>
        <div className='div-mid-team2-player1-playmatchmenuplayers'>
          <div className='div-mid-team2-player1-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player1-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamGk2_redCard()}
            </div>
            <div className='div-mid-team2-player1-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamGk2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player1-position-playmatchmenuplayers'>
            {GetAwayTeamGk2_position1() + " - " + GetAwayTeamGk2_position2()}
          </div>
          <div className='div-mid-team2-player1-name-playmatchmenuplayers'>
            {GetAwayTeamGk2_name()}
          </div>
          <div className='div-mid-team2-player1-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player1-surname-playmatchmenuplayers'>
            {GetAwayTeamGk2_surname()}
          </div>
          <div className='div-mid-team2-player1-rating-playmatchmenuplayers'>
            {GetAwayTeamGk2_rating()}
          </div>
          <div className='div-mid-team2-player1-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamGk2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player2-playmatchmenuplayers'>
          <div className='div-mid-team2-player2-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player2-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamLb2_redCard()}
            </div>
            <div className='div-mid-team2-player2-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamLb2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player2-position-playmatchmenuplayers'>
            {GetAwayTeamLb2_position1() + " - " + GetAwayTeamLb2_position2()}
          </div>
          <div className='div-mid-team2-player2-name-playmatchmenuplayers'>
            {GetAwayTeamLb2_name()}
          </div>
          <div className='div-mid-team2-player2-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player2-surname-playmatchmenuplayers'>
            {GetAwayTeamLb2_surname()}
          </div>
          <div className='div-mid-team2-player2-rating-playmatchmenuplayers'>
            {GetAwayTeamLb2_rating()}
          </div>
          <div className='div-mid-team2-player2-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamLb2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player3-playmatchmenuplayers'>
          <div className='div-mid-team2-player3-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player3-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamCb4_redCard()}
            </div>
            <div className='div-mid-team2-player3-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamCb4_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player3-position-playmatchmenuplayers'>
            {GetAwayTeamCb4_position1() + " - " + GetAwayTeamCb4_position2()}
          </div>
          <div className='div-mid-team2-player3-name-playmatchmenuplayers'>
            {GetAwayTeamCb4_name()}
          </div>
          <div className='div-mid-team2-player3-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player3-surname-playmatchmenuplayers'>
            {GetAwayTeamCb4_surname()}
          </div>
          <div className='div-mid-team2-player3-rating-playmatchmenuplayers'>
            {GetAwayTeamCb4_rating()}
          </div>
          <div className='div-mid-team2-player3-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamCb4_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player4-playmatchmenuplayers'>
          <div className='div-mid-team2-player4-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player4-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamCb3_redCard()}
            </div>
            <div className='div-mid-team2-player4-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamCb3_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player4-position-playmatchmenuplayers'>
            {GetAwayTeamCb3_position1() + " - " + GetAwayTeamCb3_position2()}
          </div>
          <div className='div-mid-team2-player4-name-playmatchmenuplayers'>
            {GetAwayTeamCb3_name()}
          </div>
          <div className='div-mid-team2-player4-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player4-surname-playmatchmenuplayers'>
            {GetAwayTeamCb3_surname()}
          </div>
          <div className='div-mid-team2-player4-rating-playmatchmenuplayers'>
            {GetAwayTeamCb3_rating()}
          </div>
          <div className='div-mid-team2-player4-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamCb3_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player5-playmatchmenuplayers'>
          <div className='div-mid-team2-player5-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player5-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamRb2_redCard()}
            </div>
            <div className='div-mid-team2-player5-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamRb2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player5-position-playmatchmenuplayers'>
            {GetAwayTeamRb2_position1() + " - " + GetAwayTeamRb2_position2()}
          </div>
          <div className='div-mid-team2-player5-name-playmatchmenuplayers'>
            {GetAwayTeamRb2_name()}
          </div>
          <div className='div-mid-team2-player5-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player5-surname-playmatchmenuplayers'>
            {GetAwayTeamRb2_surname()}
          </div>
          <div className='div-mid-team2-player5-rating-playmatchmenuplayers'>
            {GetAwayTeamRb2_rating()}
          </div>
          <div className='div-mid-team2-player5-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamRb2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player6-playmatchmenuplayers'>
          <div className='div-mid-team2-player6-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player6-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamDm2_redCard()}
            </div>
            <div className='div-mid-team2-player6-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamDm2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player6-position-playmatchmenuplayers'>
            {GetAwayTeamDm2_position1() + " - " + GetAwayTeamDm2_position2()}
          </div>
          <div className='div-mid-team2-player6-name-playmatchmenuplayers'>
            {GetAwayTeamDm2_name()}
          </div>
          <div className='div-mid-team2-player6-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player6-surname-playmatchmenuplayers'>
            {GetAwayTeamDm2_surname()}
          </div>
          <div className='div-mid-team2-player6-rating-playmatchmenuplayers'>
            {GetAwayTeamDm2_rating()}
          </div>
          <div className='div-mid-team2-player6-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamDm2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player7-playmatchmenuplayers'>
          <div className='div-mid-team2-player7-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player7-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamCm4_redCard()}
            </div>
            <div className='div-mid-team2-player7-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamCm4_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player7-position-playmatchmenuplayers'>
            {GetAwayTeamCm4_position1() + " - " + GetAwayTeamCm4_position2()}
          </div>
          <div className='div-mid-team2-player7-name-playmatchmenuplayers'>
            {GetAwayTeamCm4_name()}
          </div>
          <div className='div-mid-team2-player7-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player7-surname-playmatchmenuplayers'>
            {GetAwayTeamCm4_surname()}
          </div>
          <div className='div-mid-team2-player7-rating-playmatchmenuplayers'>
            {GetAwayTeamCm4_rating()}
          </div>
          <div className='div-mid-team2-player7-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamCm4_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player8-playmatchmenuplayers'>
          <div className='div-mid-team2-player8-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player8-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamCm3_redCard()}
            </div>
            <div className='div-mid-team2-player8-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamCm3_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player8-position-playmatchmenuplayers'>
            {GetAwayTeamCm3_position1() + " - " + GetAwayTeamCm3_position2()}
          </div>
          <div className='div-mid-team2-player8-name-playmatchmenuplayers'>
            {GetAwayTeamCm3_name()}
          </div>
          <div className='div-mid-team2-player8-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player8-surname-playmatchmenuplayers'>
            {GetAwayTeamCm3_surname()}
          </div>
          <div className='div-mid-team2-player8-rating-playmatchmenuplayers'>
            {GetAwayTeamCm3_rating()}
          </div>
          <div className='div-mid-team2-player8-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamCm3_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player9-playmatchmenuplayers'>
          <div className='div-mid-team2-player9-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player9-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamLw2_redCard()}
            </div>
            <div className='div-mid-team2-player9-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamLw2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player9-position-playmatchmenuplayers'>
            {GetAwayTeamLw2_position1() + " - " + GetAwayTeamLw2_position2()}
          </div>
          <div className='div-mid-team2-player9-name-playmatchmenuplayers'>
            {GetAwayTeamLw2_name()}
          </div>
          <div className='div-mid-team2-player9-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player9-surname-playmatchmenuplayers'>
            {GetAwayTeamLw2_surname()}
          </div>
          <div className='div-mid-team2-player9-rating-playmatchmenuplayers'>
            {GetAwayTeamLw2_rating()}
          </div>
          <div className='div-mid-team2-player9-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamLw2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player10-playmatchmenuplayers'>
          <div className='div-mid-team2-player10-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player10-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamRw2_redCard()}
            </div>
            <div className='div-mid-team2-player10-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamRw2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player10-position-playmatchmenuplayers'>
            {GetAwayTeamRw2_position1() + " - " + GetAwayTeamRw2_position2()}
          </div>
          <div className='div-mid-team2-player10-name-playmatchmenuplayers'>
            {GetAwayTeamRw2_name()}
          </div>
          <div className='div-mid-team2-player10-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player10-surname-playmatchmenuplayers'>
            {GetAwayTeamRw2_surname()}
          </div>
          <div className='div-mid-team2-player10-rating-playmatchmenuplayers'>
            {GetAwayTeamRw2_rating()}
          </div>
          <div className='div-mid-team2-player10-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamRw2_energy()}
          </div>
        </div>
        <div className='div-mid-team2-player11-playmatchmenuplayers'>
          <div className='div-mid-team2-player11-cards-playmatchmenuplayers'>
            <div className='div-mid-team2-player11-redCardBox-playmatchmenuplayers'>
              {GetAwayTeamSt2_redCard()}
            </div>
            <div className='div-mid-team2-player11-yellowCardBox-playmatchmenuplayers'>
              {GetAwayTeamSt2_yellowCard()}
            </div>
          </div>
          <div className='div-mid-team2-player11-position-playmatchmenuplayers'>
            {GetAwayTeamSt2_position1() + " - " + GetAwayTeamSt2_position2()}
          </div>
          <div className='div-mid-team2-player11-name-playmatchmenuplayers'>
            {GetAwayTeamSt2_name()}
          </div>
          <div className='div-mid-team2-player11-empty-playmatchmenuplayers'>

          </div>
          <div className='div-mid-team2-player11-surname-playmatchmenuplayers'>
            {GetAwayTeamSt2_surname()}
          </div>
          <div className='div-mid-team2-player11-rating-playmatchmenuplayers'>
            {GetAwayTeamSt2_rating()}
          </div>
          <div className='div-mid-team2-player11-energy-playmatchmenuplayers'>
            {"%" + GetAwayTeamSt2_energy()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playersmenu;
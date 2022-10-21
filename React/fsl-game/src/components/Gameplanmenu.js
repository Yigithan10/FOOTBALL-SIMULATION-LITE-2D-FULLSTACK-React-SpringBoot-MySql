import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import './Gameplanmenu.css';
import Leagues from '../leagues.json'
import Languages from '../languages.json'
import GamePlanFormation1 from './GamePlanFormation1';
import GamePlanFormation2 from './GamePlanFormation2';
import GamePlanFormation3 from './GamePlanFormation3';
import GamePlanFormation4 from './GamePlanFormation4';
import { useSelector, useDispatch } from 'react-redux';

import { GetMatchStartValue_off, GetMatchStartValue_on, 
  GetPanelValue_p, GetPanelValue_e, GetPanelValue_s,
  GetRightPlayerChange_Sour, GetMatchMinutesValue_Plus, GetMatchMinutesValue,
    GetRightPlayerChange_Plus, GetRightPlayerChange_3,
    GetMatchScreenStartValue_on, GetMatchScreenStartValue_off, 
    SetHomeTeam_gk1_energy, SetHomeTeam_gk1_energy_1, SetHomeTeam_gk1_energy_2, 
    SetHomeTeam_gk1_energy_3, SetHomeTeam_gk1_energy_4,
    SetHomeTeam_lb1_energy, SetHomeTeam_lb1_energy_1, SetHomeTeam_lb1_energy_2,
    SetHomeTeam_lb1_energy_3, SetHomeTeam_lb1_energy_4, SetHomeTeam_lb1_energy_5, 
    SetHomeTeam_cb1_energy, SetHomeTeam_cb1_energy_1, SetHomeTeam_cb1_energy_2, 
    SetHomeTeam_cb1_energy_3, SetHomeTeam_cb1_energy_4, SetHomeTeam_cb1_energy_5,
    SetHomeTeam_cb2_energy, SetHomeTeam_cb2_energy_1, SetHomeTeam_cb2_energy_2,
    SetHomeTeam_cb2_energy_3, SetHomeTeam_cb2_energy_4, SetHomeTeam_cb2_energy_5,
    SetHomeTeam_rb1_energy, SetHomeTeam_rb1_energy_1, SetHomeTeam_rb1_energy_2, 
    SetHomeTeam_rb1_energy_3, SetHomeTeam_rb1_energy_4, SetHomeTeam_rb1_energy_5,
    SetHomeTeam_dm1_energy, SetHomeTeam_dm1_energy_1, SetHomeTeam_dm1_energy_2, 
    SetHomeTeam_dm1_energy_3, SetHomeTeam_dm1_energy_4, SetHomeTeam_dm1_energy_5, 
    SetHomeTeam_cm1_energy, SetHomeTeam_cm1_energy_1, SetHomeTeam_cm1_energy_2, 
    SetHomeTeam_cm1_energy_3, SetHomeTeam_cm1_energy_4, SetHomeTeam_cm1_energy_5,
    SetHomeTeam_cm2_energy, SetHomeTeam_cm2_energy_1, SetHomeTeam_cm2_energy_2, 
    SetHomeTeam_cm2_energy_3, SetHomeTeam_cm2_energy_4, SetHomeTeam_cm2_energy_5, 
    SetHomeTeam_lw1_energy, SetHomeTeam_lw1_energy_1, SetHomeTeam_lw1_energy_2, 
    SetHomeTeam_lw1_energy_3, SetHomeTeam_lw1_energy_4, SetHomeTeam_lw1_energy_5,
    SetHomeTeam_rw1_energy, SetHomeTeam_rw1_energy_1, SetHomeTeam_rw1_energy_2, 
    SetHomeTeam_rw1_energy_3, SetHomeTeam_rw1_energy_4, SetHomeTeam_rw1_energy_5,
    SetHomeTeam_st1_energy, SetHomeTeam_st1_energy_1, SetHomeTeam_st1_energy_2, 
    SetHomeTeam_st1_energy_3, SetHomeTeam_st1_energy_4, SetHomeTeam_st1_energy_5,

    SetAwayTeam_gk2_energy, SetAwayTeam_gk2_energy_1, SetAwayTeam_gk2_energy_2,
    SetAwayTeam_gk2_energy_3, SetAwayTeam_gk2_energy_4, 
    SetAwayTeam_lb2_energy, SetAwayTeam_lb2_energy_1, SetAwayTeam_lb2_energy_2,
    SetAwayTeam_lb2_energy_3, SetAwayTeam_lb2_energy_4, SetAwayTeam_lb2_energy_5,
    SetAwayTeam_cb4_energy, SetAwayTeam_cb4_energy_1, SetAwayTeam_cb4_energy_2,
    SetAwayTeam_cb4_energy_3, SetAwayTeam_cb4_energy_4, SetAwayTeam_cb4_energy_5,
    SetAwayTeam_cb3_energy, SetAwayTeam_cb3_energy_1, SetAwayTeam_cb3_energy_2,
    SetAwayTeam_cb3_energy_3, SetAwayTeam_cb3_energy_4, SetAwayTeam_cb3_energy_5,
    SetAwayTeam_rb2_energy, SetAwayTeam_rb2_energy_1, SetAwayTeam_rb2_energy_2,
    SetAwayTeam_rb2_energy_3, SetAwayTeam_rb2_energy_4, SetAwayTeam_rb2_energy_5, 
    SetAwayTeam_dm2_energy, SetAwayTeam_dm2_energy_1, SetAwayTeam_dm2_energy_2,
    SetAwayTeam_dm2_energy_3, SetAwayTeam_dm2_energy_4, SetAwayTeam_dm2_energy_5,
    SetAwayTeam_cm4_energy, SetAwayTeam_cm4_energy_1, SetAwayTeam_cm4_energy_2,
    SetAwayTeam_cm4_energy_3, SetAwayTeam_cm4_energy_4, SetAwayTeam_cm4_energy_5,
    SetAwayTeam_cm3_energy, SetAwayTeam_cm3_energy_1, SetAwayTeam_cm3_energy_2,
    SetAwayTeam_cm3_energy_3, SetAwayTeam_cm3_energy_4, SetAwayTeam_cm3_energy_5,
    SetAwayTeam_lw2_energy, SetAwayTeam_lw2_energy_1, SetAwayTeam_lw2_energy_2,
    SetAwayTeam_lw2_energy_3, SetAwayTeam_lw2_energy_4, SetAwayTeam_lw2_energy_5,
    SetAwayTeam_rw2_energy, SetAwayTeam_rw2_energy_1, SetAwayTeam_rw2_energy_2,
    SetAwayTeam_rw2_energy_3, SetAwayTeam_rw2_energy_4, SetAwayTeam_rw2_energy_5,
    SetAwayTeam_st2_energy, SetAwayTeam_st2_energy_1, SetAwayTeam_st2_energy_2,
    SetAwayTeam_st2_energy_3, SetAwayTeam_st2_energy_4, SetAwayTeam_st2_energy_5,
  
    SetFirsthalf_minutes1, SetFirsthalf_minutes1_txt, 
    SetFirsthalf_event1, SetFirsthalf_event1_goal, SetFirsthalf_event1_noGoal,
    SetFirsthalf_event1_foul, SetFirsthalf_event1_goalCorner,
    SetFirsthalf_event1_goalPen, SetFirsthalf_event1_goalFreekick,
    SetFirsthalf_event1_noGoalCorner, SetFirsthalf_event1_noGoalPen,
    SetFirsthalf_event1_noGoalFreekick, SetFirsthalf_event1_offside,
    SetFirsthalf_name1, SetFirsthalf_name1_t1_gk1, SetFirsthalf_name1_t1_lb1,
    SetFirsthalf_name1_t1_cb1, SetFirsthalf_name1_t1_cb2, SetFirsthalf_name1_t1_rb1, 
    SetFirsthalf_name1_t1_dm1, SetFirsthalf_name1_t1_cm1, SetFirsthalf_name1_t1_cm2, 
    SetFirsthalf_name1_t1_lw1, SetFirsthalf_name1_t1_rw1, SetFirsthalf_name1_t1_st1, 
    SetFirsthalf_name1_t2_gk2, SetFirsthalf_name1_t2_lb2, SetFirsthalf_name1_t2_cb4, 
    SetFirsthalf_name1_t2_cb3, SetFirsthalf_name1_t2_rb2, SetFirsthalf_name1_t2_dm2, 
    SetFirsthalf_name1_t2_cm4, SetFirsthalf_name1_t2_cm3, SetFirsthalf_name1_t2_lw2, 
    SetFirsthalf_name1_t2_rw2, SetFirsthalf_name1_t2_st2, 
    SetFirsthalf_surname1, SetFirsthalf_surname1_t1_gk1, SetFirsthalf_surname1_t1_lb1, 
    SetFirsthalf_surname1_t1_cb1, SetFirsthalf_surname1_t1_cb2, 
    SetFirsthalf_surname1_t1_rb1, SetFirsthalf_surname1_t1_dm1, SetFirsthalf_surname1_t1_cm1, 
    SetFirsthalf_surname1_t1_cm2, SetFirsthalf_surname1_t1_lw1, SetFirsthalf_surname1_t1_rw1, 
    SetFirsthalf_surname1_t1_st1, SetFirsthalf_surname1_t2_gk2, SetFirsthalf_surname1_t2_lb2, 
    SetFirsthalf_surname1_t2_cb4, SetFirsthalf_surname1_t2_cb3, 
    SetFirsthalf_surname1_t2_rb2, SetFirsthalf_surname1_t2_dm2, SetFirsthalf_surname1_t2_cm4, 
    SetFirsthalf_surname1_t2_cm3, SetFirsthalf_surname1_t2_lw2, SetFirsthalf_surname1_t2_rw2, 
    SetFirsthalf_surname1_t2_st2, SetFirsthalf_team1_NoTeam, 
    SetFirsthalf_team1_homeTeam, SetFirsthalf_team1_awayTeam, 

    SetFirsthalf_minutes2, SetFirsthalf_minutes2_txt, 
    SetFirsthalf_event2, SetFirsthalf_event2_goal, SetFirsthalf_event2_noGoal,
    SetFirsthalf_event2_foul, SetFirsthalf_event2_goalCorner,
    SetFirsthalf_event2_goalPen, SetFirsthalf_event2_goalFreekick,
    SetFirsthalf_event2_noGoalCorner, SetFirsthalf_event2_noGoalPen,
    SetFirsthalf_event2_noGoalFreekick, SetFirsthalf_event2_offside,
    SetFirsthalf_name2, SetFirsthalf_name2_t1_gk1, SetFirsthalf_name2_t1_lb1,
    SetFirsthalf_name2_t1_cb1, SetFirsthalf_name2_t1_cb2, SetFirsthalf_name2_t1_rb1, 
    SetFirsthalf_name2_t1_dm1, SetFirsthalf_name2_t1_cm1, SetFirsthalf_name2_t1_cm2, 
    SetFirsthalf_name2_t1_lw1, SetFirsthalf_name2_t1_rw1, SetFirsthalf_name2_t1_st1, 
    SetFirsthalf_name2_t2_gk2, SetFirsthalf_name2_t2_lb2, SetFirsthalf_name2_t2_cb4, 
    SetFirsthalf_name2_t2_cb3, SetFirsthalf_name2_t2_rb2, SetFirsthalf_name2_t2_dm2, 
    SetFirsthalf_name2_t2_cm4, SetFirsthalf_name2_t2_cm3, SetFirsthalf_name2_t2_lw2, 
    SetFirsthalf_name2_t2_rw2, SetFirsthalf_name2_t2_st2, 
    SetFirsthalf_surname2, SetFirsthalf_surname2_t1_gk1, SetFirsthalf_surname2_t1_lb1, 
    SetFirsthalf_surname2_t1_cb1, SetFirsthalf_surname2_t1_cb2, 
    SetFirsthalf_surname2_t1_rb1, SetFirsthalf_surname2_t1_dm1, SetFirsthalf_surname2_t1_cm1, 
    SetFirsthalf_surname2_t1_cm2, SetFirsthalf_surname2_t1_lw1, SetFirsthalf_surname2_t1_rw1, 
    SetFirsthalf_surname2_t1_st1, SetFirsthalf_surname2_t2_gk2, SetFirsthalf_surname2_t2_lb2, 
    SetFirsthalf_surname2_t2_cb4, SetFirsthalf_surname2_t2_cb3, 
    SetFirsthalf_surname2_t2_rb2, SetFirsthalf_surname2_t2_dm2, SetFirsthalf_surname2_t2_cm4, 
    SetFirsthalf_surname2_t2_cm3, SetFirsthalf_surname2_t2_lw2, SetFirsthalf_surname2_t2_rw2, 
    SetFirsthalf_surname2_t2_st2, SetFirsthalf_team2_NoTeam, 
    SetFirsthalf_team2_homeTeam, SetFirsthalf_team2_awayTeam,

    SetFirsthalf_minutes3, SetFirsthalf_minutes3_txt, 
    SetFirsthalf_event3, SetFirsthalf_event3_goal, SetFirsthalf_event3_noGoal,
    SetFirsthalf_event3_foul, SetFirsthalf_event3_goalCorner,
    SetFirsthalf_event3_goalPen, SetFirsthalf_event3_goalFreekick,
    SetFirsthalf_event3_noGoalCorner, SetFirsthalf_event3_noGoalPen,
    SetFirsthalf_event3_noGoalFreekick, SetFirsthalf_event3_offside,
    SetFirsthalf_name3, SetFirsthalf_name3_t1_gk1, SetFirsthalf_name3_t1_lb1,
    SetFirsthalf_name3_t1_cb1, SetFirsthalf_name3_t1_cb2, SetFirsthalf_name3_t1_rb1, 
    SetFirsthalf_name3_t1_dm1, SetFirsthalf_name3_t1_cm1, SetFirsthalf_name3_t1_cm2, 
    SetFirsthalf_name3_t1_lw1, SetFirsthalf_name3_t1_rw1, SetFirsthalf_name3_t1_st1, 
    SetFirsthalf_name3_t2_gk2, SetFirsthalf_name3_t2_lb2, SetFirsthalf_name3_t2_cb4, 
    SetFirsthalf_name3_t2_cb3, SetFirsthalf_name3_t2_rb2, SetFirsthalf_name3_t2_dm2, 
    SetFirsthalf_name3_t2_cm4, SetFirsthalf_name3_t2_cm3, SetFirsthalf_name3_t2_lw2, 
    SetFirsthalf_name3_t2_rw2, SetFirsthalf_name3_t2_st2, 
    SetFirsthalf_surname3, SetFirsthalf_surname3_t1_gk1, SetFirsthalf_surname3_t1_lb1, 
    SetFirsthalf_surname3_t1_cb1, SetFirsthalf_surname3_t1_cb2, 
    SetFirsthalf_surname3_t1_rb1, SetFirsthalf_surname3_t1_dm1, SetFirsthalf_surname3_t1_cm1, 
    SetFirsthalf_surname3_t1_cm2, SetFirsthalf_surname3_t1_lw1, SetFirsthalf_surname3_t1_rw1, 
    SetFirsthalf_surname3_t1_st1, SetFirsthalf_surname3_t2_gk2, SetFirsthalf_surname3_t2_lb2, 
    SetFirsthalf_surname3_t2_cb4, SetFirsthalf_surname3_t2_cb3, 
    SetFirsthalf_surname3_t2_rb2, SetFirsthalf_surname3_t2_dm2, SetFirsthalf_surname3_t2_cm4, 
    SetFirsthalf_surname3_t2_cm3, SetFirsthalf_surname3_t2_lw2, SetFirsthalf_surname3_t2_rw2, 
    SetFirsthalf_surname3_t2_st2, SetFirsthalf_team3_NoTeam, 
    SetFirsthalf_team3_homeTeam, SetFirsthalf_team3_awayTeam,

    SetFirsthalf_minutes4, SetFirsthalf_minutes4_txt, 
    SetFirsthalf_event4, SetFirsthalf_event4_goal, SetFirsthalf_event4_noGoal,
    SetFirsthalf_event4_foul, SetFirsthalf_event4_goalCorner,
    SetFirsthalf_event4_goalPen, SetFirsthalf_event4_goalFreekick,
    SetFirsthalf_event4_noGoalCorner, SetFirsthalf_event4_noGoalPen,
    SetFirsthalf_event4_noGoalFreekick, SetFirsthalf_event4_offside,
    SetFirsthalf_name4, SetFirsthalf_name4_t1_gk1, SetFirsthalf_name4_t1_lb1,
    SetFirsthalf_name4_t1_cb1, SetFirsthalf_name4_t1_cb2, SetFirsthalf_name4_t1_rb1, 
    SetFirsthalf_name4_t1_dm1, SetFirsthalf_name4_t1_cm1, SetFirsthalf_name4_t1_cm2, 
    SetFirsthalf_name4_t1_lw1, SetFirsthalf_name4_t1_rw1, SetFirsthalf_name4_t1_st1, 
    SetFirsthalf_name4_t2_gk2, SetFirsthalf_name4_t2_lb2, SetFirsthalf_name4_t2_cb4, 
    SetFirsthalf_name4_t2_cb3, SetFirsthalf_name4_t2_rb2, SetFirsthalf_name4_t2_dm2, 
    SetFirsthalf_name4_t2_cm4, SetFirsthalf_name4_t2_cm3, SetFirsthalf_name4_t2_lw2, 
    SetFirsthalf_name4_t2_rw2, SetFirsthalf_name4_t2_st2, 
    SetFirsthalf_surname4, SetFirsthalf_surname4_t1_gk1, SetFirsthalf_surname4_t1_lb1, 
    SetFirsthalf_surname4_t1_cb1, SetFirsthalf_surname4_t1_cb2, 
    SetFirsthalf_surname4_t1_rb1, SetFirsthalf_surname4_t1_dm1, SetFirsthalf_surname4_t1_cm1, 
    SetFirsthalf_surname4_t1_cm2, SetFirsthalf_surname4_t1_lw1, SetFirsthalf_surname4_t1_rw1, 
    SetFirsthalf_surname4_t1_st1, SetFirsthalf_surname4_t2_gk2, SetFirsthalf_surname4_t2_lb2, 
    SetFirsthalf_surname4_t2_cb4, SetFirsthalf_surname4_t2_cb3, 
    SetFirsthalf_surname4_t2_rb2, SetFirsthalf_surname4_t2_dm2, SetFirsthalf_surname4_t2_cm4, 
    SetFirsthalf_surname4_t2_cm3, SetFirsthalf_surname4_t2_lw2, SetFirsthalf_surname4_t2_rw2, 
    SetFirsthalf_surname4_t2_st2, SetFirsthalf_team4_NoTeam, 
    SetFirsthalf_team4_homeTeam, SetFirsthalf_team4_awayTeam,

    SetFirsthalf_minutes5, SetFirsthalf_minutes5_txt, 
    SetFirsthalf_event5, SetFirsthalf_event5_goal, SetFirsthalf_event5_noGoal,
    SetFirsthalf_event5_foul, SetFirsthalf_event5_goalCorner,
    SetFirsthalf_event5_goalPen, SetFirsthalf_event5_goalFreekick,
    SetFirsthalf_event5_noGoalCorner, SetFirsthalf_event5_noGoalPen,
    SetFirsthalf_event5_noGoalFreekick, SetFirsthalf_event5_offside,
    SetFirsthalf_name5, SetFirsthalf_name5_t1_gk1, SetFirsthalf_name5_t1_lb1,
    SetFirsthalf_name5_t1_cb1, SetFirsthalf_name5_t1_cb2, SetFirsthalf_name5_t1_rb1, 
    SetFirsthalf_name5_t1_dm1, SetFirsthalf_name5_t1_cm1, SetFirsthalf_name5_t1_cm2, 
    SetFirsthalf_name5_t1_lw1, SetFirsthalf_name5_t1_rw1, SetFirsthalf_name5_t1_st1, 
    SetFirsthalf_name5_t2_gk2, SetFirsthalf_name5_t2_lb2, SetFirsthalf_name5_t2_cb4, 
    SetFirsthalf_name5_t2_cb3, SetFirsthalf_name5_t2_rb2, SetFirsthalf_name5_t2_dm2, 
    SetFirsthalf_name5_t2_cm4, SetFirsthalf_name5_t2_cm3, SetFirsthalf_name5_t2_lw2, 
    SetFirsthalf_name5_t2_rw2, SetFirsthalf_name5_t2_st2, 
    SetFirsthalf_surname5, SetFirsthalf_surname5_t1_gk1, SetFirsthalf_surname5_t1_lb1, 
    SetFirsthalf_surname5_t1_cb1, SetFirsthalf_surname5_t1_cb2, 
    SetFirsthalf_surname5_t1_rb1, SetFirsthalf_surname5_t1_dm1, SetFirsthalf_surname5_t1_cm1, 
    SetFirsthalf_surname5_t1_cm2, SetFirsthalf_surname5_t1_lw1, SetFirsthalf_surname5_t1_rw1, 
    SetFirsthalf_surname5_t1_st1, SetFirsthalf_surname5_t2_gk2, SetFirsthalf_surname5_t2_lb2, 
    SetFirsthalf_surname5_t2_cb4, SetFirsthalf_surname5_t2_cb3, 
    SetFirsthalf_surname5_t2_rb2, SetFirsthalf_surname5_t2_dm2, SetFirsthalf_surname5_t2_cm4, 
    SetFirsthalf_surname5_t2_cm3, SetFirsthalf_surname5_t2_lw2, SetFirsthalf_surname5_t2_rw2, 
    SetFirsthalf_surname5_t2_st2, SetFirsthalf_team5_NoTeam, 
    SetFirsthalf_team5_homeTeam, SetFirsthalf_team5_awayTeam,

    SetFirsthalf_minutes6, SetFirsthalf_minutes6_txt, 
    SetFirsthalf_event6, SetFirsthalf_event6_goal, SetFirsthalf_event6_noGoal,
    SetFirsthalf_event6_foul, SetFirsthalf_event6_goalCorner,
    SetFirsthalf_event6_goalPen, SetFirsthalf_event6_goalFreekick,
    SetFirsthalf_event6_noGoalCorner, SetFirsthalf_event6_noGoalPen,
    SetFirsthalf_event6_noGoalFreekick, SetFirsthalf_event6_offside,
    SetFirsthalf_name6, SetFirsthalf_name6_t1_gk1, SetFirsthalf_name6_t1_lb1,
    SetFirsthalf_name6_t1_cb1, SetFirsthalf_name6_t1_cb2, SetFirsthalf_name6_t1_rb1, 
    SetFirsthalf_name6_t1_dm1, SetFirsthalf_name6_t1_cm1, SetFirsthalf_name6_t1_cm2, 
    SetFirsthalf_name6_t1_lw1, SetFirsthalf_name6_t1_rw1, SetFirsthalf_name6_t1_st1, 
    SetFirsthalf_name6_t2_gk2, SetFirsthalf_name6_t2_lb2, SetFirsthalf_name6_t2_cb4, 
    SetFirsthalf_name6_t2_cb3, SetFirsthalf_name6_t2_rb2, SetFirsthalf_name6_t2_dm2, 
    SetFirsthalf_name6_t2_cm4, SetFirsthalf_name6_t2_cm3, SetFirsthalf_name6_t2_lw2, 
    SetFirsthalf_name6_t2_rw2, SetFirsthalf_name6_t2_st2, 
    SetFirsthalf_surname6, SetFirsthalf_surname6_t1_gk1, SetFirsthalf_surname6_t1_lb1, 
    SetFirsthalf_surname6_t1_cb1, SetFirsthalf_surname6_t1_cb2, 
    SetFirsthalf_surname6_t1_rb1, SetFirsthalf_surname6_t1_dm1, SetFirsthalf_surname6_t1_cm1, 
    SetFirsthalf_surname6_t1_cm2, SetFirsthalf_surname6_t1_lw1, SetFirsthalf_surname6_t1_rw1, 
    SetFirsthalf_surname6_t1_st1, SetFirsthalf_surname6_t2_gk2, SetFirsthalf_surname6_t2_lb2, 
    SetFirsthalf_surname6_t2_cb4, SetFirsthalf_surname6_t2_cb3, 
    SetFirsthalf_surname6_t2_rb2, SetFirsthalf_surname6_t2_dm2, SetFirsthalf_surname6_t2_cm4, 
    SetFirsthalf_surname6_t2_cm3, SetFirsthalf_surname6_t2_lw2, SetFirsthalf_surname6_t2_rw2, 
    SetFirsthalf_surname6_t2_st2, SetFirsthalf_team6_NoTeam, 
    SetFirsthalf_team6_homeTeam, SetFirsthalf_team6_awayTeam,

    SetFirsthalf_minutes7, SetFirsthalf_minutes7_txt, 
    SetFirsthalf_event7, SetFirsthalf_event7_goal, SetFirsthalf_event7_noGoal,
    SetFirsthalf_event7_foul, SetFirsthalf_event7_goalCorner,
    SetFirsthalf_event7_goalPen, SetFirsthalf_event7_goalFreekick,
    SetFirsthalf_event7_noGoalCorner, SetFirsthalf_event7_noGoalPen,
    SetFirsthalf_event7_noGoalFreekick, SetFirsthalf_event7_offside,
    SetFirsthalf_name7, SetFirsthalf_name7_t1_gk1, SetFirsthalf_name7_t1_lb1,
    SetFirsthalf_name7_t1_cb1, SetFirsthalf_name7_t1_cb2, SetFirsthalf_name7_t1_rb1, 
    SetFirsthalf_name7_t1_dm1, SetFirsthalf_name7_t1_cm1, SetFirsthalf_name7_t1_cm2, 
    SetFirsthalf_name7_t1_lw1, SetFirsthalf_name7_t1_rw1, SetFirsthalf_name7_t1_st1, 
    SetFirsthalf_name7_t2_gk2, SetFirsthalf_name7_t2_lb2, SetFirsthalf_name7_t2_cb4, 
    SetFirsthalf_name7_t2_cb3, SetFirsthalf_name7_t2_rb2, SetFirsthalf_name7_t2_dm2, 
    SetFirsthalf_name7_t2_cm4, SetFirsthalf_name7_t2_cm3, SetFirsthalf_name7_t2_lw2, 
    SetFirsthalf_name7_t2_rw2, SetFirsthalf_name7_t2_st2, 
    SetFirsthalf_surname7, SetFirsthalf_surname7_t1_gk1, SetFirsthalf_surname7_t1_lb1, 
    SetFirsthalf_surname7_t1_cb1, SetFirsthalf_surname7_t1_cb2, 
    SetFirsthalf_surname7_t1_rb1, SetFirsthalf_surname7_t1_dm1, SetFirsthalf_surname7_t1_cm1, 
    SetFirsthalf_surname7_t1_cm2, SetFirsthalf_surname7_t1_lw1, SetFirsthalf_surname7_t1_rw1, 
    SetFirsthalf_surname7_t1_st1, SetFirsthalf_surname7_t2_gk2, SetFirsthalf_surname7_t2_lb2, 
    SetFirsthalf_surname7_t2_cb4, SetFirsthalf_surname7_t2_cb3, 
    SetFirsthalf_surname7_t2_rb2, SetFirsthalf_surname7_t2_dm2, SetFirsthalf_surname7_t2_cm4, 
    SetFirsthalf_surname7_t2_cm3, SetFirsthalf_surname7_t2_lw2, SetFirsthalf_surname7_t2_rw2, 
    SetFirsthalf_surname7_t2_st2, SetFirsthalf_team7_NoTeam, 
    SetFirsthalf_team7_homeTeam, SetFirsthalf_team7_awayTeam, 

    SetSecondhalf_minutes1, SetSecondhalf_minutes1_txt, 
    SetSecondhalf_event1, SetSecondhalf_event1_goal, SetSecondhalf_event1_noGoal,
    SetSecondhalf_event1_foul, SetSecondhalf_event1_goalCorner,
    SetSecondhalf_event1_goalPen, SetSecondhalf_event1_goalFreekick,
    SetSecondhalf_event1_noGoalCorner, SetSecondhalf_event1_noGoalPen,
    SetSecondhalf_event1_noGoalFreekick, SetSecondhalf_event1_offside,
    SetSecondhalf_name1, SetSecondhalf_name1_t1_gk1, SetSecondhalf_name1_t1_lb1,
    SetSecondhalf_name1_t1_cb1, SetSecondhalf_name1_t1_cb2, SetSecondhalf_name1_t1_rb1, 
    SetSecondhalf_name1_t1_dm1, SetSecondhalf_name1_t1_cm1, SetSecondhalf_name1_t1_cm2, 
    SetSecondhalf_name1_t1_lw1, SetSecondhalfSetFirsthalf_name1_t1_rw1, SetSecondhalf_name1_t1_st1, 
    SetSecondhalf_name1_t2_gk2, SetSecondhalf_name1_t2_lb2, SetSecondhalf_name1_t2_cb4, 
    SetSecondhalf_name1_t2_cb3, SetSecondhalf_name1_t2_rb2, SetSecondhalf_name1_t2_dm2, 
    SetSecondhalf_name1_t2_cm4, SetSecondhalf_name1_t2_cm3, SetSecondhalf_name1_t2_lw2, 
    SetSecondhalf_name1_t2_rw2, SetSecondhalf_name1_t2_st2, 
    SetSecondhalf_surname1, SetSecondhalf_surname1_t1_gk1, SetSecondhalf_surname1_t1_lb1, 
    SetSecondhalf_surname1_t1_cb1, SetSecondhalf_surname1_t1_cb2, 
    SetSecondhalf_surname1_t1_rb1, SetSecondhalf_surname1_t1_dm1, SetSecondhalf_surname1_t1_cm1, 
    SetSecondhalf_surname1_t1_cm2, SetSecondhalf_surname1_t1_lw1, SetSecondhalf_surname1_t1_rw1, 
    SetSecondhalf_surname1_t1_st1, SetSecondhalf_surname1_t2_gk2, SetSecondhalf_surname1_t2_lb2, 
    SetSecondhalf_surname1_t2_cb4, SetSecondhalf_surname1_t2_cb3, 
    SetSecondhalf_surname1_t2_rb2, SetSecondhalf_surname1_t2_dm2, SetSecondhalf_surname1_t2_cm4, 
    SetSecondhalf_surname1_t2_cm3, SetSecondhalf_surname1_t2_lw2, SetSecondhalf_surname1_t2_rw2, 
    SetSecondhalf_surname1_t2_st2, SetSecondhalf_team1_NoTeam, 
    SetSecondhalf_team1_homeTeam, SetSecondhalf_team1_awayTeam, 

    SetSecondhalf_minutes2, SetSecondhalf_minutes2_txt, 
    SetSecondhalf_event2, SetSecondhalf_event2_goal, SetSecondhalf_event2_noGoal,
    SetSecondhalf_event2_foul, SetSecondhalf_event2_goalCorner,
    SetSecondhalf_event2_goalPen, SetSecondhalf_event2_goalFreekick,
    SetSecondhalf_event2_noGoalCorner, SetSecondhalf_event2_noGoalPen,
    SetSecondhalf_event2_noGoalFreekick, SetSecondhalf_event2_offside,
    SetSecondhalf_name2, SetSecondhalf_name2_t1_gk1, SetSecondhalf_name2_t1_lb1,
    SetSecondhalf_name2_t1_cb1, SetSecondhalf_name2_t1_cb2, SetSecondhalf_name2_t1_rb1, 
    SetSecondhalf_name2_t1_dm1, SetSecondhalf_name2_t1_cm1, SetSecondhalf_name2_t1_cm2, 
    SetSecondhalf_name2_t1_lw1, SetSecondhalf_name2_t1_rw1, SetSecondhalf_name2_t1_st1, 
    SetSecondhalf_name2_t2_gk2, SetSecondhalf_name2_t2_lb2, SetSecondhalf_name2_t2_cb4, 
    SetSecondhalf_name2_t2_cb3, SetSecondhalf_name2_t2_rb2, SetSecondhalf_name2_t2_dm2, 
    SetSecondhalf_name2_t2_cm4, SetSecondhalf_name2_t2_cm3, SetSecondhalf_name2_t2_lw2, 
    SetSecondhalf_name2_t2_rw2, SetSecondhalf_name2_t2_st2, 
    SetSecondhalf_surname2, SetSecondhalf_surname2_t1_gk1, SetSecondhalf_surname2_t1_lb1, 
    SetSecondhalf_surname2_t1_cb1, SetSecondhalf_surname2_t1_cb2, 
    SetSecondhalf_surname2_t1_rb1, SetSecondhalf_surname2_t1_dm1, SetSecondhalf_surname2_t1_cm1, 
    SetSecondhalf_surname2_t1_cm2, SetSecondhalf_surname2_t1_lw1, SetSecondhalf_surname2_t1_rw1, 
    SetSecondhalf_surname2_t1_st1, SetSecondhalf_surname2_t2_gk2, SetSecondhalf_surname2_t2_lb2, 
    SetSecondhalf_surname2_t2_cb4, SetSecondhalf_surname2_t2_cb3, 
    SetSecondhalf_surname2_t2_rb2, SetSecondhalf_surname2_t2_dm2, SetSecondhalf_surname2_t2_cm4, 
    SetSecondhalf_surname2_t2_cm3, SetSecondhalf_surname2_t2_lw2, SetSecondhalf_surname2_t2_rw2, 
    SetSecondhalf_surname2_t2_st2, SetSecondhalf_team2_NoTeam, 
    SetSecondhalf_team2_homeTeam, SetSecondhalf_team2_awayTeam,

    SetSecondhalf_minutes3, SetSecondhalf_minutes3_txt, 
    SetSecondhalf_event3, SetSecondhalf_event3_goal, SetSecondhalf_event3_noGoal,
    SetSecondhalf_event3_foul, SetSecondhalf_event3_goalCorner,
    SetSecondhalf_event3_goalPen, SetSecondhalf_event3_goalFreekick,
    SetSecondhalf_event3_noGoalCorner, SetSecondhalf_event3_noGoalPen,
    SetSecondhalf_event3_noGoalFreekick, SetSecondhalf_event3_offside,
    SetSecondhalf_name3, SetSecondhalf_name3_t1_gk1, SetSecondhalf_name3_t1_lb1,
    SetSecondhalf_name3_t1_cb1, SetSecondhalf_name3_t1_cb2, SetSecondhalf_name3_t1_rb1, 
    SetSecondhalf_name3_t1_dm1, SetSecondhalf_name3_t1_cm1, SetSecondhalf_name3_t1_cm2, 
    SetSecondhalf_name3_t1_lw1, SetSecondhalf_name3_t1_rw1, SetSecondhalf_name3_t1_st1, 
    SetSecondhalf_name3_t2_gk2, SetSecondhalf_name3_t2_lb2, SetSecondhalf_name3_t2_cb4, 
    SetSecondhalf_name3_t2_cb3, SetSecondhalf_name3_t2_rb2, SetSecondhalf_name3_t2_dm2, 
    SetSecondhalf_name3_t2_cm4, SetSecondhalf_name3_t2_cm3, SetSecondhalf_name3_t2_lw2, 
    SetSecondhalf_name3_t2_rw2, SetSecondhalf_name3_t2_st2, 
    SetSecondhalf_surname3, SetSecondhalf_surname3_t1_gk1, SetSecondhalf_surname3_t1_lb1, 
    SetSecondhalf_surname3_t1_cb1, SetSecondhalf_surname3_t1_cb2, 
    SetSecondhalf_surname3_t1_rb1, SetSecondhalf_surname3_t1_dm1, SetSecondhalf_surname3_t1_cm1, 
    SetSecondhalf_surname3_t1_cm2, SetSecondhalf_surname3_t1_lw1, SetSecondhalf_surname3_t1_rw1, 
    SetSecondhalf_surname3_t1_st1, SetSecondhalf_surname3_t2_gk2, SetSecondhalf_surname3_t2_lb2, 
    SetSecondhalf_surname3_t2_cb4, SetSecondhalf_surname3_t2_cb3, 
    SetSecondhalf_surname3_t2_rb2, SetSecondhalf_surname3_t2_dm2, SetSecondhalf_surname3_t2_cm4, 
    SetSecondhalf_surname3_t2_cm3, SetSecondhalf_surname3_t2_lw2, SetSecondhalf_surname3_t2_rw2, 
    SetSecondhalf_surname3_t2_st2, SetSecondhalf_team3_NoTeam, 
    SetSecondhalf_team3_homeTeam, SetSecondhalf_team3_awayTeam,

    SetSecondhalf_minutes4, SetSecondhalf_minutes4_txt, 
    SetSecondhalf_event4, SetSecondhalf_event4_goal, SetSecondhalf_event4_noGoal,
    SetSecondhalf_event4_foul, SetSecondhalf_event4_goalCorner,
    SetSecondhalf_event4_goalPen, SetSecondhalf_event4_goalFreekick,
    SetSecondhalf_event4_noGoalCorner, SetSecondhalf_event4_noGoalPen,
    SetSecondhalf_event4_noGoalFreekick, SetSecondhalf_event4_offside,
    SetSecondhalf_name4, SetSecondhalf_name4_t1_gk1, SetSecondhalf_name4_t1_lb1,
    SetSecondhalf_name4_t1_cb1, SetSecondhalf_name4_t1_cb2, SetSecondhalf_name4_t1_rb1, 
    SetSecondhalf_name4_t1_dm1, SetSecondhalf_name4_t1_cm1, SetSecondhalf_name4_t1_cm2, 
    SetSecondhalf_name4_t1_lw1, SetSecondhalf_name4_t1_rw1, SetSecondhalf_name4_t1_st1, 
    SetSecondhalf_name4_t2_gk2, SetSecondhalf_name4_t2_lb2, SetSecondhalf_name4_t2_cb4, 
    SetSecondhalf_name4_t2_cb3, SetSecondhalf_name4_t2_rb2, SetSecondhalf_name4_t2_dm2, 
    SetSecondhalf_name4_t2_cm4, SetSecondhalf_name4_t2_cm3, SetSecondhalf_name4_t2_lw2, 
    SetSecondhalf_name4_t2_rw2, SetSecondhalf_name4_t2_st2, 
    SetSecondhalf_surname4, SetSecondhalf_surname4_t1_gk1, SetSecondhalf_surname4_t1_lb1, 
    SetSecondhalf_surname4_t1_cb1, SetSecondhalf_surname4_t1_cb2, 
    SetSecondhalf_surname4_t1_rb1, SetSecondhalf_surname4_t1_dm1, SetSecondhalf_surname4_t1_cm1, 
    SetSecondhalf_surname4_t1_cm2, SetSecondhalf_surname4_t1_lw1, SetSecondhalf_surname4_t1_rw1, 
    SetSecondhalf_surname4_t1_st1, SetSecondhalf_surname4_t2_gk2, SetSecondhalf_surname4_t2_lb2, 
    SetSecondhalf_surname4_t2_cb4, SetSecondhalf_surname4_t2_cb3, 
    SetSecondhalf_surname4_t2_rb2, SetSecondhalf_surname4_t2_dm2, SetSecondhalf_surname4_t2_cm4, 
    SetSecondhalf_surname4_t2_cm3, SetSecondhalf_surname4_t2_lw2, SetSecondhalf_surname4_t2_rw2, 
    SetSecondhalf_surname4_t2_st2, SetSecondhalf_team4_NoTeam, 
    SetSecondhalf_team4_homeTeam, SetSecondhalf_team4_awayTeam,

    SetSecondhalf_minutes5, SetSecondhalf_minutes5_txt, 
    SetSecondhalf_event5, SetSecondhalf_event5_goal, SetSecondhalf_event5_noGoal,
    SetSecondhalf_event5_foul, SetSecondhalf_event5_goalCorner,
    SetSecondhalf_event5_goalPen, SetSecondhalf_event5_goalFreekick,
    SetSecondhalf_event5_noGoalCorner, SetSecondhalf_event5_noGoalPen,
    SetSecondhalf_event5_noGoalFreekick, SetSecondhalf_event5_offside,
    SetSecondhalf_name5, SetSecondhalf_name5_t1_gk1, SetSecondhalf_name5_t1_lb1,
    SetSecondhalf_name5_t1_cb1, SetSecondhalf_name5_t1_cb2, SetSecondhalf_name5_t1_rb1, 
    SetSecondhalf_name5_t1_dm1, SetSecondhalf_name5_t1_cm1, SetSecondhalf_name5_t1_cm2, 
    SetSecondhalf_name5_t1_lw1, SetSecondhalf_name5_t1_rw1, SetSecondhalf_name5_t1_st1, 
    SetSecondhalf_name5_t2_gk2, SetSecondhalf_name5_t2_lb2, SetSecondhalf_name5_t2_cb4, 
    SetSecondhalf_name5_t2_cb3, SetSecondhalf_name5_t2_rb2, SetSecondhalf_name5_t2_dm2, 
    SetSecondhalf_name5_t2_cm4, SetSecondhalf_name5_t2_cm3, SetSecondhalf_name5_t2_lw2, 
    SetSecondhalf_name5_t2_rw2, SetSecondhalf_name5_t2_st2, 
    SetSecondhalf_surname5, SetSecondhalf_surname5_t1_gk1, SetSecondhalf_surname5_t1_lb1, 
    SetSecondhalf_surname5_t1_cb1, SetSecondhalf_surname5_t1_cb2, 
    SetSecondhalf_surname5_t1_rb1, SetSecondhalf_surname5_t1_dm1, SetSecondhalf_surname5_t1_cm1, 
    SetSecondhalf_surname5_t1_cm2, SetSecondhalf_surname5_t1_lw1, SetSecondhalf_surname5_t1_rw1, 
    SetSecondhalf_surname5_t1_st1, SetSecondhalf_surname5_t2_gk2, SetSecondhalf_surname5_t2_lb2, 
    SetSecondhalf_surname5_t2_cb4, SetSecondhalf_surname5_t2_cb3, 
    SetSecondhalf_surname5_t2_rb2, SetSecondhalf_surname5_t2_dm2, SetSecondhalf_surname5_t2_cm4, 
    SetSecondhalf_surname5_t2_cm3, SetSecondhalf_surname5_t2_lw2, SetSecondhalf_surname5_t2_rw2, 
    SetSecondhalf_surname5_t2_st2, SetSecondhalf_team5_NoTeam, 
    SetSecondhalf_team5_homeTeam, SetSecondhalf_team5_awayTeam,

    SetSecondhalf_minutes6, SetSecondhalf_minutes6_txt, 
    SetSecondhalf_event6, SetSecondhalf_event6_goal, SetSecondhalf_event6_noGoal,
    SetSecondhalf_event6_foul, SetSecondhalf_event6_goalCorner,
    SetSecondhalf_event6_goalPen, SetSecondhalf_event6_goalFreekick,
    SetSecondhalf_event6_noGoalCorner, SetSecondhalf_event6_noGoalPen,
    SetSecondhalf_event6_noGoalFreekick, SetSecondhalf_event6_offside,
    SetSecondhalf_name6, SetSecondhalf_name6_t1_gk1, SetSecondhalf_name6_t1_lb1,
    SetSecondhalf_name6_t1_cb1, SetSecondhalf_name6_t1_cb2, SetSecondhalf_name6_t1_rb1, 
    SetSecondhalf_name6_t1_dm1, SetSecondhalf_name6_t1_cm1, SetSecondhalf_name6_t1_cm2, 
    SetSecondhalf_name6_t1_lw1, SetSecondhalf_name6_t1_rw1, SetSecondhalf_name6_t1_st1, 
    SetSecondhalf_name6_t2_gk2, SetSecondhalf_name6_t2_lb2, SetSecondhalf_name6_t2_cb4, 
    SetSecondhalf_name6_t2_cb3, SetSecondhalf_name6_t2_rb2, SetSecondhalf_name6_t2_dm2, 
    SetSecondhalf_name6_t2_cm4, SetSecondhalf_name6_t2_cm3, SetSecondhalf_name6_t2_lw2, 
    SetSecondhalf_name6_t2_rw2, SetSecondhalf_name6_t2_st2, 
    SetSecondhalf_surname6, SetSecondhalf_surname6_t1_gk1, SetSecondhalf_surname6_t1_lb1, 
    SetSecondhalf_surname6_t1_cb1, SetSecondhalf_surname6_t1_cb2, 
    SetSecondhalf_surname6_t1_rb1, SetSecondhalf_surname6_t1_dm1, SetSecondhalf_surname6_t1_cm1, 
    SetSecondhalf_surname6_t1_cm2, SetSecondhalf_surname6_t1_lw1, SetSecondhalf_surname6_t1_rw1, 
    SetSecondhalf_surname6_t1_st1, SetSecondhalf_surname6_t2_gk2, SetSecondhalf_surname6_t2_lb2, 
    SetSecondhalf_surname6_t2_cb4, SetSecondhalf_surname6_t2_cb3, 
    SetSecondhalf_surname6_t2_rb2, SetSecondhalf_surname6_t2_dm2, SetSecondhalf_surname6_t2_cm4, 
    SetSecondhalf_surname6_t2_cm3, SetSecondhalf_surname6_t2_lw2, SetSecondhalf_surname6_t2_rw2, 
    SetSecondhalf_surname6_t2_st2, SetSecondhalf_team6_NoTeam, 
    SetSecondhalf_team6_homeTeam, SetSecondhalf_team6_awayTeam,

    SetSecondhalf_minutes7, SetSecondhalf_minutes7_txt, 
    SetSecondhalf_event7, SetSecondhalf_event7_goal, SetSecondhalf_event7_noGoal,
    SetSecondhalf_event7_foul, SetSecondhalf_event7_goalCorner,
    SetSecondhalf_event7_goalPen, SetSecondhalf_event7_goalFreekick,
    SetSecondhalf_event7_noGoalCorner, SetSecondhalf_event7_noGoalPen,
    SetSecondhalf_event7_noGoalFreekick, SetSecondhalf_event7_offside,
    SetSecondhalf_name7, SetSecondhalf_name7_t1_gk1, SetSecondhalf_name7_t1_lb1,
    SetSecondhalf_name7_t1_cb1, SetSecondhalf_name7_t1_cb2, SetSecondhalf_name7_t1_rb1, 
    SetSecondhalf_name7_t1_dm1, SetSecondhalf_name7_t1_cm1, SetSecondhalf_name7_t1_cm2, 
    SetSecondhalf_name7_t1_lw1, SetSecondhalf_name7_t1_rw1, SetSecondhalf_name7_t1_st1, 
    SetSecondhalf_name7_t2_gk2, SetSecondhalf_name7_t2_lb2, SetSecondhalf_name7_t2_cb4, 
    SetSecondhalf_name7_t2_cb3, SetSecondhalf_name7_t2_rb2, SetSecondhalf_name7_t2_dm2, 
    SetSecondhalf_name7_t2_cm4, SetSecondhalf_name7_t2_cm3, SetSecondhalf_name7_t2_lw2, 
    SetSecondhalf_name7_t2_rw2, SetSecondhalf_name7_t2_st2, 
    SetSecondhalf_surname7, SetSecondhalf_surname7_t1_gk1, SetSecondhalf_surname7_t1_lb1, 
    SetSecondhalf_surname7_t1_cb1, SetSecondhalf_surname7_t1_cb2, 
    SetSecondhalf_surname7_t1_rb1, SetSecondhalf_surname7_t1_dm1, SetSecondhalf_surname7_t1_cm1, 
    SetSecondhalf_surname7_t1_cm2, SetSecondhalf_surname7_t1_lw1, SetSecondhalf_surname7_t1_rw1, 
    SetSecondhalf_surname7_t1_st1, SetSecondhalf_surname7_t2_gk2, SetSecondhalf_surname7_t2_lb2, 
    SetSecondhalf_surname7_t2_cb4, SetSecondhalf_surname7_t2_cb3, 
    SetSecondhalf_surname7_t2_rb2, SetSecondhalf_surname7_t2_dm2, SetSecondhalf_surname7_t2_cm4, 
    SetSecondhalf_surname7_t2_cm3, SetSecondhalf_surname7_t2_lw2, SetSecondhalf_surname7_t2_rw2, 
    SetSecondhalf_surname7_t2_st2, SetSecondhalf_team7_NoTeam, 
    SetSecondhalf_team7_homeTeam, SetSecondhalf_team7_awayTeam, 

    SetHomeTeamScoreValue, SetHomeTeamScoreValue_plus, 
    SetHomeTeamShootValue, SetHomeTeamShootValue_plus, 
    SetHomeTeamShootOnTargetValue, SetHomeTeamShootOnTargetValue_plus, 
    SetHomeTeamBallPossessionValue, SetHomeTeamBallPossessionValue_plus, 
    SetHomeTeamPassRateValue, SetHomeTeamPassRateValue_plus, 
    SetHomeTeamYellowCardValue, SetHomeTeamYellowCardValue_plus, 
    SetHomeTeamRedCardValue, SetHomeTeamRedCardValue_plus, 
    SetHomeTeamCornerValue, SetHomeTeamCornerValue_plus, 
    SetHomeTeamFoulValue, SetHomeTeamFoulValue_plus,
    SetHomeTeamPassRateValue_sour, SetHomeTeamBallPossessionValue_sour,
    SetAwayTeamBallPossessionValue_sour, SetAwayTeamPassRateValue_sour,

    SetAwayTeamScoreValue, SetAwayTeamScoreValue_plus, 
    SetAwayTeamShootValue, SetAwayTeamShootValue_plus, 
    SetAwayTeamShootOnTargetValue, SetAwayTeamShootOnTargetValue_plus, 
    SetAwayTeamBallPossessionValue, SetAwayTeamBallPossessionValue_plus, 
    SetAwayTeamPassRateValue, SetAwayTeamPassRateValue_plus, 
    SetAwayTeamYellowCardValue, SetAwayTeamYellowCardValue_plus, 
    SetAwayTeamRedCardValue, SetAwayTeamRedCardValue_plus, 
    SetAwayTeamCornerValue, SetAwayTeamCornerValue_plus, 
    SetAwayTeamFoulValue, SetAwayTeamFoulValue_plus, 

    SetHomeTeam_gk1_yellowCard_t, SetHomeTeam_gk1_yellowCard_f,
    SetHomeTeam_lb1_yellowCard_t, SetHomeTeam_lb1_yellowCard_f,
    SetHomeTeam_cb1_yellowCard_t, SetHomeTeam_cb1_yellowCard_f,
    SetHomeTeam_cb2_yellowCard_t, SetHomeTeam_cb2_yellowCard_f,
    SetHomeTeam_rb1_yellowCard_t, SetHomeTeam_rb1_yellowCard_f,
    SetHomeTeam_dm1_yellowCard_t, SetHomeTeam_dm1_yellowCard_f,
    SetHomeTeam_cm1_yellowCard_t, SetHomeTeam_cm1_yellowCard_f,
    SetHomeTeam_cm2_yellowCard_t, SetHomeTeam_cm2_yellowCard_f,
    SetHomeTeam_lw1_yellowCard_t, SetHomeTeam_lw1_yellowCard_f,
    SetHomeTeam_rw1_yellowCard_t, SetHomeTeam_rw1_yellowCard_f,
    SetHomeTeam_st1_yellowCard_t, SetHomeTeam_st1_yellowCard_f,

    SetHomeTeam_gk1_redCard_t, SetHomeTeam_gk1_redCard_f,
    SetHomeTeam_lb1_redCard_t, SetHomeTeam_lb1_redCard_f,
    SetHomeTeam_cb1_redCard_t, SetHomeTeam_cb1_redCard_f,
    SetHomeTeam_cb2_redCard_t, SetHomeTeam_cb2_redCard_f,
    SetHomeTeam_rb1_redCard_t, SetHomeTeam_rb1_redCard_f,
    SetHomeTeam_dm1_redCard_t, SetHomeTeam_dm1_redCard_f,
    SetHomeTeam_cm1_redCard_t, SetHomeTeam_cm1_redCard_f,
    SetHomeTeam_cm2_redCard_t, SetHomeTeam_cm2_redCard_f,
    SetHomeTeam_lw1_redCard_t, SetHomeTeam_lw1_redCard_f,
    SetHomeTeam_rw1_redCard_t, SetHomeTeam_rw1_redCard_f,
    SetHomeTeam_st1_redCard_t, SetHomeTeam_st1_redCard_f,

    SetAwayTeam_gk2_yellowCard_t, SetAwayTeam_gk2_yellowCard_f,
    SetAwayTeam_lb2_yellowCard_t, SetAwayTeam_lb2_yellowCard_f,
    SetAwayTeam_cb4_yellowCard_t, SetAwayTeam_cb4_yellowCard_f,
    SetAwayTeam_cb3_yellowCard_t, SetAwayTeam_cb3_yellowCard_f,
    SetAwayTeam_rb2_yellowCard_t, SetAwayTeam_rb2_yellowCard_f,
    SetAwayTeam_dm2_yellowCard_t, SetAwayTeam_dm2_yellowCard_f,
    SetAwayTeam_cm4_yellowCard_t, SetAwayTeam_cm4_yellowCard_f,
    SetAwayTeam_cm3_yellowCard_t, SetAwayTeam_cm3_yellowCard_f,
    SetAwayTeam_lw2_yellowCard_t, SetAwayTeam_lw2_yellowCard_f,
    SetAwayTeam_rw2_yellowCard_t, SetAwayTeam_rw2_yellowCard_f,
    SetAwayTeam_st2_yellowCard_t, SetAwayTeam_st2_yellowCard_f, 

    SetAwayTeam_gk2_redCard_t, SetAwayTeam_gk2_redCard_f, 
    SetAwayTeam_lb2_redCard_t, SetAwayTeam_lb2_redCard_f,
    SetAwayTeam_cb4_redCard_t, SetAwayTeam_cb4_redCard_f,
    SetAwayTeam_cb3_redCard_t, SetAwayTeam_cb3_redCard_f,
    SetAwayTeam_rb2_redCard_t, SetAwayTeam_rb2_redCard_f,
    SetAwayTeam_dm2_redCard_t, SetAwayTeam_dm2_redCard_f,
    SetAwayTeam_cm4_redCard_t, SetAwayTeam_cm4_redCard_f,
    SetAwayTeam_cm3_redCard_t, SetAwayTeam_cm3_redCard_f,
    SetAwayTeam_lw2_redCard_t, SetAwayTeam_lw2_redCard_f,
    SetAwayTeam_rw2_redCard_t, SetAwayTeam_rw2_redCard_f,
    SetAwayTeam_st2_redCard_t, SetAwayTeam_st2_redCard_f, 

    SetFirsthalf_yellowCard1_t, SetFirsthalf_yellowCard1_f, 
    SetFirsthalf_yellowCard2_t, SetFirsthalf_yellowCard2_f, 
    SetFirsthalf_yellowCard3_t, SetFirsthalf_yellowCard3_f,
    SetFirsthalf_yellowCard4_t, SetFirsthalf_yellowCard4_f,
    SetFirsthalf_yellowCard5_t, SetFirsthalf_yellowCard5_f,
    SetFirsthalf_yellowCard6_t, SetFirsthalf_yellowCard6_f,
    SetFirsthalf_yellowCard7_t, SetFirsthalf_yellowCard7_f, 

    SetFirsthalf_redCard1_t, SetFirsthalf_redCard1_f, 
    SetFirsthalf_redCard2_t, SetFirsthalf_redCard2_f, 
    SetFirsthalf_redCard3_t, SetFirsthalf_redCard3_f,
    SetFirsthalf_redCard4_t, SetFirsthalf_redCard4_f,
    SetFirsthalf_redCard5_t, SetFirsthalf_redCard5_f,
    SetFirsthalf_redCard6_t, SetFirsthalf_redCard6_f,
    SetFirsthalf_redCard7_t, SetFirsthalf_redCard7_f, 

    SetSecondhalf_redCard1_t, SetSecondhalf_redCard1_f,
    SetSecondhalf_redCard2_t, SetSecondhalf_redCard2_f,
    SetSecondhalf_redCard3_t, SetSecondhalf_redCard3_f,
    SetSecondhalf_redCard4_t, SetSecondhalf_redCard4_f,
    SetSecondhalf_redCard5_t, SetSecondhalf_redCard5_f,
    SetSecondhalf_redCard6_t, SetSecondhalf_redCard6_f,
    SetSecondhalf_redCard7_t, SetSecondhalf_redCard7_f,

    GetIsTacticsButtonClick_t, GetIsTacticsButtonClick_f,
    GetIsEventNow_f, GetIsEventNow_t } from '../redux/playmatchmenuSlice'

import { setTeamFormationGet1, setTeamFormationGet2, setTeamFormationGet3, setTeamFormationGet4, setHomeTeamGetValueGk1, setHomeTeamGetValueLb1, setHomeTeamGetValueCb1, setHomeTeamGetValueCb2, setHomeTeamGetValueRb1, 
    setHomeTeamGetValueDm1, setHomeTeamGetValueCm1, setHomeTeamGetValueCm2, setHomeTeamGetValueLw1, setHomeTeamGetValueRw1, setHomeTeamGetValueSt1, 
    setAwayTeamGetValueGk2, setAwayTeamGetValueLb2, setAwayTeamGetValueCb4, setAwayTeamGetValueCb3, setAwayTeamGetValueRb2, 
    setAwayTeamGetValueDm2, setAwayTeamGetValueCm4, setAwayTeamGetValueCm3, setAwayTeamGetValueLw2, 
    setAwayTeamGetValueRw2, setAwayTeamGetValueSt2, setHomeTeamGetValueGk_11 , setAwayTeamGetValueGk_11, 
    setHomeTeamGetValueLb_12, setAwayTeamGetValueLb_12, setHomeTeamGetValueRw1_9,
    setHomeTeamGetValueCb1_4, setHomeTeamGetValueCb1_13, setHomeTeamGetValueCb1_14, 
    setAwayTeamGetValueCb4_4, setAwayTeamGetValueCb4_13, setAwayTeamGetValueCb4_14,      
    setHomeTeamGetValueCb2_4, setHomeTeamGetValueCb2_13, setHomeTeamGetValueCb2_14, 
    setAwayTeamGetValueCb3_4, setAwayTeamGetValueCb3_13, setAwayTeamGetValueCb3_14, 
    setHomeTeamGetValueRb_15, setHomeTeamGetValueDm_16, setAwayTeamGetValueRb_15, setAwayTeamGetValueDm_16 , 
    setHomeTeamGetValueCm1_7, setHomeTeamGetValueCm1_17, setHomeTeamGetValueCm1_18, setHomeTeamGetValueCm1_19, 
    setHomeTeamGetValueCm2_6, setHomeTeamGetValueCm2_17, setHomeTeamGetValueCm2_18, setHomeTeamGetValueCm2_19, 
    setAwayTeamGetValueCm4_7, setAwayTeamGetValueCm4_17, setAwayTeamGetValueCm4_18, setAwayTeamGetValueCm4_19, 
    setAwayTeamGetValueCm3_6, setAwayTeamGetValueCm3_17, setAwayTeamGetValueCm3_18, setAwayTeamGetValueCm3_19, 
    setHomeTeamGetValueLw1_6, setHomeTeamGetValueLw1_7, setHomeTeamGetValueLw1_17, setHomeTeamGetValueLw1_18, setHomeTeamGetValueLw1_19, setHomeTeamGetValueLw1_20, 
    setHomeTeamGetValueLw1_21, setHomeTeamGetValueLw1_22, setHomeTeamGetValueLw1_23, setAwayTeamGetValueRw2_10, setHomeTeamGetValueRw1_10,
    setAwayTeamGetValueLw2_6, setAwayTeamGetValueLw2_7, setAwayTeamGetValueLw2_17, setAwayTeamGetValueLw2_18, setAwayTeamGetValueLw2_19, setAwayTeamGetValueLw2_20, 
    setAwayTeamGetValueLw2_21, setAwayTeamGetValueLw2_22, setAwayTeamGetValueLw2_23, setAwayTeamGetValueRw2_21,
    setHomeTeamValueLw2Click, setHomeTeamValueLw3Click, setHomeTeamValueLw4Click, 
    setAwayTeamValueLw2Click, setAwayTeamValueLw3Click, setAwayTeamValueLw4Click, 
    setHomeTeamValueRw2Click, setHomeTeamValueRw3Click, setHomeTeamValueRw4Click,
    setAwayTeamValueRw2Click, setAwayTeamValueRw3Click, setAwayTeamValueRw4Click, 
    setHomeTeamValueSt2Click, setHomeTeamValueSt3Click, setHomeTeamValueSt4Click, 
    setAwayTeamValueSt2Click, setAwayTeamValueSt3Click, setAwayTeamValueSt4Click, setHomeTeamGetValueLw1_24, setAwayTeamGetValueLw2_24,
    setHomeTeamGetValueRw1_6, setHomeTeamGetValueRw1_7, setAwayTeamGetValueRw2_8, setHomeTeamGetValueRw1_8, 
    setHomeTeamGetValueLw1_8, setAwayTeamGetValueLw2_8, setHomeTeamGetValueLw1_9, setAwayTeamGetValueLw2_9,
    setHomeTeamGetValueRw1_17, setHomeTeamGetValueLw1_10, setAwayTeamGetValueLw2_10,
    setHomeTeamGetValueRw1_18, setHomeTeamGetValueRw1_19, 
    setHomeTeamGetValueRw1_20, setHomeTeamGetValueRw1_21, 
    setHomeTeamGetValueRw1_22, setHomeTeamGetValueRw1_23, 
    setHomeTeamGetValueRw1_24, setHomeTeamGetValueRw1_25, setHomeTeamGetValueRw1_26,  
    setAwayTeamGetValueRw2_6, setAwayTeamGetValueRw2_7, setAwayTeamGetValueRw2_17, setAwayTeamGetValueRw2_18, 
    setAwayTeamGetValueRw2_19, setAwayTeamGetValueRw2_20, 
    setAwayTeamGetValueRw2_22, setAwayTeamGetValueRw2_23, 
    setAwayTeamGetValueRw2_24, setAwayTeamGetValueRw2_25, setAwayTeamGetValueRw2_26,
    setHomeTeamGetValueSt1_6, setHomeTeamGetValueSt1_7,
    setAwayTeamGetValueSt2_27, setAwayTeamGetValueSt2_28, setHomeTeamGetValueSt1_27, setHomeTeamGetValueSt1_28,
    setHomeTeamGetValueSt1_8, setHomeTeamGetValueSt1_9, setHomeTeamGetValueSt1_17, 
    setHomeTeamGetValueSt1_18, setHomeTeamGetValueSt1_19, setHomeTeamGetValueSt1_20,
    setHomeTeamGetValueSt1_21, setHomeTeamGetValueSt1_22, setHomeTeamGetValueSt1_23,
    setHomeTeamGetValueSt1_24, setHomeTeamGetValueSt1_25, setHomeTeamGetValueSt1_26,
    setAwayTeamGetValueSt2_6, setAwayTeamGetValueSt2_7, 
    setAwayTeamGetValueSt2_8, setAwayTeamGetValueSt2_9, setAwayTeamGetValueSt2_17, 
    setAwayTeamGetValueSt2_18, setAwayTeamGetValueSt2_19, setAwayTeamGetValueSt2_20,
    setAwayTeamGetValueSt2_21, setAwayTeamGetValueSt2_22, setAwayTeamGetValueSt2_23,
    setAwayTeamGetValueSt2_24, setAwayTeamGetValueSt2_25, setAwayTeamGetValueSt2_26,
    setHomeTeamGetSaveValueGk1, setHomeTeamGetSaveValueLb1, setHomeTeamGetSaveValueRb1, setHomeTeamGetSaveValueDm1, 
    setHomeTeamGetSaveValueCb1, setHomeTeamGetSaveValueCb2, setHomeTeamGetSaveValueCm1, 
    setHomeTeamGetSaveValueCm2, setHomeTeamGetSaveValueLw1, setHomeTeamGetSaveValueRw1,
    setAwayTeamGetSaveValueGk2, setAwayTeamGetSaveValueLb2, setAwayTeamGetSaveValueRb2, setAwayTeamGetSaveValueDm2,  
    setHomeTeamGetSaveValueSt1, setAwayTeamGetSaveValueCb4, setAwayTeamGetSaveValueCb3,
    setAwayTeamGetSaveValueCm4, setAwayTeamGetSaveValueCm3, setAwayTeamGetSaveValueLw2, 
    setAwayTeamGetSaveValueRw2, setAwayTeamGetSaveValueSt2,

    setSamePlayerValueId_f, setSamePlayerValueId_t,

    setSubPlayerVisible1_t, setSubPlayerVisible1_f,
    setSubPlayerVisible2_t, setSubPlayerVisible2_f,
    setSubPlayerVisible3_t, setSubPlayerVisible3_f,
    setSubPlayerVisible4_t, setSubPlayerVisible4_f,
    setSubPlayerVisible5_t, setSubPlayerVisible5_f,
    setSubPlayerVisible6_t, setSubPlayerVisible6_f,
    setSubPlayerVisible7_t, setSubPlayerVisible7_f,
    setSubPlayerVisible8_t, setSubPlayerVisible8_f,
    setSubPlayerVisible9_t, setSubPlayerVisible9_f,
    setSubPlayerVisible10_t, setSubPlayerVisible10_f,
    setSubPlayerVisible11_t, setSubPlayerVisible11_f,
    setSubPlayerVisible12_t, setSubPlayerVisible12_f,
    setSubPlayerVisible13_t, setSubPlayerVisible13_f,
    setSubPlayerVisible14_t, setSubPlayerVisible14_f,
    setSubPlayerVisible15_t, setSubPlayerVisible15_f,
    setSubPlayerVisible16_t, setSubPlayerVisible16_f,
    setSubPlayerVisible17_t, setSubPlayerVisible17_f,
    setSubPlayerVisible18_t, setSubPlayerVisible18_f,
    setSubPlayerVisible19_t, setSubPlayerVisible19_f,
    setSubPlayerVisible20_t, setSubPlayerVisible20_f,
    setSubPlayerVisible21_t, setSubPlayerVisible21_f,
    setSubPlayerVisible22_t, setSubPlayerVisible22_f,
    setSubPlayerVisible23_t, setSubPlayerVisible23_f,
    setSubPlayerVisible24_t, setSubPlayerVisible24_f,
    setSubPlayerVisible25_t, setSubPlayerVisible25_f,
    setSubPlayerVisible26_t, setSubPlayerVisible26_f,
    setSubPlayerVisible27_t, setSubPlayerVisible27_f,
    setSubPlayerVisible28_t, setSubPlayerVisible28_f,
    setSubPlayerVisible29_t, setSubPlayerVisible29_f,
    setSubPlayerVisible30_t, setSubPlayerVisible30_f,
    setSubPlayerVisible31_t, setSubPlayerVisible31_f,
    setSubPlayerVisible32_t, setSubPlayerVisible32_f,
    setSubPlayerVisible33_t, setSubPlayerVisible33_f,
    setSubPlayerVisible34_t, setSubPlayerVisible34_f,
    setSubPlayerVisible35_t, setSubPlayerVisible35_f,
    setSubPlayerVisible36_t, setSubPlayerVisible36_f,
    setSubPlayerVisible37_t, setSubPlayerVisible37_f,
    setSubPlayerVisible38_t, setSubPlayerVisible38_f } from '../redux/gamePlanMenuSlice';

    let sub1_gk1_click;
    let sub2_gk2_click;
    let sub3_lb1_click;
    let sub4_lb2_click;
    let sub5_cb1_1_click;
    let sub6_cb1_2_click;
    let sub7_cb1_3_click;
    let sub8_cb1_4_click;
    let sub9_cb2_1_click;
    let sub10_cb2_2_click;
    let sub11_cb2_3_click;
    let sub12_cb2_4_click;
    let sub13_rb1_click;
    let sub14_rb2_click;
    let sub15_dm1_click;
    let sub16_dm2_click;
    let sub17_cm1_1_click;
    let sub18_cm1_2_click;
    let sub19_cm1_3_click;
    let sub20_cm1_4_click;
    let sub21_cm1_5_click;
    let sub22_cm2_1_click;
    let sub23_cm2_2_click;
    let sub24_cm2_3_click;
    let sub25_cm2_4_click;
    let sub26_cm2_5_click;
    let sub27_lw1_click;
    let sub28_lw2_click;
    let sub29_lw3_click;
    let sub30_lw4_click;
    let sub31_rw1_click;
    let sub32_rw2_click;
    let sub33_rw3_click;
    let sub34_rw4_click;
    let sub35_st1_click;
    let sub36_st2_click;
    let sub37_st3_click;
    let sub38_st4_click;

    let homeTeamLen;
    let awayTeamLen;

function Gameplanmenu() {

    const dispatch = useDispatch()
    let navigate = useNavigate();

    const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
    const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

    const homeLeagueValue = useSelector(state => state.homeLeagueValue.homeLeagueValue)
    const awayLeagueValue = useSelector(state => state.awayLeagueValue.awayLeagueValue)

    const homeTeamValue = useSelector(state => state.setHomeTeamValue.homeTeamValue)
    const awayTeamValue = useSelector(state => state.setAwayTeamValue.awayTeamValue)

    const reduxLanguage = useSelector(
        (state) => state.setLanguage_login.language
      );

    const IsEventNowValue = useSelector(state => state.SetHomeTeam_gk1_energy.IsEventNow)
    const IsTacticsButtonClickValue = useSelector(state => state.SetHomeTeam_gk1_energy.IsTacticsButtonClick)
    
    homeTeamLen = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players.length;
    awayTeamLen = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players.length;

    const homeScrollCaptainPlayerValueId = useSelector(state => state.strategyHomeScrollCaptainPlayerValue_1.strategyHomeScrollCaptainPlayerValue)
    const awayScrollCaptainPlayerValueId = useSelector(state => state.strategyAwayScrollCaptainPlayerValue_1.strategyAwayScrollCaptainPlayerValue)
    
    const matchScreenStartValueBool = useSelector(state => state.GetMatchStartValue_on.matchScreenStartValue)
    const matchStartValueBool = useSelector(state => state.GetMatchStartValue_on.matchStartValue)

    const rightPlayerChangeId = useSelector(state => state.GetMatchStartValue_on.rightPlayerChange)

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

    const homeTeamValue_lw2_click = useSelector(state => state.setAwayTeamValueLw2Click.homeTeam_lw2_click)
    const homeTeamValue_lw3_click = useSelector(state => state.setAwayTeamValueLw3Click.homeTeam_lw3_click)
    const homeTeamValue_lw4_click = useSelector(state => state.setHomeTeamValueLw4Click.homeTeam_lw4_click)

    const homeTeamValue_rw2_click = useSelector(state => state.setHomeTeamValueRw2Click.homeTeam_rw2_click)
    const homeTeamValue_rw3_click = useSelector(state => state.setHomeTeamValueRw3Click.homeTeam_rw3_click)
    const homeTeamValue_rw4_click = useSelector(state => state.setHomeTeamValueRw4Click.homeTeam_rw4_click)

    const homeTeamValue_st2_click = useSelector(state => state.setHomeTeamValueSt2Click.homeTeam_st2_click)
    const homeTeamValue_st3_click = useSelector(state => state.setHomeTeamValueSt3Click.homeTeam_st3_click)
    const homeTeamValue_st4_click = useSelector(state => state.setHomeTeamValueSt4Click.homeTeam_st4_click)

    const awayTeamValue_lw2_click = useSelector(state => state.setAwayTeamValueLw2Click.awayTeam_lw2_click)
    const awayTeamValue_lw3_click = useSelector(state => state.setAwayTeamValueLw3Click.awayTeam_lw2_click)
    const awayTeamValue_lw4_click = useSelector(state => state.setAwayTeamValueLw4Click.awayTeam_lw2_click)

    const awayTeamValue_rw2_click = useSelector(state => state.setAwayTeamValueRw2Click.awayTeam_rw2_click)
    const awayTeamValue_rw3_click = useSelector(state => state.setAwayTeamValueRw3Click.awayTeam_rw2_click)
    const awayTeamValue_rw4_click = useSelector(state => state.setAwayTeamValueRw4Click.awayTeam_rw2_click)

    const awayTeamValue_st2_click = useSelector(state => state.setAwayTeamValueSt2Click.awayTeam_st2_click)
    const awayTeamValue_st3_click = useSelector(state => state.setAwayTeamValueSt3Click.awayTeam_st3_click)
    const awayTeamValue_st4_click = useSelector(state => state.setAwayTeamValueSt4Click.awayTeam_st4_click)

    let txtPosition = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPosition
    let txtPlayers = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPlayers
    let txtRating = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuRating
    let txtEnergy = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuEnergy
    let txtGk1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuGk1
    let txtLb1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuLb1
    let txtCb1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuCb1
    let txtRb1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuRb1
    let txtDm1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuDm1
    let txtCm1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuCm1
    let txtCm2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuCm2
    let txtLw1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuLw1
    let txtRw1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuRw1
    let txtSt1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuSt1

    let txtStrategyButton = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuStrategy
    let txtTurnBackButton = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuTurnBack
    let txtGameplanmenuSamePlayer = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuSamePlayer
    let txtGameplanmenuDontPlayerChange = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuDontPlayerChange
    let txtGameplanmenuSamePlayerChange = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuSamePlayerChange
    let txtGameplanmenuPositionPlayerChange = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionPlayerChange
    let gameplanmenuPositionHasRedCard = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionHasRedCard

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

    const t1_gk1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_gk1_energy)
    const t1_lb1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lb1_energy)
    const t1_cb1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb1_energy)
    const t1_cb2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cb2_energy)
    const t1_rb1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rb1_energy)
    const t1_dm1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_dm1_energy)
    const t1_cm1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm1_energy)
    const t1_cm2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_cm2_energy)
    const t1_lw1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_lw1_energy)
    const t1_rw1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_rw1_energy)
    const t1_st1_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.homeTeam_st1_energy)



    let t2_gk2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position1
    let t2_lb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position1
    let t2_cb4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position1
    let t2_cb3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position1
    let t2_rb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position1
    let t2_dm2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position1
    let t2_cm4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position1
    let t2_cm3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position1
    let t2_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position1
    let t2_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position1
    let t2_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position1

    let t2_gk2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].position2
    let t2_lb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].position2
    let t2_cb4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].position2
    let t2_cb3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].position2
    let t2_rb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].position2
    let t2_dm2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].position2
    let t2_cm4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].position2
    let t2_cm3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].position2
    let t2_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].position2
    let t2_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].position2
    let t2_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].position2

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

    let t2_gk2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].rating
    let t2_lb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].rating
    let t2_cb4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].rating
    let t2_cb3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].rating
    let t2_rb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].rating
    let t2_dm2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].rating
    let t2_cm4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].rating
    let t2_cm3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].rating
    let t2_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].rating
    let t2_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].rating
    let t2_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].rating
    
    let t2_gk2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_gk2].energy
    let t2_lb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lb2].energy
    let t2_cb4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb4].energy
    let t2_cb3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cb3].energy
    let t2_rb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rb2].energy
    let t2_dm2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_dm2].energy
    let t2_cm4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm4].energy
    let t2_cm3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_cm3].energy
    let t2_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_rw2].energy
    let t2_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_lw2].energy
    let t2_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamIndex_st2].energy

    const t2_gk2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_gk2_energy)
    const t2_lb2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lb2_energy)
    const t2_cb4_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb4_energy)
    const t2_cb3_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cb3_energy)
    const t2_rb2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rb2_energy)
    const t2_dm2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_dm2_energy)
    const t2_cm4_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm4_energy)
    const t2_cm3_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_cm3_energy)
    const t2_lw2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_rw2_energy)
    const t2_rw2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_lw2_energy)
    const t2_st2_energy1 = useSelector(state => state.SetHomeTeam_gk1_energy.awayTeam_st2_energy)

        const samePlayerValue = useSelector(state => state.setTeamFormationGet1.samePlayerValueId)

    const subPlayerVisible1Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible1)
    const subPlayerVisible2Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible2)
    const subPlayerVisible3Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible3)
    const subPlayerVisible4Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible4)
    const subPlayerVisible5Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible5)
    const subPlayerVisible6Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible6)
    const subPlayerVisible7Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible7)
    const subPlayerVisible8Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible8)
    const subPlayerVisible9Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible9)
    const subPlayerVisible10Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible10)
    const subPlayerVisible11Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible11)
    const subPlayerVisible12Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible12)
    const subPlayerVisible13Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible13)
    const subPlayerVisible14Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible14)
    const subPlayerVisible15Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible15)
    const subPlayerVisible16Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible16)
    const subPlayerVisible17Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible17)
    const subPlayerVisible18Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible18)
    const subPlayerVisible19Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible19)
    const subPlayerVisible20Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible20)
    const subPlayerVisible21Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible21)
    const subPlayerVisible22Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible22)
    const subPlayerVisible23Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible23)
    const subPlayerVisible24Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible24)
    const subPlayerVisible25Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible25)
    const subPlayerVisible26Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible26)
    const subPlayerVisible27Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible27)
    const subPlayerVisible28Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible28)
    const subPlayerVisible29Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible29)
    const subPlayerVisible30Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible30)
    const subPlayerVisible31Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible31)
    const subPlayerVisible32Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible32)
    const subPlayerVisible33Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible33)
    const subPlayerVisible34Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible34)
    const subPlayerVisible35Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible35)
    const subPlayerVisible36Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible36)
    const subPlayerVisible37Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible37)
    const subPlayerVisible38Bool = useSelector(state => state.setTeamFormationGet1.subPlayerVisible38)

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


    let gameplanmenuPlayerChange = " "

    function ControlPlayerChange(){
        if(matchStartValueBool==false){
            return " "
        }else if(matchStartValueBool==true){
            gameplanmenuPlayerChange = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPlayerChange
            return gameplanmenuPlayerChange + " : " + rightPlayerChangeId
        }
    }
    

    function ControlHomeAwaySideValue(){
        if(homeSideValue==false && awaySideValue==false){
            return <Navigate to='/'/>
        }
    }
    
    function formationValueCount(){
        if(formationValue==1){
            return <GamePlanFormation1/>
        }else if(formationValue==2){
            return <GamePlanFormation2/>
        }else if(formationValue==3){
            return <GamePlanFormation3/>
        }else if(formationValue==4){
            return <GamePlanFormation4/>
        }        
    }

    function ControlMatchStartValue(){
        console.log("matchScreenStartValueBool : " + matchScreenStartValueBool)
        if(matchScreenStartValueBool==false){
            return navigate("/playorgameplan");
        }else if(matchScreenStartValueBool==true){
            dispatch(GetIsTacticsButtonClick_f())
            return navigate("/playmatchmenuplayers");
        }
    }
    
    function GetTeamGk00_position1(){
        if(homeSideValue==true){
            t1_gk1_position1 = Languages.Languages[reduxLanguage].playorgameplan.playorgameplanGk
            return t1_gk1_position1
        }else {
            t2_gk2_position1 = Languages.Languages[reduxLanguage].playorgameplan.playorgameplanGk
            return t2_gk2_position1
        }
    }
    
    function GetTeamGk00_surname(){
        if(homeSideValue==true){
            return t1_gk1_surname
        }else {
            return t2_gk2_surname
        }
    }

    function GetTeamGk00_rating(){
        if(homeSideValue==true){
            return t1_gk1_rating
        }else {
            return t2_gk2_rating
        }
    }

    function GetTeamLb00_position1(){
        if(homeSideValue==true){
            return t1_lb1_position1
        }else {
            return t2_lb2_position1
        }
    }

    function GetTeamLb00_surname(){
        if(homeSideValue==true){
            return t1_lb1_surname
        }else {
            return t2_lb2_surname
        }
    }

    function GetTeamLb00_rating(){
        if(homeSideValue==true){
            return t1_lb1_rating
        }else {
            return t2_lb2_rating
        }
    }

    function GetTeamCb01_position1(){
        if(homeSideValue==true){
            return t1_cb1_position1
        }else {
            return t2_cb4_position1
        }
    }

    function GetTeamCb01_surname(){
        if(homeSideValue==true){
            return t1_cb1_surname
        }else {
            return t2_cb4_surname
        }
    }

    function GetTeamCb01_rating(){
        if(homeSideValue==true){
            return t1_cb1_rating
        }else {
            return t2_cb4_rating
        }
    }
    
    function GetTeamCb02_position1(){
        if(homeSideValue==true){
            return t1_cb2_position1
        }else {
            return t2_cb3_position1
        }
    }

    function GetTeamCb02_surname(){
        if(homeSideValue==true){
            return t1_cb2_surname
        }else {
            return t2_cb3_surname
        }
    }

    function GetTeamCb02_rating(){
        if(homeSideValue==true){
            return t1_cb2_rating
        }else {
            return t2_cb3_rating
        }
    }

    function GetTeamRb00_position1(){
        if(homeSideValue==true){
            return t1_rb1_position1
        }else {
            return t2_rb2_position1
        }
    }

    function GetTeamRb00_surname(){
        if(homeSideValue==true){
            return t1_rb1_surname
        }else {
            return t2_rb2_surname
        }
    }

    function GetTeamRb00_rating(){
        if(homeSideValue==true){
            return t1_rb1_rating
        }else {
            return t2_rb2_rating
        }
    }

    function GetTeamDm00_position1(){
        if(homeSideValue==true){
            return t1_dm1_position1
        }else {
            return t2_dm2_position1
        }
    }

    function GetTeamDm00_surname(){
        if(homeSideValue==true){
            return t1_dm1_surname
        }else {
            return t2_dm2_surname
        }
    }

    function GetTeamDm00_rating(){
        if(homeSideValue==true){
            return t1_dm1_rating
        }else {
            return t2_dm2_rating
        }
    }

    function GetTeamCm01_position1(){
        if(homeSideValue==true){
            return t1_cm1_position1
        }else {
            return t2_cm4_position1
        }
    }

    function GetTeamCm01_surname(){
        if(homeSideValue==true){
            return t1_cm1_surname
        }else {
            return t2_cm4_surname
        }
    }

    function GetTeamCm01_rating(){
        if(homeSideValue==true){
            return t1_cm1_rating
        }else {
            return t2_cm4_rating
        }
    }

    function GetTeamCm02_position1(){
        if(homeSideValue==true){
            return t1_cm2_position1
        }else {
            return t2_cm3_position1
        }
    }

    function GetTeamCm02_surname(){
        if(homeSideValue==true){
            return t1_cm2_surname
        }else {
            return t2_cm3_surname
        }
    }

    function GetTeamCm02_rating(){
        if(homeSideValue==true){
            return t1_cm2_rating
        }else {
            return t2_cm3_rating
        }
    }

    function GetTeamLw00_position1(){
        if(homeSideValue==true){
            return t1_lw1_position1
        }else {
            return t2_lw2_position1
        }
    }

    function GetTeamLw00_surname(){
        if(homeSideValue==true){
            return t1_lw1_surname
        }else {
            return t2_lw2_surname
        }
    }

    function GetTeamLw00_rating(){
        if(homeSideValue==true){
            return t1_lw1_rating
        }else {
            return t2_lw2_rating
        }
    }

    function GetTeamRw00_position1(){
        if(homeSideValue==true){
            return t1_rw1_position1
        }else {
            return t2_rw2_position1
        }
    }

    function GetTeamRw00_surname(){
        if(homeSideValue==true){
            return t1_rw1_surname
        }else {
            return t2_rw2_surname
        }
    }

    function GetTeamRw00_rating(){
        if(homeSideValue==true){
            return t1_rw1_rating
        }else {
            return t2_rw2_rating
        }
    }

    function GetTeamSt00_position1(){
        if(homeSideValue==true){
            return t1_st1_position1
        }else {
            return t2_st2_position1
        }
    }

    function GetTeamSt00_surname(){
        if(homeSideValue==true){
            return t1_st1_surname
        }else {
            return t2_st2_surname
        }
    }

    function GetTeamSt00_rating(){
        if(homeSideValue==true){
            return t1_st1_rating
        }else {
            return t2_st2_rating
        }
    }


    //sub players

    let sub1_gk1_position1;
    let sub1_gk1_position2;
    let sub1_gk1_name;
    let sub1_gk1_surname;
    let sub1_gk1_rating;
    let sub1_gk1_energy;

    let sub2_gk2_position1;
    let sub2_gk2_position2;
    let sub2_gk2_name;
    let sub2_gk2_surname;
    let sub2_gk2_rating;
    let sub2_gk2_energy;

    let sub3_lb1_position1;
    let sub3_lb1_position2;
    let sub3_lb1_name;
    let sub3_lb1_surname;
    let sub3_lb1_rating;
    let sub3_lb1_energy;

    let sub4_lb2_position1;
    let sub4_lb2_position2;
    let sub4_lb2_name;
    let sub4_lb2_surname;
    let sub4_lb2_rating;
    let sub4_lb2_energy;

    let sub5_cb1_1_position1;
    let sub5_cb1_1_position2;
    let sub5_cb1_1_name;
    let sub5_cb1_1_surname;
    let sub5_cb1_1_rating;
    let sub5_cb1_1_energy;

    let sub6_cb1_2_position1;
    let sub6_cb1_2_position2;
    let sub6_cb1_2_name;
    let sub6_cb1_2_surname;
    let sub6_cb1_2_rating;
    let sub6_cb1_2_energy;

    let sub7_cb1_3_position1;
    let sub7_cb1_3_position2;
    let sub7_cb1_3_name;
    let sub7_cb1_3_surname;
    let sub7_cb1_3_rating;
    let sub7_cb1_3_energy;

    let sub8_cb1_4_position1;
    let sub8_cb1_4_position2;
    let sub8_cb1_4_name;
    let sub8_cb1_4_surname;
    let sub8_cb1_4_rating;
    let sub8_cb1_4_energy;

    let sub9_cb2_1_position1;
    let sub9_cb2_1_position2;
    let sub9_cb2_1_name;
    let sub9_cb2_1_surname;
    let sub9_cb2_1_rating;
    let sub9_cb2_1_energy;

    let sub10_cb2_2_position1;
    let sub10_cb2_2_position2;
    let sub10_cb2_2_name;
    let sub10_cb2_2_surname;
    let sub10_cb2_2_rating;
    let sub10_cb2_2_energy;

    let sub11_cb2_3_position1;
    let sub11_cb2_3_position2;
    let sub11_cb2_3_name;
    let sub11_cb2_3_surname;
    let sub11_cb2_3_rating;
    let sub11_cb2_3_energy;

    let sub12_cb2_4_position1;
    let sub12_cb2_4_position2;
    let sub12_cb2_4_name;
    let sub12_cb2_4_surname;
    let sub12_cb2_4_rating;
    let sub12_cb2_4_energy;

    let sub13_rb1_position1;
    let sub13_rb1_position2;
    let sub13_rb1_name;
    let sub13_rb1_surname;
    let sub13_rb1_rating;
    let sub13_rb1_energy;

    let sub14_rb2_position1;
    let sub14_rb2_position2;
    let sub14_rb2_name;
    let sub14_rb2_surname;
    let sub14_rb2_rating;
    let sub14_rb2_energy;

    let sub15_dm1_position1;
    let sub15_dm1_position2;
    let sub15_dm1_name;
    let sub15_dm1_surname;
    let sub15_dm1_rating;
    let sub15_dm1_energy;

    let sub16_dm2_position1;
    let sub16_dm2_position2;
    let sub16_dm2_name;
    let sub16_dm2_surname;
    let sub16_dm2_rating;
    let sub16_dm2_energy;
    
    let sub17_cm1_1_position1;
    let sub17_cm1_1_position2;
    let sub17_cm1_1_name;
    let sub17_cm1_1_surname;
    let sub17_cm1_1_rating;
    let sub17_cm1_1_energy;

    let sub18_cm1_2_position1;
    let sub18_cm1_2_position2;
    let sub18_cm1_2_name;
    let sub18_cm1_2_surname;
    let sub18_cm1_2_rating;
    let sub18_cm1_2_energy;

    let sub19_cm1_3_position1;
    let sub19_cm1_3_position2;
    let sub19_cm1_3_name;
    let sub19_cm1_3_surname;
    let sub19_cm1_3_rating;
    let sub19_cm1_3_energy;

    let sub20_cm1_4_position1;
    let sub20_cm1_4_position2;
    let sub20_cm1_4_name;
    let sub20_cm1_4_surname;
    let sub20_cm1_4_rating;
    let sub20_cm1_4_energy;

    let sub21_cm1_5_position1;
    let sub21_cm1_5_position2;
    let sub21_cm1_5_name;
    let sub21_cm1_5_surname;
    let sub21_cm1_5_rating;
    let sub21_cm1_5_energy;

    let sub22_cm2_1_position1;
    let sub22_cm2_1_position2;
    let sub22_cm2_1_name;
    let sub22_cm2_1_surname;
    let sub22_cm2_1_rating;
    let sub22_cm2_1_energy;

    let sub23_cm2_2_position1;
    let sub23_cm2_2_position2;
    let sub23_cm2_2_name;
    let sub23_cm2_2_surname;
    let sub23_cm2_2_rating;
    let sub23_cm2_2_energy;

    let sub24_cm2_3_position1;
    let sub24_cm2_3_position2;
    let sub24_cm2_3_name;
    let sub24_cm2_3_surname;
    let sub24_cm2_3_rating;
    let sub24_cm2_3_energy;

    let sub25_cm2_4_position1;
    let sub25_cm2_4_position2;
    let sub25_cm2_4_name;
    let sub25_cm2_4_surname;
    let sub25_cm2_4_rating;
    let sub25_cm2_4_energy;

    let sub26_cm2_5_position1;
    let sub26_cm2_5_position2;
    let sub26_cm2_5_name;
    let sub26_cm2_5_surname;
    let sub26_cm2_5_rating;
    let sub26_cm2_5_energy;

    let sub27_lw1_position1;
    let sub27_lw1_position2;
    let sub27_lw1_name;
    let sub27_lw1_surname;
    let sub27_lw1_rating;
    let sub27_lw1_energy;

    let sub28_lw2_position1;
    let sub28_lw2_position2;
    let sub28_lw2_name;
    let sub28_lw2_surname;
    let sub28_lw2_rating;
    let sub28_lw2_energy;

    let sub29_lw3_position1;
    let sub29_lw3_position2;
    let sub29_lw3_name;
    let sub29_lw3_surname;
    let sub29_lw3_rating;
    let sub29_lw3_energy;

    let sub30_lw4_position1;
    let sub30_lw4_position2;
    let sub30_lw4_name;
    let sub30_lw4_surname;
    let sub30_lw4_rating;
    let sub30_lw4_energy;

    let sub31_rw1_position1;
    let sub31_rw1_position2;
    let sub31_rw1_name;
    let sub31_rw1_surname;
    let sub31_rw1_rating;
    let sub31_rw1_energy;

    let sub32_rw2_position1;
    let sub32_rw2_position2;
    let sub32_rw2_name;
    let sub32_rw2_surname;
    let sub32_rw2_rating;
    let sub32_rw2_energy;

    let sub33_rw3_position1;
    let sub33_rw3_position2;
    let sub33_rw3_name;
    let sub33_rw3_surname;
    let sub33_rw3_rating;
    let sub33_rw3_energy;
    
    let sub34_rw4_position1;
    let sub34_rw4_position2;
    let sub34_rw4_name;
    let sub34_rw4_surname;
    let sub34_rw4_rating;
    let sub34_rw4_energy;

    let sub35_st1_position1;
    let sub35_st1_position2;
    let sub35_st1_name;
    let sub35_st1_surname;
    let sub35_st1_rating;
    let sub35_st1_energy;

    let sub36_st2_position1;
    let sub36_st2_position2;
    let sub36_st2_name;
    let sub36_st2_surname;
    let sub36_st2_rating;
    let sub36_st2_energy;

    let sub37_st3_position1;
    let sub37_st3_position2;
    let sub37_st3_name;
    let sub37_st3_surname;
    let sub37_st3_rating;
    let sub37_st3_energy;

    let sub38_st4_position1;
    let sub38_st4_position2;
    let sub38_st4_name;
    let sub38_st4_surname;
    let sub38_st4_rating;
    let sub38_st4_energy;






    function ControlSubPlayers(){
        if(homeSideValue==true){
            sub1_gk1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].position1
            sub1_gk1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].position2
            sub1_gk1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].name
            sub1_gk1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].surname
            sub1_gk1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].rating
            sub1_gk1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[0].energy

            sub2_gk2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].position1
            sub2_gk2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].position2
            sub2_gk2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].name
            sub2_gk2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].surname
            sub2_gk2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].rating
            sub2_gk2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[11].energy

            sub3_lb1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].position1
            sub3_lb1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].position2
            sub3_lb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].name
            sub3_lb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].surname
            sub3_lb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].rating
            sub3_lb1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[1].energy

            sub4_lb2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].position1
            sub4_lb2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].position2
            sub4_lb2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].name
            sub4_lb2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].surname
            sub4_lb2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].rating
            sub4_lb2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[12].energy

            sub5_cb1_1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].position1
            sub5_cb1_1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].position2
            sub5_cb1_1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].name
            sub5_cb1_1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].surname
            sub5_cb1_1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].rating
            sub5_cb1_1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].energy

            sub6_cb1_2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].position1
            sub6_cb1_2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].position2
            sub6_cb1_2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].name
            sub6_cb1_2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].surname
            sub6_cb1_2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].rating
            sub6_cb1_2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].energy

            sub7_cb1_3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].position1
            sub7_cb1_3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].position2
            sub7_cb1_3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].name
            sub7_cb1_3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].surname
            sub7_cb1_3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].rating
            sub7_cb1_3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].energy

            sub8_cb1_4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].position1
            sub8_cb1_4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].position2
            sub8_cb1_4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].name
            sub8_cb1_4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].surname
            sub8_cb1_4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].rating
            sub8_cb1_4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].energy

            sub9_cb2_1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].position1
            sub9_cb2_1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].position2
            sub9_cb2_1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].name
            sub9_cb2_1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].surname
            sub9_cb2_1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].rating
            sub9_cb2_1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[3].energy

            sub10_cb2_2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].position1
            sub10_cb2_2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].position2
            sub10_cb2_2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].name
            sub10_cb2_2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].surname
            sub10_cb2_2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].rating
            sub10_cb2_2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[2].energy

            sub11_cb2_3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].position1
            sub11_cb2_3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].position2
            sub11_cb2_3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].name
            sub11_cb2_3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].surname
            sub11_cb2_3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].rating
            sub11_cb2_3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[13].energy

            sub12_cb2_4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].position1
            sub12_cb2_4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].position2
            sub12_cb2_4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].name
            sub12_cb2_4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].surname
            sub12_cb2_4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].rating
            sub12_cb2_4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[14].energy

            sub13_rb1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].position1
            sub13_rb1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].position2
            sub13_rb1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].name
            sub13_rb1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].surname
            sub13_rb1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].rating
            sub13_rb1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[4].energy

            sub14_rb2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].position1
            sub14_rb2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].position2
            sub14_rb2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].name
            sub14_rb2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].surname
            sub14_rb2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].rating
            sub14_rb2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[15].energy

            sub15_dm1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].position1
            sub15_dm1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].position2
            sub15_dm1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].name
            sub15_dm1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].surname
            sub15_dm1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].rating
            sub15_dm1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[5].energy

            sub16_dm2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].position1
            sub16_dm2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].position2
            sub16_dm2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].name
            sub16_dm2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].surname
            sub16_dm2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].rating
            sub16_dm2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[16].energy

            sub17_cm1_1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position1
            sub17_cm1_1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position2
            sub17_cm1_1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].name
            sub17_cm1_1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].surname
            sub17_cm1_1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].rating
            sub17_cm1_1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].energy

            sub18_cm1_2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
            sub18_cm1_2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
            sub18_cm1_2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
            sub18_cm1_2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
            sub18_cm1_2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
            sub18_cm1_2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy

            sub19_cm1_3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
            sub19_cm1_3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
            sub19_cm1_3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
            sub19_cm1_3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
            sub19_cm1_3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
            sub19_cm1_3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy

            sub20_cm1_4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
            sub20_cm1_4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
            sub20_cm1_4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
            sub20_cm1_4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
            sub20_cm1_4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
            sub20_cm1_4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy

            sub21_cm1_5_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
            sub21_cm1_5_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
            sub21_cm1_5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
            sub21_cm1_5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
            sub21_cm1_5_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
            sub21_cm1_5_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy

            sub22_cm2_1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
            sub22_cm2_1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
            sub22_cm2_1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
            sub22_cm2_1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
            sub22_cm2_1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
            sub22_cm2_1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy

            sub23_cm2_2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position1
            sub23_cm2_2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position2
            sub23_cm2_2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].name
            sub23_cm2_2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].surname
            sub23_cm2_2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].rating
            sub23_cm2_2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].energy

            sub24_cm2_3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
            sub24_cm2_3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
            sub24_cm2_3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
            sub24_cm2_3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
            sub24_cm2_3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
            sub24_cm2_3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy

            sub25_cm2_4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
            sub25_cm2_4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
            sub25_cm2_4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
            sub25_cm2_4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
            sub25_cm2_4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
            sub25_cm2_4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy

            sub26_cm2_5_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
            sub26_cm2_5_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
            sub26_cm2_5_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
            sub26_cm2_5_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
            sub26_cm2_5_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
            sub26_cm2_5_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy

            sub27_lw1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
            sub27_lw1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
            sub27_lw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
            sub27_lw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
            sub27_lw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
            sub27_lw1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy

            sub31_rw1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
            sub31_rw1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
            sub31_rw1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
            sub31_rw1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
            sub31_rw1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
            sub31_rw1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy

            sub35_st1_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
            sub35_st1_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
            sub35_st1_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
            sub35_st1_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
            sub35_st1_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
            sub35_st1_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy

            GetEmptyPlayersLw()
            GetEmptyPlayersRw()
            GetEmptyPlayersSt()

        }else if(awaySideValue==true){

            sub1_gk1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].position1
            sub1_gk1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].position2
            sub1_gk1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].name
            sub1_gk1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].surname
            sub1_gk1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].rating
            sub1_gk1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[0].energy

            sub2_gk2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].position1
            sub2_gk2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].position2
            sub2_gk2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].name
            sub2_gk2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].surname
            sub2_gk2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].rating
            sub2_gk2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[11].energy

            sub3_lb1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].position1
            sub3_lb1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].position2
            sub3_lb1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].name
            sub3_lb1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].surname
            sub3_lb1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].rating
            sub3_lb1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[1].energy

            sub4_lb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].position1
            sub4_lb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].position2
            sub4_lb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].name
            sub4_lb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].surname
            sub4_lb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].rating
            sub4_lb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[12].energy

            sub5_cb1_1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].position1
            sub5_cb1_1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].position2
            sub5_cb1_1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].name
            sub5_cb1_1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].surname
            sub5_cb1_1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].rating
            sub5_cb1_1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].energy

            sub6_cb1_2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].position1
            sub6_cb1_2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].position2
            sub6_cb1_2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].name
            sub6_cb1_2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].surname
            sub6_cb1_2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].rating
            sub6_cb1_2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].energy

            sub7_cb1_3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].position1
            sub7_cb1_3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].position2
            sub7_cb1_3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].name
            sub7_cb1_3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].surname
            sub7_cb1_3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].rating
            sub7_cb1_3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].energy

            sub8_cb1_4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].position1
            sub8_cb1_4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].position2
            sub8_cb1_4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].name
            sub8_cb1_4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].surname
            sub8_cb1_4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].rating
            sub8_cb1_4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].energy

            sub9_cb2_1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].position1
            sub9_cb2_1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].position2
            sub9_cb2_1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].name
            sub9_cb2_1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].surname
            sub9_cb2_1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].rating
            sub9_cb2_1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[3].energy

            sub10_cb2_2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].position1
            sub10_cb2_2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].position2
            sub10_cb2_2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].name
            sub10_cb2_2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].surname
            sub10_cb2_2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].rating
            sub10_cb2_2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[2].energy

            sub11_cb2_3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].position1
            sub11_cb2_3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].position2
            sub11_cb2_3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].name
            sub11_cb2_3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].surname
            sub11_cb2_3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].rating
            sub11_cb2_3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[13].energy

            sub12_cb2_4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].position1
            sub12_cb2_4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].position2
            sub12_cb2_4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].name
            sub12_cb2_4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].surname
            sub12_cb2_4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].rating
            sub12_cb2_4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[14].energy

            sub13_rb1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].position1
            sub13_rb1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].position2
            sub13_rb1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].name
            sub13_rb1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].surname
            sub13_rb1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].rating
            sub13_rb1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[4].energy

            sub14_rb2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].position1
            sub14_rb2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].position2
            sub14_rb2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].name
            sub14_rb2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].surname
            sub14_rb2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].rating
            sub14_rb2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[15].energy

            sub15_dm1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].position1
            sub15_dm1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].position2
            sub15_dm1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].name
            sub15_dm1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].surname
            sub15_dm1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].rating
            sub15_dm1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[5].energy

            sub16_dm2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].position1
            sub16_dm2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].position2
            sub16_dm2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].name
            sub16_dm2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].surname
            sub16_dm2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].rating
            sub16_dm2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[16].energy

            sub17_cm1_1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position1
            sub17_cm1_1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position2
            sub17_cm1_1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].name
            sub17_cm1_1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].surname
            sub17_cm1_1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].rating
            sub17_cm1_1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].energy

            sub18_cm1_2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
            sub18_cm1_2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
            sub18_cm1_2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
            sub18_cm1_2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
            sub18_cm1_2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
            sub18_cm1_2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy

            sub19_cm1_3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
            sub19_cm1_3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
            sub19_cm1_3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
            sub19_cm1_3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
            sub19_cm1_3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
            sub19_cm1_3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy

            sub20_cm1_4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
            sub20_cm1_4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
            sub20_cm1_4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
            sub20_cm1_4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
            sub20_cm1_4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
            sub20_cm1_4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy

            sub21_cm1_5_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
            sub21_cm1_5_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
            sub21_cm1_5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
            sub21_cm1_5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
            sub21_cm1_5_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
            sub21_cm1_5_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy

            sub22_cm2_1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
            sub22_cm2_1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
            sub22_cm2_1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
            sub22_cm2_1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
            sub22_cm2_1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
            sub22_cm2_1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy

            sub23_cm2_2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position1
            sub23_cm2_2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position2
            sub23_cm2_2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].name
            sub23_cm2_2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].surname
            sub23_cm2_2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].rating
            sub23_cm2_2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].energy

            sub24_cm2_3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
            sub24_cm2_3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
            sub24_cm2_3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
            sub24_cm2_3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
            sub24_cm2_3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
            sub24_cm2_3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy

            sub25_cm2_4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
            sub25_cm2_4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
            sub25_cm2_4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
            sub25_cm2_4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
            sub25_cm2_4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
            sub25_cm2_4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy

            sub26_cm2_5_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
            sub26_cm2_5_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
            sub26_cm2_5_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
            sub26_cm2_5_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
            sub26_cm2_5_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
            sub26_cm2_5_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy

            sub27_lw1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
            sub27_lw1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
            sub27_lw1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
            sub27_lw1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
            sub27_lw1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
            sub27_lw1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy

            sub31_rw1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
            sub31_rw1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
            sub31_rw1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
            sub31_rw1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
            sub31_rw1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
            sub31_rw1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy

            sub35_st1_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
            sub35_st1_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
            sub35_st1_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
            sub35_st1_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
            sub35_st1_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
            sub35_st1_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
            
            GetEmptyPlayersLw()
            GetEmptyPlayersRw()
            GetEmptyPlayersSt()

        }
    }
















    function GetEmptyPlayersLw(){

        let sub28_chosen = false;
        let sub29_chosen = false;
        let sub30_chosen = false;

        if(homeSideValue==true){
            //get lw position in cm position
            if(sub17_cm1_1_position1=="LW" || sub17_cm1_1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){

                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].energy
    
                    sub28_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="LW" || sub18_cm1_2_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub28_chosen = true
                    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){

                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub29_chosen = true
                } 
            }
            if(sub19_cm1_3_position1=="LW" || sub19_cm1_3_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub30_chosen = true
    
                }
            }
            if(sub20_cm1_4_position1=="LW" || sub20_cm1_4_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub30_chosen = true
    
                }
            }
            if(sub21_cm1_5_position1=="LW" || sub21_cm1_5_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub30_chosen = true
    
                }
            }

            //get lw position in rw position
            if(sub31_rw1_position1=="LW" || sub31_rw1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub30_chosen = true
    
                }
            }
            if(20 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
        
                        sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub30_chosen = true
        
                    }
                }
            }
            if(21 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
        
                        sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub30_chosen = true
        
                    }
                }
            }
            if(22 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                        sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub30_chosen = true
        
                    }
                }
            }

            //get lw position in st position
            if(sub35_st1_position1=="LW" || sub35_st1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub30_chosen = true
    
                } 
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2=="LW") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub29_lw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub28_lw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub30_chosen = true
    
                }
            }
            if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2=="LW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub29_lw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub28_lw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub30_chosen = true
    
                }
            }
            if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1=="LW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2=="LW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub29_lw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub28_lw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub28_lw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub28_lw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub28_lw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub28_lw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub28_lw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub29_lw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub29_lw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub29_lw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub29_lw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub29_lw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub30_lw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub30_lw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub30_lw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub30_lw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub30_lw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub30_chosen = true
    
                }
            }


        }else if(awaySideValue==true){
            if(sub17_cm1_1_position1=="LW" || sub17_cm1_1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){

                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].energy
    
                    sub28_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="LW" || sub18_cm1_2_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub28_chosen = true
                    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){

                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub29_chosen = true
                } 
            }
            if(sub19_cm1_3_position1=="LW" || sub19_cm1_3_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub30_chosen = true
    
                }
            }
            if(sub20_cm1_4_position1=="LW" || sub20_cm1_4_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub30_chosen = true
    
                }
            }
            if(sub21_cm1_5_position1=="LW" || sub21_cm1_5_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub30_chosen = true
    
                }
            }

            //get lw position in rw position
            if(sub31_rw1_position1=="LW" || sub31_rw1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub30_chosen = true
    
                }
            }
            if(20 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
        
                        sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub30_chosen = true
        
                    }
                }
            }
            if(21 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
        
                        sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub30_chosen = true
        
                    }
                }
            }
            if(22 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2=="LW"){
                    if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                        sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub28_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
        
                        sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub29_chosen = true
        
                    }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
        
                        sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub30_chosen = true
        
                    }
                }
            }

            //get lw position in st position
            if(sub35_st1_position1=="LW" || sub35_st1_position2=="LW"){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub30_chosen = true
    
                } 
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2=="LW") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub29_lw3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub28_lw2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub30_chosen = true
    
                }
            }
            if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2=="LW" && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub29_lw3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub28_lw2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub30_chosen = true
    
                }
            }
            if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1=="LW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2=="LW" && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub29_lw3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub28_lw2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub27_lw1_surname){
                if(sub28_chosen==false && sub29_chosen==false && sub30_chosen==false){
    
                    sub28_lw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub28_lw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub28_lw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub28_lw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub28_lw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub28_lw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub28_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==false && sub30_chosen==false){
    
                    sub29_lw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub29_lw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub29_lw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub29_lw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub29_lw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub29_lw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub29_chosen = true
    
                }else if(sub28_chosen==true && sub29_chosen==true && sub30_chosen==false){
    
                    sub30_lw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub30_lw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub30_lw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub30_lw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub30_lw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub30_lw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub30_chosen = true
    
                }
            }
        }
    }





    function GetEmptyPlayersRw(){

        let sub32_chosen = false;
        let sub33_chosen = false;
        let sub34_chosen = false;

        if(homeSideValue==true){
            //get rw position in cm position
            if(sub17_cm1_1_position1=="RW" || sub17_cm1_1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){

                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].energy
    
                    sub32_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="RW" || sub18_cm1_2_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){

                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub32_chosen = true
                    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){

                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub33_chosen = true
                } 
            }
            if(sub19_cm1_3_position1=="RW" || sub19_cm1_3_position2=="RW"){
                if(sub32_chosen==false && sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub34_chosen = true
    
                }
            }
            if(sub20_cm1_4_position1=="RW" || sub20_cm1_4_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub34_chosen = true
    
                }
            }
            if(sub21_cm1_5_position1=="RW" || sub21_cm1_5_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub34_chosen = true
    
                }
            }

            //get rw position in Lw position
            if(sub27_lw1_position1=="RW" || sub27_lw1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub34_chosen = true
    
                }
            }
            if(20 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
        
                        sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position1
                        sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].position2
                        sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].name
                        sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname
                        sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].rating
                        sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(21 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
        
                        sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position1
                        sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].position2
                        sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].name
                        sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname
                        sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].rating
                        sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(22 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position1
                        sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].position2
                        sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].name
                        sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname
                        sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].rating
                        sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(23 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position1
                        sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position2
                        sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].name
                        sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname
                        sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].rating
                        sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position1
                        sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position2
                        sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].name
                        sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname
                        sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].rating
                        sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position1
                        sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].position2
                        sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].name
                        sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname
                        sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].rating
                        sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(24 <= homeTeamLen-1){
                if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position1
                        sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position2
                        sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].name
                        sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname
                        sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].rating
                        sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position1
                        sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position2
                        sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].name
                        sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname
                        sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].rating
                        sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position1
                        sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].position2
                        sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].name
                        sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname
                        sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].rating
                        sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].energy
        
                        sub34_chosen = true
        
                    }
                }
            }

            //get rw position in st position
            if(sub35_st1_position1=="RW" || sub35_st1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[10].energy
    
                    sub34_chosen = true
    
                } 
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2=="RW") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub33_rw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub32_rw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub31_rw1_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub34_chosen = true
    
                }
            }
            if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2=="RW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub33_rw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub32_rw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub31_rw1_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub34_chosen = true
    
                }
            }
            if(Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1=="RW" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2=="RW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub33_rw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub32_rw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub31_rw1_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub32_rw2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub32_rw2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub32_rw2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub32_rw2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub32_rw2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub33_rw3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub33_rw3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub33_rw3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub33_rw3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub33_rw3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub34_rw4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub34_rw4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub34_rw4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub34_rw4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub34_rw4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub34_chosen = true
    
                }
            }

        }else if(awaySideValue==true){
            if(sub17_cm1_1_position1=="RW" || sub17_cm1_1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){

                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].energy
    
                    sub32_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="RW" || sub18_cm1_2_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
                    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub32_chosen = true
                    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){

                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub33_chosen = true
                } 
            }
            if(sub19_cm1_3_position1=="RW" || sub19_cm1_3_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub34_chosen = true
    
                }
            }
            if(sub20_cm1_4_position1=="RW" || sub20_cm1_4_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub34_chosen = true
    
                }
            }
            if(sub21_cm1_5_position1=="RW" || sub21_cm1_5_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub34_chosen = true
    
                }
            }

            //get rw position in Lw position
            if(sub27_lw1_position1=="RW" || sub27_lw1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub34_chosen = true
    
                }
            }
            if(20 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
        
                        sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position1
                        sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].position2
                        sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].name
                        sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname
                        sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].rating
                        sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(21 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
        
                        sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position1
                        sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].position2
                        sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].name
                        sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname
                        sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].rating
                        sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(22 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position1
                        sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].position2
                        sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].name
                        sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname
                        sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].rating
                        sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(23 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position1
                        sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position2
                        sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].name
                        sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname
                        sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].rating
                        sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position1
                        sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position2
                        sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].name
                        sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname
                        sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].rating
                        sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position1
                        sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].position2
                        sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].name
                        sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname
                        sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].rating
                        sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].energy
        
                        sub34_chosen = true
        
                    }
                }
            }
            if(24 <= awayTeamLen-1){
                if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position2=="RW"){
                    if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                        sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position1
                        sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position2
                        sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].name
                        sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname
                        sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].rating
                        sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].energy
        
                        sub32_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
        
                        sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position1
                        sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position2
                        sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].name
                        sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname
                        sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].rating
                        sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].energy
        
                        sub33_chosen = true
        
                    }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
        
                        sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position1
                        sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].position2
                        sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].name
                        sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname
                        sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].rating
                        sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].energy
        
                        sub34_chosen = true
        
                    }
                }
            }

            //get rw position in st position
            if(sub35_st1_position1=="RW" || sub35_st1_position2=="RW"){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[10].energy
    
                    sub34_chosen = true
    
                } 
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2=="RW") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub29_lw3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub28_lw2_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub34_chosen = true
    
                }
            }
            if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2=="RW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-2].surname != sub33_rw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-2].surname != sub32_rw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-2].surname != sub31_rw1_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub34_chosen = true
    
                }
            }
            if(Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1=="RW" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2=="RW" && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-3].surname != sub33_rw3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-3].surname != sub32_rw2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[awayTeamLen-3].surname != sub31_rw1_surname){
                if(sub32_chosen==false && sub33_chosen==false && sub34_chosen==false){
    
                    sub32_rw2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub32_rw2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub32_rw2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub32_rw2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub32_rw2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub32_rw2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub32_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==false && sub34_chosen==false){
    
                    sub33_rw3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub33_rw3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub33_rw3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub33_rw3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub33_rw3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub33_rw3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub33_chosen = true
    
                }else if(sub32_chosen==true && sub33_chosen==true && sub34_chosen==false){
    
                    sub34_rw4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub34_rw4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub34_rw4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub34_rw4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub34_rw4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub34_rw4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub34_chosen = true
    
                }
            }
        }
    }

    function GetEmptyPlayersSt(){

        let sub36_chosen = false;
        let sub37_chosen = false;
        let sub38_chosen = false;

        if(homeSideValue==true){
            //get st position in cm position
            if(sub17_cm1_1_position1=="ST" || sub17_cm1_1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[6].energy
    
                    sub36_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="ST" || sub18_cm1_2_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[7].energy
    
                    sub38_chosen = true

                }
            }
            if(sub19_cm1_3_position1=="ST" || sub19_cm1_3_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[17].energy
    
                    sub38_chosen = true

                }
            }
            if(sub20_cm1_4_position1=="ST" || sub20_cm1_4_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[18].energy
    
                    sub38_chosen = true

                }
            }
            if(sub21_cm1_5_position1=="ST" || sub21_cm1_5_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[19].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in lw position
            if(sub27_lw1_position1=="ST" || sub27_lw1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[8].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in rw position
            if(sub31_rw1_position1=="ST" || sub31_rw1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[9].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in players position
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1=="ST" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2=="ST") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub37_st3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub36_st2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-1].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1=="ST" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2=="ST") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub37_st3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub36_st2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-2].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1=="ST" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2=="ST") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub37_st3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub36_st2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-3].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position1=="ST" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position2=="ST") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname != sub37_st3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname != sub36_st2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-4].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position1=="ST" || Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position2=="ST") && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname != sub37_st3_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname != sub36_st2_surname && Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position1
                    sub36_st2_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position2
                    sub36_st2_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].name
                    sub36_st2_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname
                    sub36_st2_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].rating
                    sub36_st2_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position1
                    sub37_st3_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position2
                    sub37_st3_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].name
                    sub37_st3_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname
                    sub37_st3_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].rating
                    sub37_st3_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position1
                    sub38_st4_position2 = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].position2
                    sub38_st4_name = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].name
                    sub38_st4_surname = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].surname
                    sub38_st4_rating = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].rating
                    sub38_st4_energy = Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[homeTeamLen-5].energy
    
                    sub38_chosen = true

                }
            }

        }else if(awaySideValue==true){
            //get st position in cm position
            if(sub17_cm1_1_position1=="ST" || sub17_cm1_1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[6].energy
    
                    sub36_chosen = true

                }
            }
            if(sub18_cm1_2_position1=="ST" || sub18_cm1_2_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[7].energy
    
                    sub38_chosen = true

                }
            }
            if(sub19_cm1_3_position1=="ST" || sub19_cm1_3_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[17].energy
    
                    sub38_chosen = true

                }
            }
            if(sub20_cm1_4_position1=="ST" || sub20_cm1_4_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[18].energy
    
                    sub38_chosen = true

                }
            }
            if(sub21_cm1_5_position1=="ST" || sub21_cm1_5_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[19].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in lw position
            if(sub27_lw1_position1=="ST" || sub27_lw1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[8].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in rw position
            if(sub31_rw1_position1=="ST" || sub31_rw1_position2=="ST"){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[9].energy
    
                    sub38_chosen = true

                }
            }

            //get st position in players position
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1=="ST" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2=="ST") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub37_st3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub36_st2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-1].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1=="ST" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2=="ST") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub37_st3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub36_st2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-2].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1=="ST" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2=="ST") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub37_st3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub36_st2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-3].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position1=="ST" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position2=="ST") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname != sub37_st3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname != sub36_st2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-4].energy
    
                    sub38_chosen = true

                }
            }
            if((Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position1=="ST" || Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position2=="ST") && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname != sub37_st3_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname != sub36_st2_surname && Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname != sub35_st1_surname){
                if(sub36_chosen==false && sub37_chosen==false && sub38_chosen==false){

                    sub36_st2_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position1
                    sub36_st2_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position2
                    sub36_st2_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].name
                    sub36_st2_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname
                    sub36_st2_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].rating
                    sub36_st2_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].energy
    
                    sub36_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==false && sub38_chosen==false){

                    sub37_st3_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position1
                    sub37_st3_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position2
                    sub37_st3_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].name
                    sub37_st3_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname
                    sub37_st3_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].rating
                    sub37_st3_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].energy
    
                    sub37_chosen = true

                }else if(sub36_chosen==true && sub37_chosen==true && sub38_chosen==false){

                    sub38_st4_position1 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position1
                    sub38_st4_position2 = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].position2
                    sub38_st4_name = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].name
                    sub38_st4_surname = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].surname
                    sub38_st4_rating = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].rating
                    sub38_st4_energy = Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[awayTeamLen-5].energy
    
                    sub38_chosen = true

                }
            }
        }
    }




















    function ControlSubPlayersClick(){
        if(homeSideValue==true){
            if(homeTeamIndex_gk1==0){
                GetTeamSub1_click()
            }else if(homeTeamIndex_gk1==11){
                GetTeamSub2_click()
            }

            if(homeTeamIndex_lb1==1){
                GetTeamSub3_click()
            }else if(homeTeamIndex_lb1==12){
                GetTeamSub4_click()
            }

            if(homeTeamIndex_cb1==2){
                GetTeamSub5_click()
            }else if(homeTeamIndex_cb1==3){
                GetTeamSub6_click()
            }else if(homeTeamIndex_cb1==13){
                GetTeamSub7_click()
            }else if(homeTeamIndex_cb1==14){
                GetTeamSub8_click()
            }

            if(homeTeamIndex_cb2==3){
                GetTeamSub9_click()
            }else if(homeTeamIndex_cb2==2){
                GetTeamSub10_click()
            }else if(homeTeamIndex_cb2==13){
                GetTeamSub11_click()
            }else if(homeTeamIndex_cb2==14){
                GetTeamSub12_click()
            }

            if(homeTeamIndex_rb1==4){
                GetTeamSub13_click()
            }else if(homeTeamIndex_rb1==15){
                GetTeamSub14_click()
            }

            if(homeTeamIndex_dm1==5){
                GetTeamSub15_click()
            }else if(homeTeamIndex_dm1==16){
                GetTeamSub16_click()
            }

            if(homeTeamIndex_cm1==6){
                GetTeamSub17_click()
            }else if(homeTeamIndex_cm1==7){
                GetTeamSub18_click()
            }else if(homeTeamIndex_cm1==17){
                GetTeamSub19_click()
            }else if(homeTeamIndex_cm1==18){
                GetTeamSub20_click()
            }else if(homeTeamIndex_cm1==19){
                GetTeamSub21_click()
            }

            if(homeTeamIndex_cm2==7){
                GetTeamSub22_click()
            }else if(homeTeamIndex_cm2==6){
                GetTeamSub23_click()
            }else if(homeTeamIndex_cm2==17){
                GetTeamSub24_click()
            }else if(homeTeamIndex_cm2==18){
                GetTeamSub25_click()
            }else if(homeTeamIndex_cm2==19){
                GetTeamSub26_click()
            }

            if(homeTeamIndex_lw1==8){
                GetTeamSub27_click()
            }else if(homeTeamValue_lw2_click==true){
                GetTeamSub28_click()
            }else if(homeTeamValue_lw3_click==true){
                GetTeamSub29_click()
            }else if(homeTeamValue_lw4_click==true){
                GetTeamSub30_click()
            }

            if(homeTeamIndex_rw1==9){
                GetTeamSub31_click()
            }else if(homeTeamValue_rw2_click==true){
                GetTeamSub32_click()
            }else if(homeTeamValue_rw3_click==true){
                GetTeamSub33_click()
            }else if(homeTeamValue_rw4_click==true){
                GetTeamSub34_click()
            }

            if(homeTeamIndex_st1==10){
                GetTeamSub35_click()
            }else if(homeTeamValue_st2_click==true){
                GetTeamSub36_click()
            }else if(homeTeamValue_st3_click==true){
                GetTeamSub37_click()
            }else if(homeTeamValue_st4_click==true){
                GetTeamSub38_click()
            }


        }else if(awaySideValue==true){


            if(awayTeamIndex_gk2==0){
                GetTeamSub1_click()
            }else if(awayTeamIndex_gk2==11){
                GetTeamSub2_click()
            }

            if(awayTeamIndex_lb2==1){
                GetTeamSub3_click()
            }else if(awayTeamIndex_lb2==12){
                GetTeamSub4_click()
            }

            if(awayTeamIndex_cb4==2){
                GetTeamSub5_click()
            }else if(awayTeamIndex_cb4==3){
                GetTeamSub6_click()
            }else if(awayTeamIndex_cb4==13){
                GetTeamSub7_click()
            }else if(awayTeamIndex_cb4==14){
                GetTeamSub8_click()
            }

            if(awayTeamIndex_cb3==3){
                GetTeamSub9_click()
            }else if(awayTeamIndex_cb3==2){
                GetTeamSub10_click()
            }else if(awayTeamIndex_cb3==13){
                GetTeamSub11_click()
            }else if(awayTeamIndex_cb3==14){
                GetTeamSub12_click()
            }

            if(awayTeamIndex_rb2==4){
                GetTeamSub13_click()
            }else if(awayTeamIndex_rb2==15){
                GetTeamSub14_click()
            }

            if(awayTeamIndex_dm2==5){
                GetTeamSub15_click()
            }else if(awayTeamIndex_dm2==16){
                GetTeamSub16_click()
            }

            if(awayTeamIndex_cm4==6){
                GetTeamSub17_click()
            }else if(awayTeamIndex_cm4==7){
                GetTeamSub18_click()
            }else if(awayTeamIndex_cm4==17){
                GetTeamSub19_click()
            }else if(awayTeamIndex_cm4==18){
                GetTeamSub20_click()
            }else if(awayTeamIndex_cm4==19){
                GetTeamSub21_click()
            }

            if(awayTeamIndex_cm3==7){
                GetTeamSub22_click()
            }else if(awayTeamIndex_cm3==6){
                GetTeamSub23_click()
            }else if(awayTeamIndex_cm3==17){
                GetTeamSub24_click()
            }else if(awayTeamIndex_cm3==18){
                GetTeamSub25_click()
            }else if(awayTeamIndex_cm3==19){
                GetTeamSub26_click()
            }

            if(awayTeamIndex_lw2==8){
                GetTeamSub27_click()
            }else if(awayTeamValue_lw2_click==true){
                GetTeamSub28_click()
            }else if(awayTeamValue_lw3_click==true){
                GetTeamSub29_click()
            }else if(awayTeamValue_lw4_click==true){
                GetTeamSub30_click()
            }

            if(awayTeamIndex_rw2==9){
                GetTeamSub31_click()
            }else if(awayTeamValue_rw2_click==true){
                GetTeamSub32_click()
            }else if(awayTeamValue_rw3_click==true){
                GetTeamSub33_click()
            }else if(awayTeamValue_rw4_click==true){
                GetTeamSub34_click()
            }

            if(awayTeamIndex_st2==10){
                GetTeamSub35_click()
            }else if(awayTeamValue_st2_click==true){
                GetTeamSub36_click()
            }else if(awayTeamValue_st3_click==true){
                GetTeamSub37_click()
            }else if(awayTeamValue_st4_click==true){
                GetTeamSub38_click()
            }
        }
    }





    //players pos1 - pos2 - name - surname - rating - energy
    //players1

    function GetTeamSub1_click(){
        sub1_gk1_click = "✓";
        sub2_gk2_click = " ";
    }

    function GetTeamSub1_position1(){
        sub1_gk1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return sub1_gk1_position1
    }

    function GetTeamSub1_position2(){
        sub1_gk1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return sub1_gk1_position2
    }

    function GetTeamSub1_name(){
        return sub1_gk1_name
    }

    function GetTeamSub1_surname(){
        return sub1_gk1_surname
    }

    function GetTeamSub1_rating(){
        return sub1_gk1_rating
    }

    function GetTeamSub1_energy(){
        if(matchStartValueBool==false){
            return sub1_gk1_energy
        }else if(matchStartValueBool==true && sub1_gk1_click!="✓"){
            return sub1_gk1_energy
        }else if(matchStartValueBool==true && sub1_gk1_click=="✓"){
            if(homeSideValue==true){
                return t1_gk1_energy1
            }else if(awaySideValue==true){
                return t2_gk2_energy1
            }
        }
    }

    //players2

    function GetTeamSub2_click(){
        sub1_gk1_click = " ";
        sub2_gk2_click = "✓";
    }

    function GetTeamSub2_position1(){
        sub2_gk2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return sub2_gk2_position1
    }

    function GetTeamSub2_position2(){
        sub2_gk2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionGk
        return sub2_gk2_position2
    }

    function GetTeamSub2_name(){
        return sub2_gk2_name
    }

    function GetTeamSub2_surname(){
        return sub2_gk2_surname
    }

    function GetTeamSub2_rating(){
        return sub2_gk2_rating
    }

    function GetTeamSub2_energy(){
        if(matchStartValueBool==false){
            return sub2_gk2_energy
        }else if(matchStartValueBool==true && sub2_gk2_click!="✓"){
            return sub2_gk2_energy
        }else if(matchStartValueBool==true && sub2_gk2_click=="✓"){
            if(homeSideValue==true){
                return t1_gk1_energy1
            }else if(awaySideValue==true){
                return t2_gk2_energy1
            }
        }
    }

    //players3
    function GetTeamSub3_click(){
        sub3_lb1_click = "✓";
        sub4_lb2_click = " ";
    }

    function GetTeamSub3_position1(){
        sub3_lb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return sub3_lb1_position1
    }

    function GetTeamSub3_position2(){
        sub3_lb1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return sub3_lb1_position2
    }

    function GetTeamSub3_name(){
        return sub3_lb1_name
    }

    function GetTeamSub3_surname(){
        return sub3_lb1_surname
    }

    function GetTeamSub3_rating(){
        return sub3_lb1_rating
    }

    function GetTeamSub3_energy(){
        if(matchStartValueBool==false){
            return sub3_lb1_energy
        }else if(matchStartValueBool==true && sub3_lb1_click!="✓"){
            return sub3_lb1_energy
        }else if(matchStartValueBool==true && sub3_lb1_click=="✓"){
            if(homeSideValue==true){
                return t1_lb1_energy1
            }else if(awaySideValue==true){
                return t2_lb2_energy1
            }
        }
    }

    //players4
    function GetTeamSub4_click(){
        sub3_lb1_click = " ";
        sub4_lb2_click = "✓";
    }

    function GetTeamSub4_position1(){
        sub4_lb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return sub4_lb2_position1
    }

    function GetTeamSub4_position2(){
        sub4_lb2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLb
        return sub4_lb2_position2
    }

    function GetTeamSub4_name(){
        return sub4_lb2_name
    }

    function GetTeamSub4_surname(){
        return sub4_lb2_surname
    }

    function GetTeamSub4_rating(){
        return sub4_lb2_rating
    }

    function GetTeamSub4_energy(){
        if(matchStartValueBool==false){
            return sub4_lb2_energy
        }else if(matchStartValueBool==true && sub4_lb2_click!="✓"){
            return sub4_lb2_energy
        }else if(matchStartValueBool==true && sub4_lb2_click=="✓"){
            if(homeSideValue==true){
                return t1_lb1_energy1
            }else if(awaySideValue==true){
                return t2_lb2_energy1
            }
        }
    }

    //players5
    function GetTeamSub5_click(){
        sub5_cb1_1_click = "✓";
        sub6_cb1_2_click = " ";
        sub7_cb1_3_click = " ";
        sub8_cb1_4_click = " ";
    }

    function GetTeamSub5_position1(){
        sub5_cb1_1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub5_cb1_1_position1
    }

    function GetTeamSub5_position2(){
        sub5_cb1_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub5_cb1_1_position2
    }

    function GetTeamSub5_name(){
        return sub5_cb1_1_name
    }

    function GetTeamSub5_surname(){
        return sub5_cb1_1_surname
    }

    function GetTeamSub5_rating(){
        return sub5_cb1_1_rating
    }

    function GetTeamSub5_energy(){
        if(matchStartValueBool==false){
            return sub5_cb1_1_energy
        }else if(matchStartValueBool==true && sub5_cb1_1_click!="✓"){
            return sub5_cb1_1_energy
        }else if(matchStartValueBool==true && sub5_cb1_1_click=="✓"){
            if(homeSideValue==true){
                return t1_cb1_energy1
            }else if(awaySideValue==true){
                return t2_cb4_energy1
            }
        }
    }

    //players6
    function GetTeamSub6_click(){
        sub5_cb1_1_click = " ";
        sub6_cb1_2_click = "✓";
        sub7_cb1_3_click = " ";
        sub8_cb1_4_click = " ";
    }

    function GetTeamSub6_position1(){
        sub6_cb1_2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub6_cb1_2_position1
    }

    function GetTeamSub6_position2(){
        sub6_cb1_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub6_cb1_2_position2
    }

    function GetTeamSub6_name(){
        return sub6_cb1_2_name
    }

    function GetTeamSub6_surname(){
        return sub6_cb1_2_surname
    }

    function GetTeamSub6_rating(){
        return sub6_cb1_2_rating
    }

    function GetTeamSub6_energy(){
        if(matchStartValueBool==false){
            return sub6_cb1_2_energy
        }else if(matchStartValueBool==true && sub6_cb1_2_click!="✓"){
            return sub6_cb1_2_energy
        }else if(matchStartValueBool==true && sub6_cb1_2_click=="✓"){
            if(homeSideValue==true){
                return t1_cb1_energy1
            }else if(awaySideValue==true){
                return t2_cb4_energy1
            }
        }
    }

    //players7
    function GetTeamSub7_click(){
        sub5_cb1_1_click = " ";
        sub6_cb1_2_click = " ";
        sub7_cb1_3_click = "✓";
        sub8_cb1_4_click = " ";
    }

    function GetTeamSub7_position1(){
        sub7_cb1_3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub7_cb1_3_position1
    }

    function GetTeamSub7_position2(){
        sub7_cb1_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub7_cb1_3_position2
    }

    function GetTeamSub7_name(){
        return sub7_cb1_3_name
    }

    function GetTeamSub7_surname(){
        return sub7_cb1_3_surname
    }

    function GetTeamSub7_rating(){
        return sub7_cb1_3_rating
    }

    function GetTeamSub7_energy(){
        if(matchStartValueBool==false){
            return sub7_cb1_3_energy
        }else if(matchStartValueBool==true && sub7_cb1_3_click!="✓"){
            return sub7_cb1_3_energy
        }else if(matchStartValueBool==true && sub7_cb1_3_click=="✓"){
            if(homeSideValue==true){
                return t1_cb1_energy1
            }else if(awaySideValue==true){
                return t2_cb4_energy1
            }
        }
    }

    //players8
    function GetTeamSub8_click(){
        sub5_cb1_1_click = " ";
        sub6_cb1_2_click = " ";
        sub7_cb1_3_click = " ";
        sub8_cb1_4_click = "✓";
    }
    
    function GetTeamSub8_position1(){
        sub8_cb1_4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub8_cb1_4_position1
    }

    function GetTeamSub8_position2(){
        sub8_cb1_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub8_cb1_4_position2
    }

    function GetTeamSub8_name(){
        return sub8_cb1_4_name
    }

    function GetTeamSub8_surname(){
        return sub8_cb1_4_surname
    }

    function GetTeamSub8_rating(){
        return sub8_cb1_4_rating
    }

    function GetTeamSub8_energy(){
        if(matchStartValueBool==false){
            return sub8_cb1_4_energy
        }else if(matchStartValueBool==true && sub8_cb1_4_click!="✓"){
            return sub8_cb1_4_energy
        }else if(matchStartValueBool==true && sub8_cb1_4_click=="✓"){
            if(homeSideValue==true){
                return t1_cb1_energy1
            }else if(awaySideValue==true){
                return t2_cb4_energy1
            }
        }
    }

    //players9
    function GetTeamSub9_click(){
        sub9_cb2_1_click = "✓";
        sub10_cb2_2_click = " ";
        sub11_cb2_3_click = " ";
        sub12_cb2_4_click = " ";
    }

    function GetTeamSub9_position1(){
        sub9_cb2_1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub9_cb2_1_position1
    }

    function GetTeamSub9_position2(){
        sub9_cb2_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub9_cb2_1_position2
    }

    function GetTeamSub9_name(){
        return sub9_cb2_1_name
    }

    function GetTeamSub9_surname(){
        return sub9_cb2_1_surname
    }

    function GetTeamSub9_rating(){
        return sub9_cb2_1_rating
    }

    function GetTeamSub9_energy(){
        if(matchStartValueBool==false){
            return sub9_cb2_1_energy
        }else if(matchStartValueBool==true && sub9_cb2_1_click!="✓"){
            return sub9_cb2_1_energy
        }else if(matchStartValueBool==true && sub9_cb2_1_click=="✓"){
            if(homeSideValue==true){
                return t1_cb2_energy1
            }else if(awaySideValue==true){
                return t2_cb3_energy1
            }
        }
    }

    //players10
    function GetTeamSub10_click(){
        sub9_cb2_1_click = " ";
        sub10_cb2_2_click = "✓";
        sub11_cb2_3_click = " ";
        sub12_cb2_4_click = " ";
    }

    function GetTeamSub10_position1(){
        sub10_cb2_2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub10_cb2_2_position1
    }

    function GetTeamSub10_position2(){
        sub10_cb2_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub10_cb2_2_position2
    }

    function GetTeamSub10_name(){
        return sub10_cb2_2_name
    }

    function GetTeamSub10_surname(){
        return sub10_cb2_2_surname
    }

    function GetTeamSub10_rating(){
        return sub10_cb2_2_rating
    }

    function GetTeamSub10_energy(){
        if(matchStartValueBool==false){
            return sub10_cb2_2_energy
        }else if(matchStartValueBool==true && sub10_cb2_2_click!="✓"){
            return sub10_cb2_2_energy
        }else if(matchStartValueBool==true && sub10_cb2_2_click=="✓"){
            if(homeSideValue==true){
                return t1_cb2_energy1
            }else if(awaySideValue==true){
                return t2_cb3_energy1
            }
        }
    }

    //players11
    function GetTeamSub11_click(){
        sub9_cb2_1_click = " ";
        sub10_cb2_2_click = " ";
        sub11_cb2_3_click = "✓";
        sub12_cb2_4_click = " ";
    }

    function GetTeamSub11_position1(){
        sub11_cb2_3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub11_cb2_3_position1
    }

    function GetTeamSub11_position2(){
        sub11_cb2_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub11_cb2_3_position2
    }

    function GetTeamSub11_name(){
        return sub11_cb2_3_name
    }

    function GetTeamSub11_surname(){
        return sub11_cb2_3_surname
    }

    function GetTeamSub11_rating(){
        return sub11_cb2_3_rating
    }

    function GetTeamSub11_energy(){
        if(matchStartValueBool==false){
            return sub11_cb2_3_energy
        }else if(matchStartValueBool==true && sub11_cb2_3_click!="✓"){
            return sub11_cb2_3_energy
        }else if(matchStartValueBool==true && sub11_cb2_3_click=="✓"){
            if(homeSideValue==true){
                return t1_cb2_energy1
            }else if(awaySideValue==true){
                return t2_cb3_energy1
            }
        }
    }

    //players12
    function GetTeamSub12_click(){
        sub9_cb2_1_click = " ";
        sub10_cb2_2_click = " ";
        sub11_cb2_3_click = " ";
        sub12_cb2_4_click = "✓";
    }

    function GetTeamSub12_position1(){
        sub12_cb2_4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub12_cb2_4_position1
    }

    function GetTeamSub12_position2(){
        sub12_cb2_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCb
        return sub12_cb2_4_position2
    }

    function GetTeamSub12_name(){
        return sub12_cb2_4_name
    }

    function GetTeamSub12_surname(){
        return sub12_cb2_4_surname
    }

    function GetTeamSub12_rating(){
        return sub12_cb2_4_rating
    }

    function GetTeamSub12_energy(){
        if(matchStartValueBool==false){
            return sub12_cb2_4_energy
        }else if(matchStartValueBool==true && sub12_cb2_4_click!="✓"){
            return sub12_cb2_4_energy
        }else if(matchStartValueBool==true && sub12_cb2_4_click=="✓"){
            if(homeSideValue==true){
                return t1_cb2_energy1
            }else if(awaySideValue==true){
                return t2_cb3_energy1
            }
        }
    }

    //players13
    function GetTeamSub13_click(){
        sub13_rb1_click = "✓";
        sub14_rb2_click = " ";
    }

    function GetTeamSub13_position1(){
        sub13_rb1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return sub13_rb1_position1
    }

    function GetTeamSub13_position2(){
        sub13_rb1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return sub13_rb1_position2
    }

    function GetTeamSub13_name(){
        return sub13_rb1_name
    }

    function GetTeamSub13_surname(){
        return sub13_rb1_surname
    }

    function GetTeamSub13_rating(){
        return sub13_rb1_rating
    }

    function GetTeamSub13_energy(){
        if(matchStartValueBool==false){
            return sub13_rb1_energy
        }else if(matchStartValueBool==true && sub13_rb1_click!="✓"){
            return sub13_rb1_energy
        }else if(matchStartValueBool==true && sub13_rb1_click=="✓"){
            if(homeSideValue==true){
                return t1_rb1_energy1
            }else if(awaySideValue==true){
                return t2_rb2_energy1
            }
        }
    }

    //players14
    function GetTeamSub14_click(){
        sub13_rb1_click = " ";
        sub14_rb2_click = "✓";
    }

    function GetTeamSub14_position1(){
        sub14_rb2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return sub14_rb2_position1
    }

    function GetTeamSub14_position2(){
        sub14_rb2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRb
        return sub14_rb2_position2
    }

    function GetTeamSub14_name(){
        return sub14_rb2_name
    }

    function GetTeamSub14_surname(){
        return sub14_rb2_surname
    }

    function GetTeamSub14_rating(){
        return sub14_rb2_rating
    }

    function GetTeamSub14_energy(){
        if(matchStartValueBool==false){
            return sub14_rb2_energy
        }else if(matchStartValueBool==true && sub14_rb2_click!="✓"){
            return sub14_rb2_energy
        }else if(matchStartValueBool==true && sub14_rb2_click=="✓"){
            if(homeSideValue==true){
                return t1_rb1_energy1
            }else if(awaySideValue==true){
                return t2_rb2_energy1
            }
        }
    }

    //players15
    function GetTeamSub15_click(){
        sub15_dm1_click = "✓";
        sub16_dm2_click = " ";
    }

    function GetTeamSub15_position1(){
        sub15_dm1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return sub15_dm1_position1
    }

    function GetTeamSub15_position2(){
        sub15_dm1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return sub15_dm1_position2
    }

    function GetTeamSub15_name(){
        return sub15_dm1_name
    }

    function GetTeamSub15_surname(){
        return sub15_dm1_surname
    }

    function GetTeamSub15_rating(){
        return sub15_dm1_rating
    }

    function GetTeamSub15_energy(){
        if(matchStartValueBool==false){
            return sub15_dm1_energy
        }else if(matchStartValueBool==true && sub15_dm1_click!="✓"){
            return sub15_dm1_energy
        }else if(matchStartValueBool==true && sub15_dm1_click=="✓"){
            if(homeSideValue==true){
                return t1_dm1_energy1
            }else if(awaySideValue==true){
                return t2_dm2_energy1
            }
        }
    }

    //players16
    function GetTeamSub16_click(){
        sub15_dm1_click = " ";
        sub16_dm2_click = "✓";
    }

    function GetTeamSub16_position1(){
        sub16_dm2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return sub16_dm2_position1
    }

    function GetTeamSub16_position2(){
        sub16_dm2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionDm
        return sub16_dm2_position2
    }

    function GetTeamSub16_name(){
        return sub16_dm2_name
    }

    function GetTeamSub16_surname(){
        return sub16_dm2_surname
    }

    function GetTeamSub16_rating(){
        return sub16_dm2_rating
    }

    function GetTeamSub16_energy(){
        if(matchStartValueBool==false){
            return sub16_dm2_energy
        }else if(matchStartValueBool==true && sub16_dm2_click!="✓"){
            return sub16_dm2_energy
        }else if(matchStartValueBool==true && sub16_dm2_click=="✓"){
            if(homeSideValue==true){
                return t1_dm1_energy1
            }else if(awaySideValue==true){
                return t2_dm2_energy1
            }
        }
    }
    
    //players17
    function GetTeamSub17_click(){
        sub17_cm1_1_click = "✓";
        sub18_cm1_2_click = " ";
        sub19_cm1_3_click = " ";
        sub20_cm1_4_click = " ";
        sub21_cm1_5_click = " ";
    }
    
    function GetTeamSub17_position1(){
        sub17_cm1_1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub17_cm1_1_position1
    }
    
    function GetTeamSub17_position2(){
        if(sub17_cm1_1_position2=="LW"){
            sub17_cm1_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub17_cm1_1_position2=="RW"){
            sub17_cm1_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub17_cm1_1_position2=="ST"){
            sub17_cm1_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub17_cm1_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub17_cm1_1_position2
    }
    
    function GetTeamSub17_name(){
        return sub17_cm1_1_name
    }
    
    function GetTeamSub17_surname(){
        return sub17_cm1_1_surname
    }
    
    function GetTeamSub17_rating(){
        return sub17_cm1_1_rating
    }
    
    function GetTeamSub17_energy(){
        if(matchStartValueBool==false){
            return sub17_cm1_1_energy
        }else if(matchStartValueBool==true && sub17_cm1_1_click!="✓"){
            return sub17_cm1_1_energy
        }else if(matchStartValueBool==true && sub17_cm1_1_click=="✓"){
            if(homeSideValue==true){
                return t1_cm1_energy1
            }else if(awaySideValue==true){
                return t2_cm4_energy1
            }
        }
    }

    //players18
    function GetTeamSub18_click(){
        sub17_cm1_1_click = " ";
        sub18_cm1_2_click = "✓";
        sub19_cm1_3_click = " ";
        sub20_cm1_4_click = " ";
        sub21_cm1_5_click = " ";
    }
    
    function GetTeamSub18_position1(){
        sub18_cm1_2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub18_cm1_2_position1
    }
    
    function GetTeamSub18_position2(){
        if(sub18_cm1_2_position2=="LW"){
            sub18_cm1_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub18_cm1_2_position2=="RW"){
            sub18_cm1_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub18_cm1_2_position2=="ST"){
            sub18_cm1_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub18_cm1_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub18_cm1_2_position2
    }
    
    function GetTeamSub18_name(){
        return sub18_cm1_2_name
    }
    
    function GetTeamSub18_surname(){
        return sub18_cm1_2_surname
    }
    
    function GetTeamSub18_rating(){
        return sub18_cm1_2_rating
    }
    
    function GetTeamSub18_energy(){
        if(matchStartValueBool==false){
            return sub18_cm1_2_energy
        }else if(matchStartValueBool==true && sub18_cm1_2_click!="✓"){
            return sub18_cm1_2_energy
        }else if(matchStartValueBool==true && sub18_cm1_2_click=="✓"){
            if(homeSideValue==true){
                return t1_cm1_energy1
            }else if(awaySideValue==true){
                return t2_cm4_energy1
            }
        }
    }

    //players19
    function GetTeamSub19_click(){
        sub17_cm1_1_click = " ";
        sub18_cm1_2_click = " ";
        sub19_cm1_3_click = "✓";
        sub20_cm1_4_click = " ";
        sub21_cm1_5_click = " ";
    }
    
    function GetTeamSub19_position1(){
        sub19_cm1_3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub19_cm1_3_position1
    }
    
    function GetTeamSub19_position2(){
        if(sub19_cm1_3_position2=="LW"){
            sub19_cm1_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub19_cm1_3_position2=="RW"){
            sub19_cm1_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub19_cm1_3_position2=="ST"){
            sub19_cm1_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub19_cm1_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }
        
        return sub19_cm1_3_position2
    }
    
    function GetTeamSub19_name(){
        return sub19_cm1_3_name
    }
    
    function GetTeamSub19_surname(){
        return sub19_cm1_3_surname
    }
    
    function GetTeamSub19_rating(){
        return sub19_cm1_3_rating
    }
    
    function GetTeamSub19_energy(){
        if(matchStartValueBool==false){
            return sub19_cm1_3_energy
        }else if(matchStartValueBool==true && sub19_cm1_3_click!="✓"){
            return sub19_cm1_3_energy
        }else if(matchStartValueBool==true && sub19_cm1_3_click=="✓"){
            if(homeSideValue==true){
                return t1_cm1_energy1
            }else if(awaySideValue==true){
                return t2_cm4_energy1
            }
        }
    }

    //players20
    function GetTeamSub20_click(){
        sub17_cm1_1_click = " ";
        sub18_cm1_2_click = " ";
        sub19_cm1_3_click = " ";
        sub20_cm1_4_click = "✓";
        sub21_cm1_5_click = " ";
    }
    
    function GetTeamSub20_position1(){
        sub20_cm1_4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub20_cm1_4_position1
    }
    
    function GetTeamSub20_position2(){
        if(sub20_cm1_4_position2=="LW"){
            sub20_cm1_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub20_cm1_4_position2=="RW"){
            sub20_cm1_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub20_cm1_4_position2=="ST"){
            sub20_cm1_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub20_cm1_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }
        
        return sub20_cm1_4_position2
    }
    
    function GetTeamSub20_name(){
        return sub20_cm1_4_name
    }
    
    function GetTeamSub20_surname(){
        return sub20_cm1_4_surname
    }
    
    function GetTeamSub20_rating(){
        return sub20_cm1_4_rating
    }
    
    function GetTeamSub20_energy(){
        if(matchStartValueBool==false){
            return sub20_cm1_4_energy
        }else if(matchStartValueBool==true && sub20_cm1_4_click!="✓"){
            return sub20_cm1_4_energy
        }else if(matchStartValueBool==true && sub20_cm1_4_click=="✓"){
            if(homeSideValue==true){
                return t1_cm1_energy1
            }else if(awaySideValue==true){
                return t2_cm4_energy1
            }
        }
    }

    //players21
    function GetTeamSub21_click(){
        sub17_cm1_1_click = " ";
        sub18_cm1_2_click = " ";
        sub19_cm1_3_click = " ";
        sub20_cm1_4_click = " ";
        sub21_cm1_5_click = "✓";
    }
    
    function GetTeamSub21_position1(){
        sub21_cm1_5_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub21_cm1_5_position1
    }
    
    function GetTeamSub21_position2(){
        if(sub21_cm1_5_position2=="LW"){
            sub21_cm1_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub21_cm1_5_position2=="RW"){
            sub21_cm1_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub21_cm1_5_position2=="ST"){
            sub21_cm1_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub21_cm1_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }
        
        return sub21_cm1_5_position2
    }
    
    function GetTeamSub21_name(){
        return sub21_cm1_5_name
    }
    
    function GetTeamSub21_surname(){
        return sub21_cm1_5_surname
    }
    
    function GetTeamSub21_rating(){
        return sub21_cm1_5_rating
    }
    
    function GetTeamSub21_energy(){
        if(matchStartValueBool==false){
            return sub21_cm1_5_energy
        }else if(matchStartValueBool==true && sub21_cm1_5_click!="✓"){
            return sub21_cm1_5_energy
        }else if(matchStartValueBool==true && sub21_cm1_5_click=="✓"){
            if(homeSideValue==true){
                return t1_cm1_energy1
            }else if(awaySideValue==true){
                return t2_cm4_energy1
            }
        }
    }
    
    //players22
    function GetTeamSub22_click(){
        sub22_cm2_1_click = "✓";
        sub23_cm2_2_click = " ";
        sub24_cm2_3_click = " ";
        sub25_cm2_4_click = " ";
        sub26_cm2_5_click = " ";
    }
    
    function GetTeamSub22_position1(){
        sub22_cm2_1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub22_cm2_1_position1
    }
    
    function GetTeamSub22_position2(){
        if(sub22_cm2_1_position2=="LW"){
            sub22_cm2_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub22_cm2_1_position2=="RW"){
            sub22_cm2_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub22_cm2_1_position2=="ST"){
            sub22_cm2_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub22_cm2_1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub22_cm2_1_position2
    }
    
    function GetTeamSub22_name(){
        return sub22_cm2_1_name
    }
    
    function GetTeamSub22_surname(){
        return sub22_cm2_1_surname
    }
    
    function GetTeamSub22_rating(){
        return sub22_cm2_1_rating
    }
    
    function GetTeamSub22_energy(){
        if(matchStartValueBool==false){
            return sub22_cm2_1_energy
        }else if(matchStartValueBool==true && sub22_cm2_1_click!="✓"){
            return sub22_cm2_1_energy
        }else if(matchStartValueBool==true && sub22_cm2_1_click=="✓"){
            if(homeSideValue==true){
                return t1_cm2_energy1
            }else if(awaySideValue==true){
                return t2_cm3_energy1
            }
        }
    }

    //players23
    function GetTeamSub23_click(){
        sub22_cm2_1_click = " ";
        sub23_cm2_2_click = "✓";
        sub24_cm2_3_click = " ";
        sub25_cm2_4_click = " ";
        sub26_cm2_5_click = " ";
    }
    
    function GetTeamSub23_position1(){
        sub23_cm2_2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub23_cm2_2_position1
    }
    
    function GetTeamSub23_position2(){
        if(sub23_cm2_2_position2=="LW"){
            sub23_cm2_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub23_cm2_2_position2=="RW"){
            sub23_cm2_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub23_cm2_2_position2=="ST"){
            sub23_cm2_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub23_cm2_2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub23_cm2_2_position2
    }
    
    function GetTeamSub23_name(){
        return sub23_cm2_2_name
    }
    
    function GetTeamSub23_surname(){
        return sub23_cm2_2_surname
    }
    
    function GetTeamSub23_rating(){
        return sub23_cm2_2_rating
    }
    
    function GetTeamSub23_energy(){
        if(matchStartValueBool==false){
            return sub23_cm2_2_energy
        }else if(matchStartValueBool==true && sub23_cm2_2_click!="✓"){
            return sub23_cm2_2_energy
        }else if(matchStartValueBool==true && sub23_cm2_2_click=="✓"){
            if(homeSideValue==true){
                return t1_cm2_energy1
            }else if(awaySideValue==true){
                return t2_cm3_energy1
            }
        }
    }

    //players24
    function GetTeamSub24_click(){
        sub22_cm2_1_click = " ";
        sub23_cm2_2_click = " ";
        sub24_cm2_3_click = "✓";
        sub25_cm2_4_click = " ";
        sub26_cm2_5_click = " ";
    }
    
    function GetTeamSub24_position1(){
        sub24_cm2_3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub24_cm2_3_position1
    }
    
    function GetTeamSub24_position2(){
        if(sub24_cm2_3_position2=="LW"){
            sub24_cm2_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub24_cm2_3_position2=="RW"){
            sub24_cm2_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub24_cm2_3_position2=="ST"){
            sub24_cm2_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub24_cm2_3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub24_cm2_3_position2
    }
    
    function GetTeamSub24_name(){
        return sub24_cm2_3_name
    }
    
    function GetTeamSub24_surname(){
        return sub24_cm2_3_surname
    }
    
    function GetTeamSub24_rating(){
        return sub24_cm2_3_rating
    }
    
    function GetTeamSub24_energy(){
        if(matchStartValueBool==false){
            return sub24_cm2_3_energy
        }else if(matchStartValueBool==true && sub24_cm2_3_click!="✓"){
            return sub24_cm2_3_energy
        }else if(matchStartValueBool==true && sub24_cm2_3_click=="✓"){
            if(homeSideValue==true){
                return t1_cm2_energy1
            }else if(awaySideValue==true){
                return t2_cm3_energy1
            }
        }
    }

    //players25
    function GetTeamSub25_click(){
        sub22_cm2_1_click = " ";
        sub23_cm2_2_click = " ";
        sub24_cm2_3_click = " ";
        sub25_cm2_4_click = "✓";
        sub26_cm2_5_click = " ";
    }
    
    function GetTeamSub25_position1(){
        sub25_cm2_4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub25_cm2_4_position1
    }
    
    function GetTeamSub25_position2(){
        if(sub25_cm2_4_position2=="LW"){
            sub25_cm2_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub25_cm2_4_position2=="RW"){
            sub25_cm2_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub25_cm2_4_position2=="ST"){
            sub25_cm2_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub25_cm2_4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub25_cm2_4_position2
    }
    
    function GetTeamSub25_name(){
        return sub25_cm2_4_name
    }
    
    function GetTeamSub25_surname(){
        return sub25_cm2_4_surname
    }
    
    function GetTeamSub25_rating(){
        return sub25_cm2_4_rating
    }
    
    function GetTeamSub25_energy(){
        if(matchStartValueBool==false){
            return sub25_cm2_4_energy
        }else if(matchStartValueBool==true && sub25_cm2_4_click!="✓"){
            return sub25_cm2_4_energy
        }else if(matchStartValueBool==true && sub25_cm2_4_click=="✓"){
            if(homeSideValue==true){
                return t1_cm2_energy1
            }else if(awaySideValue==true){
                return t2_cm3_energy1
            }
        }
    }

    //players26
    function GetTeamSub26_click(){
        sub22_cm2_1_click = " ";
        sub23_cm2_2_click = " ";
        sub24_cm2_3_click = " ";
        sub25_cm2_4_click = " ";
        sub26_cm2_5_click = "✓";
    }
    
    function GetTeamSub26_position1(){
        sub26_cm2_5_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        return sub26_cm2_5_position1
    }
    
    function GetTeamSub26_position2(){
        if(sub26_cm2_5_position2=="LW"){
            sub26_cm2_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub26_cm2_5_position2=="RW"){
            sub26_cm2_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub26_cm2_5_position2=="ST"){
            sub26_cm2_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else {
            sub26_cm2_5_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub26_cm2_5_position2
    }
    
    function GetTeamSub26_name(){
        return sub26_cm2_5_name
    }
    
    function GetTeamSub26_surname(){
        return sub26_cm2_5_surname
    }
    
    function GetTeamSub26_rating(){
        return sub26_cm2_5_rating
    }
    
    function GetTeamSub26_energy(){
        if(matchStartValueBool==false){
            return sub26_cm2_5_energy
        }else if(matchStartValueBool==true && sub26_cm2_5_click!="✓"){
            return sub26_cm2_5_energy
        }else if(matchStartValueBool==true && sub26_cm2_5_click=="✓"){
            if(homeSideValue==true){
                return t1_cm2_energy1
            }else if(awaySideValue==true){
                return t2_cm3_energy1
            }
        }
    }

    //players27
    function GetTeamSub27_click(){
        sub27_lw1_click = "✓";
        sub28_lw2_click = " ";
        sub29_lw3_click = " ";
        sub30_lw4_click = " ";
    }
    
    function GetTeamSub27_position1(){
        if(sub27_lw1_position1=="LW"){
            sub27_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub27_lw1_position1=="RW"){
            sub27_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub27_lw1_position1=="ST"){
            sub27_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub27_lw1_position1=="CM"){
            sub27_lw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub27_lw1_position1
    }
    
    function GetTeamSub27_position2(){
        if(sub27_lw1_position2=="LW"){
            sub27_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub27_lw1_position2=="RW"){
            sub27_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub27_lw1_position2=="ST"){
            sub27_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub27_lw1_position2=="CM"){
            sub27_lw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub27_lw1_position2
    }
    
    function GetTeamSub27_name(){
        return sub27_lw1_name
    }
    
    function GetTeamSub27_surname(){
        return sub27_lw1_surname
    }
    
    function GetTeamSub27_rating(){
        return sub27_lw1_rating
    }
    
    function GetTeamSub27_energy(){
        if(matchStartValueBool==false){
            return sub27_lw1_energy
        }else if(matchStartValueBool==true && sub27_lw1_click!="✓"){
            return sub27_lw1_energy
        }else if(matchStartValueBool==true && sub27_lw1_click=="✓"){
            if(homeSideValue==true){
                return t1_lw1_energy1
            }else if(awaySideValue==true){
                return t2_lw2_energy1
            }
        }
    }

    //players28
    function GetTeamSub28_click(){
        sub27_lw1_click = " ";
        sub28_lw2_click = "✓";
        sub29_lw3_click = " ";
        sub30_lw4_click = " ";
    }
    
    function GetTeamSub28_position1(){
        if(sub28_lw2_position1=="LW"){
            sub28_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub28_lw2_position1=="RW"){
            sub28_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub28_lw2_position1=="ST"){
            sub28_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub28_lw2_position1=="CM"){
            sub28_lw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub28_lw2_position1
    }
    
    function GetTeamSub28_position2(){
        if(sub28_lw2_position2=="LW"){
            sub28_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub28_lw2_position2=="RW"){
            sub28_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub28_lw2_position2=="ST"){
            sub28_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub28_lw2_position2=="CM"){
            sub28_lw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub28_lw2_position2
    }
    
    function GetTeamSub28_name(){
        return sub28_lw2_name
    }
    
    function GetTeamSub28_surname(){
        return sub28_lw2_surname
    }
    
    function GetTeamSub28_rating(){
        return sub28_lw2_rating
    }
    
    function GetTeamSub28_energy(){
        if(matchStartValueBool==false){
            return sub28_lw2_energy
        }else if(matchStartValueBool==true && sub28_lw2_click!="✓"){
            return sub28_lw2_energy
        }else if(matchStartValueBool==true && sub28_lw2_click=="✓"){
            if(homeSideValue==true){
                return t1_lw1_energy1
            }else if(awaySideValue==true){
                return t2_lw2_energy1
            }
        }
    }

    //players29
    function GetTeamSub29_click(){
        sub27_lw1_click = " ";
        sub28_lw2_click = " ";
        sub29_lw3_click = "✓";
        sub30_lw4_click = " ";
    }
        
    function GetTeamSub29_position1(){
        if(sub29_lw3_position1=="LW"){
            sub29_lw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub29_lw3_position1=="RW"){
            sub29_lw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub29_lw3_position1=="ST"){
            sub29_lw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub29_lw3_position1=="CM"){
            sub29_lw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub29_lw3_position1
    }
        
    function GetTeamSub29_position2(){
        if(sub29_lw3_position2=="LW"){
            sub29_lw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub29_lw3_position2=="RW"){
            sub29_lw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub29_lw3_position2=="ST"){
            sub29_lw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub29_lw3_position2=="CM"){
            sub29_lw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub29_lw3_position2
    }
        
    function GetTeamSub29_name(){
        return sub29_lw3_name
    }
        
    function GetTeamSub29_surname(){
        return sub29_lw3_surname
    }
        
    function GetTeamSub29_rating(){
        return sub29_lw3_rating
    }
        
    function GetTeamSub29_energy(){
        if(matchStartValueBool==false){
            return sub29_lw3_energy
        }else if(matchStartValueBool==true && sub29_lw3_click!="✓"){
            return sub29_lw3_energy
        }else if(matchStartValueBool==true && sub29_lw3_click=="✓"){
            if(homeSideValue==true){
                return t1_lw1_energy1
            }else if(awaySideValue==true){
                return t2_lw2_energy1
            }
        }
    }

    //players30
    function GetTeamSub30_click(){
        sub27_lw1_click = " ";
        sub28_lw2_click = " ";
        sub29_lw3_click = " ";
        sub30_lw4_click = "✓";
    }
        
    function GetTeamSub30_position1(){
        if(sub30_lw4_position1=="LW"){
            sub30_lw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub30_lw4_position1=="RW"){
            sub30_lw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub30_lw4_position1=="ST"){
            sub30_lw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub30_lw4_position1=="CM"){
            sub30_lw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub30_lw4_position1
    }
        
    function GetTeamSub30_position2(){
        if(sub30_lw4_position2=="LW"){
            sub30_lw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub30_lw4_position2=="RW"){
            sub30_lw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub30_lw4_position2=="ST"){
            sub30_lw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub30_lw4_position2=="CM"){
            sub30_lw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub30_lw4_position2
    }
        
    function GetTeamSub30_name(){
        return sub30_lw4_name
    }
        
    function GetTeamSub30_surname(){
        return sub30_lw4_surname
    }
        
    function GetTeamSub30_rating(){
        return sub30_lw4_rating
    }
        
    function GetTeamSub30_energy(){
        if(matchStartValueBool==false){
            return sub30_lw4_energy
        }else if(matchStartValueBool==true && sub30_lw4_click!="✓"){
            return sub30_lw4_energy
        }else if(matchStartValueBool==true && sub30_lw4_click=="✓"){
            if(homeSideValue==true){
                return t1_lw1_energy1
            }else if(awaySideValue==true){
                return t2_lw2_energy1
            }
        }
    }

    //players31
    function GetTeamSub31_click(){
        sub31_rw1_click = "✓";
        sub32_rw2_click = " ";
        sub33_rw3_click = " ";
        sub34_rw4_click = " ";
    }
    
    function GetTeamSub31_position1(){
        if(sub31_rw1_position1=="LW"){
            sub31_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub31_rw1_position1=="RW"){
            sub31_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub31_rw1_position1=="ST"){
            sub31_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub31_rw1_position1=="CM"){
            sub31_rw1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub31_rw1_position1
    }
    
    function GetTeamSub31_position2(){
        if(sub31_rw1_position2=="LW"){
            sub31_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub31_rw1_position2=="RW"){
            sub31_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub31_rw1_position2=="ST"){
            sub31_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub31_rw1_position2=="CM"){
            sub31_rw1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub31_rw1_position2
    }
    
    function GetTeamSub31_name(){
        return sub31_rw1_name
    }
    
    function GetTeamSub31_surname(){
        return sub31_rw1_surname
    }
    
    function GetTeamSub31_rating(){
        return sub31_rw1_rating
    }
    
    function GetTeamSub31_energy(){
        if(matchStartValueBool==false){
            return sub31_rw1_energy
        }else if(matchStartValueBool==true && sub31_rw1_click!="✓"){
            return sub31_rw1_energy
        }else if(matchStartValueBool==true && sub31_rw1_click=="✓"){
            if(homeSideValue==true){
                return t1_rw1_energy1
            }else if(awaySideValue==true){
                return t2_rw2_energy1
            }
        }
    }

    //players32
    function GetTeamSub32_click(){
        sub31_rw1_click = " ";
        sub32_rw2_click = "✓";
        sub33_rw3_click = " ";
        sub34_rw4_click = " ";
    }
    
    function GetTeamSub32_position1(){
        if(sub32_rw2_position1=="LW"){
            sub32_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub32_rw2_position1=="RW"){
            sub32_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub32_rw2_position1=="ST"){
            sub32_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub32_rw2_position1=="CM"){
            sub32_rw2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub32_rw2_position1
    }
    
    function GetTeamSub32_position2(){
        if(sub32_rw2_position2=="LW"){
            sub32_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub32_rw2_position2=="RW"){
            sub32_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub32_rw2_position2=="ST"){
            sub32_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub32_rw2_position2=="CM"){
            sub32_rw2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub32_rw2_position2
    }
    
    function GetTeamSub32_name(){
        return sub32_rw2_name
    }
    
    function GetTeamSub32_surname(){
        return sub32_rw2_surname
    }
    
    function GetTeamSub32_rating(){
        return sub32_rw2_rating
    }
    
    function GetTeamSub32_energy(){
        if(matchStartValueBool==false){
            return sub32_rw2_energy
        }else if(matchStartValueBool==true && sub32_rw2_click!="✓"){
            return sub32_rw2_energy
        }else if(matchStartValueBool==true && sub32_rw2_click=="✓"){
            if(homeSideValue==true){
                return t1_rw1_energy1
            }else if(awaySideValue==true){
                return t2_rw2_energy1
            }
        }
    }

    //players33
    function GetTeamSub33_click(){
        sub31_rw1_click = " ";
        sub32_rw2_click = " ";
        sub33_rw3_click = "✓";
        sub34_rw4_click = " ";
    }
    
    function GetTeamSub33_position1(){
        if(sub33_rw3_position1=="LW"){
            sub33_rw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub33_rw3_position1=="RW"){
            sub33_rw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub33_rw3_position1=="ST"){
            sub33_rw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub33_rw3_position1=="CM"){
            sub33_rw3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub33_rw3_position1
    }
    
    function GetTeamSub33_position2(){
        if(sub33_rw3_position2=="LW"){
            sub33_rw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub33_rw3_position2=="RW"){
            sub33_rw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub33_rw3_position2=="ST"){
            sub33_rw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub33_rw3_position2=="CM"){
            sub33_rw3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub33_rw3_position2
    }
    
    function GetTeamSub33_name(){
        return sub33_rw3_name
    }
    
    function GetTeamSub33_surname(){
        return sub33_rw3_surname
    }
    
    function GetTeamSub33_rating(){
        return sub33_rw3_rating
    }
    
    function GetTeamSub33_energy(){
        if(matchStartValueBool==false){
            return sub33_rw3_energy
        }else if(matchStartValueBool==true && sub33_rw3_click!="✓"){
            return sub33_rw3_energy
        }else if(matchStartValueBool==true && sub33_rw3_click=="✓"){
            if(homeSideValue==true){
                return t1_rw1_energy1
            }else if(awaySideValue==true){
                return t2_rw2_energy1
            }
        }
    }

    //players34
    function GetTeamSub34_click(){
        sub31_rw1_click = " ";
        sub32_rw2_click = " ";
        sub33_rw3_click = " ";
        sub34_rw4_click = "✓";
    }
    
    function GetTeamSub34_position1(){
        if(sub34_rw4_position1=="LW"){
            sub34_rw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub34_rw4_position1=="RW"){
            sub34_rw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub34_rw4_position1=="ST"){
            sub34_rw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub34_rw4_position1=="CM"){
            sub34_rw4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub34_rw4_position1
    }
    
    function GetTeamSub34_position2(){
        if(sub34_rw4_position2=="LW"){
            sub34_rw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub34_rw4_position2=="RW"){
            sub34_rw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub34_rw4_position2=="ST"){
            sub34_rw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub34_rw4_position2=="CM"){
            sub34_rw4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub34_rw4_position2
    }
    
    function GetTeamSub34_name(){
        return sub34_rw4_name
    }
    
    function GetTeamSub34_surname(){
        return sub34_rw4_surname
    }
    
    function GetTeamSub34_rating(){
        return sub34_rw4_rating
    }
    
    function GetTeamSub34_energy(){
        if(matchStartValueBool==false){
            return sub34_rw4_energy
        }else if(matchStartValueBool==true && sub34_rw4_click!="✓"){
            return sub34_rw4_energy
        }else if(matchStartValueBool==true && sub34_rw4_click=="✓"){
            if(homeSideValue==true){
                return t1_rw1_energy1
            }else if(awaySideValue==true){
                return t2_rw2_energy1
            }
        }
    }

    //players35
    function GetTeamSub35_click(){
        sub35_st1_click = "✓";
        sub36_st2_click = " ";
        sub37_st3_click = " ";
        sub38_st4_click = " ";
    }
    
    function GetTeamSub35_position1(){
        if(sub35_st1_position1=="LW"){
            sub35_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub35_st1_position1=="RW"){
            sub35_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub35_st1_position1=="ST"){
            sub35_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub35_st1_position1=="CM"){
            sub35_st1_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub35_st1_position1
    }
    
    function GetTeamSub35_position2(){
        if(sub35_st1_position2=="LW"){
            sub35_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub35_st1_position2=="RW"){
            sub35_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub35_st1_position2=="ST"){
            sub35_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub35_st1_position2=="CM"){
            sub35_st1_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub35_st1_position2
    }
    
    function GetTeamSub35_name(){
        return sub35_st1_name
    }
    
    function GetTeamSub35_surname(){
        return sub35_st1_surname
    }
    
    function GetTeamSub35_rating(){
        return sub35_st1_rating
    }
    
    function GetTeamSub35_energy(){
        if(matchStartValueBool==false){
            return sub35_st1_energy
        }else if(matchStartValueBool==true && sub35_st1_click!="✓"){
            return sub35_st1_energy
        }else if(matchStartValueBool==true && sub35_st1_click=="✓"){
            if(homeSideValue==true){
                return t1_st1_energy1
            }else if(awaySideValue==true){
                return t2_st2_energy1
            }
        }
    }

    //players36
    function GetTeamSub36_click(){
        sub35_st1_click = " ";
        sub36_st2_click = "✓";
        sub37_st3_click = " ";
        sub38_st4_click = " ";
    }
    
    function GetTeamSub36_position1(){
        if(sub36_st2_position1=="LW"){
            sub36_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub36_st2_position1=="RW"){
            sub36_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub36_st2_position1=="ST"){
            sub36_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub36_st2_position1=="CM"){
            sub36_st2_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub36_st2_position1
    }
    
    function GetTeamSub36_position2(){
        if(sub36_st2_position2=="LW"){
            sub36_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub36_st2_position2=="RW"){
            sub36_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub36_st2_position2=="ST"){
            sub36_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub36_st2_position2=="CM"){
            sub36_st2_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub36_st2_position2
    }
    
    function GetTeamSub36_name(){
        return sub36_st2_name
    }
    
    function GetTeamSub36_surname(){
        return sub36_st2_surname
    }
    
    function GetTeamSub36_rating(){
        return sub36_st2_rating
    }
    
    function GetTeamSub36_energy(){
        if(matchStartValueBool==false){
            return sub36_st2_energy
        }else if(matchStartValueBool==true && sub36_st2_click!="✓"){
            return sub36_st2_energy
        }else if(matchStartValueBool==true && sub36_st2_click=="✓"){
            if(homeSideValue==true){
                return t1_st1_energy1
            }else if(awaySideValue==true){
                return t2_st2_energy1
            }
        }
    }

    //players37
    function GetTeamSub37_click(){
        sub35_st1_click = " ";
        sub36_st2_click = " ";
        sub37_st3_click = "✓";
        sub38_st4_click = " ";
    }
    
    function GetTeamSub37_position1(){
        if(sub37_st3_position1=="LW"){
            sub37_st3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub37_st3_position1=="RW"){
            sub37_st3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub37_st3_position1=="ST"){
            sub37_st3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub37_st3_position1=="CM"){
            sub37_st3_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub37_st3_position1
    }
    
    function GetTeamSub37_position2(){
        if(sub37_st3_position2=="LW"){
            sub37_st3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub37_st3_position2=="RW"){
            sub37_st3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub37_st3_position2=="ST"){
            sub37_st3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub37_st3_position2=="CM"){
            sub37_st3_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub37_st3_position2
    }
    
    function GetTeamSub37_name(){
        return sub37_st3_name
    }
    
    function GetTeamSub37_surname(){
        return sub37_st3_surname
    }
    
    function GetTeamSub37_rating(){
        return sub37_st3_rating
    }
    
    function GetTeamSub37_energy(){
        if(matchStartValueBool==false){
            return sub37_st3_energy
        }else if(matchStartValueBool==true && sub37_st3_click!="✓"){
            return sub37_st3_energy
        }else if(matchStartValueBool==true && sub37_st3_click=="✓"){
            if(homeSideValue==true){
                return t1_st1_energy1
            }else if(awaySideValue==true){
                return t2_st2_energy1
            }
        }
    }

    //players38
    function GetTeamSub38_click(){
        sub35_st1_click = " ";
        sub36_st2_click = " ";
        sub37_st3_click = " ";
        sub38_st4_click = "✓";
    }
    
    function GetTeamSub38_position1(){
        if(sub38_st4_position1=="LW"){
            sub38_st4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub38_st4_position1=="RW"){
            sub38_st4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub38_st4_position1=="ST"){
            sub38_st4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub38_st4_position1=="CM"){
            sub38_st4_position1 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub38_st4_position1
    }
    
    function GetTeamSub38_position2(){
        if(sub38_st4_position2=="LW"){
            sub38_st4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionLw
        }else if(sub38_st4_position2=="RW"){
            sub38_st4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionRw
        }else if(sub38_st4_position2=="ST"){
            sub38_st4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionSt
        }else if(sub38_st4_position2=="CM"){
            sub38_st4_position2 = Languages.languages[reduxLanguage].gameplanmenu.gameplanmenuPositionCm
        }

        return sub38_st4_position2
    }
    
    function GetTeamSub38_name(){
        return sub38_st4_name
    }
    
    function GetTeamSub38_surname(){
        return sub38_st4_surname
    }
    
    function GetTeamSub38_rating(){
        return sub38_st4_rating
    }
    
    function GetTeamSub38_energy(){
        if(matchStartValueBool==false){
            return sub38_st4_energy
        }else if(matchStartValueBool==true && sub38_st4_click!="✓"){
            return sub38_st4_energy
        }else if(matchStartValueBool==true && sub38_st4_click=="✓"){
            if(homeSideValue==true){
                return t1_st1_energy1
            }else if(awaySideValue==true){
                return t2_st2_energy1
            }
        }
    }












    function GetRenderSubPlayer1(){ 
        if(subPlayerVisible1Bool==false){
            return (
                <div id='subPlayer1' onClick={GetTacticsPlayerSub1} className='div-sub-player1'>
                    <div className='div-sub-player1-click'>
                        {sub1_gk1_click}
                    </div>
                    <div className='div-sub-player1-position'>
                        {GetTeamSub1_position1() +"-"+ GetTeamSub1_position2()} 
                    </div>
                    <div className='div-sub-player1-name'>
                        {GetTeamSub1_name()}
                    </div>
                    <div className='div-sub-player1-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player1-surname'>
                        {GetTeamSub1_surname()}
                    </div>
                    <div className='div-sub-player1-reyting'>
                        {GetTeamSub1_rating()}
                    </div>
                    <div className='div-sub-player1-energy'>
                        {"%"+GetTeamSub1_energy()}
                    </div>
                </div>
            )
        }else {
            return (
                <div id='subPlayer1' onClick={GetTacticsPlayerSub1} className='div-sub-player1-disabled'>
                    <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player1-click'>
                        {sub1_gk1_click}
                    </div>
                    <div className='div-sub-player1-position'>
                        {GetTeamSub1_position1() +"-"+ GetTeamSub1_position2()} 
                    </div>
                    <div className='div-sub-player1-name'>
                        {GetTeamSub1_name()}
                    </div>
                    <div className='div-sub-player1-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player1-surname'>
                        {GetTeamSub1_surname()}
                    </div>
                    <div className='div-sub-player1-reyting'>
                        {GetTeamSub1_rating()}
                    </div>
                    <div className='div-sub-player1-energy'>
                        {"%"+GetTeamSub1_energy()}
                    </div>
                </div>
                </div>
            ) 
        }
    }

    function GetRenderSubPlayer2(){
        if(subPlayerVisible2Bool==false){
            return (
                <div id='subPlayer2' onClick={GetTacticsPlayerSub2} className='div-sub-player2'>
                   <div className='div-sub-player2-click'>
                        {sub2_gk2_click}
                    </div>
                    <div className='div-sub-player2-position'>
                        {GetTeamSub2_position1() +"-"+ GetTeamSub2_position2()}
                    </div>
                    <div className='div-sub-player2-name'>
                        {GetTeamSub2_name()}
                    </div>
                    <div className='div-sub-player2-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player2-surname'>
                        {GetTeamSub2_surname()}
                    </div>
                    <div className='div-sub-player2-reyting'>
                        {GetTeamSub2_rating()}
                    </div>
                    <div className='div-sub-player2-energy'>
                        {"%"+GetTeamSub2_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer2' onClick={GetTacticsPlayerSub2} className='div-sub-player2-disabled'>
                <div className='div-gameplanmenu-disable'>
                   <div className='div-sub-player2-click'>
                        {sub2_gk2_click}
                    </div>
                    <div className='div-sub-player2-position'>
                        {GetTeamSub2_position1() +"-"+ GetTeamSub2_position2()}
                    </div>
                    <div className='div-sub-player2-name'>
                        {GetTeamSub2_name()}
                    </div>
                    <div className='div-sub-player2-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player2-surname'>
                        {GetTeamSub2_surname()}
                    </div>
                    <div className='div-sub-player2-reyting'>
                        {GetTeamSub2_rating()}
                    </div>
                    <div className='div-sub-player2-energy'>
                        {"%"+GetTeamSub2_energy()}
                    </div>
                </div>
                </div>   
            )
        }
    }

    function GetRenderSubPlayer3(){
        if(subPlayerVisible3Bool==false){
            return (
                <div id='subPlayer3' onClick={GetTacticsPlayerSub3} className='div-sub-player3'>
                   <div className='div-sub-player3-click'>
                        {sub3_lb1_click}
                    </div>
                    <div className='div-sub-player3-position'>
                        {GetTeamSub3_position1() +"-"+ GetTeamSub3_position2()}
                    </div>
                    <div className='div-sub-player3-name'>
                        {GetTeamSub3_name()}
                    </div>
                    <div className='div-sub-player3-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player3-surname'>
                        {GetTeamSub3_surname()}
                    </div>
                    <div className='div-sub-player3-reyting'>
                        {GetTeamSub3_rating()}
                    </div>
                    <div className='div-sub-player3-energy'>
                        {"%"+GetTeamSub3_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer3' onClick={GetTacticsPlayerSub3} className='div-sub-player3-disabled'>
                <div className='div-gameplanmenu-disable'>
                   <div className='div-sub-player3-click'>
                        {sub3_lb1_click}
                    </div>
                    <div className='div-sub-player3-position'>
                        {GetTeamSub3_position1() +"-"+ GetTeamSub3_position2()}
                    </div>
                    <div className='div-sub-player3-name'>
                        {GetTeamSub3_name()}
                    </div>
                    <div className='div-sub-player3-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player3-surname'>
                        {GetTeamSub3_surname()}
                    </div>
                    <div className='div-sub-player3-reyting'>
                        {GetTeamSub3_rating()}
                    </div>
                    <div className='div-sub-player3-energy'>
                        {"%"+GetTeamSub3_energy()}
                    </div>
                </div>
                </div>   
            )
        }
    }

    function GetRenderSubPlayer4(){
        if(subPlayerVisible4Bool==false){
            return (
                <div id='subPlayer4' onClick={GetTacticsPlayerSub4} className='div-sub-player4'>
                   <div className='div-sub-player4-click'>
                        {sub4_lb2_click}
                    </div>
                    <div className='div-sub-player4-position'>
                        {GetTeamSub4_position1() +"-"+ GetTeamSub4_position2()}
                    </div>
                    <div className='div-sub-player4-name'>
                        {GetTeamSub4_name()}
                    </div>
                    <div className='div-sub-player4-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player4-surname'>
                        {GetTeamSub4_surname()}
                    </div>
                    <div className='div-sub-player4-reyting'>
                        {GetTeamSub4_rating()}
                    </div>
                    <div className='div-sub-player4-energy'>
                        {"%"+GetTeamSub4_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer4' onClick={GetTacticsPlayerSub4} className='div-sub-player4-disabled'>
                <div className='div-gameplanmenu-disable'>
                   <div className='div-sub-player4-click'>
                        {sub4_lb2_click}
                    </div>
                    <div className='div-sub-player4-position'>
                        {GetTeamSub4_position1() +"-"+ GetTeamSub4_position2()}
                    </div>
                    <div className='div-sub-player4-name'>
                        {GetTeamSub4_name()}
                    </div>
                    <div className='div-sub-player4-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player4-surname'>
                        {GetTeamSub4_surname()}
                    </div>
                    <div className='div-sub-player4-reyting'>
                        {GetTeamSub4_rating()}
                    </div>
                    <div className='div-sub-player4-energy'>
                        {"%"+GetTeamSub4_energy()}
                    </div>
                </div>   
                </div>
            )
        }
    }

    function GetRenderSubPlayer5(){
        if(subPlayerVisible5Bool==false){
            return (
                <div id='subPlayer5' onClick={GetTacticsPlayerSub5} className='div-sub-player5'>
                   <div className='div-sub-player5-click'>
                        {sub5_cb1_1_click}
                    </div>
                    <div className='div-sub-player5-position'>
                        {GetTeamSub5_position1() +"-"+ GetTeamSub5_position2()}
                    </div>
                    <div className='div-sub-player5-name'>
                        {GetTeamSub5_name()}
                    </div>
                    <div className='div-sub-player5-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player5-surname'>
                        {GetTeamSub5_surname()}
                    </div>
                    <div className='div-sub-player5-reyting'>
                        {GetTeamSub5_rating()}
                    </div>
                    <div className='div-sub-player5-energy'>
                        {"%"+GetTeamSub5_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer5' onClick={GetTacticsPlayerSub5} className='div-sub-player5-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player5-click'>
                        {sub5_cb1_1_click}
                    </div>
                    <div className='div-sub-player5-position'>
                        {GetTeamSub5_position1() +"-"+ GetTeamSub5_position2()}
                    </div>
                    <div className='div-sub-player5-name'>
                        {GetTeamSub5_name()}
                    </div>
                    <div className='div-sub-player5-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player5-surname'>
                        {GetTeamSub5_surname()}
                    </div>
                    <div className='div-sub-player5-reyting'>
                        {GetTeamSub5_rating()}
                    </div>
                    <div className='div-sub-player5-energy'>
                        {"%"+GetTeamSub5_energy()}
                    </div>
                </div>
                </div>  
            )
        }
    }

    function GetRenderSubPlayer6(){
        if(subPlayerVisible6Bool==false){
            return (
                <div id='subPlayer6' onClick={GetTacticsPlayerSub6} className='div-sub-player6'>
                   <div className='div-sub-player6-click'>
                        {sub6_cb1_2_click}
                    </div>
                    <div className='div-sub-player6-position'>
                        {GetTeamSub6_position1() +"-"+ GetTeamSub6_position1()}
                    </div>
                    <div className='div-sub-player6-name'>
                        {GetTeamSub6_name()}
                    </div>
                    <div className='div-sub-player6-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player6-surname'>
                        {GetTeamSub6_surname()}
                    </div>
                    <div className='div-sub-player6-reyting'>
                        {GetTeamSub6_rating()}
                    </div>
                    <div className='div-sub-player6-energy'>
                        {"%"+GetTeamSub6_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer6' onClick={GetTacticsPlayerSub6} className='div-sub-player6-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player6-click'>
                        {sub6_cb1_2_click}
                    </div>
                    <div className='div-sub-player6-position'>
                        {GetTeamSub6_position1() +"-"+ GetTeamSub6_position1()}
                    </div>
                    <div className='div-sub-player6-name'>
                        {GetTeamSub6_name()}
                    </div>
                    <div className='div-sub-player6-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player6-surname'>
                        {GetTeamSub6_surname()}
                    </div>
                    <div className='div-sub-player6-reyting'>
                        {GetTeamSub6_rating()}
                    </div>
                    <div className='div-sub-player6-energy'>
                        {"%"+GetTeamSub6_energy()}
                    </div>
                </div>
                </div>  
            )
        }
    }

    function GetRenderSubPlayer7(){
        if(subPlayerVisible7Bool==false){
            return (
                <div id='subPlayer7' onClick={GetTacticsPlayerSub7} className='div-sub-player7'>
                   <div className='div-sub-player7-click'>
                        {sub7_cb1_3_click}
                    </div>
                    <div className='div-sub-player7-position'>
                        {GetTeamSub7_position1() +"-"+ GetTeamSub7_position2()}
                    </div>
                    <div className='div-sub-player7-name'>
                        {GetTeamSub7_name()}
                    </div>
                    <div className='div-sub-player7-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player7-surname'>
                        {GetTeamSub7_surname()}
                    </div>
                    <div className='div-sub-player7-reyting'>
                        {GetTeamSub7_rating()}
                    </div>
                    <div className='div-sub-player7-energy'>
                        {"%"+GetTeamSub7_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer7' onClick={GetTacticsPlayerSub7} className='div-sub-player7-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player7-click'>
                        {sub7_cb1_3_click}
                    </div>
                    <div className='div-sub-player7-position'>
                        {GetTeamSub7_position1() +"-"+ GetTeamSub7_position2()}
                    </div>
                    <div className='div-sub-player7-name'>
                        {GetTeamSub7_name()}
                    </div>
                    <div className='div-sub-player7-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player7-surname'>
                        {GetTeamSub7_surname()}
                    </div>
                    <div className='div-sub-player7-reyting'>
                        {GetTeamSub7_rating()}
                    </div>
                    <div className='div-sub-player7-energy'>
                        {"%"+GetTeamSub7_energy()}
                    </div>
                </div>  
                </div>  
            )
        }
    }

    function GetRenderSubPlayer8(){
        if(subPlayerVisible8Bool==false){
            return (
                <div id='subPlayer8' onClick={GetTacticsPlayerSub8} className='div-sub-player8'>
                   <div className='div-sub-player8-click'>
                        {sub8_cb1_4_click}
                    </div>
                    <div className='div-sub-player8-position'>
                        {GetTeamSub8_position1() +"-"+ GetTeamSub8_position2()}
                    </div>
                    <div className='div-sub-player8-name'>
                        {GetTeamSub8_name()}
                    </div>
                    <div className='div-sub-player8-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player8-surname'>
                        {GetTeamSub8_surname()}
                    </div>
                    <div className='div-sub-player8-reyting'>
                        {GetTeamSub8_rating()}
                    </div>
                    <div className='div-sub-player8-energy'>
                        {"%"+GetTeamSub8_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer8' onClick={GetTacticsPlayerSub8} className='div-sub-player8-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player8-click'>
                        {sub8_cb1_4_click}
                    </div>
                    <div className='div-sub-player8-position'>
                        {GetTeamSub8_position1() +"-"+ GetTeamSub8_position2()}
                    </div>
                    <div className='div-sub-player8-name'>
                        {GetTeamSub8_name()}
                    </div>
                    <div className='div-sub-player8-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player8-surname'>
                        {GetTeamSub8_surname()}
                    </div>
                    <div className='div-sub-player8-reyting'>
                        {GetTeamSub8_rating()}
                    </div>
                    <div className='div-sub-player8-energy'>
                        {"%"+GetTeamSub8_energy()}
                    </div>
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer9(){
        if(subPlayerVisible9Bool==false){
            return (
                <div id='subPlayer9' onClick={GetTacticsPlayerSub9} className='div-sub-player9'>
                   <div className='div-sub-player9-click'>
                        {sub9_cb2_1_click}
                    </div>
                    <div className='div-sub-player9-position'>
                        {GetTeamSub9_position1() +"-"+ GetTeamSub9_position1()}
                    </div>
                    <div className='div-sub-player9-name'>
                        {GetTeamSub9_name()}
                    </div>
                    <div className='div-sub-player9-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player9-surname'>
                        {GetTeamSub9_surname()}
                    </div>
                    <div className='div-sub-player9-reyting'>
                        {GetTeamSub9_rating()}
                    </div>
                    <div className='div-sub-player9-energy'>
                        {"%"+GetTeamSub9_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer9' onClick={GetTacticsPlayerSub9} className='div-sub-player9-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player9-click'>
                        {sub9_cb2_1_click}
                    </div>
                    <div className='div-sub-player9-position'>
                        {GetTeamSub9_position1() +"-"+ GetTeamSub9_position1()}
                    </div>
                    <div className='div-sub-player9-name'>
                        {GetTeamSub9_name()}
                    </div>
                    <div className='div-sub-player9-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player9-surname'>
                        {GetTeamSub9_surname()}
                    </div>
                    <div className='div-sub-player9-reyting'>
                        {GetTeamSub9_rating()}
                    </div>
                    <div className='div-sub-player9-energy'>
                        {"%"+GetTeamSub9_energy()}
                    </div>
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer10(){
        if(subPlayerVisible10Bool==false){
            return (
                <div id='subPlayer10' onClick={GetTacticsPlayerSub10} className='div-sub-player10'>
                  <div className='div-sub-player10-click'>
                        {sub10_cb2_2_click}
                    </div>
                    <div className='div-sub-player10-position'>
                        {GetTeamSub10_position1() +"-"+ GetTeamSub10_position1()}
                    </div>
                    <div className='div-sub-player10-name'>
                        {GetTeamSub10_name()}
                    </div>
                    <div className='div-sub-player10-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player10-surname'>
                        {GetTeamSub10_surname()}
                    </div>
                    <div className='div-sub-player10-reyting'>
                        {GetTeamSub10_rating()}
                    </div>
                    <div className='div-sub-player10-energy'>
                        {"%"+GetTeamSub10_energy()}
                    </div> 
                </div>   
            )
        }else {
            return (
                <div id='subPlayer10' onClick={GetTacticsPlayerSub10} className='div-sub-player10-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player10-click'>
                        {sub10_cb2_2_click}
                    </div>
                    <div className='div-sub-player10-position'>
                        {GetTeamSub10_position1() +"-"+ GetTeamSub10_position1()}
                    </div>
                    <div className='div-sub-player10-name'>
                        {GetTeamSub10_name()}
                    </div>
                    <div className='div-sub-player10-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player10-surname'>
                        {GetTeamSub10_surname()}
                    </div>
                    <div className='div-sub-player10-reyting'>
                        {GetTeamSub10_rating()}
                    </div>
                    <div className='div-sub-player10-energy'>
                        {"%"+GetTeamSub10_energy()}
                    </div> 
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer11(){
        if(subPlayerVisible11Bool==false){
            return (
                <div id='subPlayer11' onClick={GetTacticsPlayerSub11} className='div-sub-player11'>
                   <div className='div-sub-player11-click'>
                        {sub11_cb2_3_click}
                    </div>
                    <div className='div-sub-player11-position'>
                        {GetTeamSub11_position1() +"-"+ GetTeamSub11_position2()}
                    </div>
                    <div className='div-sub-player11-name'>
                        {GetTeamSub11_name()}
                    </div>
                    <div className='div-sub-player11-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player11-surname'>
                        {GetTeamSub11_surname()}
                    </div>
                    <div className='div-sub-player11-reyting'>
                        {GetTeamSub11_rating()}
                    </div>
                    <div className='div-sub-player11-energy'>
                        {"%"+GetTeamSub11_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer11' onClick={GetTacticsPlayerSub11} className='div-sub-player11-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player11-click'>
                        {sub11_cb2_3_click}
                    </div>
                    <div className='div-sub-player11-position'>
                        {GetTeamSub11_position1() +"-"+ GetTeamSub11_position2()}
                    </div>
                    <div className='div-sub-player11-name'>
                        {GetTeamSub11_name()}
                    </div>
                    <div className='div-sub-player11-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player11-surname'>
                        {GetTeamSub11_surname()}
                    </div>
                    <div className='div-sub-player11-reyting'>
                        {GetTeamSub11_rating()}
                    </div>
                    <div className='div-sub-player11-energy'>
                        {"%"+GetTeamSub11_energy()}
                    </div>
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer12(){
        if(subPlayerVisible12Bool==false){
            return (
                <div id='subPlayer12' onClick={GetTacticsPlayerSub12} className='div-sub-player12'>
                   <div className='div-sub-player12-click'>
                        {sub12_cb2_4_click}
                    </div>
                    <div className='div-sub-player12-position'>
                        {GetTeamSub12_position1() +"-"+ GetTeamSub12_position2()}
                    </div>
                    <div className='div-sub-player12-name'>
                        {GetTeamSub12_name()}
                    </div>
                    <div className='div-sub-player12-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player12-surname'>
                        {GetTeamSub12_surname()}
                    </div>
                    <div className='div-sub-player12-reyting'>
                        {GetTeamSub12_rating()}
                    </div>
                    <div className='div-sub-player12-energy'>
                        {"%"+GetTeamSub12_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer12' onClick={GetTacticsPlayerSub12} className='div-sub-player12-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player12-click'>
                        {sub12_cb2_4_click}
                    </div>
                    <div className='div-sub-player12-position'>
                        {GetTeamSub12_position1() +"-"+ GetTeamSub12_position2()}
                    </div>
                    <div className='div-sub-player12-name'>
                        {GetTeamSub12_name()}
                    </div>
                    <div className='div-sub-player12-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player12-surname'>
                        {GetTeamSub12_surname()}
                    </div>
                    <div className='div-sub-player12-reyting'>
                        {GetTeamSub12_rating()}
                    </div>
                    <div className='div-sub-player12-energy'>
                        {"%"+GetTeamSub12_energy()}
                    </div>
                </div> 
                </div> 
            )
        }
    }

    function GetRenderSubPlayer13(){
        if(subPlayerVisible13Bool==false){
            return (
                <div id='subPlayer13' onClick={GetTacticsPlayerSub13} className='div-sub-player13'>
                   <div className='div-sub-player13-click'>
                        {sub13_rb1_click}
                    </div>
                    <div className='div-sub-player13-position'>
                        {GetTeamSub13_position1() +"-"+ GetTeamSub13_position2()}
                    </div>
                    <div className='div-sub-player13-name'>
                        {GetTeamSub13_name()}
                    </div>
                    <div className='div-sub-player13-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player13-surname'>
                        {GetTeamSub13_surname()}
                    </div>
                    <div className='div-sub-player13-reyting'>
                        {GetTeamSub13_rating()}
                    </div>
                    <div className='div-sub-player13-energy'>
                        {"%"+GetTeamSub13_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer13' onClick={GetTacticsPlayerSub13} className='div-sub-player13-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player13-click'>
                        {sub13_rb1_click}
                    </div>
                    <div className='div-sub-player13-position'>
                        {GetTeamSub13_position1() +"-"+ GetTeamSub13_position2()}
                    </div>
                    <div className='div-sub-player13-name'>
                        {GetTeamSub13_name()}
                    </div>
                    <div className='div-sub-player13-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player13-surname'>
                        {GetTeamSub13_surname()}
                    </div>
                    <div className='div-sub-player13-reyting'>
                        {GetTeamSub13_rating()}
                    </div>
                    <div className='div-sub-player13-energy'>
                        {"%"+GetTeamSub13_energy()}
                    </div>
                </div> 
                </div>   
            )
        }
    }

    function GetRenderSubPlayer14(){
        if(subPlayerVisible14Bool==false){
            return (
                <div id='subPlayer14' onClick={GetTacticsPlayerSub14} className='div-sub-player14'>
                   <div className='div-sub-player14-click'>
                        {sub14_rb2_click}
                    </div>
                    <div className='div-sub-player14-position'>
                        {GetTeamSub14_position1() +"-"+ GetTeamSub14_position2()}
                    </div>
                    <div className='div-sub-player14-name'>
                        {GetTeamSub14_name()}
                    </div>
                    <div className='div-sub-player14-empty-namesurname'>
                        
                    </div>
                    <div className='div-sub-player14-surname'>
                        {GetTeamSub14_surname()}
                    </div>
                    <div className='div-sub-player14-reyting'>
                        {GetTeamSub14_rating()}
                    </div>
                    <div className='div-sub-player14-energy'>
                        {"%"+GetTeamSub14_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer14' onClick={GetTacticsPlayerSub14} className='div-sub-player14-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player14-click'>
                        {sub14_rb2_click}
                    </div>
                    <div className='div-sub-player14-position'>
                        {GetTeamSub14_position1() +"-"+ GetTeamSub14_position2()}
                    </div>
                    <div className='div-sub-player14-name'>
                        {GetTeamSub14_name()}
                    </div>
                    <div className='div-sub-player14-empty-namesurname'>
                        
                    </div>
                    <div className='div-sub-player14-surname'>
                        {GetTeamSub14_surname()}
                    </div>
                    <div className='div-sub-player14-reyting'>
                        {GetTeamSub14_rating()}
                    </div>
                    <div className='div-sub-player14-energy'>
                        {"%"+GetTeamSub14_energy()}
                    </div>
                </div> 
                </div>   
            )
        }
    }

    function GetRenderSubPlayer15(){
        if(subPlayerVisible15Bool==false){
            return (
                <div id='subPlayer15' onClick={GetTacticsPlayerSub15} className='div-sub-player15'>
                   <div className='div-sub-player15-click'>
                        {sub15_dm1_click}
                    </div>
                    <div className='div-sub-player15-position'>
                        {GetTeamSub15_position1() +"-"+ GetTeamSub15_position2()}
                    </div>
                    <div className='div-sub-player15-name'>
                        {GetTeamSub15_name()}
                    </div>
                    <div className='div-sub-player15-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player15-surname'>
                        {GetTeamSub15_surname()}
                    </div>
                    <div className='div-sub-player15-reyting'>
                        {GetTeamSub15_rating()}
                    </div>
                    <div className='div-sub-player15-energy'>
                        {"%"+GetTeamSub15_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer15' onClick={GetTacticsPlayerSub15} className='div-sub-player15-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player15-click'>
                        {sub15_dm1_click}
                    </div>
                    <div className='div-sub-player15-position'>
                        {GetTeamSub15_position1() +"-"+ GetTeamSub15_position2()}
                    </div>
                    <div className='div-sub-player15-name'>
                        {GetTeamSub15_name()}
                    </div>
                    <div className='div-sub-player15-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player15-surname'>
                        {GetTeamSub15_surname()}
                    </div>
                    <div className='div-sub-player15-reyting'>
                        {GetTeamSub15_rating()}
                    </div>
                    <div className='div-sub-player15-energy'>
                        {"%"+GetTeamSub15_energy()}
                    </div>
                </div>
                </div>   
            )
        }
    }

    function GetRenderSubPlayer16(){
        if(subPlayerVisible16Bool==false){
            return (
                <div id='subPlayer16' onClick={GetTacticsPlayerSub16} className='div-sub-player16'>
                   <div className='div-sub-player16-click'>
                        {sub16_dm2_click}
                    </div>
                    <div className='div-sub-player16-position'>
                        {GetTeamSub16_position1() +"-"+ GetTeamSub16_position2()}
                    </div>
                    <div className='div-sub-player16-name'>
                        {GetTeamSub16_name()}
                    </div>
                    <div className='div-sub-player16-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player16-surname'>
                        {GetTeamSub16_surname()}
                    </div>
                    <div className='div-sub-player16-reyting'>
                        {GetTeamSub16_rating()}
                    </div>
                    <div className='div-sub-player16-energy'>
                        {"%"+GetTeamSub16_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer16' onClick={GetTacticsPlayerSub16} className='div-sub-player16-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player16-click'>
                        {sub16_dm2_click}
                    </div>
                    <div className='div-sub-player16-position'>
                        {GetTeamSub16_position1() +"-"+ GetTeamSub16_position2()}
                    </div>
                    <div className='div-sub-player16-name'>
                        {GetTeamSub16_name()}
                    </div>
                    <div className='div-sub-player16-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player16-surname'>
                        {GetTeamSub16_surname()}
                    </div>
                    <div className='div-sub-player16-reyting'>
                        {GetTeamSub16_rating()}
                    </div>
                    <div className='div-sub-player16-energy'>
                        {"%"+GetTeamSub16_energy()}
                    </div>
                </div>  
                </div>   
            )
        }
    }

    function GetRenderSubPlayer17(){
        if(subPlayerVisible17Bool==false){
            return (
                <div id='subPlayer17' onClick={GetTacticsPlayerSub17} className='div-sub-player17'>
                   <div className='div-sub-player17-click'>
                        {sub17_cm1_1_click}
                    </div>
                    <div className='div-sub-player17-position'>
                        {GetTeamSub17_position1() +"-"+ GetTeamSub17_position2()}
                    </div>
                    <div className='div-sub-player17-name'>
                        {GetTeamSub17_name()}
                    </div>
                    <div className='div-sub-player17-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player17-surname'>
                        {GetTeamSub17_surname()}
                    </div>
                    <div className='div-sub-player17-reyting'>
                        {GetTeamSub17_rating()}
                    </div>
                    <div className='div-sub-player17-energy'>
                        {"%"+GetTeamSub17_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer17' onClick={GetTacticsPlayerSub17} className='div-sub-player17-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player17-click'>
                        {sub17_cm1_1_click}
                    </div>
                    <div className='div-sub-player17-position'>
                        {GetTeamSub17_position1() +"-"+ GetTeamSub17_position2()}
                    </div>
                    <div className='div-sub-player17-name'>
                        {GetTeamSub17_name()}
                    </div>
                    <div className='div-sub-player17-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player17-surname'>
                        {GetTeamSub17_surname()}
                    </div>
                    <div className='div-sub-player17-reyting'>
                        {GetTeamSub17_rating()}
                    </div>
                    <div className='div-sub-player17-energy'>
                        {"%"+GetTeamSub17_energy()}
                    </div>
                </div> 
                </div>   
            )
        }
    }

    function GetRenderSubPlayer18(){
        if(subPlayerVisible18Bool==false){
            return (
                <div id='subPlayer18' onClick={GetTacticsPlayerSub18} className='div-sub-player18'>
                   <div className='div-sub-player18-click'>
                        {sub18_cm1_2_click}
                    </div>
                    <div className='div-sub-player18-position'>
                        {GetTeamSub18_position1() +"-"+ GetTeamSub18_position2()}
                    </div>
                    <div className='div-sub-player18-name'>
                        {GetTeamSub18_name()}
                    </div>
                    <div className='div-sub-player18-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player18-surname'>
                        {GetTeamSub18_surname()}
                    </div>
                    <div className='div-sub-player18-reyting'>
                        {GetTeamSub18_rating()}
                    </div>
                    <div className='div-sub-player18-energy'>
                        {"%"+GetTeamSub18_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer18' onClick={GetTacticsPlayerSub18} className='div-sub-player18-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player18-click'>
                        {sub18_cm1_2_click}
                    </div>
                    <div className='div-sub-player18-position'>
                        {GetTeamSub18_position1() +"-"+ GetTeamSub18_position2()}
                    </div>
                    <div className='div-sub-player18-name'>
                        {GetTeamSub18_name()}
                    </div>
                    <div className='div-sub-player18-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player18-surname'>
                        {GetTeamSub18_surname()}
                    </div>
                    <div className='div-sub-player18-reyting'>
                        {GetTeamSub18_rating()}
                    </div>
                    <div className='div-sub-player18-energy'>
                        {"%"+GetTeamSub18_energy()}
                    </div>
                </div>  
                </div>   
            )
        }
    }

    function GetRenderSubPlayer19(){
        if(subPlayerVisible19Bool==false){
            return (
                <div id='subPlayer19' onClick={GetTacticsPlayerSub19} className='div-sub-player19'>
                  <div className='div-sub-player19-click'>
                        {sub19_cm1_3_click}
                    </div>
                    <div className='div-sub-player19-position'>
                        {GetTeamSub19_position1() +"-"+ GetTeamSub19_position2()}
                    </div>
                    <div className='div-sub-player19-name'>
                        {GetTeamSub19_name()}
                    </div>
                    <div className='div-sub-player19-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player19-surname'>
                        {GetTeamSub19_surname()}
                    </div>
                    <div className='div-sub-player19-reyting'>
                        {GetTeamSub19_rating()}
                    </div>
                    <div className='div-sub-player19-energy'>
                        {"%"+GetTeamSub19_energy()}
                    </div> 
                </div>   
            )
        }else {
            return (
                <div id='subPlayer19' onClick={GetTacticsPlayerSub19} className='div-sub-player19-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player19-click'>
                        {sub19_cm1_3_click}
                    </div>
                    <div className='div-sub-player19-position'>
                        {GetTeamSub19_position1() +"-"+ GetTeamSub19_position2()}
                    </div>
                    <div className='div-sub-player19-name'>
                        {GetTeamSub19_name()}
                    </div>
                    <div className='div-sub-player19-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player19-surname'>
                        {GetTeamSub19_surname()}
                    </div>
                    <div className='div-sub-player19-reyting'>
                        {GetTeamSub19_rating()}
                    </div>
                    <div className='div-sub-player19-energy'>
                        {"%"+GetTeamSub19_energy()}
                    </div> 
                </div>   
                </div>
            )
        }
    }

    function GetRenderSubPlayer20(){
        if(subPlayerVisible20Bool==false){
            return (
                <div id='subPlayer20' onClick={GetTacticsPlayerSub20} className='div-sub-player20'>
                   <div className='div-sub-player20-click'>
                        {sub20_cm1_4_click}
                    </div>
                    <div className='div-sub-player20-position'>
                        {GetTeamSub20_position1() +"-"+ GetTeamSub20_position2()}
                    </div>
                    <div className='div-sub-player20-name'>
                        {GetTeamSub20_name()}
                    </div>
                    <div className='div-sub-player20-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player20-surname'>
                        {GetTeamSub20_surname()}
                    </div>
                    <div className='div-sub-player20-reyting'>
                        {GetTeamSub20_rating()}
                    </div>
                    <div className='div-sub-player20-energy'>
                        {"%"+GetTeamSub20_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer20' onClick={GetTacticsPlayerSub20} className='div-sub-player20-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player20-click'>
                        {sub20_cm1_4_click}
                    </div>
                    <div className='div-sub-player20-position'>
                        {GetTeamSub20_position1() +"-"+ GetTeamSub20_position2()}
                    </div>
                    <div className='div-sub-player20-name'>
                        {GetTeamSub20_name()}
                    </div>
                    <div className='div-sub-player20-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player20-surname'>
                        {GetTeamSub20_surname()}
                    </div>
                    <div className='div-sub-player20-reyting'>
                        {GetTeamSub20_rating()}
                    </div>
                    <div className='div-sub-player20-energy'>
                        {"%"+GetTeamSub20_energy()}
                    </div>
                </div>
                </div>   
            )
        }
    }

    function GetRenderSubPlayer21(){
        if(subPlayerVisible21Bool==false){
            return (
                <div id='subPlayer21' onClick={GetTacticsPlayerSub21} className='div-sub-player21'>
                   <div className='div-sub-player21-click'>
                        {sub21_cm1_5_click}
                    </div>
                    <div className='div-sub-player21-position'>
                        {GetTeamSub21_position1() +"-"+ GetTeamSub21_position2()}
                    </div>
                    <div className='div-sub-player21-name'>
                        {GetTeamSub21_name()}
                    </div>
                    <div className='div-sub-player21-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player21-surname'>
                        {GetTeamSub21_surname()}
                    </div>
                    <div className='div-sub-player21-reyting'>
                        {GetTeamSub21_rating()}
                    </div>
                    <div className='div-sub-player21-energy'>
                        {"%"+GetTeamSub21_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer21' onClick={GetTacticsPlayerSub21} className='div-sub-player21-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player21-click'>
                        {sub21_cm1_5_click}
                    </div>
                    <div className='div-sub-player21-position'>
                        {GetTeamSub21_position1() +"-"+ GetTeamSub21_position2()}
                    </div>
                    <div className='div-sub-player21-name'>
                        {GetTeamSub21_name()}
                    </div>
                    <div className='div-sub-player21-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player21-surname'>
                        {GetTeamSub21_surname()}
                    </div>
                    <div className='div-sub-player21-reyting'>
                        {GetTeamSub21_rating()}
                    </div>
                    <div className='div-sub-player21-energy'>
                        {"%"+GetTeamSub21_energy()}
                    </div>
                </div>
                </div>  
            )
        }
    }

    function GetRenderSubPlayer22(){
        if(subPlayerVisible22Bool==false){
            return (
                <div id='subPlayer22' onClick={GetTacticsPlayerSub22} className='div-sub-player22'>
                   <div className='div-sub-player22-click'>
                        {sub22_cm2_1_click}
                    </div>
                    <div className='div-sub-player22-position'>
                        {GetTeamSub22_position1() +"-"+ GetTeamSub22_position2()}
                    </div>
                    <div className='div-sub-player22-name'>
                        {GetTeamSub22_name()}
                    </div>
                    <div className='div-sub-player22-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player22-surname'>
                        {GetTeamSub22_surname()}
                    </div>
                    <div className='div-sub-player22-reyting'>
                        {GetTeamSub22_rating()}
                    </div>
                    <div className='div-sub-player22-energy'>
                        {"%"+GetTeamSub22_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer22' onClick={GetTacticsPlayerSub22} className='div-sub-player22-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player22-click'>
                        {sub22_cm2_1_click}
                    </div>
                    <div className='div-sub-player22-position'>
                        {GetTeamSub22_position1() +"-"+ GetTeamSub22_position2()}
                    </div>
                    <div className='div-sub-player22-name'>
                        {GetTeamSub22_name()}
                    </div>
                    <div className='div-sub-player22-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player22-surname'>
                        {GetTeamSub22_surname()}
                    </div>
                    <div className='div-sub-player22-reyting'>
                        {GetTeamSub22_rating()}
                    </div>
                    <div className='div-sub-player22-energy'>
                        {"%"+GetTeamSub22_energy()}
                    </div>
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer23(){
        if(subPlayerVisible23Bool==false){
            return (
                <div id='subPlayer23' onClick={GetTacticsPlayerSub23} className='div-sub-player23'>
                   <div className='div-sub-player23-click'>
                        {sub23_cm2_2_click}
                    </div>
                    <div className='div-sub-player23-position'>
                        {GetTeamSub23_position1() +"-"+ GetTeamSub23_position2()}
                    </div>
                    <div className='div-sub-player23-name'>
                        {GetTeamSub23_name()}
                    </div>
                    <div className='div-sub-player23-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player23-surname'>
                        {GetTeamSub23_surname()}
                    </div>
                    <div className='div-sub-player23-reyting'>
                        {GetTeamSub23_rating()}
                    </div>
                    <div className='div-sub-player23-energy'>
                        {"%"+GetTeamSub23_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer23' onClick={GetTacticsPlayerSub23} className='div-sub-player23-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player23-click'>
                        {sub23_cm2_2_click}
                    </div>
                    <div className='div-sub-player23-position'>
                        {GetTeamSub23_position1() +"-"+ GetTeamSub23_position2()}
                    </div>
                    <div className='div-sub-player23-name'>
                        {GetTeamSub23_name()}
                    </div>
                    <div className='div-sub-player23-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player23-surname'>
                        {GetTeamSub23_surname()}
                    </div>
                    <div className='div-sub-player23-reyting'>
                        {GetTeamSub23_rating()}
                    </div>
                    <div className='div-sub-player23-energy'>
                        {"%"+GetTeamSub23_energy()}
                    </div>
                </div>
                </div>   
            )
        }
    }

    function GetRenderSubPlayer24(){
        if(subPlayerVisible24Bool==false){
            return (
                <div id='subPlayer24' onClick={GetTacticsPlayerSub24} className='div-sub-player24'>
                   <div className='div-sub-player24-click'>
                        {sub24_cm2_3_click}
                    </div>
                    <div className='div-sub-player24-position'>
                        {GetTeamSub24_position1() +"-"+ GetTeamSub24_position2()}
                    </div>
                    <div className='div-sub-player24-name'>
                        {GetTeamSub24_name()}
                    </div>
                    <div className='div-sub-player24-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player24-surname'>
                        {GetTeamSub24_surname()}
                    </div>
                    <div className='div-sub-player24-reyting'>
                        {GetTeamSub24_rating()}
                    </div>
                    <div className='div-sub-player24-energy'>
                        {"%"+GetTeamSub24_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer24' onClick={GetTacticsPlayerSub24} className='div-sub-player24-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player24-click'>
                        {sub24_cm2_3_click}
                    </div>
                    <div className='div-sub-player24-position'>
                        {GetTeamSub24_position1() +"-"+ GetTeamSub24_position2()}
                    </div>
                    <div className='div-sub-player24-name'>
                        {GetTeamSub24_name()}
                    </div>
                    <div className='div-sub-player24-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player24-surname'>
                        {GetTeamSub24_surname()}
                    </div>
                    <div className='div-sub-player24-reyting'>
                        {GetTeamSub24_rating()}
                    </div>
                    <div className='div-sub-player24-energy'>
                        {"%"+GetTeamSub24_energy()}
                    </div>
                </div> 
                </div> 
            )
        }
    }

    function GetRenderSubPlayer25(){
        if(subPlayerVisible25Bool==false){
            return (
                <div id='subPlayer25' onClick={GetTacticsPlayerSub25} className='div-sub-player25'>
                   <div className='div-sub-player25-click'>
                        {sub25_cm2_4_click}
                    </div>
                    <div className='div-sub-player25-position'>
                        {GetTeamSub25_position1() +"-"+ GetTeamSub25_position2()}
                    </div>
                    <div className='div-sub-player25-name'>
                        {GetTeamSub25_name()}
                    </div>
                    <div className='div-sub-player25-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player25-surname'>
                        {GetTeamSub25_surname()}
                    </div>
                    <div className='div-sub-player25-reyting'>
                        {GetTeamSub25_rating()}
                    </div>
                    <div className='div-sub-player25-energy'>
                        {"%"+GetTeamSub25_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer25' onClick={GetTacticsPlayerSub25} className='div-sub-player25-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player25-click'>
                        {sub25_cm2_4_click}
                    </div>
                    <div className='div-sub-player25-position'>
                        {GetTeamSub25_position1() +"-"+ GetTeamSub25_position2()}
                    </div>
                    <div className='div-sub-player25-name'>
                        {GetTeamSub25_name()}
                    </div>
                    <div className='div-sub-player25-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player25-surname'>
                        {GetTeamSub25_surname()}
                    </div>
                    <div className='div-sub-player25-reyting'>
                        {GetTeamSub25_rating()}
                    </div>
                    <div className='div-sub-player25-energy'>
                        {"%"+GetTeamSub25_energy()}
                    </div>
                </div> 
                </div> 
            )
        }
    }

    function GetRenderSubPlayer26(){
        if(subPlayerVisible26Bool==false){
            return (
                <div id='subPlayer26' onClick={GetTacticsPlayerSub26} className='div-sub-player26'>
                   <div className='div-sub-player26-click'>
                        {sub26_cm2_5_click}
                    </div>
                    <div className='div-sub-player26-position'>
                        {GetTeamSub26_position1() +"-"+ GetTeamSub26_position2()}
                    </div>
                    <div className='div-sub-player26-name'>
                        {GetTeamSub26_name()}
                    </div>
                    <div className='div-sub-player26-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player26-surname'>
                        {GetTeamSub26_surname()}
                    </div>
                    <div className='div-sub-player26-reyting'>
                        {GetTeamSub26_rating()}
                    </div>
                    <div className='div-sub-player26-energy'>
                        {"%"+GetTeamSub26_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer26' onClick={GetTacticsPlayerSub26} className='div-sub-player26-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player26-click'>
                        {sub26_cm2_5_click}
                    </div>
                    <div className='div-sub-player26-position'>
                        {GetTeamSub26_position1() +"-"+ GetTeamSub26_position2()}
                    </div>
                    <div className='div-sub-player26-name'>
                        {GetTeamSub26_name()}
                    </div>
                    <div className='div-sub-player26-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player26-surname'>
                        {GetTeamSub26_surname()}
                    </div>
                    <div className='div-sub-player26-reyting'>
                        {GetTeamSub26_rating()}
                    </div>
                    <div className='div-sub-player26-energy'>
                        {"%"+GetTeamSub26_energy()}
                    </div>
                </div> 
                </div> 
            )
        }
    }

    function GetRenderSubPlayer27(){
        if(subPlayerVisible27Bool==false){
            return (
                <div id='subPlayer27' onClick={GetTacticsPlayerSub27} className='div-sub-player27'>
                   <div className='div-sub-player27-click'>
                        {sub27_lw1_click}
                    </div>
                    <div className='div-sub-player27-position'>
                        {GetTeamSub27_position1() +"-"+ GetTeamSub27_position2()}
                    </div>
                    <div className='div-sub-player27-name'>
                        {GetTeamSub27_name()}
                    </div>
                    <div className='div-sub-player27-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player27-surname'>
                        {GetTeamSub27_surname()}
                    </div>
                    <div className='div-sub-player27-reyting'>
                        {GetTeamSub27_rating()}
                    </div>
                    <div className='div-sub-player27-energy'>
                        {"%"+GetTeamSub27_energy()}
                    </div>
                </div>  
            )
        }else {
            return (
                <div id='subPlayer27' onClick={GetTacticsPlayerSub27} className='div-sub-player27-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player27-click'>
                        {sub27_lw1_click}
                    </div>
                    <div className='div-sub-player27-position'>
                        {GetTeamSub27_position1() +"-"+ GetTeamSub27_position2()}
                    </div>
                    <div className='div-sub-player27-name'>
                        {GetTeamSub27_name()}
                    </div>
                    <div className='div-sub-player27-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player27-surname'>
                        {GetTeamSub27_surname()}
                    </div>
                    <div className='div-sub-player27-reyting'>
                        {GetTeamSub27_rating()}
                    </div>
                    <div className='div-sub-player27-energy'>
                        {"%"+GetTeamSub27_energy()}
                    </div>
                </div> 
                </div>  
            )
        }
    }

    function GetRenderSubPlayer28(){
        if(subPlayerVisible28Bool==false){
            return (
                <div id='subPlayer28' onClick={GetTacticsPlayerSub28} className='div-sub-player28'>
                    <div className='div-sub-player28-click'>
                        {sub28_lw2_click}
                    </div>
                    <div className='div-sub-player28-position'>
                        {GetTeamSub28_position1() +"-"+ GetTeamSub28_position2()}
                    </div>
                    <div className='div-sub-player28-name'>
                        {GetTeamSub28_name()}
                    </div>
                    <div className='div-sub-player28-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player28-surname'>
                        {GetTeamSub28_surname()}
                    </div>
                    <div className='div-sub-player28-reyting'>
                        {GetTeamSub28_rating()}
                    </div>
                    <div className='div-sub-player28-energy'>
                        {"%"+GetTeamSub28_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer28' onClick={GetTacticsPlayerSub28} className='div-sub-player28-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player28-click'>
                        {sub28_lw2_click}
                    </div>
                    <div className='div-sub-player28-position'>
                        {GetTeamSub28_position1() +"-"+ GetTeamSub28_position2()}
                    </div>
                    <div className='div-sub-player28-name'>
                        {GetTeamSub28_name()}
                    </div>
                    <div className='div-sub-player28-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player28-surname'>
                        {GetTeamSub28_surname()}
                    </div>
                    <div className='div-sub-player28-reyting'>
                        {GetTeamSub28_rating()}
                    </div>
                    <div className='div-sub-player28-energy'>
                        {"%"+GetTeamSub28_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer29(){
        if(subPlayerVisible29Bool==false){
            return (
                <div id='subPlayer29' onClick={GetTacticsPlayerSub29} className='div-sub-player29'>
                   <div className='div-sub-player29-click'>
                        {sub29_lw3_click}
                    </div>
                    <div className='div-sub-player29-position'>
                        {GetTeamSub29_position1() +"-"+ GetTeamSub29_position2()}
                    </div>
                    <div className='div-sub-player29-name'>
                        {GetTeamSub29_name()}
                    </div>
                    <div className='div-sub-player29-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player29-surname'>
                        {GetTeamSub29_surname()}
                    </div>
                    <div className='div-sub-player29-reyting'>
                        {GetTeamSub29_rating()}
                    </div>
                    <div className='div-sub-player29-energy'>
                        {"%"+GetTeamSub29_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer29' onClick={GetTacticsPlayerSub29} className='div-sub-player29-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player29-click'>
                        {sub29_lw3_click}
                    </div>
                    <div className='div-sub-player29-position'>
                        {GetTeamSub29_position1() +"-"+ GetTeamSub29_position2()}
                    </div>
                    <div className='div-sub-player29-name'>
                        {GetTeamSub29_name()}
                    </div>
                    <div className='div-sub-player29-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player29-surname'>
                        {GetTeamSub29_surname()}
                    </div>
                    <div className='div-sub-player29-reyting'>
                        {GetTeamSub29_rating()}
                    </div>
                    <div className='div-sub-player29-energy'>
                        {"%"+GetTeamSub29_energy()}
                    </div>
                </div>
                </div>
            )   
        }
    }

    function GetRenderSubPlayer30(){
        if(subPlayerVisible30Bool==false){
            return (
                <div id='subPlayer30' onClick={GetTacticsPlayerSub30} className='div-sub-player30'>
                   <div className='div-sub-player30-click'>
                        {sub30_lw4_click}
                    </div>
                    <div className='div-sub-player30-position'>
                        {GetTeamSub30_position1() +"-"+ GetTeamSub30_position2()}
                    </div>
                    <div className='div-sub-player30-name'>
                        {GetTeamSub30_name()}
                    </div>
                    <div className='div-sub-player30-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player30-surname'>
                        {GetTeamSub30_surname()}
                    </div>
                    <div className='div-sub-player30-reyting'>
                        {GetTeamSub30_rating()}
                    </div>
                    <div className='div-sub-player30-energy'>
                        {"%"+GetTeamSub30_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer30' onClick={GetTacticsPlayerSub30} className='div-sub-player30-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player30-click'>
                        {sub30_lw4_click}
                    </div>
                    <div className='div-sub-player30-position'>
                        {GetTeamSub30_position1() +"-"+ GetTeamSub30_position2()}
                    </div>
                    <div className='div-sub-player30-name'>
                        {GetTeamSub30_name()}
                    </div>
                    <div className='div-sub-player30-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player30-surname'>
                        {GetTeamSub30_surname()}
                    </div>
                    <div className='div-sub-player30-reyting'>
                        {GetTeamSub30_rating()}
                    </div>
                    <div className='div-sub-player30-energy'>
                        {"%"+GetTeamSub30_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer31(){
        if(subPlayerVisible31Bool==false){
            return (
                <div id='subPlayer31' onClick={GetTacticsPlayerSub31} className='div-sub-player31'>
                   <div className='div-sub-player31-click'>
                        {sub31_rw1_click}
                    </div>
                    <div className='div-sub-player31-position'>
                        {GetTeamSub31_position1() +"-"+ GetTeamSub31_position2()}
                    </div>
                    <div className='div-sub-player31-name'>
                        {GetTeamSub31_name()}
                    </div>
                    <div className='div-sub-player31-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player31-surname'>
                        {GetTeamSub31_surname()}
                    </div>
                    <div className='div-sub-player31-reyting'>
                        {GetTeamSub31_rating()}
                    </div>
                    <div className='div-sub-player31-energy'>
                        {"%"+GetTeamSub31_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer31' onClick={GetTacticsPlayerSub31} className='div-sub-player31-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player31-click'>
                        {sub31_rw1_click}
                    </div>
                    <div className='div-sub-player31-position'>
                        {GetTeamSub31_position1() +"-"+ GetTeamSub31_position2()}
                    </div>
                    <div className='div-sub-player31-name'>
                        {GetTeamSub31_name()}
                    </div>
                    <div className='div-sub-player31-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player31-surname'>
                        {GetTeamSub31_surname()}
                    </div>
                    <div className='div-sub-player31-reyting'>
                        {GetTeamSub31_rating()}
                    </div>
                    <div className='div-sub-player31-energy'>
                        {"%"+GetTeamSub31_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer32(){
        if(subPlayerVisible32Bool==false){
            return (
                <div id='subPlayer32' onClick={GetTacticsPlayerSub32} className='div-sub-player32'>
                   <div className='div-sub-player32-click'>
                        {sub32_rw2_click}
                    </div>
                    <div className='div-sub-player32-position'>
                        {GetTeamSub32_position1() +"-"+ GetTeamSub32_position2()}
                    </div>
                    <div className='div-sub-player32-name'>
                        {GetTeamSub32_name()}
                    </div>
                    <div className='div-sub-player32-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player32-surname'>
                        {GetTeamSub32_surname()}
                    </div>
                    <div className='div-sub-player32-reyting'>
                        {GetTeamSub32_rating()}
                    </div>
                    <div className='div-sub-player32-energy'>
                        {"%"+GetTeamSub32_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer32' onClick={GetTacticsPlayerSub32} className='div-sub-player32-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player32-click'>
                        {sub32_rw2_click}
                    </div>
                    <div className='div-sub-player32-position'>
                        {GetTeamSub32_position1() +"-"+ GetTeamSub32_position2()}
                    </div>
                    <div className='div-sub-player32-name'>
                        {GetTeamSub32_name()}
                    </div>
                    <div className='div-sub-player32-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player32-surname'>
                        {GetTeamSub32_surname()}
                    </div>
                    <div className='div-sub-player32-reyting'>
                        {GetTeamSub32_rating()}
                    </div>
                    <div className='div-sub-player32-energy'>
                        {"%"+GetTeamSub32_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer33(){
        if(subPlayerVisible33Bool==false){
            return (
                <div id='subPlayer33' onClick={GetTacticsPlayerSub33} className='div-sub-player33'>
                   <div className='div-sub-player33-click'>
                        {sub33_rw3_click}
                    </div>
                    <div className='div-sub-player33-position'>
                        {GetTeamSub33_position1() +"-"+ GetTeamSub33_position2()}
                    </div>
                    <div className='div-sub-player33-name'>
                        {GetTeamSub33_name()}
                    </div>
                    <div className='div-sub-player33-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player33-surname'>
                        {GetTeamSub33_surname()}
                    </div>
                    <div className='div-sub-player33-reyting'>
                        {GetTeamSub33_rating()}
                    </div>
                    <div className='div-sub-player33-energy'>
                        {"%"+GetTeamSub33_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer33' onClick={GetTacticsPlayerSub33} className='div-sub-player33-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player33-click'>
                        {sub33_rw3_click}
                    </div>
                    <div className='div-sub-player33-position'>
                        {GetTeamSub33_position1() +"-"+ GetTeamSub33_position2()}
                    </div>
                    <div className='div-sub-player33-name'>
                        {GetTeamSub33_name()}
                    </div>
                    <div className='div-sub-player33-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player33-surname'>
                        {GetTeamSub33_surname()}
                    </div>
                    <div className='div-sub-player33-reyting'>
                        {GetTeamSub33_rating()}
                    </div>
                    <div className='div-sub-player33-energy'>
                        {"%"+GetTeamSub33_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer34(){
        if(subPlayerVisible34Bool==false){
            return (
                <div id='subPlayer34' onClick={GetTacticsPlayerSub34} className='div-sub-player34'>
                   <div className='div-sub-player34-click'>
                        {sub34_rw4_click}
                    </div>
                    <div className='div-sub-player34-position'>
                        {GetTeamSub34_position1() +"-"+ GetTeamSub34_position2()}
                    </div>
                    <div className='div-sub-player34-name'>
                        {GetTeamSub34_name()}
                    </div>
                    <div className='div-sub-player34-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player34-surname'>
                        {GetTeamSub34_surname()}
                    </div>
                    <div className='div-sub-player34-reyting'>
                        {GetTeamSub34_rating()}
                    </div>
                    <div className='div-sub-player34-energy'>
                        {"%"+GetTeamSub34_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer34' onClick={GetTacticsPlayerSub34} className='div-sub-player34-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player34-click'>
                        {sub34_rw4_click}
                    </div>
                    <div className='div-sub-player34-position'>
                        {GetTeamSub34_position1() +"-"+ GetTeamSub34_position2()}
                    </div>
                    <div className='div-sub-player34-name'>
                        {GetTeamSub34_name()}
                    </div>
                    <div className='div-sub-player34-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player34-surname'>
                        {GetTeamSub34_surname()}
                    </div>
                    <div className='div-sub-player34-reyting'>
                        {GetTeamSub34_rating()}
                    </div>
                    <div className='div-sub-player34-energy'>
                        {"%"+GetTeamSub34_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer35(){
        if(subPlayerVisible35Bool==false){
            return (
                <div id='subPlayer35' onClick={GetTacticsPlayerSub35} className='div-sub-player35'>
                   <div className='div-sub-player35-click'>
                        {sub35_st1_click}
                    </div>
                    <div className='div-sub-player35-position'>
                        {GetTeamSub35_position1() +"-"+ GetTeamSub35_position2()}
                    </div>
                    <div className='div-sub-player35-name'>
                        {GetTeamSub35_name()}
                    </div>
                    <div className='div-sub-player35-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player35-surname'>
                        {GetTeamSub35_surname()}
                    </div>
                    <div className='div-sub-player35-reyting'>
                        {GetTeamSub35_rating()}
                    </div>
                    <div className='div-sub-player35-energy'>
                        {"%"+GetTeamSub35_energy()}
                    </div>
                </div>
            )
        }else {
            return (
                <div id='subPlayer35' onClick={GetTacticsPlayerSub35} className='div-sub-player35-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player35-click'>
                        {sub35_st1_click}
                    </div>
                    <div className='div-sub-player35-position'>
                        {GetTeamSub35_position1() +"-"+ GetTeamSub35_position2()}
                    </div>
                    <div className='div-sub-player35-name'>
                        {GetTeamSub35_name()}
                    </div>
                    <div className='div-sub-player35-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player35-surname'>
                        {GetTeamSub35_surname()}
                    </div>
                    <div className='div-sub-player35-reyting'>
                        {GetTeamSub35_rating()}
                    </div>
                    <div className='div-sub-player35-energy'>
                        {"%"+GetTeamSub35_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer36(){
        if(subPlayerVisible36Bool==false){
            return (
                <div id='subPlayer36' onClick={GetTacticsPlayerSub36} className='div-sub-player36'>
                   <div className='div-sub-player36-click'>
                        {sub36_st2_click}
                    </div>
                    <div className='div-sub-player36-position'>
                        {GetTeamSub36_position1() +"-"+ GetTeamSub36_position2()}
                    </div>
                    <div className='div-sub-player36-name'>
                        {GetTeamSub36_name()}
                    </div>
                    <div className='div-sub-player36-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player36-surname'>
                        {GetTeamSub36_surname()}
                    </div>
                    <div className='div-sub-player36-reyting'>
                        {GetTeamSub36_rating()}
                    </div>
                    <div className='div-sub-player36-energy'>
                        {"%"+GetTeamSub36_energy()}
                    </div>
                </div>   
            )
        }else {
            return (
                <div id='subPlayer36' onClick={GetTacticsPlayerSub36} className='div-sub-player36-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player36-click'>
                        {sub36_st2_click}
                    </div>
                    <div className='div-sub-player36-position'>
                        {GetTeamSub36_position1() +"-"+ GetTeamSub36_position2()}
                    </div>
                    <div className='div-sub-player36-name'>
                        {GetTeamSub36_name()}
                    </div>
                    <div className='div-sub-player36-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player36-surname'>
                        {GetTeamSub36_surname()}
                    </div>
                    <div className='div-sub-player36-reyting'>
                        {GetTeamSub36_rating()}
                    </div>
                    <div className='div-sub-player36-energy'>
                        {"%"+GetTeamSub36_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer37(){
        if(subPlayerVisible37Bool==false){
            return (
                <div id='subPlayer37' onClick={GetTacticsPlayerSub37} className='div-sub-player37'>
                   <div className='div-sub-player37-click'>
                        {sub37_st3_click}
                    </div>
                    <div className='div-sub-player37-position'>
                        {GetTeamSub37_position1() +"-"+ GetTeamSub37_position2()}
                    </div>
                    <div className='div-sub-player37-name'>
                        {GetTeamSub37_name()}
                    </div>
                    <div className='div-sub-player37-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player37-surname'>
                        {GetTeamSub37_surname()}
                    </div>
                    <div className='div-sub-player37-reyting'>
                        {GetTeamSub37_rating()}
                    </div>
                    <div className='div-sub-player37-energy'>
                        {"%"+GetTeamSub37_energy()}
                    </div>
                </div>
            )
        }else {
            return (
                <div id='subPlayer37' onClick={GetTacticsPlayerSub37} className='div-sub-player37-disabled'>
                <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player37-click'>
                        {sub37_st3_click}
                    </div>
                    <div className='div-sub-player37-position'>
                        {GetTeamSub37_position1() +"-"+ GetTeamSub37_position2()}
                    </div>
                    <div className='div-sub-player37-name'>
                        {GetTeamSub37_name()}
                    </div>
                    <div className='div-sub-player37-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player37-surname'>
                        {GetTeamSub37_surname()}
                    </div>
                    <div className='div-sub-player37-reyting'>
                        {GetTeamSub37_rating()}
                    </div>
                    <div className='div-sub-player37-energy'>
                        {"%"+GetTeamSub37_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    function GetRenderSubPlayer38(){
        if(subPlayerVisible38Bool==false){
            return (
            <div id='subPlayer38' onClick={GetTacticsPlayerSub38} className='div-sub-player38'>
                <div className='div-sub-player38-click'>
                        {sub38_st4_click}
                    </div>
                    <div className='div-sub-player38-position'>
                        {GetTeamSub38_position1() +"-"+ GetTeamSub38_position2()}
                    </div>
                    <div className='div-sub-player38-name'>
                        {GetTeamSub38_name()}
                    </div>
                    <div className='div-sub-player38-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player38-surname'>
                        {GetTeamSub38_surname()}
                    </div>
                    <div className='div-sub-player38-reyting'>
                        {GetTeamSub38_rating()}
                    </div>
                    <div className='div-sub-player38-energy'>
                        {"%"+GetTeamSub38_energy()}
                    </div>
             </div>   
            )
        }else {
            return (
                <div id='subPlayer38' onClick={GetTacticsPlayerSub38} className='div-sub-player38-disabled'>
                    <div className='div-gameplanmenu-disable'>
                    <div className='div-sub-player38-click'>
                        {sub38_st4_click}
                    </div>
                    <div className='div-sub-player38-position'>
                        {GetTeamSub38_position1() +"-"+ GetTeamSub38_position2()}
                    </div>
                    <div className='div-sub-player38-name'>
                        {GetTeamSub38_name()}
                    </div>
                    <div className='div-sub-player38-empty-namesurname'>
    
                    </div>
                    <div className='div-sub-player38-surname'>
                        {GetTeamSub38_surname()}
                    </div>
                    <div className='div-sub-player38-reyting'>
                        {GetTeamSub38_rating()}
                    </div>
                    <div className='div-sub-player38-energy'>
                        {"%"+GetTeamSub38_energy()}
                    </div>
                </div>
                </div>
            )
        }
    }

    



    function GetVisibilityHiddenAllSubs(){
        if(rightPlayerChangeId==0){
            return(
                <div id='subAllPlayers' className='div-sub-players-gameplanmenu-playerchange'>
                    <div className='div-sub-players-dontchange'>
                        {txtGameplanmenuDontPlayerChange}
                    </div>
                </div>
            )
        }else {
            return (
                <div id='subAllPlayers' className='div-sub-players-gameplanmenu'>
                <div className='div-txt-gk'>
                    {txtGk1}
                </div>
                {GetRenderSubPlayer1()}
                {GetRenderSubPlayer2()}
                <div className='div-txt-lb'>
                    {txtLb1}
                </div>
                {GetRenderSubPlayer3()}
                {GetRenderSubPlayer4()}
                <div className='div-txt-cb1'>
                    {txtCb1}
                </div>
                {GetRenderSubPlayer5()}
                {GetRenderSubPlayer6()}
                {GetRenderSubPlayer7()}
                {GetRenderSubPlayer8()}
                <div className='div-txt-cb2'>
                    {txtCb1}
                </div>
                {GetRenderSubPlayer9()}
                {GetRenderSubPlayer10()}
                {GetRenderSubPlayer11()}
                {GetRenderSubPlayer12()}
                <div className='div-txt-rb'>
                    {txtRb1}
                </div>
                {GetRenderSubPlayer13()}
                {GetRenderSubPlayer14()}
                <div className='div-txt-dm'>
                    {txtDm1}
                </div>
                {GetRenderSubPlayer15()}
                {GetRenderSubPlayer16()}
                <div className='div-txt-cm1'>
                    {txtCm1}
                </div>
                {GetRenderSubPlayer17()}
                {GetRenderSubPlayer18()}
                {GetRenderSubPlayer19()}
                {GetRenderSubPlayer20()}
                {GetRenderSubPlayer21()}
                <div className='div-txt-cm2'>
                    {txtCm2}
                </div>
                {GetRenderSubPlayer22()}
                {GetRenderSubPlayer23()}
                {GetRenderSubPlayer24()}
                {GetRenderSubPlayer25()}
                {GetRenderSubPlayer26()}
                <div className='div-txt-lw'>
                    {txtLw1}
                </div>
                {GetRenderSubPlayer27()}
                {GetRenderSubPlayer28()}
                {GetRenderSubPlayer29()}
                {GetRenderSubPlayer30()}
                <div className='div-txt-rw'>
                    {txtRw1}
                </div>
                {GetRenderSubPlayer31()}
                {GetRenderSubPlayer32()}
                {GetRenderSubPlayer33()}
                {GetRenderSubPlayer34()}
                <div className='div-txt-st'>
                    {txtSt1}
                </div>
                {GetRenderSubPlayer35()}
                {GetRenderSubPlayer36()}
                {GetRenderSubPlayer37()}
                {GetRenderSubPlayer38()}
            </div>
            )
        }
    }

    function GetVisibilityHiddenGoalkeepers(){
        dispatch(setSubPlayerVisible1_t())
        dispatch(setSubPlayerVisible2_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_gk1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_gk2_yellowCard_t())
        }
    }
    
    function GetVisibilityHiddenLeftBacks(){
        dispatch(setSubPlayerVisible3_t())
        dispatch(setSubPlayerVisible4_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_lb1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_lb2_yellowCard_t())
        }
    } 

    function GetVisibilityHiddenLeftStopers(){
        dispatch(setSubPlayerVisible5_t())
        dispatch(setSubPlayerVisible6_t())
        dispatch(setSubPlayerVisible7_t())
        dispatch(setSubPlayerVisible8_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_cb1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_cb4_yellowCard_t())
        }
    } 

    function GetVisibilityHiddenRightStopers(){
        dispatch(setSubPlayerVisible9_t())
        dispatch(setSubPlayerVisible10_t())
        dispatch(setSubPlayerVisible11_t())
        dispatch(setSubPlayerVisible12_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_cb2_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_cb3_yellowCard_t())
        }
    }
    
    function GetVisibilityHiddenRightBacks(){
        dispatch(setSubPlayerVisible13_t())
        dispatch(setSubPlayerVisible14_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_rb1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_rb2_yellowCard_t())
        }
    }

    function GetVisibilityHiddenDefensiveMidfielder(){
        dispatch(setSubPlayerVisible15_t())
        dispatch(setSubPlayerVisible16_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_dm1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_dm2_yellowCard_t())
        }
    }

    function GetVisibilityHiddenLeftMidfielder(){
        dispatch(setSubPlayerVisible17_t())
        dispatch(setSubPlayerVisible18_t())
        dispatch(setSubPlayerVisible19_t())
        dispatch(setSubPlayerVisible20_t())
        dispatch(setSubPlayerVisible21_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_cm1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_cm4_yellowCard_t())
        }
    }

    function GetVisibilityHiddenRightMidfielder(){
        dispatch(setSubPlayerVisible22_t())
        dispatch(setSubPlayerVisible23_t())
        dispatch(setSubPlayerVisible24_t())
        dispatch(setSubPlayerVisible25_t())
        dispatch(setSubPlayerVisible26_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_cm2_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_cm3_yellowCard_t())
        }
    }

    function GetVisibilityHiddenLeftWings(){
        dispatch(setSubPlayerVisible27_t())
        dispatch(setSubPlayerVisible28_t())
        dispatch(setSubPlayerVisible29_t())
        dispatch(setSubPlayerVisible30_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_lw1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_lw2_yellowCard_t())
        }
    }

    function GetVisibilityHiddenRightWings(){
        dispatch(setSubPlayerVisible31_t())
        dispatch(setSubPlayerVisible32_t())
        dispatch(setSubPlayerVisible33_t())
        dispatch(setSubPlayerVisible34_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_rw1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_rw2_yellowCard_t())
        }
    }

    function GetVisibilityHiddenStrikers(){
        dispatch(setSubPlayerVisible35_t())
        dispatch(setSubPlayerVisible36_t())
        dispatch(setSubPlayerVisible37_t())
        dispatch(setSubPlayerVisible38_t())

        if(homeSideValue==true){
            dispatch(SetHomeTeam_st1_yellowCard_t())
        }else {
            dispatch(SetAwayTeam_st2_yellowCard_t())
        }
    }

    useEffect((
        ()=>{
            if(matchStartValueBool==true && samePlayerValue==false){
                ControlVisibleSamePlayers()
                dispatch(setSamePlayerValueId_t())
            }
        }
    ), [samePlayerValue])

    function ControlVisibleSamePlayers(){
        if(matchStartValueBool==true){
            if(homeSideValue==true){

                //cb1(cb4) to cb2(cb3)
                if(t1_cb1_surname==sub9_cb2_1_surname){
                    dispatch(setSubPlayerVisible9_t())
                }else if(t1_cb1_surname==sub10_cb2_2_surname){
                    dispatch(setSubPlayerVisible10_t())
                }else if(t1_cb1_surname==sub11_cb2_3_surname){
                    dispatch(setSubPlayerVisible11_t())
                }else if(t1_cb1_surname==sub12_cb2_4_surname){
                    dispatch(setSubPlayerVisible12_t())
                }

                //cb2(cb3) to cb1(cb4)
                if(t1_cb2_surname==sub5_cb1_1_surname){
                    dispatch(setSubPlayerVisible5_t())
                }else if(t1_cb2_surname==sub6_cb1_2_surname){
                    dispatch(setSubPlayerVisible6_t())
                }else if(t1_cb2_surname==sub7_cb1_3_surname){
                    dispatch(setSubPlayerVisible7_t())
                }else if(t1_cb2_surname==sub8_cb1_4_surname){
                    dispatch(setSubPlayerVisible8_t())
                }

                //-----

                //cm1(cm4) to cm2(cm3)
                if(t1_cm1_surname==sub22_cm2_1_surname){
                    dispatch(setSubPlayerVisible22_t())
                }else if(t1_cm1_surname==sub23_cm2_2_surname){
                    dispatch(setSubPlayerVisible23_t())
                }else if(t1_cm1_surname==sub24_cm2_3_surname){
                    dispatch(setSubPlayerVisible24_t())
                }else if(t1_cm1_surname==sub25_cm2_4_surname){
                    dispatch(setSubPlayerVisible25_t())
                }else if(t1_cm1_surname==sub26_cm2_5_surname){
                    dispatch(setSubPlayerVisible26_t())
                }
            
                //cm1(cm4) to lw
                if(t1_cm1_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t1_cm1_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t1_cm1_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t1_cm1_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //cm1(cm4) to rw
                if(t1_cm1_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t1_cm1_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t1_cm1_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t1_cm1_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //cm1(cm4) to st
                if(t1_cm1_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t1_cm1_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t1_cm1_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t1_cm1_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //cm2(cm3) to cm1(cm2)
                if(t1_cm2_surname==sub17_cm1_1_surname){
                    dispatch(setSubPlayerVisible17_t())
                }else if(t1_cm2_surname==sub18_cm1_2_surname){
                    dispatch(setSubPlayerVisible18_t())
                }else if(t1_cm2_surname==sub19_cm1_3_surname){
                    dispatch(setSubPlayerVisible19_t())
                }else if(t1_cm2_surname==sub20_cm1_4_surname){
                    dispatch(setSubPlayerVisible20_t())
                }else if(t1_cm2_surname==sub21_cm1_5_surname){
                    dispatch(setSubPlayerVisible21_t())
                }
            
                //cm2(cm3) to lw
                if(t1_cm2_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t1_cm2_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t1_cm2_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t1_cm2_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //cm2(cm3) to rw
                if(t1_cm2_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t1_cm2_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t1_cm2_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t1_cm2_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //cm2(cm3) to st
                if(t1_cm2_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t1_cm2_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t1_cm2_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t1_cm2_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //lw to rw
                if(t1_lw1_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t1_lw1_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t1_lw1_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t1_lw1_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //lw to st
                if(t1_lw1_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t1_lw1_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t1_lw1_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t1_lw1_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //rw to lw
                if(t1_rw1_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t1_rw1_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t1_rw1_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t1_rw1_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //rw to st
                if(t1_rw1_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t1_rw1_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t1_rw1_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t1_rw1_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //st to rw
                if(t1_st1_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t1_st1_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t1_st1_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t1_st1_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //st to lw
                if(t1_st1_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t1_st1_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t1_st1_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t1_st1_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

            }else if(awaySideValue==true){
                
                //cb1(cb4) to cb2(cb3)
                if(t2_cb4_surname==sub9_cb2_1_surname){
                    dispatch(setSubPlayerVisible9_t())
                }else if(t2_cb4_surname==sub10_cb2_2_surname){
                    dispatch(setSubPlayerVisible10_t())
                }else if(t2_cb4_surname==sub11_cb2_3_surname){
                    dispatch(setSubPlayerVisible11_t())
                }else if(t2_cb4_surname==sub12_cb2_4_surname){
                    dispatch(setSubPlayerVisible12_t())
                }

                //cb2(cb3) to cb1(cb4)
                if(t2_cb3_surname==sub5_cb1_1_surname){
                    dispatch(setSubPlayerVisible5_t())
                }else if(t2_cb3_surname==sub6_cb1_2_surname){
                    dispatch(setSubPlayerVisible6_t())
                }else if(t2_cb3_surname==sub7_cb1_3_surname){
                    dispatch(setSubPlayerVisible7_t())
                }else if(t2_cb3_surname==sub8_cb1_4_surname){
                    dispatch(setSubPlayerVisible8_t())
                }

                //-----

                //cm1(cm4) to cm2(cm3)
                if(t2_cm4_surname==sub22_cm2_1_surname){
                    dispatch(setSubPlayerVisible22_t())
                }else if(t2_cm4_surname==sub23_cm2_2_surname){
                    dispatch(setSubPlayerVisible23_t())
                }else if(t2_cm4_surname==sub24_cm2_3_surname){
                    dispatch(setSubPlayerVisible24_t())
                }else if(t2_cm4_surname==sub25_cm2_4_surname){
                    dispatch(setSubPlayerVisible25_t())
                }else if(t2_cm4_surname==sub26_cm2_5_surname){
                    dispatch(setSubPlayerVisible26_t())
                }
            
                //cm1(cm4) to lw
                if(t2_cm4_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t2_cm4_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t2_cm4_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t2_cm4_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //cm1(cm4) to rw
                if(t2_cm4_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t2_cm4_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t2_cm4_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t2_cm4_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //cm1(cm4) to st
                if(t2_cm4_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t2_cm4_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t2_cm4_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t2_cm4_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //cm2(cm3) to cm1(cm2)
                if(t2_cm3_surname==sub17_cm1_1_surname){
                    dispatch(setSubPlayerVisible17_t())
                }else if(t2_cm3_surname==sub18_cm1_2_surname){
                    dispatch(setSubPlayerVisible18_t())
                }else if(t2_cm3_surname==sub19_cm1_3_surname){
                    dispatch(setSubPlayerVisible19_t())
                }else if(t2_cm3_surname==sub20_cm1_4_surname){
                    dispatch(setSubPlayerVisible20_t())
                }else if(t2_cm3_surname==sub21_cm1_5_surname){
                    dispatch(setSubPlayerVisible21_t())
                }
            
                //cm2(cm3) to lw
                if(t2_cm3_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t2_cm3_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t2_cm3_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t2_cm3_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //cm2(cm3) to rw
                if(t2_cm3_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t2_cm3_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t2_cm3_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t2_cm3_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //cm2(cm3) to st
                if(t2_cm3_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t2_cm3_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t2_cm3_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t2_cm3_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //lw to rw
                if(t2_lw2_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t2_lw2_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t2_lw2_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t2_lw2_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //lw to st
                if(t2_lw2_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t2_lw2_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t2_lw2_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t2_lw2_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //rw to lw
                if(t2_rw2_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t2_rw2_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t2_rw2_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t2_rw2_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }

                //rw to st
                if(t2_rw2_surname==sub35_st1_surname){
                    dispatch(setSubPlayerVisible35_t())
                }else if(t2_rw2_surname==sub36_st2_surname){
                    dispatch(setSubPlayerVisible36_t())
                }else if(t2_rw2_surname==sub37_st3_surname){
                    dispatch(setSubPlayerVisible37_t())
                }else if(t2_rw2_surname==sub38_st4_surname){
                    dispatch(setSubPlayerVisible38_t())
                }

                //-----

                //st to rw
                if(t2_st2_surname==sub31_rw1_surname){
                    dispatch(setSubPlayerVisible31_t())
                }else if(t2_st2_surname==sub32_rw2_surname){
                    dispatch(setSubPlayerVisible32_t())
                }else if(t2_st2_surname==sub33_rw3_surname){
                    dispatch(setSubPlayerVisible33_t())
                }else if(t2_st2_surname==sub34_rw4_surname){
                    dispatch(setSubPlayerVisible34_t())
                }

                //st to lw
                if(t2_st2_surname==sub27_lw1_surname){
                    dispatch(setSubPlayerVisible27_t())
                }else if(t2_st2_surname==sub28_lw2_surname){
                    dispatch(setSubPlayerVisible28_t())
                }else if(t2_st2_surname==sub29_lw3_surname){
                    dispatch(setSubPlayerVisible29_t())
                }else if(t2_st2_surname==sub30_lw4_surname){
                    dispatch(setSubPlayerVisible30_t())
                }
            }
        }
    }









































    //sub players1
    function GetTacticsPlayerSub1(){
        if(matchStartValueBool==false){
            GetTeamSub1_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueGk1())
            }else{
                dispatch(setAwayTeamGetValueGk2())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && homeTeamSaveIndex_gk1==homeTeamIndex_gk1 && sub1_gk1_click!="✓"){
                    GetVisibilityHiddenGoalkeepers()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub1_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueGk1())
                    }
                    dispatch(SetHomeTeam_gk1_energy())
                }else if(t1_gk1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==false){
                    alert(sub1_gk1_name + " " + sub1_gk1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && awayTeamSaveIndex_gk2==awayTeamIndex_gk2 && sub1_gk1_click!="✓"){
                    GetVisibilityHiddenGoalkeepers()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub1_click()
                    if(awaySideValue==true){
                        dispatch(setAwayTeamGetValueGk2())
                    }
                    dispatch(SetAwayTeam_gk2_energy())
                }else if(t2_gk2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==false){
                    alert(sub1_gk1_name + " " + sub1_gk1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players2
    function GetTacticsPlayerSub2(){
        if(matchStartValueBool==false){
            GetTeamSub2_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueGk_11())
            }else{
                dispatch(setAwayTeamGetValueGk_11())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_gk1_redCard==false && homeTeamSaveIndex_gk1==homeTeamIndex_gk1 && sub2_gk2_click!="✓"){
                    GetVisibilityHiddenGoalkeepers()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub2_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueGk_11())
                    }
                    dispatch(SetHomeTeam_gk1_energy())
                }else if(t1_gk1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==false){
                    alert(sub2_gk2_name + " " + sub2_gk2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible1Bool==true && subPlayerVisible2Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_gk2_redCard==false && awayTeamSaveIndex_gk2==awayTeamIndex_gk2 && sub2_gk2_click!="✓"){
                    GetVisibilityHiddenGoalkeepers()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub2_click()
                    if(awaySideValue==true){
                        dispatch(setAwayTeamGetValueGk_11())
                    }
                    dispatch(SetAwayTeam_gk2_energy())
                }else if(t2_gk2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible2Bool==true && subPlayerVisible1Bool==false){
                    alert(sub2_gk2_name + " " + sub2_gk2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible2Bool==true && subPlayerVisible1Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players3
    function GetTacticsPlayerSub3(){
        if(matchStartValueBool==false){
            GetTeamSub3_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueLb1())
            }else{
                dispatch(setAwayTeamGetValueLb2())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lb1_redCard==false && homeTeamSaveIndex_lb1==homeTeamIndex_lb1 && sub3_lb1_click!="✓"){
                    GetVisibilityHiddenLeftBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub3_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueLb1())
                    }
                    dispatch(SetHomeTeam_lb1_energy())
                }else if(t1_lb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible3Bool==true && subPlayerVisible4Bool==false){
                    alert(sub3_lb1_name + " " + sub3_lb1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible3Bool==true && subPlayerVisible4Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lb2_redCard==false && awayTeamSaveIndex_lb2==awayTeamIndex_lb2 && sub3_lb1_click!="✓"){
                    GetVisibilityHiddenLeftBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub3_click()
                    if(awaySideValue==true){
                        dispatch(setAwayTeamGetValueLb2())
                    }
                    dispatch(SetAwayTeam_lb2_energy())
                }else if(t2_lb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible3Bool==true && subPlayerVisible4Bool==false){
                    alert(sub3_lb1_name + " " + sub3_lb1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible3Bool==true && subPlayerVisible4Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players4
    function GetTacticsPlayerSub4(){
        if(matchStartValueBool==false){
            GetTeamSub4_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueLb_12())
            }else{
                dispatch(setAwayTeamGetValueLb_12())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lb1_redCard==false && homeTeamSaveIndex_lb1==homeTeamIndex_lb1 && sub4_lb2_click!="✓"){
                    GetVisibilityHiddenLeftBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub4_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueLb_12())
                    }else{
                        dispatch(setAwayTeamGetValueLb_12())
                    }
                    dispatch(SetHomeTeam_lb1_energy())
                }else if(t1_lb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible4Bool==true && subPlayerVisible3Bool==false){
                    alert(sub4_lb2_name + " " + sub4_lb2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible4Bool==true && subPlayerVisible3Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lb2_redCard==false && awayTeamSaveIndex_lb2==awayTeamIndex_lb2 && sub4_lb2_click!="✓"){
                    GetVisibilityHiddenLeftBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub4_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueLb_12())
                    }else{
                        dispatch(setAwayTeamGetValueLb_12())
                    }
                    dispatch(SetAwayTeam_lb2_energy())
                }else if(t2_lb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible4Bool==true && subPlayerVisible3Bool==false){
                    alert(sub4_lb2_name + " " + sub4_lb2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible4Bool==true && subPlayerVisible3Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players5
    function GetTacticsPlayerSub5(){
        if(matchStartValueBool==false){
            GetTeamSub5_click()
            if(homeSideValue==true){
                if(sub5_cb1_1_surname!=t1_cb2_surname){
                    dispatch(setHomeTeamGetValueCb1())
                }else {
                    alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayer)
                }
            }else{
                if(sub5_cb1_1_surname!=t2_cb3_surname){
                    dispatch(setAwayTeamGetValueCb4())
                }else {
                    alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb1_redCard==false && subPlayerVisible5Bool==false && homeTeamSaveIndex_cb1==homeTeamIndex_cb1 && homeTeamSaveIndex_cb1!=homeTeamIndex_cb2  && sub5_cb1_1_click!="✓"){
                    GetTeamSub5_click()
                    if(homeSideValue==true){
                        if(sub5_cb1_1_surname!=t1_cb2_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb1())
                        }else {
                            alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb1_energy())
                    }
                }else if(t1_cb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible5Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible7Bool==false || subPlayerVisible6Bool==false)){
                    alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible5Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible7Bool==true && subPlayerVisible6Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb4_redCard==false && subPlayerVisible5Bool==false && awayTeamSaveIndex_cb4==awayTeamIndex_cb4 && awayTeamSaveIndex_cb4!=awayTeamIndex_cb3 && sub5_cb1_1_click!="✓"){
                    GetTeamSub5_click()
                    if(awaySideValue==true){
                        if(sub5_cb1_1_surname!=t2_cb3_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb4())
                        }else {
                            alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb4_energy())
                    }
                }else if(t2_cb4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible5Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible7Bool==false || subPlayerVisible6Bool==false)){
                    alert(sub5_cb1_1_name + " " + sub5_cb1_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible5Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible7Bool==true && subPlayerVisible6Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players6
    function GetTacticsPlayerSub6(){
        if(matchStartValueBool==false){
            GetTeamSub6_click()
            if(homeSideValue==true){
                if(sub6_cb1_2_surname!=t1_cb2_surname){
                    dispatch(setHomeTeamGetValueCb1_4())
                }else {
                    alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub6_cb1_2_surname!=t2_cb3_surname){
                    dispatch(setAwayTeamGetValueCb4_4())
                }else {
                    alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb1_redCard==false && subPlayerVisible6Bool==false && homeTeamSaveIndex_cb1==homeTeamIndex_cb1 && homeTeamSaveIndex_cb1!=homeTeamIndex_cb2 && sub6_cb1_2_click!="✓"){
                    GetTeamSub6_click()
                    if(homeSideValue==true){
                        if(sub6_cb1_2_surname!=t1_cb2_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb1_4())
                        }else {
                            alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb1_energy())
                    }
                }else if(t1_cb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible6Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible7Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible6Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible7Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb4_redCard==false && subPlayerVisible6Bool==false && awayTeamSaveIndex_cb4==awayTeamIndex_cb4 && awayTeamSaveIndex_cb4!=awayTeamIndex_cb3 && sub6_cb1_2_click!="✓"){
                    GetTeamSub6_click()
                    if(awaySideValue==true) {
                        if(sub6_cb1_2_surname!=t2_cb3_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb4_4())
                        }else {
                            alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb4_energy())
                    }
                }else if(t2_cb4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible6Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible7Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub6_cb1_2_name + " " + sub6_cb1_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible6Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible7Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players7
    function GetTacticsPlayerSub7(){
        if(matchStartValueBool==false){
            GetTeamSub7_click()
            if(homeSideValue==true){
                if(sub7_cb1_3_surname!=t1_cb2_surname){
                    dispatch(setHomeTeamGetValueCb1_13())
                }else {
                    alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub7_cb1_3_surname!=t2_cb3_surname){
                    dispatch(setAwayTeamGetValueCb4_13())
                }else {
                    alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb1_redCard==false && subPlayerVisible7Bool==false && homeTeamSaveIndex_cb1==homeTeamIndex_cb1 && homeTeamSaveIndex_cb1!=homeTeamIndex_cb2 && sub7_cb1_3_click!="✓"){
                    GetTeamSub7_click()
                    if(homeSideValue==true){
                        if(sub7_cb1_3_surname!=t1_cb2_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb1_13())
                        }else {
                            alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb1_energy())
                    }
                }else if(t1_cb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible7Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible6Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible7Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible6Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb4_redCard==false && subPlayerVisible7Bool==false && awayTeamSaveIndex_cb4==awayTeamIndex_cb4 && awayTeamSaveIndex_cb4!=awayTeamIndex_cb3 && sub7_cb1_3_click!="✓"){
                    GetTeamSub7_click()
                    if(awaySideValue==true) {
                        if(sub7_cb1_3_surname!=t2_cb3_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb4_13())
                        }else {
                            alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb4_energy())
                    }
                }else if(t2_cb4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible7Bool==true && (subPlayerVisible8Bool==false || 
                    subPlayerVisible6Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub7_cb1_3_name + " " + sub7_cb1_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible7Bool==true && subPlayerVisible8Bool==true &&
                    subPlayerVisible6Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub players8
    function GetTacticsPlayerSub8(){
        if(matchStartValueBool==false){
            GetTeamSub8_click()
            if(homeSideValue==true){
                if(sub8_cb1_4_surname!=t1_cb2_surname){
                    dispatch(setHomeTeamGetValueCb1_14())
                }else {
                    alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub8_cb1_4_surname!=t2_cb3_surname){
                    dispatch(setAwayTeamGetValueCb4_14())
                }else {
                    alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb1_redCard==false && subPlayerVisible8Bool==false && homeTeamSaveIndex_cb1==homeTeamIndex_cb1 && homeTeamSaveIndex_cb1!=homeTeamIndex_cb2 && sub8_cb1_4_click!="✓"){
                    GetTeamSub8_click()
                    if(homeSideValue==true){
                        if(sub8_cb1_4_surname!=t1_cb2_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb1_14())
                        }else {
                            alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb1_energy())
                    }
                }else if(t1_cb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible8Bool==true && (subPlayerVisible7Bool==false || 
                    subPlayerVisible6Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible8Bool==true && subPlayerVisible7Bool==true &&
                    subPlayerVisible6Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb4_redCard==false && subPlayerVisible8Bool==false && awayTeamSaveIndex_cb4==awayTeamIndex_cb4 && awayTeamSaveIndex_cb4!=awayTeamIndex_cb3 && sub8_cb1_4_click!="✓"){
                    GetTeamSub8_click()
                    if(awaySideValue==true) {
                        if(sub8_cb1_4_surname!=t2_cb3_surname){
                            GetVisibilityHiddenLeftStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb4_14())
                        }else {
                            alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb4_energy())
                    }
                }else if(t2_cb4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible8Bool==true && (subPlayerVisible7Bool==false || 
                    subPlayerVisible6Bool==false || subPlayerVisible5Bool==false)){
                    alert(sub8_cb1_4_name + " " + sub8_cb1_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible8Bool==true && subPlayerVisible7Bool==true &&
                    subPlayerVisible6Bool==true && subPlayerVisible5Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player9
    function GetTacticsPlayerSub9(){
        if(matchStartValueBool==false){
            GetTeamSub9_click()
            if(homeSideValue==true){
                if(sub9_cb2_1_surname!=t1_cb1_surname){
                    dispatch(setHomeTeamGetValueCb2())
                }else {
                    alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub9_cb2_1_surname!=t2_cb4_surname){
                    dispatch(setAwayTeamGetValueCb3())
                }else {
                    alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb2_redCard==false && subPlayerVisible9Bool==false && homeTeamSaveIndex_cb2==homeTeamIndex_cb2 && homeTeamSaveIndex_cb2!=homeTeamIndex_cb1 && sub9_cb2_1_click!="✓"){
                    GetTeamSub9_click()
                    if(homeSideValue==true){
                        if(sub9_cb2_1_surname!=t1_cb1_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb2())
                        }else {
                            alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb2_energy())
                    }
                }else if(t1_cb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible9Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible11Bool==false || subPlayerVisible10Bool==false)){
                    alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible9Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible11Bool==true && subPlayerVisible10Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb3_redCard==false && subPlayerVisible9Bool==false && awayTeamSaveIndex_cb3==awayTeamIndex_cb3 && awayTeamSaveIndex_cb3!=awayTeamIndex_cb4 && sub9_cb2_1_click!="✓"){
                    GetTeamSub9_click()
                    if(awaySideValue==true) {
                        if(sub9_cb2_1_surname!=t2_cb4_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb3())
                        }else {
                            alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb3_energy())
                    }
                }else if(t2_cb3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible9Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible11Bool==false || subPlayerVisible10Bool==false)){
                    alert(sub9_cb2_1_name + " " + sub9_cb2_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible9Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible11Bool==true && subPlayerVisible10Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player10
    function GetTacticsPlayerSub10(){
        if(matchStartValueBool==false){
            GetTeamSub10_click()
            if(homeSideValue==true){
                if(sub10_cb2_2_surname!=t1_cb1_surname){
                    dispatch(setHomeTeamGetValueCb2_4())
                }else {
                    alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub10_cb2_2_surname!=t2_cb4_surname){
                    dispatch(setAwayTeamGetValueCb3_4())
                }else {
                    alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb2_redCard==false && subPlayerVisible10Bool==false && homeTeamSaveIndex_cb2==homeTeamIndex_cb2 && homeTeamSaveIndex_cb2!=homeTeamIndex_cb1 && sub10_cb2_2_click!="✓"){
                    GetTeamSub10_click()
                    if(homeSideValue==true){
                        if(sub10_cb2_2_surname!=t1_cb1_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb2_4())
                        }else {
                            alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb2_energy())
                    }
                }else if(t1_cb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible10Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible11Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible10Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible11Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb3_redCard==false && subPlayerVisible10Bool==false && awayTeamSaveIndex_cb3==awayTeamIndex_cb3 && awayTeamSaveIndex_cb3!=awayTeamIndex_cb4 && sub10_cb2_2_click!="✓"){
                    GetTeamSub10_click()
                    if(awaySideValue==true) {
                        if(sub10_cb2_2_surname!=t2_cb4_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb3_4())
                        }else {
                            alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb3_energy())
                    }
                }else if(t2_cb3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible10Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible11Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub10_cb2_2_name + " " + sub10_cb2_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible10Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible11Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player11
    function GetTacticsPlayerSub11(){
        if(matchStartValueBool==false){
            GetTeamSub11_click()
            if(homeSideValue==true){
                if(sub11_cb2_3_surname!=t1_cb1_surname){
                    dispatch(setHomeTeamGetValueCb2_13())
                }else {
                    alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub11_cb2_3_surname!=t2_cb4_surname){
                    dispatch(setAwayTeamGetValueCb3_13())
                }else {
                    alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb1_redCard==false && subPlayerVisible11Bool==false && homeTeamSaveIndex_cb2==homeTeamIndex_cb2 && homeTeamSaveIndex_cb2!=homeTeamIndex_cb1 && sub11_cb2_3_click!="✓"){
                    GetTeamSub11_click()
                    if(homeSideValue==true){
                        if(sub11_cb2_3_surname!=t1_cb1_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb2_13())
                        }else {
                            alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb2_energy())
                    }
                }else if(t1_cb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible11Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible10Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible11Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible10Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb3_redCard==false && subPlayerVisible11Bool==false && awayTeamSaveIndex_cb3==awayTeamIndex_cb3 && awayTeamSaveIndex_cb3!=awayTeamIndex_cb4 && sub11_cb2_3_click!="✓"){
                    GetTeamSub11_click()
                    if(awaySideValue==true) {
                        if(sub11_cb2_3_surname!=t2_cb4_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb3_13())
                        }else {
                            alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb3_energy())
                    }
                }else if(t2_cb3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible11Bool==true && (subPlayerVisible12Bool==false || 
                    subPlayerVisible10Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub11_cb2_3_name + " " + sub11_cb2_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible11Bool==true && subPlayerVisible12Bool==true &&
                    subPlayerVisible10Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player12
    function GetTacticsPlayerSub12(){
        if(matchStartValueBool==false){
            GetTeamSub12_click()
            if(homeSideValue==true){
                if(sub12_cb2_4_surname!=t1_cb1_surname){
                    dispatch(setHomeTeamGetValueCb2_14())
                }else {
                    alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub12_cb2_4_surname!=t2_cb4_surname){
                    dispatch(setAwayTeamGetValueCb3_14())
                }else {
                    alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cb2_redCard==false && subPlayerVisible12Bool==false && homeTeamSaveIndex_cb2==homeTeamIndex_cb2 && homeTeamSaveIndex_cb2!=homeTeamIndex_cb1 && sub12_cb2_4_click!="✓"){
                    GetTeamSub12_click()
                    if(homeSideValue==true){
                        if(sub12_cb2_4_surname!=t1_cb1_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb2_14())
                        }else {
                            alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cb2_energy())
                    }
                }else if(t1_cb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible12Bool==true && (subPlayerVisible11Bool==false || 
                    subPlayerVisible10Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible12Bool==true && subPlayerVisible11Bool==true &&
                    subPlayerVisible10Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cb3_redCard==false && subPlayerVisible12Bool==false && awayTeamSaveIndex_cb3==awayTeamIndex_cb3 && awayTeamSaveIndex_cb3!=awayTeamIndex_cb4 && sub12_cb2_4_click!="✓"){
                    GetTeamSub12_click()
                    if(homeSideValue==true){
                        if(sub12_cb2_4_surname!=t1_cb1_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCb2_14())
                        }else {
                            alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayer)
                        }
                    }if(awaySideValue==true) {
                        if(sub12_cb2_4_surname!=t2_cb4_surname){
                            GetVisibilityHiddenRightStopers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCb3_14())
                        }else {
                            alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cb3_energy())
                    }
                }else if(t2_cb3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible12Bool==true && (subPlayerVisible11Bool==false || 
                    subPlayerVisible10Bool==false || subPlayerVisible9Bool==false)){
                    alert(sub12_cb2_4_name + " " + sub12_cb2_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible12Bool==true && subPlayerVisible11Bool==true &&
                    subPlayerVisible10Bool==true && subPlayerVisible9Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player13
    function GetTacticsPlayerSub13(){
        if(matchStartValueBool==false){
            GetTeamSub13_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueRb1())
            }else {
                dispatch(setAwayTeamGetValueRb2())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rb1_redCard==false && subPlayerVisible13Bool==false && homeTeamSaveIndex_rb1==homeTeamIndex_rb1 && sub13_rb1_click!="✓"){
                    GetVisibilityHiddenRightBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub13_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueRb1())
                    }
                    dispatch(SetHomeTeam_rb1_energy())
                }else if(t1_rb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible13Bool==true && subPlayerVisible14Bool==false){
                    alert(sub13_rb1_name + " " + sub13_rb1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible13Bool==true && subPlayerVisible14Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rb2_redCard==false && subPlayerVisible13Bool==false && awayTeamSaveIndex_rb2==awayTeamIndex_rb2 && sub13_rb1_click!="✓"){
                    GetVisibilityHiddenRightBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub13_click()
                    if(awaySideValue==true) {
                        dispatch(setAwayTeamGetValueRb2())
                    }
                    dispatch(SetAwayTeam_rb2_energy())
                }else if(t2_rb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible13Bool==true && subPlayerVisible14Bool==false){
                    alert(sub13_rb1_name + " " + sub13_rb1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible13Bool==true && subPlayerVisible14Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player14
    function GetTacticsPlayerSub14(){
        if(matchStartValueBool==false){
            GetTeamSub14_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueRb_15())
            }else {
                dispatch(setAwayTeamGetValueRb_15())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rb1_redCard==false && subPlayerVisible14Bool==false && homeTeamSaveIndex_rb1==homeTeamIndex_rb1 && sub14_rb2_click!="✓"){
                    GetVisibilityHiddenRightBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub14_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueRb_15())
                    }
                    dispatch(SetHomeTeam_rb1_energy())
                }else if(t1_rb1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible14Bool==true && subPlayerVisible13Bool==false){
                    alert(sub14_rb2_name + " " + sub14_rb2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible14Bool==true && subPlayerVisible13Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rb2_redCard==false && subPlayerVisible14Bool==false && awayTeamSaveIndex_rb2==awayTeamIndex_rb2 && sub14_rb2_click!="✓"){
                    GetVisibilityHiddenRightBacks()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub14_click()
                    if(awaySideValue==true) {
                        dispatch(setAwayTeamGetValueRb_15())
                    }
                    dispatch(SetAwayTeam_rb2_energy())
                }else if(t2_rb2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible14Bool==true && subPlayerVisible13Bool==false){
                    alert(sub14_rb2_name + " " + sub14_rb2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible14Bool==true && subPlayerVisible13Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player15
    function GetTacticsPlayerSub15(){
        if(matchStartValueBool==false){
            GetTeamSub15_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueDm1())
            }else {
                dispatch(setAwayTeamGetValueDm2())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_dm1_redCard==false && subPlayerVisible15Bool==false && homeTeamSaveIndex_dm1==homeTeamIndex_dm1 && sub15_dm1_click!="✓"){
                    GetVisibilityHiddenDefensiveMidfielder()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub15_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueDm1())
                    }
                    dispatch(SetHomeTeam_dm1_energy())
                }else if(t1_dm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible15Bool==true && subPlayerVisible16Bool==false){
                    alert(sub15_dm1_name + " " + sub15_dm1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible15Bool==true && subPlayerVisible16Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_dm2_redCard==false && subPlayerVisible15Bool==false && awayTeamSaveIndex_dm2==awayTeamIndex_dm2 && sub15_dm1_click!="✓"){
                    GetVisibilityHiddenDefensiveMidfielder()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub15_click()
                    if(awaySideValue==true) {
                        dispatch(setAwayTeamGetValueDm2())
                    }
                    dispatch(SetAwayTeam_dm2_energy())
                }else if(t2_dm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible15Bool==true && subPlayerVisible16Bool==false){
                    alert(sub15_dm1_name + " " + sub15_dm1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible15Bool==true && subPlayerVisible16Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player16
    function GetTacticsPlayerSub16(){
        if(matchStartValueBool==false){
            GetTeamSub16_click()
            if(homeSideValue==true){
                dispatch(setHomeTeamGetValueDm_16())
            }else {
                dispatch(setAwayTeamGetValueDm_16())
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_dm1_redCard==false && subPlayerVisible16Bool==false && homeTeamSaveIndex_dm1==homeTeamIndex_dm1 && sub16_dm2_click!="✓"){
                    GetVisibilityHiddenDefensiveMidfielder()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub16_click()
                    if(homeSideValue==true){
                        dispatch(setHomeTeamGetValueDm_16())
                    }
                    dispatch(SetHomeTeam_dm1_energy())
                }else if(t1_dm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible16Bool==true && subPlayerVisible15Bool==false){
                    alert(sub16_dm2_name + " " + sub16_dm2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible16Bool==true && subPlayerVisible15Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_dm2_redCard==false && subPlayerVisible16Bool==false && awayTeamSaveIndex_dm2==awayTeamIndex_dm2 && sub16_dm2_click!="✓"){
                    GetVisibilityHiddenDefensiveMidfielder()
                    dispatch(GetRightPlayerChange_Sour())
                    GetTeamSub16_click()
                    if(awaySideValue==true) {
                        dispatch(setAwayTeamGetValueDm_16())
                    }
                    dispatch(SetAwayTeam_dm2_energy())
                }else if(t2_dm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible16Bool==true && subPlayerVisible15Bool==false){
                    alert(sub16_dm2_name + " " + sub16_dm2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible16Bool==true && subPlayerVisible15Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player17
    function GetTacticsPlayerSub17(){
        if(matchStartValueBool==false){
            GetTeamSub17_click()
            if(homeSideValue==true){
                if(sub17_cm1_1_surname!=t1_cm2_surname && sub17_cm1_1_surname!=t1_lw1_surname && sub17_cm1_1_surname!=t1_rw1_surname && sub17_cm1_1_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm1())
                }else {
                    alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub17_cm1_1_surname!=t2_cm3_surname && sub17_cm1_1_surname!=t2_lw2_surname && sub17_cm1_1_surname!=t2_rw2_surname && sub17_cm1_1_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm4())
                }else {
                    alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm1_redCard==false && subPlayerVisible17Bool==false && homeTeamSaveIndex_cm1==homeTeamIndex_cm1 && homeTeamSaveIndex_cm1!=homeTeamIndex_cm2 && sub17_cm1_1_click!="✓"){
                    GetTeamSub17_click()
                    if(homeSideValue==true){
                        if(sub17_cm1_1_surname!=t1_cm2_surname && sub17_cm1_1_surname!=t1_lw1_surname && sub17_cm1_1_surname!=t1_rw1_surname && sub17_cm1_1_surname!=t1_st1_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm1())
                        }else {
                            alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm1_energy())
                    }
                }else if(t1_cm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible17Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible19Bool==false || 
                    subPlayerVisible18Bool==false)){
                    alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible17Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible19Bool==true && 
                    subPlayerVisible18Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm4_redCard==false && subPlayerVisible17Bool==false && awayTeamSaveIndex_cm4==awayTeamIndex_cm4 && awayTeamSaveIndex_cm4!=awayTeamIndex_cm3 && sub17_cm1_1_click!="✓"){
                    GetTeamSub17_click()
                    if(awaySideValue==true) {
                        if(sub17_cm1_1_surname!=t2_cm3_surname && sub17_cm1_1_surname!=t2_lw2_surname && sub17_cm1_1_surname!=t2_rw2_surname && sub17_cm1_1_surname!=t2_st2_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm4())
                        }else {
                            alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm4_energy())
                    }
                }else if(t2_cm4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible17Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible19Bool==false || 
                    subPlayerVisible18Bool==false)){
                    alert(sub17_cm1_1_name + " " + sub17_cm1_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible17Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible19Bool==true && 
                    subPlayerVisible18Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player18
    function GetTacticsPlayerSub18(){
        if(matchStartValueBool==false){
            GetTeamSub18_click()
            if(homeSideValue==true){
                if(sub18_cm1_2_surname!=t1_cm2_surname && sub18_cm1_2_surname!=t1_lw1_surname && sub18_cm1_2_surname!=t1_rw1_surname && sub18_cm1_2_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm1_7())
                }else {
                    alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub18_cm1_2_surname!=t2_cm3_surname && sub18_cm1_2_surname!=t2_lw2_surname && sub18_cm1_2_surname!=t2_rw2_surname && sub18_cm1_2_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm4_7())
                }else {
                    alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm1_redCard==false && subPlayerVisible18Bool==false && homeTeamSaveIndex_cm1==homeTeamIndex_cm1 && homeTeamSaveIndex_cm1!=homeTeamIndex_cm2 && sub18_cm1_2_click!="✓"){
                    GetTeamSub18_click()
                    if(homeSideValue==true){
                        if(sub18_cm1_2_surname!=t1_cm2_surname && sub18_cm1_2_surname!=t1_lw1_surname && sub18_cm1_2_surname!=t1_rw1_surname && sub18_cm1_2_surname!=t1_st1_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm1_7())
                        }else {
                            alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm1_energy())
                    }
                }else if(t1_cm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible18Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible19Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible18Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible19Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm4_redCard==false && subPlayerVisible18Bool==false && awayTeamSaveIndex_cm4==awayTeamIndex_cm4 && awayTeamSaveIndex_cm4!=awayTeamIndex_cm3 && sub18_cm1_2_click!="✓"){
                    GetTeamSub18_click()
                    if(awaySideValue==true) {
                        if(sub18_cm1_2_surname!=t2_cm3_surname && sub18_cm1_2_surname!=t2_lw2_surname && sub18_cm1_2_surname!=t2_rw2_surname && sub18_cm1_2_surname!=t2_st2_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm4_7())
                        }else {
                            alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm4_energy())
                    }
                }else if(t2_cm4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible18Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible19Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub18_cm1_2_name + " " + sub18_cm1_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible18Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible19Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player19
    function GetTacticsPlayerSub19(){
        if(matchStartValueBool==false){
            GetTeamSub19_click()
            if(homeSideValue==true){
                if(sub19_cm1_3_surname!=t1_cm2_surname && sub19_cm1_3_surname!=t1_lw1_surname && sub19_cm1_3_surname!=t1_rw1_surname && sub19_cm1_3_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm1_17())
                }else {
                    alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub19_cm1_3_surname!=t2_cm3_surname && sub19_cm1_3_surname!=t2_lw2_surname && sub19_cm1_3_surname!=t2_rw2_surname && sub19_cm1_3_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm4_17())
                }else {
                    alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm1_redCard==false && subPlayerVisible19Bool==false && homeTeamSaveIndex_cm1==homeTeamIndex_cm1 && homeTeamSaveIndex_cm1!=homeTeamIndex_cm2 && sub19_cm1_3_click!="✓"){
                    GetTeamSub19_click()
                    if(homeSideValue==true){
                        if(sub19_cm1_3_surname!=t1_cm2_surname && sub19_cm1_3_surname!=t1_lw1_surname && sub19_cm1_3_surname!=t1_rw1_surname && sub19_cm1_3_surname!=t1_st1_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm1_17())
                        }else {
                            alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm1_energy())
                    }
                }else if(t1_cm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible19Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible19Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm4_redCard==false && subPlayerVisible19Bool==false && awayTeamSaveIndex_cm4==awayTeamIndex_cm4 && awayTeamSaveIndex_cm4!=awayTeamIndex_cm3 && sub19_cm1_3_click!="✓"){
                    GetTeamSub19_click()
                    if(awaySideValue==true) {
                        if(sub19_cm1_3_surname!=t2_cm3_surname && sub19_cm1_3_surname!=t2_lw2_surname && sub19_cm1_3_surname!=t2_rw2_surname && sub19_cm1_3_surname!=t2_st2_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm4_17())
                        }else {
                            alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm4_energy())
                    }
                }else if(t2_cm4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible19Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible20Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub19_cm1_3_name + " " + sub19_cm1_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible19Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible20Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player20
    function GetTacticsPlayerSub20(){
        if(matchStartValueBool==false){
            GetTeamSub20_click()
            if(homeSideValue==true){
                if(sub20_cm1_4_surname!=t1_cm2_surname && sub20_cm1_4_surname!=t1_lw1_surname && sub20_cm1_4_surname!=t1_rw1_surname && sub20_cm1_4_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm1_18())
                }else {
                    alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub20_cm1_4_surname!=t2_cm3_surname && sub20_cm1_4_surname!=t2_lw2_surname && sub20_cm1_4_surname!=t2_rw2_surname && sub20_cm1_4_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm4_18())
                }else {
                    alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm1_redCard==false && subPlayerVisible20Bool==false && homeTeamSaveIndex_cm1==homeTeamIndex_cm1 && homeTeamSaveIndex_cm1!=homeTeamIndex_cm2 && sub20_cm1_4_click!="✓"){
                    GetTeamSub20_click()
                    if(homeSideValue==true){
                        if(sub20_cm1_4_surname!=t1_cm2_surname && sub20_cm1_4_surname!=t1_lw1_surname && sub20_cm1_4_surname!=t1_rw1_surname && sub20_cm1_4_surname!=t1_st1_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm1_18())
                        }else {
                            alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm1_energy())
                    }
                }else if(t1_cm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible20Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible19Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible20Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible19Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm4_redCard==false && subPlayerVisible20Bool==false && awayTeamSaveIndex_cm4==awayTeamIndex_cm4 && awayTeamSaveIndex_cm4!=awayTeamIndex_cm3 && sub20_cm1_4_click!="✓"){
                    GetTeamSub20_click()
                    if(awaySideValue==true) {
                        if(sub20_cm1_4_surname!=t2_cm3_surname && sub20_cm1_4_surname!=t2_lw2_surname && sub20_cm1_4_surname!=t2_rw2_surname && sub20_cm1_4_surname!=t2_st2_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm4_18())
                        }else {
                            alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm4_energy())
                    }
                }else if(t2_cm4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible20Bool==true && (subPlayerVisible21Bool==false ||
                    subPlayerVisible19Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub20_cm1_4_name + " " + sub20_cm1_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible20Bool==true && subPlayerVisible21Bool==true &&
                    subPlayerVisible19Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player21
    function GetTacticsPlayerSub21(){
        if(matchStartValueBool==false){
            GetTeamSub21_click()
            if(homeSideValue==true){
                if(sub21_cm1_5_surname!=t1_cm2_surname && sub21_cm1_5_surname!=t1_lw1_surname && sub21_cm1_5_surname!=t1_rw1_surname && sub21_cm1_5_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm1_19())
                }else {
                    alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub21_cm1_5_surname!=t2_cm3_surname && sub21_cm1_5_surname!=t2_lw2_surname && sub21_cm1_5_surname!=t2_rw2_surname && sub21_cm1_5_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm4_19())
                }else {
                    alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm1_redCard==false && subPlayerVisible21Bool==false && homeTeamSaveIndex_cm1==homeTeamIndex_cm1 && homeTeamSaveIndex_cm1!=homeTeamIndex_cm2 && sub21_cm1_5_click!="✓"){
                    GetTeamSub21_click()
                    if(homeSideValue==true){
                        if(sub21_cm1_5_surname!=t1_cm2_surname && sub21_cm1_5_surname!=t1_lw1_surname && sub21_cm1_5_surname!=t1_rw1_surname && sub21_cm1_5_surname!=t1_st1_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm1_19())
                        }else {
                            alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm1_energy())
                    }
                }else if(t1_cm1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible21Bool==true && (subPlayerVisible20Bool==false ||
                    subPlayerVisible19Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible21Bool==true && subPlayerVisible20Bool==true &&
                    subPlayerVisible19Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm4_redCard==false && subPlayerVisible21Bool==false && awayTeamSaveIndex_cm4==awayTeamIndex_cm4 && awayTeamSaveIndex_cm4!=awayTeamIndex_cm3 && sub21_cm1_5_click!="✓"){
                    GetTeamSub21_click()
                    if(awaySideValue==true) {
                        if(sub21_cm1_5_surname!=t2_cm3_surname && sub21_cm1_5_surname!=t2_lw2_surname && sub21_cm1_5_surname!=t2_rw2_surname && sub21_cm1_5_surname!=t2_st2_surname){
                            GetVisibilityHiddenLeftMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm4_19())
                        }else {
                            alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm4_energy())
                    }
                }else if(t2_cm4_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible21Bool==true && (subPlayerVisible20Bool==false ||
                    subPlayerVisible19Bool==false || subPlayerVisible18Bool==false || 
                    subPlayerVisible17Bool==false)){
                    alert(sub21_cm1_5_name + " " + sub21_cm1_5_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible21Bool==true && subPlayerVisible20Bool==true &&
                    subPlayerVisible19Bool==true && subPlayerVisible18Bool==true && 
                    subPlayerVisible17Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player22
    function GetTacticsPlayerSub22(){
        if(matchStartValueBool==false){
            GetTeamSub22_click()
            if(homeSideValue==true){
                if(sub22_cm2_1_surname!=t1_cm1_surname && sub22_cm2_1_surname!=t1_lw1_surname && sub22_cm2_1_surname!=t1_rw1_surname && sub22_cm2_1_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm2())
                }else {
                    alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub22_cm2_1_surname!=t2_cm4_surname && sub22_cm2_1_surname!=t2_lw2_surname && sub22_cm2_1_surname!=t2_rw2_surname && sub22_cm2_1_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm3())
                }else {
                    alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm2_redCard==false && subPlayerVisible22Bool==false && homeTeamSaveIndex_cm2==homeTeamIndex_cm2 && homeTeamSaveIndex_cm2!=homeTeamIndex_cm1 && sub22_cm2_1_click!="✓"){
                    GetTeamSub22_click()
                    if(homeSideValue==true){
                        if(sub22_cm2_1_surname!=t1_cm1_surname && sub22_cm2_1_surname!=t1_lw1_surname && sub22_cm2_1_surname!=t1_rw1_surname && sub22_cm2_1_surname!=t1_st1_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm2())
                        }else {
                            alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm2_energy())
                    }
                }else if(t1_cm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible22Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible24Bool==false || 
                    subPlayerVisible23Bool==false)){
                    alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible22Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible24Bool==true && 
                    subPlayerVisible23Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm3_redCard==false && subPlayerVisible22Bool==false && awayTeamSaveIndex_cm3==awayTeamIndex_cm3 && awayTeamSaveIndex_cm3!=awayTeamIndex_cm4 && sub22_cm2_1_click!="✓"){
                    GetTeamSub22_click()
                    if(awaySideValue==true) {
                        if(sub22_cm2_1_surname!=t2_cm4_surname && sub22_cm2_1_surname!=t2_lw2_surname && sub22_cm2_1_surname!=t2_rw2_surname && sub22_cm2_1_surname!=t2_st2_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm3())
                        }else {
                            alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm3_energy())
                    }
                }else if(t2_cm3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible22Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible24Bool==false || 
                    subPlayerVisible23Bool==false)){
                    alert(sub22_cm2_1_name + " " + sub22_cm2_1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible22Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible24Bool==true && 
                    subPlayerVisible23Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player23
    function GetTacticsPlayerSub23(){
        if(matchStartValueBool==false){
            GetTeamSub23_click()
            if(homeSideValue==true){
                if(sub23_cm2_2_surname!=t1_cm1_surname && sub23_cm2_2_surname!=t1_lw1_surname && sub23_cm2_2_surname!=t1_rw1_surname && sub23_cm2_2_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm2_6())
                }else {
                    alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub23_cm2_2_surname!=t2_cm4_surname && sub23_cm2_2_surname!=t2_lw2_surname && sub23_cm2_2_surname!=t2_rw2_surname && sub23_cm2_2_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm3_6())
                }else {
                    alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm2_redCard==false && subPlayerVisible23Bool==false && homeTeamSaveIndex_cm2==homeTeamIndex_cm2 && homeTeamSaveIndex_cm2!=homeTeamIndex_cm1 && sub23_cm2_2_click!="✓"){
                    GetTeamSub23_click()
                    if(homeSideValue==true){
                        if(sub23_cm2_2_surname!=t1_cm1_surname && sub23_cm2_2_surname!=t1_lw1_surname && sub23_cm2_2_surname!=t1_rw1_surname && sub23_cm2_2_surname!=t1_st1_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm2_6())
                        }else {
                            alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm2_energy())
                    }
                }else if(t1_cm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible23Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible24Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible23Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible24Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm3_redCard==false && subPlayerVisible23Bool==false && awayTeamSaveIndex_cm3==awayTeamIndex_cm3 && awayTeamSaveIndex_cm3!=awayTeamIndex_cm4 && sub23_cm2_2_click!="✓"){
                    GetTeamSub23_click()
                    if(awaySideValue==true) {
                        if(sub23_cm2_2_surname!=t2_cm4_surname && sub23_cm2_2_surname!=t2_lw2_surname && sub23_cm2_2_surname!=t2_rw2_surname && sub23_cm2_2_surname!=t2_st2_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm3_6())
                        }else {
                            alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm3_energy())
                    }
                }else if(t2_cm3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible23Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible24Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub23_cm2_2_name + " " + sub23_cm2_2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible23Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible24Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player24
    function GetTacticsPlayerSub24(){
        if(matchStartValueBool==false){
            GetTeamSub24_click()
            if(homeSideValue==true){
                if(sub24_cm2_3_surname!=t1_cm1_surname && sub24_cm2_3_surname!=t1_lw1_surname && sub24_cm2_3_surname!=t1_rw1_surname && sub24_cm2_3_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm2_17())
                }else {
                    alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub24_cm2_3_surname!=t2_cm4_surname && sub24_cm2_3_surname!=t2_lw2_surname && sub24_cm2_3_surname!=t2_rw2_surname && sub24_cm2_3_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm3_17())
                }else {
                    alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm2_redCard==false && subPlayerVisible24Bool==false && homeTeamSaveIndex_cm2==homeTeamIndex_cm2 && homeTeamSaveIndex_cm2!=homeTeamIndex_cm1 && sub24_cm2_3_click!="✓"){
                    GetTeamSub24_click()
                    if(homeSideValue==true){
                        if(sub24_cm2_3_surname!=t1_cm1_surname && sub24_cm2_3_surname!=t1_lw1_surname && sub24_cm2_3_surname!=t1_rw1_surname && sub24_cm2_3_surname!=t1_st1_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm2_17())
                        }else {
                            alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm2_energy())
                    }
                }else if(t1_cm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible24Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible24Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm3_redCard==false && subPlayerVisible24Bool==false && awayTeamSaveIndex_cm3==awayTeamIndex_cm3 && awayTeamSaveIndex_cm3!=awayTeamIndex_cm4 && sub24_cm2_3_click!="✓"){
                    GetTeamSub24_click()
                    if(awaySideValue==true) {
                        if(sub24_cm2_3_surname!=t2_cm4_surname && sub24_cm2_3_surname!=t2_lw2_surname && sub24_cm2_3_surname!=t2_rw2_surname && sub24_cm2_3_surname!=t2_st2_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm3_17())
                        }else {
                            alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm3_energy())
                    }
                }else if(t2_cm3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible24Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible25Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub24_cm2_3_name + " " + sub24_cm2_3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible24Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible25Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player25
    function GetTacticsPlayerSub25(){
        if(matchStartValueBool==false){
            GetTeamSub25_click()
            if(homeSideValue==true){
                if(sub25_cm2_4_surname!=t1_cm1_surname && sub25_cm2_4_surname!=t1_lw1_surname && sub25_cm2_4_surname!=t1_rw1_surname && sub25_cm2_4_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm2_18())
                }else {
                    alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub25_cm2_4_surname!=t2_cm4_surname && sub25_cm2_4_surname!=t2_lw2_surname && sub25_cm2_4_surname!=t2_rw2_surname && sub25_cm2_4_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm3_18())
                }else {
                    alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm2_redCard==false && subPlayerVisible25Bool==false && homeTeamSaveIndex_cm2==homeTeamIndex_cm2 && homeTeamSaveIndex_cm2!=homeTeamIndex_cm1 && sub25_cm2_4_click!="✓"){
                    GetTeamSub25_click()
                    if(homeSideValue==true){
                        if(sub25_cm2_4_surname!=t1_cm1_surname && sub25_cm2_4_surname!=t1_lw1_surname && sub25_cm2_4_surname!=t1_rw1_surname && sub25_cm2_4_surname!=t1_st1_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm2_18())
                        }else {
                            alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm2_energy())
                    }
                }else if(t1_cm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible25Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible24Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible25Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible24Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm3_redCard==false && subPlayerVisible25Bool==false && awayTeamSaveIndex_cm3==awayTeamIndex_cm3 && awayTeamSaveIndex_cm3!=awayTeamIndex_cm4 && sub25_cm2_4_click!="✓"){
                    GetTeamSub25_click()
                    if(awaySideValue==true) {
                        if(sub25_cm2_4_surname!=t2_cm4_surname && sub25_cm2_4_surname!=t2_lw2_surname && sub25_cm2_4_surname!=t2_rw2_surname && sub25_cm2_4_surname!=t2_st2_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm3_18())
                        }else {
                            alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm3_energy())
                    }
                }else if(t2_cm3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible25Bool==true && (subPlayerVisible26Bool==false ||
                    subPlayerVisible24Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub25_cm2_4_name + " " + sub25_cm2_4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible25Bool==true && subPlayerVisible26Bool==true &&
                    subPlayerVisible24Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player26
    function GetTacticsPlayerSub26(){
        if(matchStartValueBool==false){
            GetTeamSub26_click()
            if(homeSideValue==true){
                if(sub26_cm2_5_surname!=t1_cm1_surname && sub26_cm2_5_surname!=t1_lw1_surname && sub26_cm2_5_surname!=t1_rw1_surname && sub26_cm2_5_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueCm2_19())
                }else {
                    alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub26_cm2_5_surname!=t2_cm4_surname && sub26_cm2_5_surname!=t2_lw2_surname && sub26_cm2_5_surname!=t2_rw2_surname && sub26_cm2_5_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueCm3_19())
                }else {
                    alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_cm2_redCard==false && subPlayerVisible26Bool==false && homeTeamSaveIndex_cm2==homeTeamIndex_cm2 && homeTeamSaveIndex_cm2!=homeTeamIndex_cm1 && sub26_cm2_5_click!="✓"){
                    GetTeamSub26_click()
                    if(homeSideValue==true){
                        if(sub26_cm2_5_surname!=t1_cm1_surname && sub26_cm2_5_surname!=t1_lw1_surname && sub26_cm2_5_surname!=t1_rw1_surname && sub26_cm2_5_surname!=t1_st1_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueCm2_19())
                        }else {
                            alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_cm2_energy())
                    }
                }else if(t1_cm2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible26Bool==true && (subPlayerVisible25Bool==false ||
                    subPlayerVisible24Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible26Bool==true && subPlayerVisible25Bool==true &&
                    subPlayerVisible24Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_cm3_redCard==false && subPlayerVisible26Bool==false && awayTeamSaveIndex_cm3==awayTeamIndex_cm3 && awayTeamSaveIndex_cm3!=awayTeamIndex_cm4 && sub26_cm2_5_click!="✓"){
                    GetTeamSub26_click()
                    if(awaySideValue==true) {
                        if(sub26_cm2_5_surname!=t2_cm4_surname && sub26_cm2_5_surname!=t2_lw2_surname && sub26_cm2_5_surname!=t2_rw2_surname && sub26_cm2_5_surname!=t2_st2_surname){
                            GetVisibilityHiddenRightMidfielder()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueCm3_19())
                        }else {
                            alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_cm3_energy())
                    }
                }else if(t2_cm3_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible26Bool==true && (subPlayerVisible25Bool==false ||
                    subPlayerVisible24Bool==false || subPlayerVisible23Bool==false || 
                    subPlayerVisible22Bool==false)){
                    alert(sub26_cm2_5_name + " " + sub26_cm2_5_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible26Bool==true && subPlayerVisible25Bool==true &&
                    subPlayerVisible24Bool==true && subPlayerVisible23Bool==true && 
                    subPlayerVisible22Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player27
    function GetTacticsPlayerSub27(){
        if(matchStartValueBool==false){
            GetTeamSub27_click()
            if(homeSideValue==true){
                if(sub27_lw1_surname!=t1_cm1_surname && sub27_lw1_surname!=t1_cm2_surname && sub27_lw1_surname!=t1_lw1_surname && sub27_lw1_surname!=t1_rw1_surname && sub27_lw1_surname!=t1_st1_surname){
                    dispatch(setHomeTeamGetValueLw1())
                }else {
                    alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub27_lw1_surname!=t2_cm4_surname && sub27_lw1_surname!=t2_cm3_surname && sub27_lw1_surname!=t2_lw2_surname && sub27_lw1_surname!=t2_rw2_surname && sub27_lw1_surname!=t2_st2_surname){
                    dispatch(setAwayTeamGetValueLw2())
                }else {
                    alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lw1_redCard==false && subPlayerVisible27Bool==false &&  homeTeamSaveIndex_lw1==homeTeamIndex_lw1 && homeTeamSaveIndex_lw1!=homeTeamIndex_rw1 && sub27_lw1_click!="✓"){
                    if(homeSideValue==true){
                        if(sub27_lw1_surname!=t1_cm1_surname && sub27_lw1_surname!=t1_cm2_surname && sub27_lw1_surname!=t1_lw1_surname && sub27_lw1_surname!=t1_rw1_surname && sub27_lw1_surname!=t1_st1_surname){
                            GetTeamSub27_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueLw1())
                        }else {
                            alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_lw1_energy())
                    }
                }else if(t1_lw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible27Bool==true && (subPlayerVisible28Bool==false ||
                    subPlayerVisible29Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible27Bool==true && subPlayerVisible28Bool==true &&
                    subPlayerVisible29Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lw2_redCard==false && subPlayerVisible27Bool==false && awayTeamSaveIndex_lw2==awayTeamIndex_lw2 && awayTeamSaveIndex_lw2!=awayTeamIndex_rw2 && sub27_lw1_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub27_lw1_surname!=t2_cm4_surname && sub27_lw1_surname!=t2_cm3_surname && sub27_lw1_surname!=t2_lw2_surname && sub27_lw1_surname!=t2_rw2_surname && sub27_lw1_surname!=t2_st2_surname){
                            GetTeamSub27_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueLw2())
                        }else {
                            alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_lw2_energy())
                    }
                }else if(t2_lw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible27Bool==true && (subPlayerVisible28Bool==false ||
                    subPlayerVisible29Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub27_lw1_name + " " + sub27_lw1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible27Bool==true && subPlayerVisible28Bool==true &&
                    subPlayerVisible29Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player28
    function GetTacticsPlayerSub28(){
        if(matchStartValueBool==false){
            GetTeamSub28_click()
            if(homeSideValue==true){
                if(sub28_lw2_surname!=t1_cm1_surname && sub28_lw2_surname!=t1_cm2_surname && sub28_lw2_surname!=t1_lw1_surname && sub28_lw2_surname!=t1_rw1_surname && sub28_lw2_surname!=t1_st1_surname){
                    dispatch(setHomeTeamValueLw2Click())
                    if(sub28_lw2_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueLw1_6())
                    }else if(sub28_lw2_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueLw1_7())
                    }else if(sub28_lw2_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueLw1_17())
                    }else if(sub28_lw2_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueLw1_18())
                    }else if(sub28_lw2_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueLw1_19())
                    }else if(sub28_lw2_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueLw1_9())
                    }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_20())   
                    }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_21())   
                    }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_22())   
                    }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_23())   
                    }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_24())   
                    }
                } 
                else {
                    alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub28_lw2_surname!=t2_cm4_surname && sub28_lw2_surname!=t2_cm3_surname && sub28_lw2_surname!=t2_lw2_surname && sub28_lw2_surname!=t2_rw2_surname && sub28_lw2_surname!=t2_st2_surname){
                    dispatch(setAwayTeamValueLw2Click())
                    if(sub28_lw2_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueLw2_6())
                    }else if(sub28_lw2_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueLw2_7())
                    }else if(sub28_lw2_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueLw2_17())
                    }else if(sub28_lw2_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueLw2_18())
                    }else if(sub28_lw2_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueLw2_19())
                    }else if(sub28_lw2_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueLw2_9())
                    }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_20())   
                    }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_21())   
                    }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_22())   
                    }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_23())   
                    }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_24())   
                    }
                }else {
                    alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lw1_redCard==false && subPlayerVisible28Bool==false && homeTeamSaveIndex_lw1==homeTeamIndex_lw1 && homeTeamSaveIndex_lw1!=homeTeamIndex_rw1 && sub28_lw2_click!="✓"){
                    if(homeSideValue==true){
                        if(sub28_lw2_surname!=t1_cm1_surname && sub28_lw2_surname!=t1_cm2_surname && sub28_lw2_surname!=t1_lw1_surname && sub28_lw2_surname!=t1_rw1_surname && sub28_lw2_surname!=t1_st1_surname){
                            GetTeamSub28_click()
                            dispatch(setHomeTeamValueLw2Click())
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            if(sub28_lw2_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueLw1_6())
                            }else if(sub28_lw2_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueLw1_7())
                            }else if(sub28_lw2_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueLw1_17())
                            }else if(sub28_lw2_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueLw1_18())
                            }else if(sub28_lw2_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueLw1_19())
                            }else if(sub28_lw2_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueLw1_9())
                            }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_20())   
                            }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_21())   
                            }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_22())   
                            }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_23())   
                            }else if(sub28_lw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_24())   
                            }
                        } 
                        else {
                            alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_lw1_energy())
                    }
                }else if(t1_lw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible28Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible29Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible28Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible29Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lw2_redCard==false && subPlayerVisible28Bool==false && awayTeamSaveIndex_lw2==awayTeamIndex_lw2 && awayTeamSaveIndex_lw2!=awayTeamIndex_rw2 && sub28_lw2_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub28_lw2_surname!=t2_cm4_surname && sub28_lw2_surname!=t2_cm3_surname && sub28_lw2_surname!=t2_lw2_surname && sub28_lw2_surname!=t2_rw2_surname && sub28_lw2_surname!=t2_st2_surname){
                            GetTeamSub28_click()
                            dispatch(setAwayTeamValueLw2Click())
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            if(sub28_lw2_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueLw2_6())
                            }else if(sub28_lw2_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueLw2_7())
                            }else if(sub28_lw2_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueLw2_17())
                            }else if(sub28_lw2_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueLw2_18())
                            }else if(sub28_lw2_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueLw2_19())
                            }else if(sub28_lw2_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueLw2_9())
                            }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_20())   
                            }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_21())   
                            }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_22())   
                            }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_23())   
                            }else if(sub28_lw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_24())   
                            }
                        }else {
                            alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_lw2_energy())
                    }
                }else if(t2_lw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible28Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible29Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub28_lw2_name + " " + sub28_lw2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible28Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible29Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player29
    function GetTacticsPlayerSub29(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub29_lw3_surname!=t1_cm1_surname && sub29_lw3_surname!=t1_cm2_surname && sub29_lw3_surname!=t1_lw1_surname && sub29_lw3_surname!=t1_rw1_surname && sub29_lw3_surname!=t1_st1_surname){
                    GetTeamSub29_click()
                    dispatch(setHomeTeamValueLw3Click())
                    if(sub29_lw3_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueLw1_6())
                    }else if(sub29_lw3_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueLw1_7())
                    }else if(sub29_lw3_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueLw1_17())
                    }else if(sub29_lw3_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueLw1_18())
                    }else if(sub29_lw3_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueLw1_19())
                    }else if(sub29_lw3_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueLw1_9())
                    }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_20())   
                    }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_21())   
                    }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_22())   
                    }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_23())   
                    }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_24())   
                    }
                }else {
                    alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub29_lw3_surname!=t2_cm4_surname && sub29_lw3_surname!=t2_cm3_surname && sub29_lw3_surname!=t2_lw2_surname && sub29_lw3_surname!=t2_rw2_surname && sub29_lw3_surname!=t2_st2_surname){
                    GetTeamSub29_click()
                    dispatch(setAwayTeamValueLw3Click())
                    if(sub29_lw3_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueLw2_6())
                    }else if(sub29_lw3_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueLw2_7())
                    }else if(sub29_lw3_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueLw2_17())
                    }else if(sub29_lw3_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueLw2_18())
                    }else if(sub29_lw3_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueLw2_19())
                    }else if(sub29_lw3_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueLw2_9())
                    }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_20())   
                    }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_21())   
                    }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_22())   
                    }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_23())   
                    }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_24())   
                    }
                }else {
                    alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lw1_redCard==false && subPlayerVisible29Bool==false && homeTeamSaveIndex_lw1==homeTeamIndex_lw1 && homeTeamSaveIndex_lw1!=homeTeamIndex_rw1 && sub29_lw3_click!="✓"){
                    if(homeSideValue==true){
                        if(sub29_lw3_surname!=t1_cm1_surname && sub29_lw3_surname!=t1_cm2_surname && sub29_lw3_surname!=t1_lw1_surname && sub29_lw3_surname!=t1_rw1_surname && sub29_lw3_surname!=t1_st1_surname){
                            GetTeamSub29_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueLw3Click())
                            if(sub29_lw3_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueLw1_6())
                            }else if(sub29_lw3_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueLw1_7())
                            }else if(sub29_lw3_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueLw1_17())
                            }else if(sub29_lw3_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueLw1_18())
                            }else if(sub29_lw3_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueLw1_19())
                            }else if(sub29_lw3_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueLw1_9())
                            }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_20())   
                            }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_21())   
                            }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_22())   
                            }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_23())   
                            }else if(sub29_lw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_24())   
                            }
                        }else {
                            alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_lw1_energy())
                    }
                }else if(t1_lw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible29Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible28Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible29Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible28Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lw2_redCard==false && subPlayerVisible29Bool==false && awayTeamSaveIndex_lw2==awayTeamIndex_lw2 && awayTeamSaveIndex_lw2!=awayTeamIndex_rw2 && sub29_lw3_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub29_lw3_surname!=t2_cm4_surname && sub29_lw3_surname!=t2_cm3_surname && sub29_lw3_surname!=t2_lw2_surname && sub29_lw3_surname!=t2_rw2_surname && sub29_lw3_surname!=t2_st2_surname){
                            GetTeamSub29_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueLw3Click())
                            if(sub29_lw3_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueLw2_6())
                            }else if(sub29_lw3_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueLw2_7())
                            }else if(sub29_lw3_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueLw2_17())
                            }else if(sub29_lw3_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueLw2_18())
                            }else if(sub29_lw3_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueLw2_19())
                            }else if(sub29_lw3_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueLw2_9())
                            }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_20())   
                            }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_21())   
                            }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_22())   
                            }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_23())   
                            }else if(sub29_lw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_24())   
                            }
                        }else {
                            alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_lw2_energy())
                    }
                }else if(t2_lw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible29Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible28Bool==false || subPlayerVisible30Bool==false)){
                    alert(sub29_lw3_name + " " + sub29_lw3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible29Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible28Bool==true && subPlayerVisible30Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player30
    function GetTacticsPlayerSub30(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub30_lw4_surname!=t1_cm1_surname && sub30_lw4_surname!=t1_cm2_surname && sub30_lw4_surname!=t1_lw1_surname && sub30_lw4_surname!=t1_rw1_surname && sub30_lw4_surname!=t1_st1_surname){
                    GetTeamSub30_click()
                    dispatch(setHomeTeamValueLw4Click())
                    if(sub30_lw4_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueLw1_6())
                    }else if(sub30_lw4_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueLw1_7())
                    }else if(sub30_lw4_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueLw1_17())
                    }else if(sub30_lw4_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueLw1_18())
                    }else if(sub30_lw4_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueLw1_19())
                    }else if(sub30_lw4_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueLw1_9())
                    }else if(sub30_lw4_surname==sub35_st1_surname){
                        dispatch(setHomeTeamGetValueLw1_10())
                    }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_20())   
                    }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_21())   
                    }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_22())   
                    }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_23())   
                    }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueLw1_24())   
                    }
                }else {
                    alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayer)
                }
            }else {
                if(sub30_lw4_surname!=t2_cm4_surname && sub30_lw4_surname!=t2_cm3_surname && sub30_lw4_surname!=t2_lw2_surname && sub30_lw4_surname!=t2_rw2_surname && sub30_lw4_surname!=t2_st2_surname){
                    GetTeamSub30_click()
                    dispatch(setAwayTeamValueLw4Click())
                    if(sub30_lw4_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueLw2_6())
                    }else if(sub30_lw4_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueLw2_7())
                    }else if(sub30_lw4_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueLw2_17())
                    }else if(sub30_lw4_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueLw2_18())
                    }else if(sub30_lw4_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueLw2_19())
                    }else if(sub30_lw4_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueLw2_9())
                    }else if(sub30_lw4_surname==sub35_st1_surname){
                        dispatch(setAwayTeamGetValueLw2_10())
                    }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_20())   
                    }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_21())   
                    }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_22())   
                    }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_23())   
                    }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueLw2_24()) 
                    }
                }else {
                    alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_lw1_redCard==false && subPlayerVisible30Bool==false && homeTeamSaveIndex_lw1==homeTeamIndex_lw1 && homeTeamSaveIndex_lw1!=homeTeamIndex_rw1 && sub30_lw4_click!="✓"){
                    if(homeSideValue==true){
                        if(sub30_lw4_surname!=t1_cm1_surname && sub30_lw4_surname!=t1_cm2_surname && sub30_lw4_surname!=t1_lw1_surname && sub30_lw4_surname!=t1_rw1_surname && sub30_lw4_surname!=t1_st1_surname){
                            GetTeamSub30_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueLw4Click())
                            if(sub30_lw4_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueLw1_6())
                            }else if(sub30_lw4_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueLw1_7())
                            }else if(sub30_lw4_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueLw1_17())
                            }else if(sub30_lw4_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueLw1_18())
                            }else if(sub30_lw4_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueLw1_19())
                            }else if(sub30_lw4_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueLw1_9())
                            }else if(sub30_lw4_surname==sub35_st1_surname){
                                dispatch(setHomeTeamGetValueLw1_10())
                            }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_20())   
                            }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_21())   
                            }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_22())   
                            }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_23())   
                            }else if(sub30_lw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueLw1_24())   
                            }
                        }else {
                            alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_lw1_energy())
                    }
                }else if(t1_lw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible30Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible28Bool==false || subPlayerVisible29Bool==false)){
                    alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible30Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible28Bool==true && subPlayerVisible29Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_lw2_redCard==false && subPlayerVisible30Bool==false && awayTeamSaveIndex_lw2==awayTeamIndex_lw2 && awayTeamSaveIndex_lw2!=awayTeamIndex_rw2 && sub30_lw4_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub30_lw4_surname!=t2_cm4_surname && sub30_lw4_surname!=t2_cm3_surname && sub30_lw4_surname!=t2_lw2_surname && sub30_lw4_surname!=t2_rw2_surname && sub30_lw4_surname!=t2_st2_surname){
                            GetTeamSub30_click()
                            GetVisibilityHiddenLeftWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueLw4Click())
                            if(sub30_lw4_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueLw2_6())
                            }else if(sub30_lw4_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueLw2_7())
                            }else if(sub30_lw4_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueLw2_17())
                            }else if(sub30_lw4_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueLw2_18())
                            }else if(sub30_lw4_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueLw2_19())
                            }else if(sub30_lw4_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueLw2_9())
                            }else if(sub30_lw4_surname==sub35_st1_surname){
                                dispatch(setAwayTeamGetValueLw2_10())
                            }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_20())   
                            }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_21())   
                            }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_22())   
                            }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_23())   
                            }else if(sub30_lw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueLw2_24()) 
                            }
                        }else {
                            alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_lw2_energy())
                    }
                }else if(t2_lw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible30Bool==true && (subPlayerVisible27Bool==false ||
                    subPlayerVisible28Bool==false || subPlayerVisible29Bool==false)){
                    alert(sub30_lw4_name + " " + sub30_lw4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible30Bool==true && subPlayerVisible27Bool==true &&
                    subPlayerVisible28Bool==true && subPlayerVisible29Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player31
    function GetTacticsPlayerSub31(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub31_rw1_surname!=t1_cm1_surname && sub31_rw1_surname!=t1_cm2_surname && sub31_rw1_surname!=t1_lw1_surname && sub31_rw1_surname!=t1_rw1_surname && sub31_rw1_surname!=t1_st1_surname){
                    GetTeamSub31_click()
                    dispatch(setHomeTeamGetValueRw1())
                }else {
                    alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub31_rw1_surname!=t2_cm4_surname && sub31_rw1_surname!=t2_cm3_surname && sub31_rw1_surname!=t2_lw2_surname && sub31_rw1_surname!=t2_rw2_surname && sub31_rw1_surname!=t2_st2_surname){
                    GetTeamSub31_click()
                    dispatch(setAwayTeamGetValueRw2())
                }else {
                    alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rw1_redCard==false && subPlayerVisible31Bool==false && homeTeamSaveIndex_rw1==homeTeamIndex_rw1 && homeTeamSaveIndex_rw1!=homeTeamIndex_lw1 && sub31_rw1_click!="✓"){
                    if(homeSideValue==true){
                        if(sub31_rw1_surname!=t1_cm1_surname && sub31_rw1_surname!=t1_cm2_surname && sub31_rw1_surname!=t1_lw1_surname && sub31_rw1_surname!=t1_rw1_surname && sub31_rw1_surname!=t1_st1_surname){
                            GetTeamSub31_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueRw1())
                        }else {
                            alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_rw1_energy())
                    }
                }else if(t1_rw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible31Bool==true && (subPlayerVisible33Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible32Bool==false)){
                    alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible31Bool==true && subPlayerVisible33Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible32Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rw2_redCard==false && subPlayerVisible31Bool==false && awayTeamSaveIndex_rw2==awayTeamIndex_rw2 && awayTeamSaveIndex_rw2!=awayTeamIndex_lw2 && sub31_rw1_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub31_rw1_surname!=t2_cm4_surname && sub31_rw1_surname!=t2_cm3_surname && sub31_rw1_surname!=t2_lw2_surname && sub31_rw1_surname!=t2_rw2_surname && sub31_rw1_surname!=t2_st2_surname){
                            GetTeamSub31_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueRw2())
                        }else {
                            alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_rw2_energy())
                    }
                }else if(t2_rw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible31Bool==true && (subPlayerVisible33Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible32Bool==false)){
                    alert(sub31_rw1_name + " " + sub31_rw1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible31Bool==true && subPlayerVisible33Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible32Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player32
    function GetTacticsPlayerSub32(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub32_rw2_surname!=t1_cm1_surname && sub32_rw2_surname!=t1_cm2_surname && sub32_rw2_surname!=t1_lw1_surname && sub32_rw2_surname!=t1_rw1_surname && sub32_rw2_surname!=t1_st1_surname){
                    GetTeamSub32_click()
                    dispatch(setHomeTeamValueRw2Click())
                    if(sub32_rw2_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueRw1_6())
                    }else if(sub32_rw2_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueRw1_7())
                    }else if(sub32_rw2_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueRw1_17())
                    }else if(sub32_rw2_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueRw1_18())
                    }else if(sub32_rw2_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueRw1_19())
                    }else if(sub32_rw2_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueRw1_8())
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_20())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_21())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_22())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_23())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_24())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_25())   
                    }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_26())   
                    }
                }else {
                    alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub32_rw2_surname!=t2_cm4_surname && sub32_rw2_surname!=t2_cm3_surname && sub32_rw2_surname!=t2_lw2_surname && sub32_rw2_surname!=t2_rw2_surname && sub32_rw2_surname!=t2_st2_surname){
                    GetTeamSub32_click()
                    dispatch(setAwayTeamValueRw2Click())
                    if(sub32_rw2_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueRw2_6())
                    }else if(sub32_rw2_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueRw2_7())
                    }else if(sub32_rw2_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueRw2_17())
                    }else if(sub32_rw2_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueRw2_18())
                    }else if(sub32_rw2_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueRw2_19())
                    }else if(sub32_rw2_surname==sub27_lw1_surname){
                        dispatch(setAwayTeamGetValueRw2_8())
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_20())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_21())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_22())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_23())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_24())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_25())   
                    }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_26())   
                    }
                }else {
                    alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rw1_redCard==false && subPlayerVisible32Bool==false && homeTeamSaveIndex_rw1==homeTeamIndex_rw1 && homeTeamSaveIndex_rw1!=homeTeamIndex_lw1 && sub32_rw2_click!="✓"){
                    if(homeSideValue==true){
                        if(sub32_rw2_surname!=t1_cm1_surname && sub32_rw2_surname!=t1_cm2_surname && sub32_rw2_surname!=t1_lw1_surname && sub32_rw2_surname!=t1_rw1_surname && sub32_rw2_surname!=t1_st1_surname){
                            GetTeamSub32_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueRw2Click())
                            if(sub32_rw2_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueRw1_6())
                            }else if(sub32_rw2_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueRw1_7())
                            }else if(sub32_rw2_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueRw1_17())
                            }else if(sub32_rw2_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueRw1_18())
                            }else if(sub32_rw2_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueRw1_19())
                            }else if(sub32_rw2_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueRw1_8())
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_20())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_21())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_22())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_23())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_24())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_25())   
                            }else if(sub32_rw2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_26())   
                            }
                        }else {
                            alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_rw1_energy())
                    }
                }else if(t1_rw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible32Bool==true && (subPlayerVisible33Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible32Bool==true && subPlayerVisible33Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rw2_redCard==false && subPlayerVisible32Bool==false && awayTeamSaveIndex_rw2==awayTeamIndex_rw2 && awayTeamSaveIndex_rw2!=awayTeamIndex_lw2 && sub32_rw2_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub32_rw2_surname!=t2_cm4_surname && sub32_rw2_surname!=t2_cm3_surname && sub32_rw2_surname!=t2_lw2_surname && sub32_rw2_surname!=t2_rw2_surname && sub32_rw2_surname!=t2_st2_surname){
                            GetTeamSub32_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueRw2Click())
                            if(sub32_rw2_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueRw2_6())
                            }else if(sub32_rw2_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueRw2_7())
                            }else if(sub32_rw2_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueRw2_17())
                            }else if(sub32_rw2_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueRw2_18())
                            }else if(sub32_rw2_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueRw2_19())
                            }else if(sub32_rw2_surname==sub27_lw1_surname){
                                dispatch(setAwayTeamGetValueRw2_8())
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_20())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_21())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_22())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_23())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_24())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_25())   
                            }else if(sub32_rw2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_26())   
                            }
                        }else {
                            alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_rw2_energy())
                    }
                }else if(t2_rw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible32Bool==true && (subPlayerVisible33Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub32_rw2_name + " " + sub32_rw2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible32Bool==true && subPlayerVisible33Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player33
    function GetTacticsPlayerSub33(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub33_rw3_surname!=t1_cm1_surname && sub33_rw3_surname!=t1_cm2_surname && sub33_rw3_surname!=t1_lw1_surname && sub33_rw3_surname!=t1_st1_surname){
                    GetTeamSub33_click()
                    dispatch(setHomeTeamValueRw3Click())
                    if(sub33_rw3_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueRw1_6())
                    }else if(sub33_rw3_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueRw1_7())
                    }else if(sub33_rw3_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueRw1_17())
                    }else if(sub33_rw3_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueRw1_18())
                    }else if(sub33_rw3_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueRw1_19())
                    }else if(sub33_rw3_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueRw1_8())
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_20())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_21())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_22())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_23())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_24())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_25())   
                    }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_26())   
                    }
                }else {
                    alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub33_rw3_surname!=t2_cm4_surname && sub33_rw3_surname!=t2_cm3_surname && sub33_rw3_surname!=t2_lw2_surname && sub33_rw3_surname!=t2_rw2_surname && sub33_rw3_surname!=t2_st2_surname){
                    GetTeamSub33_click()
                    dispatch(setAwayTeamValueRw3Click())
                    if(sub33_rw3_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueRw2_6())
                    }else if(sub33_rw3_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueRw2_7())
                    }else if(sub33_rw3_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueRw2_17())
                    }else if(sub33_rw3_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueRw2_18())
                    }else if(sub33_rw3_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueRw2_19())
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_20())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_21())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_22())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_23())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_24())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_25())   
                    }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_26())   
                    }
                }else {
                    alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rw1_redCard==false && subPlayerVisible33Bool==false && homeTeamSaveIndex_rw1==homeTeamIndex_rw1 && homeTeamSaveIndex_rw1!=homeTeamIndex_lw1 && sub33_rw3_click!="✓"){
                    if(homeSideValue==true){
                        if(sub33_rw3_surname!=t1_cm1_surname && sub33_rw3_surname!=t1_cm2_surname && sub33_rw3_surname!=t1_lw1_surname && sub33_rw3_surname!=t1_st1_surname){
                            GetTeamSub33_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueRw3Click())
                            if(sub33_rw3_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueRw1_6())
                            }else if(sub33_rw3_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueRw1_7())
                            }else if(sub33_rw3_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueRw1_17())
                            }else if(sub33_rw3_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueRw1_18())
                            }else if(sub33_rw3_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueRw1_19())
                            }else if(sub33_rw3_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueRw1_8())
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_20())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_21())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_22())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_23())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_24())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_25())   
                            }else if(sub33_rw3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_26())   
                            }
                        }else {
                            alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_rw1_energy())
                    }
                }else if(t1_rw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible33Bool==true && (subPlayerVisible32Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible33Bool==true && subPlayerVisible32Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rw2_redCard==false && subPlayerVisible33Bool==false && awayTeamSaveIndex_rw2==awayTeamIndex_rw2 && awayTeamSaveIndex_rw2!=awayTeamIndex_lw2 && sub33_rw3_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub33_rw3_surname!=t2_cm4_surname && sub33_rw3_surname!=t2_cm3_surname && sub33_rw3_surname!=t2_lw2_surname && sub33_rw3_surname!=t2_rw2_surname && sub33_rw3_surname!=t2_st2_surname){
                            GetTeamSub33_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueRw3Click())
                            if(sub33_rw3_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueRw2_6())
                            }else if(sub33_rw3_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueRw2_7())
                            }else if(sub33_rw3_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueRw2_17())
                            }else if(sub33_rw3_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueRw2_18())
                            }else if(sub33_rw3_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueRw2_19())
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_20())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_21())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_22())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_23())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_24())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_25())   
                            }else if(sub33_rw3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_26())   
                            }
                        }else {
                            alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_rw2_energy())
                    }
                }else if(t2_rw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible33Bool==true && (subPlayerVisible32Bool==false ||
                    subPlayerVisible34Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub33_rw3_name + " " + sub33_rw3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible33Bool==true && subPlayerVisible32Bool==true &&
                    subPlayerVisible34Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player34
    function GetTacticsPlayerSub34(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub34_rw4_surname!=t1_cm1_surname && sub34_rw4_surname!=t1_cm2_surname && sub34_rw4_surname!=t1_lw1_surname && sub34_rw4_surname!=t1_rw1_surname && sub34_rw4_surname!=t1_st1_surname){
                    GetTeamSub34_click()
                    dispatch(setHomeTeamValueRw4Click())
                    if(sub34_rw4_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueRw1_6())
                    }else if(sub34_rw4_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueRw1_7())
                    }else if(sub34_rw4_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueRw1_17())
                    }else if(sub34_rw4_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueRw1_18())
                    }else if(sub34_rw4_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueRw1_19())
                    }else if(sub34_rw4_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueRw1_8())
                    }else if(sub34_rw4_surname==sub35_st1_surname){
                        dispatch(setHomeTeamGetValueRw1_10())
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_20())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_21())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_22())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_23())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_24())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_25())   
                    }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueRw1_26())   
                    }
                }else {
                    alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub34_rw4_surname!=t2_cm4_surname && sub34_rw4_surname!=t2_cm3_surname && sub34_rw4_surname!=t2_lw2_surname && sub34_rw4_surname!=t2_rw2_surname && sub34_rw4_surname!=t2_st2_surname){
                    GetTeamSub34_click()
                    dispatch(setAwayTeamValueRw4Click())
                    if(sub34_rw4_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueRw2_6())
                    }else if(sub34_rw4_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueRw2_7())
                    }else if(sub34_rw4_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueRw2_17())
                    }else if(sub34_rw4_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueRw2_18())
                    }else if(sub34_rw4_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueRw2_19())
                    }else if(sub34_rw4_surname==sub27_lw1_surname){
                        dispatch(setAwayTeamGetValueRw2_8())
                    }else if(sub34_rw4_surname==sub35_st1_surname){
                        dispatch(setAwayTeamGetValueRw2_10())
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_20())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_21())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_22())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_23())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_24())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_25())   
                    }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueRw2_26())   
                    }
                }else {
                    alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_rw1_redCard==false && subPlayerVisible34Bool==false && homeTeamSaveIndex_rw1==homeTeamIndex_rw1 && homeTeamSaveIndex_rw1!=homeTeamIndex_lw1 && sub34_rw4_click!="✓"){
                    if(homeSideValue==true){
                        if(sub34_rw4_surname!=t1_cm1_surname && sub34_rw4_surname!=t1_cm2_surname && sub34_rw4_surname!=t1_lw1_surname && sub34_rw4_surname!=t1_rw1_surname && sub34_rw4_surname!=t1_st1_surname){
                            GetTeamSub34_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueRw4Click())
                            if(sub34_rw4_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueRw1_6())
                            }else if(sub34_rw4_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueRw1_7())
                            }else if(sub34_rw4_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueRw1_17())
                            }else if(sub34_rw4_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueRw1_18())
                            }else if(sub34_rw4_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueRw1_19())
                            }else if(sub34_rw4_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueRw1_8())
                            }else if(sub34_rw4_surname==sub35_st1_surname){
                                dispatch(setHomeTeamGetValueRw1_10())
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_20())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_21())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_22())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_23())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_24())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_25())   
                            }else if(sub34_rw4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueRw1_26())   
                            }
                        }else {
                            alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_rw1_energy())
                    }
                }else if(t1_rw1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible34Bool==true && (subPlayerVisible32Bool==false ||
                    subPlayerVisible33Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible34Bool==true && subPlayerVisible32Bool==true &&
                    subPlayerVisible33Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_rw2_redCard==false && subPlayerVisible34Bool==false && awayTeamSaveIndex_rw2==awayTeamIndex_rw2 && awayTeamSaveIndex_rw2!=awayTeamIndex_lw2 && sub34_rw4_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub34_rw4_surname!=t2_cm4_surname && sub34_rw4_surname!=t2_cm3_surname && sub34_rw4_surname!=t2_lw2_surname && sub34_rw4_surname!=t2_rw2_surname && sub34_rw4_surname!=t2_st2_surname){
                            GetTeamSub34_click()
                            GetVisibilityHiddenRightWings()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueRw4Click())
                            if(sub34_rw4_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueRw2_6())
                            }else if(sub34_rw4_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueRw2_7())
                            }else if(sub34_rw4_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueRw2_17())
                            }else if(sub34_rw4_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueRw2_18())
                            }else if(sub34_rw4_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueRw2_19())
                            }else if(sub34_rw4_surname==sub27_lw1_surname){
                                dispatch(setAwayTeamGetValueRw2_8())
                            }else if(sub34_rw4_surname==sub35_st1_surname){
                                dispatch(setAwayTeamGetValueRw2_10())
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_20())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_21())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_22())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_23())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_24())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_25())   
                            }else if(sub34_rw4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueRw2_26())   
                            }
                        }else {
                            alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_rw2_energy())
                    }
                }else if(t2_rw2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible34Bool==true && (subPlayerVisible32Bool==false ||
                    subPlayerVisible33Bool==false || subPlayerVisible31Bool==false)){
                    alert(sub34_rw4_name + " " + sub34_rw4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible34Bool==true && subPlayerVisible32Bool==true &&
                    subPlayerVisible33Bool==true && subPlayerVisible31Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player35
    function GetTacticsPlayerSub35(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub35_st1_surname!=t1_cm1_surname && sub35_st1_surname!=t1_cm2_surname && sub35_st1_surname!=t1_lw1_surname && sub35_st1_surname!=t1_rw1_surname && sub35_st1_surname!=t1_st1_surname){
                    GetTeamSub35_click()
                    dispatch(setHomeTeamGetValueSt1())
                }else {
                    alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub35_st1_surname!=t2_cm4_surname && sub35_st1_surname!=t2_cm3_surname && sub35_st1_surname!=t2_lw2_surname && sub35_st1_surname!=t2_rw2_surname && sub35_st1_surname!=t2_st2_surname){
                    GetTeamSub35_click()
                    dispatch(setAwayTeamGetValueSt2())
                }else {
                    alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_st1_redCard==false && subPlayerVisible35Bool==false && homeTeamSaveIndex_st1==homeTeamIndex_st1 && sub35_st1_click!="✓"){
                    if(homeSideValue==true){
                        if(sub35_st1_surname!=t1_cm1_surname && sub35_st1_surname!=t1_cm2_surname && sub35_st1_surname!=t1_lw1_surname && sub35_st1_surname!=t1_rw1_surname && sub35_st1_surname!=t1_st1_surname){
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamGetValueSt1())
                            GetTeamSub35_click()
                        }else {
                            alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_st1_energy())
                    }
                }else if(t1_st1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible35Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible37Bool==false || subPlayerVisible36Bool==false)){
                    alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible35Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible37Bool==true && subPlayerVisible36Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_st2_redCard==false && subPlayerVisible35Bool==false && awayTeamSaveIndex_st2==awayTeamIndex_st2 && sub35_st1_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub35_st1_surname!=t2_cm4_surname && sub35_st1_surname!=t2_cm3_surname && sub35_st1_surname!=t2_lw2_surname && sub35_st1_surname!=t2_rw2_surname && sub35_st1_surname!=t2_st2_surname){
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamGetValueSt2())
                            GetTeamSub35_click()
                        }else {
                            alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_st2_energy())
                    }
                }else if(t2_st2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible35Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible37Bool==false || subPlayerVisible36Bool==false)){
                    alert(sub35_st1_name + " " + sub35_st1_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible35Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible37Bool==true && subPlayerVisible36Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player36
    function GetTacticsPlayerSub36(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub36_st2_surname!=t1_cm1_surname && sub36_st2_surname!=t1_cm2_surname && sub36_st2_surname!=t1_lw1_surname && sub36_st2_surname!=t1_rw1_surname && sub36_st2_surname!=t1_st1_surname){
                    GetTeamSub36_click()
                    dispatch(setHomeTeamValueSt2Click())
                    if(sub36_st2_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueSt1_6())
                    }else if(sub36_st2_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueSt1_7())
                    }else if(sub36_st2_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueSt1_17())
                    }else if(sub36_st2_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueSt1_18())
                    }else if(sub36_st2_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueSt1_19())
                    }else if(sub36_st2_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueSt1_8())
                    }else if(sub36_st2_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueSt1_9())
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_20())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_21())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_22())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_23())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_24())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_25())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_26())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_27())   
                    }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_28())   
                    }
                }else {
                    alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub36_st2_surname!=t2_cm4_surname && sub36_st2_surname!=t2_cm3_surname && sub36_st2_surname!=t2_lw2_surname && sub36_st2_surname!=t2_rw2_surname && sub36_st2_surname!=t2_st2_surname){
                    GetTeamSub36_click()
                    dispatch(setAwayTeamValueSt2Click())
                    if(sub36_st2_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueSt2_6())
                    }else if(sub36_st2_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueSt2_7())
                    }else if(sub36_st2_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueSt2_17())
                    }else if(sub36_st2_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueSt2_18())
                    }else if(sub36_st2_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueSt2_19())
                    }else if(sub36_st2_surname==sub27_lw1_surname){
                        dispatch(setAwayTeamGetValueSt2_8())
                    }else if(sub36_st2_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueSt2_9())
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_20())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_21())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_22())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_23())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_24())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_25())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_26())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_27())   
                    }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_28())   
                    }
                }else {
                    alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_st1_redCard==false && subPlayerVisible36Bool==false && homeTeamSaveIndex_st1==homeTeamIndex_st1 && sub36_st2_click!="✓"){
                    if(homeSideValue==true){
                        if(sub36_st2_surname!=t1_cm1_surname && sub36_st2_surname!=t1_cm2_surname && sub36_st2_surname!=t1_lw1_surname && sub36_st2_surname!=t1_rw1_surname && sub36_st2_surname!=t1_st1_surname){
                            GetTeamSub36_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueSt2Click())
                            if(sub36_st2_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueSt1_6())
                            }else if(sub36_st2_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueSt1_7())
                            }else if(sub36_st2_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueSt1_17())
                            }else if(sub36_st2_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueSt1_18())
                            }else if(sub36_st2_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueSt1_19())
                            }else if(sub36_st2_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueSt1_8())
                            }else if(sub36_st2_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueSt1_9())
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_20())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_21())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_22())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_23())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_24())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_25())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_26())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_27())   
                            }else if(sub36_st2_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_28())   
                            }
                        }else {
                            alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_st1_energy())
                    }
                }else if(t1_st1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible36Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible37Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible36Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible37Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_st2_redCard==false && subPlayerVisible36Bool==false && awayTeamSaveIndex_st2==awayTeamIndex_st2 && sub36_st2_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub36_st2_surname!=t2_cm4_surname && sub36_st2_surname!=t2_cm3_surname && sub36_st2_surname!=t2_lw2_surname && sub36_st2_surname!=t2_rw2_surname && sub36_st2_surname!=t2_st2_surname){
                            GetTeamSub36_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueSt2Click())
                            if(sub36_st2_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueSt2_6())
                            }else if(sub36_st2_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueSt2_7())
                            }else if(sub36_st2_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueSt2_17())
                            }else if(sub36_st2_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueSt2_18())
                            }else if(sub36_st2_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueSt2_19())
                            }else if(sub36_st2_surname==sub27_lw1_surname){
                                dispatch(setAwayTeamGetValueSt2_8())
                            }else if(sub36_st2_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueSt2_9())
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_20())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_21())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_22())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_23())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_24())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_25())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_26())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_27())   
                            }else if(sub36_st2_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_28())   
                            }
                        }else {
                            alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_st2_energy())
                    }
                }else if(t2_st2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible36Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible37Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub36_st2_name + " " + sub36_st2_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible36Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible37Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player37
    function GetTacticsPlayerSub37(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub37_st3_surname!=t1_cm1_surname && sub37_st3_surname!=t1_cm2_surname && sub37_st3_surname!=t1_lw1_surname && sub37_st3_surname!=t1_rw1_surname && sub37_st3_surname!=t1_st1_surname){
                    GetTeamSub37_click()
                    dispatch(setHomeTeamValueSt3Click())
                    if(sub37_st3_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueSt1_6())
                    }else if(sub37_st3_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueSt1_7())
                    }else if(sub37_st3_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueSt1_17())
                    }else if(sub37_st3_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueSt1_18())
                    }else if(sub37_st3_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueSt1_19())
                    }else if(sub37_st3_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueSt1_8())
                    }else if(sub37_st3_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueSt1_9())
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_20())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_21())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_22())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_23())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_24())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_25())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_26())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_27())   
                    }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_28())   
                    }
                }else {
                    alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub37_st3_surname!=t2_cm4_surname && sub37_st3_surname!=t2_cm3_surname && sub37_st3_surname!=t2_lw2_surname && sub37_st3_surname!=t2_rw2_surname && sub37_st3_surname!=t2_st2_surname){
                    GetTeamSub37_click()
                    dispatch(setAwayTeamValueSt3Click())
                    if(sub37_st3_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueSt2_6())
                    }else if(sub37_st3_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueSt2_7())
                    }else if(sub37_st3_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueSt2_17())
                    }else if(sub37_st3_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueSt2_18())
                    }else if(sub37_st3_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueSt2_19())
                    }else if(sub37_st3_surname==sub27_lw1_surname){
                        dispatch(setAwayTeamGetValueSt2_8())
                    }else if(sub37_st3_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueSt2_9())
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_20())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_21())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_22())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_23())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_24())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_25())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_26())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_27())   
                    }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_28())   
                    }
                }else {
                    alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_st1_redCard==false && subPlayerVisible37Bool==false && homeTeamSaveIndex_st1==homeTeamIndex_st1 && sub37_st3_click!="✓"){
                    if(homeSideValue==true){
                        if(sub37_st3_surname!=t1_cm1_surname && sub37_st3_surname!=t1_cm2_surname && sub37_st3_surname!=t1_lw1_surname && sub37_st3_surname!=t1_rw1_surname && sub37_st3_surname!=t1_st1_surname){
                            GetTeamSub37_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueSt3Click())
                            if(sub37_st3_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueSt1_6())
                            }else if(sub37_st3_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueSt1_7())
                            }else if(sub37_st3_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueSt1_17())
                            }else if(sub37_st3_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueSt1_18())
                            }else if(sub37_st3_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueSt1_19())
                            }else if(sub37_st3_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueSt1_8())
                            }else if(sub37_st3_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueSt1_9())
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_20())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_21())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_22())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_23())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_24())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_25())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_26())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_27())   
                            }else if(sub37_st3_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_28())   
                            }
                        }else {
                            alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_st1_energy())
                    }
                }else if(t1_st1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible37Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible36Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible37Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible36Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_st2_redCard==false && subPlayerVisible37Bool==false && awayTeamSaveIndex_st2==awayTeamIndex_st2 && sub37_st3_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub37_st3_surname!=t2_cm4_surname && sub37_st3_surname!=t2_cm3_surname && sub37_st3_surname!=t2_lw2_surname && sub37_st3_surname!=t2_rw2_surname && sub37_st3_surname!=t2_st2_surname){
                            GetTeamSub37_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueSt3Click())
                            if(sub37_st3_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueSt2_6())
                            }else if(sub37_st3_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueSt2_7())
                            }else if(sub37_st3_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueSt2_17())
                            }else if(sub37_st3_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueSt2_18())
                            }else if(sub37_st3_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueSt2_19())
                            }else if(sub37_st3_surname==sub27_lw1_surname){
                                dispatch(setAwayTeamGetValueSt2_8())
                            }else if(sub37_st3_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueSt2_9())
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_20())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_21())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_22())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_23())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_24())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_25())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_26())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_27())   
                            }else if(sub37_st3_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_28())   
                            }
                        }else {
                            alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_st2_energy())
                    }
                }else if(t2_st2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible37Bool==true && (subPlayerVisible38Bool==false ||
                    subPlayerVisible36Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub37_st3_name + " " + sub37_st3_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible37Bool==true && subPlayerVisible38Bool==true &&
                    subPlayerVisible36Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }

    //sub player38
    function GetTacticsPlayerSub38(){
        if(matchStartValueBool==false){
            if(homeSideValue==true){
                if(sub38_st4_surname!=t1_cm1_surname && sub38_st4_surname!=t1_cm2_surname && sub38_st4_surname!=t1_lw1_surname && sub38_st4_surname!=t1_rw1_surname && sub38_st4_surname!=t1_st1_surname){
                    GetTeamSub38_click()
                    dispatch(setHomeTeamValueSt4Click())
                    if(sub38_st4_surname==sub17_cm1_1_surname){
                        dispatch(setHomeTeamGetValueSt1_6())
                    }else if(sub38_st4_surname==sub18_cm1_2_surname){
                        dispatch(setHomeTeamGetValueSt1_7())
                    }else if(sub38_st4_surname==sub19_cm1_3_surname){
                        dispatch(setHomeTeamGetValueSt1_17())
                    }else if(sub38_st4_surname==sub20_cm1_4_surname){
                        dispatch(setHomeTeamGetValueSt1_18())
                    }else if(sub38_st4_surname==sub21_cm1_5_surname){
                        dispatch(setHomeTeamGetValueSt1_19())
                    }else if(sub38_st4_surname==sub27_lw1_surname){
                        dispatch(setHomeTeamGetValueSt1_8())
                    }else if(sub38_st4_surname==sub31_rw1_surname){
                        dispatch(setHomeTeamGetValueSt1_9())
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_20())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_21())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_22())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_23())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_24())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_25())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_26())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_27())   
                    }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                        dispatch(setHomeTeamGetValueSt1_28())   
                    }
                }else {
                    alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayer)
                }
    
            }else {
                if(sub38_st4_surname!=t2_cm4_surname && sub38_st4_surname!=t2_cm3_surname && sub38_st4_surname!=t2_lw2_surname && sub38_st4_surname!=t2_rw2_surname && sub38_st4_surname!=t2_st2_surname){
                    GetTeamSub38_click()
                    dispatch(setAwayTeamValueSt4Click())
                    if(sub38_st4_surname==sub17_cm1_1_surname){
                        dispatch(setAwayTeamGetValueSt2_6())
                    }else if(sub38_st4_surname==sub18_cm1_2_surname){
                        dispatch(setAwayTeamGetValueSt2_7())
                    }else if(sub38_st4_surname==sub19_cm1_3_surname){
                        dispatch(setAwayTeamGetValueSt2_17())
                    }else if(sub38_st4_surname==sub20_cm1_4_surname){
                        dispatch(setAwayTeamGetValueSt2_18())
                    }else if(sub38_st4_surname==sub21_cm1_5_surname){
                        dispatch(setAwayTeamGetValueSt2_19())
                    }else if(sub38_st4_surname==sub27_lw1_surname){
                        dispatch(setAwayTeamGetValueSt2_8())
                    }else if(sub38_st4_surname==sub31_rw1_surname){
                        dispatch(setAwayTeamGetValueSt2_9())
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_20())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_21())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_22())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_23())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_24())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_25())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_26())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_27())   
                    }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                        dispatch(setAwayTeamGetValueSt2_28())   
                    }
                }else {
                    alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayer)
                }
            }
        }else if(matchStartValueBool==true){
            if(homeSideValue==true){
                if(rightPlayerChangeId!=0 && t1_st1_redCard==false && subPlayerVisible38Bool==false && homeTeamSaveIndex_st1==homeTeamIndex_st1 && sub38_st4_click!="✓"){
                    if(homeSideValue==true){
                        if(sub38_st4_surname!=t1_cm1_surname && sub38_st4_surname!=t1_cm2_surname && sub38_st4_surname!=t1_lw1_surname && sub38_st4_surname!=t1_rw1_surname && sub38_st4_surname!=t1_st1_surname){
                            GetTeamSub38_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setHomeTeamValueSt4Click())
                            if(sub38_st4_surname==sub17_cm1_1_surname){
                                dispatch(setHomeTeamGetValueSt1_6())
                            }else if(sub38_st4_surname==sub18_cm1_2_surname){
                                dispatch(setHomeTeamGetValueSt1_7())
                            }else if(sub38_st4_surname==sub19_cm1_3_surname){
                                dispatch(setHomeTeamGetValueSt1_17())
                            }else if(sub38_st4_surname==sub20_cm1_4_surname){
                                dispatch(setHomeTeamGetValueSt1_18())
                            }else if(sub38_st4_surname==sub21_cm1_5_surname){
                                dispatch(setHomeTeamGetValueSt1_19())
                            }else if(sub38_st4_surname==sub27_lw1_surname){
                                dispatch(setHomeTeamGetValueSt1_8())
                            }else if(sub38_st4_surname==sub31_rw1_surname){
                                dispatch(setHomeTeamGetValueSt1_9())
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[20].surname && 20 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_20())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[21].surname && 21 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_21())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[22].surname && 22 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_22())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[23].surname && 23 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_23())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[24].surname && 24 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_24())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[25].surname && 25 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_25())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[26].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_26())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[27].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_27())   
                            }else if(sub38_st4_surname==Leagues.leagues[homeLeagueValue].teams[homeTeamValue].players[28].surname && 26 <= homeTeamLen-1){
                                dispatch(setHomeTeamGetValueSt1_28())   
                            }
                        }else {
                            alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetHomeTeam_st1_energy())
                    }
                }else if(t1_st1_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible38Bool==true && (subPlayerVisible37Bool==false ||
                    subPlayerVisible36Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible38Bool==true && subPlayerVisible37Bool==true &&
                    subPlayerVisible36Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }else{
                if(rightPlayerChangeId!=0 && t2_st2_redCard==false && subPlayerVisible38Bool==false && awayTeamSaveIndex_st2==awayTeamIndex_st2 && sub38_st4_click!="✓"){
                    if(awaySideValue==true) {
                        if(sub38_st4_surname!=t2_cm4_surname && sub38_st4_surname!=t2_cm3_surname && sub38_st4_surname!=t2_lw2_surname && sub38_st4_surname!=t2_rw2_surname && sub38_st4_surname!=t2_st2_surname){
                            GetTeamSub38_click()
                            GetVisibilityHiddenStrikers()
                            dispatch(GetRightPlayerChange_Sour())
                            dispatch(setAwayTeamValueSt4Click())
                            if(sub38_st4_surname==sub17_cm1_1_surname){
                                dispatch(setAwayTeamGetValueSt2_6())
                            }else if(sub38_st4_surname==sub18_cm1_2_surname){
                                dispatch(setAwayTeamGetValueSt2_7())
                            }else if(sub38_st4_surname==sub19_cm1_3_surname){
                                dispatch(setAwayTeamGetValueSt2_17())
                            }else if(sub38_st4_surname==sub20_cm1_4_surname){
                                dispatch(setAwayTeamGetValueSt2_18())
                            }else if(sub38_st4_surname==sub21_cm1_5_surname){
                                dispatch(setAwayTeamGetValueSt2_19())
                            }else if(sub38_st4_surname==sub27_lw1_surname){
                                dispatch(setAwayTeamGetValueSt2_8())
                            }else if(sub38_st4_surname==sub31_rw1_surname){
                                dispatch(setAwayTeamGetValueSt2_9())
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[20].surname && 20 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_20())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[21].surname && 21 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_21())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[22].surname && 22 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_22())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[23].surname && 23 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_23())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[24].surname && 24 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_24())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[25].surname && 25 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_25())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[26].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_26())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[27].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_27())   
                            }else if(sub38_st4_surname==Leagues.leagues[awayLeagueValue].teams[awayTeamValue].players[28].surname && 26 <= awayTeamLen-1){
                                dispatch(setAwayTeamGetValueSt2_28())   
                            }
                        }else {
                            alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayer)
                        }
                        dispatch(SetAwayTeam_st2_energy())
                    }
                }else if(t2_st2_redCard==true){
                    alert(gameplanmenuPositionHasRedCard)
                }else if(subPlayerVisible38Bool==true && (subPlayerVisible37Bool==false ||
                    subPlayerVisible36Bool==false || subPlayerVisible35Bool==false)){
                    alert(sub38_st4_name + " " + sub38_st4_surname + txtGameplanmenuSamePlayerChange)
                }else if(subPlayerVisible38Bool==true && subPlayerVisible37Bool==true &&
                    subPlayerVisible36Bool==true && subPlayerVisible35Bool==true){
                    alert(txtGameplanmenuPositionPlayerChange)
                }
            }
        }
    }











    function ControlRedCards(){
        if(homeSideValue==true){
            if(t1_gk1_redCard==true){
                GetVisibilityHiddenGoalkeepers()
            }

            if(t1_lb1_redCard==true){
                GetVisibilityHiddenLeftBacks()
            }

            if(t1_cb1_redCard==true){
                GetVisibilityHiddenLeftStopers()
            }

            if(t1_cb2_redCard==true){
                GetVisibilityHiddenRightStopers()
            }

            if(t1_rb1_redCard==true){
                GetVisibilityHiddenRightBacks()
            }

            if(t1_dm1_redCard==true){
                GetVisibilityHiddenDefensiveMidfielder()
            }

            if(t1_cm1_redCard==true){
                GetVisibilityHiddenLeftMidfielder()
            }

            if(t1_cm2_redCard==true){
                GetVisibilityHiddenRightMidfielder()
            }

            if(t1_lw1_redCard==true){
                GetVisibilityHiddenLeftWings()
            }

            if(t1_rw1_redCard==true){
                GetVisibilityHiddenRightWings()
            }

            if(t1_st1_redCard==true){
                GetVisibilityHiddenStrikers()
            }

        }else if(awaySideValue==true){
            if(t2_gk2_redCard==true){
                GetVisibilityHiddenGoalkeepers()
            }

            if(t2_lb2_redCard==true){
                GetVisibilityHiddenLeftBacks()
            }

            if(t2_cb4_redCard==true){
                GetVisibilityHiddenLeftStopers()
            }

            if(t2_cb3_redCard==true){
                GetVisibilityHiddenRightStopers()
            }

            if(t2_rb2_redCard==true){
                GetVisibilityHiddenRightBacks()
            }

            if(t2_dm2_redCard==true){
                GetVisibilityHiddenDefensiveMidfielder()
            }

            if(t2_cm4_redCard==true){
                GetVisibilityHiddenLeftMidfielder()
            }

            if(t2_cm3_redCard==true){
                GetVisibilityHiddenRightMidfielder()
            }

            if(t2_lw2_redCard==true){
                GetVisibilityHiddenLeftWings()
            }

            if(t2_rw2_redCard==true){
                GetVisibilityHiddenRightWings()
            }

            if(t2_st2_redCard==true){
                GetVisibilityHiddenStrikers()
            }
            
        }
    }








  return (
    <div className='div-all-gameplanmenu'>
        {ControlHomeAwaySideValue()}
        {ControlSubPlayers()}
        {ControlSubPlayersClick()}
        {ControlRedCards()}
        <div className='div-up-gameplanmenu'>
            <div className='div-formations-gameplanmenu'>
                <button className='buttons-formations-gameplanmenu' onClick={() => dispatch(setTeamFormationGet1())}>4-3-3</button>
                <button className='buttons-formations-gameplanmenu' onClick={() => dispatch(setTeamFormationGet2())}>4-1-4-1</button>
                <button className='buttons-formations-gameplanmenu' onClick={() => dispatch(setTeamFormationGet3())}>5-2-3</button>
                <button className='buttons-formations-gameplanmenu' onClick={() => dispatch(setTeamFormationGet4())}>3-4-3</button>
            </div>
            <div className='div-addition-gameplanmenu'>
                <div className='div-positions-gameplanmenu'>
                    {txtPosition}
                </div>
                <div className='div-players-gameplanmenu'>
                    {txtPlayers}               
                </div>
                <div className='div-reytings-gameplanmenu'>
                    {txtRating}
                </div>
                <div className='div-energy-gameplanmenu'>
                    {txtEnergy}               
                </div>
            </div>
        </div>
        <div className='div-mid-gameplanmenu'>
                {formationValueCount()}
            <div className='div-empty'>

            </div>
            {GetVisibilityHiddenAllSubs()}
        </div>



        <div className='div-down-gameplanmenu'>
            <div className='div-left-btn-gameplanmenu'>
                <Link to={'/strategy'}><button className='buttons-gameplanmenu'>{txtStrategyButton}</button></Link>
            </div>
            <div className='div-mid-playerchange-gameplanmenu'>
                {ControlPlayerChange()}
            </div>
            <div className='div-right-btn-gameplanmenu'>
                <a><button onClick={ControlMatchStartValue} className='buttons-gameplanmenu'>{txtTurnBackButton}</button></a>
            </div>
        </div>
    </div>
  )
}

export default Gameplanmenu;
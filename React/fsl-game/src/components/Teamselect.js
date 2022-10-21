import React, { useState } from "react";
import { BrowserRouter as Route, Router, Link, Navigate } from 'react-router-dom'
import "./Teamselect.css";
import Leagues from "../leagues.json";
import { useSelector, useDispatch } from "react-redux";

import {
  setHomeTeamValue,
  setHomeTeamValuePlus,
  setHomeTeamValueSour,
  setAwayTeamValue,
  setAwayTeamValuePlus,
  setAwayTeamValueSour,
} from "../redux/teamSelectSlice";

import {
  setTeamFormationGet1,
  setTeamFormationGet2,
  setTeamFormationGet3,
  setTeamFormationGet4,
  setHomeTeamGetValueGk1,
  setHomeTeamGetValueLb1,
  setHomeTeamGetValueCb1,
  setHomeTeamGetValueCb2,
  setHomeTeamGetValueRb1,
  setHomeTeamGetValueDm1,
  setHomeTeamGetValueCm1,
  setHomeTeamGetValueCm2,
  setHomeTeamGetValueLw1,
  setHomeTeamGetValueRw1,
  setHomeTeamGetValueSt1,
  setAwayTeamGetValueGk2,
  setAwayTeamGetValueLb2,
  setAwayTeamGetValueCb4,
  setAwayTeamGetValueCb3,
  setAwayTeamGetValueRb2,
  setAwayTeamGetValueDm2,
  setAwayTeamGetValueCm4,
  setAwayTeamGetValueCm3,
  setAwayTeamGetValueLw2,
  setAwayTeamGetValueRw2,
  setAwayTeamGetValueSt2,
  setSamePlayerValueId_f,
  setSamePlayerValueId_t,
  setSubPlayerVisible1_t,
  setSubPlayerVisible1_f,
  setSubPlayerVisible2_t,
  setSubPlayerVisible2_f,
  setSubPlayerVisible3_t,
  setSubPlayerVisible3_f,
  setSubPlayerVisible4_t,
  setSubPlayerVisible4_f,
  setSubPlayerVisible5_t,
  setSubPlayerVisible5_f,
  setSubPlayerVisible6_t,
  setSubPlayerVisible6_f,
  setSubPlayerVisible7_t,
  setSubPlayerVisible7_f,
  setSubPlayerVisible8_t,
  setSubPlayerVisible8_f,
  setSubPlayerVisible9_t,
  setSubPlayerVisible9_f,
  setSubPlayerVisible10_t,
  setSubPlayerVisible10_f,
  setSubPlayerVisible11_t,
  setSubPlayerVisible11_f,
  setSubPlayerVisible12_t,
  setSubPlayerVisible12_f,
  setSubPlayerVisible13_t,
  setSubPlayerVisible13_f,
  setSubPlayerVisible14_t,
  setSubPlayerVisible14_f,
  setSubPlayerVisible15_t,
  setSubPlayerVisible15_f,
  setSubPlayerVisible16_t,
  setSubPlayerVisible16_f,
  setSubPlayerVisible17_t,
  setSubPlayerVisible17_f,
  setSubPlayerVisible18_t,
  setSubPlayerVisible18_f,
  setSubPlayerVisible19_t,
  setSubPlayerVisible19_f,
  setSubPlayerVisible20_t,
  setSubPlayerVisible20_f,
  setSubPlayerVisible21_t,
  setSubPlayerVisible21_f,
  setSubPlayerVisible22_t,
  setSubPlayerVisible22_f,
  setSubPlayerVisible23_t,
  setSubPlayerVisible23_f,
  setSubPlayerVisible24_t,
  setSubPlayerVisible24_f,
  setSubPlayerVisible25_t,
  setSubPlayerVisible25_f,
  setSubPlayerVisible26_t,
  setSubPlayerVisible26_f,
  setSubPlayerVisible27_t,
  setSubPlayerVisible27_f,
  setSubPlayerVisible28_t,
  setSubPlayerVisible28_f,
  setSubPlayerVisible29_t,
  setSubPlayerVisible29_f,
  setSubPlayerVisible30_t,
  setSubPlayerVisible30_f,
  setSubPlayerVisible31_t,
  setSubPlayerVisible31_f,
  setSubPlayerVisible32_t,
  setSubPlayerVisible32_f,
  setSubPlayerVisible33_t,
  setSubPlayerVisible33_f,
  setSubPlayerVisible34_t,
  setSubPlayerVisible34_f,
  setSubPlayerVisible35_t,
  setSubPlayerVisible35_f,
  setSubPlayerVisible36_t,
  setSubPlayerVisible36_f,
  setSubPlayerVisible37_t,
  setSubPlayerVisible37_f,
  setSubPlayerVisible38_t,
  setSubPlayerVisible38_f,
} from "../redux/gamePlanMenuSlice";

import {
  setPlayOrGameplanFormationGet1,
  setPlayOrGameplanFormationGet2,
  setPlayOrGameplanFormationGet3,
  setPlayOrGameplanFormationGet4,
} from "../redux/playOrGamePlanSlice";

import Languages from "../languages.json";

import {
  GetMatchStartValue_off,
  GetMatchStartValue_on,
  GetPanelValue_p,
  GetPanelValue_e,
  GetPanelValue_s,
  GetRightPlayerChange_Sour,
  GetMatchMinutesValue_Plus,
  GetMatchMinutesValue,
  GetRightPlayerChange_Plus,
  GetRightPlayerChange_3,
  GetMatchScreenStartValue_on,
  GetMatchScreenStartValue_off,
  SetHomeTeam_gk1_energy,
  SetHomeTeam_gk1_energy_1,
  SetHomeTeam_gk1_energy_2,
  SetHomeTeam_gk1_energy_3,
  SetHomeTeam_gk1_energy_4,
  SetHomeTeam_lb1_energy,
  SetHomeTeam_lb1_energy_1,
  SetHomeTeam_lb1_energy_2,
  SetHomeTeam_lb1_energy_3,
  SetHomeTeam_lb1_energy_4,
  SetHomeTeam_lb1_energy_5,
  SetHomeTeam_cb1_energy,
  SetHomeTeam_cb1_energy_1,
  SetHomeTeam_cb1_energy_2,
  SetHomeTeam_cb1_energy_3,
  SetHomeTeam_cb1_energy_4,
  SetHomeTeam_cb1_energy_5,
  SetHomeTeam_cb2_energy,
  SetHomeTeam_cb2_energy_1,
  SetHomeTeam_cb2_energy_2,
  SetHomeTeam_cb2_energy_3,
  SetHomeTeam_cb2_energy_4,
  SetHomeTeam_cb2_energy_5,
  SetHomeTeam_rb1_energy,
  SetHomeTeam_rb1_energy_1,
  SetHomeTeam_rb1_energy_2,
  SetHomeTeam_rb1_energy_3,
  SetHomeTeam_rb1_energy_4,
  SetHomeTeam_rb1_energy_5,
  SetHomeTeam_dm1_energy,
  SetHomeTeam_dm1_energy_1,
  SetHomeTeam_dm1_energy_2,
  SetHomeTeam_dm1_energy_3,
  SetHomeTeam_dm1_energy_4,
  SetHomeTeam_dm1_energy_5,
  SetHomeTeam_cm1_energy,
  SetHomeTeam_cm1_energy_1,
  SetHomeTeam_cm1_energy_2,
  SetHomeTeam_cm1_energy_3,
  SetHomeTeam_cm1_energy_4,
  SetHomeTeam_cm1_energy_5,
  SetHomeTeam_cm2_energy,
  SetHomeTeam_cm2_energy_1,
  SetHomeTeam_cm2_energy_2,
  SetHomeTeam_cm2_energy_3,
  SetHomeTeam_cm2_energy_4,
  SetHomeTeam_cm2_energy_5,
  SetHomeTeam_lw1_energy,
  SetHomeTeam_lw1_energy_1,
  SetHomeTeam_lw1_energy_2,
  SetHomeTeam_lw1_energy_3,
  SetHomeTeam_lw1_energy_4,
  SetHomeTeam_lw1_energy_5,
  SetHomeTeam_rw1_energy,
  SetHomeTeam_rw1_energy_1,
  SetHomeTeam_rw1_energy_2,
  SetHomeTeam_rw1_energy_3,
  SetHomeTeam_rw1_energy_4,
  SetHomeTeam_rw1_energy_5,
  SetHomeTeam_st1_energy,
  SetHomeTeam_st1_energy_1,
  SetHomeTeam_st1_energy_2,
  SetHomeTeam_st1_energy_3,
  SetHomeTeam_st1_energy_4,
  SetHomeTeam_st1_energy_5,
  SetAwayTeam_gk2_energy,
  SetAwayTeam_gk2_energy_1,
  SetAwayTeam_gk2_energy_2,
  SetAwayTeam_gk2_energy_3,
  SetAwayTeam_gk2_energy_4,
  SetAwayTeam_lb2_energy,
  SetAwayTeam_lb2_energy_1,
  SetAwayTeam_lb2_energy_2,
  SetAwayTeam_lb2_energy_3,
  SetAwayTeam_lb2_energy_4,
  SetAwayTeam_lb2_energy_5,
  SetAwayTeam_cb4_energy,
  SetAwayTeam_cb4_energy_1,
  SetAwayTeam_cb4_energy_2,
  SetAwayTeam_cb4_energy_3,
  SetAwayTeam_cb4_energy_4,
  SetAwayTeam_cb4_energy_5,
  SetAwayTeam_cb3_energy,
  SetAwayTeam_cb3_energy_1,
  SetAwayTeam_cb3_energy_2,
  SetAwayTeam_cb3_energy_3,
  SetAwayTeam_cb3_energy_4,
  SetAwayTeam_cb3_energy_5,
  SetAwayTeam_rb2_energy,
  SetAwayTeam_rb2_energy_1,
  SetAwayTeam_rb2_energy_2,
  SetAwayTeam_rb2_energy_3,
  SetAwayTeam_rb2_energy_4,
  SetAwayTeam_rb2_energy_5,
  SetAwayTeam_dm2_energy,
  SetAwayTeam_dm2_energy_1,
  SetAwayTeam_dm2_energy_2,
  SetAwayTeam_dm2_energy_3,
  SetAwayTeam_dm2_energy_4,
  SetAwayTeam_dm2_energy_5,
  SetAwayTeam_cm4_energy,
  SetAwayTeam_cm4_energy_1,
  SetAwayTeam_cm4_energy_2,
  SetAwayTeam_cm4_energy_3,
  SetAwayTeam_cm4_energy_4,
  SetAwayTeam_cm4_energy_5,
  SetAwayTeam_cm3_energy,
  SetAwayTeam_cm3_energy_1,
  SetAwayTeam_cm3_energy_2,
  SetAwayTeam_cm3_energy_3,
  SetAwayTeam_cm3_energy_4,
  SetAwayTeam_cm3_energy_5,
  SetAwayTeam_lw2_energy,
  SetAwayTeam_lw2_energy_1,
  SetAwayTeam_lw2_energy_2,
  SetAwayTeam_lw2_energy_3,
  SetAwayTeam_lw2_energy_4,
  SetAwayTeam_lw2_energy_5,
  SetAwayTeam_rw2_energy,
  SetAwayTeam_rw2_energy_1,
  SetAwayTeam_rw2_energy_2,
  SetAwayTeam_rw2_energy_3,
  SetAwayTeam_rw2_energy_4,
  SetAwayTeam_rw2_energy_5,
  SetAwayTeam_st2_energy,
  SetAwayTeam_st2_energy_1,
  SetAwayTeam_st2_energy_2,
  SetAwayTeam_st2_energy_3,
  SetAwayTeam_st2_energy_4,
  SetAwayTeam_st2_energy_5,
  SetFirsthalf_minutes1,
  SetFirsthalf_minutes1_txt,
  SetFirsthalf_event1,
  SetFirsthalf_event1_goal,
  SetFirsthalf_event1_noGoal,
  SetFirsthalf_event1_foul,
  SetFirsthalf_event1_goalCorner,
  SetFirsthalf_event1_goalPen,
  SetFirsthalf_event1_goalFreekick,
  SetFirsthalf_event1_noGoalCorner,
  SetFirsthalf_event1_noGoalPen,
  SetFirsthalf_event1_noGoalFreekick,
  SetFirsthalf_event1_offside,
  SetFirsthalf_name1,
  SetFirsthalf_name1_t1_gk1,
  SetFirsthalf_name1_t1_lb1,
  SetFirsthalf_name1_t1_cb1,
  SetFirsthalf_name1_t1_cb2,
  SetFirsthalf_name1_t1_rb1,
  SetFirsthalf_name1_t1_dm1,
  SetFirsthalf_name1_t1_cm1,
  SetFirsthalf_name1_t1_cm2,
  SetFirsthalf_name1_t1_lw1,
  SetFirsthalf_name1_t1_rw1,
  SetFirsthalf_name1_t1_st1,
  SetFirsthalf_name1_t2_gk2,
  SetFirsthalf_name1_t2_lb2,
  SetFirsthalf_name1_t2_cb4,
  SetFirsthalf_name1_t2_cb3,
  SetFirsthalf_name1_t2_rb2,
  SetFirsthalf_name1_t2_dm2,
  SetFirsthalf_name1_t2_cm4,
  SetFirsthalf_name1_t2_cm3,
  SetFirsthalf_name1_t2_lw2,
  SetFirsthalf_name1_t2_rw2,
  SetFirsthalf_name1_t2_st2,
  SetFirsthalf_surname1,
  SetFirsthalf_surname1_t1_gk1,
  SetFirsthalf_surname1_t1_lb1,
  SetFirsthalf_surname1_t1_cb1,
  SetFirsthalf_surname1_t1_cb2,
  SetFirsthalf_surname1_t1_rb1,
  SetFirsthalf_surname1_t1_dm1,
  SetFirsthalf_surname1_t1_cm1,
  SetFirsthalf_surname1_t1_cm2,
  SetFirsthalf_surname1_t1_lw1,
  SetFirsthalf_surname1_t1_rw1,
  SetFirsthalf_surname1_t1_st1,
  SetFirsthalf_surname1_t2_gk2,
  SetFirsthalf_surname1_t2_lb2,
  SetFirsthalf_surname1_t2_cb4,
  SetFirsthalf_surname1_t2_cb3,
  SetFirsthalf_surname1_t2_rb2,
  SetFirsthalf_surname1_t2_dm2,
  SetFirsthalf_surname1_t2_cm4,
  SetFirsthalf_surname1_t2_cm3,
  SetFirsthalf_surname1_t2_lw2,
  SetFirsthalf_surname1_t2_rw2,
  SetFirsthalf_surname1_t2_st2,
  SetFirsthalf_team1_NoTeam,
  SetFirsthalf_team1_homeTeam,
  SetFirsthalf_team1_awayTeam,
  SetFirsthalf_minutes2,
  SetFirsthalf_minutes2_txt,
  SetFirsthalf_event2,
  SetFirsthalf_event2_goal,
  SetFirsthalf_event2_noGoal,
  SetFirsthalf_event2_foul,
  SetFirsthalf_event2_goalCorner,
  SetFirsthalf_event2_goalPen,
  SetFirsthalf_event2_goalFreekick,
  SetFirsthalf_event2_noGoalCorner,
  SetFirsthalf_event2_noGoalPen,
  SetFirsthalf_event2_noGoalFreekick,
  SetFirsthalf_event2_offside,
  SetFirsthalf_name2,
  SetFirsthalf_name2_t1_gk1,
  SetFirsthalf_name2_t1_lb1,
  SetFirsthalf_name2_t1_cb1,
  SetFirsthalf_name2_t1_cb2,
  SetFirsthalf_name2_t1_rb1,
  SetFirsthalf_name2_t1_dm1,
  SetFirsthalf_name2_t1_cm1,
  SetFirsthalf_name2_t1_cm2,
  SetFirsthalf_name2_t1_lw1,
  SetFirsthalf_name2_t1_rw1,
  SetFirsthalf_name2_t1_st1,
  SetFirsthalf_name2_t2_gk2,
  SetFirsthalf_name2_t2_lb2,
  SetFirsthalf_name2_t2_cb4,
  SetFirsthalf_name2_t2_cb3,
  SetFirsthalf_name2_t2_rb2,
  SetFirsthalf_name2_t2_dm2,
  SetFirsthalf_name2_t2_cm4,
  SetFirsthalf_name2_t2_cm3,
  SetFirsthalf_name2_t2_lw2,
  SetFirsthalf_name2_t2_rw2,
  SetFirsthalf_name2_t2_st2,
  SetFirsthalf_surname2,
  SetFirsthalf_surname2_t1_gk1,
  SetFirsthalf_surname2_t1_lb1,
  SetFirsthalf_surname2_t1_cb1,
  SetFirsthalf_surname2_t1_cb2,
  SetFirsthalf_surname2_t1_rb1,
  SetFirsthalf_surname2_t1_dm1,
  SetFirsthalf_surname2_t1_cm1,
  SetFirsthalf_surname2_t1_cm2,
  SetFirsthalf_surname2_t1_lw1,
  SetFirsthalf_surname2_t1_rw1,
  SetFirsthalf_surname2_t1_st1,
  SetFirsthalf_surname2_t2_gk2,
  SetFirsthalf_surname2_t2_lb2,
  SetFirsthalf_surname2_t2_cb4,
  SetFirsthalf_surname2_t2_cb3,
  SetFirsthalf_surname2_t2_rb2,
  SetFirsthalf_surname2_t2_dm2,
  SetFirsthalf_surname2_t2_cm4,
  SetFirsthalf_surname2_t2_cm3,
  SetFirsthalf_surname2_t2_lw2,
  SetFirsthalf_surname2_t2_rw2,
  SetFirsthalf_surname2_t2_st2,
  SetFirsthalf_team2_NoTeam,
  SetFirsthalf_team2_homeTeam,
  SetFirsthalf_team2_awayTeam,
  SetFirsthalf_minutes3,
  SetFirsthalf_minutes3_txt,
  SetFirsthalf_event3,
  SetFirsthalf_event3_goal,
  SetFirsthalf_event3_noGoal,
  SetFirsthalf_event3_foul,
  SetFirsthalf_event3_goalCorner,
  SetFirsthalf_event3_goalPen,
  SetFirsthalf_event3_goalFreekick,
  SetFirsthalf_event3_noGoalCorner,
  SetFirsthalf_event3_noGoalPen,
  SetFirsthalf_event3_noGoalFreekick,
  SetFirsthalf_event3_offside,
  SetFirsthalf_name3,
  SetFirsthalf_name3_t1_gk1,
  SetFirsthalf_name3_t1_lb1,
  SetFirsthalf_name3_t1_cb1,
  SetFirsthalf_name3_t1_cb2,
  SetFirsthalf_name3_t1_rb1,
  SetFirsthalf_name3_t1_dm1,
  SetFirsthalf_name3_t1_cm1,
  SetFirsthalf_name3_t1_cm2,
  SetFirsthalf_name3_t1_lw1,
  SetFirsthalf_name3_t1_rw1,
  SetFirsthalf_name3_t1_st1,
  SetFirsthalf_name3_t2_gk2,
  SetFirsthalf_name3_t2_lb2,
  SetFirsthalf_name3_t2_cb4,
  SetFirsthalf_name3_t2_cb3,
  SetFirsthalf_name3_t2_rb2,
  SetFirsthalf_name3_t2_dm2,
  SetFirsthalf_name3_t2_cm4,
  SetFirsthalf_name3_t2_cm3,
  SetFirsthalf_name3_t2_lw2,
  SetFirsthalf_name3_t2_rw2,
  SetFirsthalf_name3_t2_st2,
  SetFirsthalf_surname3,
  SetFirsthalf_surname3_t1_gk1,
  SetFirsthalf_surname3_t1_lb1,
  SetFirsthalf_surname3_t1_cb1,
  SetFirsthalf_surname3_t1_cb2,
  SetFirsthalf_surname3_t1_rb1,
  SetFirsthalf_surname3_t1_dm1,
  SetFirsthalf_surname3_t1_cm1,
  SetFirsthalf_surname3_t1_cm2,
  SetFirsthalf_surname3_t1_lw1,
  SetFirsthalf_surname3_t1_rw1,
  SetFirsthalf_surname3_t1_st1,
  SetFirsthalf_surname3_t2_gk2,
  SetFirsthalf_surname3_t2_lb2,
  SetFirsthalf_surname3_t2_cb4,
  SetFirsthalf_surname3_t2_cb3,
  SetFirsthalf_surname3_t2_rb2,
  SetFirsthalf_surname3_t2_dm2,
  SetFirsthalf_surname3_t2_cm4,
  SetFirsthalf_surname3_t2_cm3,
  SetFirsthalf_surname3_t2_lw2,
  SetFirsthalf_surname3_t2_rw2,
  SetFirsthalf_surname3_t2_st2,
  SetFirsthalf_team3_NoTeam,
  SetFirsthalf_team3_homeTeam,
  SetFirsthalf_team3_awayTeam,
  SetFirsthalf_minutes4,
  SetFirsthalf_minutes4_txt,
  SetFirsthalf_event4,
  SetFirsthalf_event4_goal,
  SetFirsthalf_event4_noGoal,
  SetFirsthalf_event4_foul,
  SetFirsthalf_event4_goalCorner,
  SetFirsthalf_event4_goalPen,
  SetFirsthalf_event4_goalFreekick,
  SetFirsthalf_event4_noGoalCorner,
  SetFirsthalf_event4_noGoalPen,
  SetFirsthalf_event4_noGoalFreekick,
  SetFirsthalf_event4_offside,
  SetFirsthalf_name4,
  SetFirsthalf_name4_t1_gk1,
  SetFirsthalf_name4_t1_lb1,
  SetFirsthalf_name4_t1_cb1,
  SetFirsthalf_name4_t1_cb2,
  SetFirsthalf_name4_t1_rb1,
  SetFirsthalf_name4_t1_dm1,
  SetFirsthalf_name4_t1_cm1,
  SetFirsthalf_name4_t1_cm2,
  SetFirsthalf_name4_t1_lw1,
  SetFirsthalf_name4_t1_rw1,
  SetFirsthalf_name4_t1_st1,
  SetFirsthalf_name4_t2_gk2,
  SetFirsthalf_name4_t2_lb2,
  SetFirsthalf_name4_t2_cb4,
  SetFirsthalf_name4_t2_cb3,
  SetFirsthalf_name4_t2_rb2,
  SetFirsthalf_name4_t2_dm2,
  SetFirsthalf_name4_t2_cm4,
  SetFirsthalf_name4_t2_cm3,
  SetFirsthalf_name4_t2_lw2,
  SetFirsthalf_name4_t2_rw2,
  SetFirsthalf_name4_t2_st2,
  SetFirsthalf_surname4,
  SetFirsthalf_surname4_t1_gk1,
  SetFirsthalf_surname4_t1_lb1,
  SetFirsthalf_surname4_t1_cb1,
  SetFirsthalf_surname4_t1_cb2,
  SetFirsthalf_surname4_t1_rb1,
  SetFirsthalf_surname4_t1_dm1,
  SetFirsthalf_surname4_t1_cm1,
  SetFirsthalf_surname4_t1_cm2,
  SetFirsthalf_surname4_t1_lw1,
  SetFirsthalf_surname4_t1_rw1,
  SetFirsthalf_surname4_t1_st1,
  SetFirsthalf_surname4_t2_gk2,
  SetFirsthalf_surname4_t2_lb2,
  SetFirsthalf_surname4_t2_cb4,
  SetFirsthalf_surname4_t2_cb3,
  SetFirsthalf_surname4_t2_rb2,
  SetFirsthalf_surname4_t2_dm2,
  SetFirsthalf_surname4_t2_cm4,
  SetFirsthalf_surname4_t2_cm3,
  SetFirsthalf_surname4_t2_lw2,
  SetFirsthalf_surname4_t2_rw2,
  SetFirsthalf_surname4_t2_st2,
  SetFirsthalf_team4_NoTeam,
  SetFirsthalf_team4_homeTeam,
  SetFirsthalf_team4_awayTeam,
  SetFirsthalf_minutes5,
  SetFirsthalf_minutes5_txt,
  SetFirsthalf_event5,
  SetFirsthalf_event5_goal,
  SetFirsthalf_event5_noGoal,
  SetFirsthalf_event5_foul,
  SetFirsthalf_event5_goalCorner,
  SetFirsthalf_event5_goalPen,
  SetFirsthalf_event5_goalFreekick,
  SetFirsthalf_event5_noGoalCorner,
  SetFirsthalf_event5_noGoalPen,
  SetFirsthalf_event5_noGoalFreekick,
  SetFirsthalf_event5_offside,
  SetFirsthalf_name5,
  SetFirsthalf_name5_t1_gk1,
  SetFirsthalf_name5_t1_lb1,
  SetFirsthalf_name5_t1_cb1,
  SetFirsthalf_name5_t1_cb2,
  SetFirsthalf_name5_t1_rb1,
  SetFirsthalf_name5_t1_dm1,
  SetFirsthalf_name5_t1_cm1,
  SetFirsthalf_name5_t1_cm2,
  SetFirsthalf_name5_t1_lw1,
  SetFirsthalf_name5_t1_rw1,
  SetFirsthalf_name5_t1_st1,
  SetFirsthalf_name5_t2_gk2,
  SetFirsthalf_name5_t2_lb2,
  SetFirsthalf_name5_t2_cb4,
  SetFirsthalf_name5_t2_cb3,
  SetFirsthalf_name5_t2_rb2,
  SetFirsthalf_name5_t2_dm2,
  SetFirsthalf_name5_t2_cm4,
  SetFirsthalf_name5_t2_cm3,
  SetFirsthalf_name5_t2_lw2,
  SetFirsthalf_name5_t2_rw2,
  SetFirsthalf_name5_t2_st2,
  SetFirsthalf_surname5,
  SetFirsthalf_surname5_t1_gk1,
  SetFirsthalf_surname5_t1_lb1,
  SetFirsthalf_surname5_t1_cb1,
  SetFirsthalf_surname5_t1_cb2,
  SetFirsthalf_surname5_t1_rb1,
  SetFirsthalf_surname5_t1_dm1,
  SetFirsthalf_surname5_t1_cm1,
  SetFirsthalf_surname5_t1_cm2,
  SetFirsthalf_surname5_t1_lw1,
  SetFirsthalf_surname5_t1_rw1,
  SetFirsthalf_surname5_t1_st1,
  SetFirsthalf_surname5_t2_gk2,
  SetFirsthalf_surname5_t2_lb2,
  SetFirsthalf_surname5_t2_cb4,
  SetFirsthalf_surname5_t2_cb3,
  SetFirsthalf_surname5_t2_rb2,
  SetFirsthalf_surname5_t2_dm2,
  SetFirsthalf_surname5_t2_cm4,
  SetFirsthalf_surname5_t2_cm3,
  SetFirsthalf_surname5_t2_lw2,
  SetFirsthalf_surname5_t2_rw2,
  SetFirsthalf_surname5_t2_st2,
  SetFirsthalf_team5_NoTeam,
  SetFirsthalf_team5_homeTeam,
  SetFirsthalf_team5_awayTeam,
  SetFirsthalf_minutes6,
  SetFirsthalf_minutes6_txt,
  SetFirsthalf_event6,
  SetFirsthalf_event6_goal,
  SetFirsthalf_event6_noGoal,
  SetFirsthalf_event6_foul,
  SetFirsthalf_event6_goalCorner,
  SetFirsthalf_event6_goalPen,
  SetFirsthalf_event6_goalFreekick,
  SetFirsthalf_event6_noGoalCorner,
  SetFirsthalf_event6_noGoalPen,
  SetFirsthalf_event6_noGoalFreekick,
  SetFirsthalf_event6_offside,
  SetFirsthalf_name6,
  SetFirsthalf_name6_t1_gk1,
  SetFirsthalf_name6_t1_lb1,
  SetFirsthalf_name6_t1_cb1,
  SetFirsthalf_name6_t1_cb2,
  SetFirsthalf_name6_t1_rb1,
  SetFirsthalf_name6_t1_dm1,
  SetFirsthalf_name6_t1_cm1,
  SetFirsthalf_name6_t1_cm2,
  SetFirsthalf_name6_t1_lw1,
  SetFirsthalf_name6_t1_rw1,
  SetFirsthalf_name6_t1_st1,
  SetFirsthalf_name6_t2_gk2,
  SetFirsthalf_name6_t2_lb2,
  SetFirsthalf_name6_t2_cb4,
  SetFirsthalf_name6_t2_cb3,
  SetFirsthalf_name6_t2_rb2,
  SetFirsthalf_name6_t2_dm2,
  SetFirsthalf_name6_t2_cm4,
  SetFirsthalf_name6_t2_cm3,
  SetFirsthalf_name6_t2_lw2,
  SetFirsthalf_name6_t2_rw2,
  SetFirsthalf_name6_t2_st2,
  SetFirsthalf_surname6,
  SetFirsthalf_surname6_t1_gk1,
  SetFirsthalf_surname6_t1_lb1,
  SetFirsthalf_surname6_t1_cb1,
  SetFirsthalf_surname6_t1_cb2,
  SetFirsthalf_surname6_t1_rb1,
  SetFirsthalf_surname6_t1_dm1,
  SetFirsthalf_surname6_t1_cm1,
  SetFirsthalf_surname6_t1_cm2,
  SetFirsthalf_surname6_t1_lw1,
  SetFirsthalf_surname6_t1_rw1,
  SetFirsthalf_surname6_t1_st1,
  SetFirsthalf_surname6_t2_gk2,
  SetFirsthalf_surname6_t2_lb2,
  SetFirsthalf_surname6_t2_cb4,
  SetFirsthalf_surname6_t2_cb3,
  SetFirsthalf_surname6_t2_rb2,
  SetFirsthalf_surname6_t2_dm2,
  SetFirsthalf_surname6_t2_cm4,
  SetFirsthalf_surname6_t2_cm3,
  SetFirsthalf_surname6_t2_lw2,
  SetFirsthalf_surname6_t2_rw2,
  SetFirsthalf_surname6_t2_st2,
  SetFirsthalf_team6_NoTeam,
  SetFirsthalf_team6_homeTeam,
  SetFirsthalf_team6_awayTeam,
  SetFirsthalf_minutes7,
  SetFirsthalf_minutes7_txt,
  SetFirsthalf_event7,
  SetFirsthalf_event7_goal,
  SetFirsthalf_event7_noGoal,
  SetFirsthalf_event7_foul,
  SetFirsthalf_event7_goalCorner,
  SetFirsthalf_event7_goalPen,
  SetFirsthalf_event7_goalFreekick,
  SetFirsthalf_event7_noGoalCorner,
  SetFirsthalf_event7_noGoalPen,
  SetFirsthalf_event7_noGoalFreekick,
  SetFirsthalf_event7_offside,
  SetFirsthalf_name7,
  SetFirsthalf_name7_t1_gk1,
  SetFirsthalf_name7_t1_lb1,
  SetFirsthalf_name7_t1_cb1,
  SetFirsthalf_name7_t1_cb2,
  SetFirsthalf_name7_t1_rb1,
  SetFirsthalf_name7_t1_dm1,
  SetFirsthalf_name7_t1_cm1,
  SetFirsthalf_name7_t1_cm2,
  SetFirsthalf_name7_t1_lw1,
  SetFirsthalf_name7_t1_rw1,
  SetFirsthalf_name7_t1_st1,
  SetFirsthalf_name7_t2_gk2,
  SetFirsthalf_name7_t2_lb2,
  SetFirsthalf_name7_t2_cb4,
  SetFirsthalf_name7_t2_cb3,
  SetFirsthalf_name7_t2_rb2,
  SetFirsthalf_name7_t2_dm2,
  SetFirsthalf_name7_t2_cm4,
  SetFirsthalf_name7_t2_cm3,
  SetFirsthalf_name7_t2_lw2,
  SetFirsthalf_name7_t2_rw2,
  SetFirsthalf_name7_t2_st2,
  SetFirsthalf_surname7,
  SetFirsthalf_surname7_t1_gk1,
  SetFirsthalf_surname7_t1_lb1,
  SetFirsthalf_surname7_t1_cb1,
  SetFirsthalf_surname7_t1_cb2,
  SetFirsthalf_surname7_t1_rb1,
  SetFirsthalf_surname7_t1_dm1,
  SetFirsthalf_surname7_t1_cm1,
  SetFirsthalf_surname7_t1_cm2,
  SetFirsthalf_surname7_t1_lw1,
  SetFirsthalf_surname7_t1_rw1,
  SetFirsthalf_surname7_t1_st1,
  SetFirsthalf_surname7_t2_gk2,
  SetFirsthalf_surname7_t2_lb2,
  SetFirsthalf_surname7_t2_cb4,
  SetFirsthalf_surname7_t2_cb3,
  SetFirsthalf_surname7_t2_rb2,
  SetFirsthalf_surname7_t2_dm2,
  SetFirsthalf_surname7_t2_cm4,
  SetFirsthalf_surname7_t2_cm3,
  SetFirsthalf_surname7_t2_lw2,
  SetFirsthalf_surname7_t2_rw2,
  SetFirsthalf_surname7_t2_st2,
  SetFirsthalf_team7_NoTeam,
  SetFirsthalf_team7_homeTeam,
  SetFirsthalf_team7_awayTeam,
  SetSecondhalf_minutes1,
  SetSecondhalf_minutes1_txt,
  SetSecondhalf_event1,
  SetSecondhalf_event1_goal,
  SetSecondhalf_event1_noGoal,
  SetSecondhalf_event1_foul,
  SetSecondhalf_event1_goalCorner,
  SetSecondhalf_event1_goalPen,
  SetSecondhalf_event1_goalFreekick,
  SetSecondhalf_event1_noGoalCorner,
  SetSecondhalf_event1_noGoalPen,
  SetSecondhalf_event1_noGoalFreekick,
  SetSecondhalf_event1_offside,
  SetSecondhalf_name1,
  SetSecondhalf_name1_t1_gk1,
  SetSecondhalf_name1_t1_lb1,
  SetSecondhalf_name1_t1_cb1,
  SetSecondhalf_name1_t1_cb2,
  SetSecondhalf_name1_t1_rb1,
  SetSecondhalf_name1_t1_dm1,
  SetSecondhalf_name1_t1_cm1,
  SetSecondhalf_name1_t1_cm2,
  SetSecondhalf_name1_t1_lw1,
  SetSecondhalfSetFirsthalf_name1_t1_rw1,
  SetSecondhalf_name1_t1_st1,
  SetSecondhalf_name1_t2_gk2,
  SetSecondhalf_name1_t2_lb2,
  SetSecondhalf_name1_t2_cb4,
  SetSecondhalf_name1_t2_cb3,
  SetSecondhalf_name1_t2_rb2,
  SetSecondhalf_name1_t2_dm2,
  SetSecondhalf_name1_t2_cm4,
  SetSecondhalf_name1_t2_cm3,
  SetSecondhalf_name1_t2_lw2,
  SetSecondhalf_name1_t2_rw2,
  SetSecondhalf_name1_t2_st2,
  SetSecondhalf_surname1,
  SetSecondhalf_surname1_t1_gk1,
  SetSecondhalf_surname1_t1_lb1,
  SetSecondhalf_surname1_t1_cb1,
  SetSecondhalf_surname1_t1_cb2,
  SetSecondhalf_surname1_t1_rb1,
  SetSecondhalf_surname1_t1_dm1,
  SetSecondhalf_surname1_t1_cm1,
  SetSecondhalf_surname1_t1_cm2,
  SetSecondhalf_surname1_t1_lw1,
  SetSecondhalf_surname1_t1_rw1,
  SetSecondhalf_surname1_t1_st1,
  SetSecondhalf_surname1_t2_gk2,
  SetSecondhalf_surname1_t2_lb2,
  SetSecondhalf_surname1_t2_cb4,
  SetSecondhalf_surname1_t2_cb3,
  SetSecondhalf_surname1_t2_rb2,
  SetSecondhalf_surname1_t2_dm2,
  SetSecondhalf_surname1_t2_cm4,
  SetSecondhalf_surname1_t2_cm3,
  SetSecondhalf_surname1_t2_lw2,
  SetSecondhalf_surname1_t2_rw2,
  SetSecondhalf_surname1_t2_st2,
  SetSecondhalf_team1_NoTeam,
  SetSecondhalf_team1_homeTeam,
  SetSecondhalf_team1_awayTeam,
  SetSecondhalf_minutes2,
  SetSecondhalf_minutes2_txt,
  SetSecondhalf_event2,
  SetSecondhalf_event2_goal,
  SetSecondhalf_event2_noGoal,
  SetSecondhalf_event2_foul,
  SetSecondhalf_event2_goalCorner,
  SetSecondhalf_event2_goalPen,
  SetSecondhalf_event2_goalFreekick,
  SetSecondhalf_event2_noGoalCorner,
  SetSecondhalf_event2_noGoalPen,
  SetSecondhalf_event2_noGoalFreekick,
  SetSecondhalf_event2_offside,
  SetSecondhalf_name2,
  SetSecondhalf_name2_t1_gk1,
  SetSecondhalf_name2_t1_lb1,
  SetSecondhalf_name2_t1_cb1,
  SetSecondhalf_name2_t1_cb2,
  SetSecondhalf_name2_t1_rb1,
  SetSecondhalf_name2_t1_dm1,
  SetSecondhalf_name2_t1_cm1,
  SetSecondhalf_name2_t1_cm2,
  SetSecondhalf_name2_t1_lw1,
  SetSecondhalf_name2_t1_rw1,
  SetSecondhalf_name2_t1_st1,
  SetSecondhalf_name2_t2_gk2,
  SetSecondhalf_name2_t2_lb2,
  SetSecondhalf_name2_t2_cb4,
  SetSecondhalf_name2_t2_cb3,
  SetSecondhalf_name2_t2_rb2,
  SetSecondhalf_name2_t2_dm2,
  SetSecondhalf_name2_t2_cm4,
  SetSecondhalf_name2_t2_cm3,
  SetSecondhalf_name2_t2_lw2,
  SetSecondhalf_name2_t2_rw2,
  SetSecondhalf_name2_t2_st2,
  SetSecondhalf_surname2,
  SetSecondhalf_surname2_t1_gk1,
  SetSecondhalf_surname2_t1_lb1,
  SetSecondhalf_surname2_t1_cb1,
  SetSecondhalf_surname2_t1_cb2,
  SetSecondhalf_surname2_t1_rb1,
  SetSecondhalf_surname2_t1_dm1,
  SetSecondhalf_surname2_t1_cm1,
  SetSecondhalf_surname2_t1_cm2,
  SetSecondhalf_surname2_t1_lw1,
  SetSecondhalf_surname2_t1_rw1,
  SetSecondhalf_surname2_t1_st1,
  SetSecondhalf_surname2_t2_gk2,
  SetSecondhalf_surname2_t2_lb2,
  SetSecondhalf_surname2_t2_cb4,
  SetSecondhalf_surname2_t2_cb3,
  SetSecondhalf_surname2_t2_rb2,
  SetSecondhalf_surname2_t2_dm2,
  SetSecondhalf_surname2_t2_cm4,
  SetSecondhalf_surname2_t2_cm3,
  SetSecondhalf_surname2_t2_lw2,
  SetSecondhalf_surname2_t2_rw2,
  SetSecondhalf_surname2_t2_st2,
  SetSecondhalf_team2_NoTeam,
  SetSecondhalf_team2_homeTeam,
  SetSecondhalf_team2_awayTeam,
  SetSecondhalf_minutes3,
  SetSecondhalf_minutes3_txt,
  SetSecondhalf_event3,
  SetSecondhalf_event3_goal,
  SetSecondhalf_event3_noGoal,
  SetSecondhalf_event3_foul,
  SetSecondhalf_event3_goalCorner,
  SetSecondhalf_event3_goalPen,
  SetSecondhalf_event3_goalFreekick,
  SetSecondhalf_event3_noGoalCorner,
  SetSecondhalf_event3_noGoalPen,
  SetSecondhalf_event3_noGoalFreekick,
  SetSecondhalf_event3_offside,
  SetSecondhalf_name3,
  SetSecondhalf_name3_t1_gk1,
  SetSecondhalf_name3_t1_lb1,
  SetSecondhalf_name3_t1_cb1,
  SetSecondhalf_name3_t1_cb2,
  SetSecondhalf_name3_t1_rb1,
  SetSecondhalf_name3_t1_dm1,
  SetSecondhalf_name3_t1_cm1,
  SetSecondhalf_name3_t1_cm2,
  SetSecondhalf_name3_t1_lw1,
  SetSecondhalf_name3_t1_rw1,
  SetSecondhalf_name3_t1_st1,
  SetSecondhalf_name3_t2_gk2,
  SetSecondhalf_name3_t2_lb2,
  SetSecondhalf_name3_t2_cb4,
  SetSecondhalf_name3_t2_cb3,
  SetSecondhalf_name3_t2_rb2,
  SetSecondhalf_name3_t2_dm2,
  SetSecondhalf_name3_t2_cm4,
  SetSecondhalf_name3_t2_cm3,
  SetSecondhalf_name3_t2_lw2,
  SetSecondhalf_name3_t2_rw2,
  SetSecondhalf_name3_t2_st2,
  SetSecondhalf_surname3,
  SetSecondhalf_surname3_t1_gk1,
  SetSecondhalf_surname3_t1_lb1,
  SetSecondhalf_surname3_t1_cb1,
  SetSecondhalf_surname3_t1_cb2,
  SetSecondhalf_surname3_t1_rb1,
  SetSecondhalf_surname3_t1_dm1,
  SetSecondhalf_surname3_t1_cm1,
  SetSecondhalf_surname3_t1_cm2,
  SetSecondhalf_surname3_t1_lw1,
  SetSecondhalf_surname3_t1_rw1,
  SetSecondhalf_surname3_t1_st1,
  SetSecondhalf_surname3_t2_gk2,
  SetSecondhalf_surname3_t2_lb2,
  SetSecondhalf_surname3_t2_cb4,
  SetSecondhalf_surname3_t2_cb3,
  SetSecondhalf_surname3_t2_rb2,
  SetSecondhalf_surname3_t2_dm2,
  SetSecondhalf_surname3_t2_cm4,
  SetSecondhalf_surname3_t2_cm3,
  SetSecondhalf_surname3_t2_lw2,
  SetSecondhalf_surname3_t2_rw2,
  SetSecondhalf_surname3_t2_st2,
  SetSecondhalf_team3_NoTeam,
  SetSecondhalf_team3_homeTeam,
  SetSecondhalf_team3_awayTeam,
  SetSecondhalf_minutes4,
  SetSecondhalf_minutes4_txt,
  SetSecondhalf_event4,
  SetSecondhalf_event4_goal,
  SetSecondhalf_event4_noGoal,
  SetSecondhalf_event4_foul,
  SetSecondhalf_event4_goalCorner,
  SetSecondhalf_event4_goalPen,
  SetSecondhalf_event4_goalFreekick,
  SetSecondhalf_event4_noGoalCorner,
  SetSecondhalf_event4_noGoalPen,
  SetSecondhalf_event4_noGoalFreekick,
  SetSecondhalf_event4_offside,
  SetSecondhalf_name4,
  SetSecondhalf_name4_t1_gk1,
  SetSecondhalf_name4_t1_lb1,
  SetSecondhalf_name4_t1_cb1,
  SetSecondhalf_name4_t1_cb2,
  SetSecondhalf_name4_t1_rb1,
  SetSecondhalf_name4_t1_dm1,
  SetSecondhalf_name4_t1_cm1,
  SetSecondhalf_name4_t1_cm2,
  SetSecondhalf_name4_t1_lw1,
  SetSecondhalf_name4_t1_rw1,
  SetSecondhalf_name4_t1_st1,
  SetSecondhalf_name4_t2_gk2,
  SetSecondhalf_name4_t2_lb2,
  SetSecondhalf_name4_t2_cb4,
  SetSecondhalf_name4_t2_cb3,
  SetSecondhalf_name4_t2_rb2,
  SetSecondhalf_name4_t2_dm2,
  SetSecondhalf_name4_t2_cm4,
  SetSecondhalf_name4_t2_cm3,
  SetSecondhalf_name4_t2_lw2,
  SetSecondhalf_name4_t2_rw2,
  SetSecondhalf_name4_t2_st2,
  SetSecondhalf_surname4,
  SetSecondhalf_surname4_t1_gk1,
  SetSecondhalf_surname4_t1_lb1,
  SetSecondhalf_surname4_t1_cb1,
  SetSecondhalf_surname4_t1_cb2,
  SetSecondhalf_surname4_t1_rb1,
  SetSecondhalf_surname4_t1_dm1,
  SetSecondhalf_surname4_t1_cm1,
  SetSecondhalf_surname4_t1_cm2,
  SetSecondhalf_surname4_t1_lw1,
  SetSecondhalf_surname4_t1_rw1,
  SetSecondhalf_surname4_t1_st1,
  SetSecondhalf_surname4_t2_gk2,
  SetSecondhalf_surname4_t2_lb2,
  SetSecondhalf_surname4_t2_cb4,
  SetSecondhalf_surname4_t2_cb3,
  SetSecondhalf_surname4_t2_rb2,
  SetSecondhalf_surname4_t2_dm2,
  SetSecondhalf_surname4_t2_cm4,
  SetSecondhalf_surname4_t2_cm3,
  SetSecondhalf_surname4_t2_lw2,
  SetSecondhalf_surname4_t2_rw2,
  SetSecondhalf_surname4_t2_st2,
  SetSecondhalf_team4_NoTeam,
  SetSecondhalf_team4_homeTeam,
  SetSecondhalf_team4_awayTeam,
  SetSecondhalf_minutes5,
  SetSecondhalf_minutes5_txt,
  SetSecondhalf_event5,
  SetSecondhalf_event5_goal,
  SetSecondhalf_event5_noGoal,
  SetSecondhalf_event5_foul,
  SetSecondhalf_event5_goalCorner,
  SetSecondhalf_event5_goalPen,
  SetSecondhalf_event5_goalFreekick,
  SetSecondhalf_event5_noGoalCorner,
  SetSecondhalf_event5_noGoalPen,
  SetSecondhalf_event5_noGoalFreekick,
  SetSecondhalf_event5_offside,
  SetSecondhalf_name5,
  SetSecondhalf_name5_t1_gk1,
  SetSecondhalf_name5_t1_lb1,
  SetSecondhalf_name5_t1_cb1,
  SetSecondhalf_name5_t1_cb2,
  SetSecondhalf_name5_t1_rb1,
  SetSecondhalf_name5_t1_dm1,
  SetSecondhalf_name5_t1_cm1,
  SetSecondhalf_name5_t1_cm2,
  SetSecondhalf_name5_t1_lw1,
  SetSecondhalf_name5_t1_rw1,
  SetSecondhalf_name5_t1_st1,
  SetSecondhalf_name5_t2_gk2,
  SetSecondhalf_name5_t2_lb2,
  SetSecondhalf_name5_t2_cb4,
  SetSecondhalf_name5_t2_cb3,
  SetSecondhalf_name5_t2_rb2,
  SetSecondhalf_name5_t2_dm2,
  SetSecondhalf_name5_t2_cm4,
  SetSecondhalf_name5_t2_cm3,
  SetSecondhalf_name5_t2_lw2,
  SetSecondhalf_name5_t2_rw2,
  SetSecondhalf_name5_t2_st2,
  SetSecondhalf_surname5,
  SetSecondhalf_surname5_t1_gk1,
  SetSecondhalf_surname5_t1_lb1,
  SetSecondhalf_surname5_t1_cb1,
  SetSecondhalf_surname5_t1_cb2,
  SetSecondhalf_surname5_t1_rb1,
  SetSecondhalf_surname5_t1_dm1,
  SetSecondhalf_surname5_t1_cm1,
  SetSecondhalf_surname5_t1_cm2,
  SetSecondhalf_surname5_t1_lw1,
  SetSecondhalf_surname5_t1_rw1,
  SetSecondhalf_surname5_t1_st1,
  SetSecondhalf_surname5_t2_gk2,
  SetSecondhalf_surname5_t2_lb2,
  SetSecondhalf_surname5_t2_cb4,
  SetSecondhalf_surname5_t2_cb3,
  SetSecondhalf_surname5_t2_rb2,
  SetSecondhalf_surname5_t2_dm2,
  SetSecondhalf_surname5_t2_cm4,
  SetSecondhalf_surname5_t2_cm3,
  SetSecondhalf_surname5_t2_lw2,
  SetSecondhalf_surname5_t2_rw2,
  SetSecondhalf_surname5_t2_st2,
  SetSecondhalf_team5_NoTeam,
  SetSecondhalf_team5_homeTeam,
  SetSecondhalf_team5_awayTeam,
  SetSecondhalf_minutes6,
  SetSecondhalf_minutes6_txt,
  SetSecondhalf_event6,
  SetSecondhalf_event6_goal,
  SetSecondhalf_event6_noGoal,
  SetSecondhalf_event6_foul,
  SetSecondhalf_event6_goalCorner,
  SetSecondhalf_event6_goalPen,
  SetSecondhalf_event6_goalFreekick,
  SetSecondhalf_event6_noGoalCorner,
  SetSecondhalf_event6_noGoalPen,
  SetSecondhalf_event6_noGoalFreekick,
  SetSecondhalf_event6_offside,
  SetSecondhalf_name6,
  SetSecondhalf_name6_t1_gk1,
  SetSecondhalf_name6_t1_lb1,
  SetSecondhalf_name6_t1_cb1,
  SetSecondhalf_name6_t1_cb2,
  SetSecondhalf_name6_t1_rb1,
  SetSecondhalf_name6_t1_dm1,
  SetSecondhalf_name6_t1_cm1,
  SetSecondhalf_name6_t1_cm2,
  SetSecondhalf_name6_t1_lw1,
  SetSecondhalf_name6_t1_rw1,
  SetSecondhalf_name6_t1_st1,
  SetSecondhalf_name6_t2_gk2,
  SetSecondhalf_name6_t2_lb2,
  SetSecondhalf_name6_t2_cb4,
  SetSecondhalf_name6_t2_cb3,
  SetSecondhalf_name6_t2_rb2,
  SetSecondhalf_name6_t2_dm2,
  SetSecondhalf_name6_t2_cm4,
  SetSecondhalf_name6_t2_cm3,
  SetSecondhalf_name6_t2_lw2,
  SetSecondhalf_name6_t2_rw2,
  SetSecondhalf_name6_t2_st2,
  SetSecondhalf_surname6,
  SetSecondhalf_surname6_t1_gk1,
  SetSecondhalf_surname6_t1_lb1,
  SetSecondhalf_surname6_t1_cb1,
  SetSecondhalf_surname6_t1_cb2,
  SetSecondhalf_surname6_t1_rb1,
  SetSecondhalf_surname6_t1_dm1,
  SetSecondhalf_surname6_t1_cm1,
  SetSecondhalf_surname6_t1_cm2,
  SetSecondhalf_surname6_t1_lw1,
  SetSecondhalf_surname6_t1_rw1,
  SetSecondhalf_surname6_t1_st1,
  SetSecondhalf_surname6_t2_gk2,
  SetSecondhalf_surname6_t2_lb2,
  SetSecondhalf_surname6_t2_cb4,
  SetSecondhalf_surname6_t2_cb3,
  SetSecondhalf_surname6_t2_rb2,
  SetSecondhalf_surname6_t2_dm2,
  SetSecondhalf_surname6_t2_cm4,
  SetSecondhalf_surname6_t2_cm3,
  SetSecondhalf_surname6_t2_lw2,
  SetSecondhalf_surname6_t2_rw2,
  SetSecondhalf_surname6_t2_st2,
  SetSecondhalf_team6_NoTeam,
  SetSecondhalf_team6_homeTeam,
  SetSecondhalf_team6_awayTeam,
  SetSecondhalf_minutes7,
  SetSecondhalf_minutes7_txt,
  SetSecondhalf_event7,
  SetSecondhalf_event7_goal,
  SetSecondhalf_event7_noGoal,
  SetSecondhalf_event7_foul,
  SetSecondhalf_event7_goalCorner,
  SetSecondhalf_event7_goalPen,
  SetSecondhalf_event7_goalFreekick,
  SetSecondhalf_event7_noGoalCorner,
  SetSecondhalf_event7_noGoalPen,
  SetSecondhalf_event7_noGoalFreekick,
  SetSecondhalf_event7_offside,
  SetSecondhalf_name7,
  SetSecondhalf_name7_t1_gk1,
  SetSecondhalf_name7_t1_lb1,
  SetSecondhalf_name7_t1_cb1,
  SetSecondhalf_name7_t1_cb2,
  SetSecondhalf_name7_t1_rb1,
  SetSecondhalf_name7_t1_dm1,
  SetSecondhalf_name7_t1_cm1,
  SetSecondhalf_name7_t1_cm2,
  SetSecondhalf_name7_t1_lw1,
  SetSecondhalf_name7_t1_rw1,
  SetSecondhalf_name7_t1_st1,
  SetSecondhalf_name7_t2_gk2,
  SetSecondhalf_name7_t2_lb2,
  SetSecondhalf_name7_t2_cb4,
  SetSecondhalf_name7_t2_cb3,
  SetSecondhalf_name7_t2_rb2,
  SetSecondhalf_name7_t2_dm2,
  SetSecondhalf_name7_t2_cm4,
  SetSecondhalf_name7_t2_cm3,
  SetSecondhalf_name7_t2_lw2,
  SetSecondhalf_name7_t2_rw2,
  SetSecondhalf_name7_t2_st2,
  SetSecondhalf_surname7,
  SetSecondhalf_surname7_t1_gk1,
  SetSecondhalf_surname7_t1_lb1,
  SetSecondhalf_surname7_t1_cb1,
  SetSecondhalf_surname7_t1_cb2,
  SetSecondhalf_surname7_t1_rb1,
  SetSecondhalf_surname7_t1_dm1,
  SetSecondhalf_surname7_t1_cm1,
  SetSecondhalf_surname7_t1_cm2,
  SetSecondhalf_surname7_t1_lw1,
  SetSecondhalf_surname7_t1_rw1,
  SetSecondhalf_surname7_t1_st1,
  SetSecondhalf_surname7_t2_gk2,
  SetSecondhalf_surname7_t2_lb2,
  SetSecondhalf_surname7_t2_cb4,
  SetSecondhalf_surname7_t2_cb3,
  SetSecondhalf_surname7_t2_rb2,
  SetSecondhalf_surname7_t2_dm2,
  SetSecondhalf_surname7_t2_cm4,
  SetSecondhalf_surname7_t2_cm3,
  SetSecondhalf_surname7_t2_lw2,
  SetSecondhalf_surname7_t2_rw2,
  SetSecondhalf_surname7_t2_st2,
  SetSecondhalf_team7_NoTeam,
  SetSecondhalf_team7_homeTeam,
  SetSecondhalf_team7_awayTeam,
  SetHomeTeamScoreValue,
  SetHomeTeamScoreValue_plus,
  SetHomeTeamShootValue,
  SetHomeTeamShootValue_plus,
  SetHomeTeamShootOnTargetValue,
  SetHomeTeamShootOnTargetValue_plus,
  SetHomeTeamBallPossessionValue,
  SetHomeTeamBallPossessionValue_plus,
  SetHomeTeamPassRateValue,
  SetHomeTeamPassRateValue_plus,
  SetHomeTeamYellowCardValue,
  SetHomeTeamYellowCardValue_plus,
  SetHomeTeamRedCardValue,
  SetHomeTeamRedCardValue_plus,
  SetHomeTeamCornerValue,
  SetHomeTeamCornerValue_plus,
  SetHomeTeamFoulValue,
  SetHomeTeamFoulValue_plus,
  SetAwayTeamScoreValue,
  SetAwayTeamScoreValue_plus,
  SetAwayTeamShootValue,
  SetAwayTeamShootValue_plus,
  SetAwayTeamShootOnTargetValue,
  SetAwayTeamShootOnTargetValue_plus,
  SetAwayTeamBallPossessionValue,
  SetAwayTeamBallPossessionValue_plus,
  SetAwayTeamPassRateValue,
  SetAwayTeamPassRateValue_plus,
  SetAwayTeamYellowCardValue,
  SetAwayTeamYellowCardValue_plus,
  SetAwayTeamRedCardValue,
  SetAwayTeamRedCardValue_plus,
  SetAwayTeamCornerValue,
  SetAwayTeamCornerValue_plus,
  SetAwayTeamFoulValue,
  SetAwayTeamFoulValue_plus,
  SetHomeTeam_gk1_yellowCard_t,
  SetHomeTeam_gk1_yellowCard_f,
  SetHomeTeam_lb1_yellowCard_t,
  SetHomeTeam_lb1_yellowCard_f,
  SetHomeTeam_cb1_yellowCard_t,
  SetHomeTeam_cb1_yellowCard_f,
  SetHomeTeam_cb2_yellowCard_t,
  SetHomeTeam_cb2_yellowCard_f,
  SetHomeTeam_rb1_yellowCard_t,
  SetHomeTeam_rb1_yellowCard_f,
  SetHomeTeam_dm1_yellowCard_t,
  SetHomeTeam_dm1_yellowCard_f,
  SetHomeTeam_cm1_yellowCard_t,
  SetHomeTeam_cm1_yellowCard_f,
  SetHomeTeam_cm2_yellowCard_t,
  SetHomeTeam_cm2_yellowCard_f,
  SetHomeTeam_lw1_yellowCard_t,
  SetHomeTeam_lw1_yellowCard_f,
  SetHomeTeam_rw1_yellowCard_t,
  SetHomeTeam_rw1_yellowCard_f,
  SetHomeTeam_st1_yellowCard_t,
  SetHomeTeam_st1_yellowCard_f,
  SetHomeTeam_gk1_redCard_t,
  SetHomeTeam_gk1_redCard_f,
  SetHomeTeam_lb1_redCard_t,
  SetHomeTeam_lb1_redCard_f,
  SetHomeTeam_cb1_redCard_t,
  SetHomeTeam_cb1_redCard_f,
  SetHomeTeam_cb2_redCard_t,
  SetHomeTeam_cb2_redCard_f,
  SetHomeTeam_rb1_redCard_t,
  SetHomeTeam_rb1_redCard_f,
  SetHomeTeam_dm1_redCard_t,
  SetHomeTeam_dm1_redCard_f,
  SetHomeTeam_cm1_redCard_t,
  SetHomeTeam_cm1_redCard_f,
  SetHomeTeam_cm2_redCard_t,
  SetHomeTeam_cm2_redCard_f,
  SetHomeTeam_lw1_redCard_t,
  SetHomeTeam_lw1_redCard_f,
  SetHomeTeam_rw1_redCard_t,
  SetHomeTeam_rw1_redCard_f,
  SetHomeTeam_st1_redCard_t,
  SetHomeTeam_st1_redCard_f,
  SetAwayTeam_gk2_yellowCard_t,
  SetAwayTeam_gk2_yellowCard_f,
  SetAwayTeam_lb2_yellowCard_t,
  SetAwayTeam_lb2_yellowCard_f,
  SetAwayTeam_cb4_yellowCard_t,
  SetAwayTeam_cb4_yellowCard_f,
  SetAwayTeam_cb3_yellowCard_t,
  SetAwayTeam_cb3_yellowCard_f,
  SetAwayTeam_rb2_yellowCard_t,
  SetAwayTeam_rb2_yellowCard_f,
  SetAwayTeam_dm2_yellowCard_t,
  SetAwayTeam_dm2_yellowCard_f,
  SetAwayTeam_cm4_yellowCard_t,
  SetAwayTeam_cm4_yellowCard_f,
  SetAwayTeam_cm3_yellowCard_t,
  SetAwayTeam_cm3_yellowCard_f,
  SetAwayTeam_lw2_yellowCard_t,
  SetAwayTeam_lw2_yellowCard_f,
  SetAwayTeam_rw2_yellowCard_t,
  SetAwayTeam_rw2_yellowCard_f,
  SetAwayTeam_st2_yellowCard_t,
  SetAwayTeam_st2_yellowCard_f,
  SetAwayTeam_gk2_redCard_t,
  SetAwayTeam_gk2_redCard_f,
  SetAwayTeam_lb2_redCard_t,
  SetAwayTeam_lb2_redCard_f,
  SetAwayTeam_cb4_redCard_t,
  SetAwayTeam_cb4_redCard_f,
  SetAwayTeam_cb3_redCard_t,
  SetAwayTeam_cb3_redCard_f,
  SetAwayTeam_rb2_redCard_t,
  SetAwayTeam_rb2_redCard_f,
  SetAwayTeam_dm2_redCard_t,
  SetAwayTeam_dm2_redCard_f,
  SetAwayTeam_cm4_redCard_t,
  SetAwayTeam_cm4_redCard_f,
  SetAwayTeam_cm3_redCard_t,
  SetAwayTeam_cm3_redCard_f,
  SetAwayTeam_lw2_redCard_t,
  SetAwayTeam_lw2_redCard_f,
  SetAwayTeam_rw2_redCard_t,
  SetAwayTeam_rw2_redCard_f,
  SetAwayTeam_st2_redCard_t,
  SetAwayTeam_st2_redCard_f,
  SetFirsthalf_yellowCard1_t,
  SetFirsthalf_yellowCard1_f,
  SetFirsthalf_yellowCard2_t,
  SetFirsthalf_yellowCard2_f,
  SetFirsthalf_yellowCard3_t,
  SetFirsthalf_yellowCard3_f,
  SetFirsthalf_yellowCard4_t,
  SetFirsthalf_yellowCard4_f,
  SetFirsthalf_yellowCard5_t,
  SetFirsthalf_yellowCard5_f,
  SetFirsthalf_yellowCard6_t,
  SetFirsthalf_yellowCard6_f,
  SetFirsthalf_yellowCard7_t,
  SetFirsthalf_yellowCard7_f,
  SetFirsthalf_redCard1_t,
  SetFirsthalf_redCard1_f,
  SetFirsthalf_redCard2_t,
  SetFirsthalf_redCard2_f,
  SetFirsthalf_redCard3_t,
  SetFirsthalf_redCard3_f,
  SetFirsthalf_redCard4_t,
  SetFirsthalf_redCard4_f,
  SetFirsthalf_redCard5_t,
  SetFirsthalf_redCard5_f,
  SetFirsthalf_redCard6_t,
  SetFirsthalf_redCard6_f,
  SetFirsthalf_redCard7_t,
  SetFirsthalf_redCard7_f,
  SetSecondhalf_yellowCard1_t,
  SetSecondhalf_yellowCard1_f,
  SetSecondhalf_yellowCard2_t,
  SetSecondhalf_yellowCard2_f,
  SetSecondhalf_yellowCard3_t,
  SetSecondhalf_yellowCard3_f,
  SetSecondhalf_yellowCard4_t,
  SetSecondhalf_yellowCard4_f,
  SetSecondhalf_yellowCard5_t,
  SetSecondhalf_yellowCard5_f,
  SetSecondhalf_yellowCard6_t,
  SetSecondhalf_yellowCard6_f,
  SetSecondhalf_yellowCard7_t,
  SetSecondhalf_yellowCard7_f,
  SetSecondhalf_redCard1_t,
  SetSecondhalf_redCard1_f,
  SetSecondhalf_redCard2_t,
  SetSecondhalf_redCard2_f,
  SetSecondhalf_redCard3_t,
  SetSecondhalf_redCard3_f,
  SetSecondhalf_redCard4_t,
  SetSecondhalf_redCard4_f,
  SetSecondhalf_redCard5_t,
  SetSecondhalf_redCard5_f,
  SetSecondhalf_redCard6_t,
  SetSecondhalf_redCard6_f,
  SetSecondhalf_redCard7_t,
  SetSecondhalf_redCard7_f,
  GetIsTacticsButtonClick_t,
  GetIsTacticsButtonClick_f,
  GetIsEventNow_f,
  GetIsEventNow_t,
} from "../redux/playmatchmenuSlice";

function Teamselect() {
  const homeLeagueValue = useSelector(
    (state) => state.homeLeagueValue.homeLeagueValue
  );
  const awayLeagueValue = useSelector(
    (state) => state.awayLeagueValue.awayLeagueValue
  );

  const homeTeamValue = useSelector(
    (state) => state.setHomeTeamValue.homeTeamValue
  );
  const awayTeamValue = useSelector(
    (state) => state.setAwayTeamValue.awayTeamValue
  );

  const homeSideValue = useSelector(
    (state) => state.setHomeSideValue.homeSideValue
  );
  const awaySideValue = useSelector(
    (state) => state.setAwaySideValue.awaySideValue
  );

  const reduxLanguage = useSelector(
    (state) => state.setLanguage_login.language
  );

  const PlayOrGameplanFormationValue = useSelector(
    (state) => state.setPlayOrGameplanFormationGet1.playOrGameplanFormationValue
  );

  const formationValue = useSelector(
    (state) => state.setTeamFormationGet1.formationValue
  );
  const homeTeamIndex_gk1 = useSelector(
    (state) => state.setHomeTeamGetGk1.homeTeam_gk1
  );
  const homeTeamIndex_lb1 = useSelector(
    (state) => state.setHomeTeamGetLb1.homeTeam_lb1
  );
  const homeTeamIndex_cb1 = useSelector(
    (state) => state.setHomeTeamGetCb1.homeTeam_cb1
  );
  const homeTeamIndex_cb2 = useSelector(
    (state) => state.setHomeTeamGetCb2.homeTeam_cb2
  );
  const homeTeamIndex_rb1 = useSelector(
    (state) => state.setHomeTeamGetRb1.homeTeam_rb1
  );
  const homeTeamIndex_dm1 = useSelector(
    (state) => state.setHomeTeamGetDm1.homeTeam_dm1
  );
  const homeTeamIndex_cm1 = useSelector(
    (state) => state.setHomeTeamGetCm1.homeTeam_cm1
  );
  const homeTeamIndex_cm2 = useSelector(
    (state) => state.setHomeTeamGetCm2.homeTeam_cm2
  );
  const homeTeamIndex_lw1 = useSelector(
    (state) => state.setHomeTeamGetLw1.homeTeam_lw1
  );
  const homeTeamIndex_rw1 = useSelector(
    (state) => state.setHomeTeamGetRw1.homeTeam_rw1
  );
  const homeTeamIndex_st1 = useSelector(
    (state) => state.setHomeTeamGetSt1.homeTeam_st1
  );

  const awayTeamIndex_gk2 = useSelector(
    (state) => state.setAwayTeamGetGk2.awayTeam_gk2
  );
  const awayTeamIndex_lb2 = useSelector(
    (state) => state.setAwayTeamGetLb2.awayTeam_lb2
  );
  const awayTeamIndex_cb4 = useSelector(
    (state) => state.setAwayTeamGetCb4.awayTeam_cb4
  );
  const awayTeamIndex_cb3 = useSelector(
    (state) => state.setAwayTeamGetCb3.awayTeam_cb3
  );
  const awayTeamIndex_rb2 = useSelector(
    (state) => state.setAwayTeamGetRb2.awayTeam_rb2
  );
  const awayTeamIndex_dm2 = useSelector(
    (state) => state.setAwayTeamGetDm2.awayTeam_dm2
  );
  const awayTeamIndex_cm4 = useSelector(
    (state) => state.setAwayTeamGetCm4.awayTeam_cm4
  );
  const awayTeamIndex_cm3 = useSelector(
    (state) => state.setAwayTeamGetCm3.awayTeam_cm3
  );
  const awayTeamIndex_lw2 = useSelector(
    (state) => state.setAwayTeamGetLw2.awayTeam_lw2
  );
  const awayTeamIndex_rw2 = useSelector(
    (state) => state.setAwayTeamGetRw2.awayTeam_rw2
  );
  const awayTeamIndex_st2 = useSelector(
    (state) => state.setAwayTeamGetSt2.awayTeam_st2
  );

  const dispatch = useDispatch();

  function ControlHomeAwaySideValue() {
    if (homeSideValue == false && awaySideValue == false) {
      return <Navigate to="/" />;
    }
  }

  let txtLeft = "<";
  let txtRight = ">";

  let txtContinueButton =
    Languages.languages[reduxLanguage].teamselect.teamselectContinue;
  let txtBackToLeaguesButton =
    Languages.languages[reduxLanguage].teamselect.teamselectBackToLeagues;
  let txtAttack =
    Languages.languages[reduxLanguage].teamselect.teamselectAttack;
  let txtMiddle =
    Languages.languages[reduxLanguage].teamselect.teamselectMiddle;
  let txtDefence =
    Languages.languages[reduxLanguage].teamselect.teamselectDefence;

  const [homeTeamIndex, setHomeTeamIndex] = useState(homeTeamValue);

  function homeIdCountTeams() {
    return Leagues.leagues[homeLeagueValue].teams[homeTeamIndex].id;
  }

  function homeNameCountTeams() {
    return Leagues.leagues[homeLeagueValue].teams[homeTeamIndex].teamName;
  }

  function teamPlus1() {
    if (homeTeamIndex == Leagues.leagues[homeLeagueValue].teams.length - 1) {
      setHomeTeamIndex(0);
      dispatch(setHomeTeamValuePlus());
    } else {
      setHomeTeamIndex(homeTeamIndex + 1);
      dispatch(setHomeTeamValuePlus());
    }
  }

  function teamSour1() {
    if (homeTeamIndex == 0) {
      setHomeTeamIndex(Leagues.leagues[homeLeagueValue].teams.length - 1);
      dispatch(setHomeTeamValueSour());
    } else {
      setHomeTeamIndex(homeTeamIndex - 1);
      dispatch(setHomeTeamValueSour());
    }
  }

  function homeAtcTeams() {
    return Leagues.leagues[homeLeagueValue].teams[homeTeamIndex].atc;
  }

  function homeMidTeams() {
    return Leagues.leagues[homeLeagueValue].teams[homeTeamIndex].mid;
  }

  function homeDefTeams() {
    return Leagues.leagues[homeLeagueValue].teams[homeTeamIndex].def;
  }

  const [awayTeamIndex, setAwayTeamIndex] = useState(awayTeamValue);

  function awayIdCountTeams() {
    return Leagues.leagues[awayLeagueValue].teams[awayTeamIndex].id;
  }

  function awayNameCountTeams() {
    return Leagues.leagues[awayLeagueValue].teams[awayTeamIndex].teamName;
  }

  function teamPlus2() {
    if (awayTeamIndex == Leagues.leagues[awayLeagueValue].teams.length - 1) {
      setAwayTeamIndex(0);
      dispatch(setAwayTeamValuePlus());
    } else {
      setAwayTeamIndex(awayTeamIndex + 1);
      dispatch(setAwayTeamValuePlus());
    }
  }

  function teamSour2() {
    if (awayTeamIndex == 0) {
      setAwayTeamIndex(Leagues.leagues[awayLeagueValue].teams.length - 1);
      dispatch(setAwayTeamValueSour());
    } else {
      setAwayTeamIndex(awayTeamIndex - 1);
      dispatch(setAwayTeamValueSour());
    }
  }

  function awayAtcTeams() {
    return Leagues.leagues[awayLeagueValue].teams[awayTeamIndex].atc;
  }

  function awayMidTeams() {
    return Leagues.leagues[awayLeagueValue].teams[awayTeamIndex].mid;
  }

  function awayDefTeams() {
    return Leagues.leagues[awayLeagueValue].teams[awayTeamIndex].def;
  }

  function DefaultPlayers() {
    dispatch(setPlayOrGameplanFormationGet1());
    dispatch(setTeamFormationGet1());

    dispatch(setHomeTeamGetValueGk1());
    dispatch(setHomeTeamGetValueLb1());
    dispatch(setHomeTeamGetValueCb1());
    dispatch(setHomeTeamGetValueCb2());
    dispatch(setHomeTeamGetValueRb1());
    dispatch(setHomeTeamGetValueDm1());
    dispatch(setHomeTeamGetValueCm1());
    dispatch(setHomeTeamGetValueCm2());
    dispatch(setHomeTeamGetValueLw1());
    dispatch(setHomeTeamGetValueRw1());
    dispatch(setHomeTeamGetValueSt1());

    dispatch(setAwayTeamGetValueGk2());
    dispatch(setAwayTeamGetValueLb2());
    dispatch(setAwayTeamGetValueCb4());
    dispatch(setAwayTeamGetValueCb3());
    dispatch(setAwayTeamGetValueRb2());
    dispatch(setAwayTeamGetValueDm2());
    dispatch(setAwayTeamGetValueCm4());
    dispatch(setAwayTeamGetValueCm3());
    dispatch(setAwayTeamGetValueLw2());
    dispatch(setAwayTeamGetValueRw2());
    dispatch(setAwayTeamGetValueSt2());

    dispatch(setSamePlayerValueId_f());

    dispatch(setSubPlayerVisible1_f());
    dispatch(setSubPlayerVisible2_f());
    dispatch(setSubPlayerVisible3_f());
    dispatch(setSubPlayerVisible4_f());
    dispatch(setSubPlayerVisible5_f());
    dispatch(setSubPlayerVisible6_f());
    dispatch(setSubPlayerVisible7_f());
    dispatch(setSubPlayerVisible8_f());
    dispatch(setSubPlayerVisible9_f());
    dispatch(setSubPlayerVisible10_f());
    dispatch(setSubPlayerVisible11_f());
    dispatch(setSubPlayerVisible12_f());
    dispatch(setSubPlayerVisible13_f());
    dispatch(setSubPlayerVisible14_f());
    dispatch(setSubPlayerVisible15_f());
    dispatch(setSubPlayerVisible16_f());
    dispatch(setSubPlayerVisible17_f());
    dispatch(setSubPlayerVisible18_f());
    dispatch(setSubPlayerVisible19_f());
    dispatch(setSubPlayerVisible20_f());
    dispatch(setSubPlayerVisible21_f());
    dispatch(setSubPlayerVisible22_f());
    dispatch(setSubPlayerVisible23_f());
    dispatch(setSubPlayerVisible24_f());
    dispatch(setSubPlayerVisible25_f());
    dispatch(setSubPlayerVisible26_f());
    dispatch(setSubPlayerVisible27_f());
    dispatch(setSubPlayerVisible28_f());
    dispatch(setSubPlayerVisible29_f());
    dispatch(setSubPlayerVisible30_f());
    dispatch(setSubPlayerVisible31_f());
    dispatch(setSubPlayerVisible32_f());
    dispatch(setSubPlayerVisible33_f());
    dispatch(setSubPlayerVisible34_f());
    dispatch(setSubPlayerVisible35_f());
    dispatch(setSubPlayerVisible36_f());
    dispatch(setSubPlayerVisible37_f());
    dispatch(setSubPlayerVisible38_f());

    dispatch(GetMatchStartValue_off());
    dispatch(GetMatchScreenStartValue_off());
    dispatch(GetRightPlayerChange_3());
    dispatch(GetMatchMinutesValue());

    dispatch(SetHomeTeam_gk1_energy());
    dispatch(SetHomeTeam_lb1_energy());
    dispatch(SetHomeTeam_cb1_energy());
    dispatch(SetHomeTeam_cb2_energy());
    dispatch(SetHomeTeam_rb1_energy());
    dispatch(SetHomeTeam_dm1_energy());
    dispatch(SetHomeTeam_cm1_energy());
    dispatch(SetHomeTeam_cm2_energy());
    dispatch(SetHomeTeam_lw1_energy());
    dispatch(SetHomeTeam_rw1_energy());
    dispatch(SetHomeTeam_st1_energy());

    dispatch(SetAwayTeam_gk2_energy());
    dispatch(SetAwayTeam_lb2_energy());
    dispatch(SetAwayTeam_cb4_energy());
    dispatch(SetAwayTeam_cb3_energy());
    dispatch(SetAwayTeam_rb2_energy());
    dispatch(SetAwayTeam_dm2_energy());
    dispatch(SetAwayTeam_cm4_energy());
    dispatch(SetAwayTeam_cm3_energy());
    dispatch(SetAwayTeam_lw2_energy());
    dispatch(SetAwayTeam_rw2_energy());
    dispatch(SetAwayTeam_st2_energy());

    dispatch(SetFirsthalf_minutes1());
    dispatch(SetFirsthalf_event1());
    dispatch(SetFirsthalf_name1());
    dispatch(SetFirsthalf_surname1());
    dispatch(SetFirsthalf_team1_NoTeam());

    dispatch(SetFirsthalf_minutes2());
    dispatch(SetFirsthalf_event2());
    dispatch(SetFirsthalf_name2());
    dispatch(SetFirsthalf_surname2());
    dispatch(SetFirsthalf_team2_NoTeam());

    dispatch(SetFirsthalf_minutes3());
    dispatch(SetFirsthalf_event3());
    dispatch(SetFirsthalf_name3());
    dispatch(SetFirsthalf_surname3());
    dispatch(SetFirsthalf_team3_NoTeam());

    dispatch(SetFirsthalf_minutes4());
    dispatch(SetFirsthalf_event4());
    dispatch(SetFirsthalf_name4());
    dispatch(SetFirsthalf_surname4());
    dispatch(SetFirsthalf_team4_NoTeam());

    dispatch(SetFirsthalf_minutes5());
    dispatch(SetFirsthalf_event5());
    dispatch(SetFirsthalf_name5());
    dispatch(SetFirsthalf_surname5());
    dispatch(SetFirsthalf_team5_NoTeam());

    dispatch(SetFirsthalf_minutes6());
    dispatch(SetFirsthalf_event6());
    dispatch(SetFirsthalf_name6());
    dispatch(SetFirsthalf_surname6());
    dispatch(SetFirsthalf_team6_NoTeam());

    dispatch(SetFirsthalf_minutes7());
    dispatch(SetFirsthalf_event7());
    dispatch(SetFirsthalf_name7());
    dispatch(SetFirsthalf_surname7());
    dispatch(SetFirsthalf_team7_NoTeam());

    dispatch(SetSecondhalf_minutes1());
    dispatch(SetSecondhalf_event1());
    dispatch(SetSecondhalf_name1());
    dispatch(SetSecondhalf_surname1());
    dispatch(SetSecondhalf_team1_NoTeam());

    dispatch(SetSecondhalf_minutes2());
    dispatch(SetSecondhalf_event2());
    dispatch(SetSecondhalf_name2());
    dispatch(SetSecondhalf_surname2());
    dispatch(SetSecondhalf_team2_NoTeam());

    dispatch(SetSecondhalf_minutes3());
    dispatch(SetSecondhalf_event3());
    dispatch(SetSecondhalf_name3());
    dispatch(SetSecondhalf_surname3());
    dispatch(SetSecondhalf_team3_NoTeam());

    dispatch(SetSecondhalf_minutes4());
    dispatch(SetSecondhalf_event4());
    dispatch(SetSecondhalf_name4());
    dispatch(SetSecondhalf_surname4());
    dispatch(SetSecondhalf_team4_NoTeam());

    dispatch(SetSecondhalf_minutes5());
    dispatch(SetSecondhalf_event5());
    dispatch(SetSecondhalf_name5());
    dispatch(SetSecondhalf_surname5());
    dispatch(SetSecondhalf_team5_NoTeam());

    dispatch(SetSecondhalf_minutes6());
    dispatch(SetSecondhalf_event6());
    dispatch(SetSecondhalf_name6());
    dispatch(SetSecondhalf_surname6());
    dispatch(SetSecondhalf_team6_NoTeam());

    dispatch(SetSecondhalf_minutes7());
    dispatch(SetSecondhalf_event7());
    dispatch(SetSecondhalf_name7());
    dispatch(SetSecondhalf_surname7());
    dispatch(SetSecondhalf_team7_NoTeam());

    dispatch(SetHomeTeamScoreValue());
    dispatch(SetHomeTeamShootValue());
    dispatch(SetHomeTeamShootOnTargetValue());
    dispatch(SetHomeTeamBallPossessionValue());
    dispatch(SetHomeTeamPassRateValue());
    dispatch(SetHomeTeamYellowCardValue());
    dispatch(SetHomeTeamRedCardValue());
    dispatch(SetHomeTeamCornerValue());
    dispatch(SetHomeTeamFoulValue());

    dispatch(SetAwayTeamScoreValue());
    dispatch(SetAwayTeamShootValue());
    dispatch(SetAwayTeamShootOnTargetValue());
    dispatch(SetAwayTeamBallPossessionValue());
    dispatch(SetAwayTeamPassRateValue());
    dispatch(SetAwayTeamYellowCardValue());
    dispatch(SetAwayTeamRedCardValue());
    dispatch(SetAwayTeamCornerValue());
    dispatch(SetAwayTeamFoulValue());

    dispatch(SetFirsthalf_minutes1());
    dispatch(SetFirsthalf_event1());
    dispatch(SetFirsthalf_name1());
    dispatch(SetFirsthalf_surname1());
    dispatch(SetFirsthalf_team1_NoTeam());

    dispatch(SetFirsthalf_minutes2());
    dispatch(SetFirsthalf_event2());
    dispatch(SetFirsthalf_name2());
    dispatch(SetFirsthalf_surname2());
    dispatch(SetFirsthalf_team2_NoTeam());

    dispatch(SetFirsthalf_minutes3());
    dispatch(SetFirsthalf_event3());
    dispatch(SetFirsthalf_name3());
    dispatch(SetFirsthalf_surname3());
    dispatch(SetFirsthalf_team3_NoTeam());

    dispatch(SetFirsthalf_minutes4());
    dispatch(SetFirsthalf_event4());
    dispatch(SetFirsthalf_name4());
    dispatch(SetFirsthalf_surname4());
    dispatch(SetFirsthalf_team4_NoTeam());

    dispatch(SetFirsthalf_minutes5());
    dispatch(SetFirsthalf_event5());
    dispatch(SetFirsthalf_name5());
    dispatch(SetFirsthalf_surname5());
    dispatch(SetFirsthalf_team5_NoTeam());

    dispatch(SetFirsthalf_minutes6());
    dispatch(SetFirsthalf_event6());
    dispatch(SetFirsthalf_name6());
    dispatch(SetFirsthalf_surname6());
    dispatch(SetFirsthalf_team6_NoTeam());

    dispatch(SetFirsthalf_minutes7());
    dispatch(SetFirsthalf_event7());
    dispatch(SetFirsthalf_name7());
    dispatch(SetFirsthalf_surname7());
    dispatch(SetFirsthalf_team7_NoTeam());

    dispatch(SetSecondhalf_minutes1());
    dispatch(SetSecondhalf_event1());
    dispatch(SetSecondhalf_name1());
    dispatch(SetSecondhalf_surname1());
    dispatch(SetSecondhalf_team1_NoTeam());

    dispatch(SetSecondhalf_minutes2());
    dispatch(SetSecondhalf_event2());
    dispatch(SetSecondhalf_name2());
    dispatch(SetSecondhalf_surname2());
    dispatch(SetSecondhalf_team2_NoTeam());

    dispatch(SetSecondhalf_minutes3());
    dispatch(SetSecondhalf_event3());
    dispatch(SetSecondhalf_name3());
    dispatch(SetSecondhalf_surname3());
    dispatch(SetSecondhalf_team3_NoTeam());

    dispatch(SetSecondhalf_minutes4());
    dispatch(SetSecondhalf_event4());
    dispatch(SetSecondhalf_name4());
    dispatch(SetSecondhalf_surname4());
    dispatch(SetSecondhalf_team4_NoTeam());

    dispatch(SetSecondhalf_minutes5());
    dispatch(SetSecondhalf_event5());
    dispatch(SetSecondhalf_name5());
    dispatch(SetSecondhalf_surname5());
    dispatch(SetSecondhalf_team5_NoTeam());

    dispatch(SetSecondhalf_minutes6());
    dispatch(SetSecondhalf_event6());
    dispatch(SetSecondhalf_name6());
    dispatch(SetSecondhalf_surname6());
    dispatch(SetSecondhalf_team6_NoTeam());

    dispatch(SetSecondhalf_minutes7());
    dispatch(SetSecondhalf_event7());
    dispatch(SetSecondhalf_name7());
    dispatch(SetSecondhalf_surname7());
    dispatch(SetSecondhalf_team7_NoTeam());

    dispatch(SetHomeTeamScoreValue());
    dispatch(SetHomeTeamShootValue());
    dispatch(SetHomeTeamShootOnTargetValue());
    dispatch(SetHomeTeamBallPossessionValue());
    dispatch(SetHomeTeamPassRateValue());
    dispatch(SetHomeTeamYellowCardValue());
    dispatch(SetHomeTeamRedCardValue());
    dispatch(SetHomeTeamCornerValue());
    dispatch(SetHomeTeamFoulValue());

    dispatch(SetAwayTeamScoreValue());
    dispatch(SetAwayTeamShootValue());
    dispatch(SetAwayTeamShootOnTargetValue());
    dispatch(SetAwayTeamBallPossessionValue());
    dispatch(SetAwayTeamPassRateValue());
    dispatch(SetAwayTeamYellowCardValue());
    dispatch(SetAwayTeamRedCardValue());
    dispatch(SetAwayTeamCornerValue());
    dispatch(SetAwayTeamFoulValue());

    dispatch(SetHomeTeam_gk1_yellowCard_f());
    dispatch(SetHomeTeam_lb1_yellowCard_f());
    dispatch(SetHomeTeam_cb1_yellowCard_f());
    dispatch(SetHomeTeam_cb2_yellowCard_f());
    dispatch(SetHomeTeam_rb1_yellowCard_f());
    dispatch(SetHomeTeam_dm1_yellowCard_f());
    dispatch(SetHomeTeam_cm1_yellowCard_f());
    dispatch(SetHomeTeam_cm2_yellowCard_f());
    dispatch(SetHomeTeam_lw1_yellowCard_f());
    dispatch(SetHomeTeam_rw1_yellowCard_f());
    dispatch(SetHomeTeam_st1_yellowCard_f());

    dispatch(SetHomeTeam_gk1_redCard_f());
    dispatch(SetHomeTeam_lb1_redCard_f());
    dispatch(SetHomeTeam_cb1_redCard_f());
    dispatch(SetHomeTeam_cb2_redCard_f());
    dispatch(SetHomeTeam_rb1_redCard_f());
    dispatch(SetHomeTeam_dm1_redCard_f());
    dispatch(SetHomeTeam_cm1_redCard_f());
    dispatch(SetHomeTeam_cm2_redCard_f());
    dispatch(SetHomeTeam_lw1_redCard_f());
    dispatch(SetHomeTeam_rw1_redCard_f());
    dispatch(SetHomeTeam_st1_redCard_f());

    dispatch(SetAwayTeam_gk2_yellowCard_f());
    dispatch(SetAwayTeam_lb2_yellowCard_f());
    dispatch(SetAwayTeam_cb4_yellowCard_f());
    dispatch(SetAwayTeam_cb3_yellowCard_f());
    dispatch(SetAwayTeam_rb2_yellowCard_f());
    dispatch(SetAwayTeam_dm2_yellowCard_f());
    dispatch(SetAwayTeam_cm4_yellowCard_f());
    dispatch(SetAwayTeam_cm3_yellowCard_f());
    dispatch(SetAwayTeam_lw2_yellowCard_f());
    dispatch(SetAwayTeam_rw2_yellowCard_f());
    dispatch(SetAwayTeam_st2_yellowCard_f());

    dispatch(SetAwayTeam_gk2_redCard_f());
    dispatch(SetAwayTeam_lb2_redCard_f());
    dispatch(SetAwayTeam_cb4_redCard_f());
    dispatch(SetAwayTeam_cb3_redCard_f());
    dispatch(SetAwayTeam_rb2_redCard_f());
    dispatch(SetAwayTeam_dm2_redCard_f());
    dispatch(SetAwayTeam_cm4_redCard_f());
    dispatch(SetAwayTeam_cm3_redCard_f());
    dispatch(SetAwayTeam_lw2_redCard_f());
    dispatch(SetAwayTeam_rw2_redCard_f());
    dispatch(SetAwayTeam_st2_redCard_f());

    dispatch(SetFirsthalf_yellowCard1_f());
    dispatch(SetFirsthalf_yellowCard2_f());
    dispatch(SetFirsthalf_yellowCard3_f());
    dispatch(SetFirsthalf_yellowCard4_f());
    dispatch(SetFirsthalf_yellowCard5_f());
    dispatch(SetFirsthalf_yellowCard6_f());
    dispatch(SetFirsthalf_yellowCard7_f());

    dispatch(SetFirsthalf_redCard1_f());
    dispatch(SetFirsthalf_redCard2_f());
    dispatch(SetFirsthalf_redCard3_f());
    dispatch(SetFirsthalf_redCard4_f());
    dispatch(SetFirsthalf_redCard5_f());
    dispatch(SetFirsthalf_redCard6_f());
    dispatch(SetFirsthalf_redCard7_f());

    dispatch(SetSecondhalf_yellowCard1_f());
    dispatch(SetSecondhalf_yellowCard2_f());
    dispatch(SetSecondhalf_yellowCard3_f());
    dispatch(SetSecondhalf_yellowCard4_f());
    dispatch(SetSecondhalf_yellowCard5_f());
    dispatch(SetSecondhalf_yellowCard6_f());
    dispatch(SetSecondhalf_yellowCard7_f());

    dispatch(SetSecondhalf_redCard1_f());
    dispatch(SetSecondhalf_redCard2_f());
    dispatch(SetSecondhalf_redCard3_f());
    dispatch(SetSecondhalf_redCard4_f());
    dispatch(SetSecondhalf_redCard5_f());
    dispatch(SetSecondhalf_redCard6_f());
    dispatch(SetSecondhalf_redCard7_f());

    dispatch(GetIsTacticsButtonClick_f());
    dispatch(GetIsEventNow_f());
  }

  return (
    <div className="div-all-temaselect">
      {ControlHomeAwaySideValue()}
      <div className="div-left1-btn-teamselect">
        <button onClick={teamSour1} className="buttons-left-right-teamselect">
          {" "}
          {txtLeft}{" "}
        </button>
      </div>
      <div className="div-team1-teamselect">
        <div className="div-team1-up-teamselect">
          {homeIdCountTeams()} / {Leagues.leagues[homeLeagueValue].teams.length}
        </div>
        <div className="div-team1-mid-teamselect">{homeNameCountTeams()}</div>
        <div className="div-team1-down-teamselect">
          <div className="div-team1-down-atc-teamselect">
            <div className="div-team1-down-atctxt-teamselect">
              {txtAttack + " : "}
            </div>
            <div className="div-team1-down-atcnum-teamselect">
              {homeAtcTeams()}
            </div>
          </div>
          <div className="div-team1-down-mid-teamselect">
            <div className="div-team1-down-midtxt-teamselect">
              {txtMiddle + " : "}
            </div>
            <div className="div-team1-down-midnum-teamselect">
              {homeMidTeams()}
            </div>
          </div>
          <div className="div-team1-down-def-teamselect">
            <div className="div-team1-down-deftxt-teamselect">
              {txtDefence + " : "}
            </div>
            <div className="div-team1-down-defnum1-teamselect">
              {homeDefTeams()}
            </div>
          </div>
        </div>
      </div>
      <div className="div-right1-btn-teamselect">
        <button onClick={teamPlus1} className="buttons-left-right-teamselect">
          {" "}
          {txtRight}{" "}
        </button>
      </div>
      <div className="div-teamselect-buttons">
        <Link to={"/playorgameplan"}>
          <button onClick={DefaultPlayers} className="buttons-teamselect">
            {txtContinueButton}
          </button>
        </Link>
        <Link to={"/leagueselect"}>
          <button className="buttons-teamselect">
            {txtBackToLeaguesButton}
          </button>
        </Link>
      </div>
      <div className="div-left2-btn-teamselect">
        <button onClick={teamSour2} className="buttons-left-right-teamselect">
          {" "}
          {txtLeft}{" "}
        </button>
      </div>
      <div className="div-team2-teamselect">
        <div className="div-team2-up-teamselect">
          {awayIdCountTeams()} / {Leagues.leagues[awayLeagueValue].teams.length}
        </div>
        <div className="div-team2-mid-teamselect">{awayNameCountTeams()}</div>
        <div className="div-team2-down-teamselect">
          <div className="div-team2-down-atc-teamselect">
            <div className="div-team2-down-atctxt-teamselect">
              {txtAttack + " : "}
            </div>
            <div className="div-team2-down-atcnum-teamselect">
              {awayAtcTeams()}
            </div>
          </div>
          <div className="div-team2-down-mid-teamselect">
            <div className="div-team2-down-midtxt-teamselect">
              {txtMiddle + " : "}
            </div>
            <div className="div-team2-down-midnum-teamselect">
              {awayMidTeams()}
            </div>
          </div>
          <div className="div-team2-down-def-teamselect">
            <div className="div-team2-down-deftxt-teamselect">
              {txtDefence + " : "}
            </div>
            <div className="div-team2-down-defnum-teamselect">
              {awayDefTeams()}
            </div>
          </div>
        </div>
      </div>
      <div className="div-right2-btn-teamselect">
        <button onClick={teamPlus2} className="buttons-left-right-teamselect">
          {" "}
          {txtRight}{" "}
        </button>
      </div>
    </div>
  );
}

export default Teamselect;

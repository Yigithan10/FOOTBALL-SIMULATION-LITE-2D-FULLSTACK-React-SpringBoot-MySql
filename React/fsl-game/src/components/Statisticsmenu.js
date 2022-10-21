import React from 'react'
import Languages from '../languages.json'
import { useSelector, useDispatch } from 'react-redux'

function Statisticsmenu() {

  const reduxLanguage = useSelector(
    (state) => state.setLanguage_login.language
  );

  const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
  const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

  const homeTeamScoreValue = useSelector(state => state.GetMatchStartValue_on.homeTeamScoreValue)
  const homeTeamShootValue = useSelector(state => state.GetMatchStartValue_on.homeTeamShootValue)
  const homeTeamShootOnTargetValue = useSelector(state => state.GetMatchStartValue_on.homeTeamShootOnTargetValue)
  const homeTeamBallPossessionValue = useSelector(state => state.GetMatchStartValue_on.homeTeamBallPossessionValue)
  const homeTeamPassRateValue = useSelector(state => state.GetMatchStartValue_on.homeTeamPassRateValue)
  const homeTeamYellowCardValue = useSelector(state => state.GetMatchStartValue_on.homeTeamYellowCardValue)
  const homeTeamRedCardValue = useSelector(state => state.GetMatchStartValue_on.homeTeamRedCardValue)
  const homeTeamCornerValue = useSelector(state => state.GetMatchStartValue_on.homeTeamCornerValue)
  const homeTeamFoulValue = useSelector(state => state.GetMatchStartValue_on.homeTeamFoulValue)

  const awayTeamScoreValue = useSelector(state => state.GetMatchStartValue_on.awayTeamScoreValue)
  const awayTeamShootValue = useSelector(state => state.GetMatchStartValue_on.awayTeamShootValue)
  const awayTeamShootOnTargetValue = useSelector(state => state.GetMatchStartValue_on.awayTeamShootOnTargetValue)
  const awayTeamBallPossessionValue = useSelector(state => state.GetMatchStartValue_on.awayTeamBallPossessionValue)
  const awayTeamPassRateValue = useSelector(state => state.GetMatchStartValue_on.awayTeamPassRateValue)
  const awayTeamYellowCardValue = useSelector(state => state.GetMatchStartValue_on.awayTeamYellowCardValue)
  const awayTeamRedCardValue = useSelector(state => state.GetMatchStartValue_on.awayTeamRedCardValue)
  const awayTeamCornerValue = useSelector(state => state.GetMatchStartValue_on.awayTeamCornerValue)
  const awayTeamFoulValue = useSelector(state => state.GetMatchStartValue_on.awayTeamFoulValue)

  let txtStatisticsButton = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatistics
  let txtStatisticsGoal = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsGoal
  let txtStatisticsShoot = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsShoot
  let txtStatisticsShootOnTarget = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsShootOnTarget
  let txtStatisticsBallPossession = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsBallPossession
  let txtStatisticsAccuratePassRate = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsAccuratePassRate
  let txtStatisticsYellowCard = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsYellowCard
  let txtStatisticsRedCard = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsRedCard
  let txtStatisticsCorner = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsCorner
  let txtStatisticsFoul = Languages.languages[reduxLanguage].playmatchmenu.playmatchmenuStatisticsFoul

  return (
    <div>
      <div className='div-mid-team1-statisticsmenu'>
        <div className='div-team1-goalandscore-statisticsmenu'>
          <div className='div-team1-goal-statisticsmenu'>
            {txtStatisticsGoal}
          </div>
          <div className='div-team1-goalscore-statisticsmenu'>
            {homeTeamScoreValue}
          </div>
        </div>
        <div className='div-team1-shootandscore-statisticsmenu'>
          <div className='div-team1-shoot-statisticsmenu'>
            {txtStatisticsShoot}
          </div>
          <div className='div-team1-shootscore-statisticsmenu'>
            {homeTeamShootValue}
          </div>
        </div>
        <div className='div-team1-shootonandscore-statisticsmenu'>
          <div className='div-team1-shooton-statisticsmenu'>
            {txtStatisticsShootOnTarget}
          </div>
          <div className='div-team1-shootonscore-statisticsmenu'>
            {homeTeamShootOnTargetValue}
          </div>
        </div>
        <div className='div-team1-ballandscore-statisticsmenu'>
          <div className='div-team1-ball-statisticsmenu'>
            {"(%) " + txtStatisticsBallPossession}
          </div>
          <div className='div-team1-ballscore-statisticsmenu'>
            {homeTeamBallPossessionValue}
          </div>
        </div>
        <div className='div-team1-passrateandscore-statisticsmenu'>
          <div className='div-team1-passrate-statisticsmenu'>
            {"(%) " + txtStatisticsAccuratePassRate}
          </div>
          <div className='div-team1-passratescore-statisticsmenu'>
            {homeTeamPassRateValue}
          </div>
        </div>
        <div className='div-team1-yellowcardandscore-statisticsmenu'>
          <div className='div-team1-yellowcard-statisticsmenu'>
            {txtStatisticsYellowCard}
          </div>
          <div className='div-team1-yellowcardscore-statisticsmenu'>
            {homeTeamYellowCardValue}
          </div>
        </div>
        <div className='div-team1-redcardandscore-statisticsmenu'>
          <div className='div-team1-redcard-statisticsmenu'>
            {txtStatisticsRedCard}
          </div>
          <div className='div-team1-redcardscore-statisticsmenu'>
            {homeTeamRedCardValue}
          </div>
        </div>
        <div className='div-team1-cornerandscore-statisticsmenu'>
          <div className='div-team1-corner-statisticsmenu'>
            {txtStatisticsCorner}
          </div>
          <div className='div-team1-cornerscore-statisticsmenu'>
            {homeTeamCornerValue}
          </div>
        </div>
        <div className='div-team1-foulandscore-statisticsmenu'>
          <div className='div-team1-foul-statisticsmenu'>
            {txtStatisticsFoul}
          </div>
          <div className='div-team1-foulscore-statisticsmenu'>
            {homeTeamFoulValue}
          </div>
        </div>
      </div>
      <div className='div-mid-team2-statisticsmenu'>
        <div className='div-team2-goalandscore-statisticsmenu'>
          <div className='div-team2-goalscore-statisticsmenu'>
            {awayTeamScoreValue}
          </div>
          <div className='div-team2-goal-statisticsmenu'>
            {txtStatisticsGoal}
          </div>
        </div>
        <div className='div-team2-shootandscore-statisticsmenu'>
          <div className='div-team2-shootscore-statisticsmenu'>
            {awayTeamShootValue}
          </div>
          <div className='div-team2-shoot-statisticsmenu'>
            {txtStatisticsShoot}
          </div>
        </div>
        <div className='div-team2-shootonandscore-statisticsmenu'>
          <div className='div-team2-shootonscore-statisticsmenu'>
            {awayTeamShootOnTargetValue}
          </div>
          <div className='div-team2-shooton-statisticsmenu'>
            {txtStatisticsShootOnTarget}
          </div>
        </div>
        <div className='div-team2-ballandscore-statisticsmenu'>
          <div className='div-team2-ballscore-statisticsmenu'>
            {awayTeamBallPossessionValue}
          </div>
          <div className='div-team2-ball-statisticsmenu'>
            {txtStatisticsBallPossession + " (%)"}
          </div>
        </div>
        <div className='div-team2-passrateandscore-statisticsmenu'>
          <div className='div-team2-passratescore-statisticsmenu'>
            {awayTeamPassRateValue}
          </div>
          <div className='div-team2-passrate-statisticsmenu'>
            {txtStatisticsAccuratePassRate + " (%)"}
          </div>
        </div>
        <div className='div-team2-yellowcardandscore-statisticsmenu'>
          <div className='div-team2-yellowcardscore-statisticsmenu'>
            {awayTeamYellowCardValue}
          </div>
          <div className='div-team2-yellowcard-statisticsmenu'>
            {txtStatisticsYellowCard}
          </div>
        </div>
        <div className='div-team2-redcardandscore-statisticsmenu'>
          <div className='div-team2-redcardscore-statisticsmenu'>
            {awayTeamRedCardValue}
          </div>
          <div className='div-team2-redcard-statisticsmenu'>
            {txtStatisticsRedCard}
          </div>
        </div>
        <div className='div-team2-cornerandscore-statisticsmenu'>
          <div className='div-team2-cornerscore-statisticsmenu'>
            {awayTeamCornerValue}
          </div>
          <div className='div-team2-corner-statisticsmenu'>
            {txtStatisticsCorner}
          </div>
        </div>
        <div className='div-team2-foulandscore-statisticsmenu'>
          <div className='div-team2-foulscore-statisticsmenu'>
            {awayTeamFoulValue}
          </div>
          <div className='div-team2-foul-statisticsmenu'>
            {txtStatisticsFoul}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Statisticsmenu;
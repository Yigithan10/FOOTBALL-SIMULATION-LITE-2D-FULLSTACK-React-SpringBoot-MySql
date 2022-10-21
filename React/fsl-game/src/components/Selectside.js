import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import './Selectside.css'
import { setHomeSideValue, setAwaySideValue } from '../redux/selectSideSlice'
import Languages from '../languages.json'
import { useDispatch, useSelector } from 'react-redux';

function Selectside() {

  const homeSideValue = useSelector(state => state.setHomeSideValue.homeSideValue)
  const awaySideValue = useSelector(state => state.setAwaySideValue.awaySideValue)

  const reduxId = useSelector((state) => state.setId_login.id);
  const reduxUsername = useSelector(
    (state) => state.setUsername_login.username
  );
  const reduxPassword = useSelector(
    (state) => state.setPassword_login.password
  );
  const reduxLanguage = useSelector(
    (state) => state.setLanguage_login.language
  );
  
  const matchStartValueBool = useSelector(state => state.GetMatchStartValue_off.matchStartValue)

  let txtQuestion = Languages.languages[reduxLanguage].selectside.selectsideSelectSide
  let txtHomeButton = Languages.languages[reduxLanguage].selectside.selectsideHome
  let txtAwayButton = Languages.languages[reduxLanguage].selectside.selectsideAway

  const dispatch = useDispatch()

  function controlRedux(){
    if(reduxUsername==" "){
      return <Navigate to={"/"} />
    }
  }

  return (
    <div className='div-all-selectside'>
      {controlRedux()}
      {console.log(matchStartValueBool)}
      <div className='div1-selectside'>
        <p>{txtQuestion}</p>
      </div>
      <div className='div2-selectside'>
        <Link onClick={() => dispatch(setHomeSideValue())} to={'/leagueselect'}><button className='buttons-selectside'>{txtHomeButton}</button></Link>
        <Link onClick={() => dispatch(setAwaySideValue())} to={'/leagueselect'}><button className='buttons-selectside'>{txtAwayButton}</button></Link>
      </div>
    </div>
  )
}

export default Selectside;
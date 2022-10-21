import React from 'react'
import './Settings.css'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Languages from '../languages.json'
import { Avatar } from "@mui/material"

function Settings() {

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

  let txtChangeLanguageButton = Languages.languages[reduxLanguage].settings.settingsChangeLanguage
  let txtChangeUsernameButton = Languages.languages[reduxLanguage].settings.settingsChangeUsername
  let txtChangePasswordButton = Languages.languages[reduxLanguage].settings.settingsChangePassword
  let txtDeleteAccountButton = Languages.languages[reduxLanguage].settings.settingsDeleteAccount
  let txtTurnBackButton = Languages.languages[reduxLanguage].settings.settingsTurnBack

  function controlRedux() {
    if (reduxUsername == " ") {
      return <Navigate to={"/"} />
    }
  }

  return (
    <div className='div-all-settings'>
      {controlRedux()}
      <div className='div1-settings'>
        <Avatar
          sx={{ width: 140, height: 140, fontSize: 70 }}
        >{reduxUsername.charAt(0).toUpperCase()}</Avatar>
        <p style={{ marginBottom: 30, fontSize: 40 }}>{reduxUsername}</p>
        <Link to='/language'><button className='buttons-settings'>{txtChangeLanguageButton}</button></Link>
        <Link to='/changeusername'><button className='buttons-settings'>{txtChangeUsernameButton}</button></Link>
        <Link to='/changepassword'><button className='buttons-settings'>{txtChangePasswordButton}</button></Link>
        <Link to='/deleteaccount'><button className='buttons-settings'>{txtDeleteAccountButton}</button></Link>
      </div>
      <div className='div2-settings'>
        <Link to='/mainmenu'><button className='buttons-settings'>{txtTurnBackButton}</button></Link>
        <p style={{fontSize: 20}} >Contact : @hotmail.com</p>
      </div>
    </div>
  )
}

export default Settings;
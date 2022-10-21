import React from "react";
import { BrowserRouter as Route, Router, Link, Navigate, useNavigate } from 'react-router-dom'
import "./Mainmenu.css";
import Languages from "../languages.json";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@mui/material"

function Mainmenu() {
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

  let txtPLayButton = Languages.languages[reduxLanguage].mainmenu.mainmenuPlay;
  let txtSettingsButton =
    Languages.languages[reduxLanguage].mainmenu.mainmenuSettings;
  let txtQuitButton = Languages.languages[reduxLanguage].mainmenu.mainmenuQuit;

  const homeSideValue = useSelector(
    (state) => state.setHomeSideValue.homeSideValue
  );
  const awaySideValue = useSelector(
    (state) => state.setAwaySideValue.awaySideValue
  );

  return (
    <div className="div-all-mainmenu">
      {console.log("reduxId : *** mainmenu panelinde : *** ", reduxId)}
      {console.log(
        "reduxUsername : *** mainmenu panelinde : *** ",
        reduxUsername
      )}
      {console.log(
        "reduxPassword : *** mainmenu panelinde : *** ",
        reduxPassword
      )}
      {console.log(
        "reduxLanguage : *** mainmenu panelinde : *** ",
        reduxLanguage
      )}
      <div className="div-mid-buttons-mainmenu">
        <Avatar
          sx={{ width: 140, height: 140, fontSize: 70 }}
        >{reduxUsername.charAt(0).toUpperCase()}</Avatar>
        <p style={{marginBottom: 30, fontSize: 40}}>{reduxUsername}</p>
        <Link to="/selectside">
          <button className="buttons-mainmenu">{txtPLayButton}</button>
        </Link>
        <Link to="/settings">
          <button className="buttons-mainmenu">{txtSettingsButton}</button>
        </Link>
        <Link to="/exitmenu">
          <button className="buttons-mainmenu">{txtQuitButton}</button>
        </Link>
      </div>
    </div>
  );
}

export default Mainmenu;

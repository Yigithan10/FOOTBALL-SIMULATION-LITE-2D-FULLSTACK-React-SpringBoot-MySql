import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import "./Quitmenu.css";
import Languages from "../languages.json";
import {
  setId_default,
  setUsername_default,
  setPassword_default,
  setLanguage_default,
  setId_login,
  setUsername_login,
  setPassword_login,
  setLanguage_login,
} from "../redux/loginSlice";

function Quitmenu() {
  let dispatch = useDispatch();

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

  const homeSideValue = useSelector(
    (state) => state.setHomeSideValue.homeSideValue
  );
  const awaySideValue = useSelector(
    (state) => state.setAwaySideValue.awaySideValue
  );

  let txtQuestion = Languages.languages[reduxLanguage].quitmenu.quitmenuDoYouWantToExit;
  let txtYesButton = Languages.languages[reduxLanguage].quitmenu.quitmenuYes;
  let txtNoButton = Languages.languages[reduxLanguage].quitmenu.quitmenuNo;

  function ControlHomeAwaySideValue() {
    if (homeSideValue == false && awaySideValue == false) {
      return <Navigate to="/" />;
    }
  }

  function controlRedux(){
    if(reduxUsername==" "){
      return <Navigate to={"/"} />
    }
  }

  return (
    <div className="div-all-quitmenu">
      {controlRedux()}
      <div className="div1-quitmenu">
        <p>{txtQuestion}</p>
      </div>
      <div className="div2-quitmenu">
        <Link to="/">
          <button
            onClick={() => {
              dispatch(setId_default());
              dispatch(setUsername_default());
              dispatch(setPassword_default());
              dispatch(setLanguage_default());
            }}
            className="buttons-quitmenu"
          >
            {txtYesButton}
          </button>
        </Link>
        <Link to="/mainmenu">
          <button className="buttons-quitmenu">{txtNoButton}</button>
        </Link>
      </div>
    </div>
  );
}

export default Quitmenu;

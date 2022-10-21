import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import './Language.css';
import Languages from '../languages.json'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
import {
  GetLanguageValue_eng, GetLanguageValue_ger, GetLanguageValue_fra, GetLanguageValue_esp,
  GetLanguageValue_ita, GetLanguageValue_por, GetLanguageValue_tur,
  GetLanguageValue_rus, GetLanguageValue_jap, GetLanguageValue_chi
} from '../redux/languageSlice'

function Language() {

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

  const sendRequestLanguage = (lang) => {
    fetch("/users/searchUpdateLanguageId/"+reduxId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: reduxUsername,
        password: reduxPassword,
        language: lang,
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          response.json().then((dataJson) => {
            console.log("DATA language: ", dataJson);
            dispatch(setLanguage_login(dataJson.language))
          });
        } else if (response.status == 400) {
          alert("hata var!");
        } else {
          alert("birseyler yanlis gitti!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const GetLanguageValueEng = () => {
    sendRequestLanguage("eng")
  }

  function GetLanguageValueGer() {
    sendRequestLanguage("ger")
  }

  function GetLanguageValueFra() {
    sendRequestLanguage("fra")
  }

  function GetLanguageValueEsp() {
    sendRequestLanguage("esp")
  }

  function GetLanguageValueIta() {
    sendRequestLanguage("ita")
  }

  function GetLanguageValuePor() {
    sendRequestLanguage("por")
  }

  function GetLanguageValueTur() {
    sendRequestLanguage("tur")
  }

  function GetLanguageValueRus() {
    sendRequestLanguage("rus")
  }

  function GetLanguageValueJap() {
    sendRequestLanguage("jap")
  }

  function GetLanguageValueChi() {
    sendRequestLanguage("chi")
  }

  function controlRedux(){
    if(reduxUsername==" "){
      return <Navigate to={"/"} />
    }
  }

  return (
    <div className="div-all-language-buttons">
      {controlRedux()}
      <div className="div-left-lang-buttons">
        <Link to='/mainmenu'><button onClick={GetLanguageValueEng} className='buttons-language'>English</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueGer} className='buttons-language'>Deutschs</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueFra} className='buttons-language'>Français</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueEsp} className='buttons-language'>Español</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueIta} className='buttons-language'>Italiano</button></Link>
      </div>
      <div className='div-empty-lang'>
        <p></p>
      </div>
      <div className="div-right-lang-buttons">
        <Link to='/mainmenu'><button onClick={GetLanguageValuePor} className='buttons-language'>Português</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueTur} className='buttons-language'>Türkçe</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueRus} className='buttons-language'>Русский</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueJap} className='buttons-language'>日本</button></Link>
        <Link to='/mainmenu'><button onClick={GetLanguageValueChi} className='buttons-language'>中国人</button></Link>
      </div>
    </div>
  );
}

export default Language;

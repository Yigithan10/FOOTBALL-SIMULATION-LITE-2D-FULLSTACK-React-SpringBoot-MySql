import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  FormControl,
  InputBase,
  ButtonGroup,
  Button,
  TextField,
  Avatar,
  Box,
  Stack,
  FormHelperText,
  Alert,
} from "@mui/material";
import Languages from "../languages.json";
import "./Register.css";

function Register() {
  let navigate = useNavigate();

  let browserLanguage = navigator.language;
  let browserLanguageCode = "eng";

  let txtRegisterPanelLoginFsl;
  let txtRegisterPanelUsername;
  let txtRegisterPanelPassword;
  let txtRegisterPanelRegister;
  let txtRegisterPanelTurnBack;
  let txtRegisterPanelAlert1;
  let txtRegisterPanelAlert2;
  let txtRegisterPanelAlert3;

  function ControlBrowserLanguage() {
    if (browserLanguage == "en-EN") {
      browserLanguageCode = "eng";
    } else if (browserLanguage == "de-DE") {
      browserLanguageCode = "deu";
    } else if (browserLanguage == "fr-FR") {
      browserLanguageCode = "fra";
    } else if (browserLanguage == "es-ES") {
      browserLanguageCode = "esp";
    } else if (browserLanguage == "it-IT") {
      browserLanguageCode = "ita";
    } else if (browserLanguage == "pt-PT") {
      browserLanguageCode = "por";
    } else if (browserLanguage == "tr-TR") {
      browserLanguageCode = "tur";
    } else if (browserLanguage == "ru-RU") {
      browserLanguageCode = "rus";
    } else if (browserLanguage == "ja-JA") {
      browserLanguageCode = "jap";
    } else if (browserLanguage == "zh-ZH") {
      browserLanguageCode = "chi";
    } else {
      browserLanguageCode = "eng";
    }

    txtRegisterPanelLoginFsl = Languages.languages[browserLanguageCode].registerPanel.registerPanelLoginFsl;
    txtRegisterPanelUsername = Languages.languages[browserLanguageCode].registerPanel.registerPanelUsername;
    txtRegisterPanelPassword = Languages.languages[browserLanguageCode].registerPanel.registerPanelPassword;
    txtRegisterPanelRegister = Languages.languages[browserLanguageCode].registerPanel.registerPanelRegister;
    txtRegisterPanelTurnBack = Languages.languages[browserLanguageCode].registerPanel.registerPanelTurnBack;
    txtRegisterPanelAlert1 = Languages.languages[browserLanguageCode].registerPanel.registerPanelAlert1;
    txtRegisterPanelAlert2 = Languages.languages[browserLanguageCode].registerPanel.registerPanelAlert2;
    txtRegisterPanelAlert3 = Languages.languages[browserLanguageCode].registerPanel.registerPanelAlert3;
  }

  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [languageName, setLanguageName] = useState("English");
  const [languageValue, setLanguageValue] = useState("eng");

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const handleLanguageEng = () => {
    setLanguageName("English");
    setLanguageValue("eng");
  };

  const handleLanguageGer = () => {
    setLanguageName("Deutsch");
    setLanguageValue("ger");
  };

  const handleLanguageFra = () => {
    setLanguageName("Français");
    setLanguageValue("fra");
  };

  const handleLanguageEsp = () => {
    setLanguageName("Español");
    setLanguageValue("esp");
  };

  const handleLanguageIta = () => {
    setLanguageName("Italiano");
    setLanguageValue("ita");
  };

  const handleLanguagePor = () => {
    setLanguageName("Português");
    setLanguageValue("por");
  };

  const handleLanguageTur = () => {
    setLanguageName("Türkçe");
    setLanguageValue("tur");
  };

  const handleLanguageRus = () => {
    setLanguageName("Русский");
    setLanguageValue("rus");
  };

  const handleLanguageJap = () => {
    setLanguageName("日本");
    setLanguageValue("jap");
  };

  const handleLanguageChi = () => {
    setLanguageName("中国人");
    setLanguageValue("chi");
  };

  const sendRequest = (path) => {
    fetch("/auth/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        language: languageValue,
      }),
    })
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setUsername(" ");
          setPassword(" ");
          alert(txtRegisterPanelAlert1);
          navigate("/");
        } else if (res.status == 400) {
          setUsername(" ");
          setPassword(" ");
          alert(txtRegisterPanelAlert2);
          window.location.reload();
        } else {
          setUsername(" ");
          setPassword(" ");
          alert(txtRegisterPanelAlert3);
          window.location.reload();
        }
      })
      .then((result) => setUser(result))
      .catch((err) => console.log(err));
  };

  const handleRegister = () => {
    sendRequest("register");
  };

  return (
    <div className="div-boxs">
      {ControlBrowserLanguage()}
      <div className="div-box">
        <div className="div-inputs">
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            {txtRegisterPanelLoginFsl}
          </p>
          <FormControl>
            <div style={{ marginTop: 30 }} class="btn-group">
              <button
                type="button"
                class="btn btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {languageName}
              </button>
              <div class="dropdown-menu">
                <button
                  style={{ backgroundColor: "white" }}
                  type="button"
                  onClick={handleLanguageEng}
                  class="dropdown-item"
                >
                  English
                </button>
                <button
                  style={{ backgroundColor: "darkgray" }}
                  type="button"
                  onClick={handleLanguageGer}
                  class="dropdown-item"
                >
                  Deutsch
                </button>
                <button
                  style={{ backgroundColor: "white" }}
                  type="button"
                  onClick={handleLanguageFra}
                  class="dropdown-item"
                >
                  Français
                </button>
                <button
                  style={{ backgroundColor: "darkgray" }}
                  type="button"
                  onClick={handleLanguageEsp}
                  class="dropdown-item"
                >
                  Español
                </button>
                <button
                  style={{ backgroundColor: "white" }}
                  type="button"
                  onClick={handleLanguageIta}
                  class="dropdown-item"
                >
                  Italiano
                </button>
                <button
                  style={{ backgroundColor: "darkgray" }}
                  type="button"
                  onClick={handleLanguagePor}
                  class="dropdown-item"
                >
                  Português
                </button>
                <button
                  style={{ backgroundColor: "white" }}
                  type="button"
                  onClick={handleLanguageTur}
                  class="dropdown-item"
                >
                  Türkçe
                </button>
                <button
                  style={{ backgroundColor: "darkgray" }}
                  type="button"
                  onClick={handleLanguageRus}
                  class="dropdown-item"
                >
                  Русский
                </button>
                <button
                  style={{ backgroundColor: "white" }}
                  type="button"
                  onClick={handleLanguageJap}
                  class="dropdown-item"
                >
                  日本
                </button>
                <button
                  style={{ backgroundColor: "darkgray" }}
                  type="button"
                  onClick={handleLanguageChi}
                  class="dropdown-item"
                >
                  中国人
                </button>
              </div>
            </div>
            <TextField
              style={{ marginTop: 20 }}
              label= {txtRegisterPanelUsername}
              onChange={(i) => handleUsername(i.target.value)}
            />

            <TextField
              style={{ marginTop: 20 }}
              label= {txtRegisterPanelPassword}
              type="password"
              onChange={(i) => handlePassword(i.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              style={{
                marginTop: 20,
                background: "linear-gradient(darkgreen)",
                color: "white",
              }}
              onClick={handleRegister}
            >
              {txtRegisterPanelRegister}
            </Button>
            <Link
              style={{
                marginTop: 20,
                textDecoration: "none",
                color: "darkgreen",
                display: "flex",
                justifyContent: "center",
              }}
              to={"/"}
            >
              <Button
                variant="contained"
                color="success"
                style={{
                  background: "linear-gradient(darkgreen)",
                  color: "white",
                }}
              >
                {txtRegisterPanelTurnBack}
              </Button>
            </Link>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { FormControl, Button, TextField, FormHelperText } from "@mui/material";
import Languages from "../languages.json";
import "./LoginPanel.css";
import Alert from "@mui/material/Alert";

function LoginPanel() {
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

  let browserLanguage = navigator.language;
  let browserLanguageCode = "eng";

  let txtLoginPanelLoginFsl;
  let txtLoginPanelUsername;
  let txtLoginPanelPassword;
  let txtLoginPanelLogin;
  let txtLoginPanelDonnotHaveAnAccount;
  let txtLoginPanelRegister;
  let txtLoginPanelAlert1;
  let txtLoginPanelAlert2;
  let txtLoginPanelAlert3;

  function ControlBrowserLanguage() {
    if (localStorage.getItem("username") == null) {
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

      txtLoginPanelLoginFsl =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelLoginFsl;
      txtLoginPanelUsername =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelUsername;
      txtLoginPanelPassword =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelPassword;
      txtLoginPanelLogin =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelLogin;
      txtLoginPanelDonnotHaveAnAccount =
        Languages.languages[browserLanguageCode].loginPanel
          .loginPanelDonnotHaveAnAccount;
      txtLoginPanelRegister =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelRegister;
      txtLoginPanelAlert1 =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelAlert1;
      txtLoginPanelAlert2 =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelAlert2;
      txtLoginPanelAlert3 =
        Languages.languages[browserLanguageCode].loginPanel.loginPanelAlert3;
    } else {
      return navigate("/mainmenu");
    }
  }

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (value) => {
    setUsername(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
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
      }),
    })
      .then((response) => {
        if (response.status == 200) {
          response.json().then((dataJson) => {
            console.log("DATA: ", dataJson);
            sendUsername(username);
            navigate("/mainmenu");
            alert(txtLoginPanelAlert1);
          });
        } else if (response.status == 400) {
          alert(txtLoginPanelAlert2);
          window.location.reload();
        } else {
          alert(txtLoginPanelAlert3);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendUsername = (pathUsername) => {
    fetch("/users/searchOneLoginUsername/" + pathUsername)
      .then((response) => {
        response.json().then((dataJson) => {
          dispatch(setId_login(dataJson.id));
          dispatch(setUsername_login(dataJson.username));
          dispatch(setPassword_login(dataJson.password));
          dispatch(setLanguage_login(dataJson.language));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = () => {
    sendRequest("login");
  };

  return (
    <div className="div-boxs">
      {ControlBrowserLanguage()}
      {console.log("The language is: " + browserLanguage)}
      <div className="div-box">
        <div className="div-inputs">
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            {txtLoginPanelLoginFsl}
          </p>
          <FormControl>
            <TextField
              style={{ marginTop: 30 }}
              label={txtLoginPanelUsername}
              onChange={(i) => handleUsername(i.target.value)}
            />

            <TextField
              style={{ marginTop: 30 }}
              label={txtLoginPanelPassword}
              type="password"
              onChange={(i) => handlePassword(i.target.value)}
            />

            <a style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="success"
                style={{
                  marginTop: 60,
                  background: "linear-gradient(darkgreen)",
                  color: "white",
                }}
                onClick={handleLogin}
              >
                {txtLoginPanelLogin}
              </Button>
            </a>
            <FormHelperText style={{ textAlign: "center" }}>
              {txtLoginPanelDonnotHaveAnAccount}
            </FormHelperText>
            <Link
              style={{
                textDecoration: "none",
                color: "darkgreen",
                display: "flex",
                justifyContent: "center",
              }}
              to={"/register"}
            >
              <Button
                variant="contained"
                color="success"
                style={{
                  background: "linear-gradient(darkgreen)",
                  color: "white",
                }}
              >
                {txtLoginPanelRegister}
              </Button>
            </Link>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default LoginPanel;

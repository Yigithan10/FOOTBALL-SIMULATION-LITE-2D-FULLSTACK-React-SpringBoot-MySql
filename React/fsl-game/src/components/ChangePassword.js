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
import {
    FormControl,
    Button,
    TextField,
    Alert,
} from "@mui/material";
import Languages from "../languages.json";
import "./ChangePassword.css";

function ChangePassword() {
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

    let txtSettingsEnterPassword = Languages.languages[reduxLanguage].settings.settingsEnterPassword
    let txtSettingsYourPassword = Languages.languages[reduxLanguage].settings.settingsYourPassword
    let txtSettingsSave = Languages.languages[reduxLanguage].settings.settingsSave
    let txtSettingsYourPasswordChanged = Languages.languages[reduxLanguage].settings.settingsYourPasswordChanged
    let txtSettingsYourPasswordHasnotChanged = Languages.languages[reduxLanguage].settings.settingsYourPasswordHasnotChanged
    let txtTurnBackButton = Languages.languages[reduxLanguage].settings.settingsTurnBack

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState("");

    const handlePassword = (value) => {
        setPassword(value);
    };

    const sendRequest = () => {
        fetch("/users/searchUpdatePasswordId/" + reduxId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: reduxUsername,
                password: password,
                language: reduxLanguage
            }),
        })
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((dataJson) => {
                        dispatch(setId_login(dataJson.id));
                        dispatch(setUsername_login(dataJson.username));
                        dispatch(setPassword_login(dataJson.password));
                        dispatch(setLanguage_login(dataJson.language));
                        alert(txtSettingsYourPasswordChanged);
                        navigate("/");
                    });
                } else {
                    alert(txtSettingsYourPasswordHasnotChanged);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = () => {
        if(password!=""){
            sendRequest();
        }else {
            alert(txtSettingsEnterPassword);
        }
    };

    return (
        <div className="div-boxs-changepassword">
            <div className="div-box-changepassword">
                <div className="div-inputs-changepassword">
                    <p style={{ textAlign: "center", fontStyle: "italic" }}>
                        {txtSettingsYourPassword}
                    </p>
                    <FormControl>
                        <TextField
                            style={{ marginTop: 30 }}
                            type= 'password'
                            label= {txtSettingsYourPassword}
                            onChange={(i) => handlePassword(i.target.value)} />



                        <a style={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                color="success"
                                style={{
                                    marginTop: 60,
                                }}
                                onClick={handleChange}
                            >
                                {txtSettingsSave}
                            </Button>
                        </a>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "darkgreen",
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 30
                            }}
                            to={"/settings"}
                        >
                            <Button
                                variant="contained"
                                color="success"
                                style={{
                                    background: "linear-gradient(darkgreen)",
                                    color: "white",
                                }}
                            >
                                {txtTurnBackButton}
                            </Button>
                        </Link>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;

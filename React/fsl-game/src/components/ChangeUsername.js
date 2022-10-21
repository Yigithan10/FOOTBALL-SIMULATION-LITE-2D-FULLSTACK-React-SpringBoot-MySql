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
import "./ChangeUsername.css";

function ChangeUsername() {
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
    
    let txtSettingsEnterUsername = Languages.languages[reduxLanguage].settings.settingsEnterUsername
    let txtSettingsYourUsername = Languages.languages[reduxLanguage].settings.settingsYourUsername
    let txtSettingsSave = Languages.languages[reduxLanguage].settings.settingsSave
    let txtSettingsYourUsernameChanged = Languages.languages[reduxLanguage].settings.settingsYourUsernameChanged
    let txtSettingsYourUsernameUsing = Languages.languages[reduxLanguage].settings.settingsYourUsernameUsing
    let txtSettingsYourUsernameHasnotChanged = Languages.languages[reduxLanguage].settings.settingsYourUsernameHasnotChanged
    let txtTurnBackButton = Languages.languages[reduxLanguage].settings.settingsTurnBack

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");

    const handleUsername = (value) => {
        setUsername(value);
    };

    const sendRequest = () => {
        fetch("/users/searchUpdateUsernameId/" + reduxId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: reduxPassword,
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
                        alert(txtSettingsYourUsernameChanged);
                        navigate("/");
                    });
                } else if (response.status == 400) {
                    alert(txtSettingsYourUsernameUsing);
                } else {
                    alert(txtSettingsYourUsernameHasnotChanged);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = () => {
        if(username!=""){
            sendRequest();
        }else {
            alert(txtSettingsEnterUsername)
        }
    };

    return (
        <div className="div-boxs-changeusername">
            <div className="div-box-changeusername">
                <div className="div-inputs-changeusername">
                    <p style={{ textAlign: "center", fontStyle: "italic" }}>
                        {txtSettingsYourUsername}
                    </p>
                    <FormControl>
                        <TextField
                            style={{ marginTop: 30 }}
                            label= {txtSettingsYourUsername}
                            onChange={(i) => handleUsername(i.target.value)} />



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

export default ChangeUsername;

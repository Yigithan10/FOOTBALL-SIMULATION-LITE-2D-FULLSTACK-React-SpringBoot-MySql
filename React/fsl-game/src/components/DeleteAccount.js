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
    Alert
} from "@mui/material";
import Languages from "../languages.json";
import "./DeleteAccount.css";

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

    let txtSettingsAreYouWantDelete = Languages.languages[reduxLanguage].settings.settingsAreYouWantDelete
    let txtSettingsDelete = Languages.languages[reduxLanguage].settings.settingsDelete
    let txtSettingsYourAccountDeleted = Languages.languages[reduxLanguage].settings.settingsYourAccountDeleted
    let txtSettingsYourAccountHasnotDeleted = Languages.languages[reduxLanguage].settings.settingsYourAccountHasnotDeleted
    let txtTurnBackButton = Languages.languages[reduxLanguage].settings.settingsTurnBack

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const sendRequest = () => {
        fetch("/users/searchDeleteId/" + reduxId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: reduxUsername,
                password: reduxPassword,
                language: reduxLanguage
            }),
        })
            .then((response) => {
                if (response.status == 200) {
                    dispatch(setId_default());
                    dispatch(setUsername_default());
                    dispatch(setPassword_default());
                    dispatch(setLanguage_default());
                    alert(txtSettingsYourAccountDeleted);
                    navigate("/");
                } else {
                    alert(txtSettingsYourAccountHasnotDeleted);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = () => {
        sendRequest();
    };

    return (
        <div className="div-boxs-changeusername">
            <div className="div-box-changeusername">
                <div className="div-inputs-changeusername">
                    <p style={{ textAlign: "center", fontStyle: "italic" }}>
                        {txtSettingsAreYouWantDelete}
                    </p>
                    <FormControl>
                        <a style={{ textAlign: "center" }}>
                            <Button
                                variant="contained"
                                color="success"
                                style={{
                                    marginTop: 60,
                                }}
                                onClick={handleDelete}
                            >
                                {txtSettingsDelete}
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

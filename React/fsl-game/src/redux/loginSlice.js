import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
    name: 'login',
    initialState: {
        id: 0,
        username: " ",
        password: " ",
        language: "eng"
    },
    reducers: {
        setId_default: (state, action) =>{
            state.id = 0;
        },
        setUsername_default: (state, action) =>{
            state.username = " ";
        },
        setPassword_default: (state, action) =>{
            state.password = " ";
        },
        setLanguage_default: (state, action) =>{
            state.language = "eng";
        },
        setId_login: (state, action) =>{
            state.id = action.payload;
        },
        setUsername_login: (state, action) =>{
            state.username = action.payload;
        },
        setPassword_login: (state, action) =>{
            state.password = action.payload;
        },
        setLanguage_login: (state, action) =>{
            state.language = action.payload;
        },
    }
})

export const { setId_default, setUsername_default, 
    setPassword_default, setLanguage_default, 
    setId_login, setUsername_login,
    setPassword_login, setLanguage_login } = login.actions
export default login.reducer
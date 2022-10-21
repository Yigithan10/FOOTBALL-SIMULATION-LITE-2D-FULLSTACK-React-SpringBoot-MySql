import { createSlice } from "@reduxjs/toolkit";

export const languageValue = createSlice({
    name: 'languageValue',
    initialState: {
        languageValue: 'eng'
    },
    reducers: {
        GetLanguageValue_eng: state => {state.languageValue = 'eng'},
        GetLanguageValue_ger: state => {state.languageValue = 'ger'},
        GetLanguageValue_fra: state => {state.languageValue = 'fra'},
        GetLanguageValue_esp: state => {state.languageValue = 'esp'},
        GetLanguageValue_ita: state => {state.languageValue = 'ita'},
        GetLanguageValue_por: state => {state.languageValue = 'por'},
        GetLanguageValue_tur: state => {state.languageValue = 'tur'},
        GetLanguageValue_rus: state => {state.languageValue = 'rus'},
        GetLanguageValue_jap: state => {state.languageValue = 'jap'},
        GetLanguageValue_chi: state => {state.languageValue = 'chi'}
    }
})

export const { GetLanguageValue_eng, GetLanguageValue_ger, GetLanguageValue_fra, GetLanguageValue_esp,
    GetLanguageValue_ita, GetLanguageValue_por, GetLanguageValue_tur,
    GetLanguageValue_rus, GetLanguageValue_jap, GetLanguageValue_chi } = languageValue.actions

export default languageValue.reducer
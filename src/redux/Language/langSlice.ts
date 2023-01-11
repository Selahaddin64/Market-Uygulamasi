/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable no-unneeded-ternary */
import { AnyAction } from '@reduxjs/toolkit';
import { SET_LANGUAGE, LangActions, LangState } from './language.types';

const localSorageLang = localStorage.getItem('language');

const initialState: LangState = {
  language: localSorageLang ? localSorageLang : 'EN',
};

const langReducer = (state = initialState, action: LangActions | AnyAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;

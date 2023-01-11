export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface LangState {
  language: string;
}

interface SetLanguageAction {
  payload: string;
  type: typeof SET_LANGUAGE;
}

export type LangActions = SetLanguageAction;

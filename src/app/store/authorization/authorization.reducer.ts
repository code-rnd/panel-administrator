import { Action, handleActions } from "redux-actions";

import {
  AuthorizationModel,
  AuthorizationStateModel,
} from "./authorization.model";
import { authorizationActions } from "./authorization.actions";

export const initialState: AuthorizationStateModel = {
  user: "",
  isLoading: false,
  date: {} as Date,
  error: "",
};

const setLaoding = (
  state: AuthorizationStateModel,
  action: Action<boolean>
): AuthorizationStateModel => ({
  ...state,
  isLoading: action.payload,
});

const setLogin = (
  state: AuthorizationStateModel,
  action: Action<AuthorizationModel>
): AuthorizationStateModel => ({
  ...state,
  user: action.payload.name,
  date: action.payload.date,
});

const reducerMap: { [key: string]: any } = {
  [authorizationActions.SET_LOADING]: setLaoding,
  [authorizationActions.SET_LOGIN]: setLogin,
};

export const authorizationReducer = handleActions(reducerMap, initialState);

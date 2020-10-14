import { Action, handleActions } from "redux-actions";

import { TreeviewMock } from "../../mock/mocks";
import { servicesActions } from "./services.actions";
import { ServicesModel } from "./services.model";

export const initialState: ServicesModel = {
  services: TreeviewMock,
  isLoading: false,
  error: "",
};

const setLaoding = (
  state: ServicesModel,
  action: Action<boolean>
): ServicesModel => ({
  ...state,
  isLoading: action.payload,
});

const setUpdateService = (
  state: ServicesModel,
  action: Action<any[]>
): ServicesModel => ({
  ...state,
  services: action.payload,
  isLoading: false,
});

const reducerMap: { [key: string]: any } = {
  [servicesActions.SET_LOADING]: setLaoding,
  [servicesActions.SET_UPDATE_SERVICE]: setUpdateService,
};

export const servicesReducer = handleActions(reducerMap, initialState);

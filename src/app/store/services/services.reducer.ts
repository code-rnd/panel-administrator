import { Action, handleActions } from "redux-actions";

import { TreeviewMock } from "../../shared/mocks/mocks";
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

const setAddFirstService = (
  state: ServicesModel,
  action: Action<any[]>
): ServicesModel => ({
  ...state,
  services: action.payload,
  isLoading: false,
});

const setAddService = (
  state: ServicesModel,
  action: Action<any[]>
): ServicesModel => ({
  ...state,
  services: action.payload,
  isLoading: false,
});

const setArchiveService = (
  state: ServicesModel,
  action: Action<any[]>
): ServicesModel => ({
  ...state,
  services: action.payload,
  isLoading: false,
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
  [servicesActions.SET_ADD_SERVICE]: setAddService,
  [servicesActions.SET_ADD_FIRST_SERVICE]: setAddFirstService,
  [servicesActions.SET_ARCHIVE_SERVICE]: setArchiveService,
};

export const servicesReducer = handleActions(reducerMap, initialState);

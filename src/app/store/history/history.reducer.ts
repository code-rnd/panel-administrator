import { Action, handleActions } from "redux-actions";

import { ACTION_HISTORY, HistoryModelState } from "./history.model";
import { historyActions } from "./history.actions";
import { prepareHistory } from "./history.utils";

export const initialState: HistoryModelState = {
  list: [],
  lastItem: {} as any,
  isLoading: false,
  error: "",
};

const setLaoding = (
  state: HistoryModelState,
  action: Action<boolean>
): HistoryModelState => ({
  ...state,
  isLoading: action.payload,
});

const setUpdateHistory = (
  state: HistoryModelState,
  action: Action<{ user: string; action: ACTION_HISTORY }>
): HistoryModelState => {
  const newList = prepareHistory(
    state.list,
    action.payload.user,
    action.payload.action
  );

  return {
    ...state,
    list: newList,
    lastItem: newList[newList.length - 1],
  };
};

const reducerMap: { [key: string]: any } = {
  [historyActions.SET_LOADING]: setLaoding,
  [historyActions.SET_UPDATE_HISTORY]: setUpdateHistory,
};

export const historyReducer = handleActions(reducerMap, initialState);

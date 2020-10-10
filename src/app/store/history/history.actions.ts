import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";
import { ACTION_HISTORY, ActionUpdateHistory } from "./history.model";

class HistoryActions {
  readonly prefix: string = "HISTORY";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_UPDATE_HISTORY: string = `${this.prefix}.SET_UPDATE_HISTORY`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );
  setUpdateHistory: ActionFunction1<
    ActionUpdateHistory,
    Action<ActionUpdateHistory>
  > = createAction(this.SET_UPDATE_HISTORY);

  updateHistory: any = (user: string, action: ACTION_HISTORY) => async (
    dispatch: Dispatch
  ) => {
    dispatch(this.setLoading(true));
    try {
      dispatch(this.setUpdateHistory({ user, action }));
      dispatch(this.setLoading(false));
    } catch (e) {
      console.log("Ошибка в методе updateHistory: ", e);
      dispatch(this.setLoading(false));
    }
  };
}

export const historyActions = new HistoryActions();

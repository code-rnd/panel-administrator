import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { TreeviewPropsModel } from "../../pages/Services/components/Treeview/model/Treeview.model";
import { historyActions } from "../history/history.actions";
import { ACTION_HISTORY } from "../history/history.model";
import { timerCount } from "../../shared/utils/service.util";

class ServicesActions {
  readonly prefix: string = "PRODUCTS";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_UPDATE_SERVICE: string = `${this.prefix}.SET_UPDATE_SERVICE`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );

  setUpdateService: ActionFunction1<
    TreeviewPropsModel[],
    Action<TreeviewPropsModel[]>
  > = createAction(this.SET_UPDATE_SERVICE);

  updateService = (
    services: TreeviewPropsModel[],
    user: string,
    actionHistory: ACTION_HISTORY
  ) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(this.setUpdateService(services));
        dispatch(historyActions.updateHistory(user, actionHistory));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateService: ", e);
      dispatch(this.setLoading(false));
    }
  };
}

export const servicesActions = new ServicesActions();

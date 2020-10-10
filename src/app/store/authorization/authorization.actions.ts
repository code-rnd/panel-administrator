import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { ACTION_LOGIN, AuthorizationModel } from "./authorization.model";
import { historyActions } from "../history/history.actions";
import { prepareAction, prepareUser } from "./authorization.utils";

class AuthorizationActions {
  readonly prefix: string = "AUTHORIZATION";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_LOGIN: string = `${this.prefix}.SET_LOGIN`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );
  setLogin: ActionFunction1<
    AuthorizationModel,
    Action<AuthorizationModel>
  > = createAction(this.SET_LOGIN);

  updateLogin: any = (name: string, action: ACTION_LOGIN) => async (
    dispatch: Dispatch
  ) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(
          this.setLogin({
            name: prepareUser(name, action),
            date: new Date(),
            action,
          })
        );
        dispatch(historyActions.updateHistory(name, prepareAction(action)));
        dispatch(this.setLoading(false));
      }, 1500);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateLogin: ", e);
      dispatch(this.setLoading(false));
    }
  };
}

export const authorizationActions = new AuthorizationActions();

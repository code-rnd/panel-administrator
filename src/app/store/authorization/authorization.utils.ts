import { ACTION_LOGIN } from "./authorization.model";
import { ACTION_HISTORY } from "../history/history.model";

export const prepareAction = (action: ACTION_LOGIN) => {
  return action === ACTION_LOGIN.LOGIN
    ? ACTION_HISTORY.LOGIN
    : ACTION_HISTORY.LOGIN_OUT;
};

export const prepareUser = (user: string, action: ACTION_LOGIN) => {
  return action === ACTION_LOGIN.LOGIN ? user : "";
};

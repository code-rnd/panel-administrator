export interface AuthorizationModel {
  name: string;
  date: Date;
  action: ACTION_LOGIN;
}

export interface AuthorizationStateModel {
  user: string;
  date: Date;
  isLoading: boolean;
  error: "";
}

export enum ACTION_LOGIN {
  LOGIN = "LOGIN",
  LOGIN_OUT = "LOGIN_OUT",
}

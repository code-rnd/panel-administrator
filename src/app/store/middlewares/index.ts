import { Action, Dispatch, Middleware, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Thunk function
export const actionFn: Middleware = ({ dispatch, getState }) => (
  next: Dispatch
) => (action: Function | Action) => {
  return action instanceof Function ? action(dispatch, getState) : next(action);
};

export const middlewares = composeWithDevTools(applyMiddleware(actionFn));

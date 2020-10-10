import { Action, handleActions } from "redux-actions";
import { RouteUrls } from "../../routing/routing.enums";
import { RouteStateModel } from "./route.model";
import { routeActions } from "./route.actions";

const initialState: RouteStateModel = {
  route: RouteUrls.HOME,
};

const setCurrentRoute = (
  state: RouteStateModel,
  action: Action<RouteUrls>
): RouteStateModel => ({
  ...state,
  route: action.payload,
});

const reducerMap: { [key: string]: any } = {
  [routeActions.SET_CURRENT_ROUTE]: setCurrentRoute,
};

export const routeReducer = handleActions(reducerMap, initialState);

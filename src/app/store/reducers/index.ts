import { combineReducers } from "redux";

import { servicesReducer as servies } from "../services";
import { historyReducer as history } from "../history";
import { authorizationReducer as authorization } from "../authorization";
import { routeReducer as route } from "../route";

export const reducers = combineReducers({
  servies,
  history,
  authorization,
  route,
});

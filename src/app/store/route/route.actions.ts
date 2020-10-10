import { Action, ActionFunction1, createAction } from "redux-actions";

class Route {
  readonly prefix: string = "ROUTE";
  readonly SET_CURRENT_ROUTE: string = "SET_CURRENT_ROUTE";

  setCurrentRoute: ActionFunction1<string, Action<string>> = createAction(
    this.SET_CURRENT_ROUTE
  );
}

export const routeActions = new Route();

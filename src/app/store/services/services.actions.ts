import { Action, ActionFunction1, createAction } from "redux-actions";
import { Dispatch } from "redux";

import { TreeviewPropsModel } from "../../pages/Services/components/Treeview/model/Treeview.model";
import {
  prepareAddFirstItem,
  prepareAddItem,
  prepareUpdateItem,
} from "./services.utils";
import { historyActions } from "../history/history.actions";
import { ACTION_HISTORY } from "../history/history.model";
import { timerCount } from "../../shared/utils/service.util";

class ServicesActions {
  readonly prefix: string = "PRODUCTS";
  readonly SET_LOADING: string = `${this.prefix}.SET_LOADING`;
  readonly SET_UPDATE_SERVICE: string = `${this.prefix}.SET_UPDATE_SERVICE`;
  readonly SET_ADD_SERVICE: string = `${this.prefix}.SET_ADD_SERVICE`;
  readonly SET_ADD_FIRST_SERVICE: string = `${this.prefix}.SET_ADD_FIRST_SERVICE`;
  readonly SET_ARCHIVE_SERVICE: string = `${this.prefix}.SET_ARCHIVE_SERVICE`;

  setLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_LOADING
  );

  setUpdateService: ActionFunction1<
    TreeviewPropsModel[],
    Action<TreeviewPropsModel[]>
  > = createAction(this.SET_UPDATE_SERVICE);
  setAddService: ActionFunction1<
    TreeviewPropsModel[],
    Action<TreeviewPropsModel[]>
  > = createAction(this.SET_ADD_SERVICE);
  setAddFirstService: ActionFunction1<
    TreeviewPropsModel[],
    Action<TreeviewPropsModel[]>
  > = createAction(this.SET_ADD_FIRST_SERVICE);
  setArchiveService: ActionFunction1<
    TreeviewPropsModel[],
    Action<TreeviewPropsModel[]>
  > = createAction(this.SET_ARCHIVE_SERVICE);

  updateService = (
    services: TreeviewPropsModel[],
    service: TreeviewPropsModel,
    upd: { name: string; isArchive: boolean },
    user: string
  ) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        const list = prepareUpdateItem(services, service, upd);
        dispatch(this.setUpdateService(list));
        dispatch(historyActions.updateHistory(user, ACTION_HISTORY.EDIT));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе updateService: ", e);
      dispatch(this.setLoading(false));
    }
  };

  addFirstService: any = (
    services: TreeviewPropsModel[],
    service: TreeviewPropsModel,
    user: string
  ) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        const list = prepareAddFirstItem(services, service);
        dispatch(this.setAddFirstService(list));
        dispatch(historyActions.updateHistory(user, ACTION_HISTORY.ADD));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе addService: ", e);
      dispatch(this.setLoading(false));
    }
  };

  addService: any = (
    services: TreeviewPropsModel[],
    service: TreeviewPropsModel,
    upd: {
      name: string;
    },
    user: string
  ) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        const list = prepareAddItem(services, service, upd);
        dispatch(this.setAddService(list));
        dispatch(historyActions.updateHistory(user, ACTION_HISTORY.ADD));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе addService: ", e);
      dispatch(this.setLoading(false));
    }
  };

  archiveService = (
    services: TreeviewPropsModel[],
    item: TreeviewPropsModel,
    isArchive: boolean,
    user: string
  ) => async (dispatch: Dispatch) => {
    dispatch(this.setLoading(true));
    try {
      const timer = setTimeout(() => {
        dispatch(
          this.setArchiveService(
            prepareUpdateItem(services, item, {
              isArchive,
            })
          )
        );
        dispatch(historyActions.updateHistory(user, ACTION_HISTORY.ARCHIVE));
        dispatch(this.setLoading(false));
      }, timerCount);
      return timer;
    } catch (e) {
      console.log("Ошибка в методе archiveService: ", e);
      dispatch(this.setLoading(false));
    }
  };
}

export const servicesActions = new ServicesActions();

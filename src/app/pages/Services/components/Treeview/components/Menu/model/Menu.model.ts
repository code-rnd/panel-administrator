import { TreeviewPropsModel } from "../../../model/Treeview.model";

export enum EDIT_MODE {
  EDIT = "EDIT",
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export interface MenuModel {
  item: TreeviewPropsModel;
}

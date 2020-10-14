import { TreeviewPropsModel } from "../../../model/Treeview.model";

export enum EDIT_MODE {
  EDIT = "EDIT",
  ADD = "ADD",
  ARCHIVE = "ARCHIVE",
}

export interface MenuModel {
  item: TreeviewPropsModel;
}

import { TreeviewPropsModel } from "../../Treeview/model/Treeview.model";

export enum EDIT_FORM_MODE {
  EDIT = "EDIT",
  ADD = "ADD",
}

export interface EditFormModel {
  register: any;
  initialValues?: TreeviewPropsModel;
  errors: any;
}

import { EDIT_MODE } from "../../Treeview/components/Menu/model/Menu.model";
import { ACTION_HISTORY } from "../../../../../store/history/history.model";
import { TreeviewPropsModel } from "../../Treeview/model/Treeview.model";

export interface ServicesModalModel {
  initialValues?: TreeviewPropsModel;
  close: any;
  mode: EDIT_MODE;
  title: ACTION_HISTORY;
}

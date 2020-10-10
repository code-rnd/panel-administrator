import { TreeviewPropsModel } from "../../../model/Treeview.model";

export interface ParentModel {
  item: TreeviewPropsModel;
  isOpen: boolean;
  handleOpen: () => void;
}

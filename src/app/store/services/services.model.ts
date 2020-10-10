import { TreeviewPropsModel } from "../../pages/Services/components/Treeview/model/Treeview.model";

export interface ServicesModel {
  services: TreeviewPropsModel[];
  isLoading: boolean;
  error: string;
}

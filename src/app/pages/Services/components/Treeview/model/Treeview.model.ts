export interface TreeviewPropsModel {
  id: number;
  name: string;
  level: number;
  childrenItems?: TreeviewPropsModel[];
  isArchive: boolean;
}

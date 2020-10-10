import { TreeviewPropsModel } from "../model/Treeview.model";

export const itemStyled = (
  item: TreeviewPropsModel,
  count: number,
  x: number = 0
) => {
  const { level } = item;

  let padding = {};
  let opacity = {};

  if (level !== 1) {
    padding = {
      paddingLeft: `${level * count + x}px`,
    };
  }

  return {
    ...padding,
    ...opacity,
  };
};

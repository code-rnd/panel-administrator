import React, { FC, memo, useMemo } from "react";
import cn from "classnames";

import { itemStyled } from "../../utils/itemStyled.util";
import { ChildrenModel } from "./model/Children.model";
import { Menu } from "../Menu";

export const ChildrenItem: FC<ChildrenModel> = memo(({ item }) => {
  const styled = useMemo(() => itemStyled(item, 15, 20), [item]);

  return (
    <div
      className={cn(["childrenItem item", { item__archive: item.isArchive }])}
      style={styled}
    >
      <div className="item-title">{item.name}</div>
      <Menu item={item} />
    </div>
  );
});

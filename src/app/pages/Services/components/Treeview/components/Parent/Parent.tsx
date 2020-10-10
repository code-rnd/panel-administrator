import React, { FC, memo, useMemo } from "react";
import cn from "classnames";

import { itemStyled } from "../../utils/itemStyled.util";
import { ParentModel } from "./model/Parent.model";
import { Menu } from "../Menu";

export const ParentItem: FC<ParentModel> = memo(
  ({ item, isOpen, handleOpen }) => {
    const styled = useMemo(() => itemStyled(item, 15), [item]);

    return (
      <div
        className={cn([
          "parentItem item",
          { item__open: isOpen, item__archive: item.isArchive },
        ])}
        style={styled}
      >
        <div className="item-title" onClick={handleOpen}>
          <div className="item-icon" />
          {item.name}
        </div>
        <Menu item={item} />
      </div>
    );
  }
);

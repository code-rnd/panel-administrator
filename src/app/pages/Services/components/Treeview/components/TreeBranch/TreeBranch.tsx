import React, { FC, memo, useCallback, useEffect, useState } from "react";

import { TreeBranchModel } from "./model/TreeBranch.model";
import { ChildrenItem } from "../Children";
import { ParentItem } from "../Parent";

export const TreeBranch: FC<TreeBranchModel> = memo(
  ({ item, isLast, children }) => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
      setOpen(!isOpen);
    }, [isOpen]);

    useEffect(() => {
      if (item.isArchive) {
        setOpen(false);
      }
    }, [item]);

    return (
      <>
        {!isLast && (
          <ParentItem item={item} isOpen={isOpen} handleOpen={handleOpen} />
        )}
        {isLast && <ChildrenItem item={item} />}
        {isOpen && children}
      </>
    );
  }
);

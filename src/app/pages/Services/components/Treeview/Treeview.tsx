import React, { FC } from "react";

import { TreeviewPropsModel } from "./model/Treeview.model";
import { ChildrenItem } from "./components/Children";
import { TreeBranch } from "./components/TreeBranch";

import "./Treeview.scss";

export const Treeview: FC<{ items: TreeviewPropsModel[] }> = ({ items }) => {
  return (
    <div className="treeview">
      {items.map((item) => {
        const isLast = !item?.childrenItems?.length;

        return (
          <TreeBranch item={item} isLast={isLast} key={item.id}>
            {isLast && <ChildrenItem item={item} />}
            {!isLast && item?.childrenItems && (
              <Treeview items={item.childrenItems} />
            )}
          </TreeBranch>
        );
      })}
    </div>
  );
};

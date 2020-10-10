import React, { FC, memo } from "react";
import cn from "classnames";

import { BodyModel } from "./model/Body.model";

import "./Body.scss";

export const Body: FC<BodyModel> = memo(({ isLoading, children }) => {
  return (
    <div className="page-body">
      <div className={cn({ "page-body-loader": isLoading })}>{children}</div>
    </div>
  );
});

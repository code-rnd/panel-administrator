import React, { FC } from "react";

import "./Loading.scss";

export const Loading: FC = () => {
  return (
    <div className="loading">
      <div className="spinner" />
    </div>
  );
};

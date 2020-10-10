import React, { FC } from "react";

import { HeadingpageModel } from "./model/Headingpage.model";
import { Button } from "../Button";

import "./HeadingPage.scss";

export const HeadingPage: FC<HeadingpageModel> = ({
  title,
  btAction,
  btTitle,
  btType,
  isLoading,
}) => {
  return (
    <div className="menu heading-page">
      <div className="heading-page-title">{title}</div>
      <Button
        type={btType}
        onClick={btAction}
        loading={isLoading}
        title={btTitle}
      />
    </div>
  );
};

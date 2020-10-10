import React, { FC, memo } from "react";
import cn from "classnames";

import { BUTTON_TYPE, ButtonPropsModel } from "./model/ButtonProps.model";

import "./Button.scss";

export const Button: FC<ButtonPropsModel> = memo(
  ({ onClick, title, type, className, disable, visible, loading, style }) => {
    return (
      <>
        <div
          className={cn([
            "button",
            className,
            { button__success: type === BUTTON_TYPE.SUCCESS },
            { button__default: type === BUTTON_TYPE.DEFAULT },
            { button__error: type === BUTTON_TYPE.ERROR },
            { button__disabled: disable },
            { button__visible: visible },
            { button__loading: loading },
          ])}
          onClick={onClick}
          style={style}
        >
          {title}
          {loading && <div className="spinner" />}
        </div>
      </>
    );
  }
);

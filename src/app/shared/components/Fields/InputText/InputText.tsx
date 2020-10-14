import React, { FC, memo } from "react";
import cn from "classnames";

import { FieldTextModel } from "./model/FieldText.model";

import "./InputText.scss";

export const FieldText: FC<FieldTextModel> = memo(
  ({ title, name, placeholder, disable, register, errors, ...props }) => {
    return (
      <div className={cn(["fieldText", { fieldText__disable: disable }])}>
        <label>{title}</label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          ref={register({
            required: "Required",
          })}
          {...props}
        />
        <label
          className={cn([
            "fieldText__errors",
            { fieldText__visible: errors?.[name] },
          ])}
        >
          {title}*
        </label>
      </div>
    );
  }
);

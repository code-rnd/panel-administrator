import React, { FC, memo } from "react";
import cn from "classnames";

import "./InputText.scss";

export const FieldText: FC<{
  title: string;
  name: string;
  placeholder?: string;
  disable?: boolean;
  register: any;
  errors?: any;
}> = memo(
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

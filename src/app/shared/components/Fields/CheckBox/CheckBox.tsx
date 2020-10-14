import React, { FC, memo } from "react";

import { FieldCheckBoxModel } from "./model/FieldCheckBox.model";

import "./CheckBox.scss";

export const FieldCheckBox: FC<FieldCheckBoxModel> = memo(
  ({ name, title, register, ...props }) => {
    return (
      <div className="fieldCheckBox">
        <label>{`${title}: `} </label>
        <input type="checkbox" name={name} ref={register({})} {...props} />
      </div>
    );
  }
);

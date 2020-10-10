import React, { FC, memo } from "react";

import { FieldCheckBox } from "../../../../shared/components/Fields/CheckBox";
import { FieldText } from "../../../../shared/components/Fields/InputText";
import { EditFormModel } from "./model/EditForm.model";

import "./EditForm.scss";

export const EditForm: FC<EditFormModel> = memo(({ register, errors }) => {
  return (
    <div className="edit-form">
      <FieldText
        name="name"
        title="Название"
        register={register}
        errors={errors}
      />
      <FieldCheckBox name="isArchive" title="В архив" register={register} />
    </div>
  );
});

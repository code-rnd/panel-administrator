import React, { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  prepareAddItem,
  prepareUpdateItem,
} from "../../../../store/services/services.utils";
import { getServices, servicesActions } from "../../../../store/services";
import { EDIT_MODE } from "../Treeview/components/Menu/model/Menu.model";
import { TreeviewPropsModel } from "../Treeview/model/Treeview.model";
import { getAuthorization } from "../../../../store/authorization";
import { Modal } from "../../../../shared/components/Modal";
import { EditForm } from "../EditForm";
import { ServicesModalModel } from "./modal/ServicesModal.model";

export const ServicesModal: FC<ServicesModalModel> = ({
  title,
  mode,
  initialValues,
  close,
}) => {
  const { services } = useSelector(getServices);
  const { user } = useSelector(getAuthorization);

  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      ...initialValues,
    },
  });

  const onSubmit = (values: any) => {
    const prepareItem: TreeviewPropsModel = {
      ...initialValues,
      ...values,
    };

    let prepareList = [];

    switch (mode) {
      case EDIT_MODE.ADD:
        prepareList = prepareAddItem(services, prepareItem);
        dispatch(servicesActions.updateService(prepareList, user, title));
        return;

      case EDIT_MODE.EDIT:
        prepareList = prepareUpdateItem(services, prepareItem);
        dispatch(servicesActions.updateService(prepareList, user, title));
        return;

      case EDIT_MODE.ARCHIVE:
        prepareList = prepareUpdateItem(services, {
          ...prepareItem,
          isArchive: !prepareItem.isArchive,
        });
        dispatch(servicesActions.updateService(prepareList, user, title));
        return;
    }
  };

  const modalContent = useMemo(
    () =>
      mode === EDIT_MODE.ARCHIVE ? (
        `Услуга: "${initialValues?.name}"`
      ) : (
        <EditForm register={register} errors={errors} />
      ),

    [mode, initialValues, register, errors]
  );

  return (
    <Modal
      title={title}
      cbCancel={close}
      cancelTitle={"Отмена"}
      cbOk={handleSubmit(onSubmit)}
      okTitle={"Сохранить"}
      modalClosed={close}
    >
      {modalContent}
    </Modal>
  );
};

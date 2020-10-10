import React, { FC, memo, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { BUTTON_TYPE } from "../../../../../../shared/components/Button/model/ButtonProps.model";
import { getAuthorization } from "../../../../../../store/authorization/authorization.selectors";
import { servicesActions } from "../../../../../../store/services/services.actions";
import { getServices } from "../../../../../../store/services/services.selectors";
import { Modal } from "../../../../../../shared/components/Modal";
import { Button } from "../../../../../../shared/components/Button";
import { MenuModel } from "./model/Menu.model";
import { EditForm } from "../../../EditForm";

import "./Menu.scss";

export const Menu: FC<MenuModel> = memo(({ item }) => {
  const { services } = useSelector(getServices);
  const { user } = useSelector(getAuthorization);

  const dispatch = useDispatch();
  const { isArchive } = item;

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      ...item,
    },
  });

  const onSubmit = useCallback(
    (values: any, cbAction: any, cbModalClosed: any) => {
      dispatch(cbAction(services, item, values, user));
      cbModalClosed(false);
    },
    [dispatch, services, item, user]
  );

  const [isEditShow, setEditShow] = useState(false);
  const [isAddShow, setAddShow] = useState(false);
  const [isRemoveShow, setRemoveShow] = useState(false);

  const archiveButtonTitle = useMemo(
    () => (isArchive ? "Восстановить" : "Архивировать"),
    [isArchive]
  );

  return (
    <>
      <div className="menu">
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => {
            setEditShow(true);
          }}
          title="Редактировать"
          visible={isArchive}
        />
        <Button
          type={BUTTON_TYPE.SUCCESS}
          onClick={() => {
            setAddShow(true);
          }}
          title="Добавить"
          visible={isArchive}
        />
        <Button
          type={BUTTON_TYPE.ERROR}
          onClick={() => {
            setRemoveShow(true);
          }}
          title={archiveButtonTitle}
        />
      </div>
      {isAddShow && (
        <Modal
          modalClosed={() => setAddShow(false)}
          title="Добавление нового элемента"
          cbCancel={() => setAddShow(false)}
          cancelTitle="Отмена"
          cbOk={handleSubmit((event) =>
            onSubmit(event, servicesActions.addService, setAddShow)
          )}
          okTitle="Добавить"
        >
          <EditForm register={register} errors={errors} />
        </Modal>
      )}
      {isEditShow && (
        <Modal
          modalClosed={() => setEditShow(false)}
          title="Редактирование элемента"
          cbCancel={() => setEditShow(false)}
          cancelTitle="Отмена"
          cbOk={handleSubmit((event) =>
            onSubmit(event, servicesActions.updateService, setEditShow)
          )}
          okTitle="Сохранить"
        >
          <EditForm register={register} errors={errors} />
        </Modal>
      )}
      {isRemoveShow && (
        <Modal
          modalClosed={() => setRemoveShow(false)}
          title={archiveButtonTitle}
          cbCancel={() => setRemoveShow(false)}
          cancelTitle="Отмена"
          cbOk={() => {
            dispatch(
              servicesActions.archiveService(services, item, !isArchive, user)
            );
            setRemoveShow(false);
          }}
          okTitle="Ок"
        >
          Услуга: {item.name}
        </Modal>
      )}
    </>
  );
});

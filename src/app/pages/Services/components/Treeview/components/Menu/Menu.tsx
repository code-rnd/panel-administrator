import React, { FC, memo, useMemo, useState } from "react";

import { ACTION_HISTORY } from "../../../../../../store/history/history.model";
import { EDIT_MODE, MenuModel } from "./model/Menu.model";
import { ServicesModal } from "../../../ServicesModal";

import "./Menu.scss";
import { Button } from "../../../../../../shared/components/Button";
import { BUTTON_TYPE } from "../../../../../../shared/components/Button/model/ButtonProps.model";

export const Menu: FC<MenuModel> = memo(({ item }) => {
  const { isArchive } = item;

  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isModalMode, setModalMode] = useState<EDIT_MODE>(EDIT_MODE.EDIT);
  const [isModalTitleMode, setModalTitleMode] = useState<ACTION_HISTORY>(
    ACTION_HISTORY.EDIT
  );

  const archiveButtonTitle = useMemo(
    () => (isArchive ? "Восстановить" : "Архивировать"),
    [isArchive]
  );

  const handleOpenModal = (editMode: EDIT_MODE, titleMode: ACTION_HISTORY) => {
    setModalMode(editMode);
    setModalTitleMode(titleMode);
    setIsModalShow(true);
  };

  return (
    <>
      <div className="menu">
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => handleOpenModal(EDIT_MODE.EDIT, ACTION_HISTORY.EDIT)}
          title="Редактировать"
          visible={isArchive}
        />
        <Button
          type={BUTTON_TYPE.SUCCESS}
          onClick={() => handleOpenModal(EDIT_MODE.ADD, ACTION_HISTORY.ADD)}
          title="Добавить"
          visible={isArchive}
        />
        <Button
          type={BUTTON_TYPE.ERROR}
          onClick={() =>
            handleOpenModal(EDIT_MODE.ARCHIVE, ACTION_HISTORY.ARCHIVE)
          }
          title={archiveButtonTitle}
        />
      </div>
      {isModalShow && (
        <ServicesModal
          title={isModalTitleMode}
          initialValues={item}
          close={() => setIsModalShow(false)}
          mode={isModalMode}
        />
      )}
    </>
  );
});

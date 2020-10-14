import React, { FC, memo, useState } from "react";
import { useSelector } from "react-redux";

import { EDIT_MODE } from "./components/Treeview/components/Menu/model/Menu.model";
import { getServices } from "../../store/services/services.selectors";
import { ACTION_HISTORY } from "../../store/history/history.model";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { ServicesModal } from "./components/ServicesModal";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";
import { Treeview } from "./components/Treeview";
import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";

export const Services: FC = memo(() => {
  const { services, isLoading } = useSelector(getServices);

  const [isModalShow, setModalShow] = useState(false);

  return (
    <>
      <Body isLoading={isLoading}>
        <HeadingPage
          title={Page.SERVICES}
          btAction={() => setModalShow(true)}
          btTitle="Добавить услугу"
          btType={BUTTON_TYPE.SUCCESS}
        />
        <Treeview items={services} />
      </Body>

      {isModalShow && (
        <ServicesModal
          close={() => setModalShow(false)}
          mode={EDIT_MODE.ADD}
          title={ACTION_HISTORY.ADD}
        />
      )}
    </>
  );
});

import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ACTION_LOGIN } from "../../store/authorization/authorization.model";
import { Body } from "../../shared/components/Body";
import {
  authorizationActions,
  getAuthorization,
} from "../../store/authorization";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";

export const Home: FC = () => {
  const { user, isLoading } = useSelector(getAuthorization);
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(authorizationActions.updateLogin(user, ACTION_LOGIN.LOGIN_OUT));
  }, [dispatch, user]);

  return (
    <Body>
      <HeadingPage
        title="Главная"
        btAction={handleLogOut}
        btTitle="Выход"
        btType={BUTTON_TYPE.ERROR}
        isLoading={isLoading}
      />
      <ul>
        <li>Редактирование списка услуг</li>
        <li>Просмотр истории действий пользователей</li>
      </ul>
    </Body>
  );
};

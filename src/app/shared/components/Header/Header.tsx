import React, { FC, memo, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { getAuthorization } from "../../../store/authorization/authorization.selectors";
import { Page, RouteUrls } from "../../../routing/routing.enums";
import { BUTTON_TYPE } from "../Button/model/ButtonProps.model";
import { getRoute } from "../../../store/route/route.selector";
import { routeActions } from "../../../store/route";
import { Button } from "../Button";

import "./Header.scss";

export const Header: FC = memo(() => {
  const { user } = useSelector(getAuthorization);
  const { route } = useSelector(getRoute);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (url: RouteUrls) => {
      dispatch(routeActions.setCurrentRoute(url as RouteUrls));
    },
    [dispatch]
  );

  useEffect(() => {
    history.push(route);
  }, [history, route]);

  return (
    <div className="page-header">
      <div className="page-header-title">
        Пользователь: <strong>{user}</strong>
      </div>
      <div className="page-header-navbar">
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => handleClick(RouteUrls.HOME)}
          title={Page.HOME}
          className={cn([{ button__active: route === RouteUrls.HOME }])}
        />
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => handleClick(RouteUrls.SERVICES)}
          title={Page.SERVICES}
          className={cn([{ button__active: route === RouteUrls.SERVICES }])}
        />
        <Button
          type={BUTTON_TYPE.DEFAULT}
          onClick={() => handleClick(RouteUrls.HISTORY)}
          title={Page.HISTORY}
          className={cn([{ button__active: route === RouteUrls.HISTORY }])}
        />
      </div>
    </div>
  );
});

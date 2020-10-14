import React, { memo, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { getAuthorization } from "../store/authorization/authorization.selectors";
import { Notification } from "../shared/components/Notification";
import { Authorization } from "../pages/Authorization";
import { NotFound } from "../pages/NotFound/NotFound";
import { Header } from "../shared/components/Header";
import { getHistory } from "../store/history";
import { Routes } from "./routing.const";
import { Home } from "../pages/Home";

export const Routing = memo(() => {
  const { user } = useSelector(getAuthorization);
  const { lastItem } = useSelector(getHistory);

  const contentRoute = useMemo(() => {
    if (!!user) {
      return (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {Routes.map((route, key) => {
              const { path, component, exact } = route;
              return (
                <Route
                  exact={exact}
                  path={path}
                  component={component}
                  key={key}
                />
              );
            })}
            <NotFound />
          </Switch>
          <Notification action={lastItem} title="история" />
        </>
      );
    }

    return (
      <Switch>
        <Route component={Authorization} />
      </Switch>
    );
  }, [user, lastItem]);

  return <>{contentRoute}</>;
});

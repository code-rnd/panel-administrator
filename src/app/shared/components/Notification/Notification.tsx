import React, { FC, memo, useMemo } from "react";
import cn from "classnames";

import { ACTION_HISTORY } from "../../../store/history/history.model";
import { NotificationModel } from "./model/Notification.model";

import "./Notification.scss";

export const Notification: FC<NotificationModel> = memo(({ action }) => {
  const classes = useMemo(() => {
    return cn([
      "notification",
      {
        notification__success:
          action.action === ACTION_HISTORY.EDIT ||
          action.action === ACTION_HISTORY.LOGIN ||
          action.action === ACTION_HISTORY.LOGIN_OUT ||
          action.action === ACTION_HISTORY.ADD,
      },
      { notification__warning: action.action === ACTION_HISTORY.ARCHIVE },
    ]);
  }, [action]);

  return <div className={classes}>истоирия: {action.action}</div>;
});

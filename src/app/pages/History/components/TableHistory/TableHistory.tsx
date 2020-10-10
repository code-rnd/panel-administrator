import React, { FC, memo } from "react";
import moment from "moment";

import { HistoryItemModel } from "../../../../store/history/history.model";
import { DATE_FORMAT } from "../../../../shared/constants";

import "./TableHistory.scss";

export const TableHistory: FC<{ list: HistoryItemModel[] }> = memo(
  ({ list }) => {
    return (
      <div className="tableHistory">
        <div className="tableHistory-row tableHistory-row__header">
          <div className="tableHistory-col">Пользователь</div>
          <div className="tableHistory-col">Дата действия</div>
          <div className="tableHistory-col">Действие</div>
        </div>
        {list.map(({ user, date, action }, key) => (
          <div className="tableHistory-row" key={key}>
            <div className="tableHistory-col">{user}</div>
            <div className="tableHistory-col">
              {moment(date).format(DATE_FORMAT.DB)}
            </div>
            <div className="tableHistory-col">{action}</div>
          </div>
        ))}
      </div>
    );
  }
);

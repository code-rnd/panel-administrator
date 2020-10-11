import { HistoryItemModel } from "../../../../store/history/history.model";

export interface NotificationModel {
  action: HistoryItemModel;
  title: string;
}

export enum NOTIFICATION_TYPE {
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

import { ACTION_HISTORY, HistoryItemModel } from "./history.model";

export const prepareHistory = (
  list: HistoryItemModel[],
  user: string,
  action: ACTION_HISTORY
): HistoryItemModel[] => {
  const lastId = list.length;

  return [
    ...list,
    { user, action, date: new Date(), id: !!lastId ? lastId + 1 : 1 },
  ];
};

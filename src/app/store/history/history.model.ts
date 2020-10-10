export enum ACTION_HISTORY {
  EDIT = "Редактирование услуги",
  ADD = "Добавление услуги",
  ARCHIVE = "Архивирование услуги",
  LOGIN = "Вход в сервис",
  LOGIN_OUT = "Выход из сервиса",
}

export interface HistoryModelState {
  list: HistoryItemModel[];
  lastItem: HistoryItemModel;
  isLoading: boolean;
  error: string;
}

export interface HistoryItemModel {
  user: string;
  date: Date;
  action: ACTION_HISTORY;
  id: number;
}

export interface ActionUpdateHistory {
  user: string;
  action: ACTION_HISTORY;
}

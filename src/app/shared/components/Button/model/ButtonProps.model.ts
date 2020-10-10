export interface ButtonPropsModel {
  type: BUTTON_TYPE;
  onClick: () => void;
  disable?: boolean;
  visible?: boolean;
  title: string;
  loading?: boolean;
  className?: string;
  style?: any;
}

export enum BUTTON_TYPE {
  DEFAULT = "DEFAULT",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

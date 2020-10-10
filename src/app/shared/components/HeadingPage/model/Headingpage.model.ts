import { BUTTON_TYPE } from "../../Button/model/ButtonProps.model";

export interface HeadingpageModel {
  title: string;
  btAction: any;
  btTitle: string;
  btType: BUTTON_TYPE;
  isLoading?: boolean;
}

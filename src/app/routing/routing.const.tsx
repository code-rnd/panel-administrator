import React, { ComponentType } from "react";

import { RouteUrls } from "./routing.enums";
import { History } from "../pages/History";
import { Services } from "../pages/Services";

export interface RouteModel {
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
}

export const Routes: RouteModel[] = [
  {
    component: () => <History />,
    path: `${RouteUrls.HISTORY}`,
    exact: false,
  },
  {
    component: () => <Services />,
    path: `${RouteUrls.SERVICES}`,
    exact: false,
  },
];

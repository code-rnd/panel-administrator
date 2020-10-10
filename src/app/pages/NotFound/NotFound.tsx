import React, { FC, memo } from "react";

import { Header } from "../../shared/components/Header";
import { Body } from "../../shared/components/Body";

export const NotFound: FC = memo(() => {
  return (
    <>
      <Header />
      <Body>404 Not found</Body>
    </>
  );
});

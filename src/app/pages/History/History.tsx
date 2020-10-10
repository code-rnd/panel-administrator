import React, { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { getHistory } from "../../store/history/history.selectors";
import { TableHistory } from "./components/TableHistory";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";

export const History: FC = memo(() => {
  const { list } = useSelector(getHistory);
  const [isShowTable, setShowTable] = useState(false);
  const buttonTitle = useMemo(
    () => (isShowTable ? "Свернуть историю" : "Показать историю"),
    [isShowTable]
  );

  const handleClick = () => {
    setShowTable(!isShowTable);
  };

  return (
    <Body>
      <HeadingPage
        title={Page.HISTORY}
        btAction={handleClick}
        btTitle={buttonTitle}
        btType={BUTTON_TYPE.DEFAULT}
      />
      {isShowTable && <TableHistory list={list} />}
    </Body>
  );
});

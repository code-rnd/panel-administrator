import React, { FC, memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { BUTTON_TYPE } from "../../shared/components/Button/model/ButtonProps.model";
import { getServices } from "../../store/services/services.selectors";
import { HeadingPage } from "../../shared/components/HeadingPage";
import { initialItem } from "../../shared/utils/service.util";
import { getAuthorization } from "../../store/authorization";
import { servicesActions } from "../../store/services";
import { Modal } from "../../shared/components/Modal";
import { Body } from "../../shared/components/Body";
import { Page } from "../../routing/routing.enums";
import { EditForm } from "./components/EditForm";
import { Treeview } from "./components/Treeview";

export const Services: FC = memo(() => {
  const { services, isLoading } = useSelector(getServices);
  const { user } = useSelector(getAuthorization);
  const dispatch = useDispatch();

  const [isAddShow, setAddShow] = useState(false);

  const handleAdd = useCallback(() => {
    setAddShow(true);
  }, []);

  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      ...initialItem,
    },
  });

  const onSubmit = useCallback(
    (values: any) => {
      dispatch(
        servicesActions.addFirstService(
          services,
          {
            ...initialItem,
            ...values,
          },
          user
        )
      );
      setAddShow(false);
    },
    [dispatch, services, user]
  );

  return (
    <>
      <Body isLoading={isLoading}>
        <HeadingPage
          title={Page.SERVICES}
          btAction={handleAdd}
          btTitle={"Добавить услугу"}
          btType={BUTTON_TYPE.SUCCESS}
        />
        <Treeview items={services} />
      </Body>

      {isAddShow && (
        <Modal
          modalClosed={() => setAddShow(false)}
          title="Добавление нового элемента"
          cbCancel={() => setAddShow(false)}
          cancelTitle="Отмена"
          cbOk={handleSubmit(onSubmit)}
          okTitle="Добавить"
        >
          <EditForm register={register} errors={errors} />
        </Modal>
      )}
    </>
  );
});

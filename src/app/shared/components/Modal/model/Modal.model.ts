export interface ModalModel {
  modalClosed: () => void;
  title: string;
  cbCancel: () => void;
  cancelTitle: string;
  cbOk: () => void;
  okTitle: string;
  backDrop?: boolean;
}

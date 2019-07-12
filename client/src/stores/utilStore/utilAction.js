import { ON_MODAL_CLOSE, ON_MODAL_OPEN, ALERT_MODAL } from '../enums';

export const showErrorMessage = e => {
  const errorMessage = 'Something went wrong';
  return {
    type: ON_MODAL_OPEN,
    modalInfo: {
      open: true,
      title: 'Alert!',
      type: ALERT_MODAL,
      message: errorMessage,
      onConfirm: false
    }
  };
};

export const onModalOpen = modalInfo => dispatch =>
  dispatch({
    type: ON_MODAL_OPEN,
    modalInfo: {
      open: true,
      type: ALERT_MODAL,
      ...modalInfo
    }
  });

export const onCloseModal = () => dispatch =>
  dispatch({
    type: ON_MODAL_CLOSE
  });

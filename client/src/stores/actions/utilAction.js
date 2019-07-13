import { ON_MODAL_CLOSE, ON_MODAL_OPEN, ALERT_MODAL } from '../enums';

export const showErrorMessage = e => {
  const errorMessage = e.response
    ? e.response.data.error.message
    : 'Opps! Something went wrong..';
  return {
    type: ON_MODAL_OPEN,
    modalInfo: {
      open: true,
      title: 'Alert!',
      type: ALERT_MODAL,
      message: errorMessage
    }
  };
};

export const onModalOpen = modalInfo => dispatch =>
  dispatch({
    type: ON_MODAL_OPEN,
    modalInfo: {
      open: true,
      ...modalInfo
    }
  });

export const onCloseModal = () => dispatch =>
  dispatch({
    type: ON_MODAL_CLOSE
  });

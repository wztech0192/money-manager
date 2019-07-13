import { ON_MODAL_OPEN, ON_MODAL_CLOSE, ALERT_MODAL, ON_ERROR } from '../enums';

const defaultState = {
  modalInfo: {
    open: false
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ON_MODAL_OPEN:
      return {
        ...state,
        modalInfo: action.modalInfo
      };
    case ON_MODAL_CLOSE:
      return {
        ...state,
        modalInfo: defaultState.modalInfo
      };
    default:
      return state;
  }
};

import React, { PureComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { onCloseModal } from '../../stores/utilStore/utilAction';
import { connect } from 'react-redux';
import { ALERT_MODAL } from '../../stores/enums';

const mapStateToProps = ({ util }) => util.modalInfo;
const mapDispatchToProps = { onCloseModal };

const GetTitle = (type, title) => {
  if (type === ALERT_MODAL) {
    return (
      <span
        style={{
          color: '#3f51b5'
        }}
      >
        &#9888; {title}
      </span>
    );
  } else {
    return <span>{title}</span>;
  }
};

class GlobalModal extends PureComponent {
  render() {
    const { open, title, type, message, onConfirm, onCloseModal } = this.props;
    console.log(this.props);
    return (
      <Dialog
        open={open}
        onClose={onCloseModal}
        fullWidth
        TransitionComponent={Slide}
        direction="down"
      >
        <DialogTitle>{GetTitle(type, title)}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onCloseModal}
            color={onConfirm ? 'secondary' : 'primary'}
          >
            Close
          </Button>
          {onConfirm && (
            <Button onClick={onConfirm} color="primary">
              Confirm
            </Button>
          )}
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalModal);

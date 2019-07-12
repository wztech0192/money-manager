import React, { PureComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class extends PureComponent {
  state = {
    error: false,
    input: ''
  };

  validateAndSubmit() {
    var input = this.state.input.trim();
    if (input !== '') {
      this.props.submitEvent(input);
    } else {
      this.setState({ error: true });
    }
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  resetError = () => {
    this.setState({ error: false });
  };

  render() {
    const { open, label, onCloseModal } = this.props;
    return (
      <Dialog open={open} onClose={onCloseModal} fullWidth>
        <DialogTitle>Create new {label}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label={`Enter new ${label} name`}
            onChange={this.onInputChange}
            onFocus={this.resetError}
            multiline
            fullWidth
            error={this.state.error}
            helperText={this.state.error ? 'Name cannot be empty' : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.validateAndSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

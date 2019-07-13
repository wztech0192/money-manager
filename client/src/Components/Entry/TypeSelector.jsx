import React, { PureComponent, Fragment } from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import {
  onSelectType,
  onSelectGroup,
  onCreateType,
  onCreateGroup,
  fetchRecordGroups
} from '../../stores/actions/recordAction';
import CreateGTModal from '../Modals/CreateGTModal';
import Typography from '@material-ui/core/Typography';

const CustomChip = props => <Chip {...props} clickable size="small" />;

const mapStateToProps = ({ record }) => ({
  selectGroup: record.selectGroup,
  selectType: record.selectType,
  groups: record.groups,
  isPositive: record.selectTab,
  recordErrors: record.recordErrors
});

const mapDispatchToProps = {
  onSelectType,
  onSelectGroup,
  onCreateType,
  onCreateGroup,
  fetchRecordGroups
};

class TypeSelector extends PureComponent {
  state = {
    openModal: false,
    modalInfo: {
      label: 'Group',
      submitEvent: this.props.onCreateGroup
    }
  };

  componentDidMount() {
    //fetch data
    this.props.fetchRecordGroups();
  }

  onOpenModal = type => () => {
    this.setState(state => ({
      openModal: !state.modalOpen,
      modalInfo: {
        label: type,
        submitEvent:
          type === 'Group' ? this.props.onCreateGroup : this.props.onCreateType
      }
    }));
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const {
      classes,
      onSelectType,
      onSelectGroup,
      selectGroup,
      selectType,
      isPositive,
      groups,
      recordErrors
    } = this.props;
    const filteredGroup = groups.filter(
      group => group.isPositive === isPositive
    );

    return (
      <Fragment>
        <div className={classes.groupGrid}>
          <CustomChip
            label="All"
            variant="outlined"
            color={selectGroup === -1 ? 'primary' : 'default'}
            className={classes.chip}
            onClick={() => onSelectGroup(-1)}
          />
          {filteredGroup.map(group => (
            <CustomChip
              key={group.id}
              label={group.groupName}
              variant="outlined"
              color={selectGroup === group.id ? 'primary' : 'default'}
              className={classes.chip}
              onClick={() => onSelectGroup(group.id)}
            />
          ))}
          <CustomChip
            label="+"
            className={classes.chip}
            variant="outlined"
            onClick={this.onOpenModal('Group')}
          />
        </div>
        <hr />

        {recordErrors.type && (
          <Typography color="secondary">* {recordErrors.type}</Typography>
        )}
        <div className={classes.typeGrid}>
          {filteredGroup.map(
            ({ id: groupId, types }) =>
              (selectGroup === -1 || selectGroup === groupId) &&
              types &&
              types.map(type => (
                <CustomChip
                  key={type.id}
                  label={type.typeName}
                  color={selectType === type.id ? 'primary' : 'default'}
                  className={classes.chip}
                  onClick={() => onSelectType(type.id)}
                />
              ))
          )}
          {selectGroup !== -1 && (
            <CustomChip
              label="+"
              className={classes.chip}
              onClick={this.onOpenModal('Type')}
            />
          )}
        </div>
        <hr />
        <CreateGTModal
          open={this.state.openModal}
          {...this.state.modalInfo}
          onCloseModal={this.onCloseModal}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeSelector);

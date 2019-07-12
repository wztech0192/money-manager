import React, { PureComponent, Fragment } from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import {
  onSelectType,
  onSelectGroup,
  onCreateType,
  onCreateGroup
} from '../../stores/recordStore/recordAction';
import CreateGTModal from '../Modals/CreateGTModal';

const mapStateToProps = ({ record }) => ({
  selectGroup: record.selectGroup,
  selectType: record.selectType
});

const mapDispatchToProps = {
  onSelectType,
  onSelectGroup,
  onCreateType,
  onCreateGroup
};

const chips = [
  {
    group: 'All'
  },
  {
    group: 'Home',
    types: ['Buy TV', 'Buy Table', 'House Rent']
  },
  { group: 'Utility', types: ['Water Bill', 'Electric Bill', 'Utility Bill'] },
  {
    group: 'Other',

    types: ['Buy Something', 'Eat Something', 'Lost Money']
  },
  {
    group: 'Restaurant',

    types: ['Hibachi House', 'Apple Bee', 'McDonald', 'Pizza Hub']
  },
  {
    group: 'Shopping',

    types: ['Walmart', 'eBay', 'Amazon', 'ECommerce']
  }
];

class TypeSelector extends PureComponent {
  state = {
    openModal: false,
    modalInfo: {
      label: 'Group',
      submitEvent: this.props.onCreateGroup
    }
  };

  onOpenModal = type => () => {
    console.log(type);
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
      selectType
    } = this.props;
    return (
      <Fragment>
        <div>
          {chips.map(({ group }) => (
            <Chip
              key={group}
              clickable
              variant="outlined"
              label={group}
              size="small"
              color={selectGroup === group ? 'primary' : 'default'}
              className={classes.chip}
              onClick={onSelectGroup}
            />
          ))}
          <Chip
            clickable
            variant="outlined"
            label="+"
            size="small"
            className={classes.chip}
            onClick={this.onOpenModal('Group')}
          />
        </div>
        <hr />

        <div>
          {chips.map(
            ({ group, types }) =>
              (selectGroup === 'All' || selectGroup === group) &&
              types &&
              types.map(type => (
                <Chip
                  key={type}
                  clickable
                  label={type}
                  size="small"
                  color={selectType === type ? 'primary' : 'default'}
                  className={classes.chip}
                  onClick={onSelectType}
                />
              ))
          )}
          {selectGroup !== 'All' && (
            <Chip
              clickable
              label="+"
              size="small"
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

import React, { PureComponent, Fragment } from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import {
  onSelectType,
  onSelectGroup
} from '../../stores/recordStore/recordAction';

const mapStateToProps = ({ record }) => ({
  selectGroup: record.selectGroup,
  selectType: record.selectType
});

const mapDispatchToProps = {
  onSelectType,
  onSelectGroup
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
            <Chip clickable label="+" size="small" className={classes.chip} />
          )}
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeSelector);

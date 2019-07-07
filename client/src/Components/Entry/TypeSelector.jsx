import React, { Component, Fragment } from 'react';
import Chip from '@material-ui/core/Chip';

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

let selectedGroup = 'All';

export default class TypeSelector extends Component {
  onSelectGroup = e => {
    if (selectedGroup !== e.target.textContent) {
      selectedGroup = e.target.textContent;
      this.props.onSelectType(null);
    }
  };

  render() {
    const { classes, onSelectType, selectedType } = this.props;
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
              color={selectedGroup === group ? 'primary' : 'default'}
              className={classes.chip}
              onClick={this.onSelectGroup}
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
              (selectedGroup === 'All' || selectedGroup === group) &&
              types &&
              types.map(type => (
                <Chip
                  key={type}
                  clickable
                  label={type}
                  size="small"
                  color={selectedType === type ? 'primary' : 'default'}
                  className={classes.chip}
                  onClick={onSelectType}
                />
              ))
          )}
          {selectedGroup !== 'All' && (
            <Chip clickable label="+" size="small" className={classes.chip} />
          )}
        </div>
        <hr />
      </Fragment>
    );
  }
}

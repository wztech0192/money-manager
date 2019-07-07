import React from 'react';
import NumberFormat from 'react-number-format';

export default ({ inputRef, onChange, ...other }) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange({
        target: {
          value: values.value
        }
      });
    }}
    thousandSeparator
  />
);

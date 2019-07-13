import React from 'react';
import NumberFormat from 'react-number-format';

export const NumberMask = ({ inputRef, onChange, ...other }) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange(values.values);
    }}
    thousandSeparator
  />
);

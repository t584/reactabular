/* eslint-disable no-shadow */
import React from 'react';

export default ({ props } = {}) => {
  const Input = ({ value, onValue }) => {
    const onKeyUp = ({ key, target: { value } }) => key === 'Enter' && onValue(value);
    const onBlur = ({ target }) => onValue(target.value); // eslint-disable-line react/prop-types

    return <input defaultValue={value} onKeyUp={onKeyUp} onBlur={onBlur} {...props} />;
  };
  Input.propTypes = {
    value: React.PropTypes.string,
    onValue: React.PropTypes.func,
  };

  return Input;
};
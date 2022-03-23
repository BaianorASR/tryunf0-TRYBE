import React from 'react';
import propTypes from 'prop-types';

export default class Input extends React.PureComponent {
  render() {
    const { type, label, dataId, value, callback, name } = this.props;
    return (
      <div className="input-data">
        <input
          name={ name }
          type={ type }
          data-testid={ dataId }
          value={ value }
          onChange={ callback }
        />
        <label className="label" htmlFor={ name }>{label}</label>
        <div className="underline" />
      </div>
    );
  }
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  dataId: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  callback: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

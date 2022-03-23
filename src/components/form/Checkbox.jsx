import React from 'react';
import propTypes from 'prop-types';

export default class Checkbox extends React.PureComponent {
  render() {
    const { dataId, label, checked, callback, name } = this.props;
    return (
      <div className="checkbox-data">
        <input
          name={ name }
          type="checkbox"
          data-testid={ dataId }
          id="checkbox"
          checked={ checked }
          onChange={ callback }
        />
        <label className="label" htmlFor={ name }>{label}</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  dataId: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  callback: propTypes.func.isRequired,
  checked: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,

};

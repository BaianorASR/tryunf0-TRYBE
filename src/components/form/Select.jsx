import React from 'react';
import propTypes from 'prop-types';

export default class Select extends React.PureComponent {
  render() {
    const { label, dataId, value, callback, name, options } = this.props;
    return (
      <div className="select-data">
        <select
          data-testid={ dataId }
          name={ name }
          value={ value }
          onChange={ callback }
        >
          {options.map((opt) => (
            <option key={ opt } value={ opt }>
              {opt.toLowerCase()}
            </option>
          ))}
        </select>
        <label className="label" htmlFor={ name }>
          {label}
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  label: propTypes.string.isRequired,
  dataId: propTypes.string.isRequired,
  callback: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
};

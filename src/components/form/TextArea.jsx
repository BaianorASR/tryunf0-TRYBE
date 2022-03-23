import React from 'react';
import propTypes from 'prop-types';

export default class TextArea extends React.PureComponent {
  render() {
    const { dataId, label, value, callback, name } = this.props;
    return (
      <div className="input-data">
        <textarea
          name={ name }
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

TextArea.propTypes = {
  dataId: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  callback: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import Form from './Form';

export default class FormSection extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="form-container">
        <Form
          { ...props }
          onInputChange={ props.onInputChange }
          onSaveButtonClick={ props.onSaveButtonClick }
        />
        <Card { ...props } />
      </div>
    );
  }
}

FormSection.propTypes = {
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

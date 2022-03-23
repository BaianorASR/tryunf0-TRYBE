import React from 'react';
import propTypes from 'prop-types';
import Input from './form/Input';
import TextArea from './form/TextArea';
import Select from './form/Select';
import Checkbox from './form/Checkbox';
import '../styles/Form.css';

export default class Form extends React.PureComponent {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="Form">
        <h1>TRYUNFU</h1>
        <Input
          name="cardName"
          type="text"
          dataId="name-input"
          label="Nome"
          value={ cardName }
          callback={ onInputChange }
        />
        <TextArea
          name="cardDescription"
          dataId="description-input"
          label="Descrição"
          value={ cardDescription }
          callback={ onInputChange }
        />
        <Input
          name="cardAttr1"
          type="number"
          dataId="attr1-input"
          label="Attr01"
          value={ cardAttr1 }
          callback={ onInputChange }
        />
        <Input
          name="cardAttr2"
          type="number"
          dataId="attr2-input"
          label="Attr02"
          value={ cardAttr2 }
          callback={ onInputChange }
        />
        <Input
          name="cardAttr3"
          type="number"
          dataId="attr3-input"
          label="Attr03"
          value={ cardAttr3 }
          callback={ onInputChange }
        />
        <Input
          name="cardImage"
          type="text"
          dataId="image-input"
          label="Image"
          value={ cardImage }
          callback={ onInputChange }
        />
        {!hasTrunfo
          ? (
            <Checkbox
              name="cardTrunfo"
              dataId="trunfo-input"
              label="Super Trunfu Trybe"
              checked={ cardTrunfo }
              callback={ onInputChange }
            />
          ) : (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          )}
        <Select
          name="cardRare"
          dataId="rare-input"
          label="Raridade"
          options={ ['normal', 'raro', 'muito raro'] }
          value={ cardRare }
          callback={ onInputChange }
        />
        <button
          name=""
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

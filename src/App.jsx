import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InitialState from './helpers/InitialState';
import validations from './helpers/validation';
import deleteTarget from './helpers/deleteCard';
import FormSection from './components/Form-Section';
import DeckSection from './components/DeckSection';
import './styles/App.css';
import './styles/List.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...InitialState,
      hasTrunfo: false,
      savedList: [],
    };
  }

  handleCardTrunfo = (state) => state.some((card) => card.cardTrunfo);

  onInputChange = ({ target: { name, type, value, checked } }) => {
    const valor = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valor,
    }, () => {
      this.setState((state) => (
        { isSaveButtonDisabled: validations(state) }
      ));
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      savedList: [
        ...state.savedList, {
          savedList: null,
          id: uuidv4(),
          ...state,
        }],
    }), () => {
      this.setState((state) => ({
        savedList: state.savedList,
        hasTrunfo: this.handleCardTrunfo(state.savedList),
        ...InitialState,
      }));
    });
  }

  deleteCard = ({ target }) => {
    this.setState((state) => ({
      savedList: deleteTarget(state.savedList, target.id),
    }), () => {
      this.setState((state) => ({ hasTrunfo: this.handleCardTrunfo(state.savedList) }));
    });
  }

  render() {
    const { state } = this;
    return (
      <div className="app">
        <FormSection
          { ...state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <DeckSection
          deck={ state.savedList }
          deleteCard={ this.deleteCard }
          filterList={ this.filterList }
        />
      </div>
    );
  }
}

export default App;

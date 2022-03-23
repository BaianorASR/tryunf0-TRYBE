import React from 'react';
import propTypes from 'prop-types';
import NavBar from './card/NavBar';
import CardsList from './form/CardsList';
import FILTERS from '../helpers/Filters';

export default class DeckSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      deckList: [],
      rareFil: 'todas',
      nameFil: '',
    };
  }

  trunfoCard = ({ target: { checked } }) => {
    const { deck } = this.props;
    this.setState(() => (checked
      ? { deckList: [deck.find((card) => card.cardTrunfo)] }
      : { deckList: deck }));
  }

  filterList = ({ target: { name, value } }) => {
    this.setState(() => (name === 'rare-filter'
      ? { rareFil: value } : { nameFil: value }), () => {
      const { deck } = this.props;
      this.setState((state) => ({
        deckList: FILTERS(deck, state.rareFil, state.nameFil),
      }));
    });
  }

  componentDidUpdate = (prevProps) => {
    const { deck } = this.props;
    if (deck !== prevProps.deck) this.updateProps(deck);
  }

  updateProps = (deck) => this.setState({ deckList: deck });

  render() {
    const { state: { deckList, rareFil }, props: { deleteCard } } = this;
    return (
      <div className="list-content">
        <NavBar
          event={ {
            fill: this.filterList,
            trunfo: this.trunfoCard,
          } }
          value={ rareFil }
        />
        <CardsList deckNew={ deckList } deleteCard={ deleteCard } />
      </div>
    );
  }
}

DeckSection.propTypes = {
  deleteCard: propTypes.func.isRequired,
  deck: propTypes.arrayOf(propTypes.object).isRequired,
};

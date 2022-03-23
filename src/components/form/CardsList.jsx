import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card';

export default class CardsList extends React.PureComponent {
  render() {
    const { deckNew, deleteCard } = this.props;
    return (
      <div className="cards-list">
        {deckNew.map((card, index) => (
          <Card
            { ...card }
            key={ index }
            onClick={ deleteCard }
            delBtn
          />
        ))}
      </div>
    );
  }
}

CardsList.propTypes = {
  deckNew: propTypes.arrayOf(propTypes.object).isRequired,
  deleteCard: propTypes.func.isRequired,
};

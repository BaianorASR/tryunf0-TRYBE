import React from 'react';
import propTypes from 'prop-types';
import TopCard from './TopCard';
import BottomCard from './BottomCard';

export default class ContentCard extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="card-content">
        <TopCard
          cardName={ props.cardName }
          cardImage={ props.cardImage }
          cardDescription={ props.cardDescription }
        />
        <BottomCard
          cardTrunfo={ props.cardTrunfo }
          cardRare={ props.cardRare }
          cardAttr1={ props.cardAttr1 }
          cardAttr2={ props.cardAttr2 }
          cardAttr3={ props.cardAttr3 }
        />
      </div>
    );
  }
}

ContentCard.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

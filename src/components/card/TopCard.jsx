import React from 'react';
import propTypes from 'prop-types';

export default class TopCard extends React.PureComponent {
  render() {
    const { cardName, cardImage, cardDescription } = this.props;
    const ayanami = 'https://giffiles.alphacoders.com/112/112145.gif';
    return (
      <>
        <p data-testid="name-card" className="card-name">
          {cardName}
        </p>
        <img src={ cardImage || ayanami } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card" className="card-description">
          {cardDescription}
        </p>
      </>
    );
  }
}

TopCard.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
};

import React from 'react';
import propTypes from 'prop-types';
import { GiCardJoker } from 'react-icons/gi';
import { RiVipDiamondFill } from 'react-icons/ri';
import Attributes from './Attributes';

export default class BottomCard extends React.PureComponent {
  render() {
    const { props, props: { cardRare, cardTrunfo } } = this;
    return (
      <div className="bottom-content">
        <Attributes { ...props } />
        <p data-testid="rare-card" className="rare-card">
          <RiVipDiamondFill className="rare-icon" />
          {cardRare}
        </p>
        {cardTrunfo && (
          <p data-testid="trunfo-card" className="trunfo">
            <GiCardJoker className="trunfo-icon" />
            Super Trunfo
          </p>
        )}
      </div>
    );
  }
}

BottomCard.propTypes = {
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

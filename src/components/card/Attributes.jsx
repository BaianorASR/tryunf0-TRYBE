import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

export default class Attributes extends PureComponent {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    return (
      <ul>
        <li data-testid="attr1-card">
          Atributo 1..........
          {cardAttr1}
        </li>
        <li data-testid="attr2-card">
          Atributo 2..........
          {cardAttr2}
        </li>
        <li data-testid="attr3-card">
          Atributo 3..........
          {cardAttr3}
        </li>
      </ul>
    );
  }
}

Attributes.propTypes = {
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
};

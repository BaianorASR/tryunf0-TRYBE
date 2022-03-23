const numberRange = ({ max, card1, card2, card3 }) => !!(
  (card1 <= max && card1 >= 0)
  && (card2 <= max && card2 >= 0)
  && (card3 <= max && card3 >= 0)
);

const numberValidation = ({ cardAttr1, cardAttr2, cardAttr3 }) => {
  const vl = {
    max: 90,
    sum: 210,
    card1: Number(cardAttr1),
    card2: Number(cardAttr2),
    card3: Number(cardAttr3),
  };
  return numberRange(vl) && ((vl.card1 + vl.card2 + vl.card3) <= vl.sum);
};

const stringsValues = ({ cardName, cardDescription, cardImage, cardRare }) => (!!(
  cardName && cardDescription && cardImage && cardRare
));

export default (state) => !(stringsValues(state) && numberValidation(state));

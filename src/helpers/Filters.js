const nameFilter = (deck, name) => deck
  .filter((card) => card.cardName.includes(name));

const rareFilter = (deck, rare) => deck
  .filter((card) => card.cardRare === rare);

export default (prevDeck, rare, name) => (rare === 'todas'
  ? nameFilter(prevDeck, name)
  : nameFilter(rareFilter(prevDeck, rare), name));

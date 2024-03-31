/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map = new Map();
    //count the frequency of each distinct cards in the deck
    deck.forEach(card => map.set(card, (map.get(card) || 0) + 1));
    //create a map iterator to check if all the key values are equal
    const values = [...map.values()];
    return values.every(value => value === values[0]);
};

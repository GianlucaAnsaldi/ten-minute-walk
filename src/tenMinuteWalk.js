const tenMinuteWalk = (directions) => {
  if (
    countOccurrences(directions, 'n') == countOccurrences(directions, 's') &&
    countOccurrences(directions, 'w') == countOccurrences(directions, 'e') &&
    directions.length == 10
  )
    return true;
  return false;
};

const countOccurrences = (arr, val) => {
  return arr.reduce(
    (accumulator, value) => (value === val ? accumulator + 1 : accumulator),
    0
  );
};

module.exports = tenMinuteWalk;

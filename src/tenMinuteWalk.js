const tenMinuteWalk = (directions) => {
  let vertical = 0,
    horizontal = 0;

  if (directions.length === 10) {
    for (let direction of directions) {
      if (direction == 'n') vertical += 1;
      if (direction == 's') vertical -= 1;
      if (direction == 'w') horizontal += 1;
      if (direction == 'e') horizontal -= 1;
    }
    return vertical === 0 && horizontal === 0;
  } else {
    return false;
  }
};

module.exports = tenMinuteWalk;

const tenMinuteWalk = (directions) => {
  let vertical = 0;

  if (directions.length != 10) {
    return false;
  } else {
    for (let direction of directions) {
      if (direction == 'n') vertical += 1;
      if (direction == 's') vertical -= 1;
      console.log(vertical);
    }
  }
  return vertical === 0;
};

module.exports = tenMinuteWalk;

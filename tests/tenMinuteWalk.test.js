const tenMinuteWalk = require('../src/tenMinuteWalk');

describe('tenMinuteWalk', () => {
  test('it return true', () => {
    expect(tenMinuteWalk(['n'])).toEqual(false);
  });
});

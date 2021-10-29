const tenMinuteWalk = require('../src/tenMinuteWalk');

describe('tenMinuteWalk', () => {
  test('it return false if lenght is less than 10', () => {
    expect(tenMinuteWalk(['n'])).toEqual(false);
  });

  test('it return true', () => {
    expect(
      tenMinuteWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'])
    ).toEqual(true);
  });

  test('it return true', () => {
    expect(
      tenMinuteWalk(['n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 's'])
    ).toEqual(false);
  });
});

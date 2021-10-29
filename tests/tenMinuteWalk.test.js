const tenMinuteWalk = require('../src/tenMinuteWalk');

describe('tenMinuteWalk', () => {
  test('it return false if lenght is less than 10', () => {
    expect(tenMinuteWalk(['w', 's'])).toEqual(false);
  });

  test('it returns true', () => {
    expect(
      tenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])
    ).toEqual(true);
  });

  test('it return false', () => {
    expect(
      tenMinuteWalk(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w'])
    ).toEqual(false);
  });

  test('it returns false with a different example', () => {
    expect(
      tenMinuteWalk(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'])
    ).toEqual(false);
  });
});

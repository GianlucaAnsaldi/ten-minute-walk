const tenMinuteWalk = require('../src/tenMinuteWalk');

describe('tenMinuteWalk', () => {
  test('it return false if lenght is less than 10', () => {
    expect(tenMinuteWalk(['w', 's'])).toEqual(false);
  });

  test('it returns true if number of north and south steps is the same', () => {
    expect(
      tenMinuteWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's'])
    ).toEqual(true);
  });

  test('it return false if number of north and south steps is different', () => {
    expect(
      tenMinuteWalk(['n', 'n', 'n', 'n', 's', 's', 's', 's', 's', 's'])
    ).toEqual(false);
  });

  test('it returns true if number of west and east steps is the same', () => {
    expect(
      tenMinuteWalk(['w', 'w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e'])
    ).toEqual(true);
  });

  test('it returns false if number of west and east steps is the same', () => {
    expect(
      tenMinuteWalk(['w', 'w', 'w', 'w', 'e', 'e', 'e', 'e', 'e', 'e'])
    ).toEqual(false);
  });
});

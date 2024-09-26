export const formPlural = (amount, [single, firstPlural, secondPlural]) => {
  if (!secondPlural) {
    secondPlural = firstPlural;
  }

  const lastTwoDigits = amount % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return secondPlural;
  }

  const lastDigit = amount % 10;

  if (lastDigit === 1) {
    return single
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return firstPlural
  }
  return secondPlural;
};
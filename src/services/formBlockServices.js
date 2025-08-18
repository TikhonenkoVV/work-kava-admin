const currency = local => {
  const values = {
    en: 36,
    de: 8364,
    ua: 8372
  };
  return values[local];
};

const toCapitalize = s => {
  return String(s[0]).toUpperCase() + String(s).slice(1);
};

const symbol = s => {
  return String.fromCharCode(s);
};

export const text = (e, title) => {
  const spiitedString = e.split('_');
  const local = spiitedString[spiitedString.length - 1];
  if (title === 'Price') {
    if (spiitedString.length === 3) {
      return `${local.toUpperCase()} (${toCapitalize(
        e.split('_')[1]
      )}) (${symbol(currency(local))})`;
    } else {
      return `${local.toUpperCase()} (${symbol(currency(local))})`;
    }
  } else {
    return local.toUpperCase();
  }
};

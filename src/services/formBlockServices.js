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
  const splitedString = e.split('_');
  const local = splitedString[splitedString.length - 1];
  if (title === 'Price' || title === 'Preis' || title === 'Ціна') {
    if (splitedString.length === 3) {
      return `${local.toUpperCase()} ${toCapitalize(e.split('_')[1])} (${symbol(
        currency(local)
      )})`;
    } else {
      return `${local.toUpperCase()} (${symbol(currency(local))})`;
    }
  } else {
    if (splitedString.length > 1) {
      return local.toUpperCase();
    } else return toCapitalize(splitedString[0]);
  }
};

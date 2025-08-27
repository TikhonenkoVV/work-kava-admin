export const getMaxIndex = collection => {
  if (collection.length === 0) {
    return -1;
  } else {
    const arr = collection.flatMap(el => el.index);
    return Math.max.apply(null, arr);
  }
};

export const colors = [
  '#ffffff',
  '#bdff99',
  '#ffc999',
  '#f1c2f2',
  '#d8f1fe',
  '#f5ffb9'
];

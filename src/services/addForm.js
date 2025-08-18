export const newInit = data => {
  const keys = Object.keys(data);
  const arr = [];
  keys.forEach(e => data[e].forEach(el => arr.push(el)));
  const res = {};
  arr.map(e => (res[e] = ''));
  return res;
};

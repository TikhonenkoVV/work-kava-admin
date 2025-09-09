import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  HOT_DOGS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';

export const createData = path => {
  if (path === COFFE_CLASSIC_PATH)
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      ingredients: ['coffee', 'water'],
      images: ['img', 'webpImg']
    };
  if (path === COFFE_WITH_MILK_PATH)
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      ingredients: ['coffee', 'water', 'milk'],
      images: ['img', 'webpImg']
    };
  if (path === DESSERTS_PATH)
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      weight: ['weight'],
      images: ['img', 'webpImg']
    };
  if (path === BURGERS_PATH || path === HOT_DOGS_PATH)
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: [
        'price_standart_en',
        'price_double_en',
        'price_standart_de',
        'price_double_de',
        'price_standart_ua',
        'price_double_ua'
      ],
      ingredients: ['ingredients_en', 'ingredients_de', 'ingredients_ua'],
      images: ['img', 'webpImg']
    };
  if (path === ROLLS_PATH)
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: [
        'price_standart_en',
        'price_xl_en',
        'price_standart_de',
        'price_xl_de',
        'price_standart_ua',
        'price_xl_ua'
      ],
      ingredients: ['ingredients_en', 'ingredients_de', 'ingredients_ua'],
      images: ['img', 'webpImg']
    };
};

export const newInit = data => {
  const keys = Object.keys(data);
  const arr = [];
  keys.forEach(e => data[e].forEach(el => arr.push(el)));
  const res = {};
  arr.map(e => (res[e] = null));
  res.archived = false;
  res.img = null;
  res.webpImg = null;

  return res;
};

export const validateFormData = data => {
  const isEmpty = !Object.keys(data).length;
  if (isEmpty) return false;
  const keys = Object.keys(data);
  let res = true;
  for (let i = 0; i < keys.length; i++) {
    if (data[keys[i]] === null || data[keys[i]] === '' || data[keys[i]] === 0) {
      res = false;
      break;
    }
  }
  return res;
};

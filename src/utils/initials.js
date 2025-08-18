export const initialState = path => {
  if (path === '/coffee-classic')
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      ingredients: ['coffee', 'water'],
      image: ['image']
    };
  if (path === '/coffee-with-milk')
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      ingredients: ['coffee', 'water', 'milk'],
      image: ['image']
    };
  if (path === '/desserts')
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: ['price_en', 'price_de', 'price_ua'],
      weight: ['weight'],
      image: ['image']
    };
  if (path === '/burgers' || path === '/hot-dogs')
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: [
        'price_en',
        'price_double_en',
        'price_de',
        'price_double_de',
        'price_ua',
        'price_double_ua'
      ],
      ingredients: ['ingredients_en', 'ingredients_de', 'ingredients_ua'],
      image: ['image']
    };
  if (path === '/rolls')
    return {
      title: ['title_en', 'title_de', 'title_ua'],
      price: [
        'price_en',
        'price_xl_en',
        'price_de',
        'price_xl_de',
        'price_ua',
        'price_xl_ua'
      ],
      ingredients: ['ingredients_en', 'ingredients_de', 'ingredients_ua'],
      image: ['image']
    };
};

// export const initialState = path => {
//   if (path === '/coffee-classic')
//     return {
//       title: {
//         title_en: '',
//         title_de: '',
//         title_ua: ''
//       },
//       price: {
//         price_en: '',
//         price_de: '',
//         price_ua: ''
//       },
//       ingredients: {
//         coffee: '',
//         water: ''
//       },
//       image: ''
//     };
//   if (path === '/coffee-with-milk')
//     return {
//       title: {
//         title_en: '',
//         title_de: '',
//         title_ua: ''
//       },
//       price: {
//         price_en: '',
//         price_de: '',
//         price_ua: ''
//       },
//       ingredients: {
//         coffee: '',
//         water: '',
//         milk: ''
//       },
//       image: ''
//     };
//   if (path === '/desserts')
//     return {
//       title: {
//         title_en: '',
//         title_de: '',
//         title_ua: ''
//       },
//       price: {
//         price_en: '',
//         price_de: '',
//         price_ua: ''
//       },
//       weight: '',
//       image: ''
//     };
//   if (path === '/burgers' || path === '/hot-dogs')
//     return {
//       title: {
//         title_en: '',
//         title_de: '',
//         title_ua: ''
//       },
//       price: {
//         price_en: '',
//         price_en_double: '',
//         price_de: '',
//         price_de_double: '',
//         price_ua: '',
//         price_ua_double: ''
//       },
//       ingredients: {
//         ingredients_en: '',
//         ingredients_de: '',
//         ingredients_ua: ''
//       },
//       image: ''
//     };
//   if (path === '/rolls')
//     return {
//       title: {
//         title_en: '',
//         title_de: '',
//         title_ua: ''
//       },
//       price: {
//         price_en: '',
//         price_en_xl: '',
//         price_de: '',
//         price_de_xl: '',
//         price_ua: '',
//         price_ua_xl: ''
//       },
//       ingredients: {
//         ingredients_en: '',
//         ingredients_de: '',
//         ingredients_ua: ''
//       },
//       image: ''
//     };
// };

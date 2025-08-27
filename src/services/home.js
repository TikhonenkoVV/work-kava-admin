import { lang } from 'lang/lang';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';

export const getTitle = (path, local) => {
  const title =
    path === COFFE_CLASSIC_PATH
      ? lang[local].coffeeClassicTitle
      : path === COFFE_WITH_MILK_PATH
      ? lang[local].coffeeWithMilkTitle
      : path === DESSERTS_PATH
      ? lang[local].dessertsTitle
      : path === BURGERS_PATH
      ? lang[local].burgersTitle
      : path === ROLLS_PATH
      ? lang[local].rollsTitle
      : lang[local].hotDogsTitle;
  return title;
};

import { useSelector } from 'react-redux';
import { updateUser } from 'store/auth/operations';
import { selectIsRefreshing } from 'store/auth/selectors';
import { addBurger, getBurgers } from 'store/burgers/operations';
import { selectBurgers, selectIsLoadingBurgrs } from 'store/burgers/selectors';
import {
  addCoffeeClassic,
  getCoffeeClassics
} from 'store/coffeeclassic/operations';
import {
  selectCoffeeClassic,
  selectIsLoadingCoffeeClassic
} from 'store/coffeeclassic/selectors';
import {
  addCoffeeWithMilk,
  getCoffeeWithMilks
} from 'store/coffeewithmilk/operations';
import {
  selectCoffeeWithMilk,
  selectIsLoadingCoffeeWithMilk
} from 'store/coffeewithmilk/selectors';
import { addDessert, getDesserts } from 'store/dessers/operations';
import {
  selectDesserts,
  selectIsLoadingDesserts
} from 'store/dessers/selectors';
import { addHotDog, getHotDogs } from 'store/hotdogs/operations';
import { selectHotDogs, selectIsLoadingHotDogs } from 'store/hotdogs/selektors';
import { addRoll, getRolls } from 'store/rolls/operations';
import { selectIsLoadingRolls, selectRolls } from 'store/rolls/selectors';
import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  GET_OPERATION,
  HOT_DOGS_PATH,
  PATCH_OPERATION,
  POST_OPERATION,
  ROLLS_PATH
} from 'utils/GlobalUtils';

export const useProductState = (path, method) => {
  let isLoading;
  let collection;
  let operation;

  const isLoadingCoffeeClassic = useSelector(selectIsLoadingCoffeeClassic);
  const isLoadingCoffeeWithMilk = useSelector(selectIsLoadingCoffeeWithMilk);
  const isLoadingDesserts = useSelector(selectIsLoadingDesserts);
  const isLoadingBurgers = useSelector(selectIsLoadingBurgrs);
  const isLoadingRolls = useSelector(selectIsLoadingRolls);
  const isLoadingHotDogs = useSelector(selectIsLoadingHotDogs);
  const isRefreshing = useSelector(selectIsRefreshing);

  const { coffeeClassics } = useSelector(selectCoffeeClassic);
  const { coffeeWithMilks } = useSelector(selectCoffeeWithMilk);
  const { desserts } = useSelector(selectDesserts);
  const { burgers } = useSelector(selectBurgers);
  const { rolls } = useSelector(selectRolls);
  const { hotDogs } = useSelector(selectHotDogs);

  if (path === COFFE_CLASSIC_PATH) {
    isLoading = isLoadingCoffeeClassic;
    collection = coffeeClassics;
    if (method === GET_OPERATION) {
      operation = getCoffeeClassics;
    }
    if (method === POST_OPERATION) {
      operation = addCoffeeClassic;
    }
  }
  if (path === COFFE_WITH_MILK_PATH) {
    isLoading = isLoadingCoffeeWithMilk;
    collection = coffeeWithMilks;
    if (method === GET_OPERATION) {
      operation = getCoffeeWithMilks;
    }
    if (method === POST_OPERATION) {
      operation = addCoffeeWithMilk;
    }
  }
  if (path === DESSERTS_PATH) {
    isLoading = isLoadingDesserts;
    collection = desserts;
    if (method === GET_OPERATION) {
      operation = getDesserts;
    }
    if (method === POST_OPERATION) {
      operation = addDessert;
    }
  }
  if (path === BURGERS_PATH) {
    isLoading = isLoadingBurgers;
    collection = burgers;
    if (method === GET_OPERATION) {
      operation = getBurgers;
    }
    if (method === POST_OPERATION) {
      operation = addBurger;
    }
  }
  if (path === ROLLS_PATH) {
    isLoading = isLoadingRolls;
    collection = rolls;
    if (method === GET_OPERATION) {
      operation = getRolls;
    }
    if (method === POST_OPERATION) {
      operation = addRoll;
    }
  }
  if (path === HOT_DOGS_PATH) {
    isLoading = isLoadingHotDogs;
    collection = hotDogs;
    if (method === GET_OPERATION) {
      operation = getHotDogs;
    }
    if (method === POST_OPERATION) {
      operation = addHotDog;
    }
  }
  if (path === null) {
    isLoading = isRefreshing;
    if (method === PATCH_OPERATION) operation = updateUser;
  }

  return { isLoading, collection, operation };
};

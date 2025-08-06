import {
  Container,
  StyledHomeSection
} from 'Components/Global/components.styled';
import { ProductList } from 'Components/ProductList/ProductList';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBurgers } from 'store/burgers/operations';
import { selectBurgers } from 'store/burgers/selectors';
import { getCoffeeClassics } from 'store/coffeeclassic/operations';
import { selectCoffeeClassic } from 'store/coffeeclassic/selectors';
import { getCoffeeWithMilk } from 'store/coffeewithmilk/operations';
import { selectCoffeeWithMilk } from 'store/coffeewithmilk/selectors';
import { getDesserts } from 'store/dessers/operations';
import { selectDesserts } from 'store/dessers/selectors';
import { getHotDogs } from 'store/hotdogs/operations';
import { selectHotDogs } from 'store/hotdogs/selektors';
import { getRolls } from 'store/rolls/operations';
import { selectRolls } from 'store/rolls/selectors';

const Home = () => {
  const { coffeeClassics } = useSelector(selectCoffeeClassic);
  const { coffeeWithMilks } = useSelector(selectCoffeeWithMilk);
  const { desserts } = useSelector(selectDesserts);
  const { burgers } = useSelector(selectBurgers);
  const { hotDogs } = useSelector(selectHotDogs);
  const { rolls } = useSelector(selectRolls);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      if (pathname === '/coffee-classic') dispatch(getCoffeeClassics());
      if (pathname === '/coffee-with-milk') dispatch(getCoffeeWithMilk());
      if (pathname === '/desserts') dispatch(getDesserts());
      if (pathname === '/burgers') dispatch(getBurgers());
      if (pathname === '/rolls') dispatch(getRolls());
      if (pathname === '/hot-dogs') dispatch(getHotDogs());
    }
  }, [dispatch, pathname, isLoggedIn]);

  return (
    <StyledHomeSection>
      <Container>
        <button>Add produkt</button>
        {pathname === '/coffee-classic' && (
          <ProductList collection={coffeeClassics} />
        )}
        {pathname === '/coffee-with-milk' && (
          <ProductList collection={coffeeWithMilks} />
        )}
        {pathname === '/desserts' && <ProductList collection={desserts} />}
        {pathname === '/burgers' && <ProductList collection={burgers} />}
        {pathname === '/rolls' && <ProductList collection={rolls} />}
        {pathname === '/hot-dogs' && <ProductList collection={hotDogs} />}
      </Container>
    </StyledHomeSection>
  );
};

export default Home;

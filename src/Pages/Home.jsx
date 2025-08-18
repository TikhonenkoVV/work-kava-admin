import { AddForm } from 'Components/AddForm/AddForm';
import {
  Container,
  StyledHomeSection
} from 'Components/Global/components.styled';
import { ProductList } from 'Components/ProductList/ProductList';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
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

  const [collectionDetales, setCollectionDetales] = useState({
    title: 'empty',
    department: 'empty'
  });

  useEffect(() => {
    if (isLoggedIn) {
      if (pathname === '/coffee-classic') {
        dispatch(getCoffeeClassics());
        setCollectionDetales({ title: 'Coffee classic', department: 'cafe' });
      }
      if (pathname === '/coffee-with-milk') {
        dispatch(getCoffeeWithMilk());
        setCollectionDetales({ title: 'Coffee with milk', department: 'cafe' });
      }
      if (pathname === '/desserts') {
        dispatch(getDesserts());
        setCollectionDetales({ title: 'Desserts', department: 'cafe' });
      }
      if (pathname === '/burgers') {
        dispatch(getBurgers());
        setCollectionDetales({ title: 'Burgers', department: 'fastfood' });
      }
      if (pathname === '/rolls') {
        dispatch(getRolls());
        setCollectionDetales({
          title: 'Rolls',
          department: 'fastfood'
        });
      }
      if (pathname === '/hot-dogs') {
        dispatch(getHotDogs());
        setCollectionDetales({
          title: 'Hot dogs',
          department: 'fastfood'
        });
      }
    }
  }, [dispatch, pathname, isLoggedIn]);

  return (
    <StyledHomeSection>
      <Container>
        {pathname === '/coffee-classic' && (
          <ProductList
            collection={coffeeClassics}
            detales={collectionDetales}
          />
        )}
        {pathname === '/coffee-with-milk' && (
          <ProductList
            collection={coffeeWithMilks}
            detales={collectionDetales}
          />
        )}
        {pathname === '/desserts' && (
          <ProductList collection={desserts} detales={collectionDetales} />
        )}
        {pathname === '/burgers' && (
          <ProductList collection={burgers} detales={collectionDetales} />
        )}
        {pathname === '/rolls' && (
          <ProductList collection={rolls} detales={collectionDetales} />
        )}
        {pathname === '/hot-dogs' && (
          <ProductList collection={hotDogs} detales={collectionDetales} />
        )}
        {pathname === '/add-product' && <AddForm path={pathname} />}
      </Container>
    </StyledHomeSection>
  );
};

export default Home;

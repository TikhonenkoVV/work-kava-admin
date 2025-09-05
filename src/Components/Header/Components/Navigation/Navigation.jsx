import {
  BURGERS_PATH,
  COFFE_CLASSIC_PATH,
  COFFE_WITH_MILK_PATH,
  DESSERTS_PATH,
  HOT_DOGS_PATH,
  ROLLS_PATH
} from 'utils/GlobalUtils';
import { Item, LinkItem, List } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { getTitle } from 'services/home';

export const Navigation = ({ action }) => {
  const paths = [
    { pathname: COFFE_CLASSIC_PATH },
    { pathname: COFFE_WITH_MILK_PATH },
    { pathname: DESSERTS_PATH },
    { pathname: BURGERS_PATH },
    { pathname: ROLLS_PATH },
    { pathname: HOT_DOGS_PATH }
  ];

  const { local } = useSelector(selectUser);

  return (
    <nav>
      <List>
        {paths.map(el => (
          <Item key={el.pathname}>
            <LinkItem to={el.pathname} onClick={() => action('mobileNav')}>
              {() => getTitle(el.pathname, local)}
            </LinkItem>
          </Item>
        ))}
      </List>
    </nav>
  );
};

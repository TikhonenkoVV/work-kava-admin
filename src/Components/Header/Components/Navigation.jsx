import { Item, LinkItem, List } from './Navigation.styled';

export const Navigation = ({ action }) => {
  return (
    <nav>
      <List>
        <Item key="1">
          <LinkItem to="/" onClick={action}>
            Caffee classic
          </LinkItem>
        </Item>
        <Item key="2">
          <LinkItem to="/coffee-with-milk" onClick={action}>
            Caffee with milk
          </LinkItem>
        </Item>
        <Item key="3">
          <LinkItem to="/desserts" onClick={action}>
            Desserts
          </LinkItem>
        </Item>
        <Item key="4">
          <LinkItem to="/burgers" onClick={action}>
            Burgers
          </LinkItem>
        </Item>
        <Item key="5">
          <LinkItem to="/rolls" onClick={action}>
            Rolls
          </LinkItem>
        </Item>
        <Item key="6">
          <LinkItem to="/hot-dogs" onClick={action}>
            Hot dogs
          </LinkItem>
        </Item>
      </List>
    </nav>
  );
};

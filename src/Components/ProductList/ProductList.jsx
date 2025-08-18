import { CLOUD_NAME } from 'utils/GlobalUtils';
import {
  CardButton,
  CardButtonContainer,
  CardContainer,
  CardTitle,
  CollectionTitle,
  StyledImage,
  StyledLi
} from './ProductList.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { useLocation } from 'react-router-dom';

const colors = [
  '#ffffff',
  '#bdff99',
  '#ffc999',
  '#f1c2f2',
  '#d8f1fe',
  '#f5ffb9'
];

export const ProductList = ({ collection, detales }) => {
  const location = useLocation();

  return (
    <>
      <CardButton to={'/add-product'} state={{ from: location }}>
        <SvgIcon w={24} h={24} icon={'add'} />
      </CardButton>
      <CollectionTitle>{detales.title}</CollectionTitle>
      <ul>
        {collection.map((el, i) => (
          <StyledLi key={el._id}>
            <StyledImage
              src={
                CLOUD_NAME + detales.department + '/' + el.image + '-mobile.png'
              }
              alt={el.title}
              color={colors[i]}
            />
            <CardContainer>
              <CardTitle>{el.title}</CardTitle>
              <CardButtonContainer>
                <CardButton>
                  <SvgIcon w={24} h={24} icon={'edit'} />
                </CardButton>
                <CardButton>
                  <SvgIcon w={24} h={24} icon={'archive'} />
                </CardButton>
                <CardButton>
                  <SvgIcon w={24} h={24} icon={'delete'} />
                </CardButton>
              </CardButtonContainer>
            </CardContainer>
          </StyledLi>
        ))}
      </ul>
    </>
  );
};

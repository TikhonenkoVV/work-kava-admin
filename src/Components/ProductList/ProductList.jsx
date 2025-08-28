import { useSelector } from 'react-redux';
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
import { colors, getMaxIndex } from 'services/productList';
import { ADD_PRODUCT_PATH, LOCAL_DE, LOCAL_EN } from 'utils/GlobalUtils';
import { selectUser } from 'store/auth/selectors';

export const ProductList = ({ data, title }) => {
  const { local } = useSelector(selectUser);

  const { pathname } = useLocation();

  const index = getMaxIndex(data) + 1;

  return (
    <>
      <CardButton to={ADD_PRODUCT_PATH} state={{ props: { pathname, index } }}>
        <SvgIcon w={24} h={24} icon={'add'} />
      </CardButton>
      <CollectionTitle>{title}</CollectionTitle>
      {data.length > 0 && (
        <ul>
          {data?.map((el, i) => (
            <StyledLi key={el._id}>
              <StyledImage
                width={120}
                src={el.imgURL}
                alt={el.title_en}
                color={colors[i]}
              />
              <CardContainer>
                <CardTitle>
                  {local === LOCAL_EN
                    ? el.title_en
                    : local === LOCAL_DE
                    ? el.title_de
                    : el.title_ua}
                </CardTitle>
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
      )}
    </>
  );
};

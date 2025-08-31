import { useSelector } from 'react-redux';
import {
  AddCardButton,
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
import { useProductState } from 'hooks/useProductState';
import { Loader } from 'Components/Global/Loader/Loader';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';

export const ProductList = ({ data, title }) => {
  const { windowWidth } = useWindowWidth();

  const { local } = useSelector(selectUser);

  const { pathname } = useLocation();

  const { isLoading } = useProductState(pathname);

  const index = getMaxIndex(data) + 1;

  return (
    <>
      {isLoading && <Loader />}
      <CollectionTitle>{title}</CollectionTitle>
      <AddCardButton
        to={ADD_PRODUCT_PATH}
        state={{ props: { pathname, index } }}
      >
        <SvgIcon
          w={windowWidth > 413 ? 20 : 14}
          h={windowWidth > 413 ? 20 : 14}
          icon={'add'}
        />
        <span>{lang[local].addNewProduct}</span>
      </AddCardButton>
      {data.length > 0 && (
        <ul>
          {data?.map((el, i) => (
            <StyledLi key={el._id}>
              <StyledImage
                width={windowWidth > 413 ? 120 : 100}
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
                    <SvgIcon
                      w={windowWidth > 413 ? 24 : 18}
                      h={windowWidth > 413 ? 24 : 18}
                      icon={'edit'}
                    />
                  </CardButton>
                  <CardButton>
                    <SvgIcon
                      w={windowWidth > 413 ? 24 : 18}
                      h={windowWidth > 413 ? 24 : 18}
                      icon={'archive'}
                    />
                  </CardButton>
                  <CardButton>
                    <SvgIcon
                      w={windowWidth > 413 ? 24 : 18}
                      h={windowWidth > 413 ? 24 : 18}
                      icon={'delete'}
                    />
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

import { useDispatch, useSelector } from 'react-redux';
import {
  AddCardButton,
  CardButton,
  CardButtonContainer,
  CardContainer,
  CardTitle,
  CollectionTitle,
  FilterButton,
  Icon,
  StyledImage,
  StyledLi
} from './ProductList.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { useLocation } from 'react-router-dom';
import { colors, getMaxIndex } from 'services/productList';
import {
  ADD_PRODUCT_PATH,
  LOCAL_DE,
  LOCAL_EN,
  PATCH_OPERATION
} from 'utils/GlobalUtils';
import { selectUser } from 'store/auth/selectors';
import { useProductState } from 'hooks/useProductState';
import { Loader } from 'Components/Global/Loader/Loader';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { lang } from 'lang/lang';
import { useState } from 'react';
import { FilterSelect } from './Components/FilterSelect/FilterSelect';
import { useAuth } from 'hooks/useAuth';

export const ProductList = ({ data, title }) => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const { windowWidth } = useWindowWidth();

  const { local } = useSelector(selectUser);

  const { pathname } = useLocation();

  const [method, setMethod] = useState(PATCH_OPERATION);

  const { isLoading, operation } = useProductState(pathname, method);

  const [filterCaption, setFilterCaption] = useState();

  useState(() => {
    if (isLoggedIn) setFilterCaption(lang[local].onlyActiveCards);
  });
  const index = getMaxIndex(data) + 1;

  const handleArchiveProduct = ({ id, archived }) => {
    setMethod(PATCH_OPERATION);
    dispatch(operation({ id, data: { archived: !archived } }));
  };

  const handleDeleteProduct = () => {};

  const handleFilterButtonClick = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleRadioChange = id => {
    if (id === 'active') setFilterCaption(lang[local].onlyActiveCards);
    if (id === 'archive') setFilterCaption(lang[local].onlyArchivedCards);
    if (id === 'all') setFilterCaption(lang[local].allCards);
  };

  return (
    <>
      {isLoading && <Loader />}
      <CollectionTitle>{title}</CollectionTitle>
      <FilterButton onClick={handleFilterButtonClick} type="button">
        <SvgIcon w={16} h={16} icon={'filter'} />
        <span>{filterCaption}</span>
        <Icon
          w={12}
          h={12}
          icon={'arrow'}
          rotate={isFilterMenuOpen ? '180deg' : 0}
        />
      </FilterButton>
      <FilterSelect
        className={isFilterMenuOpen ? null : 'visually-hidden'}
        onChange={handleRadioChange}
        onToggle={handleFilterButtonClick}
      />
      <AddCardButton
        to={ADD_PRODUCT_PATH}
        state={{ props: { pathname, index } }}
      >
        <SvgIcon
          w={windowWidth > 413 ? 16 : 12}
          h={windowWidth > 413 ? 16 : 12}
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
                  <CardButton
                    onClick={() =>
                      handleArchiveProduct({
                        id: el._id,
                        archived: el.archived
                      })
                    }
                  >
                    <SvgIcon
                      w={windowWidth > 413 ? 24 : 18}
                      h={windowWidth > 413 ? 24 : 18}
                      icon={'archive'}
                    />
                  </CardButton>
                  <CardButton onClick={handleDeleteProduct}>
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

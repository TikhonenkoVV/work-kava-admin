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
import { useEffect, useRef, useState } from 'react';
import { FilterSelect } from './Components/FilterSelect/FilterSelect';
import { setStatusFilter } from 'store/filter/slice';
import { useModal } from 'hooks/useModal';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';

export const ProductList = ({ data, title, checkedRadio }) => {
  const dispatch = useDispatch();

  const selectRef = useRef(null);
  const filterButtontRef = useRef(null);

  const { isModalOpen, closeModal, toggleModal } = useModal('selectFilter');

  useClickOutsideModal(
    [selectRef, filterButtontRef],
    closeModal,
    'selectFilter'
  );

  const windowWidth = useWindowWidth();

  const { local } = useSelector(selectUser);

  const { pathname } = useLocation();

  const { isLoading, operation } = useProductState(pathname, PATCH_OPERATION);

  const [filteredData, setFilteredData] = useState();

  const [filterCaption, setFilterCaption] = useState(null);

  const index = getMaxIndex(data) + 1;

  useEffect(() => {
    setFilterCaption(lang[local].onlyActiveCards);
    setStatusFilter('active');
    setFilteredData(data.filter(el => el.archived === false));
  }, [data, local]);

  const handleArchiveProduct = ({ id, archived }) => {
    dispatch(operation({ id, data: { archived: !archived } }));
  };

  const handleDeleteProduct = () => {};

  const handleRadioChange = id => {
    if (id === 'active') {
      setFilterCaption(lang[local].onlyActiveCards);
      setFilteredData(data.filter(el => el.archived === false));
    }
    if (id === 'archive') {
      setFilterCaption(lang[local].onlyArchivedCards);
      setFilteredData(data.filter(el => el.archived === true));
    }
    if (id === 'all') {
      setFilterCaption(lang[local].allCards);
      setFilteredData(data);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <CollectionTitle>{title}</CollectionTitle>
      <FilterButton onClick={toggleModal} type="button" ref={filterButtontRef}>
        <SvgIcon w={16} h={16} icon={'filter'} />
        <span>{filterCaption || lang[local].onlyActiveCards}</span>
        <Icon
          w={12}
          h={12}
          icon={'arrow'}
          rotate={isModalOpen ? '180deg' : 0}
        />
      </FilterButton>
      <FilterSelect
        className={isModalOpen ? null : 'visually-hidden'}
        onChange={handleRadioChange}
        onToggle={toggleModal}
        local={local}
        checkedRadio={checkedRadio}
        forwardedRef={selectRef}
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
      {filteredData?.length > 0 && (
        <ul>
          {filteredData?.map((el, i) => (
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

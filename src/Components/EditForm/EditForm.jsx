import { useEffect, useRef, useState } from 'react';
import {
  BackLink,
  FormCaption,
  FormTitle,
  ImageWrapper,
  StyledForm
} from './EditForm.styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FormBlock } from './Components/FormBlock/FormBlock';
import { createData, validateFormData } from 'services/addForm';
import { FormBlockFile } from './Components/FormBlockFile/FormBlockFile';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'Components/Global/Loader/Loader';
import { useProductState } from 'hooks/useProductState';
import { lang } from 'lang/lang';
import { selectUser } from 'store/auth/selectors';
import { LOCAL_DE, LOCAL_EN, PATCH_OPERATION } from 'utils/GlobalUtils';
import { Modal } from 'Components/Global/Modal/Modal';
import { useModal } from 'hooks/useModal';
import { StyledButton } from 'styles/components.styled';
import { AskModal } from 'Components/Global/AskModal/AskModal';

export const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { local } = useSelector(selectUser);
  const askModalRef = useRef(null);
  const formRef = useRef(null);
  const { isModalOpen, openModal, closeModal } = useModal('askAdd');
  const location = useLocation();

  const props = useRef(location?.state?.props);

  const pathname = props?.current?.pathname;

  const data = createData(pathname);

  const { isLoading, collection, operation } = useProductState(
    pathname,
    PATCH_OPERATION
  );

  const [state, setState] = useState();
  const [image, setImage] = useState({
    img: null,
    webpImg: null
  });

  useEffect(() => {
    if (id) {
      const i = collection.findIndex(product => product._id === id);
      setProduct(collection[i]);
      setImage({
        img: collection[i].imgURL,
        webpImg: collection[i].webpImgURL
      });
    }
  }, [id, collection]);

  const onChange = e => {
    const { name, value } = e.target;
    const isNumber = Number(value);
    let newValue = value;
    if (!isNaN(value)) newValue = isNumber;
    if (newValue === product[name]) {
      setState(state => {
        const newState = { ...state };
        delete newState[name];
        return newState;
      });
    } else setState({ ...state, [name]: newValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state) {
      return alert('Not all fields are filled in');
    }
    const isValidValues = validateFormData(state);
    if (isValidValues) openModal('askEdit');
    else alert('Not all fields are filled in');
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    const targetName = e.target.name;
    if (file) {
      const reader = new FileReader();
      setState({ ...state, [targetName]: file });
      reader.onloadend = () => {
        setImage({ ...image, [targetName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleActionEdit = prop => {
    dispatch(operation({ id: id, data: state }));
    navigate(prop);
  };

  return (
    <>
      {isLoading && <Loader />}
      <BackLink to={pathname}>{lang[local].baсkToProduktList}</BackLink>
      <FormTitle>
        {local === LOCAL_EN
          ? product?.title_en
          : local === LOCAL_DE
          ? product?.title_de
          : product?.title_ua}
      </FormTitle>
      <FormCaption>{lang[local].editProduct}</FormCaption>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <FormBlock
          data={data.title}
          title={lang[local].nameTitle}
          onChange={onChange}
          product={product}
          type="text"
        />
        <FormBlock
          data={data.price}
          title={lang[local].priceTitle}
          onChange={onChange}
          product={product}
          type="number"
        />
        {data?.ingredients && (
          <FormBlock
            data={data.ingredients}
            title={lang[local].ingredientsTitle}
            onChange={onChange}
            product={product}
            type="text"
          />
        )}
        {data?.weight && (
          <FormBlock
            data={data.weight}
            title={lang[local].weightTitle}
            onChange={onChange}
            product={product}
            type="number"
          />
        )}
        <FormBlockFile onChange={handleImageChange} />
        <ImageWrapper>
          {image?.img && <img src={image?.img} alt={'Raster'} />}
          {image?.webpImg && <img src={image?.webpImg} alt={'Webp'} />}
        </ImageWrapper>
        <StyledButton type="submit">{lang[local].submit}</StyledButton>
      </StyledForm>
      {isModalOpen.askEdit && (
        <Modal
          id="askEdit"
          forwardetRef={askModalRef}
          onClose={() => closeModal('askEdit')}
        >
          <AskModal
            action={handleActionEdit}
            data={pathname}
            onCloseModal={() => closeModal('askEdit')}
            names={{
              cancel: lang[local].cancel,
              action: lang[local].submit
            }}
          />
        </Modal>
      )}
    </>
  );
};

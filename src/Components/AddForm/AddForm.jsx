import { useRef, useState } from 'react';
import {
  FormCaption,
  FormTitle,
  ImageWrapper,
  StyledForm
} from './AddForm.styled';
import { useLocation } from 'react-router-dom';
import { FormBlock } from './Components/FormBlock/FormBlock';
import { createData, newInit, validateFormData } from 'services/addForm';
import { FormBlockFile } from './Components/FormBlockFile/FormBlockFile';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'Components/Global/Loader/Loader';
import { useProductState } from 'hooks/useProductState';
import { lang } from 'lang/lang';
import { selectUser } from 'store/auth/selectors';
import { POST_OPERATION } from 'utils/GlobalUtils';
import { Modal } from 'Components/Global/Modal/Modal';
import { AskModal } from './Components/AskModal/AskModal';
import { useModal } from 'hooks/useModal';
import { getTitle } from 'services/home';
import { StyledButton } from 'styles/components.styled';

export const AddForm = () => {
  const { local } = useSelector(selectUser);

  const dispatch = useDispatch();

  const askModalRef = useRef(null);
  const formRef = useRef(null);
  const refId = askModalRef?.current?.id || 'askModal';
  const { isModalOpen, openModal, closeModal } = useModal(refId);
  const location = useLocation();
  const props = useRef(location?.state?.props);
  const pathname = props?.current?.pathname;
  const title = getTitle(pathname, local);

  const data = createData(pathname);

  const { isLoading } = useProductState(pathname);

  const { operation } = useProductState(pathname, POST_OPERATION);

  const index = props?.current?.index;

  const initialFormData = newInit(data);

  const [state, setState] = useState(initialFormData);
  const [image, setImage] = useState({
    img: null,
    webpImg: null
  });

  const onChange = e => {
    const { name, value } = e.target;
    const isNumber = Number(value);
    let newValue = value;
    if (!isNaN(value)) newValue = isNumber;
    setState({ ...state, [name]: newValue });
  };

  const formReset = () => {
    formRef.current.reset();
    setImage({
      img: null,
      webpImg: null
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidValues = validateFormData(state);
    if (isValidValues) {
      dispatch(operation({ ...state, index: index }));
      console.log(e);

      formReset(e.current);
      openModal();
    } else alert('Not all fields are filled in');
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

  return (
    <>
      {isLoading && <Loader />}
      <FormTitle>{title}</FormTitle>
      <FormCaption>{lang[local].addNewProduct}</FormCaption>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <FormBlock
          data={data.title}
          title={lang[local].nameTitle}
          onChange={onChange}
        />
        <FormBlock
          data={data.price}
          title={lang[local].priceTitle}
          onChange={onChange}
        />
        {data?.ingredients && (
          <FormBlock
            data={data.ingredients}
            title={lang[local].ingredientsTitle}
            onChange={onChange}
          />
        )}
        {data?.weight && (
          <FormBlock
            data={data.weight}
            title={lang[local].weightTitle}
            onChange={onChange}
          />
        )}
        <FormBlockFile onChange={handleImageChange} />
        <ImageWrapper>
          {image?.img && <img src={image?.img} alt={'Raster'} />}
          {image?.webpImg && <img src={image?.webpImg} alt={'Webp'} />}
        </ImageWrapper>
        <StyledButton type="submit">{lang[local].submit}</StyledButton>
      </StyledForm>
      {isModalOpen && !isLoading && (
        <Modal id="askModal" forwardetRef={askModalRef} onClose={closeModal}>
          <AskModal backLink={pathname} onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

import { useRef, useState } from 'react';
import {
  FormTitle,
  ImageWrapper,
  StyledForm,
  SubmitButton
} from './AddForm.styled';
import { useLocation } from 'react-router-dom';
import { FormBlock } from './FormBlock/FormBlock';
import { createData, newInit, validateFormData } from 'services/addForm';
import { FormBlockFile } from './FormBlockFile/FormBlockFile';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'Components/Global/Loader/Loader';
import { useProductState } from 'hooks/useProductState';
import { lang } from 'lang/lang';
import { selectUser } from 'store/auth/selectors';
import { POST_OPERATION } from 'utils/GlobalUtils';

export const AddForm = () => {
  const { local } = useSelector(selectUser);
  const dispatch = useDispatch();

  const location = useLocation();
  const props = useRef(location?.state?.props);
  const pathname = props?.current?.pathname;

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

  const handleSubmit = e => {
    e.preventDefault();
    const isValidValues = validateFormData(state);
    if (isValidValues) {
      dispatch(operation({ ...state, index: index }));
      e.reset();
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
      <FormTitle>{lang[local].addNewProduct}</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">{lang[local].submit}</SubmitButton>
      </StyledForm>
    </>
  );
};

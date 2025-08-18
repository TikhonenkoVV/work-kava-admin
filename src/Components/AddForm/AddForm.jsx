import { useRef, useState } from 'react';
import {
  FormTitle,
  ImageWrapper,
  StyledForm,
  SubmitButton
} from './AddForm.styled';
import { initialState } from 'utils/initials';
import { useLocation } from 'react-router-dom';
import { FormBlock } from './FormBlock/FormBlock';
import { newInit } from 'services/addForm';
import { FormBlockFile } from './FormBlockFile/FormBlockFile';

export const AddForm = () => {
  const location = useLocation();
  const fromLink = useRef(location?.state?.from);

  const init = initialState(fromLink?.current?.pathname);

  const initial = newInit(init);

  const [state, setState] = useState(initialState(initial));
  const [imageFile, setImageFile] = useState({
    img: null,
    img2x: null,
    webpImg: null,
    webpImg2x: null
  });
  const [image, setImage] = useState({
    img: null,
    img2x: null,
    webpImg: null,
    webpImg2x: null
  });

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    const targetName = e.target.name;
    if (file) {
      const reader = new FileReader();
      setImageFile({ ...imageFile, [targetName]: file });
      reader.onloadend = () => {
        setImage({ ...image, [targetName]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <FormTitle>Add new product</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <FormBlock data={init.title} title="Name" onChange={onChange} />
        <FormBlock data={init.price} title="Price" onChange={onChange} />
        {init?.ingredients && (
          <FormBlock
            data={init.ingredients}
            title="Ingredients"
            onChange={onChange}
          />
        )}
        {init?.weight && (
          <FormBlock data={init.weight} title="Weight" onChange={onChange} />
        )}
        <FormBlockFile onChange={handleImageChange} />
        <ImageWrapper>
          {image?.img && <img src={image?.img} alt={'Image_x1'} />}
          {image?.img2x && <img src={image?.img2x} alt={'Image_x2'} />}
          {image?.webpImg && <img src={image?.webpImg} alt={'Webp_image_x1'} />}
          {image?.webpImg2x && (
            <img src={image?.webpImg2x} alt={'Webp_image_x2'} />
          )}
        </ImageWrapper>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </>
  );
};

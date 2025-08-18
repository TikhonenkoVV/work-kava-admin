import { Caption, ChangeFileButton, StyledLabel } from './FormBlockFile.styled';

export const FormBlockFile = ({ onChange }) => {
  const data = ['img', 'img2x', 'webpImg', 'webpImg2x'];
  const title = ['Image', 'Image 2x', 'Webp', 'Webp 2x'];
  return (
    <div>
      {data.map((el, i) => (
        <StyledLabel key={el}>
          <Caption>{title[i]}</Caption>
          <input id={el} type="file" hidden name={el} onChange={onChange} />
          <ChangeFileButton
            type="button"
            onClick={() => document.getElementById(`${el}`).click()}
          >
            Select file
          </ChangeFileButton>
        </StyledLabel>
      ))}
    </div>
  );
};

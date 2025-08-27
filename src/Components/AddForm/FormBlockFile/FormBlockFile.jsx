import { BlockTitle, Caption, StyledLabel } from 'styles/components.styled';
import { ChangeFileButton } from './FormBlockFile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { lang } from 'lang/lang';

export const FormBlockFile = ({ onChange }) => {
  const { local } = useSelector(selectUser);
  const data = ['img', 'webpImg'];
  const title = ['Jpg/Png', 'Webp'];
  return (
    <div>
      <BlockTitle>{lang[local].imagesTitle}</BlockTitle>
      {data.map((el, i) => (
        <StyledLabel key={el}>
          <Caption>{title[i]}</Caption>
          <input id={el} type="file" hidden name={el} onChange={onChange} />
          <ChangeFileButton
            type="button"
            onClick={() => document.getElementById(`${el}`).click()}
          >
            {lang[local].selectFile}
          </ChangeFileButton>
        </StyledLabel>
      ))}
    </div>
  );
};

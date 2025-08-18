import { text } from 'services/formBlockServices';
import {
  BlockTitle,
  Caption,
  StyledInput,
  StyledLabel,
  StyledTextarea
} from './FormBlock.styled';

export const FormBlock = ({ data, title, onChange }) => {
  return (
    <div>
      <BlockTitle>{title}</BlockTitle>
      {data?.map(el => (
        <StyledLabel key={el}>
          <Caption>{text(el, title)}</Caption>
          {data[0] === 'ingredients_en' ? (
            <StyledTextarea onChange={onChange} />
          ) : (
            <StyledInput
              type="text"
              name={el}
              hidden={title === 'Image'}
              onChange={onChange}
            />
          )}
        </StyledLabel>
      ))}
    </div>
  );
};

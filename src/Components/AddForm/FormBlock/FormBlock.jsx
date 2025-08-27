import { text } from 'services/formBlockServices';
import { StyledInput, StyledTextarea } from './FormBlock.styled';
import { BlockTitle, Caption, StyledLabel } from 'styles/components.styled';

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

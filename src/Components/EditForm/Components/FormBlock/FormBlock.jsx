import { text } from 'services/formBlockServices';
import {
  BlockCaption,
  Instruments,
  InstrumentsWrapper,
  Label,
  StyledActionButton,
  StyledInput,
  StyledTextarea
} from './FormBlock.styled';
import { BlockTitle } from 'styles/components.styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';

export const FormBlock = ({ data, title, onChange, product }) => {
  return (
    <>
      {product && (
        <div>
          <BlockTitle>{title}</BlockTitle>
          {data?.map(el => (
            <Label key={el}>
              <BlockCaption>{text(el, title)}</BlockCaption>
              {data.includes('ingredients_en') ? (
                <StyledTextarea
                  name={el}
                  onChange={onChange}
                  defaultValue={product[el]}
                />
              ) : (
                <StyledInput
                  type="text"
                  name={el}
                  onChange={onChange}
                  defaultValue={product[el]}
                />
              )}
              <StyledActionButton>
                <SvgIcon w={18} h={18} icon="undo" />
              </StyledActionButton>
            </Label>
          ))}
        </div>
      )}
    </>
  );
};

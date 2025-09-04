import styled from '@emotion/styled';

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
`;

export const StyledTextarea = styled.textarea`
  outline: unset;
  height: 100px;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  resize: none;
`;

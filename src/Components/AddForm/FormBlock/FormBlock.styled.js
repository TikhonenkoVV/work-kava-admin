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
  background-color: ${({ theme }) => theme.colors.primaryBackground};
`;

export const StyledTextarea = styled.textarea`
  outline: unset;
  color: inherit;
  caret-color: currentColor;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  height: 100px;
  resize: none;
`;

import styled from '@emotion/styled';

export const BlockTitle = styled.h2`
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 120px auto;
  text-align: start;
  gap: 8px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Caption = styled.span`
  display: flex;
  align-items: center;
  height: 32px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
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

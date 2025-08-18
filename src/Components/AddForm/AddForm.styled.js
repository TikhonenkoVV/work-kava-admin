import styled from '@emotion/styled';

export const FormTitle = styled.h1`
  margin-bottom: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubmitButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;

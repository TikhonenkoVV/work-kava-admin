import styled from '@emotion/styled';

export const FormTitle = styled.h1`
  margin-bottom: 16px;
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 20px;
  }
`;

export const FormCaption = styled.h2`
  font-size: 22px;
  margin-bottom: 16px;
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 16px;
`;

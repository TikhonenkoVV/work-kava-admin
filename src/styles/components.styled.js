import styled from '@emotion/styled';

export const StyledHomeSection = styled.section`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Container = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  text-align: center;

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
  }
`;

export const BlockTitle = styled.h2`
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 130px auto;
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

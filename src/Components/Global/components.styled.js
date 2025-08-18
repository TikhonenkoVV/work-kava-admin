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

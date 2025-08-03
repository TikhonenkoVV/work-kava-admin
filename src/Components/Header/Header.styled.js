import styled from '@emotion/styled';
import { Container } from 'Components/Global/components.styled';

export const HeaderStyled = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

export const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const BurgerMenuButton = styled.button`
  width: 32px;
  height: 32px;
`;

import styled from '@emotion/styled';
import { StyledButton } from 'styles/components.styled';

export const AskModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid white;
  border-radius: 10px;
`;

export const AskModalTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
`;

export const AskModalButton = styled(StyledButton)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

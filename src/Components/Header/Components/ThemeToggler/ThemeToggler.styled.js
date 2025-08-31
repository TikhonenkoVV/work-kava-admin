import styled from '@emotion/styled';

export const StyledThemeButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 55px;
  height: 30px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.themeTogglerBackground};
  transition: background-color ${({ theme }) => theme.baseTransition},
    color ${({ theme }) => theme.baseTransition};
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryText};
    transition: background-color ${({ theme }) => theme.baseTransition},
      transform ${({ theme }) => theme.baseTransition};
  }
  &.light::before {
    transform: translateX(25px);
  }
  & svg {
    fill: currentColor;
  }
`;

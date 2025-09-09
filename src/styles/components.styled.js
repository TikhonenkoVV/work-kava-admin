import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHomeSection = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
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
  font-size: 18px;
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

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};

  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    width: 30px;
    height: 30px;
  }
`;

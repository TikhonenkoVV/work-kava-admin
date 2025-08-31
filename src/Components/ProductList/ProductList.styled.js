import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CollectionTitle = styled.h1`
  margin-bottom: 16px;
`;

export const StyledList = styled.ul``;

export const StyledLi = styled.li`
  display: flex;
  column-gap: 16px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    column-gap: 12px;
    padding-left: 12px;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 16px;
  }
`;

export const AddCardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  margin-bottom: 16px;
  padding-left: 10px;
  column-gap: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
`;

export const CardButton = styled(Link)`
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

export const CardButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    column-gap: 12px;
  }
`;

export const StyledImage = styled.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ color }) => color};
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    width: 100px;
  }
`;

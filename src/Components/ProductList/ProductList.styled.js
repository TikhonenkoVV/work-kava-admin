import styled from '@emotion/styled';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';
import { StyledButton } from 'styles/components.styled';

export const CollectionTitle = styled.h1`
  margin-bottom: 16px;
`;

export const Icon = styled(SvgIcon)`
  rotate: ${({ rotate }) => rotate};
`;

export const FilterButton = styled(StyledButton)`
  justify-content: flex-start;
  column-gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  & span {
    margin-right: auto;
  }
`;

export const AddCardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 10px;
  column-gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonsBackground};
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

export const ImgWrapper = styled.div`
  position: relative;
  width: 120px;
  aspect-ratio: 3/2;
  flex-shrink: 0;
  &.archived {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #40404080;
      z-index: 1;
    }
  }
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    width: 100px;
  }
`;

export const StyledImage = styled.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: auto;
  @media screen and (${({ theme }) => theme.devices.lessMobile}) {
    font-size: 16px;
  }
`;

export const CardButton = styled.button`
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

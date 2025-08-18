import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const CollectionTitle = styled.h1`
  margin-bottom: 24px;
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
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const CardContainer = styled.div`
  /* display: flex; */
  width: 100%;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  line-height: 1;
  margin-bottom: 16px;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  column-gap: 16px;
  justify-content: flex-end;
`;

export const CardButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
`;

export const StyledImage = styled.img`
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: cover;
  /* border-radius: 50%; */
  background-color: ${({ color }) => color};
`;

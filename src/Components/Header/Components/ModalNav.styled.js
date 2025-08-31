import styled from '@emotion/styled';
import { Backdrop } from 'Components/Global/Modal/Modal.styled';

export const BackdropHeader = styled(Backdrop)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 180px 0 50px 0;
  background-color: ${({ theme }) => theme.colors.primaryBackground};

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -45px;

    width: 236px;
    height: 178px;

    background-image: url('https://res.cloudinary.com/dm3dq4juf/image/upload/v1697531015/WorkKava/dcors/coffee_bean_7E7262.svg');
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 10px;
`;

export const SetButtonWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 16px;
  margin-top: auto;
`;

export const SetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

export const UserBtn = styled(SetBtn)`
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 4px;
  transition: fill ${({ theme }) => theme.baseTransition},
    color ${({ theme }) => theme.baseTransition};
  &:hover {
    fill: ${({ theme }) => theme.colors.whiteButtonHover};
    color: ${({ theme }) => theme.colors.whiteButtonHover};
  }
`;

export const LangBtn = styled(SetBtn)`
  transition: color ${props => props.theme.baseTransition};
  &:hover {
    border-color: ${props => props.theme.colors.whiteButtonHover};
    color: ${props => props.theme.colors.whiteButtonHover};
  }
  & img {
    pointer-events: none;
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.theme.colors.white};
    border-radius: 4px;
    /* border-radius: 4px; */
  }
  & span {
    pointer-events: none;
  }
`;

import styled from '@emotion/styled';

export const CardSelect = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -1px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primaryText};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  &.visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  gap: 10px;
`;

export const CheckBox = styled.span`
  position: relative;
  display: block;
  width: 14px;
  height: 14px;
  background-color: #ffffff;
  border-radius: 50%;
  &.active {
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.buttonsBackground};
      border-radius: 50%;
    }
  }
`;

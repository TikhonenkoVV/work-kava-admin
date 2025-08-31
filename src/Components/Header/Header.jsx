import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  BurgerMenuButton,
  ContainerStyled,
  HeaderStyled,
  SetButtonsWrapper
} from './Header.styled';
import { useState } from 'react';
import { ModalNav } from './Components/ModalNav';
import { ThemeToggler } from './Components/ThemeToggler/ThemeToggler';

export const Header = () => {
  const [modalHeader, setModalHeader] = useState(false);

  const handleOpenModal = () => {
    setModalHeader(true);
  };

  const handleClosedModal = () => {
    setModalHeader(false);
  };

  if (modalHeader) {
    return <ModalNav action={handleClosedModal} />;
  }

  return (
    <HeaderStyled>
      <ContainerStyled>
        <SvgIcon w={150} h={32} icon={'logo'} style={{ fill: 'inherit' }} />
        <SetButtonsWrapper>
          <ThemeToggler />
          <BurgerMenuButton
            type="button"
            onClick={handleOpenModal}
            aria-label="menu"
          >
            <SvgIcon
              w={32}
              h={32}
              icon={'burger'}
              style={{ fill: 'inherit' }}
            />
          </BurgerMenuButton>
        </SetButtonsWrapper>
      </ContainerStyled>
    </HeaderStyled>
  );
};

import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  BurgerMenuButton,
  ContainerStyled,
  HeaderStyled
} from './Header.styled';
import { useState } from 'react';
import { ModalNav } from './Components/ModalNav';

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
        <SvgIcon w={150} h={32} icon={'logo'} style={{ fill: '#000' }} />
        <BurgerMenuButton
          type="button"
          onClick={handleOpenModal}
          aria-label="menu"
        >
          <SvgIcon w={32} h={32} icon={'burger'} style={{ fill: '#000' }} />
        </BurgerMenuButton>
      </ContainerStyled>
    </HeaderStyled>
  );
};

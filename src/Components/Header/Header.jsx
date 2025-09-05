import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  BurgerMenuButton,
  ContainerStyled,
  HeaderStyled,
  SetButtonsWrapper
} from './Header.styled';
import { ModalNav } from './Components/ModalNav/ModalNav';
import { ThemeToggler } from './Components/ThemeToggler/ThemeToggler';
import { useModal } from 'hooks/useModal';

export const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal('mobileNav');

  return (
    <>
      <HeaderStyled>
        <ContainerStyled>
          <SvgIcon w={150} h={32} icon={'logo'} style={{ fill: 'inherit' }} />
          <SetButtonsWrapper>
            <ThemeToggler />
            <BurgerMenuButton
              type="button"
              onClick={() => openModal('mobileNav')}
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
      {isModalOpen.mobileNav && <ModalNav action={closeModal} />}
    </>
  );
};

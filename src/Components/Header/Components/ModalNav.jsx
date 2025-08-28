import {
  BackdropHeader,
  CloseButton,
  LangBtn,
  SetButtonWrapper,
  UserBtn
} from './ModalNav.styled';
import { Navigation } from './Navigation';
import { useEffect, useRef, useState } from 'react';
import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import {
  FLAG_DE_URL,
  FLAG_UA_URL,
  FLAG_UK_URL,
  LOCAL_DE,
  LOCAL_EN,
  PATCH_OPERATION
} from 'utils/GlobalUtils';
import { useModal } from 'hooks/useModal';
import { useClickOutsideModal } from 'hooks/useClickOutsideModal';
import { LangMenu } from './LangMenu';
import { useProductState } from 'hooks/useProductState';
import { Loader } from 'Components/Global/Loader/Loader';

export const ModalNav = ({ action }) => {
  const { local } = useSelector(selectUser);
  const { isLoading, operation } = useProductState(null, PATCH_OPERATION);
  const dispatch = useDispatch();

  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);
  const [refId, setRefId] = useState(null);

  useEffect(() => {
    setRefId(langMenuRef.current.id);
  }, []);

  const { isModalOpen, closeModal, toggleModal } = useModal(refId);

  useClickOutsideModal([langMenuRef, langButtonRef], closeModal);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleLangClick = e => {
    closeModal();
    dispatch(operation({ local: e.currentTarget.id }));
  };

  return (
    <BackdropHeader>
      {isLoading && <Loader />}
      <CloseButton type="button" onClick={action} aria-label="close">
        <SvgIcon w={32} h={32} icon="close" />
      </CloseButton>
      <Navigation action={action} />
      <SetButtonWrapper>
        <LangMenu
          isModalOpen={isModalOpen}
          forwardedRef={langMenuRef}
          handleCklick={handleLangClick}
        />
        <LangBtn type="button" onClick={toggleModal} ref={langButtonRef}>
          <img
            width={40}
            height={40}
            src={
              local === LOCAL_EN
                ? FLAG_UK_URL
                : local === LOCAL_DE
                ? FLAG_DE_URL
                : FLAG_UA_URL
            }
            alt="flag"
          />
        </LangBtn>
        <UserBtn type="button">
          <SvgIcon w={40} h={40} icon={'avatar'} aria-label="icon user" />
        </UserBtn>
      </SetButtonWrapper>
    </BackdropHeader>
  );
};

import { lang } from 'lang/lang';
import {
  AskModalButton,
  AskModalTitle,
  AskModalWrapper
} from './AskModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

export const AskModal = ({ action, onCloseModal, data, names }) => {
  const { local } = useSelector(selectUser);

  const onAction = () => {
    onCloseModal();
    if (action) action(data);
  };

  const onCencel = () => {
    onCloseModal();
  };

  return (
    <AskModalWrapper>
      <AskModalTitle>{lang[local].selectAnAction}</AskModalTitle>
      <AskModalButton onClick={onCencel}>{names.cancel}</AskModalButton>
      <AskModalButton onClick={onAction}>{names.action}</AskModalButton>
    </AskModalWrapper>
  );
};

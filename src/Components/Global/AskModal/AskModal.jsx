import { lang } from 'lang/lang';
import {
  AskModalButton,
  AskModalTitle,
  AskModalWrapper
} from './AskModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { useNavigate } from 'react-router-dom';

export const AskModal = ({ action, backLink, onCloseModal, data, names }) => {
  const navigate = useNavigate();
  const { local } = useSelector(selectUser);
  console.log('Data:', action);

  const onAction = () => {
    onCloseModal('askModal');
    if (backLink) navigate(backLink);
    if (action) action(data);
  };

  const onCencel = () => {
    onCloseModal('askModal');
  };

  return (
    <AskModalWrapper>
      <AskModalTitle>{lang[local].selectAnAction}</AskModalTitle>
      <AskModalButton onClick={onCencel}>{names.cancel}</AskModalButton>
      <AskModalButton onClick={onAction}>{names.action}</AskModalButton>
    </AskModalWrapper>
  );
};

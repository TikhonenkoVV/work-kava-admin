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

  const handleCencelClick = () => {
    onCloseModal('askModal');
    if (backLink) navigate(backLink);
    if (action) action({ id: data.id, archived: data.archived });
  };

  const handleRepeatClick = () => {
    onCloseModal('askModal');
  };

  return (
    <AskModalWrapper>
      <AskModalTitle>{lang[local].selectAnAction}</AskModalTitle>
      <AskModalButton onClick={handleRepeatClick}>
        {names.cancel}
      </AskModalButton>
      <AskModalButton onClick={handleCencelClick}>
        {names.action}
      </AskModalButton>
    </AskModalWrapper>
  );
};

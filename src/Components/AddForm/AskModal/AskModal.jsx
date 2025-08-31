import { lang } from 'lang/lang';
import { AskModalTitle, AskModalWrapper } from './AskModal.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { StyledButton } from 'styles/components.styled';
import { useNavigate } from 'react-router-dom';

export const AskModal = ({ backLink, onCloseModal }) => {
  const navigate = useNavigate();
  const { local } = useSelector(selectUser);

  const handleCencelClick = () => {
    onCloseModal();
    navigate(backLink);
  };

  const handleRepeatClick = () => {
    onCloseModal();
  };

  return (
    <AskModalWrapper>
      <AskModalTitle>{lang[local].selectAnAction}</AskModalTitle>
      <StyledButton onClick={handleRepeatClick}>
        {lang[local].addNewProduct}
      </StyledButton>
      <StyledButton onClick={handleCencelClick}>
        {lang[local].baсkToProduktList}
      </StyledButton>
    </AskModalWrapper>
  );
};

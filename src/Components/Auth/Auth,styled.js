import styled from '@emotion/styled';
import background from '../../images/auth-background-250.jpg';

export const StyledSectoion = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${background}');
  background-repeat: repeat;
`;

export const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  border: 1px solid #000;
  background-color: #fff;
`;

export const AuthLogo = styled.div`
  width: 190px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
`;

export const AuthCaption = styled.h1`
  margin-bottom: 16px;
  text-align: center;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const AuthLabel = styled.label`
  position: relative;
  width: 100%;
`;
export const AuthInput = styled.input`
  width: 100%;
  height: 40px;
  outline: unset;
  border: 1px solid #000;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  &[name='password'] {
    padding-right: 40px;
  }
`;

export const ButtonShowPassword = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  display: block;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #000;
`;

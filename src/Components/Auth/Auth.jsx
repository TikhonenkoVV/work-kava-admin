import { SvgIcon } from 'Components/Global/SvgIcon/SvgIcon';
import {
  AuthCaption,
  AuthForm,
  AuthFormWrapper,
  AuthInput,
  AuthLabel,
  AuthLogo,
  ButtonShowPassword,
  StyledSectoion,
  SubmitButton,
  Subtitle
} from './Auth,styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'store/auth/operations';
import { useState } from 'react';
import { selectTheme } from 'store/auth/selectors';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState({ showPass: false });
  const currTheme = useSelector(selectTheme);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value
      })
    );
    form.reset();
  };

  const hendleShowPass = () => {
    setShowPass(!showPass);
  };

  console.log(currTheme);

  return (
    <StyledSectoion>
      <AuthFormWrapper>
        <AuthLogo>
          <SvgIcon w={190} h={41} icon={'logo'} />
          <Subtitle>content managment</Subtitle>
        </AuthLogo>
        <AuthCaption>Log in</AuthCaption>
        <AuthForm onSubmit={onSubmit} autoComplete="false">
          <AuthLabel>
            E-Mail
            <AuthInput name="email" type="text" />
          </AuthLabel>
          <AuthLabel>
            Password
            <AuthInput name="password" type={showPass ? 'password' : 'text'} />
            <ButtonShowPassword onClick={hendleShowPass} type="button">
              <SvgIcon
                w={24}
                h={24}
                icon={showPass ? 'eye-denied' : 'eye-allow'}
              />
            </ButtonShowPassword>
          </AuthLabel>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AuthForm>
      </AuthFormWrapper>
    </StyledSectoion>
  );
};

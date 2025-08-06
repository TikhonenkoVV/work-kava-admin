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
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';
import { useState } from 'react';

export const Auth = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState({ showPass: false });

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target);

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

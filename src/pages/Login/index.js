// Libs
import React from 'react';
import { useForm } from 'react-hook-form';

// Styles
import EmailIcon from '@material-ui/icons/Email';
import { Container, Box, TextBottom } from './styles';

// Components
import { InputIcon, InputPassword } from '../../components/Input';
import Button from '../../components/Button';

// Images
import LogoEdu from '../../assets/images/logo.png';

export default function Login() {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = e => {
    console.log(e);
  };

  return (
    <Container>
      <Box>
        <img src={LogoEdu} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputIcon
            nome="email"
            id="email"
            control={control}
            error={errors.email ? errors.email.message : ''}
            label="Email"
            icon={<EmailIcon className="icon-input" />}
            type="text"
          />
          <InputPassword
            nome="senha"
            id="senha"
            control={control}
            error={errors.senha ? errors.senha.message : ''}
            label="Senha"
            type="password"
          />
          <Button estilo="fill">Login</Button>
          <Button estilo="not-fill">Esqueci a senha</Button>
        </form>
      </Box>
      <TextBottom>© 2020 EduEdu, todos os direitos reservados</TextBottom>
    </Container>
  );
}

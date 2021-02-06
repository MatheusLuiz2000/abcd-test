// Libs
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// Styles
import EmailIcon from '@material-ui/icons/Email';
import { useHistory } from 'react-router-dom';
import { Container, Box, TextBottom } from './styles';

// Components
import { InputIcon, InputPassword } from '../../components/Input';
import Button from '../../components/Button';

// Images
import LogoEdu from '../../assets/images/logo.png';

import fireBase from '../../config/fireBase';

import fireBaseCodes from '../../util/fireBaseCodes';

export default function Login() {
  const history = useHistory();

  const LoginSchema = Yup.object().shape({
    email: Yup.string('O E-mail é obrigatório')
      .required('O E-mail é obrigatório')
      .email('O E-mail deve ser válido'),
    senha: Yup.string('A senha é obrigatória').required(
      'A senha é obrigatória'
    ),
  });

  const { control, handleSubmit, errors } = useForm({
    validationSchema: LoginSchema,
  });

  const onSubmit = async e => {
    try {
      await fireBase.auth().signInWithEmailAndPassword(e.email, e.senha);
    } catch (error) {
      return toast.error(fireBaseCodes(error.code), {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    toast.success('Login Efetuado com sucesso', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setTimeout(() => {
      return history.push('/alunos');
    }, 2000);
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
          <Button estilo="fill" type="submit">
            Login
          </Button>
          <Button estilo="not-fill">Esqueci a senha</Button>
        </form>
      </Box>
      <TextBottom>© 2020 EduEdu, todos os direitos reservados</TextBottom>
    </Container>
  );
}

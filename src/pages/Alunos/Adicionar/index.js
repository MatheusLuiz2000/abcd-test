import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputRange from 'react-input-range';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import 'react-input-range/lib/css/index.css';
import Modal from '@material-ui/core/Modal';
import ContainerContent from '../../../components/ContainerContent';
import {
  Container,
  Box,
  Aceite,
  ContainerButtonSubmit,
  AnoEscolar,
  ContainerModal,
} from './styles';

import Avatar1 from '../../../assets/images/carmen.png';
import Avatar2 from '../../../assets/images/juju.png';
import Avatar3 from '../../../assets/images/nina.png';
import Avatar4 from '../../../assets/images/sr-goiaba.png';
import Avatar5 from '../../../assets/images/zig.png';

import IconPerson from '../../../assets/icons/icon_user.png';
import IconColegio from '../../../assets/icons/icon_hat.png';
import AnoEscolarImage from '../../../assets/images/ano_escolar_image.png';

import Button from '../../../components/Button';
import fireBase from '../../../config/fireBase';
import 'firebase/firestore';

import { InputIcon } from '../../../components/Input';

export default function Adicionar() {
  const history = useHistory();
  const [anoEscolar, setAnoEscolar] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarPrincipal, setAvatarPrincipal] = useState(Avatar1);

  const onSubmit = async e => {
    const db = fireBase.firestore();

    const data = await db.collection('alunos').add({
      nome: e.nome.toLowerCase(),
      escola: e.escola.toLowerCase(),
      anoEscola: anoEscolar === 0 ? 'pre' : anoEscolar.toString(),
      foto: avatarPrincipal,
    });

    if (data) {
      toast.success('Aluno criado com sucesso!', {
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
    }
  };

  const AdicionarAlunoSchema = Yup.object().shape({
    nome: Yup.string('O nome deve ser obrigatório').required(
      'O E-mail é obrigatório'
    ),
    escola: Yup.string('A escola deve ser obrigatória').required(
      'A escola é obrigatória'
    ),
  });

  const { control, handleSubmit, errors } = useForm({
    validationSchema: AdicionarAlunoSchema,
  });

  return (
    <ContainerContent>
      <Container>
        <Box>
          <div className="avatar-container">
            <img src={avatarPrincipal} alt="User 1" className="avatar" />
            <Button
              onClick={() => {
                setModalOpen(true);
              }}
              estilo="not-fill"
            >
              Mudar Avatar
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputIcon
              nome="nome"
              id="nome"
              iconDirection="left"
              control={control}
              error={errors.nome ? errors.nome.message : ''}
              label="Nome Completo"
              icon={<img src={IconPerson} />}
              type="text"
              iconDirection="left"
            />
            <InputIcon
              nome="escola"
              id="escola"
              iconDirection="left"
              control={control}
              error={errors.escola ? errors.escola.message : ''}
              label="Escola"
              icon={<img src={IconColegio} />}
              type="text"
            />
            <AnoEscolar>
              <img src={AnoEscolarImage} alt="Ano Escolar" />
              <div className="escolha">
                <h3>Ano Escolar</h3>
                <InputRange
                  className="input-range-custom"
                  maxValue={3}
                  minValue={0}
                  formatLabel={value => {
                    return value === 0 ? 'Pre' : value;
                  }}
                  value={anoEscolar}
                  onChange={value => setAnoEscolar(value)}
                  onChangeComplete={value => setAnoEscolar(value)}
                />
                <p>
                  <b>Pré I:</b> Aluno completou 4 anos antes do dia 31 de março
                  de 2020.
                </p>
                <p>
                  <b>Pré II:</b> Aluno completou 5 anos antes do dia 31 de março
                  de 2020.
                </p>
              </div>
            </AnoEscolar>
            <Aceite>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="html"
                  onChange={e => {
                    if (e.target.checked) {
                      return setDisabled(false);
                    }

                    return setDisabled(true);
                  }}
                />
                <label htmlFor="html" />
              </div>
              <p>
                Eu autorizo o EduEdu a coletar e processar os dados do meu
                filho(a) conforme a política de privacidade.
              </p>
            </Aceite>
            <ContainerButtonSubmit>
              <Button estilo="fill" type="submit" disabled={disabled}>
                Adicionar Aluno
              </Button>
            </ContainerButtonSubmit>
          </form>
        </Box>
      </Container>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <>
          <ContainerModal>
            <div className="title">
              <h2>Escolha um dos Avatares</h2>
            </div>
            <div className="avatar">
              <img src={Avatar1} alt="Avatar escolhido" />
              <Button
                estilo="fill"
                onClick={() => {
                  setAvatarPrincipal(Avatar1);
                  setModalOpen(false);
                }}
              >
                Escolher esse
              </Button>
            </div>
            <div className="avatar">
              <img src={Avatar2} alt="Avatar escolhido" />
              <Button
                estilo="fill"
                onClick={() => {
                  setAvatarPrincipal(Avatar2);
                  setModalOpen(false);
                }}
              >
                Escolher esse
              </Button>
            </div>
            <div className="avatar">
              <img src={Avatar3} alt="Avatar escolhido" />
              <Button
                estilo="fill"
                onClick={() => {
                  setAvatarPrincipal(Avatar3);
                  setModalOpen(false);
                }}
              >
                Escolher esse
              </Button>
            </div>
            <div className="avatar">
              <img src={Avatar4} alt="Avatar escolhido" />
              <Button
                estilo="fill"
                onClick={() => {
                  setAvatarPrincipal(Avatar4);
                  setModalOpen(false);
                }}
              >
                Escolher esse
              </Button>
            </div>
            <div className="avatar">
              <img src={Avatar5} alt="Avatar escolhido" />
              <Button
                estilo="fill"
                onClick={() => {
                  setAvatarPrincipal(Avatar5);
                  setModalOpen(false);
                }}
              >
                Escolher esse
              </Button>
            </div>
          </ContainerModal>
        </>
      </Modal>
    </ContainerContent>
  );
}

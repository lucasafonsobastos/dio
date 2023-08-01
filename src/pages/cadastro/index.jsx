import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";

import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
//import { Link } from "react-router-dom";

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { 
  Container, 
  Column, 
  Title, 
  Wrapper, 
  TitleCadastro, 
  SubtitleCadastro, 
  Text,
  CriarText,
  Row,
} from './styles';
import { useForm } from 'react-hook-form';

const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {

    try {
      // Envia os dados do novo usuário para a rota no servidor
      const { data } = await api.post('/users', formData);
      console.log('Usuário adicionado com sucesso!', data);
      alert('Usuário cadastrado com sucesso');
      navigate('/feed');

    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. </Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleCadastro>Comece agora grátis</TitleCadastro>
          <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder='Nome completo' leftIcon={<MdPerson />} name="nome" control={control}/>
              
              <Input placeholder='e-mail' leftIcon={<MdEmail />} name="email" control={control}/>
              
              <Input placeholder='password' leftIcon={<MdLock />} name="senha" control={control}/>

              <Button title="Criar minha conta" variant="secondary" type="submit"/>
            </form>
            <Row>
            <SubtitleCadastro>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO. </SubtitleCadastro>
            </Row>
            <Row>
              <Text>já tenho conta.</Text> <CriarText> Fazer Login</CriarText>
            </Row>
            
          </Wrapper>
        </Column>
      </Container>
    </div>
  )
}

export { Cadastro }; 
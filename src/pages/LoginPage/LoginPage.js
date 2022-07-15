import React from 'react'
import {useNavigate } from 'react-router-dom'
import { Controller, field, useForm } from 'react-hook-form';
import { Banner, Container, Content } from './styled';
import { useAuth } from '../../context/autho'; 


const LoginPage = () =>{

  const {login } = useAuth();
  const { controle, sSubmit} = useForm();

  const navigate = useNavigate(); 

  const UsuarioLogin = async (field) => {  
    const { email, password } = data;
    const whitelabelId = '77';

    await login ({ email, password, whitelabelId})

    navigate('/beneficios');
  }

    return(
        <Container>
            <Banner>
                <h1> Atraindo e Fidelizando Clientes</h1>
                <h2> Crie o Clube de beneficios para a sua empresa</h2>
            </Banner>
        <Content>
            <form onSubmit={sSubmit(UsuarioLogin)}>
                <h1> Insira o seu Login </h1>
                <Controller>
                controle={controle}
                render={({field})} = {(
                   <input type = "email" placeholder='Email' {...field}/>
                )}
                name= "password"
                </Controller>
               
            </form>
        </Content>
        </Container>

    )
}


export default LoginPage
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container , Typography } from '@mui/material';
import 'fontsource-roboto'

// componente utilizando class component
class App extends Component{
  render(){
    return (
      
        <Container className='container'
        component='article'
        maxWidth="sm">
        <Typography 
        variant='h3'
        align='center'
        component='h1'
        >
          Formulario de cadastro
          
       </Typography>
        <FormularioCadastro
        onSubmit={aoEnviar}
        validarCpf={validarCpf}
        />

       
        </Container>

        )
  }
}

function aoEnviar(dados){
 console.log(dados);


}

function validarCpf(cpf){
  if(cpf.length <= 11){
    return { valido:false, texto:'CPF deve ter 11 digitos!'}
  }else{
  return { valido:true, texto:''}
}
}

export default App;

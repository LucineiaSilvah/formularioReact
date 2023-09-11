import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const FormularioCadastro = ({onSubmit, validarCpf}) => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{
    valido: true, texto:''
  }})

  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({nome, sobreNome,cpf, promocoes,novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobreNome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
      />
      <TextField
       onBlur={(event =>{
        const ehValido = validarCpf(event.target.value);
        setErros({cpf:ehValido})
       })}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        color="success"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        checked={promocoes}
        control={
          <Checkbox
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            color="success"
       
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        checked={novidades}
        control={
          <Checkbox
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="success"
            
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="success" type="submit">
        Cadastrar
      </Button>
    </form>
     <ul>
     <li>{nome}</li>
     <li>{sobreNome}</li>
     <li>{cpf}</li>
 
   </ul>
   </>
  );
};

export default FormularioCadastro;

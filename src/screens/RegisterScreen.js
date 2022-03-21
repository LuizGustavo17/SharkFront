import Box from '../components/box.js';
import React from 'react'
import focus from '../assets/images/focus.png';
import {Fragment, useState} from 'react';
import Styled from 'styled-components';
import {Navigate} from 'react-router-dom';
import '../styles/Mystyles.css' //era pra este css estar so aqui, mas esta indo para as pagina de login e user tambem.
const Box1=Styled(Box)`
margin-top:15rem;
margin-left:45rem;
margin-right:2rem;
border-width: 5px;
border-color: #D3D3D3;`;
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setredirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  if(redirectToLogin){
    return(<Navigate to={{pathname: "/login"}}/>)
  }
  return(
  <Fragment>
    <head class="body_is_with_gradient"></head>
    <body class="body_is_with_gradient">
    <style type="../styles/Register.css"></style>
<Box1 height='30rem' width='25rem' color='#CBCBCB'>
    <form>
      <h1 id='h1_form'>Cadastrar</h1>
  <label id='first_label'>
    Nome :       <br></br>      <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
  </label>
  <br></br><br></br>
  <label>
    Email:      <br></br>       <input type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
  </label>
  <br></br><br></br>
  <label>
    Senha:      <br></br>       <input type="password" name="senha" value={password} onChange={e=>setPassword(e.target.value)}/>
  </label>
  <input id='button_submit' type="submit" value="Registrar" onClick={e => setredirectToLogin(true)}/>
  {error && <p>Email ou senha incorretos</p>}
</form>
<img src={focus}/>

  </Box1>
  </body>
  </Fragment >
)
}

export default RegisterScreen;
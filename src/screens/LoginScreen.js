import Box from '../components/box.js';
import H1_form from '../components/H1form.js';
import Formlabel from '../components/Formlabel.js';
import FormInput from '../components/FormInput.js';
import Button_submit from '../components/Button_submit';
import Bodygradient from '../components/Bodygradient.js';
import Imgfocus from '../components/Imgfocus'
import React from 'react';
import focus from '../assets/images/focus.png';
import { useState} from 'react';
import Styled from 'styled-components';
import {Navigate} from 'react-router-dom';
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
    <Bodygradient>
<Box1 height='30rem' width='25rem' color='#CBCBCB'>
    <form>
      <H1_form>Login</H1_form>
  <br></br><br></br>
  <Formlabel>
    Email:      <br></br>       <FormInput type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    Senha:      <br></br>       <FormInput type="password" name="senha" value={password} onChange={e=>setPassword(e.target.value)}/>
  </Formlabel>
  <Button_submit type="submit" value="Login" onClick={e => setredirectToLogin(true)}>Login</Button_submit>
  {error && <p>Email ou senha incorretos</p>}
</form>
<Imgfocus marginleft="4rem" margintop="1rem" src={focus}/>

  </Box1>
  </Bodygradient>
)
}

export default RegisterScreen;
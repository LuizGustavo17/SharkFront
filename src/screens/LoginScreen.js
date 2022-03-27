import Box from '../components/FormComponents/box.js';
import H1_form from '../components/FormComponents/H1form.js';
import Formlabel from '../components/FormComponents/Formlabel.js';
import FormInput from '../components/FormComponents/FormInput.js';
import Button_submit from '../components/FormComponents/Button_submit';
import Bodygradient from '../components/FormComponents/Bodygradient.js';
import Formspan from '../components/FormComponents/Formspan';
import Imgfocus from '../components/FormComponents/Imgfocus';
import Paragraphform from '../components/FormComponents/Paragraphform';
import React from 'react';
import focus from '../assets/images/focus.png';
import { useState} from 'react';
import Styled from 'styled-components';
import {Navigate} from 'react-router-dom';
import UserService from '../services/users.js';

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
  const [redirectToUserActions, setredirectToUserActions] = useState(false);
  const [redirectToRegister, setredirectToRegister] = useState(false);
  const [error, setError] = useState(false);
  function Handleparagraph(){
    setredirectToRegister(true);
  }
  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try{
      const user = await UserService.login({email:email, password: password});
      setredirectToUserActions(true);
    }
    catch(error){
      setError(true);
    }
      
  }
  if(redirectToUserActions){
    return(<Navigate to={{pathname: "/UserActions"}}/>)
  }
  if(redirectToRegister){
    return(<Navigate to={{pathname: "/Register"}}/>)
  }
  return(
    <Bodygradient>
<Box1 height='33rem' width='25rem' color='#CBCBCB'>
    <form onSubmit={HandleSubmit}>
      <H1_form>Login</H1_form>
  <br></br><br></br>
  <Formlabel>
    Email:      <br></br>       <FormInput type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    Senha:      <br></br>       <FormInput type="password" name="senha" value={password} onChange={e=>setPassword(e.target.value)}/>
  </Formlabel>
  <Button_submit type="submit" value="Login" >Login</Button_submit>
  <br></br> <br></br>
  {error && <Formspan>    *Email ou senha inválidos    </Formspan>}
</form>
<Imgfocus marginleft="4rem" margintop="1rem" src={focus}/>
<br></br>
<Paragraphform onClick={Handleparagraph}> Cadastrar </Paragraphform>
  </Box1>
  </Bodygradient>
)
}

export default RegisterScreen;
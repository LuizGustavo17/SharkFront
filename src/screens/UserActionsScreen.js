import React, {Fragment, useState, useEffect} from 'react';
import Bodygradient from '../components/FormComponents/Bodygradient';
import SectionPlantao from '../components/UserActionsComponents/SectionPlantao';
import Card from '../components/UserActionsComponents/Card';
import Imgcard from '../components/UserActionsComponents/Imgcard';
import Container from '../components/UserActionsComponents/Container';
import H1High from '../components/UserActionsComponents/H1High';
import Buttonshark from '../components/UserActionsComponents/Buttonshark';
import Plogout from '../components/UserActionsComponents/Plogout';
import Circle from '../components/UserActionsComponents/Circle';
import SharkinService from '../services/sharkin';
import UsersService from '../services/users';
import requires from '../components/UserActionsComponents/Requires';
import {Navigate} from 'react-router-dom';


function UserActionsScreen(){
    const [sharkin, setSharkin] = useState([]);
    const [plantao, setPlantao] = useState(localStorage.getItem('Emplantao'));
    const [messagebutton, setMessageButton] = useState();
    if(plantao==='false'){
        setMessageButton()
    }
    function Handleclick(){
        if(plantao==='false'){
            SharkinService.sharkin();  
            setPlantao(true); 
        } else {
            SharkinService.sharkout();
            setPlantao(false);
        }
    }
    console.log(localStorage.getItem('token'));
    useEffect(() =>{
        const fetchData = async () => {
            const response = await SharkinService.index();
            setSharkin(response.data);
        }
        
        fetchData().catch(console.error).then();
    }, [])
    useEffect(   () => {    
        console.log('teste'); 
        localStorage.setItem('Emplantao', plantao);
        if(plantao==='false'){
            setMessageButton('Sharkin');
         } else {
            setMessageButton('Sharkout');
         }
       },   [plantao], );
    return(
        <Fragment>
        <Bodygradient>
            <Plogout>logout</Plogout>
            <Circle></Circle>
            <H1High>Sharkins da Semana</H1High>
            <SectionPlantao>
                
                    {
                        sharkin.map((index) => {
                            const Avatar = requires(index.User_Id.matricula);
                            return(
                            <Card>
                            <Imgcard src={Avatar}/>
                            <Container>
                            <h4><b>{index.User_Id.name}</b></h4>
                            <p><b>Sharkin:</b>{index.HourSharkin}</p>
                            <p><b>Sharkout:</b>{index.HourSharkout}</p>
                            </Container>
                        </Card>
                            )
                                          })
                                          }

                
            </SectionPlantao>
            <Buttonshark onClick={Handleclick}>{messagebutton}</Buttonshark>
        </Bodygradient>
    </Fragment>
    );
    
    }
export default UserActionsScreen;
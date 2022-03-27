import React, {Fragment, useState} from 'react';
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

function UserActionsScreen(){
    const [sharkin, Setsharkin] = useState([]);
    async function fetchSharkins() {
        const response = await SharkinService.index();
        if(response.data.length>=1){
            Setsharkin(response.data.reverse());
        }
    }
    function cardfunction(matricula, hoursharkin, hoursharkout, name, ){
        const Avatar = require('../assets/images/avatares/'+ matricula +'/image.jpeg');
        return (
            <Card>
                <Imgcard src={Avatar}/>
                <Container>
                <h4><b>{name}</b></h4>
                <p><b>Sharkin:</b>{hoursharkin}</p>
                <p><b>Sharkout:</b>{hoursharkout}</p>
                </Container>
            </Card>
        )
    }
    fetchSharkins();
    console.log(sharkin);
    return(
        <Fragment>
        <Bodygradient>
            <Plogout>logout</Plogout>
            <Circle></Circle>
            <H1High>Sharkins da Semana</H1High>
            <SectionPlantao>
                {
                    sharkin.forEach(res => cardfunction(res.User.matricula, res.HourSharkin, res.HourSharkout, res.User.name))
                }
            </SectionPlantao>
            <Buttonshark>Sharkin</Buttonshark>
        </Bodygradient>
    </Fragment>
    );
    
    }
export default UserActionsScreen;
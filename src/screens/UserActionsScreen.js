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
import requires from '../components/UserActionsComponents/Requires';
function UserActionsScreen(){
    const [sharkin, Setsharkin] = useState([]);
    
    
    useEffect(() =>{
        const fetchData = async () => {
            const response = await SharkinService.index();
                Setsharkin(response.data);
        }
        
        fetchData().catch(console.error).then();
    }, [])
    //console.log(sharkin);
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
            <Buttonshark>Sharkin</Buttonshark>
        </Bodygradient>
    </Fragment>
    );
    
    }
export default UserActionsScreen;
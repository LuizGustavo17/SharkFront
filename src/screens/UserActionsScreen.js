import React, {Fragment} from 'react';
import Bodygradient from '../components/FormComponents/Bodygradient';
import SectionPlantao from '../components/UserActionsComponents/SectionPlantao';
import Card from '../components/UserActionsComponents/Card';
import Imgcard from '../components/UserActionsComponents/Imgcard';
import Container from '../components/UserActionsComponents/Container';
const Avatar = require('../assets/images/avatares/120060024/image.jpeg');
function UserActionsScreen(){
    return(
        <Fragment>
        <Bodygradient>
            <SectionPlantao>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
                <Card>
                    <Imgcard src={Avatar}/>
                        <Container>
                            <h4><b>Luiz Gustavo da Silva Oliveira</b></h4>
                            <p><b>Sharkin:</b> 24/03/2022 14:30:26</p>
                            <p><b>Sharkout:</b> 24/03/2022 14:30:26</p>
                        </Container>
                </Card>
            </SectionPlantao>
        </Bodygradient>
    </Fragment>
    );
    
    }
export default UserActionsScreen;
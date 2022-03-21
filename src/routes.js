import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserActionsScreen from './screens/UserActionsScreen';

const MyRoutes = () =>(
    <BrowserRouter>
    <Routes>
        <Route exact path = "/Register" element={<RegisterScreen/>}/>
        <Route exact path = "/Login" element={<LoginScreen/>}/>
        <Route exact path = "/UserActions" element={<UserActionsScreen/>}/>
    </Routes>
    </BrowserRouter>
)
export default MyRoutes;

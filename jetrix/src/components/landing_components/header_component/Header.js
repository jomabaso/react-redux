import React from "react";
import logo from '../../../logos/logo_s.svg';
import { AppBar, Toolbar, Typography , Button, Box} from '@mui/material';
import '../header_component/Header.css';
import { useNavigate } from "react-router-dom";
import LandingPage from "../../../pages/LandingPage";

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import LoginPage from '../../login_component';

const Header = () => {
    const navigate = useNavigate();

    const handlelandingNavigate = () =>{
        navigate('/')
    };

    const handleloginNavigate = () =>{
        navigate('/login')
    };
    const handleregisterNavigate = () =>{
        navigate('/signup')
    };


    return (
        <AppBar position="static" elevation={1}>
            <Toolbar sx={{backgroundColor:"#769FCD"}}>
                <Typography variant="poster" component="div" sx={{ textAlign:'justify', flexGrow: 1 }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button onClick={handlelandingNavigate} color="inherit">Inicio</Button>
                    <Button color="inherit">Servicios</Button>
                    <Button color="inherit">Contacto</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, ml: 3 }}>
                    <Button onClick={handleloginNavigate} color="inherit">Iniciar Sesión</Button>
                    <Button onClick={handleregisterNavigate} variant="outlined" color="inherit">
                        Registrarse
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
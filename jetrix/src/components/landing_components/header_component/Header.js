import React from "react";
import logo from '../../../logos/logo_s.svg';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../header_component/Header.css';

const Header = () => {
    return (
        <AppBar position="static" elevation={1}>
            <Toolbar sx={{backgroundColor:"#769FCD"}}>
                <Typography variant="poster" component="div" sx={{ textAlign:'justify', flexGrow: 1 }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit">Inicio</Button>
                    <Button color="inherit">Servicios</Button>
                    <Button color="inherit">Contacto</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, ml: 3 }}>
                    <Button color="inherit">Iniciar Sesión</Button>
                    <Button variant="outlined" color="inherit">
                        Registrarse
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
import React from "react";
import logo from '../../../../logos/logo2.svg';
import { AppBar, Toolbar, Typography , Button, Box} from '@mui/material';
import '../header_component/Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const HandleLandingNavigate = () =>{
        navigate('/')
    };
    // Para la navegación a otras paginas
    const HandleLoginNavigate = () =>{
        navigate('/login')
    };
    const HandleRegisterNavigate = () =>{
        navigate('/signup')
    };

    return (
        <AppBar position="static" elevation={1}>
            <Toolbar className="custom-toolbar" sx={{backgroundColor:"#769FCD"}}>
                <Typography variant="poster" component="div" sx={{ textAlign:'justify', flexGrow: 1 }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button onClick={HandleLandingNavigate} color="inherit">Inicio</Button>
                    <Button color="inherit">Servicio</Button>
                    <Button color="inherit">Contacto</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, ml: 3 }}>
                    <Button onClick={HandleLoginNavigate} color="inherit">Iniciar Sesión</Button>
                    <Button onClick={HandleRegisterNavigate} variant="outlined" color="inherit">
                        Registrarse
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
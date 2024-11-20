import React, { useEffect } from 'react';
import "./Loginpage.css";
import { CssBaseline, Box, Container, Card, CardActions, CardContent, CardActionArea, TextField, Stack } from '@mui/material';
import { Button, Grid2, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { functionLogin as login, functionLogout as logout } from '../../../features/authSlice';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const authState = useSelector((state) => state.auth);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username && password) {
            // const userData = { username, password };
            // dispatch(login(userData));
            dispatch(login({ username, password }));
        } else {
            alert("ingrese información correcta");
        }
        console.log("estado del store", { authState })
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            navigate('/dashboard')
        }
    }, [authState.isAuthenticated, navigate])

    return (
        <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" className='mainLogin'>

            <CardActionArea className='custom-card-action-area' >
                <Stack className='mainStack'>
                    <Stack className='childStack' direction={'row'} spacing={10}>
                        <h2 className='custom-textfield'>Usuario</h2>
                        <TextField className='custom-textfield' label='Nombre De Usuario' variant='standard' value={username} onChange={(e) => setUsername(e.target.value)} ></TextField>
                    </Stack>
                    <Stack className='childStack' direction={'row'} spacing={8}>
                        <h2 className='custom-textfield'>Password</h2>
                        <TextField className='custom-textfield' type='password' label='Contraseña' variant='standard' value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                    </Stack>
                    <Stack className='childStack' direction={'row'} spacing={1}>
                        <Button variant="contained" onClick={handleLogin}>Ingresar</Button>
                        <Button variant="contained">Olvidé mi contraseña</Button>
                    </Stack>
                    <Stack>
                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el error si existe */}
                    </Stack>


                </Stack>


            </CardActionArea>

        </div>

    )
};

export default LoginPage;

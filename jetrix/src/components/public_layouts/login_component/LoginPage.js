import React, { useEffect } from 'react';
import "./Loginpage.css";
import { CssBaseline, Box, Container, Card, CardActions, CardContent, CardActionArea, TextField } from '@mui/material';
import { Button, Grid2, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../features/authSlice';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const authState = useSelector((state) => state.auth)
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username && password) {
            const userData = { username, password };
            dispatch(login(userData));

        } else {
            alert("ingrese informacion correcta");
        }
        console.log("estado del store", { authState })
    };

    useEffect(() => {
        if (authState.isAuthenticated) {
            navigate('/dashboard')
        }
    }, [authState.isAuthenticated, navigate])

    return (
            <div className='mainLogin'>
                <Card elevation={15}>
                    <CardActionArea>
                        <div className='frameLogin'>
                            <div className='inputLogin'>
                                <Typography variant='button'>Usuario</Typography>
                                <TextField id='standard-basic' label='UserName' variant='standard' value={username} onChange={(e) => setUsername(e.target.value)} ></TextField>

                            </div>
                            <div className='inputLogin'>
                                <Typography variant='button'>Password</Typography>
                                <TextField type='password' id='standard-basic' label='Password' variant='standard' value={password} onChange={(e) => setPassword(e.target.value)}></TextField>
                            </div>
                            <div className='inputLogin' >
                                <Button variant="contained" onClick={handleLogin}>Ingesar</Button>
                                <Button variant="contained">Olvidé mi contraseña</Button>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el error si existe */}

                        </div>
                    </CardActionArea>
                </Card>
            </div>
        
    )
};

export default LoginPage;

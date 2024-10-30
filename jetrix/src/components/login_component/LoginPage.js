import React from 'react';
import "./Loginpage.css";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import TextField from '@mui/material/TextField';
import { Button, Grid2, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    return (
        <div className='mainLogin'>
            <Card elevation={15}>
                <CardActionArea>
                    <div className='frameLogin'>
                        <div className='inputLogin'>
                            <Typography variant='button'>Usuario</Typography>
                            <TextField id='standard-basic' label='UserName' variant='standard'></TextField>

                        </div>
                        <div className='inputLogin'>
                            <Typography variant='button'>Password</Typography>
                            <TextField id='standard-basic' label='Password' variant='standard'></TextField>
                        </div>
                        <div className='inputLogin' >
                            <Button variant="contained">Ingesar</Button>
                            <Button variant="contained">Olvidé mi contraseña</Button>
                        </div>

                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default LoginPage;

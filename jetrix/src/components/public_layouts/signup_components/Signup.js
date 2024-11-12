import { React } from "react";
import "./Signup.css";
import { Stack, Typography, TextField, Button, CardActionArea, Card, Paper } from "@mui/material";
import { useState } from "react";
import { registerUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister= async() => {
        try{
            const userData = {
                username,
                password,
                email: correo
            }
            await registerUser(userData);
            alert("usuario registrado con éxito");
            navigate('/login');
        }catch (error){
            setError("Error en el registro, verifique los datos ingresados")
            console.error("error en los registros", error);
        }
    }


    return (
        <div className="mainSignup">
           

                <div className="frameSignup" >
                    <CardActionArea sx={{ display: "flex" }}>

                        <Stack direction="column" >
                            <Stack direction="row">
                                <Typography variant='button'>Nombre</Typography>
                                <TextField label='Nombre' variant='standard' value={nombre} onChange={(e)=> setNombre(e.target.value)} ></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Typography variant='button'>Correo</Typography>
                                <TextField label='Correo' variant='standard' value={correo} onChange={(e)=> setCorreo(e.target.value)} ></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Typography variant='button'>Nombre de usuario</Typography>
                                <TextField label='Nombre de usuario' variant='standard' value={username} onChange={(e)=> setUsername(e.target.value)} ></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Typography variant='button'>Contraseña</Typography>
                                <TextField label='Contraseña' variant='standard' value={password} onChange={(e)=> setPassword(e.target.value)} ></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Button variant="contained" onClick={handleRegister}>Registrar</Button>
                                <Button variant="contained" onClick={()=> navigate(-1)}>Cancelar</Button>
                            </Stack>

                        </Stack>

                    </CardActionArea>
                </div>
           


        </div>
    );

};

export default Signup;
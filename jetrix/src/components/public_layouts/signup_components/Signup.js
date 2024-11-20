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

    const [errors, setErrors] = useState({
        nombre: false,
        correo: false,
        username: false,
        password: false,
      });

    const handleRegister= async() => {
        if (nombre === ''){
            {errors.nombre=true}
        }if(username===''){
            {errors.username=true}
        }if(correo === ''){
            {errors.correo=true}
        }if(password ===''){
            {errors.password=true}
        }
        try{
            const userData = {
                nombre,
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

                        <Stack direction="column" className="mainStack">
                            <Stack direction="row" className="childStack">
                                <Typography variant='subtitle1'>Nombre</Typography>
                                <TextField label='Nombre' variant='outlined' value={nombre} onChange={(e)=> setNombre(e.target.value)} error={errors.nombre && nombre === ''}></TextField>
                            </Stack>
                            <Stack direction="row" className="childStack">
                                <Typography variant='subtitle1'>Correo</Typography>
                                <TextField label='Correo' type="email" variant='outlined'  value={correo} onChange={(e)=> setCorreo(e.target.value)} error={errors.correo && correo === ''} ></TextField>
                            </Stack>
                            <Stack direction="row" className="childStack">
                                <Typography variant='subtitle1'>Nombre de usuario</Typography>
                                <TextField label='Nombre de usuario' variant='outlined' value={username} onChange={(e)=> setUsername(e.target.value)} error={errors.username && username === ''}></TextField>
                            </Stack>
                            <Stack direction="row" className="childStack">
                                <Typography variant='subtitle1'>Contraseña</Typography>
                                <TextField label='Contraseña' type='password' variant='outlined' value={password} onChange={(e)=> setPassword(e.target.value)} error={errors.password && password === ''} ></TextField>
                            </Stack>
                            <Stack direction="row" className="childStack">
                                <Button className="childStackButton" variant="contained" onClick={handleRegister}>Registrar</Button>
                                <Button className="childStackButton" variant="contained" onClick={()=> navigate(-1)}>Cancelar</Button>
                            </Stack>
                        </Stack>

                    </CardActionArea>
                </div>
           


        </div>
    );

};

export default Signup;
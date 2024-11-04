import { React } from "react";
import "./Signup.css";
import { Stack, Typography, TextField, Button, CardActionArea, Card, Paper } from "@mui/material";



const Signup = () => {
    return (
        <div className="mainSignup">
           

                <div className="frameSignup" >
                    <CardActionArea sx={{ display: "flex" }}>

                        <Stack direction="column" >
                            <Stack direction="row">
                                <Typography variant='button'>Nombre</Typography>
                                <TextField id='standard-basic' label='Nombre' variant='standard'></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Typography variant='button'>Correo</Typography>
                                <TextField id='standard-basic' label='Correo' variant='standard'></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Typography variant='button'>Nombre de usuario</Typography>
                                <TextField id='standard-basic' label='Nombre de usuario' variant='standard'></TextField>
                            </Stack>
                            <Stack direction="row">
                                <Button variant="contained">Registrar</Button>
                                <Button variant="contained">Cancelar</Button>
                            </Stack>

                        </Stack>

                    </CardActionArea>
                </div>
           


        </div>
    );

};

export default Signup;
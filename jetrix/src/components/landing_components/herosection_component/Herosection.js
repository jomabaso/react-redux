import React from "react";
import "./Herosection.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import logo from '../../../logos/logo_s.svg';
import login from "../../login_component/LoginPage";
import signup from "../../signup_components/Signup";
import { useNavigate } from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import LoginPage from '../../login_component/LoginPage';



const HeroSections = () => {
    const navigate = useNavigate();

    const handleLoginNavigate = () =>{
        navigate('/login')
    };

    const handleSignupNavigate = () =>{
        navigate('/signup')
    };

    return (
        <div className="Body-general">
            <div className="body-info">
                <h1>Body</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <Card elevation={15}>
                <CardActionArea sx={{ backgroundColor: "#D6E6F2"}}  >
                    <CardMedia>
                        <img src={logo} className="App-logo-hero" alt="logo" />
                    </CardMedia>
                    <CardContent>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button onClick={handleLoginNavigate} variant="contained" sx={{ backgroundColor: "#436850" }} >Iniciar sesión</Button>
                        <Button onClick={handleSignupNavigate} variant="contained" sx={{ backgroundColor: "#436850" }} >Registrarse</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default HeroSections;
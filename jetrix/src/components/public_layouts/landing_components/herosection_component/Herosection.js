import React from "react";
import "./Herosection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardContent, CardMedia, CardActionArea, CardActions, Button } from "@mui/material/";

import logo from '../../../../logos/logo2.svg';
import { useNavigate } from "react-router-dom";

AOS.init();



const HeroSections = () => {
    const navigate = useNavigate();

    const handleLoginNavigate = () => {
        navigate('/login')
    };

    const handleSignupNavigate = () => {
        navigate('/signup')
    };

    return (
        <div className="Body-general">
            <div className="body-wrap" data-aos="slide-up" data-aos-delay="800" data-aos-duration="3000" >
                <div className="body-info">
                    <h1>Body</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>


                <div className="card-frame">
                    <CardActionArea className="card-body" sx={{ backgroundColor: "#F8FFF7" }}  >
                        <CardMedia className="card-logo">
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
                </div>
            </div>
        </div>
    );
}

export default HeroSections;
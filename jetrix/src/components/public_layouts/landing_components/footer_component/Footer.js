import React from "react";
import { Container, Box, Typography } from '@mui/material';

const Footer = () => {
    return (

        <Box component="footer" display="flex" flexDirection="column" minHeight="5vh"backgroundColor="#769FCD">
            <Typography variant="body2">
                © 2023 Mi Sitio Web. Todos los derechos reservados.
            </Typography>
        </Box>

    );
}

export default Footer;
import React, { useState } from "react";
import logo from '../../../logos/logo_s.svg';
import './Header.css';

import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/authSlice';

import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useTheme } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;




const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch();


    // Estado para controlar la apertura del Drawer
    const [open, setOpen] = useState(false);

    // Funciones de apertura y cierre del Drawer
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };


    // Para la navegación a otras paginas
    const HandleTaskNavigate = () => {
        navigate('/tasks')
    };
    const HandleDashboardNavigate = () => {
        navigate('/dashboard')
    };
    const HandleLogoutNavigate = () => {
        if (authState) {
            dispatch(logout());
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={1}>


                <Toolbar sx={{ backgroundColor: "#769FCD" }}>

                    <Typography variant="poster" component="div" sx={{ textAlign: 'justify', flexGrow: 1 }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button onClick={HandleDashboardNavigate} color="inherit">Tablero</Button>
                        <Button onClick={HandleTaskNavigate} color="inherit">Tareas</Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, ml: 3 }}>
                        <Button onClick={HandleLogoutNavigate} variant="outlined" color="inherit">
                            Cerrar sesión
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}>
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Crear Tarea', 'Pendientes', 'Estados', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Crear Tablero', 'Editar Tablero', 'Cerrar Tablero'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

        </Box>
    );
}

export default Header;
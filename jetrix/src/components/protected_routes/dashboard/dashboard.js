import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';
import './dashboard.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logout } from '../../../services/authService';

const Dashboard = () => {

    const [tableros, setTableros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [newTablero, setNewTablero] = useState({
        titulo_tablero: '',
        description: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            throw new Error('token de acceso no encontrado')
            return;
        }


        const fetchTableros = async () => {
            try {

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/tableros/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setTableros(response.data);
                setLoading(false);
            } catch (error) {
                console.error('error al obtener los tableros:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                    navigate('/login')
                }
                setLoading(false)
                setError('no se pudieron obtener los tableros')
            }
        }
        fetchTableros();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTablero({ ...newTablero, [name]: value });
    }

    const handleCreateTablero = async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                throw new Error('token de acceso no encontrado')
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/tableros/`, newTablero, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setTableros([...tableros, response.data]);
            setNewTablero({
                titulo_tablero: '',
                description: '',
            })
        } catch (error) {
            if (error.response && error.response.status === 401) {
                logout();
                navigate('/login')
            }
            setError('No se pudo crear el tablero. Intente nuevamente.');
        }

    }

    const handleViewTasks = (tableroId) => {
        navigate(`/tableros/${tableroId}/tasks`);
    }

    const groupTableros = (tableros, size) => {
        const grouped = [];
        for (let i = 0; i < tableros.length; i += size) {
            grouped.push(tableros.slice(i, i + size));
        }
        return grouped;
    }

    const groupedTableros = groupTableros(tableros, 6);

    return (
        <div className="mainDashboard">
            <Stack direction={"column"} spacing={5}>
                <div className="createTableroForm">
                    <TextField
                        label="Título del Tablero"
                        name="titulo_tablero"
                        value={newTablero.titulo_tablero}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Descripción"
                        name="description"
                        value={newTablero.description}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                    />
                    <Button variant="contained" onClick={handleCreateTablero}>
                        Crear Tablero
                    </Button>
                </div>

                {groupedTableros.map((group, index) => (
                    <Stack key={index} direction={"row"} spacing={5}>
                        {group.map((tablero) => (
                            <Button key={tablero.id} className="custom-button" onClick={()=> handleViewTasks(tablero.id)} >
                                <h2>{tablero.titulo_tablero}</h2>
                            </Button>
                        ))}
                    </Stack>

                ))}

                {/* <Stack direction={"row"} spacing={5}>
                    {tableros.map((tablero) => (
                        <Button key={tablero.id} className="custom-button" >
                            <h2>{tablero.titulo_tablero}</h2>
                        </Button>
                    ))}
                </Stack> */}
            </Stack>
        </div>
    )
}

export default Dashboard;
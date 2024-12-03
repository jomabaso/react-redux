import React, { useContext, useEffect, useState } from "react";
import './task.css';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../../../services/authService";
import TextField from "@mui/material/TextField";
import axios from "axios";

const TaskComponent = () => {

    const { tableroId } = useParams();
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState({
        task_name: '',
        task_description: '',
        task_status:'a',
    })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (!token) {
            throw new Error("Token de acceso no encontrado");
            return
        }

        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/tableros/${tableroId}/tasks/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setTasks(response.data);
                setLoading(false);
            }
            catch (error) {
                console.error('error al obtener los tableros:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                    navigate('/login')
                }
                setLoading(false);
                setError('no se pudieron obtener las tareas');

            }

        }
        fetchTasks();

    },[tableroId, navigate]);

    const handleTaskChange = (e) => {
        const { name, value } = e.target;
        setNewTask({ ...newTask, [name]: value });
    }

    const handleCreateTask = async () => {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                throw new Error("Token no encontrado");
            }
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/tableros/${tableroId}/tasks/`, newTask, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            setTasks([...tasks, response.data]);
            setNewTask({
                task_name: '',
                task_description: '',
                task_status: 'a',
            });

        } catch (error) {
            console.error('error al obtener los tableros:', error);
            if (error.response && error.response.status === 401) {
                logout();
                navigate('/login')
            }
            setError('no se pudieron obtener las tareas');

        }
    }

    const groupTasks = (tasks, size) => {
        const grouped = [];
        for (let i = 0; i < tasks.length; i += size) {
            grouped.push(tasks.slice(i, i + size));
        }
        return grouped;
    }


    return (
        <div className="mainTask">
            <Stack className="custom-stack-grid-main" direction={"column"}>
                <div className="createTaskForm">
                    <TextField
                        label="Título de la tarea"
                        name="task_name"
                        value={newTask.task_name}
                        onChange={handleTaskChange}
                        variant="outlined"
                    />
                    <TextField
                        label="Descripción"
                        name="task_description"
                        value={newTask.task_description}
                        onChange={handleTaskChange}
                        variant="outlined"
                        multiline
                    />
                    <Button variant="contained" onClick={handleCreateTask}>
                        Crear Tarea
                    </Button>
                </div>

                {/* <Stack className="custom-stack-grid-up" direction={"row"} spacing={10}>
                    <Button className="custom-create-task" ><h2>Agregar nueva tarea</h2></Button>
                    <Button className="custom-create-task" ><h2> tarea</h2></Button>
                    <Button className="custom-create-task" ><h2>Agregar tarea</h2></Button>
                </Stack> */}
                <Stack direction={"column"} spacing={2}>
                    {tasks.map((task) => (
                        <Button key={task.id} variant="outlined" className="custom-task" >
                            <h2>{task.task_name}</h2>
                            </Button>
                    ))}

                    {/* <Button className="custom-task" ><h2>test</h2></Button> */}



                </Stack>

            </Stack>

        </div>
    )
}

export default TaskComponent;
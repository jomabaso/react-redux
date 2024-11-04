import React from "react";
import './task.css';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

const TaskComponent = () => {
    return (
        <div className="mainTask">
            <Stack className="custom-stack-grid-main" direction={"column"}>
                <Stack className="custom-stack-grid-up" direction={"row"} spacing={10}>
                    <Button className="custom-create-task" ><h2>Agregar nueva tarea</h2></Button>
                    <Button className="custom-create-task" ><h2> tarea</h2></Button>
                    <Button className="custom-create-task" ><h2>Agregar tarea</h2></Button>
                </Stack>
                <Stack direction={"column"}>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>
                    <Button className="custom-task" ><h2>test</h2></Button>


                </Stack>

            </Stack>

        </div>
    )
}

export default TaskComponent;
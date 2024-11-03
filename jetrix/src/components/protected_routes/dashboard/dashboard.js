import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import './dashboard.css'



const dashboard = () => {

    return (
        <div className="mainDashboard">
            <Stack  direction={"column"} spacing={5}>
                <Stack direction={"row"} spacing={5}>
                    <Button className="custom-button" ><h2>test</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                    <Button className="custom-button"><h2>test3</h2></Button>
                    <Button className="custom-button"><h2>test4</h2></Button>
                    <Button className="custom-button"><h2>test5</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                </Stack>
                <Stack direction={"row"} spacing={5}>
                    <Button className="custom-button" ><h2>test</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                    <Button className="custom-button"><h2>test3</h2></Button>
                    <Button className="custom-button"><h2>test4</h2></Button>
                    <Button className="custom-button"><h2>test5</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                </Stack>
                <Stack direction={"row"} spacing={5}>
                    <Button className="custom-button" ><h2>test</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                    <Button className="custom-button"><h2>test3</h2></Button>
                    <Button className="custom-button"><h2>test4</h2></Button>
                    <Button className="custom-button"><h2>test5</h2></Button>
                    <Button className="custom-button"><h2>test2</h2></Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default dashboard;
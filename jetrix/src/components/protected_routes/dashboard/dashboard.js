import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

const dashboard = () => {

    return (
        <div>

            <h1>asdfasdfadsf</h1>
            <Stack direction={"row"} spacing={2}>
                <DemoPaper square={false}><h1>demo demo demo</h1></DemoPaper>
            </Stack>
        </div>
    )


}

export default dashboard;
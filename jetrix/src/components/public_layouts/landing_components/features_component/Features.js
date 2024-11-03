import React from "react";
import './Features.css'
import { Container, CircularProgress, Stack, LinearProgress } from "@mui/material";

const Features = () => {
    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 50);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="mainFeatures">
            <Stack spacing={20} direction="column">
                <Stack spacing={10} direction="row">
                    <CircularProgress size="8rem" variant="determinate" value={25} />
                    <CircularProgress size="8rem" variant="determinate" value={50} />
                    <CircularProgress size="8rem" variant="determinate" value={75} />
                    <CircularProgress size="8rem" variant="determinate" value={100} />
                    <CircularProgress size="8rem" variant="determinate" value={progress} />
                </Stack>
                <Stack>
                    {/* <LinearProgress variant="buffer" value={progress} /> */}
                </Stack>

            </Stack>
        </div>
    );
}

export default Features;
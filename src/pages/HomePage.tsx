import React, { FC, useState } from 'react'
import Button from '@mui/material/Button';
import NewTask from '../components/NewTask';
import Box from '@mui/material/Box';
import { useStyles } from '../styles/HomePageStyles';


const HomePage: FC = () => {
    const classes = useStyles()
    const [value, setValue] = useState<any>(null);
    return (
        <Box className={classes.container}>
            <NewTask />
        </Box>
     
    )
}

export default HomePage
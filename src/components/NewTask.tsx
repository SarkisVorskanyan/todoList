import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useStyles } from '../styles/HomePageStyles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import moment from 'moment'


const NewTask: FC = () => {
    const classes = useStyles()
    const [value, setValue] = useState<any>(null);

    return (
        <Box className={classes.header}>
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '0 10px'
                }}
            >
                <TextField label="Task" />
            </Box>
            <Box style={{margin: '0 10px'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Box>
            <Button variant="contained">Contained</Button>
        </Box>
        
    )
}

export default NewTask
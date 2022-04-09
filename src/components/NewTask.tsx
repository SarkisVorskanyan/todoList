import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useStyles } from '../styles/HomePageStyles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import moment from 'moment'

interface NewTaskPropsType {
    valueDate: any,
    setValueDate: (valueDate: any) => void,
    value: string,
    setValue: (value: string) => void
}


const NewTask: FC <NewTaskPropsType>= ({valueDate, setValueDate, value, setValue}) => {
    const classes = useStyles()

    return (
        <Box className={classes.header}>
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '0 10px'
                }}
            >
                <TextField 
                    style={{backgroundColor: 'transparent'}}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    label="Task" />
            </Box>
            <Box style={{margin: '0 10px'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={valueDate}
                    onChange={(e) => setValueDate(moment(e).format('l'))}
                    renderInput={(params) => <TextField style={{backgroundColor: 'transparent'}} {...params} />}
                />
            </LocalizationProvider>
            </Box>
            <Button variant="contained">Contained</Button>
        </Box>
        
    )
}

export default NewTask
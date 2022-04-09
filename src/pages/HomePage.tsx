import React, { FC, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import NewTask from '../components/NewTask';
import Box from '@mui/material/Box';
import { useStyles } from '../styles/HomePageStyles';


const HomePage: FC = () => {
    const classes = useStyles()
    const [valueDate, setValueDate] = useState<any>(null)
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        console.log(valueDate, value)
    }, [value, valueDate])

    return (
        <Box className={classes.container}>
            <NewTask valueDate={valueDate} 
                     setValueDate={setValueDate}
                     value={value}
                     setValue={setValue}
            />
        </Box>
       
     
    )
}

export default HomePage
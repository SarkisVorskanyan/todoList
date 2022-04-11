import React, { FC, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import NewTask from '../components/NewTask';
import Box from '@mui/material/Box';
import { useStyles } from '../styles/HomePageStyles';
import TaskList from '../components/TaskList';
import { useAppSelector } from '../redux/hooks';


const HomePage: FC = () => {
    const classes = useStyles()
    const [valueDate, setValueDate] = useState<any>(null)
    const [value, setValue] = useState<string>('')

    const {dateList} = useAppSelector(state => state.list);

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
            <TaskList dateList={dateList} />
        </Box>
       
     
    )
}

export default HomePage
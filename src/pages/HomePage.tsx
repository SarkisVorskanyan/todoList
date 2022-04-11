import React, { FC, useState } from 'react'
import NewTask from '../components/NewTask';
import Box from '@mui/material/Box';
import { useStyles } from '../styles/HomePageStyles';
import TaskList from '../components/TaskList';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addNewTask, changeCompleted, removeTask } from '../redux/reducers/ListReducer';
import { CheckedType } from '../models/CheckedType';


const HomePage: FC = () => {
    const classes = useStyles()
    const [valueDate, setValueDate] = useState<any>(null)
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const {dateList} = useAppSelector(state => state.list)

    const addTask = () => {
        if(valueDate === null || value === ''){
            //console.log('no')
        }else{
            //console.log(valueDate, value)
            setValue('')
            setValueDate(null)
            dispatch(addNewTask({
                date: valueDate,
                id: Math.random(),
                list: [
                    {
                        content: value,
                        list_id: Math.random(),
                        completed: false
                    }
                ]
            }))
        }
    }

    const checkTask = (objCheck: CheckedType) => {
         dispatch(changeCompleted(objCheck))
    }

    const deleteTask = (deleteObj: CheckedType) => {
        dispatch(removeTask(deleteObj))
    }

    return (
        <Box className={classes.container}>
            <NewTask valueDate={valueDate} 
                     setValueDate={setValueDate}
                     value={value}
                     setValue={setValue}
                     addTask={addTask}
            />
            <TaskList dateList={dateList} 
                      checkTask={checkTask}
                      deleteTask={deleteTask}
            />
        </Box>
       
     
    )
}

export default HomePage
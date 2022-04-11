import { CheckedType } from '../../models/CheckedType';
import { DateType } from './../../models/ListType';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ListState {
    dateList: DateType[],
    num: number
}

const initialState: ListState = {
    dateList: [
        {
            date: '4/6/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Some text',
                    list_id: Math.random(),
                    completed: true
                }
            ]
        },
        {
            date: '4/7/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Marine',
                    list_id: Math.random(),
                    completed: true
                }
            ]
        },
        {
            date: '4/8/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Liana',
                    list_id: Math.random(),
                    completed: false
                },
                {
                    content: 'Liana',
                    list_id: Math.random(),
                    completed: true
                },
                {
                    content: 'Liana',
                    list_id: Math.random(),
                    completed: false
                }
            ]
        },
        {
            date: '4/10/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Sargis',
                    list_id: Math.random(),
                    completed: false
                }
            ]
        },
    ],
    num: 0
}

export const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addNewTask(state, action: PayloadAction<DateType>){
            state.num = 0
            state.dateList.map((item, i) => {
                if(item.date === action.payload.date){
                    state.num += 1
                    item.list.push(action.payload.list[0])
                }
            })
            if(state.num === 0){
                state.dateList.push(action.payload)
                state.num = 0
            }
        },

        changeCompleted(state, action: PayloadAction<CheckedType>){
            state.dateList.map((item, i) => {
                if(item.date === action.payload.date){
                    item.list.map((listItem, i) => {
                        if(listItem.list_id === action.payload.task_id){
                            listItem.completed = action.payload.checked
                        }
                    })
                }
            })
        },

        removeTask(state, action: PayloadAction<CheckedType>){
            state.dateList.map((item, i) => {
                if(item.date === action.payload.date){
                    item.list.splice(item.list.findIndex((listItem) => listItem.list_id === action.payload.task_id), 1)
                    
                    if(item.list.length === 0){
                        state.dateList.splice(state.dateList.findIndex((task) => task.date === action.payload.date), 1)
                    }
                }
            })
        },

    },
    extraReducers: {
      
    }

})


export const {addNewTask, changeCompleted, removeTask} = ListSlice.actions

export default ListSlice.reducer;
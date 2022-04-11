import { DateType } from './../../models/ListType';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ListState {
    dateList: DateType[]
}

const initialState: ListState = {
    dateList: [
        {
            date: '4/6/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Some text',
                    list_id: Math.random()
                }
            ]
        },
        {
            date: '4/7/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Marine',
                    list_id: Math.random()
                }
            ]
        },
        {
            date: '4/7/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Liana',
                    list_id: Math.random()
                },
                {
                    content: 'Liana',
                    list_id: Math.random()
                },
                {
                    content: 'Liana',
                    list_id: Math.random()
                }
            ]
        },
        {
            date: '4/7/2022',
            id: Math.random(),
            list: [
                {
                    content: 'Sargis',
                    list_id: Math.random()
                }
            ]
        },
    ]
}

export const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
       
    },
    extraReducers: {
      
    }

})

export default ListSlice.reducer;
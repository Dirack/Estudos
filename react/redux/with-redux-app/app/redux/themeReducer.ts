import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light'
    },
    reducers: {
        setThemeStatus: (state,action)=>{
            state.status = action.payload
        }
    }
})

export const {setThemeStatus} = slice.actions
export default slice.reducer
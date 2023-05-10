import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store';

export interface INITIALSTATE {
    value: number
}
const initialState: INITIALSTATE = {
    value: 0,
}
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
    }
})

// Actions
export const globalAction = globalSlice.actions;
// Selectors
export const selectGlobal = (state: RootState) => state.global;
// Reducer
const globalReducer = globalSlice.reducer;
export default globalReducer;

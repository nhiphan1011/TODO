import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export interface INITIALSTATE {
    data: Array<string>,
}
const initialState: INITIALSTATE = {
    data: []
}
export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        update(state, action: PayloadAction<string>) {
            state.data.push(action.payload)
        },
        delete(state, action) {
            state.data = state.data.filter((_, i) => i !== action.payload)
        }
    },
})
export const listAction = listSlice.actions
export const selectList = (state: RootState) => state.list;
const listReducer = listSlice.reducer
export default listReducer
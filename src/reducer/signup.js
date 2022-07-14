import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'signup',
    initialState: {
        roles : ['super', 'admin', 'user']
    },
    reducers: {
        setRoles: (state, action) => {
            state.roles = action.payload
        },
    },
});

export const { setRoles } = slice.actions

export default slice.reducer
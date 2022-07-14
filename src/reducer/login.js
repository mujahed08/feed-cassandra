import { LOG_IN } from "../action/action-types";

import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'login',
    initialState: {
        session : {}
    },
    reducers: {
        login: (state, action) => {
            state.session = action.payload
        },
    },
});

export const { login } = slice.actions

export default slice.reducer
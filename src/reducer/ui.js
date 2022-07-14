import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'ui',
    initialState: {
        loading : false,
        modalCount : 0,
        path : ''
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setPath: (state, action) => {
            state.path = action.payload
        }
    },
});

export const { setLoading, setPath } = slice.actions

export default slice.reducer
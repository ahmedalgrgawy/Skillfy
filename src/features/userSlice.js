import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: sessionStorage.getItem('email') || '',
        name: sessionStorage.getItem('name') || '',
        points: sessionStorage.getItem('points') || 0,
    },
    reducers: {
        setPoints: (state, action) => {
            state.points = action.payload;
            sessionStorage.setItem('points', action.payload)
        },
        setName: (state, action) => {
            state.name = action.payload;
            sessionStorage.setItem('name', action.payload)
        },
        setUserEmail: (state, action) => {
            state.email = action.payload;
            sessionStorage.setItem('email', action.payload)
        },
    }
})

export const { setPoints, setName, setUserEmail } = userSlice.actions;

export default userSlice.reducer;
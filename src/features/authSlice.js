import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        role: sessionStorage.getItem('role') || '',
        learnOption: "",
        token: localStorage.getItem('accessToken') || "",
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
            sessionStorage.setItem('role', action.payload)
        },
        setLearnOption: (state, action) => {
            state.learnOption = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: () => {
            localStorage.clear()
        }
    }
})

export const { setOtp, setToken, setRole, setLearnOption, logout } = authSlice.actions;

export default authSlice.reducer;
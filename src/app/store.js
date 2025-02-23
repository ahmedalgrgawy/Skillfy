import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';
import coursesReducer from '../features/coursesSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        courses: coursesReducer
    }
})
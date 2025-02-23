import { createSlice } from '@reduxjs/toolkit'

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        Track: '',
        coursesData: [],
        filteredCourses: [],
        filterOn: false,
        error: false,
        courseDisplaying: 'roadmap',
    },
    reducers: {
        setCourseDisplaying: (state, action) => {
            state.courseDisplaying = action.payload;
            console.log(action.payload);
        },
        filterByLevel: (state, action) => {

        },
        filterByTier: (state, action) => {

        },
        filterByRatings: (state, action) => {

        }
    }
})

export const { setCourseDisplaying, filterByLevel, filterByTier, filterByRatings, setRoadmapData } = coursesSlice.actions;

export default coursesSlice.reducer;
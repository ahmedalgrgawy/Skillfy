import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import MainSignup from '../Pages/Signup/MainSignup';
import WhoAreYou from '../Pages/Signup/WhoAreYou';
import WhatDoYouLike from '../Pages/Signup/WhatDoYouLike';
import Verify from '../Pages/Signup/Verify';
import EmailForPassword from '../Pages/Reset Password/EmailForPassword';
import ResetPassword from '../Pages/Reset Password/ResetPassword';
import NotFound from '../Components/Errors/NotFound';
import HowToLearn from '../Pages/Signup/HowToLearn';
import Start from '../Pages/Welcome/Start';
import Welcome from '../Pages/Welcome/Welcome';
import WelcomeTwo from '../Pages/Welcome/WelcomeTwo';
import WelcomeThree from '../Pages/Welcome/WelcomeThree';
import Profile from '../Pages/Profile/Profile';
import Tracks from '../Pages/Tracks/Tracks';
import NotificationsSettings from '../Pages/Notifications/NotificationsSettings';
import ProfileSettings from '../Pages/Profile/ProfileSettings';
import Notifications from '../Pages/Notifications/Notifications';
import { Settings } from '../Pages/Settings/Settings';
import { Leaderboard } from '../Pages/Leaderboard/Leaderboard';
import MyCourses from '../Pages/MyCourses/MyCourses';
import Courses from '../Pages/Courses/Courses';
import SingleCourse from '../Pages/Courses/SingleCourse';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Start />,
            index: true
        },
        {
            path: '/welcome-1',
            element: <Welcome />,
        },
        {
            path: '/welcome-2',
            element: <WelcomeTwo />,
        },
        {
            path: '/welcome-3',
            element: <WelcomeThree />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/signup',
            element: <MainSignup />,
        },
        {
            path: '/who-is-user',
            element: <WhoAreYou />,
        },
        {
            path: '/what-user-like',
            element: <WhatDoYouLike />,
        },
        {
            path: '/how-to-learn',
            element: <HowToLearn />,
        },
        {
            path: '/verify-email',
            element: <Verify />,
        },
        {
            path: '/email-to-reset',
            element: <EmailForPassword />,
        },
        {
            path: '/reset-password',
            element: <ResetPassword />,
        },

        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/home',
                    element: <Home />,
                    index: true
                },
                {
                    path: '/my-courses',
                    element: <MyCourses />
                },
                {
                    path: '/tracks',
                    element: <Tracks />
                },
                {
                    path: '/courses',
                    element: <Courses />
                },
                {
                    path: '/courses/singleCourse',
                    element: <SingleCourse />
                },
                {
                    path: '/leaderboard',
                    element: <Leaderboard />
                },
                {
                    path: '/settings',
                    element: <Settings />
                },
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/profile-settings',
                    element: <ProfileSettings />
                },
                {
                    path: '/notifications',
                    element: <Notifications />
                },
                {
                    path: '/notifications-settings',
                    element: <NotificationsSettings />
                },
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }

    ]
);

export default router;
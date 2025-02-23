import { Link, useNavigate } from 'react-router-dom'
import googleLogo from "../../assets/login/Google_Icons-09-512.webp"
import './style.css'
import { Password } from '../../Components/Input/Password'
import { useState } from 'react'
import { validateEmail } from '../../utils/helpers'
import { useDispatch } from 'react-redux'
import { setRole, setToken } from '../../features/authSlice'
import axiosInstance from '../../utils/axiosInstance'
import { setName, setPoints, setUserEmail } from '../../features/userSlice'


const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please, Enter a Valid Email Address');
            return;
        }

        if (!password) {
            setError('Please, Enter The Password')
            return;
        }

        setError('')

        try {
            const response = await axiosInstance.post('/auth/login', {
                "email": email,
                "password": password
            })

            if (response.status === 200) {

                dispatch(setToken(response.data.data.token))

                dispatch(setUserEmail(response.data.data.user.email))

                dispatch(setName(response.data.data.user.fullName))

                dispatch(setPoints(response.data.data.user.points))

                dispatch(setRole(response.data.data.user.role))

                localStorage.setItem('accessToken', response.data.data.token)

                if (typeof (localStorage.getItem('accessToken')) === "undefined") {
                    localStorage.clear()
                }

                navigate('/home')

            }

        } catch (error) {
            setError(error.response.data.error)
            if (error.response.status === 401) {
                dispatch(setUserEmail(email))
                navigate('/verify-email')
            }
        }

    }

    return (
        <div className="bg-main_bg_color lg:h-screen flex justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-8 lg:my-0'>
                <div className='bg-white text-center w-[350px] md:w-[500px] md:h-[610px] p-3 shadow-md'>
                    <form onSubmit={handleLogin} action="" className='flex flex-col mx-3'>

                        <div className='my-6'>
                            <h1 className='font-medium mb-3 text-3xl'>Login</h1>
                            <p className='text-xs text-[#4D4D4D]'>Welcome Back, Please Login to access your account</p>
                        </div>

                        <div className='flex flex-col items-start '>

                            <label className='my-3' htmlFor="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' type="text" placeholder='Enter Your Email' id='email' />

                            <label className='my-3' htmlFor="password">Password</label>
                            <Password value={password} onChange={(e) => setPassword(e.target.value)} />

                            <div className='w-full my-6 flex justify-between items-center'>

                                <label className='text-[#4d4d4d] ' htmlFor="check">
                                    <input className='mx-2' type="checkbox" id='check' /> Remember Me
                                </label>
                                <Link className='text-[#4d4d4d] ' to='/email-to-reset'>Forgot Password?</Link>

                            </div>

                            {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                            <button className='main-btn my-3' type="submit">Login</button>

                            <p className='or-area w-full relative text-[#999999] mb-3'>OR</p>

                            <button className='w-full flex justify-center items-center mb-3 border border-[#E4E4E7] hover:bg-[#eee] duration-300'>
                                <img className='w-9 mr-3' src={googleLogo} alt="" />
                                <span className='text-[#999999]'>Login With Google</span>
                            </button>

                            <p className="text-sm text-center mt-4 w-full">
                                <span>Do Not Have an Account?</span>
                                <Link to="/how-to-learn" className="font-medium text-primary underline ml-1">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
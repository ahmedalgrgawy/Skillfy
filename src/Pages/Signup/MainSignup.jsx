import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { validateEmail } from "../../utils/helpers"
import { Password } from "../../Components/Input/Password"
import googleLogo from "../../assets/login/Google_Icons-09-512.webp"
import axiosInstance from "../../utils/axiosInstance"
import { useSelector } from 'react-redux';

const MainSignup = () => {


    const role = useSelector(state => state.auth.role)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [checked, setChecked] = useState(false)

    const navigate = useNavigate()

    const handleSignUp = async (e) => {

        e.preventDefault();

        if (!name) {
            setError('Please, Enter The Name')
            return;
        }

        if (!validateEmail(email)) {
            setError('Please, Enter a Valid Email Address');
            return;
        }

        if (!password) {
            setError('Please, Enter The Password')
            return;
        }

        if (!checked) {
            setError('Privacy & Terms Approval Is Required')
            return;
        }

        if (!role) {
            setError('Go Back Check Your Role')
            return;
        }

        setError('')

        try {

            const response = await axiosInstance.post('/auth/signup', {
                "fullName": name,
                "email": email,
                "password": password,
                "role": role,
            })


            if (response.status === 201) {
                navigate('/verify-email')
            }
        } catch (error) {
            setError(error.response.data.error)
            console.log(error);
        }

    }

    return (
        <div className="bg-main_bg_color lg:h-screen flex justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-8 lg:my-0'>
                <div className='bg-white text-center w-[350px] md:w-[500px] md:h-[670px] p-3 shadow-md'>
                    <div>
                        <form onSubmit={handleSignUp} action="" className='flex flex-col mx-3'>

                            <div className='my-6'>
                                <h1 className='font-medium mb-3 text-3xl'>Sign Up</h1>
                                <p className='text-xs text-[#4D4D4D]'>Create an account to unlock exclusive features.</p>
                            </div>

                            <div className='flex flex-col items-start '>

                                <label className='my-3' htmlFor="name">Full Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className='input-field' type="text" placeholder='Enter Your Name' id='name' />

                                <label className='my-3' htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' type="text" placeholder='Enter Your Email' id='email' />

                                <label className='my-3' htmlFor="password">Password</label>
                                <Password value={password} onChange={(e) => setPassword(e.target.value)} />

                                <div className='w-full my-3 flex justify-between items-center'>

                                    <label className='text-[#4d4d4d] md:text-lg text-sm' htmlFor="check">
                                        <input onClick={() => setChecked(!checked)} className='mx-2' type="checkbox" id='check' />
                                        I agree with <a className="underline" href="#">Terms of Use</a> and <a className="underline" href="#">Privacy Policy</a>
                                    </label>

                                </div>

                                {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                                <button className='main-btn my-3' type="submit">Sign Up</button>

                                <p className='or-area w-full relative text-[#999999] mb-3'>OR</p>

                                <button className='w-full flex justify-center items-center mb-3 border border-[#E4E4E7] hover:bg-[#eee] duration-300'>
                                    <img className='w-9 mr-3' src={googleLogo} alt="" />
                                    <span className='text-[#999999]'>Sign Up With Google</span>
                                </button>

                                <p className="text-sm text-center mt-4 w-full">
                                    <span>Already Have an Account?</span>
                                    <Link to="/Login" className="font-medium text-primary underline ml-1">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSignup
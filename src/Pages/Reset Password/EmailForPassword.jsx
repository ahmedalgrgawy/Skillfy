import { useState } from "react"
import { validateEmail } from "../../utils/helpers"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setToken } from "../../features/authSlice"
import axiosInstance from "../../utils/axiosInstance"

const EmailForPassword = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleContinue = async (e) => {

        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please, Enter Your Valid Email Address');
            return;
        }

        setError('')


        try {
            const response = await axiosInstance.post('/auth/forgot-password', {
                "email": email
            })

            if (response.status === 200) {

                dispatch(setToken(response.data.token))

                localStorage.setItem('accessToken', response.data.token)

                navigate('/reset-password')
            }

        } catch (error) {
            setError(error.response.data.error)
        }

    }

    return (
        <div className="bg-main_bg_color h-screen flex justify-center items-center text-center">
            <div className='bg-white text-center w-[330px] md:w-[500px] h-[500px] p-3 shadow-md flex justify-center items-center'>
                <form onSubmit={handleContinue} action="" className='flex flex-col w-full px-5 gap-5'>

                    <div className='my-6 flex justify-center items-center flex-col'>
                        <h1 className='font-medium mb-3 text-3xl '>Reset Password</h1>
                        <p className='text-xs text-[#4D4D4D] w-[70%]'>Please enter your email address to for us to send you the link to reset your password on.</p>
                    </div>

                    <div className='flex flex-col items-start mb-6'>

                        <label className='my-3' htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-field ' type="text" placeholder='Enter Your Email' id='email' />

                    </div>

                    <div>
                        {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                        <button className='main-btn my-3' type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailForPassword
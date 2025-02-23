import { useState } from "react"
import { Password } from "../../Components/Input/Password"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"

const ResetPassword = () => {

    const navigate = useNavigate()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)

    const handleReset = async (e) => {
        e.preventDefault();

        if (!password) {
            setError('Please, Enter The Password')
            return;
        }

        if (!confirmPassword) {
            setError('Please, Enter The Confirmed Password')
            return;
        }

        if (!(password === confirmPassword)) {
            setError('Passwords Does Not Match')
            return;
        }

        try {

            const response = await axiosInstance.post('/auth/reset-password', {
                "password": password,
                "confirmPassword": confirmPassword
            })

            if (response.status === 200) {
                // toaster
                navigate('/login')
            }


        } catch (error) {
            setError(error.response.data.error)
            console.log(error);
        }

        setError('')
    }

    return (
        <div className="bg-main_bg_color h-screen flex justify-center items-center text-center">
            <div className='bg-white text-center w-[330px] md:w-[500px] h-[500px] p-3 shadow-md '>
                <div>
                    <form onSubmit={handleReset} action="" className='flex flex-col px-5 gap-5'>

                        <div className='my-6 text-start'>
                            <h1 className='font-medium mb-3 text-3xl'>Set The New Password</h1>
                        </div>

                        <div className='flex flex-col items-start '>

                            <label className='my-3' htmlFor="password">New Password</label>
                            <Password id={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                            <label className='my-3' htmlFor="confirmPassword">Confirm Password</label>
                            <Password id={'confirmPassword'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                            {error && <p className="text-red-500 my-3 text-[16px] ">{error}</p>}

                            <button className='main-btn my-8' type="submit">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
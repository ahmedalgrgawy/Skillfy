import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosInstance from "../../utils/axiosInstance"
import { useSelector } from "react-redux"

const Verify = () => {

    const email = useSelector(state => state.user.email)

    const navigate = useNavigate()

    const [resetCode, setResetCode] = useState('');
    const inputRef = useRef(null);
    const [error, setError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        // Extract the entered digit and update the code state
        const newDigit = event.target.value.slice(0, 1);
        setResetCode((prevCode) => prevCode.slice(0, prevCode.length) + newDigit);

        // Focus the next input position if the current field is full
        if (event.target.value.length === 1 && resetCode.length < 4) {
            const nextInput = inputRef.current.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };


    const handleVerify = async (event) => {

        event.preventDefault();

        setIsSubmitting(true);

        setError('');

        try {
            const response = await axiosInstance.post('/auth/verify', {
                "email": email,
                "otp": resetCode
            })

            if (response.status === 200) {
                navigate('/login')
            }
        } catch (error) {
            setError(error.response.data.error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="bg-main_bg_color h-screen flex justify-center items-center text-center">
            <div className='bg-white text-center w-[330px] md:w-[500px] h-[500px] p-3 shadow-md flex justify-center items-center'>
                <form onSubmit={handleVerify} action="" className='flex flex-col w-full px-5 gap-5'>

                    <div className='my-6 flex justify-center items-center flex-col'>
                        <h1 className='font-medium mb-3 text-3xl'>Verify Your Email</h1>
                        <p className='text-xs text-[#4D4D4D]'>We’ll send the code on {email}</p>
                    </div>

                    <div className='flex flex-col justify-center items-center mb-6'>
                        <div className="flex justify-center items-center space-x-8 mb-10 w-[70%]">
                            {[1, 2, 3, 4].map((index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="w-10 h-10 border bg-[#F4F0FE] border-[#F4F0FE] rounded-full text-center focus:outline-none focus:ring-2 focus:ring-main_color"
                                    maxLength={1}
                                    value={resetCode[index - 1] || ''}
                                    onChange={handleChange}
                                    ref={inputRef}
                                />
                            ))}
                        </div>

                        <a href="#" className="text-main_color">Send Me a New Reset Code</a>
                    </div>

                    <div>
                        {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                        <button className='main-btn my-3' type="submit" disabled={isSubmitting}>Verify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Verify
import { Link } from "react-router-dom"
import { useState } from "react"
import { CiUser, CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setRole } from "../../features/authSlice";

const WhoAreYou = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const [selected, setSelected] = useState(null)


    const handleContinue = () => {
        if (typeof (selected) === 'string') {
            dispatch(setRole(selected))
            navigate('/what-user-like')
            setError('')
        } else {
            setError("Please Select A Role")
        }

    }

    return (
        <div className="bg-main_bg_color lg:h-screen flex justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-8 lg:my-0'>
                <div className='bg-white text-center w-[350px] md:w-[500px] md:h-[610px] p-3 shadow-md relative'>
                    <div className='flex flex-col mx-3'>
                        <div className='my-3'>

                            <h1 className='font-medium mb-3 text-3xl'>Who Are You?</h1>

                            <p className='text-xs text-[#4D4D4D]'>
                                Please tell us a little bit more about yourself and who you are.
                            </p>

                        </div>

                        <div className="my-6">

                            <div onClick={() => { setSelected('student') }} className={`flex flex-col justify-center items-center rounded-md cursor-pointer border-2 ${selected === 'student' ? "border-main_color" : "border-[#eaeaea]"}  mb-5 gap-3 p-3`}>

                                <span className="p-3 rounded-xl bg-[#52C3FF]">
                                    <CiUser color="white" size={28} />
                                </span>

                                <h3 className="font-semibold text-lg">Potential Student</h3>

                                <p className="text-[#4D4D4D] text-sm w-[70%]">You are planning to use our platform as a student to learn new skills.</p>

                            </div>

                            <div onClick={() => { setSelected('tutor') }} className={`flex flex-col justify-center items-center rounded-md cursor-pointer border-2 ${selected === 'tutor' ? "border-main_color" : "border-[#eaeaea]"} gap-3 p-4`}>

                                <span className="p-3 rounded-xl bg-[#FFDFD6]">
                                    <CiStar size={28} />
                                </span>

                                <h3 className="font-semibold text-lg">Potential Tutor</h3>

                                <p className="text-[#4D4D4D] text-sm w-[70%]">You are planning to use our platform to teach the skills you already know.</p>

                            </div>

                        </div>

                        <div className='flex flex-col items-start '>

                            {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                            <button onClick={handleContinue} className='main-btn my-3' type="submit">Continue</button>

                        </div>
                    </div>

                    <Link to='/how-to-learn' className="absolute left-3 top-3 p-1.5 bg-main_color hover:bg-main_color_darker rounded-full ">
                        <RiArrowGoBackFill size={16} color="white" />
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default WhoAreYou
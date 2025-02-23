import { Link } from "react-router-dom"
import { useState } from "react"
import { CiUser, CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setLearnOption } from "../../features/authSlice";

const HowToLearn = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const [selected, setSelected] = useState(null)


    const handleContinue = () => {
        if (typeof (selected) === 'string') {
            dispatch(setLearnOption(selected))
            navigate('/who-is-user')
            setError('')
        } else {
            setError("Please Select A Way")
        }

    }

    return (
        <div className="bg-main_bg_color lg:h-screen flex justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-8 lg:my-0'>
                <div className='bg-white text-center w-[350px] md:w-[500px] md:h-[690px] p-3 shadow-md relative'>
                    <div className='flex flex-col mx-3'>
                        <div className='my-3'>

                            <h1 className='font-medium mb-3 mx-auto w-[70%] text-3xl'>How Would You Like
                                To Learn?</h1>
                            <p className='text-xs text-[#a68d8d]'>
                                Please, Select an option.
                            </p>

                        </div>

                        <div className="my-6">

                            <div onClick={() => { setSelected('ai-learner') }} className={`flex flex-col justify-center items-center rounded-md cursor-pointer border-2 ${selected === 'ai-learner' ? "border-main_color" : "border-[#eaeaea]"}  mb-5 gap-3 p-3`}>

                                <span className="p-3 rounded-xl bg-[#52C3FF]">
                                    <CiUser color="white" size={28} />
                                </span>

                                <h3 className="font-semibold text-lg">AI Study Partner</h3>

                                <p className="text-[#4D4D4D] text-sm w-[70%]">You want to get your own customized roadmap adjusted according to your liking.</p>

                            </div>

                            <div onClick={() => { setSelected('normal-learner') }} className={`flex flex-col justify-center items-center rounded-md cursor-pointer border-2 ${selected === 'normal-learner' ? "border-main_color" : "border-[#eaeaea]"} gap-3 p-4`}>

                                <span className="p-3 rounded-xl bg-[#FFDFD6]">
                                    <CiStar size={28} />
                                </span>

                                <h3 className="font-semibold text-lg">Normal Courses</h3>

                                <p className="text-[#4D4D4D] text-sm w-[70%]">You want to use our platform as a normal
                                    E-learning one and just access the courses.</p>

                            </div>

                        </div>

                        <div className='flex flex-col items-start '>

                            {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                            <button onClick={handleContinue} className='main-btn my-3' type="submit">Continue</button>

                        </div>
                    </div>

                    <Link to='/login' className="absolute left-3 top-3 p-1.5 bg-main_color hover:bg-main_color_darker rounded-full ">
                        <RiArrowGoBackFill size={16} color="white" />
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default HowToLearn;
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { whatDoYouLikeOptions } from "../../assets/data"
import { RiArrowGoBackFill } from "react-icons/ri"


const WhatDoYouLike = () => {

    const navigate = useNavigate()

    const [error, setError] = useState(false)

    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        const newCheckedItems = event.target.checked
            ? [...checked, event.target.value]
            : checked.filter((item) => item !== event.target.value);
        setChecked(newCheckedItems);
    };

    const handleContinue = () => {
        if (checked.length > 0) {
            setError("")
            navigate("/signup")
        } else {
            setError("Please, Choose at least one!")
        }
    }

    return (
        <div className="bg-main_bg_color lg:h-screen flex justify-center items-center">
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-8 lg:my-0'>
                <div className='bg-white text-center w-[350px] md:w-[500px] md:h-[610px] p-3 shadow-md relative'>
                    <div>
                        <div className='flex flex-col mx-3'>
                            <div className='my-3'>

                                <h1 className='font-medium mb-3 text-3xl'>What do you like?</h1>

                                <p className='text-xs text-[#4D4D4D]'>
                                    please choose at least one from the
                                    following items to get started
                                </p>

                            </div>

                            <div className="mt-6 mb-3 flex flex-col gap-2">

                                {whatDoYouLikeOptions.map((option, index) => {
                                    return (
                                        <label key={index} className="option mb-7 w-full border border-[#eaeaea] p-3 text-start cursor-pointer" htmlFor={option.id}>
                                            <input value={option.id} id={option.id} onChange={(event) => handleCheck(event)} className="mx-2" type="checkbox" name="preference" />
                                            {option.text}
                                        </label>)
                                })}

                            </div>

                            <div className='flex flex-col items-start '>

                                {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                                <button onClick={handleContinue} className='main-btn my-3' type="submit">Continue</button>

                            </div>
                        </div>
                    </div>

                    <Link to='/who-is-user' className="absolute left-2 top-3 p-1.5 bg-main_color rounded-full">
                        <RiArrowGoBackFill size={16} color="white" />
                    </Link>

                </div>
            </div>
        </div >
    )
}

export default WhatDoYouLike
import { useState } from "react";
import { homePageImgs } from "../../assets/data"
import { CgProfile } from "react-icons/cg"
import { FaRegTrashCan } from "react-icons/fa6";
import { MdPhotoLibrary } from "react-icons/md";
import { validateEmail } from "../../utils/helpers";
import RadioInput from "../../Components/Input/RadioInput";
import { useSelector } from "react-redux";

const ProfileSettings = () => {

    const userRole = useSelector(state => state.auth.role)
    const userEmail = useSelector(state => state.user.email)
    const userName = useSelector(state => state.user.name)

    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [role, setRole] = useState(userRole)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [courses, setCourses] = useState('')
    const [gender, setGender] = useState('male')
    const [error, setError] = useState(false)

    const handleSaveChanges = async (e) => {

        e.preventDefault();

        if (!name) {
            setError('Please, Enter The Name')
            return;
        }

        if (!validateEmail(email)) {
            setError('Please, Enter a Valid Email Address');
            return;
        }


        setError('')

        // api call

    }

    return (
        <>
            <div className="flex flex-col items-center justify-center md:items-start mx-3 md:mx-0 my-20 md:my-0 gap-12 sm:gap-6">

                <h2 className="flex items-center px-4 cursor-pointer w-full font-semibold">
                    <CgProfile className="mr-4" size={25} />
                    <span className="text-[30px]">Profile</span>
                </h2>

                <div className="flex justify-center items-center gap-12">
                    <img src={homePageImgs.profileImg} className="w-[100px] md:w-[150px]" alt="User" />
                    <div>
                        <button className="flex items-center gap-3 main-btn mb-5 border border-main_color px-12">
                            <MdPhotoLibrary />
                            Change
                        </button>
                        <button className="flex items-center gap-3 main-btn bg-white text-main_color border border-main_color px-12 hover:bg-red-500 hover:text-white hover:border-red-500">
                            <FaRegTrashCan />
                            Remove
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSaveChanges} action="" className='flex flex-col-reverse md:flex-row items-center md:items-start w-[80%] gap-10 md:gap-48'>

                    <div className='flex flex-col items-start w-full'>

                        <label className='my-4 font-medium text-lg' htmlFor="name">Full Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='input-field' type="text" placeholder={userName} id='name' />

                        <label className='my-4 font-medium text-lg' htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' type="text" placeholder={userEmail} id='email' />

                        <label className='my-4 font-medium text-lg' htmlFor="email">Gender</label>
                        <div className="flex gap-8">
                            <RadioInput value="male" label="Male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                            <RadioInput value="female" label="Female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                        </div>

                        {error && <p className="text-red-500 text-[16px] ">{error}</p>}

                        <button className="main-btn mt-8" type="submit">
                            Save Changes
                        </button>

                    </div>

                    <div className='flex flex-col items-start w-full'>

                        <label className='my-4 font-medium text-lg' htmlFor="role">Role</label>
                        <select className="input-field focus:text-black text-gray_color" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="student">Student</option>
                            <option value="tutor">Tutor</option>
                        </select>

                        <label className='my-4 font-medium text-lg' htmlFor="phoneNumber">Phone Number</label>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='input-field' type="text" placeholder='Change Your Phone' id='phoneNumber' />

                        <label className='my-4 font-medium text-lg' htmlFor="courses">Courses</label>
                        <select className="input-field focus:text-black text-gray_color" value={courses} onChange={(e) => setCourses(e.target.value)}>
                            <option value="basics-courses">Basics Courses</option>
                            <option value="normal-courses">Normal Courses</option>
                            <option value="advanced-courses">Advanced Courses</option>
                        </select>

                    </div>
                </form>
            </div>
        </>
    )
}

export default ProfileSettings
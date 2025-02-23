import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";


const ProfileLayout = () => {

    const dispatch = useDispatch()

    return (
        <div className="bg-main_bg_color w-[180px] h-[210px] flex flex-col justify-center items-start gap-5 shadow-md border-gray_color overflow-hidden">
            <Link to='/profile' className="flex items-center px-4 cursor-pointer">
                <CgProfile className="mr-2" size={20} fontWeight={700} />
                <span >My Profile</span>
            </Link>

            <Link to='/settings' className="flex items-center px-4 cursor-pointer">
                <CiSettings className="mr-2" size={20} fontWeight={700} />
                <span >Settings</span>
            </Link>

            <Link to='/home' className="flex items-center px-4 cursor-pointer">
                <IoLanguage className="mr-2" size={20} fontWeight={700} />
                <span>Language</span>
            </Link>

            <Link to='/' onClick={() => dispatch(logout())} className="flex items-center px-4 cursor-pointer">
                <BiLogOut className="mr-2" size={20} fontWeight={700} />
                <button>Logout</button>
            </Link>

        </div >
    )
}

export default ProfileLayout
import { Link } from "react-router-dom"
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { homePageImgs } from "../../assets/data";
import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

const NotificationsLayout = ({ onclose }) => {

    const [read, setRead] = useState(false)

    return (
        <div className="p-7 bg-main_bg_color w-[350px] md:w-[500px] md:h-[500px] flex flex-col justify-between gap-5 shadow-md border-gray_color overflow-hidden">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-2xl flex items-center">Notifications <img className="ml-1" src={homePageImgs.bellImg} alt="bell" /></h3>
                <IoMdClose className="cursor-pointer border rounded-md border-gray_color " size={20} onClick={onclose} />
            </div>

            <div className=" flex flex-col justify-between overflow-y-scroll gap-3 px-2">
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
                <div className="flex justify-between my-3">
                    <div>
                        <h2 className="font-semibold">New Courses </h2>
                        <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                        <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between ">
                <div onClick={() => setRead(true)} className="flex justify-center items-center cursor-pointer text-main_color_darker">
                    <IoCheckmarkDone className="mr-2" />
                    <span>Make All As Read</span>
                </div>
                <Link to='/notifications' >
                    <button className="main-btn">View all notifications</button>
                </Link>
            </div>
        </div >
    )
}

export default NotificationsLayout
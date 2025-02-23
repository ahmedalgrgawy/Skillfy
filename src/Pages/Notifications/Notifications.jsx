import { useState } from "react"
import UpgradePlanCard from "../../Components/Cards/UpgradePlanCard"
import UserCard from "../../Components/Cards/UserCard"
import Navbar from "../../Components/Navbar/Navbar"
import { IoIosNotifications } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";

const Notifications = () => {

    const [read, setRead] = useState(false)

    return (
        <div>
            <Navbar />



            <div className="flex items-start gap-4 sm:gap-2 py-10">
                <div className="flex-[1] mx-9 sm:mx-4">

                    <UserCard />

                    <UpgradePlanCard />

                </div>

                <div className="flex-[3] flex flex-col justify-center  gap-4 ">

                    <div className="flex items-center ml-10 ">
                        <CiBellOn className="mr-4" size={35} />
                        <h1 className="font-semibold text-[35px]">Notifications</h1>
                    </div>

                    <div className="h-[600px] rounded-3xl overflow-y-scroll gap-3 px-12 py-6 mx-10 shadow-md border border-gray_color">
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
                            <div>
                                <h2 className="font-semibold">New Courses </h2>
                                <p className="font-normal text-gray_color text-sm ">there is new courses have been released</p>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                {read ? "" : <span className="p-1 mb-1 rounded-full text-main_color_darker bg-main_color bg-opacity-30"><IoIosNotifications size={20} className="" /></span>}
                                <span className="text-[#808080] text-[12px]">7 Hours ago</span>
                            </div>
                        </div>
                        <div className="flex justify-between my-7">
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
                </div>
            </div>
        </div>
    )
}

export default Notifications
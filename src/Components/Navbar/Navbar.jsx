import { useState } from "react";
import { homePageImgs, welcomeImgs } from "../../assets/data"
import Btn from "../Btn/Btn"
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NotificationsLayout from "../../Pages/Notifications/NotificationsLayout";
import ProfileLayout from "../../Pages/Profile/ProfileLayout";
import Overlay from "../Layouts/Overlay";

const Navbar = () => {

    const [NavLinksOpen, setNavLinksOpen] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [account, setAccount] = useState(false);
    const [overlay, setOverlay] = useState(false);

    function handleToggleNavLinks() {
        setNavLinksOpen(!NavLinksOpen);
        setOverlay(!overlay)
    }
    function handleNotification() {
        setNotifications(!notifications);
        setOverlay(!overlay)
    }
    function handleAccount() {
        setAccount(!account);
        setOverlay(!overlay)
    }
    function handleOverlay() {
        setNavLinksOpen(false);
        setNotifications(false);
        setAccount(false);
        setOverlay(false)
    }

    return (
        <div>
            {overlay && (
                <div onClick={handleOverlay}>
                    <Overlay />
                </div>
            )}

            <div className="relative flex justify-between items-center border-b-[1px] border-gray_color px-9 lg:py-0 py-2 sm:px-4">
                <img
                    src={welcomeImgs.logoImg}
                    alt="logo"
                    className="w-24 md:w-32"
                />
                <ul className="hidden lg:flex space-x-14  items-center text-base font-semibold text-[#808080] ">
                    <NavLink activeclassname="active" to='/home' className=" py-6 cursor-pointer">
                        Home
                    </NavLink>
                    <NavLink activeclassname="active" to='/my-courses' className=" py-6 cursor-pointer hover:text-main_color  ">
                        My Courses
                    </NavLink>
                    <NavLink activeclassname="active" to='/tracks' className="py-6 cursor-pointer hover:text-main_color  ">
                        Tracks
                    </NavLink>
                    <NavLink activeclassname="active" to='/leaderboard' className="py-6  cursor-pointer hover:text-main_color ">
                        Leaderboard
                    </NavLink>
                </ul>

                {NavLinksOpen && (
                    <>
                        <ul className="lg:hidden flex flex-col absolute items-center rounded-md top-[54px] md:top-[68px] bg-white  w-[200px] right-3 z-[1000]">
                            <NavLink activeclassname="active" to='/home' className="  py-6 cursor-pointer">
                                Home
                            </NavLink>
                            <NavLink activeclassname="active" to='/my-courses' className=" py-6 cursor-pointer hover:text-main_color  ">
                                My Courses
                            </NavLink>
                            <NavLink activeclassname="active" to='/tracks' className="py-6 cursor-pointer hover:text-main_color  ">
                                Tracks
                            </NavLink>
                            <NavLink activeclassname="active" to='/leaderboard' className="py-6  cursor-pointer hover:text-main_color ">
                                Leaderboard
                            </NavLink>
                        </ul>
                    </>
                )}

                {notifications && (
                    <>
                        <div className="absolute top-[75px] right-8 sm:right-[50%] sm:translate-x-1/2  z-[1000]">
                            <NotificationsLayout onclose={handleNotification} />
                        </div>
                    </>
                )}

                {account && (
                    <>
                        <div className="absolute top-[75px] right-3 md:right-28 z-[1000]">
                            <ProfileLayout />
                        </div>
                    </>
                )}

                <div className="gap-4 sm:gap-0 flex justify-between items-center">
                    <div className="gap-3 flex justify-between items-center ">
                        <Btn style="rounded-2xl sm:rounded-md  sm:text-xs py-[5px] text-[14px] font-semibold w-fit">
                            Upgrade
                        </Btn>
                        <img
                            src={homePageImgs.searchImg}
                            alt="search"
                            className="cursor-pointer block sm:p-1 sm:w-7 sm:h-7 p-3 w-12 h-12 rounded-full border-x border-[#EAEAEA]"
                        />
                        <img
                            onClick={handleAccount}
                            src={homePageImgs.homeImg}
                            alt="home"
                            className="cursor-pointer block sm:p-1 sm:w-7 sm:h-7 p-3 w-12 h-12 rounded-full border-x border-[#EAEAEA]"
                        />
                        <img
                            onClick={handleNotification}
                            src={homePageImgs.NotificationImg}
                            alt="Notification"
                            className="cursor-pointer block sm:p-1 sm:w-7 sm:h-7 p-3  w-12 h-12 rounded-full border-x border-[#EAEAEA]"
                        />
                        <FaBars
                            // size={35}
                            className="lg:hidden block cursor-pointer text-main_color_darker sm:text-[25px] text-[35px]"
                            onClick={handleToggleNavLinks}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
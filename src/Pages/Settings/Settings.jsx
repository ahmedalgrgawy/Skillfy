import Navbar from "../../Components/Navbar/Navbar"
import UpgradePlanCard from "../../Components/Cards/UpgradePlanCard"
import { MdOutlinePayments } from "react-icons/md";
import { CgProfile } from "react-icons/cg"
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";
import ProfileSettings from "../Profile/ProfileSettings";
import NotificationsSettings from "../Notifications/NotificationsSettings";
import { PaymentSettings } from "./PaymentSettings";
import PreferenceSettings from "./PreferenceSettings";

export const Settings = () => {

    const [profileOpen, setProfileOpen] = useState(true);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [preferenceOpen, sePreferenceOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const handleProfile = () => {
        setProfileOpen(true)
        setNotificationsOpen(false)
        sePreferenceOpen(false)
        setPaymentOpen(false)
    }
    const handlePreference = () => {
        sePreferenceOpen(true)
        setProfileOpen(false)
        setNotificationsOpen(false)
        setPaymentOpen(false)
    }
    const handlePayments = () => {
        setPaymentOpen(true)
        setProfileOpen(false)
        setNotificationsOpen(false)
        sePreferenceOpen(false)
    }
    const handleNotifications = () => {
        setNotificationsOpen(true)
        setProfileOpen(false)
        sePreferenceOpen(false)
        setPaymentOpen(false)
    }

    return (
        <div>
            <Navbar />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-2 py-10">
                <div className="flex-[1]  mx-9 sm:mx-4">

                    <div className="w-[315px] border border-gray_color rounded-md p-6 mb-16">
                        <h2 className="font-semibold text-2xl mb-3">Settings</h2>
                        <div className="flex flex-col justify-center items-start gap-5 ">
                            <div onClick={handleProfile} className={`flex items-center px-4 cursor-pointer w-full py-2 rounded-lg  ${profileOpen ? " bg-main_color text-white" : ''}`}>
                                <CgProfile className="mr-2" size={20} fontWeight={700} />
                                <span >Profile Settings</span>
                            </div>

                            <div onClick={handlePayments} className={`flex items-center px-4 cursor-pointer w-full py-2 rounded-lg ${paymentOpen ? " bg-main_color text-white" : ''}`}>
                                <MdOutlinePayments className="mr-2" size={20} fontWeight={700} />
                                <span >Payments Details</span>
                            </div>

                            <div onClick={handlePreference} className={`flex items-center px-4 cursor-pointer w-full py-2 rounded-lg ${preferenceOpen ? " bg-main_color text-white" : ''}`}>
                                <FaHeart className="mr-2" size={20} fontWeight={700} />
                                <span>Preferences</span>
                            </div>

                            <div onClick={handleNotifications} className={`flex items-center px-4 cursor-pointer w-full py-2 rounded-lg ${notificationsOpen ? " bg-main_color text-white" : ''}`}>
                                <IoIosNotifications className="mr-2" size={20} fontWeight={700} />
                                <button>Notifications </button>
                            </div>

                        </div >
                    </div>

                    <UpgradePlanCard />

                </div>

                <div className="md:flex-[3]">
                    {profileOpen && <ProfileSettings />}
                    {paymentOpen && <PaymentSettings />}
                    {preferenceOpen && <PreferenceSettings />}
                    {notificationsOpen && <NotificationsSettings />}
                </div>
            </div>
        </div >
    )
}

import { IoIosNotifications } from "react-icons/io";
import { useState } from "react";
import { CheckBtn } from "../../Components/Input/CheckBtn";

const NotificationsSettings = () => {

    const [announcement, setAnnouncement] = useState(false);
    const [streak, setStreak] = useState(true);
    const [subscribe, setSubscribe] = useState(true);
    const [emailNotification, setEmailNotification] = useState(false);
    const [discounts, setDiscounts] = useState(true);

    console.log(announcement, streak, subscribe, emailNotification, discounts);


    return (
        <div className="flex flex-col items-center justify-center md:items-start mx-3 md:mx-0 my-20 md:my-0 gap-4 sm:gap-6">

            <h2 className="flex items-center px-4 cursor-pointer w-full font-semibold">
                <IoIosNotifications className="mr-4" size={30} />
                <span className="text-[30px]">Notifications</span>
            </h2>
            <div className="h-[550px] w-[330px] md:w-[830px] py-8 px-10 border rounded-lg border-gray_color flex gap-4 flex-col">
                <div className="flex justify-between items-center w-full">
                    <label className="font-semibold text-lg md:text-xl capitalize">announcement from  courses i am enrolled in</label>
                    <CheckBtn status={announcement} onChange={() => setAnnouncement(!announcement)} />
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-lg md:text-xl capitalize">Reminders</h2>

                    <div className="flex justify-between items-center w-full">
                        <label className="font-norma text-lg md:text-xl capitalize">streak reminder</label>
                        <CheckBtn status={streak} onChange={() => setStreak(!streak)} />
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <label className="font-norma text-lg md:text-xl capitalize">subscribe end reminder</label>
                        <CheckBtn status={subscribe} onChange={() => setSubscribe(!subscribe)} />
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <label className="font-semibold text-lg md:text-xl capitalize">email notification</label>
                    <CheckBtn status={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-lg md:text-xl capitalize">special offers</h2>

                    <div className="flex justify-between items-center w-full">
                        <label className="font-norma text-lg md:text-xl capitalize">Get notified about free week and subscription discounts</label>
                        <CheckBtn status={discounts} onChange={() => setDiscounts(!discounts)} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NotificationsSettings
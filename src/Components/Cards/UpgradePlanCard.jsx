import { homePageImgs } from "../../assets/data"
import Btn from "../Btn/Btn"

const UpgradePlanCard = () => {
    return (
        <div className="w-[315px] text-center px-8 py-6 sm:px-1  border-[1px] border-gray_color rounded-[28px]">
            <img
                src={homePageImgs.payImg}
                alt="pay"
                className="mx-auto"
            />
            <h1 className="font-semibold text-xl sm:text-sm text-[#172239] mt-2 mb-3 ">
                Upgrade Plan
            </h1>
            <p className="font-medium text-xl text-gray_color sm:text-xs mb-14 ">
                Become a <span className="text-[#172239] ">Pro</span> member today
                and save more than <span className="text-[#172239] ">75%.</span>
            </p>
            <Btn style="rounded-2xl  py-[5px] text-[14px] sm:text-sm sm:rounded-xl sm:w-fit sm:px-4 sm:m-auto font-semibold ">
                See Deal
            </Btn>
        </div>
    )
}

export default UpgradePlanCard
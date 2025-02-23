import { useSelector } from 'react-redux'
import { homePageImgs } from '../../assets/data'
import ProgressBar from '../Layouts/ProgressBar'

const UserCard = () => {

    const userName = useSelector(state => state.user.name)

    return (
        <div className="mb-16 flex flex-col justify-between items-start  px-3 py-6 border-[1px] border-gray_color rounded-[28px]">
            <div className="flex items-center justify-start sm:flex-col sm:ml-0  gap-2 ml-5 mb-11 ">
                <img src={homePageImgs.profileImg} alt="profileImg" />
                <div>
                    <h1 className="mb-2">Hello, {userName}</h1>
                    <ProgressBar percentage={40} />
                </div>
            </div>
            <div className="sm:text-center   ">
                <img
                    src={homePageImgs.starImg}
                    alt="star"
                    className="inline-block ml-5 sm:m-0"
                />
                <span className="text-main_color ml-4 inline-block">Streck</span>
                <div className=" flex items-start justify-center sm:flex-col border-b-[1px]  border-gray_color ">
                    <div className="flex-1 p-5 text-center relative sm:after:hidden sm:w-full after:absolute after:content-[''] after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[50px] after:bg-gray_color ">
                        <h1 className="font-semibold text-[#000] text-base ">
                            3 Days
                        </h1>
                        <p className="text-gray_color text-xs  ">Challenge Days Done</p>
                    </div>
                    <div className=" flex-1 p-5 text-center   ">
                        <h1 className="font-semibold text-[#000] text-base ">
                            2 Days
                        </h1>
                        <p className="text-gray_color text-xs  ">
                            Remaining Until The Next Milestone
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-11 sm:text-center">
                <img
                    src={homePageImgs.teacherImg}
                    alt="star"
                    className="inline-block ml-5 sm:ml-0"
                />
                <span className="text-main_color ml-4 inline-block">Courses</span>
                <div className=" flex items-center justify-center sm:flex-col">
                    <div className=" p-5 sm:pr-5 pr-7 text-center relative sm:after:hidden after:absolute after:content-[''] after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-[50px] after:bg-gray_color ">
                        <h1 className="text-xs">completed </h1>
                        <p className="text-gray_color text-xs  ">2</p>
                    </div>
                    <div className="  p-5 sm:pl-5 pl-7 text-center  ">
                        <h1 className="text-xs">In Progress</h1>
                        <p className="text-gray_color text-xs  ">1</p>
                    </div>
                </div>
            </div>
        </div>)
}

export default UserCard
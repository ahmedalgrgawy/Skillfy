import Navbar from "../../Components/Navbar/Navbar"
import ProgressBar from "../../Components/Layouts/ProgressBar";
import { homePageImgs } from "../../assets/data";
import { Link } from "react-router-dom";
import firstImg from "../../assets/Profile/undergraduate 1.png"
import { useSelector } from "react-redux";

const Profile = () => {

    const userEmail = useSelector(state => state.user.email)
    const userName = useSelector(state => state.user.name)
    const userRole = useSelector(state => state.auth.role)

    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center flex-col lg:flex-row gap-4 py-10">
                <div className="flex flex-col items-center md:items-start">

                    <div className="flex items-center  ml-10 mb-5">
                        <h1 className="font-semibold text-2xl">Achievements 🏆</h1>
                    </div>

                    <div className="w-[350px] h-[550px] md:h-[550px] md:w-[390px] rounded-l-3xl overflow-y-scroll  flex flex-col  gap-5 px-12 py-6 mx-10 shadow-md border border-gray_color">
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6 my-4">
                            <div className="flex items-center p-4 rounded-full bg-main_color bg-opacity-25">
                                <img className="w-[40px]" src={firstImg} alt="" />
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <h3 className="font-semibold text-xl">Quick Learner</h3>
                                <span className="text-[#808080] text-[12px]">You have finished 10 courses within the last 7 days.</span>
                                <ProgressBar percentage={80} />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col items-center justify-center md:items-start mx-3 md:mx-0 my-20 md:my-0 gap-14 sm:gap-6 ">

                    <div className="flex justify-center items-center gap-4">
                        <img src={homePageImgs.profileImg} className="w-[100px] md:w-[150px]" alt="User" />
                        <div >
                            <h2 className="font-semibold text-xl">{userName}</h2>
                            <h4 className="text-main_color text-lg my-2">{userRole}</h4>
                            <p className="text-gray_color text-sm">{userEmail}</p>
                        </div>
                    </div>

                    <div className="w-[700px flex flex-col items-center md:items-start text-center md:text-start">
                        <h2 className="font-semibold text-2xl md:text-3xl mb-5">My Certificates</h2>
                        <div className="px-4 py-2 border-2 border-gray_color ">
                            <p className="text-[16px] capitalize text-gray_color">you have no certifications in your profile yet</p>
                            <Link to='/tracks' className="text-[16px] capitalize underline text-main_color">please complete your track</Link>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center md:items-start text-center md:text-start">
                        <h2 className="uppercase font-semibold text-2xl md:text-3xl mb-5">skillfy courses completion</h2>

                        <div className="flex items-center justify-center flex-col lg:flex-row gap-5">
                            <div className="w-full">
                                <h3 className="font-semibold mb-5 text-xl">My Courses</h3>
                                <ul className="px-4 py-8 border-2 border-gray_color text-lg">
                                    <li>Intro to Sql</li>
                                    <li>Figma Tools</li>
                                </ul>
                            </div>
                            <div className="w-full">
                                <h3 className="font-semibold mb-5 text-xl">My Tracks</h3>
                                <p className="px-4 py-8 border-2 border-gray_color text-lg text-gray_color">You Have Not Completed any Track</p>
                                {/* <ul>
                                    <li>Intro to Sql</li>
                                    <li>Figma Tools</li>
                                </ul> */}
                            </div>
                            <div className="w-full">
                                <h3 className="font-semibold mb-5 text-xl">My Projects</h3>
                                <p className="px-4 py-8 border-2 border-gray_color text-lg text-gray_color">You Have Not Completed any Projects</p>
                                {/* <ul>
                                    <li>Intro to Sql</li>
                                    <li>Figma Tools</li>
                                </ul> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
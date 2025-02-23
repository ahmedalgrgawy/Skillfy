import { useState } from "react"
import SearchBar from "../../Components/Input/SearchBar"
import Navbar from "../../Components/Navbar/Navbar"
import trackImg from "../../assets/TRACK.jfif"

const Tracks = () => {

    const [search, setSearch] = useState('');

    const handleSearch = () => {
        // api call
        console.log(search);

    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center my-12">
                <div className="flex flex-col items-center justify-center gap-5 mb-10">
                    <h1 className="text-3xl font-normal ">Find Your Track</h1>
                    <p className="text-gray_color text-lg">Whatever your Level, You Will Find it</p>
                    <div className="md:w-[570px]">
                        <SearchBar searchTerm={search} onChange={(e) => setSearch(e.target.value)} handleSearch={handleSearch} />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16">
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                    <div className="border border-gray_color shadow-sm rounded-2xl overflow-hidden">
                        <img src={trackImg} alt="trackImg" className="" />
                        <div className="flex flex-col gap-6 py-6 px-6">
                            <div>
                                <h2 className="font-semibold text-xl mb-2">Flutter</h2>
                                <p className="text-[14px] leading-6">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold">Skills:</h3>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-gray_color bg-opacity-25 p-1 text-main_color text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                </div>
                            </div>
                            <button className="main-btn w-[50%] py-2 px-3 ">Show Courses</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks
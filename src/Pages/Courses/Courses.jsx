import { useState } from "react"
import { homePageImgs, Levels, ratings, tiersFilter } from "../../assets/data"
import Navbar from "../../Components/Navbar/Navbar"
import Stars from "../../Components/Layouts/Stars"
import trackImg from "../../assets/TRACK.jfif"


const Courses = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:flex-row gap-4 py-10 mx-10">
                <div className="w-full md:w-[600px] h-full border border-gray_color rounded-xl p-8 gap-4 flex flex-col mb-8 lg:mb-0">

                    <div className="border-b-2 border-gray_color w-full pb-3 mb-3">
                        <h3 className="font-normal text-xl mb-2">Level</h3>
                        <div>
                            {Levels.map((level, index) => {
                                return (
                                    <div key={index} className="flex flex-col justify-center">
                                        <label className="my-1">
                                            <input value={level} id={index} type="checkbox" className="p-2 my-2 mx-4 md:my-0" />
                                            {level}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="border-b-2 border-gray_color w-full pb-3 mb-3">
                        <h3 className="font-normal text-xl mb-2">Tier</h3>
                        <div className="flex gap-7">
                            {tiersFilter.map((tier, index) => {
                                return (
                                    <div className="cursor-pointer" key={index}  >
                                        <img src={tier.tierImg} alt={tier.tierName} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-normal text-xl mb-2">Ratings</h3>
                        <div>
                            {
                                ratings.map((rate, index) => {
                                    return (
                                        <label className="flex items-center gap-3" key={index} htmlFor={rate.text}>
                                            <input type="radio" name={rate.text} id={rate.text} />
                                            <Stars rate={rate.value} />
                                            {rate.text}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>


                <div className="flex flex-col items-center justify-center md:items-start mx-3 md:mx-12 my-20 md:my-0 gap-8 sm:gap-6 ">

                    <h1 className="text-2xl font">Ui/Ux Courses</h1>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>
                        <div className="border bg-[##ebebeb] border-gray_color shadow-md rounded-2xl overflow-hidden">
                            <img src={trackImg} alt="trackImg" className="rounded-3xl px-2 py-3 w-full" />
                            <div className="flex flex-col gap-4 py-4 px-6">
                                <div className="flex gap-4 flex-wrap">
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">Problem Solving</span>
                                    <span className="bg-main_color_darker bg-opacity-50 p-1 text-[10px] rounded-lg text-nowrap">4 days ago</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="font-semibold text-2xl capitalize">Ux</h2>
                                        <Stars rate={4} />
                                        <p className="text-[12px] leading-6 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page .</p>
                                    </div>
                                    <img src={homePageImgs.greenStarImg} className="w-10" alt="tier" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Courses
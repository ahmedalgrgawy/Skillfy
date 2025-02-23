import Navbar from "../../Components/Navbar/Navbar"
import PlayingCourse from "./PlayingCourse"
import { ReadingCourse } from "./ReadingCourse";
import CourseSection from "./CourseSection";
import { courseData } from "../../assets/data";
import { useDispatch, useSelector } from "react-redux";
import Roadmap from "./Roadmap";
import { setCourseDisplaying } from "../../features/coursesSlice";

const SingleCourse = () => {

    const dispatch = useDispatch()
    const courseDisplaying = useSelector(state => state.courses.courseDisplaying)

    const courseLessons = (arr) => {
        let lessons = 0;
        for (const obj of arr) {
            var length = Object.keys(obj.content).length;
            lessons = lessons + length
        }
        return lessons;
    }

    const playFun = (courseState) => {
        if (courseState === 'roadmap') {
            return (
                <Roadmap />
            )
        }

        if (courseState === 'video') {
            return (
                <PlayingCourse />
            )
        }

        return (
            <ReadingCourse />
        )

    }

    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start lg:flex-row gap-4 py-10 mx-10">
                <div className="w-full md:w-[350px] h-fit border border-gray_color rounded-xl gap-4 flex flex-col items-center md:items-start mb-8 lg:mb-0">
                    <div className="border-b-2 w-full px-2 py-4" onClick={() => dispatch(setCourseDisplaying('roadmap'))}>
                        <h2 className="text-2xl">Course Content</h2>
                        <p className="text-gray_color text-xs">{courseData.length} Sections, {courseLessons(courseData)} Lessons</p>
                    </div>
                    {courseData.map((section) => (
                        <div key={section.id} className="border-b-2 last:border-b-0 py-4 w-full px-2 flex flex-col gap-4">
                            <CourseSection title={section.title} contents={section.content} />
                        </div>
                    ))}
                </div>


                <div className="flex flex-col items-center justify-center md:items-start lg:mx-9 md:mx-20 my-20 md:my-0 gap-8 sm:gap-6 ">

                    <p className="text-xl text-main_color">Links</p>

                    <div className="w-full">
                        {playFun(courseDisplaying)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default SingleCourse
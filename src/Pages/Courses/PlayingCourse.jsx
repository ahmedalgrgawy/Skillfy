import Video from "../../Components/Layouts/Video"
import TestVideo from "../../assets/Github Development Flow.mkv"

const PlayingCourse = () => {
    return (
        <div className="flex flex-col gap-4 md:w-[600px] lg:w-[800px]">

            <div className="mb-3">
                <Video videoSrc={TestVideo} />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">Section 1: Introduction To Course </h2>
                    <button className="main-btn p-1 md:p-3 rounded-2xl md:w-1/4">Mark As Completed</button>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-xl">Notes:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore, assumenda aperiam reprehenderit a molestias voluptatum, amet, dolor blanditiis officiis odit? At ea esse, debitis culpa similique beatae accusantium tempore.</p>
                </div>
                <p className="font-semibold">
                    Material Link:
                    <a className="ml-2 text-main_color font-normal" href="#">linkUrl</a>
                </p>
            </div>
        </div>
    )
}

export default PlayingCourse
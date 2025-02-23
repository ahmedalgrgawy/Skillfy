import { courseData } from "../../assets/data"
import './style.css'

const Roadmap = () => {
    return (
        <div className="w-[300px] md:w-[750px] lg:w-[1000px] flex items-center justify-center timeline">
            <div className='timeline-content relative overflow-hidden'>
                {courseData.map((phase, index) => {
                    return (
                        <div key={index}>
                            <div className={`${index % 2 === 0 ? 'left float-left' : 'right float-right'}`}>
                                <div className='content p-5 bg-[#eee]'>
                                    <h3 className="font-bold text-xl">{phase.title}</h3>
                                    <p className="text-[14px] leading-8">{phase.description}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Roadmap
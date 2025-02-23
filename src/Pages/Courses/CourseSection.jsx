import { useState } from 'react';
import { FaRegPlayCircle } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import { RiArrowDownWideFill, RiArrowUpWideFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { setCourseDisplaying, setRoadmapData } from '../../features/coursesSlice';
import { courseData } from '../../assets/data';


function CourseSection({ title, contents }) {

    const dispatch = useDispatch()

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="course-section">
            <div className='flex justify-between items-center cursor-pointer mb-3' onClick={() => setIsExpanded(!isExpanded)}>
                <h3 className='text-[18px]'>{title}</h3>
                <span>{isExpanded ? <RiArrowUpWideFill className='text-2xl text-gray_color' /> : <RiArrowDownWideFill className='text-2xl text-gray_color' />}</span>
            </div>
            {isExpanded && (
                <div className='flex flex-col gap-5'>
                    {contents?.map((content, index) => {
                        return (
                            <div key={index} className='cursor-pointer' onClick={() => dispatch(setCourseDisplaying(content.contentType))}>
                                <h4>{index + 1}.{content.contentName}</h4>
                                <div className='flex gap-3 text-gray_color text-xs'>
                                    {content.contentType === "video" ?
                                        <span className='flex items-center'>
                                            <FaRegPlayCircle className='mr-1' />
                                            Video
                                        </span> :
                                        <span className='flex items-center'>
                                            <IoReaderOutline className='mr-1' />
                                            Reading
                                        </span>
                                    }
                                    <span>
                                        {content.contentTime}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
}

export default CourseSection;
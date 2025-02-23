import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './style.css'

const Slider = ({ slides, preViewNum }) => {

    return (
        <div>
            <Swiper
                slidesPerView={preViewNum}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {slides?.map((slide, index) => {
                    return (
                        <SwiperSlide key={index} className='bg-[#eaeaea]'>
                            <div className='mb-40 flex flex-col justify-center items-center text-center' >
                                <img src={slide.img} alt="" />
                                <h2 className='font-bold mb-5'>{slide.title}</h2>
                                <p>{slide.desc}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider
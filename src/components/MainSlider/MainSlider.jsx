import { Link } from "react-router-dom";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./MainSlider.css";

const MainSlider = () => {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#fff",
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={true}
      className="my-2 main-slider bg-white "
    >
      <SwiperSlide className="slider1  flex justify-center items-center flex-col">
        <p className="text-white text-[1.7rem] md:text-3xl lg:text-4xl  xl:text-5xl  font-normal   w-5/6  md:w-3/4 text-center tracking-wider leading-normal">
          We Supply High Quality and Hygienic Products with Traceability Records
        </p>
      </SwiperSlide>
      <SwiperSlide className="slider2 flex justify-center items-center flex-col">
        <p className="text-white text-[1.7rem] md:text-3xl lg:text-4xl  xl:text-5xl font-normal   w-5/6  md:w-3/4 text-center tracking-wider leading-normal">
          Heavy Equipment Rental Service
        </p>
      </SwiperSlide>
      <SwiperSlide className="slider3  flex justify-center items-center flex-col h-full">
        {" "}
        <p className="text-white text-[1.7rem] md:text-3xl lg:text-4xl  xl:text-5xl font-normal   w-5/6  md:w-3/4 text-center tracking-wider leading-normal">
          Global Standards are Maintained
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const HomeCarouselSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
        loop={true}
        speed={500}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-xl lg:text-2xl">ffff </h1>
              <p className="lg:text-[18px]">dfdfdfdfdfdfdfdfdf</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-xl lg:text-2xl">ffff </h1>
              <p className="lg:text-[18px]">dfdfdfdfdfdfdfdfdf</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-xl lg:text-2xl">ffff </h1>
              <p className="lg:text-[18px]">dfdfdfdfdfdfdfdfdf</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
              <h1 className="text-xl lg:text-2xl">ffff </h1>
              <p className="lg:text-[18px]">dfdfdfdfdfdfdfdfdf</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarouselSlider;

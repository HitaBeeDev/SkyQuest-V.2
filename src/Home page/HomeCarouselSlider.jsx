import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const HomeCarouselSlider = () => {
  return (
    <div className="flex items-center justify-center p-10 bg-red-300 h-screen">
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        loop={true}
        speed={500}
      >
        <SwiperSlide>
          <div className="flex flex-col mb-32 group relative shadow-lg text-white rounded-xl h-[20rem] w-[40rem] cursor-pointer">
            <div className="inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-red-500 group-hover:text-blue-400 h-[20rem] w-[40rem]" />
              <h1 className="text-xl lg:text-2xl">SLIDE 1 </h1>
              <p className="lg:text-[18px]">
                SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE
                1SLIDE 1SLIDE 1SLIDE 1SLIDE 1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col mb-32 group relative shadow-lg text-white rounded-xl h-[20rem] w-[40rem] cursor-pointer">
            <div className="inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-red-500 group-hover:text-blue-400 h-[20rem] w-[40rem]" />
              <h1 className="text-xl lg:text-2xl">SLIDE 1 </h1>
              <p className="lg:text-[18px]">
                SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE
                1SLIDE 1SLIDE 1SLIDE 1SLIDE 1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col mb-32 group relative shadow-lg text-white rounded-xl h-[20rem] w-[40rem] cursor-pointer">
            <div className="inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-red-500 group-hover:text-blue-400 h-[20rem] w-[40rem]" />
              <h1 className="text-xl lg:text-2xl">SLIDE 1 </h1>
              <p className="lg:text-[18px]">
                SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE
                1SLIDE 1SLIDE 1SLIDE 1SLIDE 1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col mb-32 group relative shadow-lg text-white rounded-xl h-[20rem] w-[40rem] cursor-pointer">
            <div className="inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-red-500 group-hover:text-blue-400 h-[20rem] w-[40rem]" />
              <h1 className="text-xl lg:text-2xl">SLIDE 1 </h1>
              <p className="lg:text-[18px]">
                SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE
                1SLIDE 1SLIDE 1SLIDE 1SLIDE 1
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col mb-32 group relative shadow-lg text-white rounded-xl h-[20rem] w-[40rem] cursor-pointer">
            <div className="inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <icon className="text-red-500 group-hover:text-blue-400 h-[20rem] w-[40rem]" />
              <h1 className="text-xl lg:text-2xl">SLIDE 1 </h1>
              <p className="lg:text-[18px]">
                SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE 1SLIDE
                1SLIDE 1SLIDE 1SLIDE 1SLIDE 1
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarouselSlider;

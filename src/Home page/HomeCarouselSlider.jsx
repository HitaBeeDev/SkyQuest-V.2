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
        speed={200}
      >
        <SwiperSlide>
          <div className="bg-blue-100 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="bg-blue-300 h-72 p-10 m-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                voluptatibus quo corporis incidunt obcaecati fugit ex vel ut
                voluptatem beatae culpa quis neque iste, tenetur quod natus
                possimus voluptates assumenda?
              </div>

              <div>PARIS</div>
            </div>

            <icon className="text-red-500 group-hover:text-blue-400 w-5 h-5" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarouselSlider;

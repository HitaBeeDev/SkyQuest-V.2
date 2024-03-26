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
          <div className="bg-blue-100 flex justify-center items-center">
            <div className="bg-blue-200 w-1/2 h-72">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptatibus quo corporis incidunt obcaecati fugit ex vel ut
              voluptatem beatae culpa quis neque iste, tenetur quod natus
              possimus voluptates assumenda?
            </div>

            <icon />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarouselSlider;

"use client";

import Image from "next/image";
import food1 from "../../../../public/assets/img/food/food1.jpg";
import food2 from "../../../../public/assets/img/food/food2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const Post = () => {
  return (
    <div className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md shadow-inner p-2">
      <div className="w-[30%]">
        <Swiper
          slidesPerView={1}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <Image src={food1} alt="foodImg" className="rounded-md" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={food2} alt="foodImg" className="rounded-md" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

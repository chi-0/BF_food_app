"use client";

import Image from "next/image";
import food1 from "../../../../public/assets/img/food/food1.jpg";
import food2 from "../../../../public/assets/img/food/food2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Post = () => {
  return (
    <div className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md shadow-inner p-3 flex flex-col">
      {/* 유저 */}
      <div className="flex">
        <img
          src="/assets/dummy/user1.jpg"
          className="rounded-[50%] w-[40px] h-[40px] mr-3"
        />
        <div className="flex gap-x-2 mt-1">
          <span className="leading-none">Christiano Ronaldo</span>
          <span className="text-s font-light leading-none">@CR7</span>
        </div>
      </div>

      <div className="pt-1 ml-[50.5px]">
        <div className="flex gap-x-5 flex-wrap gap-y-5">
          {/* 이미지 */}
          <Swiper
            slidesPerView={2}
            spaceBetween={2}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="rounded-md w-[400px]"
          >
            <SwiperSlide>
              <Image src={food1} alt="foodImg" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={food2} alt="foodImg" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={food2} alt="foodImg" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={food2} alt="foodImg" className="rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={food2} alt="foodImg" className="rounded-md" />
            </SwiperSlide>
          </Swiper>

          {/* 게시글 정보 */}
          <div>
            <h4>·가게 명: 재승이네</h4>
            <div className="flex gap-x-2 flex-wrap">
              <h4>·먹은 음식:</h4>
              <div>
                <p>1. 양고기</p>
                <p>2. 돼지고기</p>
                <p>3. 소고기</p>
                <p>4. 물고기</p>
                <p>5. 불고기</p>
              </div>
            </div>
            <p className="text-2xl mt-3">마시쩌용~^^</p>
          </div>
        </div>
      </div>
    </div>
  );
};

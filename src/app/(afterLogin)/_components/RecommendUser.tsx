"use client";

import { MouseEventHandler } from "react";
import { IoMdPersonAdd } from "react-icons/io";

export const RecommendUser = () => {
  const userHandler = () => {
    console.log("페이지이동:");
  };

  const followHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    console.log("팔로우!!@");
  };

  return (
    <div onClick={userHandler} className="flex items-center cursor-pointer p-2">
      <img
        src="/assets/dummy/user1.jpg"
        className="rounded-[50%] w-[40px] h-[40px] mr-3"
      />
      <div className="flex flex-col">
        <span className="text-sm">Christiano Ronaldo</span>
        <span className="text-s font-light">@CR7</span>
      </div>
      <button
        onClickCapture={followHandler}
        className="ml-3 text-point hover:bg-hover text-xl p-2 rounded-[50px]"
      >
        <IoMdPersonAdd />
      </button>
    </div>
  );
};

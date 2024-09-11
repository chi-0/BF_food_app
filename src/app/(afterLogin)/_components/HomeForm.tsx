"use client";

import { ChangeEventHandler, useRef, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdNotes } from "react-icons/md";

export const HomeForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);

  const imageHandler = () => {
    fileRef.current?.click();
  };

  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>("");

  const imageLoad: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md shadow-inner flex gap-x-1 p-3">
      <div>
        <img
          src="/assets/dummy/user1.jpg"
          className="rounded-[50%] w-[40px] h-[40px] mr-3"
        />
      </div>
      <div className="flex-grow flex gap-y-3 flex-col">
        <textarea
          rows={1}
          className="w-[80%] text-xl resize-none focus:outline-none overflow-hidden bg-[transparent] mt-2"
          placeholder="나만의 맛집을 소개해보세요"
        />
        <div>
          <label></label>
          <input type="text" />
          <label></label>
          <input type="text" />
        </div>
        {imageSrc && typeof imageSrc === "string" && (
          <img src={imageSrc} className="w-[100]" />
        )}
        <div className=" flex gap-x-5 text-xl text-point items-center flex-wrap">
          <button type="button" onClick={imageHandler}>
            <AiOutlinePicture />
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={imageLoad}
          />
          <MdNotes />
          <div className="flex-grow flex justify-end">
            <button
              type="submit"
              className="text-sm text-black py-2 px-10 bg-point-s rounded-[50px]"
            >
              게시하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

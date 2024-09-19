"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdNotes } from "react-icons/md";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export const HomeForm = () => {
  const [textH, setTextH] = useState("");
  const [imageSrc, setImageSrc] = useState<Array<string | ArrayBuffer>>([]);
  const [isValid, setIsValid] = useState(false);
  const [foodTextArray, setFoodTextArray] = useState<string[]>([""]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    } // textarea 줄바꿈 조건문
  }, [textH]);

  const foodInputHandler =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newFoodTextArray = [...foodTextArray];
      newFoodTextArray[index] = e.currentTarget.value;
      setFoodTextArray(newFoodTextArray);
    }; // 먹은 음식 value 값 저장 배열 함수

  const addInputHandler = () => {
    setFoodTextArray((prev) => [...prev, ""]);
  }; // input(먹은음식) 추가함수

  const deleteInputHandler = (index: number) => {
    setFoodTextArray((prev) => prev.filter((_el, i) => i !== index));
  }; // input(먹은음식) 삭제함수

  const imageHandler = () => {
    fileRef.current?.click();
  }; // input file 실행시키는 함수

  const heightHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTextH(e.target.value);
  }; // textarea 줄바꿈 함수

  const imageLoad: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files;

    if (file) {
      if (file?.length >= 5) {
        return console.log("사진은 5장까지 등록 가능합니다.");
      }

      const newImageSrc: Array<string | ArrayBuffer> = [];

      Array.from(file).forEach((img) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImageSrc.push(reader.result as string);

          if (newImageSrc.length === file.length) {
            setImageSrc((prev) => [...prev, ...newImageSrc]);
          }
        };

        if (imageSrc.length >= 5) {
          return console.log("사진은 5장까지 등록가능합니다.");
        }

        reader.readAsDataURL(img);
      });
    }
  }; // 로드한 이미지들을 URL로 변환시키는 함수

  const deleteImgHandler = (index: number) => () => {
    setImageSrc((prev) => prev.filter((_arr, i) => i !== index));
  }; // 로드한 이미지 삭제 함수

  const addInfoHandler = () => setIsValid(!isValid); // 추가 정보창 on/off 하는 함수

  return (
    <form className="border-[1px] border-solid border-[rgba(0,0,0,0.1)] rounded-md shadow-inner flex gap-x-1 p-3">
      {/* 유저이미지 */}
      <div>
        <img
          src="/assets/dummy/user1.jpg"
          className="rounded-[50%] w-[40px] h-[40px] mr-3"
        />
      </div>
      <div className="flex-grow flex gap-y-3 flex-col">
        {/* 가게명 입력란 */}
        <div className={"flex flex-col gap-y-2"}>
          <div>
            <label className="text-sm mr-1 leading-[30px]">가게 명: </label>
            <input
              type="text"
              className="focus:outline-none bg-[transparent] border-b border-1 border-black text-sm p-1 max-w-[196px]"
            />
          </div>

          {/* 먹은음식 입력란 */}
          <div className="flex">
            <label className="text-sm mr-1 leading-[30px]">먹은 음식: </label>
            <div className="flex flex-col gap-y-2">
              {foodTextArray.map((text, index) => (
                <div key={index} className="flex">
                  <input
                    type="text"
                    className="focus:outline-none bg-[transparent] border-b border-1 border-black text-sm p-1 max-w-[187px]"
                    onChange={foodInputHandler(index)}
                    value={text}
                  />
                  {index === foodTextArray.length - 1 && (
                    <button
                      className="ml-1 translate-y-[3px]"
                      type="button"
                      onClick={addInputHandler}
                    >
                      <FiPlusCircle />
                    </button>
                  )}
                  {foodTextArray.length > 1 && (
                    <button
                      className="ml-1 translate-y-[3px] text-point"
                      type="button"
                      onClick={() => deleteInputHandler(index)}
                    >
                      <FiMinusCircle />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 게시글 작성란 */}
        <textarea
          onChange={heightHandler}
          ref={textareaRef}
          rows={1}
          className="w-[80%] text-xl resize-none focus:outline-none overflow-hidden bg-[transparent] mt-2"
          placeholder="나만의 맛집을 기록해보세요"
        />

        {/* 로드한 이미지 미리보기 */}
        {imageSrc.length > 0 && (
          <div className="flex gap-x-1">
            {imageSrc.map((src, index) => (
              <div key={index} className="flex items-start">
                <img src={src as string} className="w-[100]" />
                <button
                  className="text-xl"
                  type="button"
                  onClick={deleteImgHandler(index)}
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-x-5 text-xl text-point items-center flex-wrap">
          {/* 사진 추가버튼 */}
          <button type="button" onClick={imageHandler}>
            <AiOutlinePicture />
          </button>

          {/* input file */}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={imageLoad}
          />

          <button type="button" onClick={addInfoHandler}>
            <MdNotes />
          </button>

          {/* 게시하기 버튼 */}
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
